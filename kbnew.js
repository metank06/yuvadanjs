jQuery(function ($) {
    'use strict';

    // Sol taraf: platformun bastığı İngilizce değer (küçük harfe indirilerek eşleşir)
    // Sağ taraf: ekranda görünecek metin
    var MAP = {
        'phone': 'Telefon'
        // İstersen bunları da aç:
        // 'audio': 'Sesli Görüşme',
        // 'video': 'Görüntülü Görüşme',
        // 'chat':  'Yazılı Görüşme'
    };

    // Sadece paket kartlarındaki etiketler
    var SCOPE  = '.appointment-packages';
    var TARGET = '.package-info-utitle-text';

    function translate() {
        $(SCOPE).find(TARGET).each(function () {
            var el = this;
            if (el.dataset.trDone === '1') return;          // idempotency

            var raw = (el.textContent || '').trim();
            var hit = MAP[raw.toLowerCase()];
            if (!hit) return;

            el.textContent = hit;
            el.dataset.trDone = '1';
        });
    }

    translate();

    // Paketler AJAX/sekme ile sonradan gelirse
    var t;
    new MutationObserver(function () {
        clearTimeout(t);
        t = setTimeout(translate, 120);
    }).observe(document.body, { childList: true, subtree: true });
});


jQuery(function ($) {
    'use strict';

    var CFG = {
        // Kartların içinde bulunduğu kapsayıcı
        listSelector: '.packages, .package-list, .appointment-packages',
        // Tek bir paket kartı
        itemSelector: '.package-item',
        // Kredi sayısının yazdığı alan (bulunamazsa kart metninden regex ile çekilir)
        creditSelector: '.package-credit, .package-meta, .credit-amount',
        direction: 'asc'   // 'asc' = düşükten yükseğe, 'desc' = tersi
    };

    // "1.250 Kredi" / "10 kredi" / "3,5 kredi" → sayı
    function parseCredit($item) {
        // 1) data attribute varsa en güvenilir
        var d = $item.attr('data-credit') || $item.find('[data-credit]').first().attr('data-credit');
        if (d != null && d !== '' && !isNaN(parseFloat(d))) return parseFloat(d);

        // 2) kredi alanı ya da kart metninde "kredi" geçen ilk sayı
        var text = $item.find(CFG.creditSelector).text();
        if (!/kredi/i.test(text)) text = $item.text();

        var m = text.match(/([\d.,]+)\s*(?=kredi)/i);
        if (!m) return null;

        var raw = m[1].replace(/\.(?=\d{3}\b)/g, '')  // binlik ayıracı
                      .replace(',', '.');             // ondalık virgül
        var n = parseFloat(raw);
        return isNaN(n) ? null : n;
    }

    function sortPackages() {
        var $list = $(CFG.listSelector).first();
        if (!$list.length) $list = $(CFG.itemSelector).first().parent();
        if (!$list.length) return;

        var $items = $list.children(CFG.itemSelector);
        if ($items.length < 2) return;

        var rows = $items.map(function (i) {
            return { el: this, credit: parseCredit($(this)), i: i };
        }).get();

        rows.sort(function (a, b) {
            // krediyi okunamayanlar en sona, kendi sıralarını koruyarak
            if (a.credit === null && b.credit === null) return a.i - b.i;
            if (a.credit === null) return 1;
            if (b.credit === null) return -1;
            if (a.credit === b.credit) return a.i - b.i;   // stabil
            return CFG.direction === 'desc' ? b.credit - a.credit : a.credit - b.credit;
        });

        // Zaten sıralıysa DOM'a dokunma (gereksiz reflow ve observer tetiklemesi olmasın)
        var changed = rows.some(function (r, idx) { return r.i !== idx; });
        if (!changed) return;

        $list.append($.map(rows, function (r) { return r.el; }));
    }

    sortPackages();

    // Paketler AJAX / sekme değişimi ile sonradan gelirse
    var t;
    new MutationObserver(function () {
        clearTimeout(t);
        t = setTimeout(sortPackages, 120);
    }).observe(document.body, { childList: true, subtree: true });
});


