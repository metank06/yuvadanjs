
$(document).ready(function(){

$('.users-wrapper').prepend('<div class="yuva-singup-wp"><div class="yuva-signup-con"><div class="yuva-signup-item"><div class="yuva-signup-items"><div class="yuva-signup-img"><img src="/images/202509/504_890x773.jpg" alt=""></div></div><div class="yuva-signup-items"><div class="yuva-singup-cont"></div></div></div></div></div>');

$('.user-form.register').appendTo('.yuva-singup-cont');


});

$(document).ready(function(){

                var mutationObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if(mutation.type == 'childList' && mutation.addedNodes.length > 0) {
                    // Eklenen node'lardan herhangi biri calendar-body-v2 class'ına sahip mi kontrol et
                    for (let node of mutation.addedNodes) {
                        if (node.nodeType === 1 && node.classList && node.classList.contains('calendar-body-v2')) {
                            $('.payment-options_v2 a[data-method="cc"] span')
        .text('Kredi Kartı / Banka Kartı ile Öde');
 
    $('.payment-options_v2 a[data-method="moneypay"] span')
        .text('MoneyPay Cüzdan Kartı ile Öde');
 
    $('.payment-options_v2 a[data-method="uc"] span')
        .text('Hediye Seans Bakiyem ile Öde');
                            break;
                        }
                    }
                }
            });
        });

        mutationObserver.observe(document.documentElement, {
            attributes: true,
            childList: true,
            subtree: true
        });

$('.nav-trigger a').append('<span>Menü</span>');
$('.agents .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        autoWidth: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            }
        }
    });

$('.agents .item-c').prepend('<div class="uzmani-incele"><p>Uzmanı İncele</p><i class="fas fa-arrow-right"></i></div>');
$(".login-btn").text("Üye Girişi");
$(".signup-btn").text("Üye Ol");
$('.featured-blog').append('<div class="yuva-blog-btn"><div class="agents-col-box-btn"><a class="yuva-button-w btn-font yuva-border" href="/blog">Tüm Blog Yazıları<i class="fas fa-arrow-right"></i></a></div></div>')

$('span.agent-card-list-price-cur').text(' ₺');

$('a[data-method="uc"] span').text('Varolan Hediye Seanslarımla');

$('span#order-dd label ul>:nth-child(1) a').text('İsme Göre (A-Z)');
$('span#order-dd label ul>:nth-child(3) a').text('İsme Göre (Z-A)');
   $('#login-form').prepend('<div class="yuva-form-text"><h2 class="yuva-font-h2">Üye Girişi</h2></div>');

