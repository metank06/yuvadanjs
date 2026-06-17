(function () {
var html = document.documentElement;
html.classList.add('kb-moddoday');
function detectPageClass(path) {
try {
if (typeof isAgentDetail !== 'undefined' && isAgentDetail) return 'kb-page-uzman-detay';
if (typeof isCategory !== 'undefined' && isCategory) return 'kb-page-kategori-detay';
} catch (e) {  }
var p = (path || '/').replace(/^\/(?:[a-z]{2}(?:-[A-Z]{2})?\/)?/, '/').replace(/\/$/, '');
if (p === '' || p === '/') return 'kb-page-home';
var m;
if ((m = p.match(/^\/s\/([^\/]+)$/))) {
var slug = m[1];
if (slug === 'iletisim') return 'kb-page-iletisim';
return 'kb-page-cms-' + slug.replace(/[^a-z0-9-]/gi, '');
}
if (p === '/uzmanlar') return 'kb-page-uzmanlar';
if (p === '/blog') return 'kb-page-blog';
if (p.match(/^\/blog\/[^\/]+$/)) return 'kb-page-blog-detay';
if (p === '/etkinlikler') return 'kb-page-etkinlikler';
if (p.match(/^\/etkinlikler\/[^\/]+$/)) return 'kb-page-etkinlik-detay';
if (p === '/signup') return 'kb-page-signup';
if (p === '/login')  return 'kb-page-login';
var seg = p.split('/')[1] || '';
if (seg) return 'kb-page-' + seg.replace(/[^a-z0-9-]/gi, '');
return 'kb-page-unknown';
}
function applyPageClass() {
var b = document.body;
if (!b) return;
var cls = detectPageClass(location.pathname);
b.classList.add(cls);
try { b.setAttribute('data-kb-page', cls); } catch (e) {}
}
if (document.body) {
applyPageClass();
} else if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', applyPageClass, { once: true });
} else {
setTimeout(applyPageClass, 0);
}
function injectFont(href) {
if (document.querySelector('link[data-kb-font="' + href + '"]')) return;
var l = document.createElement('link');
l.rel = 'stylesheet';
l.href = href;
l.setAttribute('data-kb-font', href);
document.head.appendChild(l);
}
injectFont('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap');
function langPrefix() {
var l = (typeof appLocale !== 'undefined' && appLocale) ? String(appLocale) : null;
if (!l) {
var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//);
l = m ? m[1].replace('-', '_') : 'tr_TR';
}
return '/' + l.replace('_', '-');
}
function url(path) {
var p = path.startsWith('/') ? path : '/' + path;
return langPrefix() + p;
}
var ICONS = {
chevron: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',
award: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
gift: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
user: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
briefcase: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
calendar: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
close: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
login: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
message: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
logout: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>'
};
function isLoggedIn() {
return !!(document.body && document.body.classList.contains('loggedIn'));
}
function loginLink(opts) {
var li = isLoggedIn();
var href = url(li ? '/profile' : '/login');
var label = li ? 'Panelim' : 'Giriş Yap';
var icon = li ? ICONS.user : ICONS.login;
if (opts && opts.block) {
return '<a href="' + href + '" class="md-drawer-btn md-drawer-btn-ghost" data-kb-login="1">' + icon + ' ' + label + '</a>';
}
return '<a href="' + href + '" data-kb-login="1">' + icon + ' <span>' + label + '</span></a>';
}
function headerActions() {
var li = isLoggedIn();
var out = loginLink();
if (li) {
out += '<a class="md-icon-btn" href="' + url('/mesajlar') + '" title="Mesajlarım" aria-label="Mesajlarım" data-kb-msg="1">' + ICONS.message + '</a>';
out += '<a class="md-icon-btn" href="' + url('/cikis') + '" title="Çıkış Yap" aria-label="Çıkış Yap">' + ICONS.logout + '</a>';
} else {
out += '<a href="' + url('/signup') + '" class="md-cta-solid">Üye Ol</a>';
}
out += '<a href="' + url('/s/ayricaliklar') + '" class="md-privilege">' + ICONS.gift + ' <span>Ayrıcalıklar Kulübü</span></a>';
return out;
}
function drawerActions() {
var li = isLoggedIn();
var out = '<a href="' + url('/s/danisman-ol') + '" class="md-drawer-btn md-drawer-btn-outline">' + ICONS.briefcase + ' Danışmanımız Ol</a>';
if (li) {
out += '<a href="' + url('/mesajlar') + '" class="md-drawer-btn md-drawer-btn-outline" data-kb-msg="1">' + ICONS.message + ' Mesajlarım</a>';
out += loginLink({ block: true });
out += '<a href="' + url('/cikis') + '" class="md-drawer-btn md-drawer-btn-ghost">' + ICONS.logout + ' Çıkış Yap</a>';
} else {
out += '<a href="' + url('/signup') + '" class="md-drawer-btn md-drawer-btn-solid">ModdoDay\'e Katıl</a>';
out += loginLink({ block: true });
}
return out;
}
function renderHeader() {
var home = '/';
var danismanlar = '/uzmanlar';  
var etkinlikler = '/s/canli-oturumlar';
var signup = '/signup';
return [
'<header class="md-header">',
'<div class="md-header-tier1">',
'<div class="md-container">',
'<div class="md-header-tier1-inner">',
'<a href="' + url(home) + '">ModdoDay</a>',
'<a href="' + url(etkinlikler) + '">Canlı Oturumlar</a>',
'<a href="' + url(danismanlar) + '">1:1 Danışmanlık</a>',
'<a href="' + url('/s/sponsorluk') + '">Sponsorluk</a>',
'<a href="' + url('/s/kampanyalar') + '">Kampanyalar</a>',
'<a href="' + url('/s/iletisim') + '">İletişim</a>',
'<a href="' + url('/s/danisman-ol') + '" class="md-t1-cta">Danışmanımız Olun</a>',
'</div>',
'</div>',
'</div>',
'<div class="md-header-main">',
'<div class="md-container">',
'<div class="md-header-main-inner">',
'<a href="' + url(home) + '" class="md-logo" style="margin-right: 8px;">Moddo<span>Day</span></a>',
'<div class="md-nav-item" data-menu="modes">',
'<button class="md-nav-btn" type="button">Keşfet ' + ICONS.chevron + '</button>',
'<div class="md-dropdown md-dropdown-mega">',
'<p class="md-dd-label">Yaşam Modları</p>',
'<div class="md-dd-grid">',
'<a href="' + url('/kategori/uretken-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(245,158,11,.15); color:#F59E0B;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg></span>',
'<div><strong>Üretken Modu</strong><small>Ellerini kullan, ruhunu besle</small></div>',
'</a>',
'<a href="' + url('/kategori/teknolojiye-merakli-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(59,130,246,.15); color:#3B82F6;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></span>',
'<div><strong>Teknolojiye Meraklı Modu</strong><small>Geleceği bugünden yakala</small></div>',
'</a>',
'<a href="' + url('/kategori/keyif-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(244,63,94,.15); color:#F43F5E;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></span>',
'<div><strong>Keyif Modu</strong><small>Hayatın keyif anlarını sevdiklerinle deneyimle</small></div>',
'</a>',
'<a href="' + url('/kategori/saglikliyim-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(16,185,129,.15); color:#10B981;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/></svg></span>',
'<div><strong>Sağlıklıyım Modu</strong><small>Bedenine ve zihnine iyi bak</small></div>',
'</a>',
'<a href="' + url('/kategori/longevity-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(34,197,94,.15); color:#22C55E;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg></span>',
'<div><strong>Longevity Modu</strong><small>En iyi versiyonuna ulaş, uzun ve kaliteli yaşa</small></div>',
'</a>',
'<a href="' + url('/kategori/aile-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(139,92,246,.15); color:#8B5CF6;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>',
'<div><strong>Aile Modu</strong><small>Bilinçli ebeveynlik, mutlu aileler</small></div>',
'</a>',
'</div>',
'</div>',
'</div>',
'<div class="md-nav-item" data-menu="brands">',
'<button class="md-nav-btn" type="button">' + ICONS.award + ' Marka Elçileri ' + ICONS.chevron + '</button>',
'<div class="md-dropdown md-dropdown-brands">',
'<p class="md-dd-brand-desc">Marka elçisi firmalar, ModdoDay\'in 6 yaşam modunda özel içerikler ve ödüllü etkinliklerle hedef kitlesine doğrudan ulaşır. Katılımcılar indirimler ve özel ayrıcalıklar kazanır.</p>',
'<a href="' + url('/s/marka-elcileri') + '" class="md-dd-brand-cta">Marka Elçilerini Görüntüle ' + ICONS.arrow + '</a>',
'<a href="' + url('/s/sponsorluk') + '" class="md-dd-brand-foot">Marka Elçisi Olmak İçin &rarr;</a>',
'</div>',
'</div>',
'<form class="md-search" role="search" data-kb-search="1">',
'<input class="md-search-input" type="text" autocomplete="off" spellcheck="false" placeholder="Hangi konuda uzmanına bağlanmak istiyorsun?" aria-label="Ara">',
'</form>',
'<div class="md-header-actions">',
'          ' + headerActions() + '',
'</div>',
'<div class="md-mobile-actions">',
'<button class="md-icon-btn md-drawer-open" type="button" aria-label="Ara">' + ICONS.search + '</button>',
'<button class="md-icon-btn md-drawer-open" type="button" aria-label="Menu">' + ICONS.menu + '</button>',
'</div>',
'</div>',
'</div>',
'</div>',
'</header>'
].join('\n');
}
function renderDrawer() {
var svg = function (inner) { return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>'; };
var modes = [
['uretken-modu', 'Üretken Modu', '245,158,11', '#F59E0B', '<path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/>'],
['teknolojiye-merakli-modu', 'Teknolojiye Meraklı Modu', '59,130,246', '#3B82F6', '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>'],
['keyif-modu', 'Keyif Modu', '244,63,94', '#F43F5E', '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>'],
['saglikliyim-modu', 'Sağlıklıyım Modu', '16,185,129', '#10B981', '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>'],
['longevity-modu', 'Longevity (En İyi Versiyonumdayım) Modu', '34,197,94', '#22C55E', '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>'],
['aile-modu', 'Aile Modu', '139,92,246', '#8B5CF6', '<path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3"/>']
];
var modeRows = modes.map(function (m) {
return '<a href="' + url('/kategori/' + m[0]) + '" class="md-drawer-mode">' +
'<span class="md-dd-icn" style="background:rgba(' + m[2] + ',.15); color:' + m[3] + ';">' + svg(m[4]) + '</span>' +
'<span>' + m[1] + '</span></a>';
}).join('');
return [
'<div class="md-drawer-overlay" data-kb-drawer="overlay"></div>',
'<aside class="md-drawer" data-kb-drawer="panel" aria-hidden="true">',
'<div class="md-drawer-head">',
'<a href="' + url('/') + '" class="md-logo">Moddo<span>Day</span></a>',
'<button class="md-drawer-close" type="button" aria-label="Kapat">' + ICONS.close + '</button>',
'</div>',
'<div class="md-drawer-search">' + ICONS.search + '<input class="md-search-input" type="text" autocomplete="off" spellcheck="false" placeholder="Hangi konuda uzmanına bağlanmak istiyorsun?" aria-label="Ara"></div>',
'<nav class="md-drawer-nav">',
'<a href="' + url('/') + '">Ana Sayfa</a>',
'<a href="' + url('/s/canli-oturumlar') + '">Canlı Oturumlar</a>',
'<a href="' + url('/uzmanlar') + '">Danışmanlar</a>',
'<a href="' + url('/s/sponsorluk') + '">Sponsorluk</a>',
'</nav>',
'<div class="md-drawer-brands">',
'<div class="md-drawer-label md-drawer-label-accent">' + ICONS.award + ' MARKA ELÇİLERİ</div>',
'<p>Marka elçisi firmalar, ModdoDay\'in 6 yaşam modunda özel içerikler ve ödüllü etkinliklerle hedef kitlesine doğrudan ulaşır.</p>',
'<a href="' + url('/s/marka-elcileri') + '" class="md-drawer-brands-link">Marka Elçilerini Görüntüle &rarr;</a>',
'</div>',
'<div class="md-drawer-modes">',
'<div class="md-drawer-label">YAŞAM MODLARI</div>',
'    ' + modeRows,
'</div>',
'<div class="md-drawer-actions">',
'    ' + drawerActions() + '',
'</div>',
'</aside>'
].join('\n');
}
function renderFooter() {
var modes = [
['uretken-modu', 'Üretken Modu'],
['teknolojiye-merakli-modu', 'Teknolojiye Meraklı Modu'],
['keyif-modu', 'Keyif Modu'],
['saglikliyim-modu', 'Sağlıklıyım Modu'],
['longevity-modu', 'Longevity Modu'],
['aile-modu', 'Aile Modu']
];
var modeItems = modes.map(function (m) {
return '<li><a href="' + url('/kategori/' + m[0]) + '">' + m[1] + '</a></li>';
}).join('');
return [
'<footer class="md-footer">',
'<div class="md-container">',
'<div class="md-footer-grid">',
'<div>',
'<a href="' + url('/') + '" class="md-logo" style="display:inline-block; margin-bottom: 16px;">Moddo<span>Day</span></a>',
'<p style="font-size: var(--fs-sm); line-height: 1.7;">Bugün Hangi Moddasın? Kurumsal Wellbeing & Concierge Servisi ile canlı oturumlara katıl, uzmanlardan profesyonel danışmanlık al ve yaşam kaliteni yükselt.</p>',
'<p style="margin-top: 16px; font-size: 12px;">Powered by <span style="color: var(--md-orange); font-weight: 500;">Gurulize</span></p>',
'</div>',
'<div>',
'<h4>Modlar</h4>',
'<ul>' + modeItems + '</ul>',
'</div>',
'<div>',
'<h4>Platform</h4>',
'<ul>',
'<li><a href="' + url('/s/canli-oturumlar') + '">Canlı Oturumlar</a></li>',
'<li><a href="' + url('/uzmanlar') + '">Danışmanlar</a></li>',
'<li><a href="' + url('/s/sponsorluk') + '">Sponsorluk</a></li>',
'<li><a href="' + url('/s/ayricaliklar') + '">Ayrıcalıklar Kulübü</a></li>',
'<li><a href="' + url('/s/iletisim') + '">İletişim</a></li>',
'</ul>',
'</div>',
'<div>',
'<h4>İletişim</h4>',
'<ul>',
'<li>info@moddo.day</li>',
'<li>0850 304 75 95</li>',
'<li>İstanbul, Türkiye</li>',
'</ul>',
'<div class="md-social">',
'<a href="#" aria-label="LinkedIn"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452z"/></svg></a>',
'<a href="#" aria-label="Instagram"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>',
'<a href="#" aria-label="YouTube"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>',
'</div>',
'</div>',
'</div>',
'<div class="md-footer-bottom">',
'<p>© 2026 ModdoDay. Tüm hakları saklıdır.</p>',
'<div style="display:flex; gap: 24px;">',
'<a href="' + url('/s/gizlilik-politikasi') + '">Gizlilik Politikası</a>',
'<a href="' + url('/s/kullanim-kosullari') + '">Kullanım Koşulları</a>',
'<a href="' + url('/s/kvkk') + '">KVKK</a>',
'</div>',
'</div>',
'</div>',
'</footer>'
].join('\n');
}
function injectChrome() {
if (document.querySelector('.md-header')) return; 
var body = document.body;
if (!body) return;
var headerWrap = document.createElement('div');
headerWrap.setAttribute('data-kb-md-chrome', 'header');
headerWrap.innerHTML = renderHeader();
body.insertBefore(headerWrap.firstElementChild, body.firstChild);
var drawerWrap = document.createElement('div');
drawerWrap.setAttribute('data-kb-md-chrome', 'drawer');
drawerWrap.innerHTML = renderDrawer();
while (drawerWrap.firstChild) body.appendChild(drawerWrap.firstChild);
var footerWrap = document.createElement('div');
footerWrap.setAttribute('data-kb-md-chrome', 'footer');
footerWrap.innerHTML = renderFooter();
body.appendChild(footerWrap.firstElementChild);
initDropdowns();
initDrawer();
ensureSearch();
}
function initDrawer() {
var panel = document.querySelector('.md-drawer');
if (!panel) return;
var overlay = document.querySelector('.md-drawer-overlay');
function open() { document.body.classList.add('md-drawer-active'); panel.setAttribute('aria-hidden', 'false'); }
function close() { document.body.classList.remove('md-drawer-active'); panel.setAttribute('aria-hidden', 'true'); }
document.querySelectorAll('.md-drawer-open').forEach(function (b) {
b.addEventListener('click', function (e) { e.preventDefault(); open(); });
});
var x = panel.querySelector('.md-drawer-close');
if (x) x.addEventListener('click', close);
if (overlay) overlay.addEventListener('click', close);
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
panel.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
}
function initDropdowns() {
var items = document.querySelectorAll('.md-nav-item');
if (!items.length) return;
items.forEach(function (item) {
var btn = item.querySelector('.md-nav-btn');
var dd = item.querySelector('.md-dropdown');
if (!btn || !dd) return;
btn.addEventListener('click', function (e) {
e.stopPropagation();
var wasOpen = item.classList.contains('open');
items.forEach(function (i) { i.classList.remove('open'); });
if (!wasOpen) item.classList.add('open');
});
});
document.addEventListener('click', function (e) {
if (!e.target.closest('.md-nav-item')) {
items.forEach(function (i) { i.classList.remove('open'); });
}
});
document.addEventListener('keydown', function (e) {
if (e.key === 'Escape') items.forEach(function (i) { i.classList.remove('open'); });
});
}
var KB_MODES = [
'Üretken Modu', 'Teknolojiye Meraklı Modu', 'Keyif Modu',
'Sağlıklıyım Modu', 'Longevity Modu', 'Aile Modu'
];
function kbEsc(s) {
return String(s == null ? '' : s)
.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function initSearch() {
    var $ = window.jQuery;
    if (!$ || !$.fn || !$.fn.autoComplete) return false; /* plugin henuz yuklenmedi */
    var nodes = document.querySelectorAll('.md-search-input');
    if (!nodes.length) return true;
    var agentBase = (typeof agentUrlGlobal !== 'undefined' && agentUrlGlobal) ? agentUrlGlobal : url('/uzmanlar');
    var uzmanlarBase = url('/uzmanlar');
    nodes.forEach(function (el) {
      if (el.getAttribute('data-kb-ac') === '1') return; /* idempotent */
      el.setAttribute('data-kb-ac', '1');
      /* Enter -> sayfa reload olmasin (secim yoksa); secim varsa onSelect yonlendirir */
      var form = el.closest('form');
      if (form) form.addEventListener('submit', function (ev) { ev.preventDefault(); });
      $(el).autoComplete({
        minChars: 2,
        source: function (term, suggest) {
          var t = (term || '').toLocaleLowerCase('tr');
          var pre = [];
          KB_MODES.forEach(function (name) {
            if (name.toLocaleLowerCase('tr').indexOf(t) >= 0) {
              pre.push([name, uzmanlarBase + '?tag=' + encodeURIComponent(name), '', 'tag']);
            }
          });
          $.ajax({
            url: '/search', type: 'POST', dataType: 'json', data: { data: term },
            success: function (data) {
              var out = pre.slice();
              if (data && data.length) {
                for (var i = 0; i < data.length; i++) {
                  var d = data[i];
                  if (d && d.url) out.push([d.label, agentBase + '/' + d.url, d.image || '', 'agent']);
                }
              }
              if (!out.length) out.push(['Sonuç bulunamadı', '#', '', 'none']);
              suggest(out);
            },
            error: function () { suggest(pre.length ? pre : [['Sonuç bulunamadı', '#', '', 'none']]); }
          });
        },
        renderItem: function (item, search) {
          var label = item[0], href = item[1], image = item[2], type = item[3];
          var re = new RegExp('(' + String(search).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').split(' ').join('|') + ')', 'gi');
          var hl = kbEsc(label).replace(re, '<b>$1</b>');
          if (type === 'none') {
            return '<div class="autocomplete-suggestion kb-ac-none" data-url="#"><span class="kb-ac-label">' + kbEsc(label) + '</span></div>';
          }
          if (type === 'tag') {
            return '<div class="autocomplete-suggestion kb-ac-tag" data-url="' + kbEsc(href) + '"><span class="kb-ac-tagic"></span><span class="kb-ac-label">' + hl + '</span></div>';
          }
          var ic = image
            ? '<img class="kb-ac-img" src="/images/' + kbEsc(image) + '" alt="">'
            : '<span class="kb-ac-img kb-ac-ph">' + kbEsc((label || '?').charAt(0)) + '</span>';
          return '<div class="autocomplete-suggestion kb-ac-agent" data-url="' + kbEsc(href) + '">' + ic + '<span class="kb-ac-label">' + hl + '</span></div>';
        },
        onSelect: function (e, term, item) {
          var u = item.data('url');
          if (u && u !== '#') window.location.href = u;
        }
      });
    });
    return true;
  }
  /* Plugin (main.js footer'da) hazir olana kadar kendini tekrarlar (~5sn) */
  var kbSearchTries = 0;
  function ensureSearch() {
    if (initSearch() === false && kbSearchTries++ < 25) {
      setTimeout(ensureSearch, 200);
    }
  }
  /* DOM hazir olunca + window.load + 300ms safety + MutationObserver */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectChrome);
  } else {
    injectChrome();
  }
  window.addEventListener('load', function () {
    setTimeout(function () { injectChrome(); ensureSearch(); }, 300);
  });
})();
/* ============================================================
   SECTION: LOGIN — /login DOM enhance (tasarım: moddo5 giris-yap.html)
   Split layout: SOL .md-auth-side (h2 "ModdoDay'e Hoş Geldin" + 4 renkli özellik
   + 3 stat) | SAĞ glass .lg-card (form). OAuth ÜSTTE + "veya" divider, sonra native
   email/parola alanları, en altta "Üye Ol" linki + kullanım şartları.
   Native form fields/action/name DOKUNULMAZ. Scope: /login veya /xx-XX/login.
   ============================================================ */
(function () {
  function isLoginPage() {
    var p = location.pathname.replace(/\/$/, '');
    return /(?:^|\/)login$/.test(p);
  }
  if (!isLoginPage()) return;
  function $(s, r) { return (r || document).querySelector(s); }
  function locPrefix() { var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//); return m ? '/' + m[1] : '/tr-TR'; }
  function ic(p) { return "<svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>" + p + "</svg>"; }
  var LOGIN = ic("<path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4'/><polyline points='10 17 15 12 10 7'/><line x1='15' x2='3' y1='12' y2='12'/>");
  var EYE = ic("<path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z'/><circle cx='12' cy='12' r='3'/>");
  var EYEOFF = ic("<path d='M9.88 9.88a3 3 0 1 0 4.24 4.24'/><path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'/><path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'/><line x1='2' x2='22' y1='2' y2='22'/>");
  var SPARK = ic("<path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z'/>");
  var ZAP = ic("<path d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/>");
  var HEART = ic("<path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'/>");
  var SHIELD = ic("<path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'/>");
  function buildAuthSide() {
    var side = document.createElement('div');
    side.className = 'md-auth-side';
    side.setAttribute('data-kb-login', 'side');
    var feat = function (svg, color, t, s) {
      return "<div class='md-auth-feature'><div class='md-auth-feat-icn' style='color:" + color + ";background:" + color + "33'>" + svg + "</div><div><strong>" + t + "</strong><span>" + s + "</span></div></div>";
    };
    side.innerHTML = [
      "<div class='lg-feat-head'><h2>ModdoDay'e<br>Hoş Geldin</h2><p>6 farklı yaşam modunda kendini keşfet, uzmanlarla bağlan ve yaşamını dönüştür.</p></div>",
      "<div class='md-auth-features'>",
      feat(SPARK, '#F59E0B', '6 Yaşam Modu', 'Üretken, Teknoloji, Keyif, Sağlıklı, Longevity ve Aile modlarında kendini keşfet'),
      feat(ZAP, '#60a5fa', 'Uzman Danışmanlık', 'Alanında uzman profesyonellerle birebir veya grup oturumlarında bağlan'),
      feat(HEART, '#34d399', 'Yaşam Dönüşümü', 'Kişiselleştirilmiş rehberlik ile hedeflerine ulaş ve yaşam kaliteni artır'),
      feat(SHIELD, '#c084fc', 'Güvenli & Özel', 'Tüm verileriniz şifreli ve gizli tutulur, sadece siz kontrol edersiniz'),
      "</div>",
      "<div class='lg-stats'>",
      "<div><p class='v' style='color:#F59E0B'>50K+</p><p class='l'>Aktif Kullanıcı</p></div>",
      "<div><p class='v' style='color:#60a5fa'>200+</p><p class='l'>Uzman Danışman</p></div>",
      "<div><p class='v' style='color:#34d399'>4.9★</p><p class='l'>Ortalama Puan</p></div>",
      "</div>"
    ].join('');
    return side;
  }
  function buildFormHead() {
    var head = document.createElement('div');
    head.className = 'md-auth-form-head';
    head.setAttribute('data-kb-login', 'head');
    head.innerHTML = "<div class='md-auth-head-row'><span class='md-auth-head-icn'>" + LOGIN + "</span><h1>Giriş Yap</h1></div><p>Hesabına giriş yap, kaldığın yerden devam et.</p>";
    return head;
  }
  function buildSignupFoot() {
    var prefix = locPrefix();
    var wrap = document.createElement('div');
    wrap.setAttribute('data-kb-login', 'signupfoot');
    wrap.innerHTML =
      "<div class='lg-signup'><p>Henüz hesabınız yok mu? <a href='" + prefix + "/signup'>Üye Ol</a></p></div>" +
      "<div class='lg-foot'><p>Giriş yaparak <a href='" + prefix + "/s/kullanim-kosullari'>Kullanım Şartları</a> ve <a href='" + prefix + "/s/gizlilik'>Gizlilik Politikası</a>'nı kabul etmiş olursunuz.</p></div>";
    return wrap;
  }
  function enhance() {
    var wrap = $('.users-wrapper');
    var form = $('#login-form');
    if (!wrap || !form) return false;
    /* submit metnini "Giriş Yap" yap (native "ÜYE GİRİŞİ"). Türkçe İ regex tuzağı → değer kontrolü; idempotent. */
    var sBtn = form.querySelector('button[type="submit"]');
    if (sBtn && sBtn.textContent.trim() !== 'Giriş Yap') sBtn.innerHTML = LOGIN + 'Giriş Yap';
    if (wrap.hasAttribute('data-kb-login-done')) return true;
    /* 1) SOL auth-side (form'dan önce) */
var userForm = $('.user-form.login', wrap);
if (userForm && !$('.md-auth-side', wrap)) wrap.insertBefore(buildAuthSide(), userForm);
if (!$('.md-auth-form-head', form)) form.insertBefore(buildFormHead(), form.firstChild);
var msgBox = wrap.querySelector(':scope > .m');
if (msgBox) { var hd = $('.md-auth-form-head', form); if (hd) hd.parentNode.insertBefore(msgBox, hd.nextSibling); else form.insertBefore(msgBox, form.firstChild); }
var pass = $('#password', form);
if (pass && !$('.md-pass-toggle', form)) {
var w = document.createElement('div'); w.className = 'md-pass-wrap';
pass.parentNode.insertBefore(w, pass); w.appendChild(pass);
var t = document.createElement('button'); t.type = 'button'; t.className = 'md-pass-toggle'; t.setAttribute('aria-label', 'Şifreyi göster/gizle'); t.innerHTML = EYE;
w.appendChild(t);
t.addEventListener('click', function () { var s = pass.type === 'password'; pass.type = s ? 'text' : 'password'; t.innerHTML = s ? EYEOFF : EYE; });
}
if (!$('.md-auth-social', form)) {
var gAnchor = form.querySelector('a[href*="glogin"]');
var apple = form.querySelector('#appleid-signin'); var appleField = apple ? apple.closest('.field') : null;
var fb = form.querySelector('.btn-primary-fblogin'); var fbField = fb ? fb.closest('.field') : null;
var emailEl = $('#email', form); var emailField = emailEl ? emailEl.closest('.field') : null;
if ((gAnchor || appleField || fbField) && emailField) {
var social = document.createElement('div'); social.className = 'md-auth-social'; social.setAttribute('data-kb-login', 'social');
if (gAnchor) social.appendChild(gAnchor);
if (appleField) social.appendChild(appleField);
if (fbField) social.appendChild(fbField);
var divider = document.createElement('div'); divider.className = 'md-auth-divider'; divider.setAttribute('data-kb-login', 'divider'); divider.textContent = 'veya';
emailField.parentNode.insertBefore(social, emailField);
emailField.parentNode.insertBefore(divider, emailField);
}
}
if (!$('.lg-signup', form)) form.appendChild(buildSignupFoot());
wrap.setAttribute('data-kb-login-done', '1');
return true;
}
function run() { if (!enhance()) setTimeout(enhance, 100); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
else run();
window.addEventListener('load', function () { setTimeout(enhance, 300); });
var mo = new MutationObserver(function () { enhance(); });
if (document.body) mo.observe(document.body, { childList: true, subtree: true });
else document.addEventListener('DOMContentLoaded', function () { mo.observe(document.body, { childList: true, subtree: true }); });
})();
(function () {
function isSignupPage() {
var p = location.pathname.replace(/\/$/, '');
return /(?:^|\/)signup$/.test(p);
}
if (!isSignupPage()) return;
function $(s, r) { return (r || document).querySelector(s); }
function ic(p) { return "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>" + p + "</svg>"; }
var USERPLUS = "<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><line x1='19' x2='19' y1='8' y2='14'/><line x1='22' x2='16' y1='11' y2='11'/>";
var GIFT = "<rect x='3' y='8' width='18' height='4' rx='1'/><path d='M12 8v13'/><path d='M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7'/><path d='M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5'/>";
var SPARKLES = "<path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z'/><path d='M20 3v4'/><path d='M22 5h-4'/><path d='M4 17v2'/><path d='M5 18H3'/>";
var ZAP = "<polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/>";
var CROWN = "<path d='M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.52l4.276 3.664a1 1 0 0 0 1.516-.294z'/>";
var SHIELD = "<path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'/>";
var CHECK = "<circle cx='12' cy='12' r='10'/><path d='m9 12 2 2 4-4'/>";
var BUILDING = "<path d='M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z'/><path d='M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2'/><path d='M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2'/><path d='M10 6h4'/><path d='M10 10h4'/><path d='M10 14h4'/><path d='M10 18h4'/>";
var EYE = "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z'/><circle cx='12' cy='12' r='3'/></svg>";
var EYEOFF = "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M9.88 9.88a3 3 0 1 0 4.24 4.24'/><path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'/><path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'/><line x1='2' x2='22' y1='2' y2='22'/></svg>";
function loginHref() {
var a = $('.users-wrapper > footer.footer a');
if (a && a.getAttribute('href')) return a.getAttribute('href');
var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//);
return (m ? '/' + m[1] : '/tr-TR') + '/login';
}
function locUrl(p) { var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//); return (m ? '/' + m[1] : '/tr-TR') + p; }
function buildHero() {
var h = document.createElement('div');
h.className = 'md-reg-hero';
h.setAttribute('data-kb-signup', 'hero');
h.innerHTML =
"<span class='md-reg-badge'>" + ic(GIFT) + "İlk 2 Ay Ücretsiz</span>" +
"<h1>ModdoDay'e <span>Katıl</span></h1>" +
"<p>Kurumsal wellbeing ve kişisel deneyim hizmetleriyle yaşam kaliteni yükselt. Kendin için en uygun modu seç, uzmanlarla tanış.</p>";
return h;
}
function buildFormHead() {
var head = document.createElement('div');
head.className = 'md-auth-form-head';
head.setAttribute('data-kb-signup', 'head');
head.innerHTML =
"<div class='md-auth-head-row'><span class='md-auth-head-icn'>" + ic(USERPLUS) + "</span><h2>Hesabını Oluştur</h2></div>" +
"<p>Zaten üye misin? <a href='" + loginHref() + "'>Giriş Yap &rarr;</a></p>";
return head;
}
function buildAside() {
var aside = document.createElement('div');
aside.className = 'md-reg-aside';
aside.setAttribute('data-kb-signup', 'aside');
var ben = function (svg, t, s) { return "<div class='md-reg-benefit'><div class='md-reg-benefit-icn'>" + ic(svg) + "</div><div><h4>" + t + "</h4><p>" + s + "</p></div></div>"; };
var trust = function (svg, t) { return "<div class='md-reg-trust-row'>" + ic(svg) + "<span>" + t + "</span></div>"; };
aside.innerHTML =
"<div class='md-reg-card'>" +
"<h3>ÜYELİK AVANTAJLARI</h3>" +
ben(SPARKLES, "6 Farklı Yaşam Modu", "İlgi alanına uygun modlarda kişisel deneyim hizmeti") +
ben(ZAP, "Canlı Oturumlar", "Haftanın 7 günü uzmanlarla birebir ve grup oturumları") +
ben(CROWN, "Ayrıcalıklar Kulübü", "Özel indirimler, kampanyalar ve marka avantajları") +
ben(GIFT, "2 Ay Ücretsiz Deneme", "Hemen kayıt ol, ilk 2 ay ücretsiz keşfet") +
"</div>" +
"<div class='md-reg-card'><div class='md-reg-trust'>" +
trust(SHIELD, "256-bit SSL ile güvenli bağlantı") +
trust(CHECK, "KVKK uyumlu veri işleme") +
trust(CHECK, "İstediğin zaman iptal edebilirsin") +
trust(CHECK, "7/24 destek hattı") +
"</div></div>" +
"<div class='md-reg-card md-reg-corp'>" +
"<div class='md-reg-corp-icn'>" + ic(BUILDING) + "</div>" +
"<h4>Kurumsal üyelik mi arıyorsunuz?</h4>" +
"<p>Firmanız ve çalışanlarınız için toplu üyelik ve kurumsal wellbeing çözümleri.</p>" +
"<a class='md-reg-corp-btn' href='" + locUrl('/s/kurumsal-kayit') + "'>Kurumsal Kayıt &rarr;</a>" +
"</div>";
return aside;
}
function addPassToggle(input) {
if (!input || input.parentNode.classList.contains('md-pass-wrap')) return;
var w = document.createElement('div'); w.className = 'md-pass-wrap';
input.parentNode.insertBefore(w, input); w.appendChild(input);
var t = document.createElement('button'); t.type = 'button'; t.className = 'md-pass-toggle';
t.setAttribute('aria-label', 'Şifreyi göster/gizle'); t.innerHTML = EYE;
w.appendChild(t);
t.addEventListener('click', function () {
var s = input.type === 'password'; input.type = s ? 'text' : 'password'; t.innerHTML = s ? EYEOFF : EYE;
});
}
function enhance() {
var wrap = $('.users-wrapper');
var form = $('#register-form');
if (!wrap || !form) return false;
if (wrap.hasAttribute('data-kb-signup-done')) return true;
if (!$('.md-reg-hero', wrap)) wrap.insertBefore(buildHero(), wrap.firstChild);
var userForm = $('.user-form.register', wrap);
if (userForm && !$('.md-reg-grid', wrap)) {
var grid = document.createElement('div'); grid.className = 'md-reg-grid'; grid.setAttribute('data-kb-signup', 'grid');
wrap.insertBefore(grid, userForm);
grid.appendChild(userForm);
grid.appendChild(buildAside());
}
if (!$('.md-auth-form-head', form)) form.insertBefore(buildFormHead(), form.firstChild);
var msgBox = wrap.querySelector(':scope > .m');
if (msgBox) { var hd = $('.md-auth-form-head', form); if (hd) hd.parentNode.insertBefore(msgBox, hd.nextSibling); else form.insertBefore(msgBox, form.firstChild); }
[].forEach.call(form.querySelectorAll('.field > label'), function (l) {
if (!l.textContent.trim() && !l.querySelector('input')) l.classList.add('md-label-empty');
});
var pass = $('#password', form), passR = $('#password-repeat', form);
var pf = pass ? pass.closest('.field') : null, prf = passR ? passR.closest('.field') : null;
if (pf && prf && !$('.md-reg-row2', form)) {
var row = document.createElement('div'); row.className = 'md-reg-row2'; row.setAttribute('data-kb-signup', 'row2');
pf.parentNode.insertBefore(row, pf); row.appendChild(pf); row.appendChild(prf);
}
addPassToggle(pass); addPassToggle(passR);
var sBtn = form.querySelector('.btn-primary-signup');
if (sBtn && !sBtn.querySelector('.md-btn-ic')) {
var span = document.createElement('span'); span.className = 'md-btn-ic'; span.style.display = 'inline-flex'; span.innerHTML = ic(USERPLUS);
sBtn.insertBefore(span, sBtn.firstChild);
}
if (!$('.md-auth-social', form)) {
var fb = form.querySelector('.btn-primary-fbsignup'); var fbField = fb ? fb.closest('.field') : null;
var gAnchor = form.querySelector('#google-login-link');
var submitBtn = form.querySelector('.btn-primary-signup');
var submitField = submitBtn ? submitBtn.closest('.field') : null;
if ((fbField || gAnchor) && submitField) {
var social = document.createElement('div'); social.className = 'md-auth-social'; social.setAttribute('data-kb-signup', 'social');
if (fbField) social.appendChild(fbField);
if (gAnchor) social.appendChild(gAnchor);
var divider = document.createElement('div'); divider.className = 'md-auth-divider'; divider.setAttribute('data-kb-signup', 'divider'); divider.textContent = 'veya';
submitField.parentNode.insertBefore(divider, submitField.nextSibling);
divider.parentNode.insertBefore(social, divider.nextSibling);
}
}
wrap.setAttribute('data-kb-signup-done', '1');
return true;
}
var mo = null;
function safeEnhance() {
if (mo) mo.disconnect();
var ok = enhance();
if (mo && document.body) mo.observe(document.body, { childList: true, subtree: true });
return ok;
}
function run() { if (!safeEnhance()) setTimeout(safeEnhance, 100); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
else run();
window.addEventListener('load', function () { setTimeout(safeEnhance, 300); });
mo = new MutationObserver(function () { safeEnhance(); });
if (document.body) mo.observe(document.body, { childList: true, subtree: true });
else document.addEventListener('DOMContentLoaded', function () { mo.observe(document.body, { childList: true, subtree: true }); });
})();
(function () {
'use strict';
var DONE = 'data-kb-card';
var OBS_OPTS = { childList: true, subtree: true };
var mo = null;
var applying = false;
var GRADIENTS = [
['#10B981', '#14B8A6'], ['#3B82F6', '#06B6D4'], ['#F59E0B', '#EF4444'],
['#F43F5E', '#EC4899'], ['#22C55E', '#84CC16'], ['#8B5CF6', '#A855F7']
];
var MODES = [
{ re: /[üu]retken/i,  color: '#F59E0B' },
{ re: /teknoloji/i,   color: '#3B82F6' },
{ re: /keyif/i,       color: '#F43F5E' },
{ re: /sa[ğg]l[ıi]k/i, color: '#10B981' },
{ re: /longevity/i,   color: '#22C55E' },
{ re: /aile/i,        color: '#8B5CF6' }
];
function matchMode(text) {
for (var i = 0; i < MODES.length; i++) if (MODES[i].re.test(text)) return MODES[i];
return null;
}
function hashStr(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }
function initialsOf(name) {
var p = (name || '').trim().split(/\s+/).filter(Boolean);
if (!p.length) return '?';
if (p.length === 1) return p[0].slice(0, 2).toLocaleUpperCase('tr-TR');
return (p[0].charAt(0) + p[p.length - 1].charAt(0)).toLocaleUpperCase('tr-TR');
}
function hasRealPhoto(img) {
if (!img) return false;
var src = img.getAttribute('src') || '';
if (!src.trim()) return false;
if (/user-circle-solid\.svg/i.test(src)) return false;
if (img.complete && img.naturalWidth <= 1) return false;
return true;
}
function buildAvatar(wrap, name) {
if (!wrap) return;
var g = GRADIENTS[hashStr(name) % GRADIENTS.length];
wrap.style.setProperty('--kb-av-from', g[0]);
wrap.style.setProperty('--kb-av-to', g[1]);
var ini = wrap.querySelector('.kb-av-ini');
if (!ini) {
ini = document.createElement('span');
ini.className = 'kb-av-ini';
ini.setAttribute('aria-hidden', 'true');
ini.textContent = initialsOf(name);
wrap.appendChild(ini);
}
var img = wrap.querySelector('img');
var sync = function () { wrap.classList.toggle('kb-has-photo', hasRealPhoto(img)); };
if (img) {
sync();
img.addEventListener('load', sync);
img.addEventListener('error', function () { wrap.classList.remove('kb-has-photo'); });
} else {
wrap.classList.remove('kb-has-photo');
}
}
function extractMode(c) {
var blocks = c.querySelectorAll('.profile-categories');
if (!blocks.length) return null;
var first = blocks[0];
var btns = first.querySelectorAll('.pcategory-btn');
if (btns.length !== 1) return null;             
var label = (btns[0].textContent || '').trim();
if (first.parentNode) first.parentNode.removeChild(first);  
if (!label) return null;
var m = matchMode(label);
return { label: label, color: m ? m.color : '#F59E0B' };    
}
function buildCard(item) {
var c = item.querySelector('.item-c');
if (!c || c.getAttribute(DONE) === '1') return;
var title = c.querySelector('.item-title');
if (!title) return; 
var name = title.textContent.trim();
var imgWrap = c.querySelector('.item-image');
var unvan = c.querySelector('.unvan-title');
var mode = extractMode(c);
var ebtns = c.querySelectorAll('.profile-categories .pcategory-btn');
for (var ei = 0; ei < ebtns.length; ei++) {
if (!(ebtns[ei].textContent || '').trim()) {
var eblk = ebtns[ei].closest('.profile-categories');
if (ebtns[ei].parentNode) ebtns[ei].parentNode.removeChild(ebtns[ei]);
if (eblk && !eblk.querySelector('.pcategory-btn') && eblk.parentNode) eblk.parentNode.removeChild(eblk);
}
}
var head = document.createElement('div');
head.className = 'kb-head';
var col = document.createElement('div');
col.className = 'kb-headcol';
if (mode) {
var pill = document.createElement('span');
pill.className = 'kb-mode-tag';
pill.textContent = mode.label;
pill.style.color = mode.color;
pill.style.backgroundColor = mode.color + '22';   
pill.style.borderColor = mode.color + '59';        
col.appendChild(pill);
}
if (imgWrap) head.appendChild(imgWrap);             
col.appendChild(title);                              
if (unvan) col.appendChild(unvan);                   
head.appendChild(col);
c.appendChild(head);                                 
buildAvatar(imgWrap, name);
var foot = document.createElement('div');
foot.className = 'kb-foot';
var stars = c.querySelector('.profile-review-stars');
if (stars) {
var starCount = stars.querySelectorAll('.i-star').length;
if (starCount) {
var cc = stars.querySelector('.comment-count');
var ccNum = cc ? (cc.textContent || '').replace(/[^\d]/g, '') : '';
var r = document.createElement('div');
r.className = 'kb-rating';
r.innerHTML = '<span class="kb-star" aria-hidden="true">★</span>' +
'<strong>' + starCount.toFixed(1) + '</strong>' +
(ccNum ? '<span class="kb-rev">(' + ccNum + ')</span>' : '');
foot.appendChild(r);
}
}
var SESSION_RELS = ['service-video', 'service-phone', 'service-audio'];
var sessions = 0;
var svcWrap = c.querySelector('.item-services');
if (svcWrap) {
for (var s = 0; s < SESSION_RELS.length; s++) {
var cnt = svcWrap.querySelector('.service-icon[rel="' + SESSION_RELS[s] + '"] .service-count');
if (cnt) { var n = parseInt((cnt.textContent || '').replace(/[^\d]/g, ''), 10); if (!isNaN(n)) sessions += n; }
}
}
if (sessions > 0) {
var ses = document.createElement('div');
ses.className = 'kb-sessions';
ses.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>' +
'<span>' + sessions + ' seans</span>';
foot.appendChild(ses);
}
if (foot.children.length) c.appendChild(foot);
c.setAttribute(DONE, '1');
}
function unnestStray() {
var grids = document.querySelectorAll('.agents .list.flex:not(.order-flex-list)');
for (var g = 0; g < grids.length; g++) {
var grid = grids[g];
var stray = grid.querySelectorAll('.item .item'); 
for (var i = 0; i < stray.length; i++) {
var nested = stray[i];
if (!nested.querySelector(':scope > .item-c')) continue; 
var top = nested.parentElement;
while (top && top.parentElement !== grid) top = top.parentElement;
if (top && top !== nested && top.parentElement === grid) {
grid.insertBefore(nested, top.nextSibling); 
}
}
}
}
function run() {
if (applying) return;
if (!document.querySelector('.agents .item')) return;
applying = true;
if (mo) mo.disconnect();
try {
unnestStray();
var cards = document.querySelectorAll('.agents .item');
for (var i = 0; i < cards.length; i++) buildCard(cards[i]);
} finally {
applying = false;
if (mo && document.body) mo.observe(document.body, OBS_OPTS);
}
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
else run();
window.addEventListener('load', function () { setTimeout(run, 300); });
var startObserver = function () {
if (!document.body) { setTimeout(startObserver, 50); return; }
mo = new MutationObserver(function (muts) {
for (var i = 0; i < muts.length; i++) if (muts[i].addedNodes && muts[i].addedNodes.length) { run(); return; }
});
mo.observe(document.body, OBS_OPTS);
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startObserver, { once: true });
else startObserver();
})();
(function () {
function isPage() { return /(?:^|\/)s\/ayricaliklar-kategori$/.test(location.pathname.replace(/\/$/, '')); }
if (!isPage()) return;
function onTabClick(tab) {
var root = tab.closest('.md-ayk-brand');
if (!root) return;
var key = tab.getAttribute('data-ayk-tab');
root.querySelectorAll('[data-ayk-tab]').forEach(function (t) {
t.classList.toggle('is-active', t.getAttribute('data-ayk-tab') === key);
});
root.querySelectorAll('[data-ayk-panel]').forEach(function (p) {
p.classList.toggle('is-hidden', p.getAttribute('data-ayk-panel') !== key);
});
}
document.addEventListener('click', function (e) {
var tab = e.target.closest ? e.target.closest('.md-ayk-tab[data-ayk-tab]') : null;
if (tab) { e.preventDefault(); onTabClick(tab); }
});
})();
(function () {
function isPage() {
return /\/s\/ayricaliklar$/.test(location.pathname.replace(/\/$/, ''));
}
if (!isPage()) return;
function faq() {
var items = document.querySelectorAll('.kb-a-faq-item');
items.forEach(function (it) {
if (it.getAttribute('data-kb-a') === '1') return;
it.setAttribute('data-kb-a', '1');
var q = it.querySelector('.kb-a-faq-q');
if (!q) return;
q.addEventListener('click', function () { it.classList.toggle('is-open'); });
});
}
function run() { faq(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
else run();
window.addEventListener('load', function () { setTimeout(run, 300); });
var mo = new MutationObserver(function () { run(); });
if (document.body) {
mo.observe(document.body, { childList: true, subtree: true });
setTimeout(function () { mo.disconnect(); }, 5000);
}
})();
(function () {
function isContactPage() {
var p = location.pathname.replace(/\/$/, '');
return /(?:^|\/)s\/iletisim$/.test(p);
}
if (!isContactPage()) return;
var SVG = {
home: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 2l9 7.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z"/></svg>',
chev: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
msg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
send: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>'
};
function injectHero() {
var title = document.querySelector('.page-header .page-title');
if (!title) return;
var h1ref = title.querySelector('h1');
if (!title.querySelector('.kb-c-breadcrumb')) {
var bc = document.createElement('nav');
bc.className = 'kb-c-breadcrumb';
bc.setAttribute('data-kb-c', 'breadcrumb');
bc.innerHTML = '<a href="/">Ana Sayfa</a> <span class="kb-c-bc-sep">' + SVG.chev + '</span> <span class="kb-c-bc-cur">İletişim</span>';
title.insertBefore(bc, title.firstChild);
}
if (!title.querySelector('.kb-c-badge')) {
var bd = document.createElement('div');
bd.className = 'kb-c-badge';
bd.setAttribute('data-kb-c', 'badge');
bd.innerHTML = SVG.msg + ' <span>Bize Ulaşın</span>';
title.insertBefore(bd, h1ref);
}
var h1 = title.querySelector('h1');
if (h1 && h1.getAttribute('data-kb-c') !== 'title') {
h1.innerHTML = 'Size Nasıl <span class="kb-gradient">Yardımcı</span> Olabiliriz?';
h1.setAttribute('data-kb-c', 'title');
}
}
function makeField(opts) {
var w = document.createElement('div');
w.className = 'kb-c-field' + (opts.full ? ' kb-c-field--full' : '');
w.setAttribute('data-kb-c', 'field-' + opts.name);
var lab = document.createElement('label');
lab.textContent = opts.label;
lab.setAttribute('for', 'kb-c-' + opts.name);
w.appendChild(lab);
var inp;
if (opts.type === 'select') {
inp = document.createElement('select');
(opts.options || []).forEach(function (o) {
var op = document.createElement('option');
op.value = o.v; op.textContent = o.t;
inp.appendChild(op);
});
} else {
inp = document.createElement('input');
inp.type = opts.type || 'text';
if (opts.placeholder) inp.placeholder = opts.placeholder;
}
inp.id = 'kb-c-' + opts.name;
inp.name = 'kb_c_' + opts.name;
inp.setAttribute('autocomplete', 'off');
w.appendChild(inp);
return w;
}
function enhanceForm() {
var container = document.querySelector('.form-container.contact-form');
var formEl = document.querySelector('#contact-form');
if (!container || !formEl) return;
if (formEl.getAttribute('data-kb-c-built') === '1') return;
if (!container.querySelector('.kb-c-form-title')) {
var h2 = document.createElement('h2');
h2.className = 'kb-c-form-title';
h2.setAttribute('data-kb-c', 'form-title');
h2.textContent = 'İletişim Formu';
var lead = document.createElement('p');
lead.className = 'kb-c-form-lead';
lead.setAttribute('data-kb-c', 'form-lead');
lead.textContent = 'Formu doldurun, ekibimiz 24 saat içinde size dönüş yapsın.';
container.insertBefore(lead, container.firstChild);
container.insertBefore(h2, lead);
}
var nameInp  = formEl.querySelector('input[name="name"]');
var emailInp = formEl.querySelector('input[name="email"]');
var phoneInp = formEl.querySelector('input[name="phone"]');
var msgInp   = formEl.querySelector('textarea[name="message"]');
var nameField  = nameInp  ? nameInp.closest('.field')  : null;
var emailField = emailInp ? emailInp.closest('.field') : null;
var phoneField = phoneInp ? phoneInp.closest('.field') : null;
var msgField   = msgInp   ? msgInp.closest('.field')   : null;
if (!nameField || !emailField || !phoneField || !msgField) return;
var setLab = function (field, text) {
var l = field.querySelector('label');
if (l) l.textContent = text;
};
var setPh = function (input, ph) {
if (input) input.setAttribute('placeholder', ph);
};
setLab(nameField, 'Ad Soyad');
setLab(emailField, 'E-posta');
setLab(phoneField, 'Telefon');
setLab(msgField, 'Mesajınız');
setPh(nameInp, 'Adınızı ve soyadınızı yazın');
setPh(emailInp, 'ornek@eposta.com');
setPh(phoneInp, '+90 5XX XXX XX XX');
setPh(msgInp, 'Mesajınızı buraya yazın...');
var sirketField = makeField({ name: 'sirket', label: 'Şirket', placeholder: 'Şirket adı (opsiyonel)' });
var konuField = makeField({ name: 'konu', label: 'Konu', type: 'select', full: true, options: [
{ v: '', t: 'Konu seçin' },
{ v: 'genel', t: 'Genel Bilgi' },
{ v: 'uyelik', t: 'Üyelik & Abonelik' },
{ v: 'oturum', t: 'Canlı Oturum Sorgusu' },
{ v: 'danismanlik', t: 'Danışmanlık Başvurusu' },
{ v: 'sponsorluk', t: 'Sponsorluk & İş Birliği' },
{ v: 'kurumsal', t: 'Kurumsal Çözümler' },
{ v: 'teknik', t: 'Teknik Destek' },
{ v: 'diger', t: 'Diğer' }
] });
['field-konusu', 'field-hata_kodu', 'field-konu_secin'].forEach(function (sel) {
var old = formEl.querySelector('[data-kb-c="' + sel + '"]');
if (old && old.parentNode) old.parentNode.removeChild(old);
});
if (!nameField.parentNode.classList.contains('kb-c-row')) {
var row1 = document.createElement('div');
row1.className = 'kb-c-row';
row1.setAttribute('data-kb-c', 'row1');
nameField.parentNode.insertBefore(row1, nameField);
row1.appendChild(nameField);
row1.appendChild(emailField);
}
if (!phoneField.parentNode.classList.contains('kb-c-row')) {
var row2 = document.createElement('div');
row2.className = 'kb-c-row';
row2.setAttribute('data-kb-c', 'row2');
phoneField.parentNode.insertBefore(row2, phoneField);
row2.appendChild(phoneField);
row2.appendChild(sirketField);
}
if (!formEl.querySelector('[data-kb-c="field-konu"]') && msgField && msgField.parentNode) {
msgField.parentNode.insertBefore(konuField, msgField);
}
var btn = formEl.querySelector('button[type="submit"], input[type="submit"]');
if (btn) {
if (btn.tagName === 'INPUT') { btn.value = 'MESAJ GÖNDER'; }
else { btn.innerHTML = SVG.send + ' MESAJ GÖNDER'; }
}
formEl.addEventListener('submit', function () {
try {
var konu = (formEl.querySelector('#kb-c-konu') || {}).value || '';
var sirket = (formEl.querySelector('#kb-c-sirket') || {}).value || '';
var lines = [];
if (konu) lines.push('[Konu: ' + konu + ']');
if (sirket) lines.push('[Şirket: ' + sirket + ']');
if (lines.length && msgInp) {
var orig = msgInp.value || '';
if (orig.indexOf('[Konu:') !== 0 && orig.indexOf('[Şirket:') !== 0) {
msgInp.value = lines.join('\n') + '\n\n' + orig;
}
}
} catch (e) {  }
}, true);
formEl.setAttribute('data-kb-c-built', '1');
}
function faqAccordion() {
var items = document.querySelectorAll('.kb-c-faq .kb-c-faq-item');
if (!items.length) return;
items.forEach(function (item) {
if (item.getAttribute('data-kb-c-faq') === '1') return;
item.setAttribute('data-kb-c-faq', '1');
var q = item.querySelector('.kb-c-faq-q');
if (!q) return;
q.addEventListener('click', function () {
item.classList.toggle('is-open');
});
});
}
function enhance() {
injectHero();
enhanceForm();
faqAccordion();
}
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', enhance);
} else {
enhance();
}
window.addEventListener('load', function () { setTimeout(enhance, 300); });
var mo = new MutationObserver(function () { enhance(); });
if (document.body) {
mo.observe(document.body, { childList: true, subtree: true });
setTimeout(function () { mo.disconnect(); }, 5000);
}
})();
(function () {
function isPage() { return !!(document.body && document.body.classList.contains('kb-page-etkinlik-detay')); }
function ic(p) { return "<svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>" + p + "</svg>"; }
var I = {
back: "<path d='m12 19-7-7 7-7'/><path d='M19 12H5'/>",
cal: "<rect x='3' y='4' width='18' height='18' rx='2'/><path d='M16 2v4M8 2v4M3 10h18'/>",
clock: "<circle cx='12' cy='12' r='10'/><path d='M12 6v6l4 2'/>",
users: "<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M22 21v-2a4 4 0 0 0-3-3.87'/>",
globe: "<circle cx='12' cy='12' r='10'/><path d='M2 12h20'/><path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/>",
check: "<path d='M20 6 9 17l-5-5'/>"
};
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function localePrefix() { var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//); return m ? '/' + m[1] : ''; }
  function txt(el) { return el ? (el.textContent || '').replace(/\s+/g, ' ').trim() : ''; }
  /* Google Takvim linki — dateStr "DD.MM.YYYY[ - DD.MM.YYYY]", timeStr "HH:MM - HH:MM" */
  function gcalUrl(title, dateStr, timeStr) {
    var dm = (dateStr || '').match(/\d{2}\.\d{2}\.\d{4}/g) || [];
    var tm = (timeStr || '').match(/\d{2}:\d{2}/g) || [];
    if (!dm.length || !tm.length) return '';
    function dmy(s) { var m = s.match(/(\d{2})\.(\d{2})\.(\d{4})/); return m ? m[3] + m[2] + m[1] : ''; }
    var sd = dmy(dm[0]), ed = dmy(dm[dm.length > 1 ? 1 : 0]);
    if (!sd) return '';
    var st = tm[0].replace(':', ''), et = (tm[1] || tm[0]).replace(':', '');
    return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title || 'Etkinlik') +
      '&dates=' + sd + 'T' + st + '00/' + ed + 'T' + et + '00';
  }
  /* native <add-to-calendar-button> (atcb v2.4.3) → moddo5 outline buton teması (dark scheme + transparent/border) */
  var ATCB_VARS = "--btn-background:transparent;--btn-background-hover:rgba(255,255,255,0.08);--btn-border:rgba(255,255,255,0.25);--btn-text:#ffffff;--btn-text-hover:#ffffff;--btn-shadow:none;--btn-shadow-hover:none;--btn-shadow-active:none;--font:'Poppins',system-ui,sans-serif;--keyboard-focus:var(--md-orange,#F59E0B);--base-font-size-l:15px";
  var _gcalHref = ''; /* native widget hiç yüklenmezse fallback */
  function build() {
    var ec = document.querySelector('.event-container');
    if (!ec || ec.getAttribute('data-kb-sd')) return true;
    /* ---- VERİ ÇIKAR ---- */
    var title = txt(ec.querySelector(':scope > h2'));
    var descEl = ec.querySelector('.event-description-text');
    var desc = txt(descEl);
    // cover: .event-bg-div bg-image (boş = .../<ym>/ ile biter → gradient)
    var bgDiv = ec.querySelector('.event-bg-div');
    var cover = '';
    if (bgDiv) { var mm = (bgDiv.style.backgroundImage || '').match(/url\(["']?(.+?)["']?\)/); if (mm && mm[1] && !/\/$/.test(mm[1]) && !/\/\d{6}\/?$/.test(mm[1])) cover = mm[1]; }
var exImg = ec.querySelector('.expert-profile-pic img');
var exNameA = ec.querySelector('.expert-name a');
var exName = txt(ec.querySelector('.expert-name'));
var exTitle = txt(ec.querySelector('.expert-title'));
var exStars = ec.querySelector('.expert-stars');
var info = [].map.call(ec.querySelectorAll('.expert-bottom .info-label'), function (e) { return txt(e); }).filter(Boolean);
var fmt = info[3] || ''; var cap = info[2] || '';
var metaItems = [];
if (info[0]) metaItems.push([I.cal, 'Tarih', info[0].replace(/\s*-\s*\1/, '')]);
if (info[1]) metaItems.push([I.clock, 'Saat', info[1].replace(/UTC/i, '').trim() + ' (UTC)']);
if (cap) metaItems.push([I.users, 'Kapasite', /^\d+$/.test(cap) ? cap + ' kişi' : cap]);
if (fmt) metaItems.push([I.globe, 'Format', fmt]);
var cat = txt(ec.querySelector('.event-category, [class*="event-cat"], .event-mode')) || '';
_gcalHref = gcalUrl(title, info[0], info[1]);
var sd = document.createElement('div');
sd.className = 'kb-sd';
var metaHtml = metaItems.map(function (m) {
return "<div class='kb-sd-m'><span class='kb-sd-mic'>" + ic(m[0]) + "</span><span class='kb-sd-mt'><span class='lbl'>" + esc(m[1]) + "</span><span class='val'>" + esc(m[2]) + "</span></span></div>";
}).join('');
sd.innerHTML =
"<section class='kb-sd-hero'>" +
"<div class='kb-sd-img" + (cover ? '' : ' kb-sd-img--grad') + "'><div class='kb-sd-ov'></div>" +
"<a class='kb-sd-back' href='" + localePrefix() + "/etkinlikler'>" + ic(I.back) + "<span>Geri</span></a>" +
(cat ? "<span class='kb-sd-badge'>" + esc(cat) + "</span>" : '') +
"</div>" +
"<div class='kb-sd-expert'>" +
(exImg ? "<div class='kb-sd-ph'><img src='" + esc(exImg.getAttribute('src')) + "' alt='" + esc(exName) + "'></div>" : '') +
"<div class='kb-sd-exmeta'><h2>" + esc(exName || '') + "</h2><p>" + esc(exTitle || '') + "</p></div>" +
"</div>" +
"</section>" +
"<section class='kb-sd-main'><div class='kb-sd-wrap'>" +
(title ? "<h1>" + esc(title) + "</h1>" : '') +
(desc ? "<p class='kb-sd-desc'>" + esc(desc) + "</p>" : '') +
(metaHtml ? "<div class='kb-sd-meta'>" + metaHtml + "</div>" : '') +
"<div class='kb-sd-tabslot'></div>" +
"<div class='kb-sd-actions'><div class='kb-sd-actbtns'></div>" +
"<div class='kb-sd-meta-right'>" +
(fmt ? "<span>" + ic(I.globe) + esc(fmt) + "</span>" : '') +
"<span>" + ic(I.check) + "Kayıt sonrası katılım linki gönderilir</span>" +
"</div></div>" +
"</div></section>" +
"<div class='kb-sd-relslot'></div>";
ec.insertBefore(sd, ec.firstChild);
ec.setAttribute('data-kb-sd', '1');
if (cover) { var imgEl = sd.querySelector('.kb-sd-img'); if (imgEl) imgEl.style.backgroundImage = "url('" + cover + "')"; }
if (exStars) { var em = sd.querySelector('.kb-sd-exmeta'); if (em) em.appendChild(exStars); }
var tabs = ec.querySelector('.event-tabs-container');
if (tabs) sd.querySelector('.kb-sd-tabslot').appendChild(tabs);
var reg = ec.querySelector('.register-button');
if (reg) { var ab = sd.querySelector('.kb-sd-actbtns'); ab.insertBefore(reg, ab.firstChild); }
var social = ec.querySelector('.event-social-share');
if (social) sd.querySelector('.kb-sd-actbtns').appendChild(social);
var related = ec.querySelector('.more-events-area');
if (related) sd.querySelector('.kb-sd-relslot').appendChild(related);
return true;
}
function relocateCalendar(sd) {
var ab = sd.querySelector('.kb-sd-actbtns'); if (!ab) return true;
if (ab.querySelector('.kb-sd-atcb')) return true; 
var native = document.querySelector('add-to-calendar-button, #add-to-calendar-cn, .add-to-calendar');
if (!native) return false; 
var fresh = document.createElement('add-to-calendar-button');
[].forEach.call(native.attributes, function (at) {
var n = at.name.toLowerCase();
if (n === 'id' || n === 'class' || n === 'style' || n === 'lightmode' || n === 'stylelight' || n === 'styledark' || n.indexOf('atcb-') === 0) return;
fresh.setAttribute(at.name, at.value);
});
if (!fresh.getAttribute('label')) fresh.setAttribute('label', 'Takvime Ekle');
fresh.setAttribute('lightMode', 'dark');
fresh.setAttribute('size', '3');
fresh.setAttribute('styleLight', ATCB_VARS);
fresh.setAttribute('styleDark', ATCB_VARS);
fresh.className = 'kb-sd-atcb';
if (native.parentNode) native.parentNode.removeChild(native);
var social = ab.querySelector('.event-social-share');
if (social) ab.insertBefore(fresh, social); else ab.appendChild(fresh);
return true;
}
function calendarFallback(sd) {
var ab = sd && sd.querySelector('.kb-sd-actbtns'); if (!ab) return;
if (ab.querySelector('.kb-sd-atcb') || ab.querySelector('.kb-sd-cal') || !_gcalHref) return;
var a = document.createElement('a');
a.className = 'kb-sd-cal'; a.href = _gcalHref; a.target = '_blank'; a.rel = 'noopener';
a.innerHTML = ic(I.cal) + "<span>Takvime Ekle</span>";
var social = ab.querySelector('.event-social-share');
if (social) ab.insertBefore(a, social); else ab.appendChild(a);
}
function moveRelated() {
var sd = document.querySelector('.kb-sd'); if (!sd) return;
var slot = sd.querySelector('.kb-sd-relslot'); if (!slot) return;
var rel = document.querySelector('.event-container > .more-events-area');
if (rel && rel.parentNode !== slot) slot.appendChild(rel);
}
function labelByIcon(card, cls) {
var labels = card.querySelectorAll('.info-label');
for (var i = 0; i < labels.length; i++) {
var ico = labels[i].querySelector('i');
if (ico && ico.className.indexOf(cls) >= 0) {
var sp = labels[i].querySelector('span');
return txt(sp || labels[i]);
}
}
return '';
}
function firstTime(s) { var m = (s || '').match(/\d{1,2}:\d{2}/); return m ? m[0] : ''; }
function durMin(s) {
var tm = (s || '').match(/\d{1,2}:\d{2}/g); if (!tm || tm.length < 2) return '';
function mn(x) { var p = x.split(':'); return (+p[0]) * 60 + (+p[1]); }
var d = mn(tm[1]) - mn(tm[0]); if (d < 0) d += 1440; return d > 0 ? d + ' dk' : '';
}
function initials(name) {
var p = (name || '').trim().split(/\s+/); if (!p[0]) return '?';
return (p[0].charAt(0) + (p.length > 1 ? p[p.length - 1].charAt(0) : '')).toLocaleUpperCase('tr-TR');
}
function coverUrl(card) {
var im = card.querySelector('.event-image'); if (!im) return '';
var m = (im.getAttribute('style') || '').match(/url\(["']?(.+?)["']?\)/);
    return (m && m[1] && !/\/\d{6}\/?$/.test(m[1])) ? m[1] : '';
  }
  function relCardEl(d) {
    var a = document.createElement('a');
    a.className = 'kb-sd-rel'; a.href = d.href || '#';
    a.innerHTML =
      "<div class='media'><div class='kb-sd-rel-img'></div><div class='ov'></div>" +
      (d.badge ? "<span class='dur'>" + esc(d.badge) + "</span>" : "") + "</div>" +
      "<div class='b'><h3>" + esc(d.title) + "</h3>" +
      "<div class='who'><span class='av'>" + esc(d.initials) + "</span><span>" + esc(d.expert) + "</span></div>" +
      "<div class='rmeta'>" +
      (d.date ? "<span>" + ic(I.cal) + esc(d.date) + "</span>" : "") +
      (d.time ? "<span>" + ic(I.clock) + esc(d.time) + "</span>" : "") +
      (d.dur ? "<span class='pill2'>" + esc(d.dur) + "</span>" : "") +
      "</div></div>";
    if (d.cover) { var im = a.querySelector('.kb-sd-rel-img'); im.style.backgroundImage = "url('" + d.cover + "')"; }
    return a;
  }
  function buildRelated() {
    var area = document.querySelector('.more-events-area');
    if (!area || area.getAttribute('data-kb-rel')) return;
    var cards = [].slice.call(area.querySelectorAll('.owl-item:not(.cloned) .event-cards'));
    if (!cards.length) cards = [].slice.call(area.querySelectorAll('.event-cards'));
    if (!cards.length) return; /* henüz yüklenmedi → retry */
    /* başlık+tarihe göre dedup (klon sızıntısına karşı) */
    var seen = {}, items = [];
    cards.forEach(function (card) {
      var title = txt(card.querySelector('.event-carousel-header-part')) || 'Etkinlik';
      var date = labelByIcon(card, 'fa-calendar');
      var key = title + '|' + date; if (seen[key]) return; seen[key] = 1;
      var timeRaw = labelByIcon(card, 'fa-clock');
      var fmt = labelByIcon(card, 'fa-chalkboard') || labelByIcon(card, 'fa-globe');
      var dur = durMin(timeRaw);
      var linkA = card.querySelector('.detailed-info-button a');
      items.push({
        title: title, expert: labelByIcon(card, 'fa-user'), initials: initials(labelByIcon(card, 'fa-user')),
        date: date, time: firstTime(timeRaw), dur: dur, badge: dur || fmt, cover: coverUrl(card),
        href: linkA ? linkA.getAttribute('href') : (localePrefix() + '/etkinlikler')
      });
    });
    if (!items.length) return;
    area.setAttribute('data-kb-rel', '1');
    var grid = document.createElement('div'); grid.className = 'kb-sd-rel-grid';
    items.forEach(function (d) { grid.appendChild(relCardEl(d)); });
    var carousel = area.querySelector('.more-events-area-carousel, .owl-carousel, .event-page-carousel');
    var header = area.querySelector('.more-events-area-header');
    if (header && header.parentNode) header.parentNode.insertBefore(grid, header.nextSibling);
    else area.appendChild(grid);
    if (carousel) carousel.style.display = 'none';
  }
  function run() {
    if (!isPage()) return;
    build();
    var sd = document.querySelector('.kb-sd');
    moveRelated();
    buildRelated();
    if (sd) relocateCalendar(sd);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  window.addEventListener('load', function () { setTimeout(run, 300); });
  var tries = 0;
  var iv = setInterval(function () {
    run();
    var area = document.querySelector('.more-events-area');
    var sd = document.querySelector('.kb-sd');
    var relDone = area && area.getAttribute('data-kb-rel');
    var calDone = sd && sd.querySelector('.kb-sd-actbtns .kb-sd-atcb');
    if (++tries > 24 || (relDone && calDone)) {
      clearInterval(iv);
      if (sd && !calDone) calendarFallback(sd); /* native widget hiç yüklenmedi → gcal fallback */
    }
  }, 350);
})();
/* ============================================================
   CANLI OTURUMLAR — /s/canli-oturumlar (kb-page-cms-canli-oturumlar)
   Etkinlikleri public /event-load JSON endpoint'inden çeker ve KENDİ
markup'ımızla render eder (native DOM'dan bağımsız). Client-side filtre:
zaman (Yaklaşan/Geçmiş/Tümü) + arama + kategori. Statik kabuk CMS content'te.
   Referans: app/Views/partials/event.list.php (tz, fiyat, detay url mantığı).
   ============================================================ */
(function () {
  // Hangi sayfadayız: 'cms' (/s/canli-oturumlar, B) | 'native' (/etkinlikler, A) | null
  function pageMode() {
    var b = document.body;
    if (!b) return null;
    var dk = b.getAttribute('data-kb-page') || '';
    if (dk === 'kb-page-cms-canli-oturumlar' || b.classList.contains('kb-page-cms-canli-oturumlar')) return 'cms';
    if (dk === 'kb-page-cms-etkinlikler-2' || b.classList.contains('kb-page-cms-etkinlikler-2')) return 'cms';
    if (dk === 'kb-page-etkinlikler' || b.classList.contains('kb-page-etkinlikler')) return 'native';
    return null;
  }
  // native /etkinlikler'de kendi .md-ev host'umuzu inject et (CMS'te host zaten
function ensureHost(mode) {
var host = document.querySelector('.md-ev');
if (host) return host;
if (mode !== 'native') return null;
var page = document.querySelector('.page.events') || document.querySelector('.page') ||
document.querySelector('.page-content') || document.body;
host = document.createElement('div');
host.className = 'md-ev';
host.setAttribute('data-kb-ev-host', '1');
host.setAttribute('data-md-ev-view', 'calendar');
host.innerHTML =
'<section class="md-ev-hero"><h1>Canlı Oturumlar</h1><p>Uzmanlarımız ve Mod Elçisi Firmalarımızdan canlı oturumlara katılın, öğrenin ve uygulamaya başlayın.</p></section>' +
'<div class="md-cal"></div>' +
'<div class="md-ev-grid"></div>' +
'<div class="md-ev-empty" hidden>Bu kriterlere uygun oturum bulunamadı.</div>' +
'<div class="md-ev-loader" hidden>Yükleniyor…</div>';
page.appendChild(host);
return host;
}
var ALL = [];        
var loaded = false;  
var bound = false;   
var state = { time: 'upcoming', q: '', cat: '' };
function localePrefix() {
var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//);
return m ? '/' + m[1] : '';
}
function esc(s) {
return String(s == null ? '' : s)
.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function imgUrl(p) {
    if (!p) return '';
    p = String(p);
    return p.charAt(0) === '/' ? p : '/images/' + p;
  }
  function emptyImg(p) { return !p || /\/$/.test(String(p)); } // "/images/202604/" gibi dosyasız
  function parseUtc(s) {
    if (!s) return null;
    s = String(s);
    if (s.indexOf('Z') < 0 && s.indexOf('+') < 0) s = s.replace(' ', 'T') + 'Z';
    var d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function initials(name) {
    var p = String(name || '').trim().split(/\s+/);
    var a = (p[0] || '?').charAt(0);
    var b = p.length > 1 ? p[p.length - 1].charAt(0) : '';
    return (a + b).toLocaleUpperCase('tr-TR');
  }
  function ico(k) { return '<span class="md-ev-ico md-ev-ico--' + k + '"></span>'; }
  function startOf(e) { return parseUtc(e.start_date && (e.start_date.date || e.start_date)); }
  function tkey(e) { var d = startOf(e); return d ? d.getTime() : 0; }
  function fmtDate(d) {
    try { return d.toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' }); }
    catch (x) { return ''; }
  }
  function fmtTime(d) {
    try { return d.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }); }
    catch (x) { return ''; }
  }
  function priceText(e) {
    var pr = e.price;
    if (!pr) return '';
    var free = (pr.price == 0 && pr.credit == 0);
    if (free) return 'Ücretsiz';
    var sym = (pr.currency_iso && pr.currency_iso.symbol) ? pr.currency_iso.symbol : '';
    return (sym + ' ' + pr.price).trim();
  }
  function card(e) {
    var st = startOf(e);
    var past = st ? (st.getTime() < Date.now()) : false;
    var typeOnline = (String(e.event_type) === '1') || (e.event_type_str === 'Online');
    var typeLabel = e.event_type_str || (typeOnline ? 'Online' : 'Offline');
    var title = (String(e.event_name || '').trim()) || 'Canlı Oturum';
    var cover = emptyImg(e.image) ? '' : imgUrl(e.image);
    var avatar = emptyImg(e.agent_image) ? '' : imgUrl(e.agent_image);
    var href = localePrefix() + (e.url || '/etkinlikler');
    var cat = String(e.event_category_name || '').trim();
    var dur = String(e.duration || '').trim();
    var price = priceText(e);
    var h = '';
    h += '<a class="md-ev-card' + (past ? ' is-past' : '') + '" href="' + esc(href) + '">';
    h +=   '<div class="md-ev-cover' + (cover ? '' : ' md-ev-cover--ph') + '"' + (cover ? ' style="background-image:url(\'' + esc(cover) + '\')"' : '') + '>';
h +=     '<span class="md-ev-type">' + ico(typeOnline ? 'video' : 'pin') + esc(typeLabel) + '</span>';
h +=     '<span class="md-ev-avatar">' + (avatar ? '<img src="' + esc(avatar) + '" alt="" loading="lazy">' : '<span class="md-ev-ini">' + esc(initials(e.agent_name)) + '</span>') + '</span>';
h +=   '</div>';
h +=   '<div class="md-ev-body">';
if (cat) h += '<span class="md-ev-cat">' + esc(cat) + '</span>';
h +=     '<h3 class="md-ev-title">' + esc(title) + '</h3>';
h +=     '<div class="md-ev-speaker"><span class="md-ev-sp-name">' + esc(e.agent_name || '') + '</span>' + (e.agent_title ? '<span class="md-ev-sp-title">' + esc(e.agent_title) + '</span>' : '') + '</div>';
h +=     '<div class="md-ev-meta">';
if (st) h += '<span>' + ico('calendar') + esc(fmtDate(st)) + '</span>';
if (st) h += '<span>' + ico('clock') + esc(fmtTime(st)) + (dur ? ' · ' + esc(dur) : '') + '</span>';
h +=     '</div>';
h +=     '<div class="md-ev-foot"><span class="md-ev-price">' + esc(price) + '</span><span class="md-ev-detail">Detayları Gör ' + ico('arrow') + '</span></div>';
h +=   '</div>';
h += '</a>';
return h;
}
function visible() {
var now = Date.now();
var q = state.q;
var list = ALL.filter(function (e) {
var t = tkey(e);
if (state.time === 'upcoming' && !(t >= now)) return false;
if (state.time === 'past' && !(t < now)) return false;
if (state.cat && String(e.event_category_name || '') !== state.cat) return false;
if (q) {
var hay = ((e.event_name || '') + ' ' + (e.agent_name || '') + ' ' + (e.agent_title || '') + ' ' + (e.event_category_name || '')).toLocaleLowerCase('tr');
if (hay.indexOf(q) < 0) return false;
}
return true;
});
var dir = state.time === 'past' ? -1 : 1;
return list.sort(function (a, b) { return dir * (tkey(a) - tkey(b)); });
}
function render() {
var grid = document.querySelector('.md-ev-grid');
var empty = document.querySelector('.md-ev-empty');
if (!grid) return;
var list = visible();
grid.innerHTML = list.map(card).join('');
if (empty) empty.hidden = list.length > 0;
}
function buildCategories() {
var sel = document.querySelector('.md-ev-cat');
if (!sel) return;
var seen = {}, opts = [];
ALL.forEach(function (e) {
var c = String(e.event_category_name || '').trim();
if (c && !seen[c]) { seen[c] = 1; opts.push(c); }
});
opts.sort(function (a, b) { return a.localeCompare(b, 'tr'); });
var html = '<option value="">Tüm Kategoriler</option>';
opts.forEach(function (c) { html += '<option value="' + esc(c) + '">' + esc(c) + '</option>'; });
sel.innerHTML = html;
}
function listTrNorm(s) { return String(s == null ? '' : s).replace(/[İI]/g, 'i').replace(/ı/g, 'i').replace(/[Şş]/g, 's').replace(/[Ğğ]/g, 'g').replace(/[Üü]/g, 'u').replace(/[Çç]/g, 'c').replace(/[Öö]/g, 'o').toLowerCase(); }
function applyUrlModList() {
if (state._modApplied) return; state._modApplied = true;
var m = (location.search.match(/[?&]mod=([^&]+)/) || [])[1];
if (!m) return;
var kw = listTrNorm(decodeURIComponent(m.replace(/\+/g, ' ')));
if (!kw) return;
var cat = '';
for (var i = 0; i < ALL.length; i++) { var n = String(ALL[i].event_category_name || '').trim(); if (n && listTrNorm(n).indexOf(kw) !== -1) { cat = n; break; } }
if (!cat) return;
state.cat = cat; state.time = 'all'; 
var sel = document.querySelector('.md-ev-cat'); if (sel) sel.value = cat;
var tabs = document.querySelectorAll('.md-ev-tab'); tabs.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-ev-time') === 'all'); });
render();
}
function ensureFilters() {
var root = document.querySelector('.md-ev');
var grid = document.querySelector('.md-ev-grid');
if (!root || !grid) return false;
if (!root.querySelector('.md-ev-filters')) {
var wrap = document.createElement('div');
wrap.className = 'md-ev-filters';
wrap.innerHTML =
'<div class="md-ev-tabs">' +
'<button type="button" class="md-ev-tab is-active" data-ev-time="upcoming">Yaklaşan</button>' +
'<button type="button" class="md-ev-tab" data-ev-time="past">Geçmiş</button>' +
'<button type="button" class="md-ev-tab" data-ev-time="all">Tümü</button>' +
'</div>' +
'<span class="md-ev-filter-spacer"></span>' +
'<span class="md-ev-search-wrap">' + ico('search') +
'<input type="text" class="md-ev-search" placeholder="Oturum ara..." autocomplete="off" spellcheck="false" aria-label="Oturum ara">' +
'</span>' +
'<select class="md-ev-cat" aria-label="Kategori"><option value="">Tüm Kategoriler</option></select>';
grid.parentNode.insertBefore(wrap, grid);
}
bindFilters();
return true;
}
function bindFilters() {
if (bound) return;
var wrap = document.querySelector('.md-ev-filters');
if (!wrap) return;
bound = true;
var tabs = wrap.querySelectorAll('.md-ev-tab');
tabs.forEach(function (btn) {
btn.addEventListener('click', function () {
state.time = btn.getAttribute('data-ev-time') || 'all';
tabs.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
render();
});
});
var search = wrap.querySelector('.md-ev-search');
if (search) search.addEventListener('input', function () {
state.q = search.value.toLocaleLowerCase('tr').trim();
render();
});
var sel = wrap.querySelector('.md-ev-cat');
if (sel) sel.addEventListener('change', function () { state.cat = sel.value; render(); });
}
async function loadData() {
if (loaded) return;
loaded = true;
var loader = document.querySelector('.md-ev-loader');
if (loader) loader.hidden = false;
var LIMIT = 100, MAX = 5000;
try {
var acc = [], offset = 0;
while (true) {
var res = await fetch('/event-load?limit=' + LIMIT + '&offset=' + offset, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
if (!res.ok) throw new Error('HTTP ' + res.status);
var data = await res.json();
var batch = Array.isArray(data) ? data : (data && data.data ? data.data : []);
if (!Array.isArray(data) && !(data && data.data) && window.console) console.warn('[etkinlikler] beklenmeyen yanıt şeması', data);
acc = acc.concat(batch);
offset += LIMIT;
if (batch.length < LIMIT || acc.length >= MAX) break;
}
ALL = acc;
if (cal.active) { try { CATLIST = await fetchCategories(); } catch (e) { CATLIST = null; } }  
if (loader) loader.hidden = true;
if (cal.active) { calBuild(); sxRender(); }   
else { buildCategories(); render(); applyUrlModList(); }  
} catch (err) {
loaded = false; 
if (loader) { loader.hidden = false; loader.textContent = 'Etkinlikler yüklenemedi.'; }
if (window.console) console.error('[etkinlikler] fetch error', err);
}
}
var MODE_PALETTE = [
{ kw: 'uretken',   color: '#F59E0B' },
{ kw: 'teknoloji', color: '#3B82F6' },
{ kw: 'keyif',     color: '#F43F5E' },
{ kw: 'saglik',    color: '#10B981' },
{ kw: 'longevity', color: '#22C55E' },
{ kw: 'aile',      color: '#8B5CF6' }
];
var FALLBACK_COLOR = '#94A3B8';
var MODELIST = [];  
var CATLIST = null; 
function trNorm(s) {
return String(s == null ? '' : s)
.replace(/[İI]/g, 'i').replace(/ı/g, 'i').replace(/[Şş]/g, 's').replace(/[Ğğ]/g, 'g')
.replace(/[Üü]/g, 'u').replace(/[Çç]/g, 'c').replace(/[Öö]/g, 'o').toLowerCase();
}
function slugify(s) { return trNorm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
function hashColor(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return 'hsl(' + (h % 360) + ',60%,55%)'; }
function colorForCat(name, slug) {
var h = trNorm((name || '') + ' ' + (slug || ''));
for (var i = 0; i < MODE_PALETTE.length; i++) if (h.indexOf(MODE_PALETTE[i].kw) !== -1) return MODE_PALETTE[i].color;
return name ? hashColor(h) : FALLBACK_COLOR;  
}
function modeOf(e) {
var name = String(e.event_category_name || '').trim();
var cslug = String(e.category_slug || '').trim();  
if (!name && !cslug) return { slug: '__other', name: 'Diğer', color: FALLBACK_COLOR };
return { slug: cslug || slugify(name), name: name || cslug, color: colorForCat(name, cslug) };
}
function modeRank(m) {
var h = trNorm(m.name + ' ' + m.slug);
for (var i = 0; i < MODE_PALETTE.length; i++) if (h.indexOf(MODE_PALETTE[i].kw) !== -1) return i;
return 99;
}
function computeModes() {
var seen = {}, list = [];
ALL.forEach(function (e) {
if (!String(e.event_category_name || '').trim()) return;
var md = modeOf(e);
if (md.slug === '__other' || seen[md.slug]) return;
seen[md.slug] = 1; list.push({ slug: md.slug, name: md.name, color: md.color });
});
return list;
}
function fetchCategories() {
return fetch(localePrefix() + '/etkinlikler', { credentials: 'same-origin' })
.then(function (r) { return r.ok ? r.text() : ''; })
.then(function (html) {
if (!html) return null;
var doc = new DOMParser().parseFromString(html, 'text/html');
var sel = doc.querySelector('select[name="category_name"]');
if (!sel) return null;
var list = [];
[].forEach.call(sel.options, function (o) {
var v = (o.value || '').trim(), t = (o.textContent || '').trim();
if (!v || !t) return;  
list.push({ slug: v, name: t, color: colorForCat(t, v) });
});
return list.length ? list : null;
})
.catch(function () { return null; });
}
function buildModes() {
var src = (CATLIST && CATLIST.length) ? CATLIST.slice() : computeModes();
src.sort(function (a, b) { var ra = modeRank(a), rb = modeRank(b); return ra !== rb ? ra - rb : a.name.localeCompare(b.name, 'tr'); });
MODELIST = src;
var mf = document.querySelector('.md-cal-modefilters');
if (mf) mf.innerHTML = MODELIST.map(function (m) {
return '<button type="button" class="md-cal-mode" data-mode="' + esc(m.slug) + '" style="--mc:' + m.color + '">' +
'<span class="md-cal-cb"></span><span class="md-cal-mode-name">' + esc(m.name) + '</span></button>';
}).join('');
cal.modes = cal.modes.filter(function (s) { return MODELIST.some(function (m) { return m.slug === s; }); }); 
calUpdateChips();
}
var CMONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
var CDOW = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
var cal = { active: false, view: 'month', year: 0, month: 0, weekStart: null, modes: [], byDate: null, inited: false };
function pad2(n) { return (n < 10 ? '0' : '') + n; }
function calKey(y, m, d) { return y + '-' + pad2(m + 1) + '-' + pad2(d); }
function calKeyOf(d) { return calKey(d.getFullYear(), d.getMonth(), d.getDate()); }
function calMonday(d) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; }
function calBuildIndex() {
var map = {};
ALL.forEach(function (e) {
var st = startOf(e); if (!st) return; 
var k = calKeyOf(st);
(map[k] = map[k] || []).push(e);
});
Object.keys(map).forEach(function (k) { map[k].sort(function (a, b) { return tkey(a) - tkey(b); }); });
cal.byDate = map;
}
function calSessHTML(e) {
var md = modeOf(e);
var st = startOf(e);
var href = localePrefix() + (e.url || '/etkinlikler');
var title = (String(e.event_name || '').trim()) || 'Canlı Oturum';
var dur = String(e.duration || '').trim();
var time = st ? fmtTime(st) : '';
return '<a class="md-cal-sess" href="' + esc(href) + '" data-mode="' + esc(md.slug) + '" style="--sc:' + md.color + '">' +
'<span class="md-cal-sess-arrow">' + ico('arrow') + '</span>' +
'<span class="md-cal-sess-title">' + esc(title) + '</span>' +
'<span class="md-cal-sess-meta"><span>' + esc(time) + '</span><span>' + esc(dur) + '</span></span>' +
'</a>';
}
function calDayBody(k) {
var list = (cal.byDate && cal.byDate[k]) || [];
if (cal.modes.length) list = list.filter(function (e) { var s = modeOf(e).slug; return s === '__other' || cal.modes.indexOf(s) !== -1; });
if (!list.length) return '<div class="md-cal-empty">Oturum yok</div>';
return '<div class="md-cal-sess-list">' + list.map(calSessHTML).join('') + '</div>';
}
function calDayCell(dt, withMonth) {
var k = calKeyOf(dt);
var isToday = (k === calKeyOf(new Date()));
var num = dt.getDate() + (withMonth ? '<span class="md-cal-daymon">' + CMONTHS[dt.getMonth()] + '</span>' : '');
return '<div class="md-cal-day' + (isToday ? ' is-today' : '') + '"><div class="md-cal-daynum">' + num + '</div>' +
'<div class="md-cal-day-body">' + calDayBody(k) + '</div></div>';
}
function calRenderMonth() {
var grid = document.getElementById('md-cal-month'); if (!grid) return;
var days = new Date(cal.year, cal.month + 1, 0).getDate();
var firstDow = (new Date(cal.year, cal.month, 1).getDay() + 6) % 7;
var html = '';
for (var i = 0; i < firstDow; i++) html += '<div class="md-cal-day md-cal-day--pad"></div>';
for (var d = 1; d <= days; d++) html += calDayCell(new Date(cal.year, cal.month, d), false);
grid.innerHTML = html;
}
function calRenderWeek() {
var grid = document.getElementById('md-cal-week'); if (!grid) return;
var s = calMonday(cal.weekStart);
var html = '';
for (var i = 0; i < 7; i++) html += calDayCell(new Date(s.getFullYear(), s.getMonth(), s.getDate() + i), true);
grid.innerHTML = html;
}
function calTitle() {
if (cal.view === 'week') {
var s = calMonday(cal.weekStart), e = new Date(s.getFullYear(), s.getMonth(), s.getDate() + 6);
if (s.getMonth() === e.getMonth()) return s.getDate() + ' - ' + e.getDate() + ' ' + CMONTHS[s.getMonth()] + ' ' + s.getFullYear();
return s.getDate() + ' ' + CMONTHS[s.getMonth()] + ' - ' + e.getDate() + ' ' + CMONTHS[e.getMonth()] + ' ' + e.getFullYear();
}
return CMONTHS[cal.month] + ' ' + cal.year;
}
function calRender() {
var mg = document.getElementById('md-cal-month'), wg = document.getElementById('md-cal-week');
if (cal.view === 'week') { if (mg) mg.style.display = 'none'; if (wg) wg.style.display = ''; calRenderWeek(); }
else { if (wg) wg.style.display = 'none'; if (mg) mg.style.display = ''; calRenderMonth(); }
var t = document.querySelector('.md-cal-title'); if (t) t.textContent = calTitle();
}
function calStep(dir) {
if (cal.view === 'week') { var w = cal.weekStart; cal.weekStart = new Date(w.getFullYear(), w.getMonth(), w.getDate() + dir * 7); }
else { cal.month += dir; if (cal.month < 0) { cal.month = 11; cal.year--; } else if (cal.month > 11) { cal.month = 0; cal.year++; } }
calRender();
}
function calUpdateChips() {
var holder = document.querySelector('.md-cal'); if (!holder) return;
holder.querySelectorAll('.md-cal-mode').forEach(function (chip) {
var on = cal.modes.length === 0 || cal.modes.indexOf(chip.getAttribute('data-mode')) !== -1;
chip.classList.toggle('is-off', !on);
});
}
function applyMode() {
calUpdateChips();
calRender();
sxRenderRows();
}
function calBuild() {
if (!cal.active) return;
calBuildIndex();
if (!cal.inited) {
var now = new Date();
cal.year = now.getFullYear(); cal.month = now.getMonth(); cal.weekStart = calMonday(now);
cal.inited = true;
}
buildModes();  
applyUrlMod(); 
calRender();
}
function applyUrlMod() {
if (cal._modApplied) return; cal._modApplied = true;
var m = (location.search.match(/[?&]mod=([^&]+)/) || [])[1];
if (!m) return;
var kw = trNorm(decodeURIComponent(m.replace(/\+/g, ' ')));
if (!kw) return;
var hits = MODELIST.filter(function (md) { return trNorm(md.name + ' ' + md.slug).indexOf(kw) !== -1; });
if (hits.length) { cal.modes = hits.map(function (md) { return md.slug; }); pg.view = 'list'; calUpdateChips(); }
}
function calEnsure(host) {
var holder = host.querySelector('.md-cal');
if (holder && holder.getAttribute('data-built') !== '1') {
holder.setAttribute('data-built', '1');
var dh = CDOW.map(function (x) { return '<div class="md-cal-dh">' + x + '</div>'; }).join('');
holder.innerHTML =
'<div class="md-cal-wrap">' +
'<div class="md-cal-head">' +
'<div class="md-cal-head-top"><h2 class="md-cal-h2">Canlı Oturumlar Takvimi</h2>' +
'<div class="md-cal-modetoggle"><button type="button" class="is-active" data-cal-view="month">Aylık</button><button type="button" data-cal-view="week">Haftalık</button></div>' +
'</div>' +
'<div class="md-cal-head-nav"><h3 class="md-cal-title"></h3>' +
'<div class="md-cal-navbtns"><button type="button" class="md-cal-prev" data-cal-nav="-1" aria-label="Önceki">' + ico('arrow') + '</button>' +
'<button type="button" data-cal-nav="1" aria-label="Sonraki">' + ico('arrow') + '</button></div></div>' +
'</div>' +
'<div class="md-cal-content">' +
'<div class="md-cal-modefilters"></div>' +  
'<p class="md-cal-info">Oturum kartlarına tıklayarak detay sayfasını görüntüleyebilir ve oturuma katılabilirsiniz.</p>' +
'<div class="md-cal-grid-head">' + dh + '</div>' +
'<div class="md-cal-grid" id="md-cal-month"></div>' +
'<div class="md-cal-grid" id="md-cal-week" style="display:none"></div>' +
'</div>' +
'</div>';
holder.querySelectorAll('[data-cal-view]').forEach(function (btn) {
btn.addEventListener('click', function () {
cal.view = btn.getAttribute('data-cal-view');
holder.querySelectorAll('[data-cal-view]').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
calRender();
});
});
holder.querySelectorAll('[data-cal-nav]').forEach(function (btn) {
btn.addEventListener('click', function () { calStep(parseInt(btn.getAttribute('data-cal-nav'), 10)); });
});
var mf = holder.querySelector('.md-cal-modefilters');
mf.addEventListener('click', function (ev) {
var chip = ev.target.closest && ev.target.closest('.md-cal-mode');
if (!chip || !mf.contains(chip)) return;
var m = chip.getAttribute('data-mode'), i = cal.modes.indexOf(m);
if (i === -1) cal.modes.push(m); else cal.modes.splice(i, 1);
applyMode();
});
}
}
var pg = { time: 'upcoming', view: 'calendar', qc: '', qs: '' };  
function pgHost() { return document.querySelector('.md-ev'); }
function sxRows() {
var now = Date.now();
var list = ALL.filter(function (e) {
var t = tkey(e);
if (pg.time === 'upcoming' && !(t >= now)) return false;
if (pg.time === 'past' && !(t < now)) return false;
if (cal.modes.length) { var s = modeOf(e).slug; if (s !== '__other' && cal.modes.indexOf(s) === -1) return false; }
if (pg.qc && trNorm(e.agent_name || '').indexOf(trNorm(pg.qc)) < 0) return false;
if (pg.qs && trNorm((e.event_name || '') + ' ' + (e.event_category_name || '')).indexOf(trNorm(pg.qs)) < 0) return false;
return true;
});
var dir = pg.time === 'past' ? -1 : 1;
return list.sort(function (a, b) { return dir * (tkey(a) - tkey(b)); });
}
function sxRowHTML(e) {
var md = modeOf(e), st = startOf(e);
var past = st ? (st.getTime() < Date.now()) : false;
var href = localePrefix() + (e.url || '/etkinlikler');
var title = (String(e.event_name || '').trim()) || 'Canlı Oturum';
var dur = String(e.duration || '').trim();
var avatar = emptyImg(e.agent_image) ? '' : imgUrl(e.agent_image);
var role = String(e.agent_title || '').trim() || 'Uzman Danışman';
var isSeries = /b[öo]l[üu]m/i.test(title);
var badge = past ? '<span class="md-cal-row-badge is-done">Tamamlandı</span>'
: (isSeries ? '<span class="md-cal-row-badge" style="border-color:' + md.color + ';color:' + md.color + '">Seri</span>' : '');
var h = '<a class="md-cal-row' + (past ? ' is-past' : '') + '" href="' + esc(href) + '" data-mode="' + esc(md.slug) + '" style="--rc:' + md.color + '">';
h += '<div class="md-cal-row-left"><div class="md-cal-row-av" style="border-color:' + md.color + '">' +
(avatar ? '<img src="' + esc(avatar) + '" alt="" loading="lazy">' : '<span class="md-cal-row-ini">' + esc(initials(e.agent_name)) + '</span>') + '</div>' +
'<div class="md-cal-row-who"><p class="nm">' + esc(e.agent_name || '') + '</p><p class="rl">' + esc(role) + '</p></div></div>';
h += '<div class="md-cal-row-center"><div class="md-cal-row-tags"><span class="md-cal-row-mode" style="background:' + md.color + '">' + esc(md.name) + '</span>' + badge + '</div>' +
'<h3>' + esc(title) + '</h3></div>';
h += '<div class="md-cal-row-right"><div class="wr">' + ico('calendar') + '<span class="d">' + (st ? esc(fmtDate(st)) : '') + '</span></div>' +
'<div class="wr">' + ico('clock') + '<span class="t">' + (st ? esc(fmtTime(st)) : '') + '</span></div>' +
(dur ? '<div class="wr"><span class="dur">' + esc(dur) + '</span></div>' : '') + '</div>';
h += '</a>';
return h;
}
function sxRenderRows() {
var c = document.querySelector('.md-cal-rows'); if (!c) return;
var list = sxRows();
c.innerHTML = list.length ? list.map(sxRowHTML).join('')
: '<div class="md-cal-rows-empty">Bu kriterlere uygun oturum bulunamadı.</div>';
}
function pgApply() {
var host = pgHost(); if (!host) return;
var calEl = host.querySelector('.md-cal'), rowsEl = host.querySelector('.md-cal-rows');
var note = host.querySelector('.md-cal-pastnote'), vt = host.querySelector('.md-cal-viewtoggle');
var showCal = pg.time === 'upcoming' && pg.view === 'calendar';
var showRows = pg.time === 'past' || (pg.time === 'upcoming' && pg.view === 'list');
if (calEl) calEl.style.display = showCal ? '' : 'none';
if (rowsEl) rowsEl.style.display = showRows ? '' : 'none';
if (note) note.style.display = pg.time === 'past' ? '' : 'none';
if (vt) vt.style.display = pg.time === 'upcoming' ? '' : 'none';
host.querySelectorAll('[data-pg-time]').forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-pg-time') === pg.time); });
host.querySelectorAll('[data-pg-view]').forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-pg-view') === pg.view); });
}
function sxRender() { sxRenderRows(); pgApply(); }
function sxEnsure(host) {
if (host.querySelector('.md-cal-filters')) return;
var calEl = host.querySelector('.md-cal');
var g = host.querySelector('.md-ev-grid'); if (g) g.style.display = 'none';      
var em = host.querySelector('.md-ev-empty'); if (em) em.style.display = 'none';
var fb = document.createElement('div');
fb.className = 'md-cal-filters';
fb.innerHTML =
'<div class="md-cal-timebtns">' +
'<button type="button" class="md-cal-tbtn is-active" data-pg-time="upcoming">Yaklaşan Oturumlar</button>' +
'<button type="button" class="md-cal-tbtn" data-pg-time="past">Geçmiş Oturumlar</button>' +
'</div>' +
'<div class="md-cal-selects">' +
'<div class="md-cal-field"><span class="md-ev-ico md-ev-ico--search md-cal-sicon"></span><input type="text" class="md-cal-qc" placeholder="Danışman ara..." autocomplete="off" spellcheck="false" aria-label="Danışman ara"></div>' +
'<div class="md-cal-field"><span class="md-ev-ico md-ev-ico--search md-cal-sicon"></span><input type="text" class="md-cal-qs" placeholder="Oturum ara..." autocomplete="off" spellcheck="false" aria-label="Oturum ara"></div>' +
'</div>';
var vt = document.createElement('div');
vt.className = 'md-cal-viewtoggle';
vt.innerHTML =
'<button type="button" class="md-cal-vbtn is-active" data-pg-view="calendar" title="Takvim Görünümü">' + ico('calendar') + '</button>' +
'<button type="button" class="md-cal-vbtn" data-pg-view="list" title="Liste Görünümü">' + ico('list') + '</button>';
var note = document.createElement('p'); note.className = 'md-cal-pastnote'; note.style.display = 'none';
note.textContent = 'Geçmiş oturumların kayıtlarını izleyebilirsiniz.';
var rows = document.createElement('div'); rows.className = 'md-cal-rows';
if (calEl) {
host.insertBefore(fb, calEl);
host.insertBefore(vt, calEl);
calEl.insertAdjacentElement('afterend', rows);
rows.insertAdjacentElement('beforebegin', note);
}
fb.querySelectorAll('[data-pg-time]').forEach(function (btn) {
btn.addEventListener('click', function () { pg.time = btn.getAttribute('data-pg-time'); sxRender(); });
});
vt.querySelectorAll('[data-pg-view]').forEach(function (btn) {
btn.addEventListener('click', function () { pg.view = btn.getAttribute('data-pg-view'); pgApply(); });
});
var qc = fb.querySelector('.md-cal-qc'), qs = fb.querySelector('.md-cal-qs');
function onSearch() {
pg.qc = qc.value.trim(); pg.qs = qs.value.trim();
if ((pg.qc || pg.qs) && pg.time === 'upcoming') pg.view = 'list';
sxRender();
}
qc.addEventListener('input', onSearch);
qs.addEventListener('input', onSearch);
}
function run() {
var mode = pageMode();
if (!mode) return;
if (mode === 'native') {
['.page.events > .container.events-container', '.page.events > .page-header'].forEach(function (sel) {
var el = document.querySelector(sel);
if (el && el.parentNode) el.parentNode.removeChild(el);
});
['event-container', 'scroll-sentinel', 'loader'].forEach(function (id) {
var el = document.getElementById(id);
if (el && el.parentNode) el.parentNode.removeChild(el);
});
}
var host = ensureHost(mode);
if (!host || !host.querySelector('.md-ev-grid')) return; 
cal.active = host.getAttribute('data-md-ev-view') === 'calendar' || !!host.querySelector('.md-cal');
if (cal.active) { calEnsure(host); sxEnsure(host); }  
else ensureFilters();                                  
loadData();
}
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', run);
} else {
run();
}
window.addEventListener('load', function () { setTimeout(run, 300); });
})();
(function () {
function isCat() {
if (typeof isCategory !== 'undefined' && isCategory) return true;
return /\/kategori\/[^\/]+$/.test(location.pathname.replace(/\/$/, ''));
}
if (!isCat()) return;
function slug() {
var m = location.pathname.replace(/\/$/, '').match(/\/kategori\/([^\/]+)$/);
return m ? m[1].replace(/[^a-z0-9-]/gi, '') : '';
}
function localePrefix() { var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//); return m ? '/' + m[1] : ''; }
function trNorm(s) { return String(s == null ? '' : s).replace(/[İI]/g, 'i').replace(/ı/g, 'i').replace(/[Şş]/g, 's').replace(/[Ğğ]/g, 'g').replace(/[Üü]/g, 'u').replace(/[Çç]/g, 'c').replace(/[Öö]/g, 'o').toLowerCase(); }
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function imgUrl(p) { if (!p) return ''; p = String(p); return p.charAt(0) === '/' ? p : '/images/' + p; }
  function emptyImg(p) { return !p || /\/$/.test(String(p)); }
  function parseUtc(s) { if (!s) return null; s = String(s); if (s.indexOf('Z') < 0 && s.indexOf('+') < 0) s = s.replace(' ', 'T') + 'Z'; var d = new Date(s); return isNaN(d.getTime()) ? null : d; }
  function startOf(e) { return parseUtc(e.start_date && (e.start_date.date || e.start_date)); }
  function fmtDate(d) { try { return d.toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' }); } catch (x) { return ''; } }
  function fmtTime(d) { try { return d.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }); } catch (x) { return ''; } }
  function initials(n) { var p = String(n || '').trim().split(/\s+/); return ((p[0] || '?').charAt(0) + (p.length > 1 ? p[p.length - 1].charAt(0) : '')).toLocaleUpperCase('tr-TR'); }
  function ico(inner) { return "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>" + inner + "</svg>"; }
  var I_CAL = "<rect x='3' y='4' width='18' height='18' rx='2'/><path d='M16 2v4'/><path d='M8 2v4'/><path d='M3 10h18'/>";
  var I_CLOCK = "<circle cx='12' cy='12' r='10'/><path d='M12 6v6l4 2'/>";
  var I_ARROW = "<path d='M5 12h14'/><path d='m12 5 7 7-7 7'/>";
  /* Bu modun keyword'ü (slug ilk segmenti): uretken / teknolojiye(→teknoloji) / keyif / saglikliyim(→saglik) / longevity / aile */
  function modeKw(s) { return trNorm((s || '').split('-')[0]); }
  function eventCard(e) {
    var st = startOf(e);
    var href = localePrefix() + (e.url || '/etkinlikler');
    var title = (String(e.event_name || '').trim()) || 'Canlı Oturum';
    var dur = String(e.duration || '').trim();
    var cover = emptyImg(e.image) ? '' : imgUrl(e.image);
    var avatar = emptyImg(e.agent_image) ? '' : imgUrl(e.agent_image);
    var roundImg = avatar || cover;
    var h = '<a class="ms-card" href="' + esc(href) + '">';
    h += '<div class="ms-media">' + (cover ? '<img class="ms-bg" src="' + esc(cover) + '" alt="" loading="lazy">' : '') + '<div class="ms-ov"></div>' +
      '<div class="ms-round">' + (roundImg ? '<img src="' + esc(roundImg) + '" alt="" loading="lazy">' : '<span class="ms-ini">' + esc(initials(e.agent_name)) + '</span>') + '</div></div>';
    h += '<div class="ms-body"><h3>' + esc(title) + '</h3>' + (e.agent_name ? '<p class="ms-expert">' + esc(e.agent_name) + '</p>' : '') +
      '<div class="ms-meta"><span>' + ico(I_CAL) + (st ? esc(fmtDate(st)) : '') + '</span><span>' + ico(I_CLOCK) + (st ? esc(fmtTime(st)) : '') + '</span>' +
      (dur ? '<span class="ms-dur">' + esc(dur) + '</span>' : '') + '</div></div></a>';
    return h;
  }
  function loadEvents(s, catName) {
    if (document.querySelector('[data-kb-cat="events"]')) return;
    var anchor = document.querySelector('[data-kb-cat="experts-h"]') || document.querySelector('.page .agents');
    if (!anchor) return;
    var kw = modeKw(s);
    fetch('/event-load?limit=200&offset=0', { headers: { 'X-Requested-With': 'XMLHttpRequest' }, credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (data) {
        if (document.querySelector('[data-kb-cat="events"]')) return;
        var all = Array.isArray(data) ? data : (data && data.data ? data.data : []);
        var now = Date.now();
        var list = all.filter(function (e) { return kw && trNorm(e.event_category_name || '').indexOf(kw) !== -1; });
        // yaklaşanlar önce; yoksa hepsinden en yeni; en fazla 3
        var up = list.filter(function (e) { var d = startOf(e); return d && d.getTime() >= now; }).sort(function (a, b) { return startOf(a) - startOf(b); });
        var pick = (up.length ? up : list.sort(function (a, b) { return startOf(b) - startOf(a); })).slice(0, 3);
        if (!pick.length) return; // bu modda etkinlik yok → bölüm gösterme
        var sec = document.createElement('section');
        sec.className = 'kb-cat-events';
        sec.setAttribute('data-kb-cat', 'events');
        sec.innerHTML = '<div class="kb-cat-events-head"><div><h2>Yaklaşan Oturumlar</h2><p>' + esc((catName || 'Bu mod') + ' kategorisindeki canlı etkinlikler') + '</p></div>' +
          '<a class="kb-cat-events-all" href="' + localePrefix() + '/s/etkinlikler-2?mod=' + encodeURIComponent(kw) + '">Tümü ' + ico(I_ARROW) + '</a></div>' +
          '<div class="ms-grid">' + pick.map(eventCard).join('') + '</div>';
        anchor.parentElement.insertBefore(sec, anchor);
      })
      .catch(function () {});
  }
  function run() {
    var b = document.body;
    if (!b) return;
    var s = slug();
    if (s && !b.classList.contains('kb-cat-' + s)) b.classList.add('kb-cat-' + s);
    var catName = ((document.querySelector('.page-title h1') || {}).textContent || '').trim();
    /* "Uzman Danışmanlar" başlığı — native .agents listesinin hemen önüne */
    var agents = document.querySelector('.page .agents');
    if (agents && !document.querySelector('[data-kb-cat="experts-h"]')) {
      var wrap = agents.closest('.categories') || agents.parentElement;
      var h = document.createElement('div');
      h.className = 'kb-cat-experts-head';
      h.setAttribute('data-kb-cat', 'experts-h');
      h.innerHTML = '<h2>Uzman Danışmanlar</h2><p>' + (catName ? esc(catName) + ' kategorisindeki uzman danışmanlarımız' : 'Uzman danışmanlarımız') + '</p>';
      (wrap.parentElement || wrap).insertBefore(h, wrap);
    }
    /* "Yaklaşan Oturumlar" — moda ait etkinlikler (uzmanlar bölümünden önce) */
    loadEvents(s, catName);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  window.addEventListener('load', function () { setTimeout(run, 300); });
  var mo = new MutationObserver(function () { run(); });
  if (document.body) {
    mo.observe(document.body, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); }, 5000);
  }
})();
/* ============================================================
   SECTION: KURUMSAL KAYIT — CMS /s/kurumsal-kayit (tasarım: kurumsal-kayit.html)
   - Layout: hero (içerik, üstte) + .md-kk-grid [ native form KARTI (sol) | aside (sağ) ]
   - Native #contact-form (attach_contact_form) restyle: form-head, relabel,
     Firma + Çalışan Sayısı alanları inject, 2-kolon satır, KVKK onayı, submit.
   - Submit'te Firma + Çalışan Sayısı değerlerini message gövdesine katla
     (native backend yalnız name/email/phone/message gönderir → gerçek lead).
   İçerik (hero + aside) page content'te (editör'den düzenlenebilir). SVG sadece
   JS-inject (TinyMCE'ye girmez → güvenli). Idempotent + observer auto-disconnect.
   ============================================================ */
(function () {
  function isPage() { return /(?:^|\/)s\/kurumsal-kayit$/.test(location.pathname.replace(/\/$/, '')); }
  if (!isPage()) return;
  function $(s, r) { return (r || document).querySelector(s); }
  var SVG = {
    crown: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.52l4.276 3.664a1 1 0 0 0 1.516-.294z'/></svg>",
    send: "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m22 2-7 20-4-9-9-4Z'/><path d='M22 2 11 13'/></svg>"
  };
  function makeField(opts) {
    var w = document.createElement('div');
    w.className = 'md-kk-field' + (opts.full ? ' md-kk-field--full' : '');
    w.setAttribute('data-kk', 'field-' + opts.name);
    var lab = document.createElement('label');
    lab.textContent = opts.label; lab.setAttribute('for', 'kk-' + opts.name);
    w.appendChild(lab);
    var inp;
    if (opts.type === 'select') {
      inp = document.createElement('select');
      (opts.options || []).forEach(function (o) { var op = document.createElement('option'); op.value = o.v; op.textContent = o.t; inp.appendChild(op); });
    } else {
      inp = document.createElement('input'); inp.type = opts.type || 'text';
      if (opts.placeholder) inp.placeholder = opts.placeholder;
    }
    inp.id = 'kk-' + opts.name; inp.name = 'kb_kk_' + opts.name; inp.setAttribute('autocomplete', 'off');
    w.appendChild(inp);
    return w;
  }
  /* hero altında [form | aside] grid'i kur */
  function buildGrid() {
    var pb = $('.page-body');
    var form = $('.form-container.contact-form');
    var aside = $('.md-kk-aside');
    if (!pb || !form || !aside) return;
    if ($('.md-kk-grid', pb)) return;
    var grid = document.createElement('div'); grid.className = 'md-kk-grid'; grid.setAttribute('data-kk', 'grid');
    /* grid'i form'un olduğu yere koy, sonra form + aside'ı içine al */
    form.parentNode.insertBefore(grid, form);
    grid.appendChild(form);   /* sol */
    grid.appendChild(aside);  /* sağ */
  }
  function foldMessage(formEl, msgInp) {
    try {
      var firma = (formEl.querySelector('#kk-firma') || {}).value || '';
      var calisan = (formEl.querySelector('#kk-calisan') || {}).value || '';
      var lines = [];
      if (firma) lines.push('[Firma: ' + firma + ']');
      if (calisan) lines.push('[Çalışan Sayısı: ' + calisan + ']');
      if (lines.length && msgInp) {
        var orig = msgInp.value || '';
        if (orig.indexOf('[Firma:') !== 0 && orig.indexOf('[Çalışan') !== 0) {
          msgInp.value = lines.join('\n') + '\n\n' + orig;
        }
      }
    } catch (e) {}
  }
  function enhanceForm() {
    var container = $('.form-container.contact-form');
    var formEl = $('#contact-form');
    if (!container || !formEl) return;
    if (formEl.getAttribute('data-kk-built') === '1') return;
    var nameInp = formEl.querySelector('input[name="name"]');
    var emailInp = formEl.querySelector('input[name="email"]');
    var phoneInp = formEl.querySelector('input[name="phone"]');
    var msgInp = formEl.querySelector('textarea[name="message"]');
    var nameField = nameInp ? nameInp.closest('.field') : null;
    var emailField = emailInp ? emailInp.closest('.field') : null;
    var phoneField = phoneInp ? phoneInp.closest('.field') : null;
    var msgField = msgInp ? msgInp.closest('.field') : null;
    if (!nameField || !emailField || !phoneField || !msgField) return;
    /* form-head */
    if (!container.querySelector('.md-kk-form-head')) {
      var head = document.createElement('div'); head.className = 'md-kk-form-head'; head.setAttribute('data-kk', 'form-head');
      head.innerHTML = "<span class='md-kk-fh-icn'>" + SVG.crown + "</span><div><h2>Kurumsal Hesap Bilgileri</h2><p>Firma ve yetkili bilgilerinizi doldurun</p></div>";
      formEl.insertBefore(head, formEl.firstChild);
    }
    /* relabel + placeholder */
    var setLab = function (f, t) { var l = f.querySelector('label'); if (l) l.textContent = t; };
    var setPh = function (i, p) { if (i) i.setAttribute('placeholder', p); };
    setLab(nameField, 'Yetkili Adı Soyadı'); setPh(nameInp, 'Ad ve soyadınızı yazın');
    setLab(emailField, 'E-Posta Adresi'); setPh(emailInp, 'ornek@firma.com');
    setLab(phoneField, 'Telefon Numarası'); setPh(phoneInp, '+90 5XX XXX XX XX');
    setLab(msgField, 'Talebiniz'); setPh(msgInp, 'Kurumsal üyelik talebinizi, beklentilerinizi veya sorularınızı yazın...');
    /* inject: Firma + Çalışan Sayısı */
    var firmaField = makeField({ name: 'firma', label: 'Firma Adı', placeholder: 'Firma adınızı girin', full: true });
    var calisanField = makeField({ name: 'calisan', label: 'Çalışan Sayısı', type: 'select', full: true, options: [
      { v: '', t: 'Seçiniz' }, { v: '1-50', t: '1 - 50' }, { v: '51-200', t: '51 - 200' },
      { v: '201-500', t: '201 - 500' }, { v: '501-1000', t: '501 - 1.000' }, { v: '1000+', t: '1.000+' }
    ] });
    /* sıralama: name(full) → firma(full) → [email+phone row] → calisan(full) → message(full) */
    if (!nameField.parentNode.classList.contains('md-kk-after-name')) {
      nameField.parentNode.insertBefore(firmaField, nameField.nextSibling);
    }
    if (!formEl.querySelector('.md-kk-row')) {
      var row = document.createElement('div'); row.className = 'md-kk-row'; row.setAttribute('data-kk', 'row-ep');
      emailField.parentNode.insertBefore(row, emailField);
      row.appendChild(emailField); row.appendChild(phoneField);
    }
    if (!formEl.querySelector('[data-kk="field-calisan"]') && msgField.parentNode) {
      msgField.parentNode.insertBefore(calisanField, msgField);
    }
    /* KVKK onayı (message'tan sonra, submit'ten önce) */
    if (!formEl.querySelector('.md-kk-consent')) {
      var consent = document.createElement('div'); consent.className = 'md-kk-consent'; consent.setAttribute('data-kk', 'consent');
      consent.innerHTML = "<input type='checkbox' id='kk-kvkk'><label for='kk-kvkk'><a href='/s/yasal' target='_blank'>Kullanım Koşulları, Gizlilik Politikası</a> ve <a href='/s/yasal' target='_blank'>KVKK Aydınlatma Metni</a>'ni okudum, kişisel verilerimin işlenmesini kabul ediyorum.</label>";
      var errP = document.createElement('p'); errP.className = 'md-kk-consent-err'; errP.textContent = 'Devam etmek için KVKK ve kullanım koşullarını onaylayın.';
      var submitField = (formEl.querySelector('button[type="submit"], input[type="submit"]') || {}).closest ? formEl.querySelector('button[type="submit"], input[type="submit"]').closest('.field') : null;
      if (submitField && submitField.parentNode) { submitField.parentNode.insertBefore(consent, submitField); submitField.parentNode.insertBefore(errP, submitField); }
      else { msgField.parentNode.appendChild(consent); msgField.parentNode.appendChild(errP); }
    }
    /* submit metni + ikon */
    var btn = formEl.querySelector('button[type="submit"], input[type="submit"]');
    if (btn) { if (btn.tagName === 'INPUT') btn.value = 'TALEBİMİ GÖNDER'; else btn.innerHTML = SVG.send + ' TALEBİMİ GÖNDER'; }
    /* consent gate + message fold — hem click (recaptcha yolu) hem submit (Enter) */
    function gate(e) {
      var kvkk = formEl.querySelector('#kk-kvkk');
      var err = formEl.querySelector('.md-kk-consent-err');
      if (kvkk && !kvkk.checked) {
        if (err) err.classList.add('is-show');
        if (e) { e.preventDefault(); e.stopImmediatePropagation && e.stopImmediatePropagation(); }
        return false;
      }
      if (err) err.classList.remove('is-show');
      foldMessage(formEl, msgInp);
      return true;
    }
    if (btn) btn.addEventListener('click', gate, true);
    formEl.addEventListener('submit', function (e) { if (!gate(e)) return; }, true);
    formEl.setAttribute('data-kk-built', '1');
  }
  function enhance() { buildGrid(); enhanceForm(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enhance);
  else enhance();
  window.addEventListener('load', function () { setTimeout(enhance, 300); });
  var mo = new MutationObserver(function () { enhance(); });
  if (document.body) { mo.observe(document.body, { childList: true, subtree: true }); setTimeout(function () { mo.disconnect(); }, 6000); }
})();
/* ============================================================
   SECTION: PROFİL / PANELİM — /profile (body.kb-page-profile)
   moddo5 panelim.html hero'sunu (.kb-prof-head) native .page.users içine,
.user-header (sekme çubuğu) ÜSTÜNE inject eder. Native AJAX sekme/inline-edit
JS'ine DOKUNMAZ — sadece hero ekler + sticky sekme top'unu site header'ına göre
   ayarlar. Restyle CSS: css/_profile.css. Idempotent: data-kb-prof marker.
   ============================================================ */
(function () {
  function isProfile() {
    // body class (geç eklenebilir) VEYA pathname fallback — parse anına bağlı kalma
    if (document.body && document.body.classList.contains('kb-page-profile')) return true;
    return /\/(profil|profile)\/?$/.test(location.pathname.replace(/\/$/, '') + '/');
  }
  function localePrefix() { var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//); return m ? '/' + m[1] : ''; }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function initials(n) {
    var p = String(n || '').trim().split(/\s+/).filter(Boolean);
    if (!p.length) return 'Ü';
    return ((p[0].charAt(0)) + (p.length > 1 ? p[p.length - 1].charAt(0) : '')).toLocaleUpperCase('tr-TR');
  }
  function userName() {
    var inp = document.querySelector('.page.users input[name="name"]');
    if (inp && inp.value && inp.value.trim()) return inp.value.trim();
    // "Adınız / Rumuzunuz" alanının .field-value'su
var fields = document.querySelectorAll('.page.users .profile-field');
for (var i = 0; i < fields.length; i++) {
var st = fields[i].querySelector('strong');
if (st && /ad|rumuz|isim|name/i.test(st.textContent || '')) {
var v = fields[i].querySelector('.field-value');
if (v && (v.textContent || '').trim()) return v.textContent.trim();
}
}
return 'Üyemiz';
}
function userPhoto() {
var img = document.querySelector('.page.users img.imageInput');
if (img && img.src && !/user-circle|placeholder|default|no-?image/i.test(img.src)) return img.src;
return '';
}
function svg(inner) { return "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='width:15px;height:15px'>" + inner + "</svg>"; }
var I_MSG = "<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/>";
var I_OUT = "<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'/><path d='m16 17 5-5-5-5'/><path d='M21 12H9'/>";
function buildHero() {
var page = document.querySelector('.page.users');
if (!page) return;
if (page.querySelector('[data-kb-prof="head"]')) return;
var name = userName();
var photo = userPhoto();
var head = document.createElement('section');
head.className = 'kb-prof-head';
head.setAttribute('data-kb-prof', 'head');
head.innerHTML =
'<div class="kb-ph-inner">' +
'<div class="kb-ph-who">' +
'<div class="kb-ph-av">' + (photo ? '<img src="' + esc(photo) + '" alt="">' : esc(initials(name))) + '</div>' +
'<div><h1>Hoş geldin, ' + esc(name) + '!</h1><p class="kb-ph-sub">Profilini yönet, randevularını ve etkinliklerini takip et.</p></div>' +
'</div>' +
'<div class="kb-ph-acts">' +
'<a class="kb-ph-msg" href="' + localePrefix() + '/mesajlar">' + svg(I_MSG) + 'Mesajlarım</a>' +
'<a class="kb-ph-logout" href="' + localePrefix() + '/cikis">' + svg(I_OUT) + 'Çıkış Yap</a>' +
'</div>' +
'</div>';
page.insertBefore(head, page.firstChild);
}
function adjustStickyTop() {
var uh = document.querySelector('.page.users .user-header');
if (!uh) return;
var hdr = document.querySelector('header.md-header, .md-header, body > header, header');
var top = 0;
if (hdr) {
var pos = getComputedStyle(hdr).position;
if (pos === 'fixed' || pos === 'sticky') top = Math.round(hdr.getBoundingClientRect().height);
}
uh.style.top = top + 'px';
}
var _enhancing = false;
function enhanceContent() {
if (_enhancing) return;
var cont = document.querySelector('.page.users .container');
if (!cont) return;
_enhancing = true;
try {
var panel = cont.querySelector('.tab-content.f') || cont.querySelector('.pv > .tab-content');
if (panel) {
if (panel.id !== 'user-profile-tab' && !panel.querySelector('.kb-prof-section-title')) {
var act = document.querySelector('.user-tabs a.active');
var label = act ? (act.textContent || '').trim() : '';
if (label) {
var h = document.createElement('h2');
h.className = 'kb-prof-section-title';
h.textContent = label;
panel.insertBefore(h, panel.firstChild);
}
}
[].forEach.call(panel.querySelectorAll('table'), function (tb) {
if (tb.getAttribute('data-kb-empty') === '1') return;
if (tb.querySelectorAll('tbody tr').length === 0) {
tb.setAttribute('data-kb-empty', '1');
tb.style.display = 'none';
if (!(tb.nextSibling && tb.nextSibling.className === 'kb-prof-empty')) {
var note = document.createElement('div');
note.className = 'kb-prof-empty';
note.textContent = 'Henüz kaydınız bulunmuyor.';
tb.parentNode.insertBefore(note, tb.nextSibling);
}
}
});
}
} catch (e) {}
_enhancing = false;
}
var _observed = false, _tabsHooked = false;
function setupObserver() {
var cont = document.querySelector('.page.users .container');
if (cont && !_observed && window.MutationObserver) {
_observed = true;
var t = null;
new MutationObserver(function () { clearTimeout(t); t = setTimeout(enhanceContent, 120); })
.observe(cont, { childList: true, subtree: true });
}
var tabs = document.querySelector('.user-tabs');
if (tabs && !_tabsHooked) {
_tabsHooked = true;
tabs.addEventListener('click', function (e) {
if (e.target && e.target.closest('a')) { setTimeout(enhanceContent, 400); setTimeout(enhanceContent, 1200); }
});
}
}
function run() {
if (!isProfile() || !document.querySelector('.page.users')) return;
buildHero();
adjustStickyTop();
enhanceContent();
setupObserver();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
else run();
window.addEventListener('load', function () { setTimeout(run, 300); });
window.addEventListener('resize', function () { adjustStickyTop(); });
var tries = 0;
var iv = setInterval(function () { run(); if (++tries > 12 || document.querySelector('[data-kb-prof="head"]')) clearInterval(iv); }, 400);
})();
(function () {
function svg(inner, stroke, w) {
return "<svg viewBox='0 0 24 24' width='" + (w || 16) + "' height='" + (w || 16) + "' fill='none' stroke='" + (stroke || 'currentColor') +
"' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>" + inner + "</svg>";
}
var I_CLOCK = "<circle cx='12' cy='12' r='10'/><path d='M12 6v6l4 2'/>";
var I_CHECK = "<circle cx='12' cy='12' r='10'/><path d='m9 12 2 2 4-4'/>";
var I_SHIELD = "<path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'/>";
var I_VIDEO = "<path d='m16 13 5.223 3.482a.5.5 0 0 0 .777-.415V7.93a.5.5 0 0 0-.752-.432L16 10.5'/><rect x='2' y='6' width='14' height='12' rx='2'/>";
var I_MSG = "<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/>";
var I_PLAY = "<polygon points='6 3 20 12 6 21 6 3'/>";
var I_CAL = "<rect x='3' y='4' width='18' height='18' rx='2'/><path d='M16 2v4'/><path d='M8 2v4'/><path d='M3 10h18'/>";
var I_CHEV = "<path d='m9 18 6-6-6-6'/>";
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function locale() { var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//); return m ? '/' + m[1] : ''; }
function computeAndShow(reviewEls) {
var el = document.querySelector('.kb-ud-hero .kb-ud-rating');
if (!el || el.getAttribute('data-kb-done') === '1') return;
var total = reviewEls.length;
if (!total) return;
var sum = 0, rated = 0;
reviewEls.forEach(function (rv) {
var rr = rv.querySelector('.review-rating, .profile-review-stars');
var s = rr ? rr.querySelectorAll('.i-star').length : 0;
if (s > 0) { sum += s; rated++; }
});
var countHtml = "<span class='kb-ud-rating-count'>" + total + " değerlendirme</span>";
if (rated > 0) {
var avg = (sum / rated).toFixed(1).replace('.', ',');
el.innerHTML = "<span class='kb-ud-star'>★</span>" + avg + "<span class='kb-ud-rating-sep'>·</span>" + countHtml;
} else { el.innerHTML = countHtml; }
el.classList.remove('kb-ud-hidden');
el.setAttribute('data-kb-done', '1');
}
function fillRating() {
var el = document.querySelector('.kb-ud-hero .kb-ud-rating');
if (!el || el.getAttribute('data-kb-done') === '1') return;
var moreBtn = document.querySelector('#show-more-review');
var id = moreBtn && moreBtn.getAttribute('data-id');
if (id) {
if (el.getAttribute('data-kb-fetch') === '1') return;
el.setAttribute('data-kb-fetch', '1');
fetch('/uzmanlar/reviews/' + id, { headers: { 'X-Requested-With': 'XMLHttpRequest' }, credentials: 'same-origin' })
.then(function (r) { if (!r.ok) throw 0; return r.text(); })
.then(function (html) { var doc = new DOMParser().parseFromString(html, 'text/html'); computeAndShow([].slice.call(doc.querySelectorAll('.review'))); })
.catch(function () { el.removeAttribute('data-kb-fetch'); computeAndShow([].slice.call(document.querySelectorAll('.review'))); });
} else { computeAndShow([].slice.call(document.querySelectorAll('.review'))); }
}
function stripTitleParens() {
var pt = document.querySelector('.profile-title');
if (!pt || pt.getAttribute('data-kb-paren') === '1') return;
var changed = false;
[].forEach.call(pt.childNodes, function (nd) { if (nd.nodeType === 3 && /[()]/.test(nd.textContent)) { nd.textContent = nd.textContent.replace(/[()]/g, ''); changed = true; } });
if (changed) pt.setAttribute('data-kb-paren', '1');
}
function rowFromItem(item) {
var title = ((item.querySelector('.package-title') || {}).textContent || '').trim();
var desc = ((item.querySelector('.package-description') || {}).textContent || '').trim();
var paidEl = item.querySelector('.package-meta-value:not(.package-credits)');
var priceTxt = paidEl ? paidEl.textContent.trim() : '';
var fm = priceTxt.match(/^([\d.,]+)\s*(\S+)?$/);
var price = fm ? ((fm[2] || '₺') + fm[1]) : (priceTxt || 'Ücretsiz'); 
var durTxt = ((item.querySelector('.package-meta-duration') || {}).textContent || '').replace(/^\s*Süre\s*/i, '').trim();
var sessTxt = ((item.querySelector('.package-meta-sessions') || {}).textContent || '').trim();
var meta = sessTxt ? (sessTxt + (durTxt ? ' · ' + durTxt : '')) : durTxt;
var a = item.querySelector('.package-button a, a.btn-appointment, a.btn-appointment-package');
var href = a ? a.getAttribute('href') : '#';
var pkg = (href.match(/package=(\d+)/) || [])[1] || (a && a.id ? (a.id.match(/package-(\d+)/) || [])[1] : '') || '';
return '<div class="cd-stype" data-kb-href="' + esc(href) + '" data-kb-pkg="' + esc(pkg) + '">' +
'<div class="row"><div class="left"><span class="radio"></span><div>' +
'<p class="nm">' + esc(title || 'Seans') + '</p>' + (desc ? '<p class="ds">' + esc(desc) + '</p>' : '') + '</div></div>' +
'<div class="cd-stype-r"><span class="price">' + esc(price) + '</span>' +
(meta ? '<p class="dur">' + svg(I_CLOCK, 'currentColor', 12) + esc(meta) + '</p>' : '') + '</div></div></div>';
}
function buildBooking(aside) {
if (aside.querySelector('.kb-ud-booking')) return;
var ap = document.querySelector('.appointment-packages') || document.querySelector('#apdiv');
if (!ap) return;
var items = [].slice.call(ap.querySelectorAll('.package-item'));
if (!items.length) return;
var pakets = items.filter(function (it) { return !!it.querySelector('.package-meta-sessions'); });
var seanslar = items.filter(function (it) { return !it.querySelector('.package-meta-sessions'); });
var hasS = seanslar.length > 0, hasP = pakets.length > 0;
var card = document.createElement('div');
card.className = 'cd-sidecard kb-ud-booking';
var tabs =
'<div class="cd-tabbar">' +
(hasS ? '<button type="button" class="cd-tab' + ' active" data-kb-tab="seans">' + svg(I_VIDEO, 'currentColor', 14) + 'SEANS TÜRLERİ</button>' : '') +
(hasP ? '<button type="button" class="cd-tab' + (hasS ? '' : ' active') + '" data-kb-tab="paket">' + svg("<path d='M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z'/><path d='M3 6h18'/><path d='M16 10a4 4 0 0 1-8 0'/>", 'currentColor', 14) + 'PAKET</button>' : '') +
'</div>';
var seansPanel = '<div class="cd-panel" data-kb-panel="seans"' + (hasS ? '' : ' style="display:none"') + '>' + seanslar.map(rowFromItem).join('') + '</div>';
var paketPanel = '<div class="cd-panel" data-kb-panel="paket"' + (hasS ? ' style="display:none"' : '') + '>' + pakets.map(rowFromItem).join('') + '</div>';
var cta = '<a href="#" class="kb-ud-cta">' + svg(I_CAL, 'currentColor', 16) + 'RANDEVU OLUŞTUR ' + svg(I_CHEV, 'currentColor', 16) + '</a>';
card.innerHTML = (hasS && hasP ? tabs : '') + seansPanel + paketPanel + cta;
var ctaEl = card.querySelector('.kb-ud-cta');
function selectRow(row) {
var panel = row.parentNode;
[].slice.call(panel.querySelectorAll('.cd-stype')).forEach(function (r) { r.classList.remove('sel'); });
row.classList.add('sel');
var href = row.getAttribute('data-kb-href') || '#';
ctaEl.setAttribute('href', href);
ctaEl.setAttribute('data-kb-pkg', row.getAttribute('data-kb-pkg') || '');
}
[].slice.call(card.querySelectorAll('.cd-stype')).forEach(function (row) {
row.addEventListener('click', function () { selectRow(row); });
});
ctaEl.addEventListener('click', function (e) {
var pkg = ctaEl.getAttribute('data-kb-pkg') || '';
var nat = pkg ? document.getElementById('package-' + pkg) : null;
if (!nat && pkg) {
var all = [].slice.call(document.querySelectorAll('a.get-appointment-v2'));
for (var i = 0; i < all.length; i++) {
if ((all[i].getAttribute('href') || '').indexOf('package=' + pkg) >= 0) { nat = all[i]; break; }
}
}
if (!nat) nat = document.querySelector('a.get-appointment-v2');
if (nat) { e.preventDefault(); nat.click(); }
});
function setTab(k) {
[].slice.call(card.querySelectorAll('.cd-tab')).forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-kb-tab') === k); });
card.querySelectorAll('.cd-panel').forEach(function (p) { p.style.display = (p.getAttribute('data-kb-panel') === k) ? '' : 'none'; });
var first = card.querySelector('.cd-panel[data-kb-panel="' + k + '"] .cd-stype');
if (first) selectRow(first);
}
[].slice.call(card.querySelectorAll('.cd-tab')).forEach(function (b) { b.addEventListener('click', function () { setTab(b.getAttribute('data-kb-tab')); }); });
var firstRow = card.querySelector('.cd-stype'); if (firstRow) selectRow(firstRow);
aside.appendChild(card);
ap.style.display = 'none';   
}
function buildActions(aside) {
if (aside.querySelector('.kb-ud-actcard')) return;
var card = document.createElement('div');
card.className = 'cd-sidecard cd-actcard kb-ud-actcard';
card.innerHTML =
'<a href="#" class="kb-ud-act btn-msg">' + svg(I_MSG, 'currentColor', 16) + 'Mesaj Gönder</a>' +
'<a href="' + locale() + '/etkinlikler" class="kb-ud-act btn-sess">' + svg(I_PLAY, 'currentColor', 16) + 'Canlı Oturumlarına Göz At</a>';
var msg = card.querySelector('.btn-msg');
msg.addEventListener('click', function (e) {
e.preventDefault();
var ac = document.querySelector('#acdiv, .profile-interact-btn a');
if (ac) ac.click();
});
aside.appendChild(card);
}
function buildTrust(aside) {
if (aside.querySelector('.kb-ud-trust')) return;
var rows = [
[I_SHIELD, 'Güvenli Görüşme', 'Şifreli video bağlantısı ile güvenli oturum'],
[I_CHECK, 'Memnuniyet Garantisi', 'İlk seans memnun kalmazsanız iade'],
[I_VIDEO, 'Kayıt İmkanı', 'Oturumunuzu kaydedin, tekrar izleyin']
];
var tc = document.createElement('div'); tc.className = 'cd-sidecard cd-trust kb-ud-trust';
tc.innerHTML = rows.map(function (r) {
return "<div class='t'>" + svg(r[0], '#34d399', 20) + "<div><p class='h'>" + r[1] + "</p><p class='d'>" + r[2] + "</p></div></div>";
}).join('');
aside.appendChild(tc);
}
function build() {
var b = document.body;
if (!b || !b.classList.contains('kb-page-uzman-detay')) return true;
var main = document.querySelector('.profile-right .page-content');
var aside = document.querySelector('.profile-left');
if (!main || !aside) return false;
var leftHdr = document.querySelector('.profile-left .agent-header') || aside;
var img = leftHdr.querySelector('.profile-image');
var title = leftHdr.querySelector('.profile-title');
var cats = aside.querySelector('.profile-categories');
if (!main.querySelector('.kb-ud-hero') && (img || title)) {
var hero = document.createElement('div'); hero.className = 'kb-ud-hero';
var txt = document.createElement('div'); txt.className = 'kb-ud-hero-txt';
if (cats) txt.appendChild(cats);
if (title) txt.appendChild(title);
var metaRow = document.createElement('div'); metaRow.className = 'kb-ud-hero-meta';
metaRow.innerHTML = "<span class='kb-ud-rating kb-ud-hidden'></span><span class='kb-ud-verified'>" + svg(I_CHECK, '#34d399', 15) + "Onaylı Uzman</span>";
txt.appendChild(metaRow);
if (img) hero.appendChild(img);
hero.appendChild(txt);
main.insertBefore(hero, main.firstChild);
}
stripTitleParens();
fillRating();
var pl = document.querySelector('.profile-list');
if (pl) {
var p = pl.querySelector('p');
if (p && !pl.querySelector('.kb-ud-kw') && p.textContent.indexOf(',') >= 0) {
var kws = p.textContent.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
if (kws.length > 1) p.innerHTML = kws.map(function (k) { return '<span class="kb-ud-kw">' + esc(k) + '</span>'; }).join('');
}
}
buildBooking(aside);
buildActions(aside);
buildTrust(aside);
[].slice.call(document.querySelectorAll('.review')).forEach(function (r) {
if (r.getAttribute('data-kb-rev') === '1') return;
r.setAttribute('data-kb-rev', '1');
var head = r.querySelector('.review-head'); var date = r.querySelector('.review-date');
if (head && date) head.insertBefore(date, head.firstChild);
});
return true;
}
function pump() { try { build(); } catch (e) {} }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pump);
else pump();
window.addEventListener('load', pump);
[300, 800, 1500, 2500, 4000].forEach(function (ms) { setTimeout(pump, ms); });
})();
(function () {
var ROOT_SCOPE = 'kb-page-uzmanlar';
var BUILT = 'data-kb-uzmanlar-built';
function isOnUzmanlar() {
return document.body && document.body.classList.contains(ROOT_SCOPE);
}
var TITLE = 'Danışmanlar';
var INTRO = 'Alanında uzman bireysel danışmanlar ve kurumsal firma danışmanları ile birebir görüşme yapın, kişiselleştirilmiş rehberlik alın.';
var MODES = [
{ key: 'all',       label: 'Tümü',                                    re: null },
{ key: 'uretken',   label: 'Üretken Modu',                            re: /[üu]retken/i },
{ key: 'teknoloji', label: 'Teknolojiye Meraklı Modu',                re: /teknoloji/i },
{ key: 'keyif',     label: 'Keyif Modu',                              re: /keyif/i },
{ key: 'saglik',    label: 'Sağlıklıyım Modu',                        re: /sa[ğg]l[ıi]k/i },
{ key: 'longevity', label: 'Longevity (En İyi Versiyonumdayım) Modu', re: /longevity/i },
{ key: 'aile',      label: 'Aile Modu',                               re: /aile/i }
];
function modeByKey(k) { for (var i = 0; i < MODES.length; i++) if (MODES[i].key === k) return MODES[i]; return MODES[0]; }
var SEARCH_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';
function buildFilterHTML() {
var pills = MODES.map(function (m, i) {
return '<button type="button" class="kb-u-pill' + (i === 0 ? ' active' : '') + '" data-mode="' + m.key + '">' + m.label + '</button>';
}).join('');
return [
'<div class="kb-u-filters">',
'  <div class="kb-u-search-wrap">' + SEARCH_SVG,
'    <input type="text" class="kb-u-search" placeholder="Danışman veya uzmanlık alanı ara…" aria-label="Danışman veya uzmanlık alanı ara">',
'  </div>',
'  <div class="kb-u-pills">' + pills + '</div>',
'</div>'
].join('');
}
function setTitle(pageRoot) {
var h1 = pageRoot.querySelector('.page-header .page-title h1') || pageRoot.querySelector('.page-header h1');
if (h1 && h1.textContent.trim() !== TITLE) h1.textContent = TITLE;
}
function injectIntro(header) {
var container = header.querySelector('.container') || header;
var p = header.querySelector('.kb-u-intro');
if (!p) {
p = document.createElement('p');
p.className = 'kb-u-intro';
container.appendChild(p);
}
if (p.textContent !== INTRO) p.textContent = INTRO;
}
function injectFilters(pageRoot) {
if (pageRoot.querySelector('.kb-u-filters')) return pageRoot.querySelector('.kb-u-filters');
var header = pageRoot.querySelector('.page-header');
var wrap = document.createElement('div');
wrap.innerHTML = buildFilterHTML();
var node = wrap.firstElementChild;
if (header && header.parentNode) header.parentNode.insertBefore(node, header.nextSibling);
else pageRoot.insertBefore(node, pageRoot.firstChild);
return node;
}
function cardHaystack(item) {
var t = '';
var el = item.querySelector('.item-title'); if (el) t += ' ' + el.textContent;
el = item.querySelector('.kb-mode-tag'); if (el) t += ' ' + el.textContent;
var cats = item.querySelectorAll('.profile-categories .pcategory-btn');
for (var i = 0; i < cats.length; i++) t += ' ' + cats[i].textContent;
return t.toLocaleLowerCase('tr');
}
function cardModeText(item) {
var t = '';
var el = item.querySelector('.kb-mode-tag'); if (el) t += ' ' + el.textContent;
var cats = item.querySelectorAll('.profile-categories .pcategory-btn');
for (var i = 0; i < cats.length; i++) t += ' ' + cats[i].textContent;
return t;
}
function applyFilter(grid, query, modeRe) {
var q = (query || '').trim().toLocaleLowerCase('tr');
var items = grid.querySelectorAll('.item');
var visible = 0;
items.forEach(function (item) {
var okQ = !q || cardHaystack(item).indexOf(q) >= 0;
var okMode = !modeRe || modeRe.test(cardModeText(item));
if (okQ && okMode) { item.style.display = ''; visible++; }
else { item.style.display = 'none'; }
});
var empty = grid.querySelector('.kb-u-empty');
if (visible === 0) {
if (!empty) {
empty = document.createElement('div');
empty.className = 'kb-u-empty';
empty.textContent = 'Aramana uygun danışman bulunamadı. Aramanı temizle veya farklı bir mod seç.';
grid.appendChild(empty);
}
empty.style.display = '';
} else if (empty) {
empty.style.display = 'none';
}
}
function bindFilters(filterNode, grid) {
if (filterNode.getAttribute(BUILT) === '1') return;
var search = filterNode.querySelector('.kb-u-search');
var pills = filterNode.querySelectorAll('.kb-u-pill');
var state = { q: '', modeRe: null };
if (search) {
search.addEventListener('input', function (e) {
state.q = e.target.value || '';
applyFilter(grid, state.q, state.modeRe);
});
}
pills.forEach(function (pill) {
pill.addEventListener('click', function () {
pills.forEach(function (p) { p.classList.remove('active'); });
pill.classList.add('active');
state.modeRe = modeByKey(pill.getAttribute('data-mode')).re;
applyFilter(grid, state.q, state.modeRe);
});
});
filterNode.setAttribute(BUILT, '1');
}
function run() {
if (!isOnUzmanlar()) return;
var pageRoot = document.querySelector('.page.agents');
if (!pageRoot) return;
setTitle(pageRoot);
var header = pageRoot.querySelector('.page-header');
if (header) injectIntro(header);
var grid = pageRoot.querySelector('.list.flex:not(.order-flex-list)');
if (!grid) return;
if (!grid.querySelectorAll('.item').length) return;
var filterNode = pageRoot.querySelector('.kb-u-filters') || injectFilters(pageRoot);
if (filterNode) bindFilters(filterNode, grid);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
else run();
window.addEventListener('load', function () { setTimeout(run, 300); });
var startObserver = function () {
if (!document.body) { setTimeout(startObserver, 50); return; }
if (!isOnUzmanlar()) return;
var mo = new MutationObserver(function () { run(); });
mo.observe(document.body, { childList: true, subtree: true });
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startObserver, { once: true });
else startObserver();
})();