(function () {
    'use strict';

    var CFG = {
        // Paket kartı
        cardSelector: '.package-item, .packages .package-item, [class*="package-item"]',
        // Açıklama alanı (bulunamazsa otomatik tespit devreye girer)
        descSelector: '.package-description, .package-item-description, .package-desc, .package-text, .package-content',
        lines: 4,
        moreText: 'Devamını oku',
        lessText: 'Daha az göster'
    };

    var running = false;

    function lineHeight(el) {
        var cs = getComputedStyle(el);
        var lh = parseFloat(cs.lineHeight);
        if (isNaN(lh)) lh = parseFloat(cs.fontSize) * 1.5;
        return lh;
    }

    function clampHeight(el) {
        var cs = getComputedStyle(el);
        return lineHeight(el) * CFG.lines
             + parseFloat(cs.paddingTop || 0)
             + parseFloat(cs.paddingBottom || 0);
    }

    // Açıklama elementini bul: önce selector, olmazsa en uzun metinli blok
    function findDesc(card) {
        var el = card.querySelector(CFG.descSelector);
        if (el && el.textContent.trim()) return el;

        var best = null, bestLen = 0;
        card.querySelectorAll('p, div, span').forEach(function (n) {
            if (n.classList.contains('pkg-desc')) return;
            if (n.querySelector('a, button, input, img')) return;   // fiyat/buton bloklarını atla
            if (n.children.length > 2) return;                     // kapsayıcıları atla
            var len = (n.textContent || '').trim().length;
            if (len > bestLen && len > 60) { bestLen = len; best = n; }
        });
        return best;
    }

    function setup(desc) {
        desc.classList.add('pkg-desc');

        var max = clampHeight(desc);
        var isOpen = desc.classList.contains('is-open');

        // Ölçüm için geçici olarak serbest bırak
        desc.style.maxHeight = 'none';
        var full = desc.scrollHeight;

        var needsToggle = full > max + 2;
        var btn = desc.nextElementSibling;
        if (!btn || !btn.classList.contains('pkg-desc-toggle')) btn = null;

        if (!needsToggle) {                    // 4 satırı geçmiyorsa dokunma
            desc.classList.remove('is-clamped', 'is-open');
            desc.style.maxHeight = '';
            if (btn) btn.remove();
            return;
        }

        if (!btn) {
            btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'pkg-desc-toggle';
            btn.setAttribute('aria-expanded', 'false');
            btn.textContent = CFG.moreText;
            desc.insertAdjacentElement('afterend', btn);

            btn.addEventListener('click', function () {
                var open = desc.classList.toggle('is-open');
                desc.classList.toggle('is-clamped', !open);
                btn.setAttribute('aria-expanded', open ? 'true' : 'false');
                btn.textContent = open ? CFG.lessText : CFG.moreText;

                if (open) {
                    desc.style.maxHeight = desc.scrollHeight + 'px';
                    desc.addEventListener('transitionend', function done() {
                        desc.removeEventListener('transitionend', done);
                        if (desc.classList.contains('is-open')) desc.style.maxHeight = 'none';
                    });
                } else {
                    desc.style.maxHeight = desc.scrollHeight + 'px';
                    requestAnimationFrame(function () {
                        desc.style.maxHeight = clampHeight(desc) + 'px';
                    });
                }
            });
        }

        if (isOpen) {
            desc.style.maxHeight = 'none';
        } else {
            desc.classList.add('is-clamped');
            desc.style.maxHeight = max + 'px';
        }
    }

    function run() {
        if (running) return;
        running = true;
        try {
            document.querySelectorAll(CFG.cardSelector).forEach(function (card) {
                var desc = findDesc(card);
                if (desc) setup(desc);
            });
        } finally {
            running = false;
        }
    }

    function init() {
        run();

        // Paketler AJAX / sekme ile sonradan gelirse
        var obs = new MutationObserver(function () {
            clearTimeout(init._t);
            init._t = setTimeout(run, 120);
        });
        obs.observe(document.body, { childList: true, subtree: true });

        // Genişlik değişince satır sayısı kayar → yeniden ölç
        window.addEventListener('resize', function () {
            clearTimeout(init._r);
            init._r = setTimeout(run, 200);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();


$(document).ready(function () {

if(window.location.pathname == '/tr-TR/signup'){
  $('#google-login-link .glogin-text').text('Google ile Kaydol');
  }

if(window.location.pathname == '/kredi-satin-al'){

$('.page-title').append('<p>Kredi, yorumcularla görüşmeler için kullanılan bir ödeme birimidir. Global ödeme sistemi Stripe ile güvenle alışveriş yapabilirsiniz.</p>');

$('.item-excerpt').each(function() {
    var text = $(this).text().trim();
    var words = text.split(" ");
    if (words.length > 0) {
      words[0] = '<span>' + words[0] + '</span>';
      var newText = words.join(" ");
      $(this).html(newText);
    }
  });
  

     }

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
   if(mutation.type == 'childList' && mutation.addedNodes[0] == document.querySelector('#message-service-request')){

$("<span>Bir seferde en fazla 5 dosya yüklenebilir.<br>Her Dosya en fazla 10MB toplamda 50MB olabilir</span>").insertBefore(".form-buttons");
$('.service-tab-content .profile-form').prepend('<div class="prf-title">Yorumunuz Size Yazılı Olarak İletilecektir</div>');
 
   }


  });
});


mutationObserver.observe(document.documentElement, {
  attributes: true,
childList:true,
    subtree: true
});
});


$(document).ready(function(){


$('.wrapper').prepend('<div class="head-band"><a href="https://astrobahcem.com"><p class="head-band-p">Astrobahçem açıldı! Hemen tıkla, astroloji dünyasına adım at!</p></a></div>');


if (window.location.pathname === '/uzmanlar') {
    $(window).on('resize load', function () {
        if ($(window).width() < 767) {
            $('.service-icon span').css('display', 'none');
        } else {
            $('.service-icon span').css('display', '');
        }
    });
}

$("#acdiv").text("Hemen Ara / Mesaj At");
$(".user-menu .credit .clock i").removeClass("i-time "); 
$(".user-menu .credit .clock i").addClass("far fa-coins");

if(window.location.pathname == '/uzmanlar/fal-gpt'){
$('#service-message > .service-info-text').text('Merhaba ben Fal GPT, bana kahve fincanının fotoğraflarını gönderebilir ve günlük hediye kahve falını alabilirsin. Bekliyorum!');

$(document).ajaxComplete(function(event, xhr, settings) {
                if (settings.url === '/message?a=328&st=4') {
                    // İçeriği yükledikten sonra belirli alanı kaldır
                    var formfield = $('#message-service-request > .service-tab-content > .profile-form > .profile-field').get(3);
$(formfield).hide();
                }
            });


}

});


$(document).ready(function(){
var urlParams = new URLSearchParams(window.location.search);
if(urlParams.get('filterByService') == 'video'){
 $('.agents .item').hide();
$('.agents .item').find(".active[rel='service-video']").parents('.item').show();
        };

if(urlParams.get('filterByService') == 'phone'){
 $('.agents .item').hide();
$('.agents .item').find(".active[rel='service-phone']").parents('.item').show();
        };

if(urlParams.get('filterByService') == 'message'){
 $('.agents .item').hide();
$('.agents .item').find(".active[rel='service-message']").parents('.item').show();
        };

});


$(document).ready(function() { 
document.querySelectorAll('.item').forEach((it)=>{
var div = $('> .item-c > .profile-review-stars', it);
   var link = $('> .item-c > .item-title', it);
var image = $('> .item-c > .item-image', it);
    var price = $('> .item-c > .agent-card-list-price', it);
var status= $('> .item-c > .status-icon', it);
if(div.length){
$(div).prepend($(price));
    $(div).prepend($(link));
    $(image).append($(div));
$(link).append($(status));
}else {
$(image).append($(link));
$(link).append($(status));
$(link).append($(price));
}

});

$('.status-icon i').remove();
$('<span> Kredi</span>').appendTo('.agent-card-list-price-cre');
$('.txt-c a.more').text('Tüm Yorumcuları Keşfet');
$('.agents .container .section-head h2').text('Yorumcular');
$('.agent-status').prepend('<div class="container flex new-container"></div>');
$('button#button-addon3').text('TELEFON EKLE');
$('.new-container').prepend($('.profile-left'), $('.profile-right'));
if(isAgentDetail && isAgentDetail == true && $('.agent-header').children().hasClass('profile-review-stars')  ){
function appDiv(){
     $('.profile-review-stars.pv .i-star').append('<i class="fas fa-star" aria-hidden="true"></i>');
}

function appDivOpacity(){
     $('.profile-review-stars.pv .i-star').append('<i style="opacity:0.4" class="fas fa-star" aria-hidden="true"></i>');
}


}


$('.login-btn').text('Giriş Yap');
$('.signup-btn').text('Kayıt Ol');
$('#user-reviews').insertAfter('.new-container');
$('#apdiv').insertAfter('.new-container');
$('.profile-categories').insertAfter($('.profile-list'));
$('<h2 class="profile-content-title" style="font-size: 36px;font-weight: 600;width: 100%;text-align: center;color:#000;margin: 80px 0 60px;">Randevu Al</h2>').insertBefore('.appointment-packages');
var reviewNumber = $('.review').length;
$('<div class="reviewNumberDiv"><span>' + reviewNumber +' yorum</span></div>').insertAfter($('.profile-review-stars.pv'));

var callCount = $('.service-tabs').find("[rel='service-phone']").find('.service-count').text();
var messageCount = $('.service-tabs').find("[rel='service-message']").find('.service-count').text();
$('<div class="callMessageNumberDiv"><span class="messageNumber"><i class="fa fa-envelope-o" aria-hidden="true"></i>'+ messageCount +'</span><span class="callNumber"><i class="fa fa-phone" aria-hidden="true"></i>'+ callCount +'</span></div>').insertBefore($('.profile-left-languages'));

$('.appointment-packages .profile-content-title').hide();
$('.package-meta-value.package-credits').prepend('<i class="fa fa-diamond" aria-hidden="true"></i>');
$('.review .review-date').prepend('<i class="fa fa-calendar" aria-hidden="true"></i>');
$('.inform-when-online').insertAfter($('.profile-buttons'));
$('.can-toggle__label-text').text('Çevrimiçi olduğunda bildir');
$('.profile-content.about .profile-content-title').text('Hakkında');
document.querySelectorAll('.package-item').forEach((it)=>{
    var credit = $('> .package-item-right > .package-meta > .package-meta-price > .package-credits', it);
    $(it).find('.package-title').append($(credit));
    $(it).find('.btn-appointment').append('<i class="fas fa-arrow-right"></i>');
});


if(isCategory && isCategory == true) {
$('.page-header .container .page-excerpt').get(1).remove();
}

if(isAgentDetail && isAgentDetail == true) {

$('.service-icon').css({'display':'inline-flex','justify-content':'center'})
$('.service-count').attr('style','display:none !important');
document.querySelectorAll('.review').forEach((it)=>{
var div = $('> .review-comment', it);
  if(!div.length){
      $(it).css('display','none');
  }
});
}

});


document.addEventListener("DOMContentLoaded", function(){
$('.page-content .packages')
.append(`<div class="chatgpt-fal-wrapper">
<div class="chatgpt-row"><img class="chatgpt-responsive-767" src="/images/202405/656_480x460.png" alt="" width="480" height="460" /><img class="chatgpt-responsive-1024" src="/images/202405/655_1140x304.png" alt="" width="1140" height="304" />
<div class="chatgpt-content">
<div class="chatgpt-item">
<h2>Her gün bir kahve bakımı<br /> GPT'den hediye!</h2>
<p>Her gün bir kahve bakımı GPT'den hediye! Falbahçem'deki yeni yapay zeka yorumcumuz GPT ile her gün bir kez ücretsiz kahve bakımınızı alın! </p>
</div>
<div class="chatgpt-btn"><a href="/uzmanlar/fal-gpt"><button>Kahve Bakımı Al</button></a></div>
</div>
</div>
</div>`);

});

/*document.addEventListener("DOMContentLoaded", function(){
$('.page-content .packages')
.append(`
<div class="pure-u-1"  style="display: flex; align-items: center; justify-content: center;"><h3>Ödeme sayfasında kartınızı kaydederek işlemlerinizi çok daha hızlı ve kolay hale getirebilirsiniz</h3></div>
<div class="pure-u-1" style="display: flex; align-items: center; justify-content: center;">
  <div class="pure-u-1-2 pure-u-sm-1-2" style="display:flex;justify-content:center;">
    <img src="https://kalpbahcem.com/images/202504/786_505x306.webp" style="width: 100%; max-width: 400px; height: auto;">
  </div>
  <div class="pure-u-1-2 pure-u-sm-1-2" style="display:flex;justify-content:center;">
    <img src="https://kalpbahcem.com/images/202504/787.webp" style="width: 100%; max-width: 400px; height: auto;">
  </div>
</div>
`);*/


document.addEventListener("DOMContentLoaded", function(){
$('.page-content .packages')
.append(`<div class="fal-blog-wp">
<div class="fal-blog-title">
<h3>Merak ettiğiniz rüya yorumlarına bir adım yaklaşmak için blogumuza <a title="Blog" href="https://blog.falbahcem.com/">göz atın!</a></h3>
</div>
<div class="fal-blog-row">
<div class="fal-blog-box">
<div class="fal-blog-box-img"><img src="/images/202406/681_810x405.jpg" alt="" width="810" height="405" /></div>
<div class="fal-blog-box-txt">
<h4>Rüyada Birinden Kaçmak: Anlamı ve Yorumları</h4>
<p>Rüyada birinden kaçmak, en sık rastlanan rüya motiflerinden biridir ve farklı anlamlara yorulabilir...</p>
</div>
<div class="fal-blog-box-btn"><a href="https://blog.falbahcem.com/ruyada-birinden-kacmak-anlami-ve-yorumlari/">Devamını Oku</a><i class="fas fa-arrow-right"></i></div>
</div>
<div class="fal-blog-box">
<div class="fal-blog-box-img"><img src="/images/202406/682_810x405.jpg" alt="" width="810" height="405" /></div>
<div class="fal-blog-box-txt">
<h4>Rüyada Kedi Görmek: Anlamı ve Yorumları</h4>
<p>Rüyada kedi görmek, genellikle çevrenizdeki insanların karakteri, sezgileriniz ve yaşamınızda...</p>
</div>
<div class="fal-blog-box-btn"><a href="https://blog.falbahcem.com/ruyada-kedi-gormek-anlami-ve-yorumlari/">Devamını Oku</a><i class="fas fa-arrow-right"></i></div>
</div>
<div class="fal-blog-box">
<div class="fal-blog-box-img"><img src="/images/202406/683_810x405.jpg" alt="" width="810" height="405" /></div>
<div class="fal-blog-box-txt">
<h4>Rüyada Bebek Doğurmak Ne Anlama Gelir?</h4>
<p>Rüyada bebek doğurmak, oldukça güçlü ve derin anlamlar taşıyan bir rüyadır. Genellikle yeni...</p>
</div>
<div class="fal-blog-box-btn"><a href="https://blog.falbahcem.com/ruyada-bebek-dogurmak-ne-anlama-gelir/">Devamını Oku</a><i class="fas fa-arrow-right"></i></div>
</div>
</div>
</div>`);

});


$(document).ready(function () {
    // Şu anki URL'yi kontrol et
    if (window.location.href.includes("https://kalpbahcem.com/uzmanlar/")) {
        // Tarayıcı boyutuna göre stil uygula
        function applyResponsiveStyles() {
            if ($(window).width() <= 1024) {
                $('.profile-services .service-tabs .always-active a span').attr('style', 'display: block !important;');
            } else {
                $('.profile-services .service-tabs .always-active a span').removeAttr('style');
            }
        }

        // Sayfa yüklendiğinde stil uygula
        applyResponsiveStyles();

        // Tarayıcı yeniden boyutlandırıldığında stil uygula
        $(window).resize(function () {
            applyResponsiveStyles();
        });
    }

 if (window.location.href.includes("https://kalpbahcem.com/uzmanlar/")) {
        // Tarayıcı boyutuna göre stil uygula
        function applyResponsiveStyles() {
            if ($(window).width() <= 1024) {
                $('.service-icon.active.tabActive a span').attr('style', 'display: block !important;');
            } else {
                $('.service-icon.active.tabActive a span').removeAttr('style');
            }
        }

        // Sayfa yüklendiğinde stil uygula
        applyResponsiveStyles();

        // Tarayıcı yeniden boyutlandırıldığında stil uygula
        $(window).resize(function () {
            applyResponsiveStyles();
        });
    }
if (window.location.href.includes("https://kalpbahcem.com/uzmanlar/")) {
        // Tarayıcı boyutuna göre stil uygula
        function applyResponsiveStyles() {
            if ($(window).width() <= 767) {
                $('.service-icon.active a span').attr('style', 'display: block; font-size: 14px; line-height: 20px !important;');
            } else {
                $('.service-icon.active a span').removeAttr('style');
            }
        }

        // Sayfa yüklendiğinde stil uygula
        applyResponsiveStyles();

        // Tarayıcı yeniden boyutlandırıldığında stil uygula
        $(window).resize(function () {
            applyResponsiveStyles();
        });
    }
});


$(document).ready(function () {
    // Şu anki URL'yi kontrol et
    if (window.location.href.includes("https://kalpbahcem.com/uzmanlar/")) {
        // Tarayıcı boyutuna göre stil uygula
        function applyResponsiveStyles() {
            if ($(window).width() <= 991) {
                $('.profile-services .service-tabs .always-active a span').attr('style', 'display: block; font-size: 14px; line-height: 20px !important;');
            } else {
                $('.profile-services .service-tabs .always-active a span').removeAttr('style');
            }
        }

        // Sayfa yüklendiğinde stil uygula
        applyResponsiveStyles();

        // Tarayıcı yeniden boyutlandırıldığında stil uygula
        $(window).resize(function () {
            applyResponsiveStyles();
        });
    }


 if (window.location.href.includes("https://kalpbahcem.com/uzmanlar/")) {
        // Tarayıcı boyutuna göre stil uygula
        function applyResponsiveStyles() {
            if ($(window).width() <= 820) {
                $('.service-icon.active.tabActive a span').attr('style', 'display: block; font-size: 14px; line-height: 20px !important;');
            } else {
                $('.service-icon.active.tabActive a span').removeAttr('style');
            }
        }

        // Sayfa yüklendiğinde stil uygula
        applyResponsiveStyles();

        // Tarayıcı yeniden boyutlandırıldığında stil uygula
        $(window).resize(function () {
            applyResponsiveStyles();
        });
    }

});


$(document).ready(function () {
    // Şu anki URL'yi kontrol et
    if (window.location.href.includes("https://kalpbahcem.com/uzmanlar/")) {
        // Tarayıcı boyutuna göre stil uygula
        function applyResponsiveStyles() {
            if ($(window).width() <= 991) {
                $('.service-icon.active a span').attr('style', 'display: block; font-size: 14px; line-height: 20px !important;');
            } else {
                $('.service-icon.active a span').removeAttr('style');
            }
        }

        // Sayfa yüklendiğinde stil uygula
        applyResponsiveStyles();

        // Tarayıcı yeniden boyutlandırıldığında stil uygula
        $(window).resize(function () {
            applyResponsiveStyles();
        });
    }


 if (window.location.href.includes("https://kalpbahcem.com/uzmanlar/")) {
        // Tarayıcı boyutuna göre stil uygula
        function applyResponsiveStyles() {
            if ($(window).width() <= 820) {
                $('.service-icon.active a span').attr('style', 'display: block; font-size: 14px; line-height: 20px !important;');
            } else {
                $('.service-icon.active a span').removeAttr('style');
            }
        }

        // Sayfa yüklendiğinde stil uygula
        applyResponsiveStyles();

        // Tarayıcı yeniden boyutlandırıldığında stil uygula
        $(window).resize(function () {
            applyResponsiveStyles();
        });
    }

});


$(document).ready(function () {
    $(".item-title").each(function () {
        let content = $(this).html(); 
        let updatedContent = content.replace(/\((.*)\)/, "<br>($1)");
        $(this).html(updatedContent);
    });
});


$(document).ready(function () {
    const slider = $(".pop-slider");
    const cards = $(".pop-slider-card");
    let cardWidth = $(".pop-slider-card").outerWidth(true); // Kart genişliği (margin dahil)
    const totalCards = cards.length;
    let currentIndex = 0;
    let visibleCards = getVisibleCards(); // Başlangıçta görünmesi gereken kart sayısını al

    // Otomatik kaydırma fonksiyonu
    function autoSlide() {
        currentIndex++;
        if (currentIndex > totalCards - visibleCards) {
            currentIndex = 0; // Döngüye gir
        }
        slider.css("transform", `translateX(-${currentIndex * cardWidth}px)`);
    }

    let autoSlideInterval = setInterval(autoSlide, 3000); // 3 saniyede bir kaydır

    // Slider kontrol tuşları
    $(".next").click(function () {
        clearInterval(autoSlideInterval);
        currentIndex++;
        if (currentIndex > totalCards - visibleCards) {
            currentIndex = 0;
        }
        slider.css("transform", `translateX(-${currentIndex * cardWidth}px)`);
        autoSlideInterval = setInterval(autoSlide, 3000);
    });

    $(".prev").click(function () {
        clearInterval(autoSlideInterval);
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalCards - visibleCards;
        }
        slider.css("transform", `translateX(-${currentIndex * cardWidth}px)`);
        autoSlideInterval = setInterval(autoSlide, 3000);
    });

    // Ekran boyutuna göre görünmesi gereken kart sayısını belirleme
    function getVisibleCards() {
        return $(window).width() <= 767 ? 1 : 4;
        return $(window).width() <=991 ? 2 : 4;
        return $(window).width() <=1024 ? 3 : 4;
    }

    // Sayfa yeniden boyutlandırıldığında ayarlamaları yap
    $(window).resize(function () {
        visibleCards = getVisibleCards(); // Yeni görünmesi gereken kart sayısını al
        cardWidth = $(".pop-slider-card").outerWidth(true); // Yeni kart genişliğini al
        currentIndex = 0; // Baştan başlat
        slider.css("transform", `translateX(0px)`);
    });
});