if(window.location.pathname == '/tr-TR/uzmanlar'){

     $("a.btn.btn-online").text("Randevu Al");
     $("a.btn.btn-busy").text("Randevu Al");
     $("a.btn.btn-offline").text("Randevu Al");
     $('.form-control').attr('placeholder', 'Uzman Ara');
     

$('.item-c').append('<div class="uzm-card"><div class="uzm-card-col-l"><div class="uzm-card-row"><div class="uzm-card-box1"></div></div></div><div class="uzm-card-col-r"><div class="uzm-card-row"><div class="uzm-card-box2"></div></div><div class="uzm-card-row"><div class="uzm-card-box3"></div></div><div class="uzm-card-row"><div class="uzm-card-box4"></div></div></div></div>');

$('.item-c').each(function () {
    
    var itemImage = $(this).find('.item-image'); 
    var targetBox = $(this).find('.uzm-card-box1'); 

    
    if (itemImage.length && targetBox.length) {
        itemImage.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var itemTitle= $(this).find('.item-title'); 
    var targetBox = $(this).find('.uzm-card-box2'); 

    
    if (itemTitle.length && targetBox.length) {
        itemTitle.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var unvanTitle= $(this).find('.unvan-title'); 
    var targetBox = $(this).find('.uzm-card-box2'); 

    
    if (unvanTitle.length && targetBox.length) {
        unvanTitle.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var unvanTitle= $(this).find('.profile-review-stars'); 
    var targetBox = $(this).find('.uzm-card-box2'); 

    
    if (unvanTitle.length && targetBox.length) {
        unvanTitle.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var itemExcerpt= $(this).find('.item-excerpt'); 
    var targetBox = $(this).find('.uzm-card-box2'); 

    
    if (itemExcerpt.length && targetBox.length) {
        itemExcerpt.appendTo(targetBox);
    }
});
$('.item-c').each(function () {
    
    var listPrice= $(this).find('.agent-card-list-price'); 
    var targetBox = $(this).find('.uzm-card-box2'); 

    
    if (listPrice.length && targetBox.length) {
        listPrice.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var profileCategories= $(this).find('.profile-categories'); 
    var targetBox = $(this).find('.uzm-card-box3'); 

    
    if (profileCategories.length && targetBox.length) {
        profileCategories.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var itemAction= $(this).find('.item-action'); 
    var targetBox = $(this).find('.uzm-card-box4'); 

    
    if (itemAction.length && targetBox.length) {
        itemAction.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var itemExcerp= $(this).find('.item-excerp'); 
    var targetBox = $(this).find('.uzm-card-box4'); 

    
    if (itemExcerp.length && targetBox.length) {
        itemExcerp.appendTo(targetBox);
    }
});
$('.item-c').each(function () {
    
    var uzmaniIncele= $(this).find('.uzmani-incele'); 
    var targetBox = $(this).find('.uzm-card-box4'); 

    
    if (uzmaniIncele.length && targetBox.length) {
        uzmaniIncele.appendTo(targetBox);
    }
});

   $('.list.flex').css('display','flex');

}  

if(window.location.pathname === '/tr-TR/signup'){
     $('.footer').appendTo('.yuva-singup-cont');
     $('.glogin-text').text('GOOGLE İLE KAYDOL')
     $('.glogin-icon').prepend('<img src="/images/202412/268_40x40.png" width="24" height="24" />');
     $('button.btn-primary-fbsignup span:not(.i-facebook)').text('FACEBOOK İLE KAYDOL')
     $('.glogin-icon i').remove();
     $('#register-form').prepend('<div class="yuva-form-text"><h2 class="yuva-font-h2">Üye Ol!</h2></div>'); 
}

if(window.location.pathname == '/hizmetler/pedagoji-ve-psikolojik-destek'){

     $('.page-title h1').css('display','none')

}
if(window.location.pathname == '/hizmetler/pedagoji-ve-psikolojik-destek'){
  
     $('.page-title').append('  <div class="kategori-banner"><div class="kategori-banner-item"><div class="kategori-banner-img"><img class="yuvadan-desktop-img" src="https://yuvadan.gurulize.com/images/202411/171_1248x181.png" alt=""><img class="yuvadan-mobile-img" src="/images/202412/266_329x260.png" alt="" width="329" height="260" /></div><div class="kategori-banner-content"><div class="kategori-banner-head"><h2 class="yuva-font-h2">Pedagoji ve Psikolojik Destek</h2></div><div class="kategori-banner-text"><p class="yuva-font-p">Seçkin Uzmanlar Burada!</br>İhtiyacın Olan Uzmanı Birlikte Bulalım.</p></div></div></div></div>')
}

if(window.location.pathname == '/hizmetler/teknolojik-ve-akademik-danismanlik'){

     $('.page-title h1').css('display','none')

}
if(window.location.pathname == '/hizmetler/teknolojik-ve-akademik-danismanlik'){
  
     $('.page-title').append('  <div class="kategori-banner"><div class="kategori-banner-item"><div class="kategori-banner-img"><img class="yuvadan-desktop-img" src="https://yuvadan.gurulize.com/images/202411/172_1248x181.png" alt=""><img class="yuvadan-mobile-img" src="/images/202412/267_329x260.png" alt="" width="329" height="260" /></div><div class="kategori-banner-content"><div class="kategori-banner-head"><h2 class="yuva-font-h2">Teknolojik ve Akademik Danışmanlık</h2></div><div class="kategori-banner-text"><p class="yuva-font-p">Burası Seçkin Uzmanların Yuvası!</br>İhtiyacın Olan Uzmanı Birlikte Bulalım.</p></div></div></div></div>')
}
if(window.location.pathname == '/tr-TR/s/iletisim'){

$('.page-body').append('<div class="yuva-contact-wp"><div class="yuva-contact-head"><h2 class="yuva-font-h2 yuva-font-size-1">Yuva İletişim Formu</h2><p class="yuva-font-p">Çocuğunuzun duygusal, zihinsel ve gelişimsel ihtiyaçlarına yönelik güvenilir bir rehber arıyorsanız, doğru yerdesiniz! <br/>Pedagog, ebeveyn danışmanlığı, çocuk değerlendirmeleri ve gelişim odaklı içeriklerle, her yaşta iyi oluş halini desteklemeye hazırız. <br/> Aklınızdaki sorular, danışmak istediğiniz konular ya da randevu talepleriniz için bizimle iletişime geçebilirsiniz. <br/> Çocukların dünyasını birlikte anlamak için buradayız.</p></div><div class="yuva-contact-con"><div class="yuva-contant-row"><div class="yuva-contact-col"><div class="yuva-contact-content"><div class="yuva-contact-con-box"><div class="yuva-contact-title"><div class="yuva-contact-icon"><i class="far fa-envelope"></i></div><p class="yuva-font-p">E-mail</p></div><div class="yuva-contact-tx"><p class="yuva-font-p">Farklı bir sorunuz ya da öneriniz varsa bize e-posta ile de ulaşabilirsiniz.</p><p class="yuva-font-p"><strong>info@yuvadan.com</strong></p></div></div><div class="yuva-contact-con-box"><div class="yuva-contact-title"><div class="yuva-contact-icon"><i class="fas fa-map-marker-alt"></i></div><p class="yuva-font-p">Adres</p></div><div class="yuva-contact-tx"><p class="yuva-font-p">Tecom Plaza, Kavacık, Muhtar Sokak No:5, 34448 Beykoz/İstanbul</p></div></div><div class="yuva-contact-con-box"><div class="yuva-contact-title"><a href="https://api.whatsapp.com/send/?phone=905426955574&text&type=phone_number&app_absent=0"><div class="yuva-contact-icon yuva-icon-animasyon"><i class="fab fa-whatsapp"></i></div></a><p class="yuva-font-p">Whatsapp</p></div><div class="yuva-contact-tx"><p class="yuva-font-p">Whatsapp Sorularınız mı var? 09:00–21:00 saatleri arasında danışan destek hattımız size yardımcı olmaktan memnuniyet duyar. Whatsapp ikonuna tıklayın ve WhatsApp üzerinden hızlıca bağlanın.</p><p class="yuva-font-p"><strong>0542 695 55 74</strong></p></div></div></div></div><div class="yuva-contact-col"><div class="yuva-contact-item"></div></div></div></div></div>');

 $('.form-container, .contact-form').appendTo('.yuva-contact-item');

$('#name').attr('placeholder', 'Adınız Soyadınız');
$('#email').attr('placeholder', 'E-Posta Adresiniz');
$('#phone').attr('placeholder', 'Telefon Numarası');
$('label[for="name"]').css('display','none');
 $('label[for="email"]').css('display','none');
 $('label[for="phone"]').css('display','none');

}
if(window.location.pathname == '/s/kurumsal-iletisim'){

$('.page-body').append('<div class="yuva-contact-wp"><div class="yuva-contact-head"><h2 class="yuva-font-h2 yuva-font-size-1">Yuva Kurumsal İletişim Formu</h2><p class="yuva-font-p">Yuva ile aile dostu çözümleri hemen kurumunuza kazandırın! Çalışanlarınızın ebeveynlik yolculuklarında yanlarında olun!</p></div><div class="yuva-contact-con-kurumsal"><div class="yuva-contant-row-kurumsal"><div class="yuva-contact-col"><div class="yuva-contact-item-kurumsal"></div></div></div></div></div>');

 $('.form-container, .contact-form').appendTo('.yuva-contact-item-kurumsal');

$('#name').attr('placeholder', 'Yetkili Kişi Adı Soyadı');
$('#email').attr('placeholder', 'Yetkili Kişi Kurumsal E-Posta');
$('#phone').attr('placeholder', 'Yetkili Kişi Telefon Numarası');
$('label[for="name"]').css('display','none');
 $('label[for="email"]').css('display','none');
 $('label[for="phone"]').css('display','none');

}
if(window.location.pathname == '/tr-TR/signup'){

$('#name').attr('placeholder', 'Adınız Soyadınız');
$('#email').attr('placeholder', 'E-Posta Adresiniz');
$('#phone').attr('placeholder', 'Telefon Numarası');
$('#password').attr('placeholder', 'Parola');
$('#password-repeat').attr('placeholder', 'Parola Tekrar');
$('label[for="name"]').css('display','none');
 $('label[for="email"]').css('display','none');
 $('label[for="phone"]').css('display','none');
 $('label[for="password"]').css('display','none');
 $('label[for="password-repeat"]').css('display','none');

}

if(window.location.pathname == '/tr-TR/login'){

$('.yuva-signup-img img').css('display','none');
$('#email').attr('placeholder', 'E-Posta Adresiniz');
$('#password').attr('placeholder', 'Parola');
$('label[for="email"]').css('display','none');
$('label[for="password"]').css('display','none');
$('.glogin-icon').prepend('<img src="/images/202412/268_40x40.png" width="24" height="24" />');
$('.glogin-icon i').remove();

}



if(window.location.pathname == '/s/uzmanimiz-ol'){

     $('.btn-primary').css('background-color','#0AD262')
     $('.page-body').append('<div class="yuva-form-wp"><div class="yuva-form-con"><div class="yuva-form-row"><div class="yuva-form-box"><div class="yuva-form-content"><div class="yuva-form-head"><h3 class="yuva-font-h3"><span>Hemen Şimdi </span><span>Uzmanlarımızın </span><span>Arasına Katıl,</span></h3><h2 class="yuva-font-h2"><span>Yuva’ya</span><span> Dahil Ol!</span></h2></div></div></div><div class="yuva-form-box"><div class="yuva-form-item"></div></div></div></div></div>');

$('.page-body').append('<div class="yuva-faq-wp"><div class="yuva-faq-container"><h2 class="yuva-font-h2 yuva-font-size-2">Merak ettiğin soruların <br />cevabı burada!</h2><div class="accordion"><div class="accordion-item"><button id="accordion-button-1" aria-expanded="false"><span class="accordion-title btn-font">Herkes Yuva da uzman olabilir mi?</span><span class="yuva-icon" aria-hidden="true"></span></button><div class="accordion-content"><p class="yuva-font-p">Yuva da uzman olabilmek için ilgili bölümün lisans derecesine sahip olmak ve alanıyla ilgili eğitimleri tamamlamış olması gerekir.</p></div><div class="accordion-content"><p>Yuva da uzman olabilmek için ilgili bölümün lisans derecesine sahip olmak ve alanıyla ilgili eğitimleri tamamlamış olması gerekir.</p></div><button id="accordion-button-2" aria-expanded="false"><span class="accordion-title btn-font">Hafta sonları çalışmak zorunda mıyım?</span><span class="yuva-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Hayır değilsiniz fakat hafta sonu çalışırsanız daha çok danışan kabul ederek %5 daha fazla kazanç elde edersiniz.</p></div><button id="accordion-button-3" aria-expanded="false"><span class="accordion-title btn-font">Yuva da yüz yüze terapi verebilir miyim?</span><span class="yuva-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Yuva da yalnızca güvenli video görüşmeleri aracılığıyla online terapi seansları verebilirsiniz.</p></div></div></div></div></div>');


 $('.form-container, .contact-form').appendTo('.yuva-form-item');
 $('label[for="name"]').text('Kişisel Bilgileriniz');
 $('#name').attr('placeholder', 'Adınız Soyadınız');
$('#email').attr('placeholder', 'E-Posta Adresiniz');
$('#phone').attr('placeholder', 'Telefon Numarası');
 $('label[for="email"]').css('display','none');
 $('label[for="phone"]').css('display','none');
 $('label[for="message"]').text('Kendiniz Hakkında Bilgi Veriniz');
$('#attachment').before('<p>CV Yükle</p>');
$('#attachment_2').before('<p>Diploma / Sertifika Yükle</p>');

}

});



$(document).ready(function(){
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
});

        $(document).ready(function () {
            // Popup'u aç
            $("#helpLink").on("click", function (e) {
                e.preventDefault(); // Sayfanın yenilenmesini engeller
                $(".yuva-overlay, .yuva-popup").fadeIn();
            });

            // Popup'u kapat
            $(".yuva-close-btn, .yuva-overlay").on("click", function () {
                $(".yuva-overlay, .yuva-popup").fadeOut();
            });
        });

$(document).ready(function() {

document.querySelectorAll('.dropdown-filter').forEach((it)=>{
$(it).insertAfter('#agentTag');
});


$('#filter-form').detach().appendTo($('.list .item-empty').get(0));
var filterSort=  $('.list .item-empty').get(0);
$(filterSort).css({'flex-basis':'600px','display':'flex','justify-content':'space-between','gap':'1rem','order':'1','flex-flow':'row-reverse',});

if($(window).width() < 480){
$(filterSort).css({'flex-basis':'unset','flex-direction':'row'});
$('.filter-button').css('display','none');
$('.order-flex-list .item-empty').css('width','unset !important');
$('#filter-form').css('display','flex');
}   

    if (window.location.pathname === "/uzmanlar") {
        $('.profile-categories').css({
            'position': 'absolute',
            'bottom': '35%',
            'left': '20%'
        });
    }
 if (window.location.pathname.includes('/hizmetler')) {
        $('.profile-categories').css({
            'position': 'absolute',
            'bottom': '35%',
            'left': '20%'
        });
    }
});

$(document).ready(function () {
    // "Sırala" yazan butonun içindeki i etiketinin sınıfını değiştir
    $('#order-dd button i').removeClass('fas fa-chevron-down').addClass('fas fa-sort-alt');

    // "Sırala" yazısının başına ikonu taşı
    $('#order-dd button').prepend($('#order-dd button i'));
});

$(document).ready(function () {
   
    var currentUrl = window.location.href;

  
    if (currentUrl.includes("/hizmetler/")) {
        console.log("URL içinde '/hizmetler/' bulundu.");


        var uzmCardHtml = `
            <div class="uzm-card">
                <div class="uzm-card-col-l">
                    <div class="uzm-card-row">
                        <div class="uzm-card-box1"></div>
                    </div>
                </div>
                <div class="uzm-card-col-r">
                    <div class="uzm-card-row">
                        <div class="uzm-card-box2"></div>
                    </div>
                    <div class="uzm-card-row">
                        <div class="uzm-card-box3"></div>
                    </div>
                    <div class="uzm-card-row">
                        <div class="uzm-card-box4"></div>
                    </div>
                </div>
            </div>
        `;

        $(".item-c").append(uzmCardHtml);
    } else {
        console.log("URL içinde '/hizmetler/' bulunamadı.");
    }
$('.item-c').each(function () {
    
    var itemImage = $(this).find('.item-image');
    var targetBox = $(this).find('.uzm-card-box1'); 

   
    if (itemImage.length && targetBox.length) {
        itemImage.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var itemTitle= $(this).find('.item-title'); 
    var targetBox = $(this).find('.uzm-card-box2'); 

    
    if (itemTitle.length && targetBox.length) {
        itemTitle.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var unvanTitle= $(this).find('.unvan-title'); 
    var targetBox = $(this).find('.uzm-card-box2'); 

    
    if (unvanTitle.length && targetBox.length) {
        unvanTitle.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var unvanTitle= $(this).find('.profile-review-stars'); 
    var targetBox = $(this).find('.uzm-card-box2'); 

    
    if (unvanTitle.length && targetBox.length) {
        unvanTitle.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var itemExcerpt= $(this).find('.item-excerpt'); 
    var targetBox = $(this).find('.uzm-card-box2'); 

    
    if (itemExcerpt.length && targetBox.length) {
        itemExcerpt.appendTo(targetBox);
    }
});
$('.item-c').each(function () {
    
    var listPrice= $(this).find('.agent-card-list-price'); 
    var targetBox = $(this).find('.uzm-card-box2'); 

    
    if (listPrice.length && targetBox.length) {
        listPrice.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var profileCategories= $(this).find('.profile-categories'); 
    var targetBox = $(this).find('.uzm-card-box3'); 

    
    if (profileCategories.length && targetBox.length) {
        profileCategories.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var itemAction= $(this).find('.item-action'); 
    var targetBox = $(this).find('.uzm-card-box4'); 

    
    if (itemAction.length && targetBox.length) {
        itemAction.appendTo(targetBox);
    }
});

$('.item-c').each(function () {
    
    var itemExcerp= $(this).find('.item-excerp'); 
    var targetBox = $(this).find('.uzm-card-box4'); 

    
    if (itemExcerp.length && targetBox.length) {
        itemExcerp.appendTo(targetBox);
    }
});
$('.item-c').each(function () {
    
    var uzmaniIncele= $(this).find('.uzmani-incele'); 
    var targetBox = $(this).find('.uzm-card-box4'); 

    
    if (uzmaniIncele.length && targetBox.length) {
        uzmaniIncele.appendTo(targetBox);
    }
});

  $('.list.flex').css('display','flex');

});

$(document).ready(function () {
       $('#order-dd button').html(function (_, currentHtml) {
             return currentHtml.replace("Ada göre", "İsme Göre");
    });

$('.package-meta-item .package-meta-value strong').each(function () {
        var number = $(this).text().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        $(this).text(number);
    });

});

$(document).ready(function () {

  if (window.location.pathname === "/etkinlikler") {

$('.event-order-dd').css('display','none');
$('.status-icon').css('left','unset');
$('.status-icon').each(function() {
    this.style.setProperty('right', '0', 'important');
    this.style.setProperty('background', '#0000005c', 'important');
});


}

});

$(document).ready(function() {

      $('.header').prepend('<div class="header-massage"><p>Yeni Üyeliğe Özel 250 TL İndirim Seni Bekliyor! İndirim Kodu: <span class="kod-text" id="copyText">HOSGELDIN250 <i class="far fa-copy"></i></span><span class="copy-message">Kopyalandı!</span><span class="kupon-kullan">Kuponumu nasıl kullanırım?</span> <i class="fas fa-arrow-right"></i></p></div><div class="popup-overlay1"><div class="popup-content1"><p class="kupon-text">Üye olduktan sonra, profilinizdeki <span>"Kuponlar"</span> menüsüne girin. Kupon Kodunu ilgili alana yazıp <span>"Gönder"</span> butonuna basarak indirim kodunuzu hesabınıza ekleyebilirsiniz.</p><button class="kupon-kapat">Kapat</button></div></div>');

    $("#copyText").click(function() {
        var text = $(this).text(); // Metni al
        var tempInput = $("<input>"); // Geçici bir input oluştur
        $("body").append(tempInput); // Body'ye ekle
        tempInput.val(text).select(); // Değeri belirle ve seç
        document.execCommand("copy"); // Kopyalama işlemi yap
        tempInput.remove(); // Geçici input'u kaldır
        
        // Kopyalandı mesajını göster
        $(".copy-message").fadeIn().delay(1000).fadeOut();
    });
});

$(document).ready(function () {
    $("<style>")
        .prop("type", "text/css")
        .html("[id*='gb-widget'] { bottom: 0 !important; right: 0 !important; position: fixed !important; }")
        .appendTo("head");
});

    $(document).ready(function(){
        // Kupon Kullanımı butonuna tıklanınca popup aç
        $(".kupon-kullan").click(function(){
            $(".popup-overlay1").fadeIn(); // Popup göster
        });

        // Kapat butonuna tıklanınca popup kapanır
        $(".kupon-kapat").click(function(){
            $(".popup-overlay1").fadeOut(); // Popup gizlenir
        });
    });


$(document).ready(function() {
    $(".package-description").html(function(_, html) {
        return html.replace(/\.\.\s*/g, "..<br>");
    });

});



    $(document).ready(function(){

const $element = $(".gtm-purchase-data");  
// Attribute var mı kontrol et
  if ($element.is("[data-package-type]")) {
    // Attribute'un değerini al
    const value = $element.attr("data-package-type");
if(value == "event"){
    console.log("Attribute mevcut! Değer:", value);
$(".package-info").append('<p class="yuva-etkinlik-massage">Etkinlik kaydınız tamamlandı! Etkinlik saatinde, size e-posta ile gönderilen bağlantıya tıklayarak veya üye profilinizdeki <strong>Etkinlikler</strong> sekmesinden katılabilirsiniz. Görüşmek üzere!</p>');

}else {
console.log("att farklı");

}
  } else {
    console.log("Attribute mevcut değil.");
  }
const fullUrl = window.location.pathname; 
    const parts = fullUrl.split("/");
    const result = parts.slice(1, 4).join("/"); 
if(result == "payment/event/review"){
    $(".package-info").append('<p class="yuva-etkinlik-massage">Etkinlik kaydınız tamamlandı! Etkinlik saatinde, size e-posta ile gönderilen bağlantıya tıklayarak veya üye profilinizdeki <strong>Etkinlikler</strong> sekmesinden katılabilirsiniz. Görüşmek üzere!</p>');
}

});

$(document).ready(function () {

  if (window.location.pathname === "/uzmanlar") {

$('.page-content').append('<div class="uzm-widget-wp"><div class="uzm-widget-con"><div class="uzm-widget-item"><div class="uzm-widget-items"><h2 class="yuva-font-h2 yuva-font-size-4">Yuva Uzmanlarımızla Tanışın</h2><p class="yuva-font-p">Yuva Ebeveyn &amp; Çocuk Platformu sizi anlayan, dinleyen ve çözüm sunan seçkin <a href="https://yuvadan.com/uzmanlar">online sağlık ve eğitim uzmanları</a> ile buluşun. Pedagojik, Diyetisyenlik, Çocuk Gelişimi, Fizyoterapi, Ebeveyn(Aile) Danışmanlığı ve Akademik Eğitim Danışmanlığı gibi farklı alanlarda alanında uzman ve deneyimli profesyoneller size özel online destek sağlamak için buradalar.</p></div><div class="uzm-widget-items"><h2 class="yuva-font-h2 yuva-font-size-4">Yuva İle Her Alanda Bilimsel ve Güvenilir Online Destek</h2><p class="yuva-font-p">Yuva daki her uzman akademik geçmişi güçlü, danışan deneyimi yüksek ve etik ilkelere bağlı olarak hizmet vermektedir.</p><br /><p class="yuva-font-p">İhtiyacınıza göre şu alanlarda destek alabilirsiniz:</p><ul><li class="yuva-font-p">Çocuk ve Ergen Psikolojisi</li><li class="yuva-font-p"><a href="https://yuvadan.com/hizmetler/aile-danismani">Aile (Ebeveyn) Danışmanlığı</a></li><li class="yuva-font-p">Doğum Öncesi ve Sonrası Emzirme Danışmanından Psikolojik Destek</li><li class="yuva-font-p">Diyetisyen (Beslenme Koçu) (Obezite, Çocuk Beslenmesi, Hastalıklarda Beslenme vb.)</li><li class="yuva-font-p">Fizyoterapi ve Gelişim Takibi</li><li class="yuva-font-p"><a href="https://yuvadan.com/hizmetler/pedagoji-ve-psikolojik-destek">Online Terapi</a> ve Danışmanlık Hizmetleri</li><li class="yuva-font-p">Akademik ve Teknolojik Eğitim Danışmanlığı</li></ul></div><div class="uzm-widget-items"><h2 class="yuva-font-h2 yuva-font-size-4">Yuva’da Online Randevu Nasıl Alınır?</h2><p class="yuva-font-p">Online randevu almak çok kolay!</p><ul style="list-style: auto;"><li class="yuva-font-p">Uzmanlar arasından size en uygun uzmanı seçin.</li><li class="yuva-font-p">Uzmanın profiline tıklayın, hakkında bilgi edinin.</li><li class="yuva-font-p">Takvimden size uygun gün ve saati seçerek kolayca randevunuzu oluşturun.</li><li class="yuva-font-p">Dünyanın her yerinden online terapi seansınızı hızlıca planlayın.</li></ul></div><div class="uzm-widget-items"><h2 class="yuva-font-h2 yuva-font-size-4">Size En Uygun Uzmanı Nasıl Seçersiniz?</h2><ul><li class="yuva-font-p">Destek almak istediğiniz alanı belirleyin (örneğin: çocuk gelişimi, emzirme danışmanlığı, <a href="https://yuvadan.com/hizmetler/teknolojik-ve-akademik-danismanlik">akademik ve teknolojik danışmanlık</a> vb. birçok hizmetler)</li><li class="yuva-font-p">Uzman profillerini filtreleyin ve önceki danışan yorumlarına göz atın.</li><li class="yuva-font-p">Uzmana dair eğitim bilgilerini ve uzmanlık alanlarını inceleyin.</li><li class="yuva-font-p">Kendinize en yakın hissettiğiniz kişiyle randevunuzu oluşturun.</li></ul><p class="yuva-font-p">Unutmayın: Doğru uzmanla kurulan iletişim, sürecin en güçlü adımıdır.</p></div></div></div></div>');

}

});

$(document).ready(function() {

 if (window.location.pathname == "/tr-TR/uzmanlar") {
      
   // list sınıfının içindeki 4. item-empty öğesini seç
    var $target = $(".list .item-empty").eq(3);

    // upcase sınıfını ekle
    $target.addClass("upcase");

    // .page-content altına taşı
    $(".page-content").prepend($target);

    }

});


$(document).ready(function () {

$('.clock').text('Kalan Seans');
    $('span.package-meta-value.package-credits').each(function() {
        if ($(this).text().trim() === '1 Kredi') {
          $(this).text('1 Seans');
        }
    });

});



$(document).ready(function () {

$(function () {
  const $p = $('#profile p.lead');
  const parts = $p.text().split(/\s*-\s+/).filter(Boolean); // "-" ile başlayan cümleleri ayır
  const newHtml = parts.map(s => '• ' + s.trim()).join('<br>');
  $p.html(newHtml);
});

$(function () {
  const $p = $('#contact p.lead');
  const parts = $p.text().split(/\s*\d+-\s*/).filter(Boolean);
  const newHtml = parts.map((txt, i) => (i+1) + "- " + txt.trim()).join('<br>');
  $p.html(newHtml);
});





});


$(document).ready(function() {
    if (window.location.pathname === "/login") {
        $(".yuva-signup-img").hide();
    }
 if (window.location.pathname === "/forgot-password") {
        $(".yuva-signup-img").hide();
    }
 if (window.location.pathname === "/new-password") {
        $(".yuva-signup-img").hide();
    }

if (window.location.pathname.includes("/new-password/")) {
    
$(".yuva-signup-img").hide();

}

});

$(document).ready(function() {

  if (window.location.pathname !== "/tr-TR/uzmanlar") {
    return;
  }

   const lastClosedTime = localStorage.getItem('msgClosedTime');
  const now = Date.now();
  const eightHours = 8 * 60 * 60 * 1000;

  if (lastClosedTime && (now - lastClosedTime < eightHours)) {
    $('.chat-message').hide();
  } else {
    $('.chat-message').show();
  }

  $('.chat-toggle, .chat-message').click(function() {
    $('.chat-overlay').fadeIn(200);
    $('.chat-panel').addClass('open');
  });

  function closeChat() {
    $('.chat-overlay').fadeOut(200);
    $('.chat-panel').removeClass('open');
  }

  $('.chat-close, .chat-overlay').click(function() {
    closeChat();
  });

   $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      closeChat();
    }
  });

  $('.msg-close').click(function(e) {
    e.stopPropagation();
    $('.chat-message').fadeOut(200);
    localStorage.setItem('msgClosedTime', Date.now());
  });

 
});

$(document).on('DOMNodeInserted', function() {
  if (window.location.pathname === '/s/iletisim') {
  $('[id^="gb-widget"]').css('display', 'block');
}
});


$(document).ready(function () {

  if (window.location.pathname.startsWith('/blog/')) {
    
     $('.blog').append('<div class="yuva-slider-container"><div class="yuva-slider-title"><h2 class="yuva-font-h2">Alanında Uzman,<br />Ebeveyn &amp; Çocuk Odaklı Seçilmiş Uzman Kadrosu</h2></div><div class="yuva-slider-wrapper"><div class="yuva-slider-item"><a href="/uzmanlar/ozlem-karayer"><img src="/images/202508/476_1000x1000.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Özlem Karayer</span><span class="yuva-uzm-title">Çocuk Gelişimi Uzmanı</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/senem-temur"><img src="/images/202508/475_1000x1000.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Senem Temur</span><span class="yuva-uzm-title">Psikolog</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/dr-tolga-topcubasi"><img src="/images/202412/272_320x321.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Tolga Topçubaşı</span><span class="yuva-uzm-title">Akademisyen</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/beyza-kul"><img src="/images/202508/477_1000x1000.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Beyza Kul</span><span class="yuva-uzm-title">Diyetisyen</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/sevim-celik"><img src="/images/202508/484_1000x968.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Sevim Çelik</span><span class="yuva-uzm-title">Emzirme Danışmanı</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/ece-vatansever-gurgor"><img src="/images/202508/478_1000x1000.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Ece Vatansever Gürgör</span><span class="yuva-uzm-title">Uzman Diyetisyen</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/mevre-guzel"><img src="/images/202508/483_1000x1000.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Mevre Güzel</span><span class="yuva-uzm-title">Çocuk Gelişimci</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/gamze-nur-celen"><img src="/images/202508/479_1000x1000.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Gamze Nur Çelen</span><span class="yuva-uzm-title">Çocuk Gelişimi Uzmanı</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/secil-daye"><img src="/images/202508/480_1000x1000.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Seçil Daye</span><span class="yuva-uzm-title">Proje Koordinatörü</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/sedat-kaval"><img src="/images/202508/481_1000x1000.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Sedat Kaval</span><span class="yuva-uzm-title">Psikolojik Danışman</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/mehtap-caylak"><img src="/images/202412/270_1000x1000.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Mehtap Çaylak</span><span class="yuva-uzm-title">Fizyoterapist</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/oguzhan-yilmaz"><img src="/images/202508/482_1000x1000.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Oğuzhan Yılmaz</span><span class="yuva-uzm-title">Uzman Klinik Psikolog</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/eylul-eyuboglu"><img src="/images/202509/503_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Eylül Eyüboğlu</span><span class="yuva-uzm-title">Psikolog</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/ekin-kayhan-ozseker"><img src="/images/202508/402_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Ekin Kayhan Özşeker</span><span class="yuva-uzm-title">Klinik Psikolog</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/bersu-demetgul-yurtseven"><img src="/images/202508/443_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Bersu Demetgül<br />Yurtseven</span><span class="yuva-uzm-title">Klinik Psikolog</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/ozlem-karayer"><img src="/images/202511/584_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Özlem Karayer</span><span class="yuva-uzm-title">Çocuk Gelişimi Uzmanı</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/senem-temur"><img src="/images/202509/515_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Senem Temur</span><span class="yuva-uzm-title">Psikolog &amp; Oyun Terapisti</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/dr-tolga-topcubasi"><img src="/images/202412/272_320x321.jpg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Tolga Topçubaşı</span><span class="yuva-uzm-title">Akademisyen<br />Eğitim Teknolojileri Uzmanı</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/lara-topal"><img src="/images/202601/638_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Lara Topal</span><span class="yuva-uzm-title">Diyetisyen &amp; Emzirme Danışmanı</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/maide-mine-cinoglu"><img src="/images/202508/414_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Maide Mine Cinoğlu</span><span class="yuva-uzm-title">Çocuk Gelişimi Uzmanı</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/mine-ozgen"><img src="/images/202601/639_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Mine Özgen</span><span class="yuva-uzm-title">Hamile Yoga Eğitmeni &amp; Doula</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/fatma-tokur"><img src="/images/202508/437_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Fatma Tokur</span><span class="yuva-uzm-title">Uzman Klinik Psikolog</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/gamze-nur-celen"><img src="/images/202509/521_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Gamze Nur Çelen</span><span class="yuva-uzm-title">Çocuk Gelişimi Uzmanı</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/secil-daye"><img src="/images/202508/480_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Seçil Daye</span><span class="yuva-uzm-title">Proje Koordinatörü</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/fatma-nur-kaplanoglu"><img src="/images/202511/585_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Fatma Nur Kaplanoğlu</span><span class="yuva-uzm-title">Emzirme &amp; Uyku Danışmanı</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/mehtap-caylak"><img src="/images/202509/519_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Mehtap Çaylak</span><span class="yuva-uzm-title">Fizyoterapist &amp; Duyu Bütünleme Terapisti</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/oguzhan-yilmaz"><img src="/images/202509/520_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Oğuzhan Yılmaz</span><span class="yuva-uzm-title">Uzman Klinik Psikolog</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/merve-nur-kaban"><img src="/images/202508/495_1000x1000.jpg" width="180" height="180" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Merve Nur Kaban</span><span class="yuva-uzm-title">Psikolojik Danışman</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/pelin-alayli"><img src="/images/202412/278_1000x1000.jpeg" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Pelin Alaylı</span><span class="yuva-uzm-title">Uzman Klinik Psikolog</span></div></div><div class="yuva-slider-item"><a href="/uzmanlar/gokay-acikyildiz"><img src="/images/202501/293_931x931.jfif" alt="" /></a><div class="yuva-uzm-info"><span class="yuva-uzm-name">Gökay Açıkyıldız</span><span class="yuva-uzm-title">Akademisyen Matematik Eğitimcisi</span></div></div></div><div class="yuva-uzm-slider-btn"><a class="yuva-button-w btn-font yuva-border" href="/uzmanlar">Uzmanları Tanıyın <i class="fas fa-arrow-right"></i></a></div></div>');
}

});


document.addEventListener("DOMContentLoaded", function () {

    if (window.location.pathname.includes("/tr-TR/uzmanlar")) {
        return;
    }

    var options = {
        whatsapp: "905426955574",
        call_to_action: "Çevrimiçi iletişim için buradayız.",
        position: "right",
    };

    var proto = document.location.protocol;
    var host = "getbutton.io";
    var url = proto + "//static." + host;

    var s = document.createElement("script");
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";

    s.onload = function () {
        WhWidgetSendButton.init(host, proto, options);
    };

    document.body.appendChild(s);
});

$(document).ready(function() {

  if (window.location.pathname.includes("/tr-TR/uzmanlar")) {
    $("[id^='gb-widget']").hide();
}

  if (window.location.pathname.startsWith("/tr-TR/uzmanlar")) {
    $('.chat-toggle').css('display', 'block');
    $("[id^='gb-widget']").css('display','none');
   }

});

(function () {
function kbIsAgentsListPage() {
if (typeof isCategory !== 'undefined' && isCategory) return false;
if (typeof isAgentDetail !== 'undefined' && isAgentDetail) return false;
if (typeof agentUrlGlobal === 'undefined' || !agentUrlGlobal) return false;
var p = (window.location.pathname || '').replace(/\/+$/, '');
var t = (agentUrlGlobal + '').replace(/\/+$/, '');
if (!t) return false;
if (t.charAt(0) !== '/') t = '/' + t;
return p === t || p.endsWith(t);
}
function kbIsCategoryPage() {
if (typeof isAgentDetail !== 'undefined' && isAgentDetail) return false;
return typeof isCategory !== 'undefined' && !!isCategory;
}
function kbDecoratePage() { return kbIsAgentsListPage() || kbIsCategoryPage(); }
function kbEnsurePageAgents() {
if (!kbIsCategoryPage()) return;
var pg = document.querySelector('.page');
if (pg && !pg.classList.contains('agents')) pg.classList.add('agents');
}
var html = document.documentElement;
if (kbDecoratePage()) {
html.classList.add('kb-agents-list');
}
if (!kbDecoratePage()) return;
kbEnsurePageAgents();
function kbActiveValue() {
var search = window.location.search || '';
if (!search) return null;
var qs = search.charAt(0) === '?' ? search.slice(1) : search;
var pairs = qs.split('&');
for (var i = 0; i < pairs.length; i++) {
var eq = pairs[i].indexOf('=');
if (eq < 0) continue;
var k = decodeURIComponent(pairs[i].slice(0, eq).replace(/\+/g, ' '));
var v = decodeURIComponent(pairs[i].slice(eq + 1).replace(/\+/g, ' '));
if (k.slice(-2) === '[]' && v) return v;
}
return null;
}
function kbBuildPills() {
var form = document.querySelector('#filter-form');
if (!form) return;
var page = document.querySelector('.page.agents');
if (!page) return;
var orderRow = page.querySelector('.list.flex.order-flex-list');
if (!orderRow || !orderRow.parentNode) return;
var allBars = document.querySelectorAll('.kb-pill-bar');
var keepBar = null;
Array.prototype.forEach.call(allBars, function (b) {
if (b.previousSibling === orderRow || (b.parentNode === orderRow.parentNode && !keepBar)) {
if (!keepBar) keepBar = b;
else if (b.parentNode) b.parentNode.removeChild(b);
} else if (b.parentNode) {
b.parentNode.removeChild(b);
}
});
if (keepBar) {
page.dataset.kbPills = '1';
kbSyncActive();
return;
}
page.dataset.kbPills = '0';
var checkboxes = form.querySelectorAll('input.dd-filter-item');
if (!checkboxes.length) return;
var bar = document.createElement('ul');
bar.className = 'kb-pill-bar';
var allLi = document.createElement('li');
var allBtn = document.createElement('button');
allBtn.type = 'button';
allBtn.className = 'kb-pill kb-pill-all';
allBtn.dataset.kbValue = '';
allBtn.textContent = 'Tümü';
allBtn.addEventListener('click', function (e) {
e.preventDefault();
kbApplyFilter('');
});
allLi.appendChild(allBtn);
bar.appendChild(allLi);
var seenLabels = {};
Array.prototype.forEach.call(checkboxes, function (cb) {
var lbl = cb.parentElement && cb.parentElement.querySelector('label');
var labelText = (lbl && lbl.textContent || '').trim();
if (!labelText) return;
if (seenLabels[labelText]) return;
seenLabels[labelText] = true;
var li = document.createElement('li');
var btn = document.createElement('button');
btn.type = 'button';
btn.className = 'kb-pill';
btn.dataset.kbValue = cb.value;
btn.dataset.kbCheckboxId = cb.id;
btn.textContent = labelText;
btn.addEventListener('click', function (e) {
e.preventDefault();
kbApplyFilter(cb.id);
});
li.appendChild(btn);
bar.appendChild(li);
});
if (orderRow.nextSibling) {
orderRow.parentNode.insertBefore(bar, orderRow.nextSibling);
} else {
orderRow.parentNode.appendChild(bar);
}
page.dataset.kbPills = '1';
kbSyncActive();
}
function kbApplyFilter(checkboxId) {
var form = document.querySelector('#filter-form');
if (!form) return;
var allCb = form.querySelectorAll('input[type="checkbox"]');
Array.prototype.forEach.call(allCb, function (c) { c.checked = false; });
if (checkboxId) {
var target = document.getElementById(checkboxId);
if (target) target.checked = true;
}
if (window.jQuery) window.jQuery(form).trigger('submit');
else form.submit();
}
function kbSyncActive() {
var bar = document.querySelector('.kb-pill-bar');
if (!bar) return;
var activeVal = kbActiveValue();
var pills = bar.querySelectorAll('.kb-pill');
var matched = false;
Array.prototype.forEach.call(pills, function (p) {
p.classList.remove('is-active');
if (activeVal && p.dataset.kbValue === activeVal) {
p.classList.add('is-active');
matched = true;
}
});
if (!matched) {
var allBtn = bar.querySelector('.kb-pill-all');
if (allBtn) allBtn.classList.add('is-active');
}
}
var KB_VERIFIED_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path fill="#16A34A" d="M12 1.5l2.55 1.86 3.15-.27 1.02 3 2.73 1.6-.99 3.01.99 3.01-2.73 1.6-1.02 3-3.15-.27L12 22.5l-2.55-1.86-3.15.27-1.02-3-2.73-1.6.99-3.01-.99-3.01 2.73-1.6 1.02-3 3.15.27z"></path><path fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M8.4 12.2l2.4 2.4 4.6-4.9"></path></svg>';
var KB_CAL_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>';
var KB_TUNE_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>';
var KB_CHEV_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>';
var KB_SORT_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>';
var KB_SEARCH_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>';
function kbEnhanceControls() {
var search = document.getElementById('searchBar');
if (search) {
var ph = 'Uzman, uzmanlık veya etiket ara...';
if (search.placeholder !== ph) search.placeholder = ph;
var sform = search.closest ? search.closest('form') : search.parentElement;
if (sform) {
if (!sform.classList.contains('kb-search-form')) sform.classList.add('kb-search-form');
if (!sform.querySelector('.kb-search-ic')) {
var sic = document.createElement('span');
sic.className = 'kb-search-ic';
sic.innerHTML = KB_SEARCH_SVG;
sform.insertBefore(sic, sform.firstChild);
}
}
}
var orderDd = document.getElementById('order-dd');
var navItem = search && search.closest ? search.closest('.item-empty') : null;
if (orderDd && navItem) {
if (!navItem.classList.contains('kb-search-bar')) navItem.classList.add('kb-search-bar');
if (orderDd.dataset.kbMoved !== '1') {
navItem.appendChild(orderDd);
orderDd.dataset.kbMoved = '1';
}
var ob = orderDd.querySelector('button');
if (ob && ob.dataset.kbSort !== '1') {
ob.dataset.kbSort = '1';
ob.innerHTML = '<span class="kb-tune-ic">' + KB_SORT_SVG + '</span>'
+ '<span class="kb-sort-label">Önerilenler</span>'
+ '<span class="kb-chev-ic">' + KB_CHEV_SVG + '</span>';
}
}
}
function kbWireSortMenu() {
var dd = document.getElementById('order-dd');
if (!dd) return;
var ul = dd.querySelector('ul');
if (!ul) return;
if (!ul.querySelector('.kb-sort-recommended')) {
var rli = document.createElement('li');
rli.className = 'kb-sort-recommended';
var ra = document.createElement('a');
ra.href = 'javascript:void(0);';
ra.textContent = 'Önerilenler';
rli.appendChild(ra);
ul.insertBefore(rli, ul.firstChild);
ra.addEventListener('click', function (e) {
e.preventDefault();
e.stopPropagation();
var cb0 = dd.querySelector('input[type="checkbox"]'); if (cb0) cb0.checked = false;   
var form = document.getElementById('filter-form');
var oi = form ? form.querySelector('input[name="order"]') : null;
if (oi) oi.value = '';   
if (form) { if (window.jQuery) window.jQuery(form).trigger('submit'); else form.submit(); }
});
}
var recLi = ul.querySelector('.kb-sort-recommended');
if (recLi) {
var recA = recLi.querySelector('a');
if (recA) {
if (recA.textContent.trim() !== 'Önerilenler') recA.textContent = 'Önerilenler';
if (recA.dataset.kbOnerObs !== '1') {
recA.dataset.kbOnerObs = '1';
try {
var mo = new MutationObserver(function () {
if (recA.textContent.trim() !== 'Önerilenler') recA.textContent = 'Önerilenler';
});
mo.observe(recA, { childList: true, characterData: true, subtree: true });
} catch (e) {}
}
}
}
var items = dd.querySelectorAll('ul li:not(.divider)');
if (!items.length) return;
var curOrder = '';
var om = (window.location.search || '').match(/[?&]order=([^&]*)/);
if (om) curOrder = decodeURIComponent(om[1] || '').trim();
if (!curOrder) {
var oi2 = document.querySelector('#filter-form input[name="order"]');
if (oi2 && oi2.value) curOrder = String(oi2.value).trim();
}
var targetLi = null;
if (curOrder && curOrder !== '0') {
Array.prototype.forEach.call(items, function (li) {
var la = li.querySelector('a');
var oc = la ? (la.getAttribute('onclick') || '') : '';
var vm = oc.match(/val\(\s*['"]?(\d+)['"]?\s*\)/);
        if (vm && vm[1] === curOrder) targetLi = li;
      });
    }
    if (!targetLi) targetLi = ul.querySelector('.kb-sort-recommended') || items[0];
    Array.prototype.forEach.call(dd.querySelectorAll('ul li'), function (x) { x.classList.remove('kb-sort-active'); });
    targetLi.classList.add('kb-sort-active');
    var slbl = dd.querySelector('.kb-sort-label');
    var tla = targetLi.querySelector('a');
    if (slbl && tla) { var tt = (tla.textContent || '').trim(); if (tt) slbl.textContent = tt; }
    if (dd.dataset.kbSortWired === '1') return;
    dd.dataset.kbSortWired = '1';
    Array.prototype.forEach.call(items, function (li) {
      if (li.classList.contains('kb-sort-recommended')) return;   /* kendi reload handler'i var */
      var a = li.querySelector('a');
      if (!a) return;
      a.addEventListener('click', function () {
        Array.prototype.forEach.call(dd.querySelectorAll('ul li'), function (x) { x.classList.remove('kb-sort-active'); });
        li.classList.add('kb-sort-active');
        var lbl = dd.querySelector('.kb-sort-label');
        if (lbl) { var t = (a.textContent || '').trim(); if (t) lbl.textContent = t; }
        var cb = dd.querySelector('input[type="checkbox"]'); if (cb) cb.checked = false;
      });
    });
  }
  /* MOBIL: pill satiri yerine "Filtre" butonu → tiklayinca #filter-form panel olarak acilir
     (Sirketime Ozel Uzmanlar[varsa] + kategori gruplari accordion, coktan secmeli sub-checkbox).
     Buton #filter-form'dan hemen once inject; desktop'ta CSS ile gizli. Idempotent. */
  function kbMobileFilter() {
    var form = document.getElementById('filter-form');
    if (!form || !form.parentNode) return;
    var btn = document.querySelector('.kb-filter-btn');   /* document-wide: tek buton */
    if (!btn) {
      btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'kb-filter-btn';
      btn.innerHTML = '<span class="kb-filter-ic">' + KB_TUNE_SVG + '</span>'
        + '<span class="kb-filter-label">Filtre</span>'
        + '<span class="kb-filter-chev">' + KB_CHEV_SVG + '</span>';
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var f = document.getElementById('filter-form');   /* re-query (form re-render'a dayanikli) */
        if (!f) return;
        var open = f.classList.toggle('kb-mfilter-open');
        btn.classList.toggle('is-open', open);
      });
      if (!document.body.dataset.kbMFilterOutside) {
        document.body.dataset.kbMFilterOutside = '1';
        document.addEventListener('click', function (e) {
          if (e.target.closest && (e.target.closest('#filter-form') || e.target.closest('.kb-filter-btn'))) return;
          var f = document.getElementById('filter-form');
          if (f) f.classList.remove('kb-mfilter-open');
          var kb = document.querySelector('.kb-filter-btn'); if (kb) kb.classList.remove('is-open');
        });
      }
    }
    /* KRITIK: butonu HER kbScan'de #filter-form'un hemen ONUNE (re)yerlestir. navigator-wp /
       native JS #filter-form'u baska parent'a tasiyinca buton oksuz kaliyor → panel butonun
       ustunde aciliyordu. Bu satir butonu daima form ile bitisik + form'dan ONCE tutar. */
    if (form.previousElementSibling !== btn) {
      form.parentNode.insertBefore(btn, form);
    }
    /* Parent'i isaretle → mobilde CSS ile block yapilir (buton+panel dikey stack; parent
       flex-row ise buton+form yan yana gelip panel butonun ustunde/yaninda kaliyordu). */
    if (form.parentNode && !form.parentNode.classList.contains('kb-mfilter-host')) {
      form.parentNode.classList.add('kb-mfilter-host');
    }
  }
  /* ---- "Şirketime Özel Uzmanlar" (B2B) — NATIVE company filtresini kullan ----
     Sentetik buton YOK. Native: login + Company aktif + user.company_id varsa, Agents.php
     başka filtre yoksa $_GET['company']='1' set eder → gizli #filter-form içindeki
     native .company_filter (#company checkbox + label) CHECKED gelir. CSS ile o native
     kontrol pill olarak gösterilir/stillenir (kategori dropdown'ları gizli kalır; :has
     ile checked → yeşil seçili). JS sadece: label metnini sadeleştir + checkbox değişince
     formu submit et (label[for=company] tıkı checkbox'ı toggle eder, native auto-submit yok). */
  function kbWireCompanyFilter() {
    var cb = document.getElementById('company');
    if (!cb) return;
    var lbl = document.querySelector('.company_filter label[for="company"]');
    if (lbl && lbl.textContent.trim() !== 'Şirketime Özel Uzmanlar') {
      lbl.textContent = 'Şirketime Özel Uzmanlar';
    }
    if (cb.dataset.kbWired !== '1') {
      cb.dataset.kbWired = '1';
      cb.addEventListener('change', function () {
        var form = document.getElementById('filter-form');
        if (form) { if (window.jQuery) window.jQuery(form).trigger('submit'); else form.submit(); }
      });
    }
  }
  /* ---- Kategori filtre grup dropdown'lari (native .dropdown-filter) ----
     Gizli #filter-form gorunur; native .dropdown-filter (grup adi butonu + .filter-ul alt
     kategori checkbox'lari) mockup pill'i olarak CSS'te stillenir. Native aç/kapa
     (.main-filter-dd:checked ~ ul) kirilgan → JS ile .is-open toggle; alt kategori secilince
     auto-submit; disari tik → kapat. Sadece #filter-form varsa (ana liste) çalisir. */
  function kbWireDropdownFilters() {
    var dds = document.querySelectorAll('#filter-form .dropdown-filter');
    if (!dds.length) return;
    Array.prototype.forEach.call(dds, function (dd) {
      if (dd.dataset.kbDd !== '1') {
        dd.dataset.kbDd = '1';
        var btn = dd.querySelector('button');
        if (btn) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var wasOpen = dd.classList.contains('is-open');
            Array.prototype.forEach.call(document.querySelectorAll('#filter-form .dropdown-filter.is-open'), function (o) { o.classList.remove('is-open'); });
            if (!wasOpen) {
              dd.classList.add('is-open');
              /* mobil: menu position:fixed (yatay scroll strip'in overflow clip'inden kacar) → top'u butona gore ayarla */
              var ul = dd.querySelector('.filter-ul');
              if (ul && window.matchMedia && window.matchMedia('(max-width: 767px)').matches) {
                var r = (dd.querySelector('button') || dd).getBoundingClientRect();
                ul.style.setProperty('top', (r.bottom + 6) + 'px', 'important');
              }
            }
          });
        }
        Array.prototype.forEach.call(dd.querySelectorAll('.dd-filter-item'), function (item) {
          item.addEventListener('change', function () {
            var form = document.getElementById('filter-form');
            if (form) { if (window.jQuery) window.jQuery(form).trigger('submit'); else form.submit(); }
          });
        });
      }
    });
    if (!document.body.dataset.kbDdOutside) {
      document.body.dataset.kbDdOutside = '1';
      document.addEventListener('click', function (e) {
        if (e.target.closest && e.target.closest('.dropdown-filter')) return;
        Array.prototype.forEach.call(document.querySelectorAll('#filter-form .dropdown-filter.is-open'), function (o) { o.classList.remove('is-open'); });
      });
    }
  }
  /* URL'deki aktif alt kategori (parent[]=value) checkbox'larini re-check et → :has ile
     pill aktif gorunur + menude secili satir. Native reload'da re-check etmiyor. */
  function kbSyncDropdownActive() {
    var search = window.location.search || '';
    if (!search) return;
    var qs = search.charAt(0) === '?' ? search.slice(1) : search;
    var active = {};
    qs.split('&').forEach(function (p) {
      var eq = p.indexOf('='); if (eq < 0) return;
      var k = decodeURIComponent(p.slice(0, eq).replace(/\+/g, ' '));
      var v = decodeURIComponent(p.slice(eq + 1));   /* value underscore'lu; + → space YAPMA */
      if (k.slice(-2) === '[]' && v) active[v] = 1;
    });
    Array.prototype.forEach.call(document.querySelectorAll('#filter-form .dd-filter-item'), function (item) {
      if (active[item.value] && !item.checked) item.checked = true;
    });
  }
  function kbScan() {
    kbEnsurePageAgents();     /* kategori sayfasinda .page.agents garanti (kbDecorateAll'dan once) */
    kbWireCompanyFilter();    /* B2B native company filtresi (sadece sirket kullanicisi) */
    kbWireDropdownFilters();  /* kategori grup dropdown pill'leri (ana liste) */
    kbSyncDropdownActive();   /* URL'e gore aktif alt kategorileri isaretle */
    kbEnhanceControls();      /* #searchBar/#order-dd yoksa (kategori) no-op */
    kbWireSortMenu();         /* siralama menusu: secili ogede yesil onay + etiket guncelle */
    kbMobileFilter();         /* mobil: "Filtre" butonu + panel (company + gruplar) */
  }
  /* ============================================================
     KART DECORATE — yeni tasarim
     .agents .item DCL'de null, deferred inject. window.load +
     setTimeout(300) + MutationObserver ile yakalan, livelock'u
     onlemek icin data-kb-card markeri kullan.
     ============================================================ */
  function kbExtractRating(starsEl) {
    if (!starsEl) return null;
    var stars = starsEl.querySelectorAll('.i-star');
    if (!stars.length) return null;
    return stars.length;
  }
  /* Yildiz icon'unu Unicode "★" yerine inline SVG ile degistir. Sadece ilk
     .i-star gorunur (digerleri CSS'te display:none); yine de hepsini idempotent
     olarak swap'lariz ki sonradan visibility degisirse hazir olsun.
     Idempotent: span'a data-kb-star="1" markeri konur; ikinci cagri no-op. */
  var KB_STAR_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="kb-star-svg" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>';
  function kbReplaceStarIcon(c) {
    if (!c) return;
    var stars = c.querySelectorAll('.profile-review-stars .i-star');
    if (!stars.length) return;
    Array.prototype.forEach.call(stars, function (s) {
      if (s.dataset.kbStar === '1') return;
      s.innerHTML = KB_STAR_SVG;
      s.dataset.kbStar = '1';
    });
  }
  /* Status-class -> availability metni eslemesi (canli statusUpdate'da da kullanilir) */
  function kbAvailabilityText(c) {
    if (!c) return 'Müsait';
    if (c.classList.contains('online')) return 'Randevu Alınabilir';
    if (c.classList.contains('busy')) return 'Meşgul';
    if (c.classList.contains('offline')) return 'Çevrimdışı';
    return 'Randevu Alınabilir';
  }
  /* Bir kartin .kb-availability text'ini c'nin guncel class'ina gore senkronla.
     Idempotent: ayni text ise dokunmaz (livelock korumasi). */
  function kbSyncAvailability(c) {
    if (!c) return;
    var img = c.querySelector('.item-image');
    if (!img) return;
    var av = img.querySelector('.kb-availability');
    if (!av) return;
    var want = kbAvailabilityText(c);
    if (av.textContent !== want) av.textContent = want;
  }
  /* Chip decorate — marker'dan BAGIMSIZ; her run'da yeniden hesaplanir.
     Geç inject edilen veya yenilenen .profile-categories icin gerekli.
     Idempotent: ayni sonucta DOM'a yazmaz (writeIfChanged) — MO livelock yok. */
  function kbDecorateChips(c) {
    if (!c) return;
    var pcGroups = c.querySelectorAll('.profile-categories');
    if (!pcGroups.length) return;
    /* Native agent.list.php: ONCE TAGS grubu (satir 62-71: $A->tags, tag_view==1), SONRA
       KATEGORILER grubu (satir 73-79: $A->category). Kart'ta KATEGORILER gorunmeli → SON
       .profile-categories grubunu (kategoriler) goster, oncekini (tags "Etiket 1/2") gizle.
       Local'de tag yoksa tek grup=kategoriler → yine dogru. (CSS: .kb-group-hidden{display:none}) */
    var catGroup = pcGroups[pcGroups.length - 1];
    for (var gi = 0; gi < pcGroups.length; gi++) {
      var isCat = pcGroups[gi] === catGroup;
      var hasHidden = pcGroups[gi].classList.contains('kb-group-hidden');
      if (!isCat && !hasHidden) pcGroups[gi].classList.add('kb-group-hidden');
      else if (isCat && hasHidden) pcGroups[gi].classList.remove('kb-group-hidden');
    }
    /* Gercek kategori chip'leri (JS-injected .kb-more-tags HARIC) */
    var realBtns = catGroup.querySelectorAll('.pcategory-btn');
    var total = realBtns.length;
    var visibleLimit = 2;
    var hiddenCount = (total > visibleLimit ? total - visibleLimit : 0);
    /* Hedef state'i hesapla, sonra writeIfChanged ile uygula */
    var existingMore = catGroup.querySelector('.kb-more-tags');
    var existingMoreText = existingMore ? existingMore.textContent : null;
    var wantMoreText = hiddenCount > 0 ? '+' + hiddenCount : null;
    /* Once chip'lerin .kb-hidden state'ini sync et */
    Array.prototype.forEach.call(realBtns, function (b, i) {
      var shouldHide = i >= visibleLimit;
      var has = b.classList.contains('kb-hidden');
      if (shouldHide && !has) b.classList.add('kb-hidden');
      else if (!shouldHide && has) b.classList.remove('kb-hidden');
    });
    /* +N pill — gerek yoksa sil, varsa text guncelle, yoksa olustur */
    if (!wantMoreText) {
      if (existingMore && existingMore.parentNode) {
        existingMore.parentNode.removeChild(existingMore);
      }
    } else if (existingMore) {
      if (existingMoreText !== wantMoreText) existingMore.textContent = wantMoreText;
    } else {
      var more = document.createElement('span');
      more.className = 'kb-more-tags';
      more.textContent = wantMoreText;
      catGroup.appendChild(more);
    }
  }
  /* .profile-categories icindeki childList degisimlerini izle —
     chip yeniden inject edildiginde decorate'i yeniden cagir. Livelock guvenli:
     kbDecorateChips writeIfChanged. */
  function kbInstallChipObserver(c) {
    if (!c) return;
    var groups = c.querySelectorAll('.profile-categories');
    Array.prototype.forEach.call(groups, function (g) {
      if (g.dataset.kbChipObs === '1') return;
      g.dataset.kbChipObs = '1';
      try {
        var mo = new MutationObserver(function () {
          kbDecorateChips(c);
        });
        mo.observe(g, { childList: true });
      } catch (e) { /* no-op */ }
    });
  }
  /* Isim + Unvan + Rating'i tek wrapper icine tasi. Yapi:
       .kb-title-wrap (flex column, sabit min-height)
         .kb-title-row (flex row, baseline=flex-start)
           .item-title  (flex:1, max-width: calc(100% - 60px))
           .profile-review-stars  (flex:0 0 auto, kompakt: ★ 5.0)
         .unvan-title
     Idempotent: tum elemanlar zaten dogru yapidaysa cikis.
     "(N)" comment-count CSS ile gizleniyor — sadece yildiz + sayi kalir. */
  function kbWrapTitle(c) {
    if (!c) return;
    /* Eski/orphan: kart icinde HERHANGI BIR yerde BOS .kb-title-wrap kalmis olabilir. */
    var orphans = c.querySelectorAll('.kb-title-wrap');
    Array.prototype.forEach.call(orphans, function (o) {
      if (o.children.length === 0 && o.parentNode) {
        o.parentNode.removeChild(o);
      }
    });
    /* Bos .kb-title-row temizle. */
    var orphanRows = c.querySelectorAll('.kb-title-row');
    Array.prototype.forEach.call(orphanRows, function (o) {
      if (o.children.length === 0 && o.parentNode) {
        o.parentNode.removeChild(o);
      }
    });
    var title = c.querySelector('.item-title');
    var unvan = c.querySelector('.unvan-title');
    var stars = c.querySelector('.profile-review-stars');
    if (!title && !unvan) return;
    /* Hedef parent: Yuvadan template'inde .uzm-card-col-r mevcut — wrap onun
       icine ILK CHILD olarak girer (resim .uzm-card-col-l'de, sonra wrap, sonra
       box2/3/4 gelir). Boylece visual order: foto -> isim+rating+unvan -> chip -> buton.
       Yuvadan disinda fallback: title'in mevcut parent'i. */
    var colR = c.querySelector('.uzm-card-col-r');
    /* FALLBACK = .item-c (title.parentNode DEĞİL). Prod'da FLAT DOM'da (.uzm-card yok)
       title bir kez wrap'e taşınınca parentNode wrap'in İÇİNE düşüyor → insertBefore'da
       "new child contains parent" (HierarchyRequestError). c her zaman wrap'in ATASI. */
    var desiredParent = colR || c;
    if (!desiredParent) return;
    /* Idempotent kontrolu:
       - title ve stars ayni .kb-title-row altinda
       - row'un parent'i .kb-title-wrap
       - unvan da .kb-title-wrap altinda
       - wrap'in parent'i desiredParent (Yuvadan'da .uzm-card-col-r) */
    var titleRow = title && title.parentElement && title.parentElement.classList.contains('kb-title-row') ? title.parentElement : null;
    var existingWrap = titleRow && titleRow.parentElement && titleRow.parentElement.classList.contains('kb-title-wrap') ? titleRow.parentElement : null;
    var rowOk = titleRow
      && existingWrap
      && (!stars || stars.parentElement === titleRow);
    var unvanInWrapOk = !unvan
      || (unvan.parentElement && unvan.parentElement.classList.contains('kb-title-wrap'));
    var parentOk = existingWrap && existingWrap.parentElement === desiredParent
      && desiredParent.firstElementChild === existingWrap;
    if (rowOk && unvanInWrapOk && parentOk) {
      c.dataset.kbTitleWrap = '1';
      return;
    }
    /* Var olan wrap'i bulup yeniden kullan, yoksa yenisini olustur.
       Wrap her durumda desiredParent'in ILK child'i olmali. */
    var wrap = c.querySelector('.kb-title-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'kb-title-wrap';
    }
    /* Wrap'i dogru parent'in basina yerlestir */
    if (wrap.parentElement !== desiredParent || desiredParent.firstElementChild !== wrap) {
      if (desiredParent.firstChild) desiredParent.insertBefore(wrap, desiredParent.firstChild);
      else desiredParent.appendChild(wrap);
    }
    /* Row icin: var olan kullan, yoksa olustur. Wrap'in ilk child'i olmali. */
    var row = wrap.querySelector(':scope > .kb-title-row');
    if (!row) {
      row = document.createElement('div');
      row.className = 'kb-title-row';
      if (wrap.firstChild) wrap.insertBefore(row, wrap.firstChild);
      else wrap.appendChild(row);
    } else if (wrap.firstChild !== row) {
      wrap.insertBefore(row, wrap.firstChild);
    }
    /* Title -> row */
    if (title && title.parentElement !== row) row.appendChild(title);
    /* Stars -> row (title'dan sonra). Stars opsiyonel. */
    if (stars && stars.parentElement !== row) row.appendChild(stars);
    /* Sira: title once, stars sonra */
    if (title && stars && title.nextSibling !== stars) {
      row.appendChild(stars);
    }
    /* Unvan -> wrap (row'dan sonra) */
    if (unvan && unvan.parentElement !== wrap) wrap.appendChild(unvan);
    if (unvan && row.nextSibling !== unvan) {
      wrap.appendChild(unvan);
    }
    c.dataset.kbTitleWrap = '1';
  }
  function kbDecorateCard(item) {
    if (!item) return;
    var c = item.querySelector('.item-c');
    if (!c) return;
    /* Chip decorate marker'dan BAGIMSIZ — her cagrida calisir (writeIfChanged). */
    kbDecorateChips(c);
    kbInstallChipObserver(c);
    /* Title wrapper — marker'dan bagimsiz cagrilabilir, idempotent. */
    kbWrapTitle(c);
    /* Yildiz icon swap — Unicode "★" yerine inline SVG. Idempotent (per-span). */
    kbReplaceStarIcon(c);
    if (item.dataset.kbCard === '1') return;
    item.dataset.kbCard = '1';
    /* 1. "Onaylı Profil" rozeti — sol ust (mockup). Idempotent: img icinde varsa atla. */
    var img = c.querySelector('.item-image');
    if (img && !img.querySelector('.kb-verified')) {
      var vb = document.createElement('span');
      vb.className = 'kb-verified';
      vb.innerHTML = KB_VERIFIED_SVG + '<span class="kb-verified-label">Onaylı Uzman</span>';
      img.appendChild(vb);
    }
    /* 2. Musaitlik pill — sol alt. Status'a gore metin (canli olarak da guncellenir) */
    if (img && !img.querySelector('.kb-availability')) {
      var av = document.createElement('span');
      av.className = 'kb-availability';
      av.textContent = kbAvailabilityText(c);
      img.appendChild(av);
    }
    /* 2b. Class-mutation observer: socket.io 'statusUpdate' .agent-status class'ini
          degistirir; biz de text'i yeniden hesaplayalim. */
    if (c.classList.contains('agent-status') && c.dataset.kbStatusObs !== '1') {
      c.dataset.kbStatusObs = '1';
      try {
        var smo = new MutationObserver(function (mutations) {
          for (var i = 0; i < mutations.length; i++) {
            if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'class') {
              kbSyncAvailability(c);
              break;
            }
          }
        });
        smo.observe(c, { attributes: true, attributeFilter: ['class'] });
      } catch (e) { /* no-op */ }
    }
    /* 3. Rating sayisal — sablon integer cizdigi icin yildiz sayisini al */
    var rs = c.querySelector('.profile-review-stars');
    if (rs && !rs.querySelector('.kb-rating-num')) {
      var num = kbExtractRating(rs);
      if (num !== null) {
        var rn = document.createElement('span');
        rn.className = 'kb-rating-num';
        rn.textContent = num.toFixed(1);
        var firstStar = rs.querySelector('.i-star');
        if (firstStar && firstStar.nextSibling) {
          rs.insertBefore(rn, firstStar.nextSibling);
        } else {
          rs.appendChild(rn);
        }
      }
    }
    /* 3b. Comment count — sablon "(128 degerlendirme)" veya "(128)" cizebilir.
          4 kolon kartta dar oldugu icin sadece "(N)" formuna kisalt. Idempotent:
          ayni text ise dokunmaz. */
    if (rs) {
      var cc = rs.querySelector('.comment-count');
      if (cc) {
        var raw = (cc.textContent || '').trim();
        var m = raw.match(/(\d[\d.,]*)/);
        if (m) {
          var want = '(' + m[1] + ')';
          if (cc.textContent !== want) cc.textContent = want;
        }
      }
    }
    /* 4. Etiket chip'leri — kbDecorateChips() yukarida marker'dan bagimsiz calisti. */
    /* 5. Fiyat blogu — orijinal .agent-card-list-price'tan price+currency cek,
          .item-action icine sol tarafa yerlestir */
    var act = c.querySelector('.item-action.action-btn');
    var priceSrc = c.querySelector('.agent-card-list-price');
    if (act && priceSrc && !act.querySelector('.kb-price-block')) {
      var priceVal = (priceSrc.querySelector('.agent-card-list-price-pr') || {}).textContent || '';
      /* "Fiyat: 950" -> sadece sayi+TL kismini al */
      priceVal = priceVal.replace(/^[^\d]*/, '').trim();
      var cur = (priceSrc.querySelector('.agent-card-list-price-cur') || {}).textContent || '';
      cur = (cur || '').trim();
      if (priceVal) {
        var pb = document.createElement('div');
        pb.className = 'kb-price-block';
        var pl = document.createElement('span');
        pl.className = 'kb-price-label';
        pl.textContent = 'SEANS';
        var pv = document.createElement('span');
        pv.className = 'kb-price-value';
        pv.textContent = priceVal + (cur ? ' ' + cur : '');
        var ps = document.createElement('span');
        ps.className = 'kb-price-suffix';
        ps.textContent = "'den";
        pv.appendChild(ps);
        pb.appendChild(pl);
        pb.appendChild(pv);
        /* En basa ekle (buton sagda kalsin) */
        if (act.firstChild) act.insertBefore(pb, act.firstChild);
        else act.appendChild(pb);
      }
    }
    /* 6. Buton metni — takvim ikonu artik CSS ::before mask ile (native re-render'a
dayanikli; JS-inject ikon surekli wipe ediliyordu → flicker). Sadece metin bos
ise "Randevu Al" yaz; native metni (status'a gore) override etme. */
    var btn = act && act.querySelector('a.btn');
    if (btn && !(btn.textContent || '').trim()) {
      btn.textContent = 'Randevu Al';
    }
  }
  /* Sonuç sayaci + ayrac — filtre satiri ile kart grid'i arasina "N uzman listeleniyor"
+ alt cizgi. N = render edilen kart sayisi (filtrelenince kesin; sayfalamada sayfa-basi).
Idempotent: .kb-list-head varsa sadece metni gunceller. Grid'in HEMEN ONUNE girer. */
  function kbBuildCount() {
    /* AGENT grid'ini bul — .item-c iceren liste. Kategori landing sayfasinda (or.
/kendim-icin) ayrica .categories .list.flex (pill'ler, .item-c YOK) var; sayac
       ona degil agent listesine girmeli. */
    var grid = null;
    var cand = document.querySelectorAll('.page.agents .list.flex:not(.order-flex-list)');
    for (var gi = 0; gi < cand.length; gi++) {
      if (cand[gi].querySelector('.item .item-c')) { grid = cand[gi]; break; }
    }
    if (!grid || !grid.parentNode) return;
    var n = grid.querySelectorAll(':scope > .item').length;
    if (!n) return;   /* kart henuz inject olmadi */
    var head = document.querySelector('.kb-list-head');
    if (!head) {
      head = document.createElement('div');
      head.className = 'kb-list-head';
      var span = document.createElement('span');
      span.className = 'kb-result-count';
      head.appendChild(span);
      grid.parentNode.insertBefore(head, grid);
    }
    var s = head.querySelector('.kb-result-count');
    var txt = n + ' uzman listeleniyor';
    if (s && s.textContent !== txt) s.textContent = txt;
  }
  function kbDecorateAll() {
    var items = document.querySelectorAll('.page.agents .list.flex > .item');
    Array.prototype.forEach.call(items, kbDecorateCard);
    kbBuildCount();
  }
  /* MutationObserver — geç inject edilen kartlari yakala. Livelock korumasi:
     yalnizca .list.flex altindaki node'lari isle, attribute degisikliklerini
dinleme; data-kb-card markeri tekrar islemi engeller. */
function kbInstallObserver() {
var lists = document.querySelectorAll('.page.agents .list.flex');
if (!lists.length) return;
Array.prototype.forEach.call(lists, function (list) {
if (list.dataset.kbObs === '1') return;
list.dataset.kbObs = '1';
try {
var mo = new MutationObserver(function (mutations) {
var needScan = false;
for (var i = 0; i < mutations.length; i++) {
if (mutations[i].addedNodes && mutations[i].addedNodes.length) {
needScan = true;
break;
}
}
if (needScan) kbDecorateAll();
});
mo.observe(list, { childList: true, subtree: true });
} catch (e) {  }
});
}
function kbCardLifecycle() {
kbDecorateAll();
kbInstallObserver();
}
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', function () {
kbScan();
kbCardLifecycle();
});
} else {
kbScan();
kbCardLifecycle();
}
window.addEventListener('load', function () {
kbScan();
kbCardLifecycle();
setTimeout(function () { kbScan(); kbDecorateAll(); }, 300);
setTimeout(function () { kbScan(); kbDecorateAll(); }, 800);
setTimeout(function () { kbScan(); kbDecorateAll(); }, 1500);
});
})();

/* ============================================================================
   YUVADAN — YENİ TASARIM EK PARÇALARI (yalnızca YENİ olanlar)
   ----------------------------------------------------------------------------
   Bu dosya, prod'da çalışan github/CDN yuvadan.js (A) ile ÇAKIŞMAZ.
   İçinde SADECE A'da (ve mevcut scripts_in_head'de) BULUNMAYAN yeni parçalar var.
   A + bu dosya birlikte yüklenmeli (A'ya dokunulmadı).

   DAHİL EDİLENLER (A'da yok → yeni):
     1) Kategori listesi ok ikonu (.item-arrow)
     2) 3 sütunlu MEGA menü builder (.large-menu)
     3) Mobil menü başlık çubuğu + accordion davranışı
     4) /s/cocuklarim-icin arka plan + .uzmanlari-incele smooth-scroll
     5) isCategory → container column-reverse (window load)
     6) Sayfaya özel widget'lar: kendim-icin / ailem-icin /
        cocugum-icin-akademik / cocugum-icin-pedagojik / cocuklarim-icin

   ÇIKARILANLAR (A'da / scripts_in_head'de zaten var → tekrar eklenmedi):
     - Takvim observer (calendar-body-v2) + chat + "Kalan Seans"/"1 Seans"
     - a[data-method="uc"] "Varolan Hediye Seanslarımla"  (A satır 70)
     - yuva-navigator-wp yeniden düzenleme  (mevcut scripts_in_head'de)
     - uzmanlar.js tam IIFE  (A içinde tam mevcut)
     - Blog JSON-LD  (kullanıcı kendi koruyor)

   Gereksinim: jQuery (prod'da A'dan önce yükleniyor).
   ============================================================================ */


/* ========== 1) Kategori listesi öğelerine ok ikonu (bir kez) ========== */
$(function () {
  $('.categories .list .item > a').each(function () {
    if ($(this).find('.item-arrow').length) return;   // tekrar eklemeyi önle
    $(this).append(' <i class="far fa-arrow-right item-arrow"></i>');
  });
});

/* ========== 2) Menüyü 3 sütunlu mega yapıya dönüştür (bir kez) ========== */
$(function () {
  var $menu = $('.large-menu');
  if (!$menu.length || $menu.data('mega-built')) return;

  function grab(slug) {
    var $col = $menu.find('.dd-column').filter(function () {
      var h = $(this).children('a').first().attr('href') || '';
      return h.indexOf(slug) !== -1;
    }).first();
    if (!$col.length) return null;
    return {
      headHref: $col.children('a').first().attr('href'),
      subs: $col.children('a.sub-a').map(function () {
        return { href: $(this).attr('href'), text: $(this).text().trim() };
      }).get()
    };
  }

  var akademik  = grab('cocugum-icin-akademik');
  var pedagojik = grab('cocugum-icin-pedagojik');
  var kendim    = grab('kendim-icin');
  var ailem     = grab('ailem-icin');

  function list(d){ return (d ? d.subs : []).map(function(s){
    return '<a class="sub-a" href="'+s.href+'"><span>'+s.text+'</span></a>'; }).join(''); }
  function card(label,d){ return d ? '<div class="mega-card"><a class="mega-sub" href="'+
    d.headHref+'">'+label+'</a>'+list(d)+'</div>' : ''; }
  function col(title,href,desc,inner){
    var t = href ? '<a class="mega-title" href="'+href+'">'+title+'</a>'
                 : '<h3 class="mega-title">'+title+'</h3>';
    return '<div class="mega-col">'+t+'<p class="mega-desc">'+desc+'</p>'+inner+'</div>';
  }

  var html =
    '<button type="button" class="mega-close" aria-label="Kapat">&times;</button>' +
    col('Çocuğum İçin', null,
        'Çocuğunuzun gelişimini destekleyin ve geleceğini güçlendirin.',
        card('Akademik Destek', akademik) + card('Pedagojik &amp; Psikolojik', pedagojik)) +
    col('Kendim İçin', kendim ? kendim.headHref : null,
        'İyi hissetmek için kendinize zaman ayırın, ilk adımı bugün atın.',
        '<div class="mega-list mega-card">'+list(kendim)+'</div>') +
    col('Ailem İçin', ailem ? ailem.headHref : null,
        'Aile bağlarınızı güçlendirin, desteğe her zaman yakın olun.',
        '<div class="mega-list mega-card">'+list(ailem)+'</div>');

  $menu.html(html).data('mega-built', true);

  // Masaüstü panel X butonu menüyü kapatsın
  $menu.on('click', '.mega-close', function (e) {
    e.preventDefault(); e.stopPropagation();
    $menu.hide();
    $('.dd > a.expanded').removeClass('expanded');
  });
});

/* ========== 3) Mobil: başlık çubuğu + accordion davranışı ========== */
$(function () {
  // Mobil başlık çubuğu (← Kategoriler ✕)
  if ($('.nav-container').length && !$('.mobile-cat-header').length) {
    $('.nav-container').prepend(
      '<div class="mobile-cat-header">' +
        '<button type="button" class="mch-close" aria-label="Kapat">&times;</button>' +
      '</div>'
    );
  }
  // Başlıktaki geri/kapat -> menüyü kapat
  $(document).on('click', '.mch-close, .mch-back', function (e) {
    e.preventDefault();
    $('#nav-close').trigger('click');
  });

  // Varsayılan açık: Çocuğum İçin + ilk kart (Akademik)
/*  $('.large-menu .mega-col:has(.mega-card)').addClass('mega-open');
  $('.large-menu .mega-card').first().addClass('mega-open');*/

  // Accordion aç/kapat (yalnız mobil; masaüstünde başlıklar link olarak çalışır)
  $(document).on('click',
    '.large-menu .mega-card > .mega-sub, .large-menu .mega-col > a.mega-title, .large-menu .mega-col > h3.mega-title',
    function (e) {
      if (window.innerWidth > 768) return;
      e.preventDefault();
      var $sec = $(this).hasClass('mega-sub') ? $(this).closest('.mega-card') : $(this).closest('.mega-col');
      $sec.toggleClass('mega-open');
    }
  );
});

/* ========== 4) /s/cocuklarim-icin arka plan + .uzmanlari-incele smooth-scroll ========== */
$(document).ready(function() {

  if (window.location.pathname === '/s/cocuklarim-icin') {
    $('.wrapper').css('background', '#fcedcf');
  }

});

$(document).on('click', '.uzmanlari-incele', function (e) {
  var $target = $('.agents.bg');
  if (!$target.length) return;
  e.preventDefault();

  var headerOffset = 110;                          // fixed header payı
  var y = $target.offset().top - headerOffset;

  $('html, body').stop().animate({ scrollTop: y }, 900, 'swing');
  //                                              ^süre(ms)  ^easing
});

/* ========== 5) isCategory → container column-reverse (window load) ========== */
window.addEventListener("load", function(){
  if(isCategory && isCategory == true) {
    document.querySelector('body>.wrapper>.page>.page-header').style.paddingBottom = '0px';
    document.querySelector('body>.wrapper>.page>.container').style.display = 'flex';
    document.querySelector('body>.wrapper>.page>.container').style.flexDirection = 'column-reverse';
  }
});

/* ========== 6) Sayfaya özel widget'lar (kendim/ailem/çocuğum/çocuklarım) ========== */
$(document).ready(function() {

  if (window.location.pathname === '/tr-TR/s/cocuklarim-icin') {
    $('.wrapper').css('background', '#fcedcf');
  }

  if (window.location.pathname === '/tr-TR/kendim-icin') {
    $('.wrapper').css('background', '#fff');
    $('.agents.bg').attr('id', 'tikla');
    $('.container').css('max-width','100%');
     $('.page-header .container').css('padding','0');
    $('.cramp-categories').css('background-color','#e9f2fb');
$('.categories .section-content').prepend('<div class="categories__header"><h2 class="font-h2 cl-4 fs-10">Sunulan Destek Türleri</h2><p class="font-p cl-7 fs-6">İhtiyacınıza en uygun destek alanını seçin.</p></div></div>');
$('.header .container').css({
    'position': 'relative',
    'width': '100%',
    'max-width': '1140px',
    'margin': '0 auto'
});

$('.agents.bg').append('<div class="widget-wrapper"><div class="agents__container"><div class="widget-item"><div class="trust__container"><div class="trust-list"><div class="trust-item"><span><i class="fas fa-shield-alt trust-icon"></i>&nbsp;</span><span class="trust-text font-p cl-4 fs-7">Gizli & güvenli görüşme</span></div><div class="trust-item"><span><i class="fas fa-user-graduate trust-icon"></i>&nbsp;</span><span class="trust-text font-p cl-4 fs-7">Doğrulanmış uzmanlar</span></div><div class="trust-item"><span><i class="fas fa-desktop trust-icon"></i>&nbsp;</span></i><span class="trust-text font-p cl-4 fs-7">%100 online</span></div></div></div></div><div class="widget-item bg-15"><div class="band__CTA"><h2 class="Band-cta-title font-h2 cl-6 fs-10">Kendin için bir adım atmaya hazır mısın?</h2><div class="Band-cta-action"><a href="#" class="font-p cl-3 fs-7">Bana uygun uzmanı bul <i class="far fa-arrow-right"></i></a></div></div></div></div></div>');

  }

  if (window.location.pathname === '/tr-TR/ailem-icin') {
    $('.wrapper').css('background', '#fff');
    $('.container').css('max-width','100%');
    $('.page-header .container').css('padding','0');
    $('.cramp-categories').css('background-color','#e9f2fb');
$('.categories .section-content').prepend('<div class="categories__header"><h2 class="font-h2 cl-4 fs-10">Sunulan Destek Türleri</h2><p class="font-p cl-7 fs-6">İhtiyacınıza en uygun destek alanını seçin.</p></div></div>');
$('.header .container').css({
    'position': 'relative',
    'width': '100%',
    'max-width': '1140px',
    'margin': '0 auto'
});

$('.agents.bg').append('<div class="widget-wrapper"><div class="agents__container"><div class="widget-item"><div class="trust__container"><div class="trust-title"><p class="font-p cl-4 fs-6 fw-1">Aile konuları özeldir.</p><p class="font-p cl-4 fs-7 op-1">Tüm görüşmeler gizlidir ve kayıt altına alınmaz.</p></div><div class="trust-list"><div class="trust-item"><span><i class="fas fa-shield-alt trust-icon"></i>&nbsp;</span><span class="trust-text font-p cl-4 fs-7">Gizli & güvenli görüşme</span></div><div class="trust-item"><span><i class="fas fa-user-graduate trust-icon"></i>&nbsp;</span><span class="trust-text font-p cl-4 fs-7">Doğrulanmış uzmanlar</span></div><div class="trust-item"><span><i class="fas fa-desktop trust-icon"></i>&nbsp;</span></i><span class="trust-text font-p cl-4 fs-7">%100 online</span></div></div></div></div><div class="widget-item bg-18"><div class="band__CTA"><h2 class="Band-cta-title font-h2 cl-6 fs-10">Aileniz için doğru adımı atın.</h2><div class="Band-cta-action"><a href="#" class="font-p cl-11 fs-7">Ailem için doğru uzmanı bul <i class="far fa-arrow-right"></i></a></div></div></div></div></div>');

document.querySelectorAll('.cramp-categories').forEach(function(el) {
  el.style.setProperty('background', '#e8faf3', 'important');
});

  }


  if (window.location.pathname === '/tr-TR/cocugum-icin-akademik') {
    $('.wrapper').css('background', '#fff');
    $('.container').css('max-width','100%');
     $('.page-header .container').css('padding','0');
    $('.cramp-categories').css('background-color','#e9f2fb');
$('.categories .section-content').prepend('<div class="categories__header"><h2 class="font-h2 cl-4 fs-10">Sunulan Destek Türleri</h2><p class="font-p cl-7 fs-6">İhtiyacınıza en uygun destek alanını seçin.</p></div></div>');
$('.header .container').css({
    'position': 'relative',
    'width': '100%',
    'max-width': '1140px',
    'margin': '0 auto'
});

$('.agents.bg').append('<div class="widget-wrapper"><div class="agents__container"><div class="widget-item"><div class="trust__container"><div class="trust-list"><div class="trust-item"><span><i class="fas fa-shield-alt trust-icon"></i>&nbsp;</span><span class="trust-text font-p cl-4 fs-7">Gizli & güvenli görüşme</span></div><div class="trust-item"><span><i class="fas fa-user-graduate trust-icon"></i>&nbsp;</span><span class="trust-text font-p cl-4 fs-7">Doğrulanmış uzmanlar</span></div><div class="trust-item"><span><i class="fas fa-desktop trust-icon"></i>&nbsp;</span></i><span class="trust-text font-p cl-4 fs-7">%100 online</span></div></div></div></div><div class="widget-item bg-15"><div class="band__CTA"><h2 class="Band-cta-title font-h2 cl-6 fs-10">Akademik başarıda doğru adım.</h2><div class="Band-cta-action"><a href="#" class="font-p cl-6 fs-7 bg-20">Akademik destek al <i class="far fa-arrow-right"></i></a></div></div></div></div></div>');

  }

  if (window.location.pathname === '/tr-TR/hizmetler/pedagoji-ve-psikolojik-destek') {
    $('.wrapper').css('background', '#fff');
    $('.container').css('max-width','100%');
     $('.page-header .container').css('padding','0');
    $('.cramp-categories').css('background-color','#e9f2fb');
$('.categories .section-content').prepend('<div class="categories__header"><h2 class="font-h2 cl-4 fs-10">Sunulan Destek Türleri</h2><p class="font-p cl-7 fs-6">İhtiyacınıza en uygun destek alanını seçin.</p></div></div>');
$('.header .container').css({
    'position': 'relative',
    'width': '100%',
    'max-width': '1140px',
    'margin': '0 auto'
});

$('.agents.bg').append('<div class="widget-wrapper"><div class="agents__container"><div class="widget-item"><div class="trust__container"><div class="trust-list"><div class="trust-item"><span><i class="fas fa-shield-alt trust-icon"></i>&nbsp;</span><span class="trust-text font-p cl-4 fs-7">Gizli & güvenli görüşme</span></div><div class="trust-item"><span><i class="fas fa-user-graduate trust-icon"></i>&nbsp;</span><span class="trust-text font-p cl-4 fs-7">Doğrulanmış uzmanlar</span></div><div class="trust-item"><span><i class="fas fa-desktop trust-icon"></i>&nbsp;</span></i><span class="trust-text font-p cl-4 fs-7">%100 online</span></div></div></div></div><div class="widget-item bg-22"><div class="band__CTA"><h2 class="Band-cta-title font-h2 cl-4 fs-10">Çocuğunuz için doğru adımı atın.</h2><div class="Band-cta-action"><a href="#" class="font-p cl-6 fs-7 bg-20">Akademik destek al <i class="far fa-arrow-right"></i></a></div></div></div></div></div>');

  }

  if(window.location.pathname === '/tr-TR/s/cocuklarim-icin'){

$('.child-card-1').wrap('<a href="/cocugum-icin-pedagojik-ve-psikolojik"></a>');
$('.child-card-2').wrap('<a href="/cocugum-icin-akademik"></a>');

  }

});

