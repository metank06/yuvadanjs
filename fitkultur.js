$(document).ready(function () {
if(window.location.pathname == '/tr-TR/s/pilates-deneme-dersi'){

if(!$('body').hasClass('loggedIn')){

$('.page > .container').html(`<div class="alert alert-info"><div class="alert-wrapper"><div class="alert-icon"><div class="icon-box"><i class="fas fa-exclamation-circle"></i></div></div><div class="alert-txt"><p>Deneme dersinden faydalanabilmek için <strong><a href="/signup?return=/s/pilates-deneme-dersi">kayıt</a></strong> olmanız gerekmektedir. </p><p>Lütfen kayıt olduktan sonra tekrar deneyin !</p></div></div></div>`);

}else {
$('.page > .container').html(` <div class="fit-form-youtube"><div class="fit-form-con"><div class="fit-form-item"><div class="fit-form-items"><div class="fit-form-head"><h2 class="fit-h2 fit-color-1">Fit Kültür kamplarına katılmadan önce küçük bir ön izlemeye ne dersin?  
</h2></div></div><div class="fit-form-items fit-form-padding"><div class="fit-form-video"><div class="fit-form-play"><iframe width="1410" height="793" src="https://www.youtube.com/embed/SLQ6XVR-SSw" title="PİLATES DENEME DERSİ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="fit-inst-bg fit-bg-turkuaz"></div></div><div class="fit-form-content"><div class="fit-form-col"><h5 class="fit-h5 fit-color-1">Fit Kültür kamplarında ay boyunca haftada 4 gün, 45 dakika canlı yayınlarla gerçekleştirilen derslere katılacaksın. </br></br>Peki bu canlı dersler nasıl  geçiyor?</br></br>Burada, seçtiğin kampın bir ders videosunu bulabilirsin.  Bu video, kampın eğitmen yaklaşımını, ders temposunu ve genel  atmosferini anlamanı sağlayacaktır.</h5></div></div></div><div class="fit-form-items"><div class="fit-form-content fit-form-padding"><h4 class="fit-h4 fit-color-1">Ders videosundan keyif aldıysan artık kampa katılmaya hazırsın.</br>
Kamplarda seni canlı derslerden çok daha fazlası bekliyor.</h4> <div class="fit-form-row fit-bg-turkuaz"><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Kampının Telegram grubu üzerinden sürekli destek ve eğitmene erişim şansı.</h5></div><p><i class="fas fa-plus"></i>&nbsp;</p><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Seçtiğin kampa özel oluşturulan Telegram grubundan diğer katılımcılarla sürekli iletişim, motivasyon ve destek ortamı</h5></div><p><i class="fas fa-plus"></i>&nbsp;</p><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Kaçırdığın canlı dersleri istediğin zaman izleyebilmen için kayıtlı ders videoları</h5></div></div><div class="fit-form-button"><a href="/paketler/?tags=pilates" class="fit-form-btn fit-button fit-bg-pink fit-color-2 fit-p fit-bold">Kampa Katıl</a></div></div></div><div class="fit-form-items"></div><div class="fit-form-items"><div class="fit-faq-wp"><div class="fit-faq-container"><h2 class="fit-h2 fit-color-1">Sıkça Sorulan Sorular</h2><div class="accordion"><div class="accordion-item"><button id="accordion-button-1" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Deneme dersini izleyenlere özel indirim kuponunu nasıl kullanabilirim?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p> İndirim kuponunu nasıl kullanacağını anlatan bu <a href="https://www.youtube.com/shorts/IxbZigClc3w" class="youtube-link">videoyu izleyebilirsin.</a> <span class="fit-bold">Kupon Kodun: DENEME10</span> </p></div><button id="accordion-button-2" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Kampı satın aldım, derslere nereden erişeceğim? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"> <p>Yapılacak her canlı dersin linki Telegram grubundan katılımcılarla paylaşılacak. İletilen linke tıklaman yeterli. </p></div><button id="accordion-button-3" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Telegram grubuna nasıl katılacağım?  </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Kampı satın aldıktan sonra sana gönderilen e-postadaki butona tıklayarak Telegram grubuna katılabilirsin. Spam klasörünü de kontrol etmeyi unutma.</p></div><button id="accordion-button-4" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Sorularım var, size nasıl ulaşabilirim?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p> Sorularınız için Whatsapp hattımıza mesaj gönderebilirsin. Aklındaki sorulara cevap vermek için buradayız.</p></div></div></div></div></div></div></div></div><div id="videoModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.7); justify-content:center; align-items:center;"><div style="position:relative; width:80%; max-width:800px;"><span id="closeModal" style="position:absolute; top:-30px; right:0; color:#fff; cursor:pointer; font-size:20px;">Kapat ✖</span><iframe width="100%" height="450" src="https://www.youtube.com/embed/IxbZigClc3w" title="Use of Discount Coupon." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div></div>`);
}
}
});

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tagsParam = urlParams.get('tags');
    
    if (tagsParam) {
        $('div.coupon-use-btn a').each(function() {
            const $this = $(this);
            let href = $this.attr('href');
            
            if (href) {
                // Mevcut href'ye tags parametresini ekle
                const separator = href.includes('?') ? '&' : '?';
                $this.attr('href', href + separator + 'tags=' + encodeURIComponent(tagsParam));
            }
        });
    }



});