$(document).ready(function () {
  $('.user-menu .profile-link').append('<p>Profil</p>');
  $('.user-menu .logout').append('<p>Çıkış</p>');
  $('.user-menu .instantmessaging').append('<p>Anlık Mesajlar</p>');
  $('.user-menu .messages').append('<p>Gelen Mesajlar</p>');
  $('.user-menu .credit').append('<p>Kredilerim</p>');
   
});


/* [KB-KALPBAHCEM:BEGIN] */
(function () {
var html = document.documentElement;
html.classList.add('kb-kalpbahcem');
try {
var kbLogo = document.createElement('img');
kbLogo.className = 'kb-loader-logo';
kbLogo.src = '/images/logo.png';
kbLogo.alt = '';
kbLogo.setAttribute('aria-hidden', 'true');
kbLogo.style.display = 'none';
html.appendChild(kbLogo);
} catch (e) {}
function kbReveal() {
requestAnimationFrame(function () {
requestAnimationFrame(function () { html.classList.add('kb-ready'); });
});
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', kbReveal);
else kbReveal();
window.addEventListener('load', function () { setTimeout(kbReveal, 300); });
function detectPageClass(path) {
try {
if (typeof isAgentDetail !== 'undefined' && isAgentDetail) return 'kb-page-uzman-detay';
if (typeof isCategory !== 'undefined' && isCategory) return 'kb-page-kategori-detay';
} catch (e) {  }
var p = (path || '/').replace(/^\/[a-z]{2}-[A-Z]{2}(?=\/|$)/, '').replace(/\/+$/, '');
if (p === '' || p === '/') return 'kb-page-home';
var m;
if ((m = p.match(/^\/s\/([^\/]+)$/))) return 'kb-page-cms-' + m[1].replace(/[^a-z0-9-]/gi, '');
if (p === '/uzmanlar') return 'kb-page-uzmanlar';
if (p === '/signup') return 'kb-page-signup';
if (p === '/login') return 'kb-page-login';
if (p === '/blog') return 'kb-page-blog';
if (p.match(/^\/blog\/[^\/]+$/)) return 'kb-page-blog-detay';
var seg = p.split('/')[1] || '';
return seg ? 'kb-page-' + seg.replace(/[^a-z0-9-]/gi, '') : 'kb-page-unknown';
}
function applyPageClass() {
var b = document.body; if (!b) return;
var cls = detectPageClass(location.pathname);
b.classList.add(cls);
try { b.setAttribute('data-kb-page', cls); } catch (e) {}
}
if (document.body) applyPageClass();
else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyPageClass, { once: true });
else setTimeout(applyPageClass, 0);
function injectFont(href) {
if (document.querySelector('link[data-kb-font="' + href + '"]')) return;
var l = document.createElement('link');
l.rel = 'stylesheet'; l.href = href; l.setAttribute('data-kb-font', href);
document.head.appendChild(l);
}
injectFont('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
})();
(function () {
function isHome() { return document.body && document.body.classList.contains('kb-page-home'); }
function dec() {
if (!isHome()) return;
var cards = document.querySelectorAll('.agents .item-c');
if (!cards.length) return;
Array.prototype.forEach.call(cards, function (card) {
var info = card.querySelector('.item-image .profile-review-stars');
var action = card.querySelector('.item-action');
if (!info || !action) return;
var price = card.querySelector('.agent-card-list-price');
if (price && price.parentElement !== action) action.insertBefore(price, action.firstChild);
Array.prototype.forEach.call(card.querySelectorAll('.profile-categories .pcategory-btn'), function (b) {
if (/talep/i.test(b.textContent || '')) b.classList.add('kb-hide');
});
if (!info.querySelector('.kb-role')) {
var unvan = card.querySelector(':scope > .unvan-title');
if (unvan && (unvan.textContent || '').trim()) { unvan.classList.add('kb-role'); info.appendChild(unvan); }
else {
var cats = card.querySelectorAll('.profile-categories .pcategory-btn'), fc = null;
for (var i = 0; i < cats.length; i++) { if (!/talep/i.test(cats[i].textContent || '')) { fc = cats[i]; break; } }
if (fc) { fc.classList.remove('kb-hide'); fc.classList.add('kb-role'); info.appendChild(fc); }
}
}
});
var list = cards[0].closest('.list'); if (list) list.classList.add('kb-exp-grid');
var sh = document.querySelector('.agents .section-head');
if (sh && !sh.querySelector('.kb-yh-title')) {
sh.innerHTML = '<span class="kb-yh-badge">✦ YORUMCULAR</span>'
+ '<div class="kb-yh-title">Senin için en <span>doğru yorumcular</span></div>'
+ '<p class="kb-yh-sub">Gerçek kullanıcı deneyimlerine göre öne çıkan uzmanlarımız</p>';
}
}
function extras() {
if (!isHome()) return;
var more = document.querySelector('.agents a.btn.more');
if (more && !more.querySelector('.kb-arrow')) {
more.insertAdjacentHTML('beforeend', '<svg class="kb-arrow" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11h11.2l-4.6-4.6L13 5l7 7-7 7-1.4-1.4 4.6-4.6H5z"/></svg>');
}
Array.prototype.forEach.call(document.querySelectorAll('.kb-home-hero .cat-card'), function (card) {
var iEl = card.querySelector('.cat-ic i');
if (iEl && /circle-question/i.test(iEl.className)) iEl.className = 'fas fa-question';
if (card.getAttribute('data-kbcc')) return;
var ic = card.querySelector('.cat-ic'), h3 = card.querySelector('.cat-h3'), sub = card.querySelector('.cat-sub'), arrow = card.querySelector('.cat-arrow'), body = card.querySelector('.cat-body');
if (!ic || !h3 || !sub || !arrow) return;
card.setAttribute('data-kbcc', '1');
var top = document.createElement('span'); top.className = 'kb-cc-top'; top.appendChild(ic); top.appendChild(h3);
var bot = document.createElement('span'); bot.className = 'kb-cc-bot'; bot.appendChild(sub); bot.appendChild(arrow);
card.appendChild(top); card.appendChild(bot);
if (body) body.remove();
});
var cbBody = document.querySelector('.kb-home-credit .cb-body');
if (cbBody && !cbBody.querySelector('.cb-proof')) {
var p = document.createElement('div'); p.className = 'cb-proof';
p.innerHTML = '<div class="ap-stack"><img src="/images/202606/exp-lena.png" alt=""><img src="/images/202606/rev-masal.png" alt=""><img src="/images/202606/exp-ece.png" alt=""></div>'
+ '<span>Kullanıcıların çoğu kredi aldıktan sonra tekrar geliyor</span>';
cbBody.appendChild(p);
}
}
function boot() {
dec(); extras();
try { var mo = new MutationObserver(function () { dec(); }); var t = document.querySelector('.agents'); if (t) mo.observe(t, { childList: true, subtree: true }); } catch (e) {}
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
window.addEventListener('load', function () { dec(); extras(); setTimeout(function () { dec(); extras(); }, 700); setTimeout(function () { dec(); extras(); }, 1800); setTimeout(dec, 3500); });
})();
(function () {
function onKredi() { return document.body && document.body.classList.contains('kb-page-kredi-satin-al'); }
var IMG = '/images/202607/';
var SHOW = 5;   
var POS = [
{ icon: '989_129x90', t: 'purple', badge: 'GİRİŞ PAKETİ',         bonus: 0 },
{ icon: '990_127x91', t: 'blue',   badge: 'POPÜLER',              bonus: 1000 },
{ icon: '991_142x104',   t: 'purple', badge: 'EN ÇOK TERCİH EDİLEN', bonus: 3000, featured: true },
{ icon: '992_136x92',       t: 'orange', badge: 'EN AVANTAJLI',         bonus: 6000 },
{ icon: '993_140x93',   t: 'pink',   badge: 'EN YÜKSEK BONUS',      bonus: 12000 }
];
function trGroup(n) { return String(Math.round(parseFloat(n) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function injectFonts() {
if (document.querySelector('link[data-kb-font="kredi"]')) return;
var l = document.createElement('link');
l.rel = 'stylesheet';
l.href = 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;500;600;700;800&display=swap';
l.setAttribute('data-kb-font', 'kredi');
document.head.appendChild(l);
}
function decorate(item, idx) {
item.style.order = idx;                       
if (item.dataset.kbPkg === '1') return;
item.dataset.kbPkg = '1';
var cfg = idx < SHOW ? POS[idx] : null;       
item.classList.add('kb-pkg', 'kb-t-' + (cfg ? cfg.t : 'purple'));
if (cfg && cfg.featured) item.classList.add('kb-featured');
if (!cfg) item.classList.add('kb-pkg-std', 'kb-pkg-extra', 'kb-pkg-hidden');  
var content = item.querySelector('.item-content') || item;
var title   = item.querySelector('.item-title');
var excerpt = item.querySelector('.item-excerpt');
var action  = item.querySelector('.item-action');
var info    = item.querySelector('.item-info');
if (info) info.style.display = 'none';
var ex = excerpt ? (excerpt.textContent || '').trim() : '';
var featTxt = ex;                            
var creditsTxt = '';
var m = ex.match(/([\d.,]+)\s*[Kk]redi/);
if (m) creditsTxt = trGroup(m[1].replace(/[.,]/g, '')) + ' Kredi';
if (cfg) {
if (cfg.featured) {
if (!item.querySelector('.kb-top-badge')) {
var tb = document.createElement('span');
tb.className = 'kb-top-badge';
tb.innerHTML = '<i class="fas fa-star"></i> ' + cfg.badge;
item.insertBefore(tb, item.firstChild);
}
} else if (!content.querySelector('.kb-badge')) {
var b = document.createElement('span');
b.className = 'kb-badge';
b.textContent = cfg.badge;
content.appendChild(b);
}
if (!content.querySelector('.kb-ic')) {
var ic = document.createElement('div');
ic.className = 'kb-ic';
ic.innerHTML = '<img src="' + IMG + cfg.icon + '.png" alt="">';
content.appendChild(ic);
}
}
if (creditsTxt && !content.querySelector('.kb-credits')) {
var cr = document.createElement('div');
cr.className = 'kb-credits';
cr.textContent = creditsTxt;
content.appendChild(cr);
}
if (cfg && !content.querySelector('.kb-bonus-slot')) {
var bs = document.createElement('div');
bs.className = 'kb-bonus-slot';
if (cfg.bonus > 0) bs.innerHTML = '<span class="kb-bonus"><i class="fas fa-coins"></i> + ' + trGroup(cfg.bonus) + ' Bonus Kredi</span>';
content.appendChild(bs);
}
if (excerpt) {
excerpt.classList.add('kb-feature');
excerpt.removeAttribute('style');
excerpt.innerHTML = '<i class="fas fa-phone-alt"></i><span>' + featTxt + '</span>';
}
if (!content.querySelector('.kb-price')) {
var pw = document.createElement('div');
pw.className = 'kb-price';
pw.textContent = trGroup(item.getAttribute('data-package-price')) + ' TL';
content.appendChild(pw);
}
if (action && action.dataset.kbBtn !== '1') {
action.dataset.kbBtn = '1';
var link = action.querySelector('a, button');
if (link) {
link.classList.add('kb-buy');
link.innerHTML = 'Satın Al <span class="arrow">→</span>';
action.innerHTML = '';        
action.appendChild(link);
}
}
}
function injectHero() {
var pkgs = document.querySelector('.packages');
if (!pkgs || document.querySelector('.kb-hero')) return;
var h = document.createElement('div');
h.className = 'kb-hero';
h.innerHTML =
'<h1><span class="spk">✦</span> Ne kadar devam etmek istiyorsun? <span class="spk">✦</span></h1>' +
'<p class="sub">Kredi al, istediğin falcıyla kullan.</p>' +
'<span class="kb-hero-pill"><i class="fas fa-users"></i> Kullanıcıların çoğu <strong>en çok tercih edilen</strong> paketi seçiyor.</span>';
pkgs.parentNode.insertBefore(h, pkgs);
}
function injectSeeMore(total) {
var list = document.querySelector('.packages .list.flex');
if (!list || total <= SHOW || document.querySelector('.kb-seemore-wrap')) return;
var wrap = document.createElement('div');
wrap.className = 'kb-seemore-wrap';
var btn = document.createElement('button');
btn.type = 'button';
btn.className = 'kb-seemore';
btn.innerHTML = 'Tümünü Gör <span class="caret">▾</span>';
btn.addEventListener('click', function () {
Array.prototype.forEach.call(document.querySelectorAll('.packages .item.kb-pkg-extra'), function (el) { el.classList.remove('kb-pkg-hidden'); });
wrap.remove();
});
wrap.appendChild(btn);
list.parentNode.insertBefore(wrap, list.nextSibling);
}
function injectTrust() {
var pkgs = document.querySelector('.packages');
if (!pkgs || document.querySelector('.kb-trust')) return;
var rows = [
['p', 'fa-shield-alt', '%100 Güvenli Ödeme',         '256 bit SSL ile korunur'],
['p', 'fa-bolt',       'Anında Kredi Yükleme',       'Ödeme sonrası anında hesabınızda'],
['g', 'fa-coins',      'Bonus Kredi Avantajı',       'Daha fazla kredi, daha fazla fal'],
['p', 'fa-medal',      'Tüm Fal Türlerinde Geçerli', 'Tarot, kahve falı, astroloji ve daha fazlası']
];
var t = document.createElement('div');
t.className = 'kb-trust';
t.innerHTML = rows.map(function (r) {
return '<div class="kb-trust-item"><span class="tic ' + r[0] + '"><i class="fas ' + r[1] + '"></i></span>' +
'<div><div class="t1">' + r[2] + '</div><div class="t2">' + r[3] + '</div></div></div>';
}).join('');
pkgs.parentNode.appendChild(t);
}
function run() {
if (!onKredi()) return;
injectFonts();
injectHero();
var items = document.querySelectorAll('.packages .item.gtm-package-item');
Array.prototype.forEach.call(items, decorate);
injectSeeMore(items.length);
injectTrust();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
else run();
window.addEventListener('load', function () { run(); setTimeout(run, 400); setTimeout(run, 1200); });
})();
(function () {
function onPage() { return document.body && document.body.classList.contains('kb-page-cms-nasil-calisir'); }
var STEP_KREDI = { ic: '986', h: 'Kredi Al', p: 'Kredi paketlerinden birini seç ve hesabına yükle.' };
var METHODS = [
{
theme: 'p', icon: 'fas fa-phone-alt',
title: 'Anında Fal Nasıl Çalışır?', sub: 'Sadece 3 adımda anında bağlan.',
pill: '<i class="fas fa-star"></i> En çok tercih edilen yöntem',
steps: [
STEP_KREDI,
{ ic: '984', h: 'Falcını Seç', p: 'Online yorumcular arasından sana uygun falcıyı seç.' },
{ ic: '985', h: 'Hemen Görüş', p: 'Tek tıkla falcını ara, konuşmaya anında başla.' }
]
},
{
theme: 'pk', icon: 'fas fa-pen-nib',
title: 'Yazılı Fal Nasıl Çalışır?', sub: 'Sorunu yaz, yazılı yorumunu al.',
pill: '<i class="far fa-clock"></i> Dilediğin an, dilediğin yerden',
steps: [
STEP_KREDI,
{ ic: '984', h: 'Falcını Seç', p: 'Yazılı fal veren yorumcular arasından seç.' },
{ ic: '985', h: 'Sorunu Yaz', p: 'Merak ettiğini yaz gönder; yorumun yazılı olarak sana ulaşsın.' }
]
},
{
theme: 'b', icon: 'far fa-calendar-check',
title: 'Randevulu Fal Nasıl Çalışır?', sub: 'Uygun zamanı seç, planlı görüş.',
pill: '<i class="far fa-calendar-alt"></i> Sana en uygun gün ve saatte',
steps: [
STEP_KREDI,
{ ic: '984', h: 'Falcını Seç', p: 'Randevu ile çalışan yorumcular arasından seç.' },
{ ic: '985', h: 'Randevunu Belirle', p: 'Uygun gün ve saati belirle, görüşmeni planla.' }
]
}
];
var SECURE = '<span class="sn-ic"><i class="fas fa-shield-alt"></i></span><div>'
+ '<div class="s1">Tüm görüşmelerimiz gizli ve güvenlidir.</div>'
+ '<div class="s2">Kişisel bilgileriniz 256-bit SSL ile korunur.</div></div>';
function stepHtml(s, n) {
return '<div class="step"><div class="snum">' + n + '</div>'
+ '<div class="step-ic"><img src="/images/202607/' + s.ic + '.png" alt=""></div>'
+ '<h4>' + s.h + '</h4><p>' + s.p + '</p></div>';
}
function cardHtml(m) {
var steps = '';
for (var i = 0; i < m.steps.length; i++) {
steps += stepHtml(m.steps[i], i + 1);
if (i < m.steps.length - 1) steps += '<span class="step-arrow"><i class="fas fa-arrow-right"></i></span>';
}
return '<div class="hiw-head"><span class="hh-ic"><i class="' + m.icon + '"></i></span>'
+ '<div><h3>' + m.title + '</h3><div class="hh-sub">' + m.sub + '</div></div>'
+ '<span class="hh-pill">' + m.pill + '</span></div>'
+ '<div class="steps">' + steps + '</div>'
+ '<div class="secure-note">' + SECURE + '</div>';
}
function run() {
if (!onPage()) return;
var wrap = document.querySelector('.kb-nc');
if (!wrap || wrap.dataset.kbNc === '1') return;
var cards = Array.prototype.slice.call(wrap.querySelectorAll('.method-select .ms-card'));
var hiw = wrap.querySelector('.hiw-card');
if (cards.length < 3 || !hiw) return;
wrap.dataset.kbNc = '1';
function select(i) {
for (var k = 0; k < cards.length; k++) {
var c = cards[k], on = k === i;
c.classList.toggle('sel', on);
c.classList.remove('kb-th-p', 'kb-th-pk', 'kb-th-b');
if (on) c.classList.add('kb-th-' + METHODS[i].theme);
var chk = c.querySelector('.ms-check');
if (on && !chk) {
var s = document.createElement('span'); s.className = 'ms-check';
s.innerHTML = '<i class="fas fa-check"></i>'; c.insertBefore(s, c.firstChild);
} else if (!on && chk) { chk.remove(); }
}
hiw.className = 'hiw-card kb-th-' + METHODS[i].theme;
hiw.innerHTML = cardHtml(METHODS[i]);
}
for (var i = 0; i < cards.length; i++) {
(function (idx) {
var c = cards[idx];
c.style.cursor = 'pointer';
c.setAttribute('role', 'button');
c.setAttribute('tabindex', '0');
c.setAttribute('aria-label', (METHODS[idx] && METHODS[idx].title) || ('Yöntem ' + (idx + 1)));
c.addEventListener('click', function () { select(idx); });
c.addEventListener('keydown', function (e) {
if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(idx); }
});
})(i);
}
var initial = 0;
for (var j = 0; j < cards.length; j++) { if (cards[j].classList.contains('sel')) { initial = j; break; } }
select(initial);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
else run();
window.addEventListener('load', function () { run(); setTimeout(run, 600); setTimeout(run, 1600); });
})();
(function () {
if (!(typeof isAgentDetail !== 'undefined' && isAgentDetail)) return;
var H = document.documentElement;
H.classList.add('kb-agent-detail');
function $(s, r) { return (r || document).querySelector(s); }
function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
function mv(el, parent) { if (el && parent) parent.appendChild(el); }
function catIcon(name) {
var n = (name || '').toLocaleLowerCase('tr');
if (/kahve/.test(n)) return 'fas fa-mug-hot';
if (/tarot|kart|katina/.test(n)) return 'fas fa-clone';
if (/aşk|ask|ilişk|ilisk|sevgi|gönül|gonul/.test(n)) return 'fas fa-heart';
if (/yıldız|yildiz|astro|burç|burc|gezegen/.test(n)) return 'fas fa-star';
if (/enerji|spirit|şifa|sifa|çakra|cakra|reiki/.test(n)) return 'fas fa-bolt';
if (/durugör|durugor|medyum|sezgi|görü|goru/.test(n)) return 'fas fa-eye';
if (/rüya|ruya/.test(n)) return 'fas fa-moon';
if (/el fal|avuç|avuc/.test(n)) return 'fas fa-hand-sparkles';
if (/numero|sayı|sayi/.test(n)) return 'fas fa-calculator';
return 'fas fa-gem';
}
function placePackages() {
var mount = $('#kb-pkg .kb-pkg-mount');
if (!mount) return false;
var aps = $$('.appointment-packages');
if (!aps.length) return false;
aps.sort(function (a, b) { return b.querySelectorAll('.package-item').length - a.querySelectorAll('.package-item').length; });
var ap = aps[0];
if (ap.parentNode !== mount) mount.appendChild(ap);
ap.classList.add('kb-pkg-native');
var h2 = ap.querySelector('.profile-content-title, h2'); if (h2) h2.style.display = 'none';
aps.slice(1).forEach(function (x) { if (x !== ap && !x.querySelector('.package-item')) x.remove(); });
$$('.package-item .package-button a', ap).forEach(function (a) {
if (a.getAttribute('data-kb-lbl')) return;
a.setAttribute('data-kb-lbl', '1');
if ((a.textContent || '').replace(/\s+/g, '').length === 0) {
a.insertBefore(document.createTextNode('Randevu Al '), a.firstChild);
}
});
tidyPkgSections();
return ap.querySelectorAll('.package-item').length > 0;
}
function placeMsg() {
var mount = $('#kb-pkg .kb-msg-mount');
if (!mount) return false;
var act = document.getElementById('actdiv');
if (!act) return false;
if (act.parentNode !== mount) mount.appendChild(act);
setupServiceTabs(act);
tidyPkgSections();
return !!act.querySelector('.service-tab-content');
}
function setupServiceTabs(act) {
if (act.getAttribute('data-kb-svc')) return;
var tabs = $$('.service-icon', act);
var contents = $$('.service-tab-content', act);
if (!tabs.length || !contents.length) return;
act.setAttribute('data-kb-svc', '1');
function show(rel) {
contents.forEach(function (c) { c.style.display = (c.id === rel) ? 'block' : 'none'; });
tabs.forEach(function (t) { t.classList.toggle('kb-svc-active', t.getAttribute('rel') === rel); });
}
tabs.forEach(function (t) {
var rel = t.getAttribute('rel');
var a = t.querySelector('a'); if (a) a.removeAttribute('href');
t.addEventListener('click', function (e) { e.preventDefault(); if (rel) show(rel); });
});
var msgTab = tabs.filter(function (t) { return t.getAttribute('rel') === 'service-message'; })[0];
var defRel = msgTab ? 'service-message' : (tabs[0].getAttribute('rel') || (contents[0] && contents[0].id));
if (defRel) show(defRel);
}
function tidyPkgSections() {
var msgMount = $('#kb-pkg .kb-msg-mount'), pkgMount = $('#kb-pkg .kb-pkg-mount');
var msgSec = $('#kb-pkg .kb-msg-sec'), aptSec = $('#kb-pkg .kb-apt-sec');
if (msgSec) msgSec.style.display = (msgMount && msgMount.querySelector('.service-tab-content, .category-item')) ? '' : 'none';
if (aptSec) aptSec.style.display = (pkgMount && pkgMount.querySelector('.package-item')) ? '' : 'none';
}
var PANEL_IDS = ['#kb-about', '#kb-pkg', '#kb-rev'];
function showPanel(id, doScroll) {
PANEL_IDS.forEach(function (pid) { var p = document.querySelector(pid); if (p) p.style.display = (pid === id) ? '' : 'none'; });
$$('.kb-tabs .kb-tab').forEach(function (x) { x.classList.toggle('active', x.getAttribute('href') === id); });
if (doScroll) { var t = $('.kb-tabs'); if (t) { var tb = t.getBoundingClientRect(); window.scrollTo({ top: tb.top + window.pageYOffset - 90, behavior: 'smooth' }); } }
}
function goService(rel) {
showPanel('#kb-pkg', true);
var icon = $('.service-icon[rel="' + rel + '"]');
if (icon) icon.click();
var mount = $('#kb-pkg .kb-msg-mount');
if (mount) setTimeout(function () { mount.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 80);
}
function buildCallButtons() {
var callCard = $('.call-card'); if (!callCard) return;
var apptA = $('.profile-appointment-btn a', callCard) || $('.profile-appointment-btn a');
var rels = $$('.service-icon').map(function (t) { return t.getAttribute('rel'); });
var hasPhone = rels.indexOf('service-phone') > -1;
var hasVideo = rels.indexOf('service-video') > -1;
var hasMsg = rels.indexOf('service-message') > -1;
var hasAppt = !!apptA || $$('.package-item').length > 0;
var sig = [hasPhone, hasVideo, hasMsg, hasAppt].join(',');
if (callCard.getAttribute('data-kb-btns') === sig) return;
callCard.setAttribute('data-kb-btns', sig);
var old = $('.cc-actions', callCard); if (old) old.remove();
var box = document.createElement('div'); box.className = 'cc-actions';
var defs = [];
if (hasPhone) defs.push({ label: 'Hemen Ara', icon: 'fas fa-phone', rel: 'service-phone' });
if (hasVideo) defs.push({ label: 'Görüntülü Konuş', icon: 'fas fa-video', rel: 'service-video' });
if (hasMsg) defs.push({ label: 'Mesaj Gönder', icon: 'far fa-envelope', rel: 'service-message' });
if (hasAppt) defs.push({ label: 'Randevu Al', icon: 'far fa-calendar-check', appt: true });
defs.forEach(function (d, i) {
var a = document.createElement('a'); a.href = '#';
a.className = 'cc-btn ' + (i === 0 ? 'cc-primary' : 'cc-outline');
a.innerHTML = '<i class="' + d.icon + '"></i> ' + d.label;
a.addEventListener('click', function (e) {
e.preventDefault();
if (d.appt) { if (apptA) apptA.click(); else showPanel('#kb-pkg', true); }
else goService(d.rel);
});
box.appendChild(a);
});
var lock = $('.cc-lock', callCard);
if (lock) callCard.insertBefore(box, lock); else callCard.appendChild(box);
}
function decorateOneReview(r) {
var head = r.querySelector('.review-head');
if (!head || head.querySelector('.kb-rev-av')) return;
var av = document.createElement('span'); av.className = 'kb-rev-av'; av.innerHTML = '<i class="fas fa-user"></i>';
var col = document.createElement('div'); col.className = 'kb-rev-col';
var nm = document.createElement('div'); nm.className = 'kb-rev-name'; nm.textContent = 'Danışan';
col.appendChild(nm);
Array.prototype.slice.call(head.childNodes).forEach(function (n) { col.appendChild(n); });
head.appendChild(av); head.appendChild(col);
}
function decorateReviewCards() {
var revWrap = $('#kb-rev .reviews'); if (!revWrap) return;
$$('.review', revWrap).forEach(decorateOneReview);
}
function openReviewsModal() {
var revWrap = $('#kb-rev .reviews'); if (!revWrap) return;
var ov = $('.kb-rev-modal-overlay');
if (!ov) {
ov = document.createElement('div'); ov.className = 'kb-rev-modal-overlay';
ov.innerHTML = '<div class="kb-rev-modal">'
+ '<div class="kb-rev-modal-head"><h3><span class="sp">✦</span> Danışan Yorumları</h3>'
+ '<button type="button" class="kb-rev-modal-close" aria-label="Kapat"><i class="fas fa-times"></i></button></div>'
+ '<div class="kb-rev-modal-body"><div class="kb-rev-modal-grid"></div></div></div>';
document.body.appendChild(ov);
var close = function () { ov.classList.remove('open'); document.body.style.overflow = ''; };
$('.kb-rev-modal-close', ov).addEventListener('click', close);
ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
}
var grid = $('.kb-rev-modal-grid', ov);
document.body.style.overflow = 'hidden';
requestAnimationFrame(function () { ov.classList.add('open'); });
function fillFrom(nodes) {
grid.innerHTML = '';
nodes.forEach(function (n) { var c = n.cloneNode(true); decorateOneReview(c); grid.appendChild(c); });
}
function fallbackLoaded() { fillFrom($$('#kb-rev .reviews .review')); }
if (ov._kbReviews) { fillFrom(ov._kbReviews); return; }
grid.innerHTML = '<div class="kb-rev-loading"><i class="fas fa-spinner fa-spin"></i> Yorumlar yükleniyor…</div>';
var btn = document.getElementById('show-more-review');
var id = btn ? btn.getAttribute('data-id') : null;
var url = id ? location.pathname.replace(/\/+$/, '').replace(/\/[^\/]+$/, '/reviews/' + id) : null;
if (!url) { fallbackLoaded(); return; }
fetch(url, { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (html) {
var tmp = document.createElement('div'); tmp.innerHTML = html;
var revs = Array.prototype.slice.call(tmp.querySelectorAll('.review'));
if (!revs.length) { fallbackLoaded(); return; }
ov._kbReviews = $$('#kb-rev .reviews .review').concat(revs);
fillFrom(ov._kbReviews);
}).catch(fallbackLoaded);
}
function build() {
if (document.querySelector('.kb-uzman')) { placePackages(); placeMsg(); buildCallButtons(); return; }
var top = $('.container.flex.pv.agent-status');
var left = $('.profile-left');
var right = $('.profile-right');
var pageContent = right ? $('.page-content', right) : null;
if (!top || !left || !pageContent) return;
var titleEl0 = $('.profile-title', left);
var h1_0 = titleEl0 ? titleEl0.querySelector('h1') : null;
var name = ((h1_0 ? h1_0.textContent : ((titleEl0 || {}).textContent || '')) || '').trim();
if (!name) return;
var unvan = '';
if (titleEl0) {
var fullT = (titleEl0.textContent || '').replace(/\s+/g, ' ').trim();
var ex = fullT.replace(name, '').trim().replace(/^[\(（]\s*/, '').replace(/\s*[\)）]\s*$/, '').trim();
if (ex && ex.length < 60) unvan = ex;
}
var EXCLUDE_CAT = /talep/i;   
var cats = $$('.profile-categories .pcategory-btn').map(function (b) { return (b.textContent || '').trim(); }).filter(function (t) { return t && !EXCLUDE_CAT.test(t); });
var wrap = document.createElement('div');
wrap.className = 'kb-uzman';
wrap.innerHTML =
'<nav class="kb-bc"><a href="/tr-TR/">Anasayfa</a><span class="sep">›</span>'
+ '<a href="/tr-TR/uzmanlar">Yorumcular</a><span class="sep">›</span><span class="cur">' + name + '</span></nav>'
+ '<div class="prof-header"><div class="ph-main"><div class="ph-photo"></div><div class="ph-id"></div></div>'
+ '<div class="call-card"></div></div>'
+ '<div class="kb-spec-bar"></div>'
+ '<div class="kb-panels"></div>';
top.parentNode.insertBefore(wrap, top);
var phPhoto = $('.ph-photo', wrap), phId = $('.ph-id', wrap),
callCard = $('.call-card', wrap), specBar = $('.kb-spec-bar', wrap), panels = $('.kb-panels', wrap);
mv($('.profile-image', left), phPhoto);
if (!$('.kb-photo-status', phPhoto)) {
var isOnline = !!(top && /\bonline\b/.test(top.className || ''));
var st = document.createElement('span'); st.className = 'kb-photo-status ' + (isOnline ? 'kb-online' : 'kb-offline');
st.title = isOnline ? 'Çevrimiçi' : 'Çevrimdışı';
phPhoto.appendChild(st);
}
mv($('.profile-title', left), phId);
var movedTitle = $('.profile-title', phId);
if (movedTitle) { Array.prototype.slice.call(movedTitle.childNodes).forEach(function (n) { if (n.nodeType === 3) movedTitle.removeChild(n); }); }
var titleH1 = movedTitle ? ($('h1', movedTitle) || movedTitle) : null;
if (titleH1 && !$('.kb-verified', titleH1)) {
var vb = document.createElement('span'); vb.className = 'kb-verified'; vb.title = 'Onaylı Yorumcu';
vb.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.2 14.2l-3.5-3.5 1.4-1.4 2.1 2.1 4.8-4.8 1.4 1.4-6.2 6.2z"/></svg>';
titleH1.appendChild(vb);
}
var rc = $$('.profile-content.comments .review').filter(function (r) { return $('.review-comment', r); }).length;
var rateRow = document.createElement('div'); rateRow.className = 'kb-rate'; phId.appendChild(rateRow);
mv($('.profile-review-stars.pv', left), rateRow);
var rcEl = document.createElement('span'); rcEl.className = 'kb-rc'; rcEl.textContent = '(' + rc + ')'; rateRow.appendChild(rcEl);
var tagText = unvan || cats[0] || '';
if (tagText) { var tag = document.createElement('span'); tag.className = 'kb-spec-tag'; tag.textContent = tagText; phId.appendChild(tag); }
mv($('.profile-excerpt', left), phId);
var lang = (($('.profile-left-languages', left) || {}).textContent || '').trim();
if (lang) { var m = document.createElement('div'); m.className = 'kb-meta'; m.innerHTML = '<span><i class="far fa-comment-dots"></i> ' + lang + '</span><span><i class="far fa-star"></i> ' + rc + ' değerlendirme</span>'; phId.appendChild(m); }
var cch = document.createElement('h3'); cch.textContent = 'Benimle hemen görüşmeye başla'; callCard.appendChild(cch);
mv($('.agent-profile-price', left), callCard);
mv($('.profile-buttons', left), callCard);
var lock = document.createElement('span'); lock.className = 'cc-lock'; lock.innerHTML = '<i class="fas fa-lock"></i> Telefon numaran gizli kalır'; callCard.appendChild(lock);
if (cats.length) {
cats.forEach(function (t) {
var c = document.createElement('span'); c.className = 'kb-cat';
c.innerHTML = '<i class="' + catIcon(t) + '"></i> ' + t;
specBar.appendChild(c);
});
} else { specBar.style.display = 'none'; }
var tabs = document.createElement('div'); tabs.className = 'kb-tabs';
tabs.innerHTML = '<a class="kb-tab" href="#kb-about"><i class="far fa-user"></i> Hakkında</a>'
+ '<a class="kb-tab active" href="#kb-pkg"><i class="far fa-gem"></i> Paketler</a>'
+ '<a class="kb-tab" href="#kb-rev"><i class="far fa-comments"></i> Yorumlar (' + rc + ')</a>';
panels.appendChild(tabs);
var about = $('.profile-content.about', pageContent);
if (about) {
about.id = 'kb-about'; panels.appendChild(about);
if (!$('.kb-about-illu', about)) {
var illu = document.createElement('div'); illu.className = 'kb-about-illu';
illu.innerHTML = '<img src="/images/202606/crystal-illu.png" alt="" onerror="this.parentNode.style.display=\'none\'">';
about.appendChild(illu); about.classList.add('kb-about-grid');
}
}
var pkgSec = document.createElement('div'); pkgSec.id = 'kb-pkg'; pkgSec.className = 'kb-pkg-sec';
pkgSec.innerHTML =
'<div class="kb-msg-sec"><div class="kb-sec-head"><h2><span class="sp">✦</span> Hizmet Paketleri</h2></div><div class="kb-msg-mount"></div></div>'
+ '<div class="kb-apt-sec"><div class="kb-sec-head"><h2><span class="sp">✦</span> Randevu Paketleri</h2></div><div class="kb-pkg-mount"></div></div>';
panels.appendChild(pkgSec);
placeMsg();   
var comments = $('.profile-content.comments', pageContent);
if (comments) {
comments.id = 'kb-rev'; comments.classList.add('kb-rev-sec');
panels.appendChild(comments);   
var revWrap = $('.reviews', comments);
var revTitle = $('.profile-content-title', comments) || $('h2', comments);
var sh = document.createElement('div'); sh.className = 'kb-sec-head';
comments.insertBefore(sh, comments.firstChild);
if (revTitle) { revTitle.innerHTML = '<span class="sp">✦</span> Danışan Yorumları'; sh.appendChild(revTitle); }
if (revWrap) {
decorateReviewCards();   
revWrap.classList.add('kb-rev-cap');   
var moreSrc = null;
Array.prototype.slice.call(revWrap.children).forEach(function (c) { if (!c.classList.contains('review')) { c.classList.add('kb-rev-more'); c.style.display = 'none'; comments.appendChild(c); if (!moreSrc) moreSrc = c.querySelector('a,button') || c; } });
var allLink = document.createElement('a'); allLink.className = 'kb-rev-all'; allLink.href = '#';
allLink.innerHTML = 'Tüm Yorumlar <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11h11.2l-4.6-4.6L13 5l7 7-7 7-1.4-1.4 4.6-4.6H5z"/></svg>';
allLink.addEventListener('click', function (e) { e.preventDefault(); openReviewsModal(); });
sh.appendChild(allLink);
}
}
top.style.display = 'none';
H.classList.add('kb-uzman-built');
placePackages();
var pImg = $('.ph-photo .profile-image img');
var primA = $('.call-card .profile-appointment-btn a') || $('.call-card .profile-buttons a');
var sb = document.createElement('div'); sb.className = 'kb-sticky';
sb.innerHTML = '<img src="' + ((pImg || {}).src || '/common/user-circle-solid.svg') + '" alt="">'
+ '<div class="sb-info"><div class="sb-name">' + name + ' ile görüşmeye başla</div></div>';
var sbBtn = document.createElement('a'); sbBtn.className = 'kb-sb-btn';
sbBtn.href = (primA && primA.getAttribute('href')) || '#kb-pkg';
sbBtn.innerHTML = '<i class="far fa-calendar-check"></i> Randevu Al';
if (primA) sbBtn.addEventListener('click', function (e) { e.preventDefault(); primA.click(); });
sb.appendChild(sbBtn); wrap.appendChild(sb);
$$('.kb-tab', tabs).forEach(function (t) {
t.addEventListener('click', function (e) { e.preventDefault(); showPanel(t.getAttribute('href'), true); });
});
showPanel('#kb-pkg', false);   
buildCallButtons();
try {
var obs = new MutationObserver(function () { placePackages(); placeMsg(); buildCallButtons(); });
obs.observe(top, { childList: true, subtree: true });
} catch (e) {}
[500, 1200, 2500, 4000, 6000].forEach(function (d) { setTimeout(function () { placePackages(); placeMsg(); tidyPkgSections(); buildCallButtons(); }, d); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
else build();
window.addEventListener('load', function () { build(); setTimeout(build, 600); setTimeout(build, 1600); });
})();
(function () {
var IS_CATEGORY = (typeof isCategory !== 'undefined' && isCategory);
function kbIsAgentsListPage() {
if (typeof isAgentDetail !== 'undefined' && isAgentDetail) return false;
if (IS_CATEGORY) return true;   
if (typeof agentUrlGlobal === 'undefined' || !agentUrlGlobal) return false;
var p = (window.location.pathname || '').replace(/\/+$/, '');
var t = ('' + agentUrlGlobal).replace(/\/+$/, '');
if (!t) return false;
if (t.charAt(0) !== '/') t = '/' + t;
return p === t || p.endsWith(t);
}
if (!kbIsAgentsListPage()) return;
document.documentElement.classList.add('kb-agents-list');
function injectHero() {
if (document.querySelector('.kb-uz-hero')) return;
var list = document.querySelector('.list.flex:not(.order-flex-list)');
if (!list) return;
var anchor = document.querySelector('.list.flex.order-flex-list') || list;
var parent = anchor.parentNode;
if (!parent) return;
var hero = document.createElement('div');
hero.className = 'kb-uz-hero';
hero.innerHTML = '<h1>Yorumcularımız</h1><p class="kb-hero-sub">Kendine en uygun yorumcuyu seç, falına hemen başla.</p>';
parent.insertBefore(hero, parent.firstChild);
}
function decorateCard(ic) {
if (!ic || ic.dataset.kbExp === '1') return;
var name = ic.querySelector('.item-title');
if (!name) return; 
ic.dataset.kbExp = '1';
var action = ic.querySelector('.item-action');
var cc = ic.querySelector('.comment-count');
var ccNum = cc ? (cc.textContent || '').replace(/[^0-9]/g, '') : '';
if (action && !ic.querySelector('.kb-exp-meta')) {
var meta = document.createElement('div');
meta.className = 'kb-exp-meta';
var html = '<span class="kb-on">Şu an online</span><span class="kb-off">Çevrimdışı</span>';
if (ccNum) html += '<span class="kb-yorum"><i class="far fa-comment-dots"></i> ' + ccNum + ' yorum</span>';
meta.innerHTML = html;
ic.insertBefore(meta, action);
}
var unvan = ic.querySelector('.unvan-title');
var prs = ic.querySelector('.profile-review-stars');
if (unvan && prs && unvan.parentNode !== prs) prs.appendChild(unvan);
var cats = ic.querySelectorAll('.profile-categories .pcategory-btn');
Array.prototype.forEach.call(cats, function (btn, idx) {
if (btn.dataset.kbTc) return;
btn.classList.add('kb-tc-' + (idx % 6));
btn.dataset.kbTc = '1';
});
}
function injectCtaPill() {
if (document.querySelector('.kb-cta-pill')) return;
var list = document.querySelector('.list.flex:not(.order-flex-list)');
if (!list || !list.parentNode) return;
var pill = document.createElement('div');
pill.className = 'kb-cta-pill';
pill.innerHTML = '<span class="cic"><i class="fas fa-heart"></i></span>'
+ '<div><div class="c1">Doğru yorumcu, doğru cevap demek!</div>'
+ '<div class="c2">Binlerce kullanıcı, hayatına yön veren cevapları burada buldu.</div></div>';
list.parentNode.insertBefore(pill, list.nextSibling);
}
function setSearchPlaceholder() {
var sb = document.getElementById('searchBar');
if (sb && sb.getAttribute('placeholder') !== 'Uzman ara...') sb.setAttribute('placeholder', 'Uzman ara...');
}
var KB_FILTERS = [
{ key: 'yazili',  label: 'Yazılı Fal',          sf: 'message',     icon: '<path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-1-1.7V5z"/>' },
{ key: 'telefon', label: 'Hemen telefonda fal', sf: 'phone',       icon: '<path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.24 1l-2.2 2.2z"/>' },
{ key: 'randevu', label: 'Randevulu fal',       sf: 'appointment', icon: '<path d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zM3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9H3z"/>' }
];
function injectFilterRow() {
if (document.querySelector('.kb-uz-filterrow')) { updateCount(); return; }
var toolbar = document.querySelector('.order-flex-list');
var grid = document.querySelector('.list.flex:not(.order-flex-list)');
if (!toolbar || !grid || !toolbar.parentNode) return;
var base = (location.pathname || '/uzmanlar').replace(/\/+$/, '');  
var current = (location.search.match(/[?&]servicefilters=([^&]+)/) || [])[1] || '';  
var row = document.createElement('div');
row.className = 'kb-uz-filterrow';
var h = '';
KB_FILTERS.forEach(function (f) {
var isActive = (f.sf === current);
var href = isActive ? base : (base + '?servicefilters=' + f.sf);  
h += '<a class="kb-uz-filter' + (isActive ? ' kb-active' : '') + '" data-kb-filter="' + f.key + '" href="' + href + '">'
+ '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">' + f.icon + '</svg>'
+ '<span>' + f.label + '</span></a>';
});
h += '<span class="kb-uz-count"></span>';
row.innerHTML = h;
toolbar.parentNode.insertBefore(row, toolbar.nextSibling);
updateCount();
}
function updateCount() {
var c = document.querySelector('.kb-uz-count');
var grid = document.querySelector('.list.flex:not(.order-flex-list)');
if (!c || !grid) return;
var items = grid.querySelectorAll('.item');
var vis = Array.prototype.filter.call(items, function (i) { return i.offsetParent !== null; }).length;
c.innerHTML = '<strong>' + vis + '</strong> uzman bulundu';
}
function decorate() {
if (!IS_CATEGORY) { injectHero(); setSearchPlaceholder(); injectFilterRow(); }
var list = document.querySelector('.list.flex:not(.order-flex-list)');
if (!list) return;
var items = list.querySelectorAll('.item > .item-c');
Array.prototype.forEach.call(items, decorateCard);
if (!IS_CATEGORY) { injectCtaPill(); updateCount(); }
}
var obs = null;
function start() {
decorate();
var root = document.querySelector('.page-content.agents') || document.querySelector('.page.agents');
if (window.MutationObserver && root) {
obs = new MutationObserver(function () {
obs.disconnect();
decorate();
obs.observe(root, { childList: true, subtree: true });
});
obs.observe(root, { childList: true, subtree: true });
}
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
else start();
window.addEventListener('load', function () { decorate(); setTimeout(decorate, 400); setTimeout(decorate, 1200); });
})();
/* [KB-KALPBAHCEM:END] */
