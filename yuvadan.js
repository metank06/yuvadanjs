
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