function toggleKalca() {
            let cinsiyet = document.getElementById("cinsiyet").value;
            let kalcaDiv = document.getElementById("kalcaDiv");

            if (cinsiyet === "kadin") {
                kalcaDiv.classList.remove("hidden");
            } else {
                kalcaDiv.classList.add("hidden");
            }
        }

$(document).ready(function() {
$('.package-payment-options').css('display', 'block');
$('a[onclick].btn-primary-package').hide();
$('a[data-package-action-type="cc"].btn-primary-package').text('Satın Al');


function vucutKitleEndeksi() {
    let kilo = parseFloat(document.getElementById("kilo").value);
    let boy = parseFloat(document.getElementById("boy").value) / 100; // cm'yi metreye çeviriyoruz
    
    if (!isNaN(kilo) && !isNaN(boy) && boy > 0) {
        let bmi = kilo / (boy * boy);
        let htmlContent = `
            <h2 class="sonuch2" style="font-family: 'Poppins'; font-weight: 700; font-size: 26px; color: #4f0554; margin: 0;">Vücut Kitle Endeksi </h2>
            <h2 class="resulth2" style="font-size: 90px; margin: 0; line-height: 90px; color: #4f0554;">${bmi.toFixed(2)}</h2>
            <ul>
                <li>18.5’in altı: Zayıf</li>
                <li>18.5 - 24.9: Normal kilo</li>
                <li>25 - 29.9: Fazla kilolu</li>
                <li>30 - 34.9: 1. derece obez</li>
                <li>35 - 39.9: 2. derece obez</li>
                <li>40 ve üzeri: 3. derece (morbid) obez</li>
            </ul>
        `;
        $(".hy-gym-box-l.hesaplamalar").html(htmlContent);
    } else {
        alert("Lütfen geçerli bir boy ve kilo değeri girin.");
    }
}

function tdeeHesapla() {
    let bmr = parseFloat(document.getElementById("bmr").value);
    let aktivite = document.getElementById("aktivite").value;
    let carpimFaktoru = {
        "hareketsiz": 1.2,
        "az-aktif": 1.375,
        "orta-aktif": 1.55,
        "cok-aktif": 1.725,
        "asiri-aktif": 1.9
    };
    
    if (!isNaN(bmr) && carpimFaktoru[aktivite]) {
        let sonuc = bmr * carpimFaktoru[aktivite];
let htmlContent = `
        <h2 class="sonuch2" style="font-family: 'Poppins'; font-weight: 700; font-size: 26px; color: #4f0554; margin: 0;">
            Bazal Metabolizma Hızı
        </h2>
        <h2 class="resulth2" style="font-size: 90px; margin: 0; line-height: 110px; color: #4f0554;">
             ${sonuc.toFixed(2)}<br>kcal/gün
        </h2>
        <a href="/uzmanlar" class="hy-gym-btn" style="margin-top:25px;">Eğitmenle Planını Oluştur</a>
    `;
    
    $(".hy-gym-box-l.hesaplamalar").html(htmlContent);
    } else {
        alert("Lütfen geçerli bir BMR değeri girin.");
    }
}

function calculateBMR() {
            const gender = document.getElementById("cinsiyet").value;
            const height= parseFloat(document.getElementById("boy").value);
            const weight = parseFloat(document.getElementById("kilo").value);
            const age = parseInt(document.getElementById("yas").value);
            let aktivite = document.getElementById("aktivite").value;
			let carpimFaktoru = {
				"hareketsiz": 1.2,
				"az-aktif": 1.375,
				"orta-aktif": 1.55,
				"cok-aktif": 1.725,
				"asiri-aktif": 1.9
			};
            let bmr;

            if (gender === "erkek") {
                bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
            } else {
                bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
            }
			
			tdeeSonuc = bmr * carpimFaktoru[aktivite];

let htmlContent = `<div>
        <h2 class="sonuch2" style="font-family: 'Poppins'; font-weight: 700; font-size: 26px; color: #4f0554; margin: 0;">
            Bazal Metabolizma Hızı
        </h2>
        <h2 class="resulth2" style="font-size: 70px; margin: 0; line-height: 80px; color: #4f0554;">
             ${bmr.toFixed(2)}<br>kcal/gün
        </h2>
		</div>
		<div>
        <h2 class="sonuch2" style="font-family: 'Poppins'; font-weight: 700; font-size: 26px; color: #4f0554; margin: 0;">
            TDEE
        </h2>
        <h2 class="resulth2" style="font-size: 70px; margin: 0; line-height: 80px; color: #4f0554;margin-bottom:25px;">
             ${tdeeSonuc.toFixed(2)}<br>kcal/gün
        </h2>
        <a href="/uzmanlar" class="hy-gym-btn" style="margin-top:25px;">Eğitmenle Planını Oluştur</a>
		</div>
    `;
    
    $(".hy-gym-box-l.hesaplamalar").html(htmlContent);



        }


        function toggleKalca() {
            let cinsiyet = document.getElementById("cinsiyet").value;
            let kalcaDiv = document.getElementById("kalcaDiv");

            if (cinsiyet === "kadin") {
                kalcaDiv.classList.remove("hidden");
            } else {
                kalcaDiv.classList.add("hidden");
            }
        }

        function hesapla() {
            let cinsiyet = document.getElementById("cinsiyet").value;
            let bel = parseFloat(document.getElementById("bel").value) / 2.54;
            let boyun = parseFloat(document.getElementById("boyun").value) / 2.54;
            let boy = parseFloat(document.getElementById("boy").value) / 2.54;
            let kalca = parseFloat(document.getElementById("kalca").value) / 2.54;

            if (isNaN(bel) || isNaN(boyun) || isNaN(boy) || (cinsiyet === "kadin" && isNaN(kalca))) {
                alert("Lütfen tüm alanları doldurun!");
                return;
            }

            let yagYuzdesi;

            if (cinsiyet === "kadin") {
                yagYuzdesi = 163.205 * Math.log10(bel + kalca - boyun) - 97.684 * Math.log10(boy) - 78.387;
            } else {
                yagYuzdesi = 86.010 * Math.log10(bel - boyun) -70.041 * Math.log10(boy) + 36.76;
            }

let htmlContent = `
        <h2 class="sonuch2" style="font-family: 'Poppins'; font-weight: 700; font-size: 26px; color: #4f0554; margin: 0;">
            Vücut Yağ Oranı
        </h2>
        <h2 class="resulth2" style="font-size: 90px; margin: 0; line-height: 90px; color: #4f0554;">%
            ${yagYuzdesi.toFixed(2)}
        </h2>
        <span>%15 ve altı ideal kabul edilir.</span>
        <a href="/uzmanlar" class="hy-gym-btn">Eğitmenle Planını Oluştur</a>
    `;
    
    $(".hy-gym-box-l.hesaplamalar").html(htmlContent);

        }

$(document).on("click", "#hesaplaBtn", hesapla);
    $(document).on("click", "#vucutkitlehesapla", vucutKitleEndeksi);
    $(document).on("click", "#bazalhesapla", calculateBMR);
$(document).on("click", "#tdeehesapla", tdeeHesapla);

  
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

$('a.btn.more').text('Tümünü Görüntüle');
$('#message').attr('placeholder','Mesajınız');

if(window.location.pathname == '/s/kamplar'){

$('.page .container').css('max-width','100%');
$('.page-content').css('padding','0');

}

if(window.location.pathname == '/s/kurumsal'){
      
$('.page .container').css('max-width','100%');
$('.page-content').css('padding','0');
$('.page-excerpt').css('display','none');
$('.page-title').css('display','none');
$('.form-container').appendTo('.fit-contact-form');

$('#email').attr('placeholder','Şirket Adınız');


}



if(window.location.pathname == '/s/havale'){

$('#contact-form').children().eq(6).find('label').css('display', 'block');

$('.page').css({
    'background-color': 'transparent',
    'background-image': 'url(https://fitkultur.gurulize.com/images/202512/312_1920x1080.png)',
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
});

}

document.querySelectorAll(".footer-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const list = toggle.nextElementSibling;
    list.classList.toggle("active");
    toggle.classList.toggle("open");
  });
});


    });

$(document).ready(function () {

  if (window.location.pathname === "/signup") {
  
$('.user-form.register').prepend('<div class="fit-signup-wp"><div class="fit-signup-con"><div class="fit-signup-title"><h2 class="fit-h2 fit-color-1">Kayıt Ol!</h2><p class="fit-p fit-color-3">Hadi, çabuk ol ve Fit Kültür’e dahil ol. Seninle birlikte hareket etmek isteyen kişilere online olarak ulaş!</p></div></div></div>');

$('#name').attr('placeholder','Adınız');
$('#email').attr('placeholder','E-posta Adresiniz');
$('#password').attr('placeholder','Parola');
$('#password-repeat').attr('placeholder','Parola Tekrar');
$('.like-button').prepend('<div class="google-favicon"><img src="/images/202510/247_70x70.png"/></div>');


  }

 if (window.location.pathname === "/profile") {

      $('.purchases-tab-href').text('Online Paketler');
      $('.inline-submit button').text('Gönder');

}

  if (window.location.pathname === "/login") {
  
$('.user-form.login').prepend('<div class="fit-signup-wp"><div class="fit-signup-con"><div class="fit-signup-title"><h2 class="fit-h2 fit-color-1">Giriş Yap</h2></div></div></div>');


$('#email').attr('placeholder','E-posta Adresiniz');
$('#password').attr('placeholder','Parola');


$('.like-button').prepend('<div class="google-favicon"><img src="/images/202510/247_70x70.png"/></div>');

  }

});

$(document).ready(function() {

let speed = 0.5; // px/frame -> hızı buradan değiştir (ör: 0.5 = yavaş, 3 = hızlı)
let slider = document.getElementById("instSlider");
let pos = 0;
let paused = false;

// Kaydırma animasyonu
function animate() {
  if (!paused) {
    pos -= speed;
    if (Math.abs(pos) >= slider.scrollWidth / 2) {
      pos = 0; // sonsuz döngü
    }
    slider.style.transform = `translateX(${pos}px)`;
  }
  requestAnimationFrame(animate);
}
animate();

// Mouse üzerine gelince durdur
slider.parentElement.addEventListener("mouseenter", () => paused = true);
slider.parentElement.addEventListener("mouseleave", () => paused = false);

});

$(document).ready(function() {
    $('.stripe-fitkultur').on('click', function(e) {
        if (!$('body').hasClass('loggedIn')) {
            e.preventDefault();
            
            const returnUrl = $(this).attr('href');
            const alertHtml = `<div class="alert alert-info">Paketlerimizden faydalanabilmek için <strong><a href="/login?return=${returnUrl}">üye girişi</a></strong> yapmanız gerekmektedir. Lütfen giriş yapıp tekrar deneyin!</div>`;

$('.page').addClass('flex');
$('.page').css('justify-content','center');
$('.page').css('align-items','center');
$('.page .container').css('max-width','1140px');

            
            $('.page .container').html(alertHtml);
 $('html, body').animate({ scrollTop: 0 }, 500);
        }
    });
});

$(document).ready(function() {

$('.svelte-1bnisx4 .wrapper').addClass('fit-kod-none');
});

 (function () {
        var options = {
            whatsapp: "905456776882", // WhatsApp numarası
            call_to_action: "Merhaba, nasıl yardımcı olabilirim?", // Görüntülenecek yazı
            position: "right", // Sağ taraf için 'right' sol taraf için 'left'
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();

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

    $(".youtube-link").on("click", function (e) {
        e.preventDefault(); 

        let url = $(this).attr("href");

        
        let videoId = url.split("v=")[1];
        let embedUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";

        $("#youtubeFrame").attr("src", embedUrl);
        $("#videoModal").css("display", "flex");
    });

    $("#closeModal, #videoModal").on("click", function () {
        $("#videoModal").hide();
        $("#youtubeFrame").attr("src", ""); 
    });

});

$(document).ready(function () {

	if (window.location.pathname === "/paketler/" &&
        new URLSearchParams(window.location.search).get("tags") === "esneklik") {

		$('.fit-abonelik-wrapper').append('<div class="fit-camp-deneme-ders"><div class="fit-camp-content"><div class="fit-camp-price"><div class="fit-camp-text"><p class="fit-p fit-color-1">Satın almadan önce <span>Esneklik ve Düşük Yoğunluklu Egzersiz Kampı</span> nı deneyimlemek ister misiniz?<br>Kayıtlı deneme dersini izleyerek, derslerin nasıl geçtiğini görün!</p></div><div class="fit-camp-box fit-bg-mor"><a href="/s/esneklik-deneme-dersi"><span class="fit-h4 fit-color-2">Ücretsiz Deneme Dersi</span></a></div></div></div></div>');
 }
		if (window.location.pathname === "/paketler/" &&
        new URLSearchParams(window.location.search).get("tags") === "pilates") {

		$('.fit-abonelik-wrapper').append('<div class="fit-camp-deneme-ders"><div class="fit-camp-content"><div class="fit-camp-price"><div class="fit-camp-text"><p class="fit-p fit-color-1">Satın almadan önce <span>Online Pilates Kampı</span> nı deneyimlemek ister misiniz?<br>Kayıtlı deneme dersini izleyerek, derslerin nasıl geçtiğini görün!</p></div><div class="fit-camp-box fit-bg-mor"><a href="/s/pilates-deneme-dersi"><span class="fit-h4 fit-color-2">Ücretsiz Deneme Dersi</span></a></div></div></div></div>');
 }
		if (window.location.pathname === "/paketler/" &&
        new URLSearchParams(window.location.search).get("tags") === "online") {

		$('.fit-abonelik-wrapper').append('<div class="fit-camp-deneme-ders"><div class="fit-camp-content"><div class="fit-camp-price"><div class="fit-camp-text"><p class="fit-p fit-color-1">Satın almadan önce <span>Online Fitness Kampı</span> nı deneyimlemek ister misiniz?<br>Kayıtlı deneme dersini izleyerek, derslerin nasıl geçtiğini görün!</p></div><div class="fit-camp-box fit-bg-mor"><a href="/s/deneme-dersi"><span class="fit-h4 fit-color-2">Ücretsiz Deneme Dersi</span></a></div></div></div></div>');
 }
		if (window.location.pathname === "/paketler/" &&
        new URLSearchParams(window.location.search).get("tags") === "50yas") {

		$('.fit-abonelik-wrapper').append('<div class="fit-camp-deneme-ders"><div class="fit-camp-content"><div class="fit-camp-price"><div class="fit-camp-text"><p class="fit-p fit-color-1">Satın almadan önce <span>60+ Sağlıklı Yaş Alma Grubunu</span> deneyimlemek ister misiniz?<br>Kayıtlı deneme dersini izleyerek, derslerin nasıl geçtiğini görün!</p></div><div class="fit-camp-box fit-bg-mor"><a href="/s/60-yas-deneme-dersi"><span class="fit-h4 fit-color-2">Ücretsiz Deneme Dersi</span></a></div></div></div></div>');
 }
});

$(document).ready(function () {

if (window.location.pathname === "/blog") {
$('.list.flex.order-flex-list')
  .css({
    'flex-direction': 'row-reverse',
    'justify-content': 'flex-end'
  })
  .children(':first-child')
  .hide();
}
});

$(document).ready(function () {
    $('.info-value').each(function () {
        var text = $(this).text().trim();

        if (text === 'Ücretsiz Online Deneme Kampı') {

            var newContent = `
                <div class="extra-info" style="margin-top:8px;">
                    Online Ücretsiz Deneme Kampı kaydınız alınmıştır.<br><br>
                    <strong>Gruba katılım bağlantı linki e-posta adresinize gönderilmiştir.</strong><br><br>
                    Link üzerinden katılım sağlayabilirsiniz.<br><br>
                    Lütfen <strong>kayıtlı mail adresinize gelen e-postayı kontrol ederek grubumuza katılım sağlayınız.</strong>
                </div>
            `;

            $(this).append(newContent);
        }
    });
});

$(document).ready(function () {
    if (window.location.pathname === "/tr-TR/payment/event/uc/12") {
        $('.alert.alert-info').html(
            'Üyeliğiniz varsa <a class="login__hover" href="/tr-TR/login">Üye girişi</a> yapmanız gerekmektedir. Henüz üye değilseniz <a class="login__hover" href="/tr-TR/signup">Kaydol</a> seçeneğini kullanarak kolayca yeni bir hesap oluşturabilirsiniz.'
        );
    }
});


$(document).ready(function () {

	$('.header').prepend('<div class="header-massage"><span class="kupon-kullan">Kuponumu nasıl kullanırım?</span> <i class="fas fa-arrow-right"></i></p></div><div class="popup-overlay1"><div class="popup-content1"><p class="kupon-text">Üye olduktan sonra profilinizde yer alan <span>"Kuponlar"</span> menüsüne girin, kupon kodunuzu ilgili alana yazıp <span>"Gönder"</span> butonuna tıklayarak hesabınıza tanımlayın; ardından online ders almak istediğiniz sayfada ya da eğitmen profilinde paket satın almadan önce <span>"Kuponlar"</span>butonuna tıklayarak kupon kodunuzu uygulamanız gerekmektedir.</p><button class="kupon-kapat">Kapat</button></div></div>');
    // Popup aç
    $(document).on('click', '.kupon-kullan', function () {
        $('.popup-overlay1').fadeIn(200);
    });

    // Kapat butonu ile kapat
    $(document).on('click', '.kupon-kapat', function () {
        $('.popup-overlay1').fadeOut(200);
    });

    // Overlay (arka plan) tıklanınca kapat
    $(document).on('click', '.popup-overlay1', function () {
        $(this).fadeOut(200);
    });

    // Popup içeriğine tıklanınca kapanmayı engelle
    $(document).on('click', '.popup-content1', function (e) {
        e.stopPropagation();
    });

});