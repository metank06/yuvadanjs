
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
arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'
};
function isLoggedIn() {
return !!(document.body && document.body.classList.contains('loggedIn'));
}
function loginLink(opts) {
var li = isLoggedIn();
var href = url(li ? '/dashboard' : '/login');
var label = li ? 'Panelim' : 'GiriÅŸ Yap';
var icon = li ? ICONS.user : ICONS.login;
if (opts && opts.block) {
return '<a href="' + href + '" class="md-drawer-btn md-drawer-btn-ghost" data-kb-login="1">' + icon + ' ' + label + '</a>';
}
return '<a href="' + href + '" data-kb-login="1">' + icon + ' <span>' + label + '</span></a>';
}
function renderHeader() {
var home = '/';
var kategoriler = '/kategori';
var etkinlikler = '/etkinlikler';
var signup = '/signup';
return [
'<header class="md-header">',
'<div class="md-header-tier1">',
'<div class="md-container">',
'<div class="md-header-tier1-inner">',
'<a href="' + url(home) + '">ModdoDay</a>',
'<a href="' + url(etkinlikler) + '">CanlÄ± Oturumlar</a>',
'<a href="' + url(kategoriler) + '">DanÄ±ÅŸmanlar</a>',
'<a href="' + url('/s/sponsorluk') + '">Sponsorluk</a>',
'<a href="' + url('/s/kampanyalar') + '">Kampanyalar</a>',
'<a href="' + url('/s/ayricaliklar') + '">AyrÄ±calÄ±klar</a>',
'<a href="' + url('/s/iletisim') + '">Ä°letiÅŸim</a>',
'</div>',
'</div>',
'</div>',
'<div class="md-header-main">',
'<div class="md-container">',
'<div class="md-header-main-inner">',
'<a href="' + url(home) + '" class="md-logo" style="margin-right: 8px;">Moddo<span>Day</span></a>',
'<div class="md-nav-item" data-menu="modes">',
'<button class="md-nav-btn" type="button">KeÅŸfet ' + ICONS.chevron + '</button>',
'<div class="md-dropdown md-dropdown-mega">',
'<p class="md-dd-label">YaÅŸam ModlarÄ±</p>',
'<div class="md-dd-grid">',
'<a href="' + url('/kategori/uretken-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(245,158,11,.15); color:#F59E0B;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg></span>',
'<div><strong>Ãœretken Modu</strong><small>Ellerini kullan, ruhunu besle</small></div>',
'</a>',
'<a href="' + url('/kategori/teknolojiye-merakli-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(59,130,246,.15); color:#3B82F6;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></span>',
'<div><strong>Teknolojiye MeraklÄ± Modu</strong><small>GeleceÄŸi bugÃ¼nden yakala</small></div>',
'</a>',
'<a href="' + url('/kategori/keyif-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(244,63,94,.15); color:#F43F5E;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></span>',
'<div><strong>Keyif Modu</strong><small>Keyif anlarÄ±nÄ± sevdiklerinle deneyimle</small></div>',
'</a>',
'<a href="' + url('/kategori/saglikliyim-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(16,185,129,.15); color:#10B981;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/></svg></span>',
'<div><strong>SaÄŸlÄ±klÄ±yÄ±m Modu</strong><small>Bedenine ve zihnine iyi bak</small></div>',
'</a>',
'<a href="' + url('/kategori/longevity-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(34,197,94,.15); color:#22C55E;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg></span>',
'<div><strong>Longevity Modu</strong><small>En iyi versiyonuna ulaÅŸ</small></div>',
'</a>',
'<a href="' + url('/kategori/aile-modu') + '" class="md-dd-mode">',
'<span class="md-dd-icn" style="background:rgba(139,92,246,.15); color:#8B5CF6;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>',
'<div><strong>Aile Modu</strong><small>Ã‡ocuklar, ebeveynlik ve aile ekonomisi</small></div>',
'</a>',
'</div>',
'</div>',
'</div>',
'<div class="md-nav-item" data-menu="brands">',
'<button class="md-nav-btn" type="button">' + ICONS.award + ' Marka ElÃ§ileri ' + ICONS.chevron + '</button>',
'<div class="md-dropdown md-dropdown-brands">',
'<p class="md-dd-brand-desc">Marka elÃ§isi firmalar, ModdoDay\'in 6 yaÅŸam modunda Ã¶zel iÃ§erikler ve Ã¶dÃ¼llÃ¼ etkinliklerle hedef kitlesine doÄŸrudan ulaÅŸÄ±r. KatÄ±lÄ±mcÄ±lar indirimler ve Ã¶zel ayrÄ±calÄ±klar kazanÄ±r.</p>',
'<a href="' + url('/s/ayricaliklar') + '" class="md-dd-brand-cta">Marka ElÃ§ilerini GÃ¶rÃ¼ntÃ¼le ' + ICONS.arrow + '</a>',
'<a href="' + url('/s/sponsorluk') + '" class="md-dd-brand-foot">Marka ElÃ§isi Olmak Ä°Ã§in &rarr;</a>',
'</div>',
'</div>',
'<form class="md-search" role="search" data-kb-search="1">',
'<input class="md-search-input" type="text" autocomplete="off" spellcheck="false" placeholder="Hangi konuda uzmanÄ±na baÄŸlanmak istiyorsun?" aria-label="Ara">',
'</form>',
'<div class="md-header-actions">',
'<a href="' + url('/s/ayricaliklar') + '">' + ICONS.gift + ' <span>AyrÄ±calÄ±klar</span></a>',
'          ' + loginLink() + '',
'<a href="' + url('/s/danisman-ol') + '" class="md-cta-outline">' + ICONS.briefcase + ' DanÄ±ÅŸmanÄ±mÄ±z Ol</a>',
'<a href="' + url(signup) + '" class="md-cta-solid">ModdoDay\'e KatÄ±l</a>',
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
['uretken-modu', 'Ãœretken Modu', '245,158,11', '#F59E0B', '<path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/>'],
['teknolojiye-merakli-modu', 'Teknolojiye MeraklÄ± Modu', '59,130,246', '#3B82F6', '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>'],
['keyif-modu', 'Keyif Modu', '244,63,94', '#F43F5E', '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>'],
['saglikliyim-modu', 'SaÄŸlÄ±klÄ±yÄ±m Modu', '16,185,129', '#10B981', '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>'],
['longevity-modu', 'Longevity (En Ä°yi VersiyonumdayÄ±m) Modu', '34,197,94', '#22C55E', '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>'],
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
'<div class="md-drawer-search">' + ICONS.search + '<input class="md-search-input" type="text" autocomplete="off" spellcheck="false" placeholder="Hangi konuda uzmanÄ±na baÄŸlanmak istiyorsun?" aria-label="Ara"></div>',
'<nav class="md-drawer-nav">',
'<a href="' + url('/') + '">Ana Sayfa</a>',
'<a href="' + url('/etkinlikler') + '">CanlÄ± Oturumlar</a>',
'<a href="' + url('/kategori') + '">DanÄ±ÅŸmanlar</a>',
'<a href="' + url('/s/sponsorluk') + '">Sponsorluk</a>',
'</nav>',
'<div class="md-drawer-brands">',
'<div class="md-drawer-label md-drawer-label-accent">' + ICONS.award + ' MARKA ELÃ‡Ä°LERÄ°</div>',
'<p>Marka elÃ§isi firmalar, ModdoDay\'in 6 yaÅŸam modunda Ã¶zel iÃ§erikler ve Ã¶dÃ¼llÃ¼ etkinliklerle hedef kitlesine doÄŸrudan ulaÅŸÄ±r.</p>',
'<a href="' + url('/s/ayricaliklar') + '" class="md-drawer-brands-link">Marka ElÃ§ilerini GÃ¶rÃ¼ntÃ¼le &rarr;</a>',
'</div>',
'<div class="md-drawer-modes">',
'<div class="md-drawer-label">YAÅAM MODLARI</div>',
'    ' + modeRows,
'</div>',
'<div class="md-drawer-actions">',
'<a href="' + url('/s/danisman-ol') + '" class="md-drawer-btn md-drawer-btn-outline">' + ICONS.briefcase + ' DanÄ±ÅŸmanÄ±mÄ±z Ol</a>',
'<a href="' + url('/signup') + '" class="md-drawer-btn md-drawer-btn-solid">ModdoDay\'e KatÄ±l</a>',
'    ' + loginLink({ block: true }),
'</div>',
'</aside>'
].join('\n');
}
function renderFooter() {
var modes = [
['uretken-modu', 'Uretken Modu'],
['teknolojiye-merakli-modu', 'Teknolojiye Merakli Modu'],
['keyif-modu', 'Keyif Modu'],
['saglikliyim-modu', 'Saglikliyim Modu'],
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
'<p style="font-size: var(--fs-sm); line-height: 1.7;">Bugun Hangi Moddasin? Kurumsal Wellbeing & Concierge Servisi ile canli oturumlara katil, uzmanlardan profesyonel danismanlik al ve yasam kaliteni yukselt.</p>',
'<p style="margin-top: 16px; font-size: 12px;">Powered by <span style="color: var(--md-orange); font-weight: 500;">Gurulize</span></p>',
'</div>',
'<div>',
'<h4>Modlar</h4>',
'<ul>' + modeItems + '</ul>',
'</div>',
'<div>',
'<h4>Platform</h4>',
'<ul>',
'<li><a href="' + url('/etkinlikler') + '">Canli Oturumlar</a></li>',
'<li><a href="' + url('/kategori') + '">Danismanlar</a></li>',
'<li><a href="' + url('/s/sponsorluk') + '">Sponsorluk</a></li>',
'<li><a href="' + url('/s/ayricaliklar') + '">Ayricaliklar Kulubu</a></li>',
'<li><a href="' + url('/s/iletisim') + '">Iletisim</a></li>',
'</ul>',
'</div>',
'<div>',
'<h4>Iletisim</h4>',
'<ul>',
'<li>info@moddo.day</li>',
'<li>0850 304 75 95</li>',
'<li>Istanbul, Turkiye</li>',
'</ul>',
'<div class="md-social">',
'<a href="#" aria-label="LinkedIn"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452z"/></svg></a>',
'<a href="#" aria-label="Instagram"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>',
'<a href="#" aria-label="YouTube"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>',
'</div>',
'</div>',
'</div>',
'<div class="md-footer-bottom">',
'<p>(c) 2026 ModdoDay. Tum haklari saklidir.</p>',
'<div style="display:flex; gap: 24px;">',
'<a href="#">Gizlilik Politikasi</a>',
'<a href="#">Kullanim Kosullari</a>',
'<a href="#">KVKK</a>',
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
'Ãœretken Modu', 'Teknolojiye MeraklÄ± Modu', 'Keyif Modu',
'SaÄŸlÄ±klÄ±yÄ±m Modu', 'Longevity Modu', 'Aile Modu'
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
              if (!out.length) out.push(['SonuÃ§ bulunamadÄ±', '#', '', 'none']);
              suggest(out);
            },
            error: function () { suggest(pre.length ? pre : [['SonuÃ§ bulunamadÄ±', '#', '', 'none']]); }
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
   SECTION: LOGIN â€” /login DOM enhance (tasarÄ±m: giris.html)
   - Sol auth-side panel ("Tekrar hoÅŸ geldin!" + 4 fayda) inject
   - Form baÅŸlÄ±ÄŸÄ± ("GiriÅŸ Yap" + "HesabÄ±n yok mu? KayÄ±t ol")
   - Åifre gÃ¶ster/gizle toggle
   - Sosyal butonlarÄ± (Google + Apple + Facebook) submit altÄ±nda .md-auth-social satÄ±rÄ±na grupla + "veya" divider
   Native form fields/action/name DOKUNULMAZ. Scope: /login veya /xx-XX/login.
   ============================================================ */
(function () {
  function isLoginPage() {
    var p = location.pathname.replace(/\/$/, '');
    return /(?:^|\/)login$/.test(p);
  }
  if (!isLoginPage()) return;
  function $(s, r) { return (r || document).querySelector(s); }
  var LOGIN = "<svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4'/><polyline points='10 17 15 12 10 7'/><line x1='15' x2='3' y1='12' y2='12'/></svg>";
  var EYE = "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z'/><circle cx='12' cy='12' r='3'/></svg>";
  var EYEOFF = "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M9.88 9.88a3 3 0 1 0 4.24 4.24'/><path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'/><path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'/><line x1='2' x2='22' y1='2' y2='22'/></svg>";
  function buildAuthSide() {
    var side = document.createElement('div');
    side.className = 'md-auth-side';
    side.setAttribute('data-kb-login', 'side');
    var feat = function (svg, t, s) { return "<div class='md-auth-feature'><div class='md-auth-feat-icn'>" + svg + "</div><div><strong>" + t + "</strong><span>" + s + "</span></div></div>"; };
    var VIDEO = "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='m22 8-6 4 6 4V8Z'/><rect x='2' y='6' width='14' height='12' rx='2'/></svg>";
    var CAL = "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><rect x='3' y='4' width='18' height='18' rx='2'/><line x1='16' y1='2' x2='16' y2='6'/><line x1='8' y1='2' x2='8' y2='6'/><line x1='3' y1='10' x2='21' y2='10'/></svg>";
    var CROWN = "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.52l4.276 3.664a1 1 0 0 0 1.516-.294z'/></svg>";
    var TROPHY = "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M6 9H4.5a2.5 2.5 0 0 1 0-5H6'/><path d='M18 9h1.5a2.5 2.5 0 0 0 0-5H18'/><path d='M4 22h16'/><path d='M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22'/><path d='M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22'/><path d='M18 2H6v7a6 6 0 0 0 12 0V2Z'/></svg>";
    /* 6 mod ikon dairesi (tasarÄ±m: hammer/zap/smile/dumbbell/flame/users + mod renkleri) */
    var ic = function (p) { return "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>" + p + "</svg>"; };
    var MODS = [
      ['#F59E0B', ic("<path d='m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9'/><path d='M17.64 15 22 10.64'/><path d='m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91'/>")],
      ['#3B82F6', ic("<polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/>")],
      ['#F43F5E', ic("<circle cx='12' cy='12' r='10'/><path d='M8 14s1.5 2 4 2 4-2 4-2'/><line x1='9' x2='9.01' y1='9' y2='9'/><line x1='15' x2='15.01' y1='9' y2='9'/>")],
      ['#10B981', ic("<path d='M14.4 14.4 9.6 9.6'/><path d='M18.66 21.49a2 2 0 1 1-2.83-2.83l-1.77 1.77a2 2 0 1 1-2.83-2.83l6.37-6.36a2 2 0 1 1 2.82 2.83l-1.76 1.76a2 2 0 1 1 2.83 2.83z'/><path d='m21.5 21.5-1.4-1.4'/><path d='M3.9 3.9 2.5 2.5'/><path d='M6.4 12.77a2 2 0 1 1-2.83-2.83l1.77-1.77a2 2 0 1 1-2.83-2.83l2.83-2.83a2 2 0 1 1 2.83 2.83l1.77-1.77a2 2 0 1 1 2.83 2.83z'/>")],
      ['#22C55E', ic("<path d='M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z'/>")],
      ['#8B5CF6', ic("<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M22 21v-2a4 4 0 0 0-3-3.87'/><path d='M16 3.13a4 4 0 0 1 0 7.75'/>")]
    ];
    var modCircles = MODS.map(function (m) { return "<span class='md-auth-modicon' style='color:" + m[0] + ";background:" + m[0] + "1f;border-color:" + m[0] + "40'>" + m[1] + "</span>"; }).join('');
    side.innerHTML = [
      "<a href='index.html' class='md-auth-logo'>Moddo<span>Day</span></a>",
      "<h2>Tekrar hoÅŸ geldin!</h2>",
      "<p>HesabÄ±na giriÅŸ yap, kaldÄ±ÄŸÄ±n yerden wellbeing yolculuÄŸuna devam et. BugÃ¼n hangi moddasÄ±n?</p>",
      "<div class='md-auth-modicons'>" + modCircles + "</div>",
      "<div class='md-auth-features'>",
      feat(VIDEO, "CanlÄ± oturumlara devam et", "KaldÄ±ÄŸÄ±n yerden canlÄ± yayÄ±nlara katÄ±l."),
      feat(CAL, "Randevu & etkinlik takibi", "RandevularÄ±nÄ± ve etkinliklerini yÃ¶net."),
      feat(CROWN, "AyrÄ±calÄ±klar KulÃ¼bÃ¼", "Ãœyelere Ã¶zel indirim ve avantajlara eriÅŸ."),
      feat(TROPHY, "ModProgress Ã¶dÃ¼lleri", "Seviyeni ve kazandÄ±ÄŸÄ±n Ã¶dÃ¼lleri gÃ¶r."),
      "</div>"
    ].join('');
    return side;
  }
  function buildFormHead() {
    var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//);
    var prefix = m ? '/' + m[1] : '/tr-TR';
    var head = document.createElement('div');
    head.className = 'md-auth-form-head';
    head.setAttribute('data-kb-login', 'head');
    head.innerHTML = "<div class='md-auth-head-row'><span class='md-auth-head-icn'>" + LOGIN + "</span><h1>GiriÅŸ Yap</h1></div><p class='md-auth-login-link'>HesabÄ±n yok mu? <a href='" + prefix + "/signup'>Hemen kayÄ±t ol &rarr;</a></p>";
    return head;
  }
  function enhance() {
    var wrap = $('.users-wrapper');
    var form = $('#login-form');
    if (!wrap || !form) return false;
    /* submit metnini "GiriÅŸ Yap" yap (native "ÃœYE GÄ°RÄ°ÅÄ°"). TÃ¼rkÃ§e Ä° regex/i ile eÅŸleÅŸmiyor â†’
       doÄŸrudan deÄŸer kontrolÃ¼; idempotent (zaten "GiriÅŸ Yap" ise dokunma â†’ observer loop yok). */
    var sBtn = form.querySelector('button[type="submit"]');
    if (sBtn && sBtn.textContent.trim() !== 'GiriÅŸ Yap') sBtn.innerHTML = LOGIN + 'GiriÅŸ Yap';
    if (wrap.hasAttribute('data-kb-login-done')) return true;
    /* 1) Sol auth-side (form'dan Ã¶nce) */
    var userForm = $('.user-form.login', wrap);
    if (userForm && !$('.md-auth-side', wrap)) wrap.insertBefore(buildAuthSide(), userForm);
    /* 2) Form baÅŸlÄ±ÄŸÄ± (GiriÅŸ Yap + KayÄ±t ol) â€” form'un ilk child'i */
    if (!$('.md-auth-form-head', form)) form.insertBefore(buildFormHead(), form.firstChild);
    /* 3) Åifre gÃ¶ster/gizle toggle */
    var pass = $('#password', form);
    if (pass && !$('.md-pass-toggle', form)) {
      var w = document.createElement('div'); w.className = 'md-pass-wrap';
      pass.parentNode.insertBefore(w, pass); w.appendChild(pass);
      var t = document.createElement('button'); t.type = 'button'; t.className = 'md-pass-toggle'; t.setAttribute('aria-label', 'Åifreyi gÃ¶ster/gizle'); t.innerHTML = EYE;
      w.appendChild(t);
      t.addEventListener('click', function () { var s = pass.type === 'password'; pass.type = s ? 'text' : 'password'; t.innerHTML = s ? EYEOFF : EYE; });
    }
    /* 4) Sosyal butonlarÄ± submit altÄ±nda satÄ±ra grupla (+ "veya" divider) */
    if (!$('.md-auth-social', form)) {
      var gAnchor = form.querySelector('a[href*="glogin"]');
      var apple = form.querySelector('#appleid-signin'); var appleField = apple ? apple.closest('.field') : null;
      var fb = form.querySelector('.btn-primary-fblogin'); var fbField = fb ? fb.closest('.field') : null;
      var submitBtn = form.querySelector('.btn-primary-sign') || form.querySelector('button[type="submit"]');
      var submitField = submitBtn ? submitBtn.closest('.field') : null;
      if ((gAnchor || appleField || fbField) && submitField) {
        var social = document.createElement('div'); social.className = 'md-auth-social'; social.setAttribute('data-kb-login', 'social');
        if (gAnchor) social.appendChild(gAnchor);
        if (appleField) social.appendChild(appleField);
        if (fbField) social.appendChild(fbField);
        var divider = document.createElement('div'); divider.className = 'md-auth-divider'; divider.setAttribute('data-kb-login', 'divider'); divider.textContent = 'veya';
        submitField.parentNode.insertBefore(divider, submitField.nextSibling);
        divider.parentNode.insertBefore(social, divider.nextSibling);
      }
    }
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
/* ============================================================
   SECTION: SIGNUP â€” /signup DOM enhance (tasarÄ±m: kayit-ol.html)
   - OrtalÄ± hero (badge "Ä°lk 2 Ay Ãœcretsiz" + "ModdoDay'e KatÄ±l" + alt metin) inject
   - form + saÄŸ AVANTAJ/GÃœVEN paneli'ni .md-reg-grid'e sar
   - Form baÅŸlÄ±ÄŸÄ± (user-plus ikon + "HesabÄ±nÄ± OluÅŸtur" + "Zaten Ã¼ye misin? GiriÅŸ Yap")
   - Parola + Parola Tekrar yan yana (.md-reg-row2) + ÅŸifre gÃ¶ster/gizle toggle
   - Sosyal butonlarÄ± (Facebook + Google) submit altÄ±nda .md-auth-social satÄ±rÄ±na grupla + "veya" divider
   Native form fields/action/name DOKUNULMAZ. Scope: /signup veya /xx-XX/signup.
   ============================================================ */
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
  var EYE = "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z'/><circle cx='12' cy='12' r='3'/></svg>";
  var EYEOFF = "<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M9.88 9.88a3 3 0 1 0 4.24 4.24'/><path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'/><path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'/><line x1='2' x2='22' y1='2' y2='22'/></svg>";
  function loginHref() {
    var a = $('.users-wrapper > footer.footer a');
    if (a && a.getAttribute('href')) return a.getAttribute('href');
    var m = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\//);
    return (m ? '/' + m[1] : '/tr-TR') + '/login';
  }
  function buildHero() {
    var h = document.createElement('div');
    h.className = 'md-reg-hero';
    h.setAttribute('data-kb-signup', 'hero');
    h.innerHTML =
      "<span class='md-reg-badge'>" + ic(GIFT) + "Ä°lk 2 Ay Ãœcretsiz</span>" +
      "<h1>ModdoDay'e <span>KatÄ±l</span></h1>" +
      "<p>Kurumsal wellbeing ve kiÅŸisel deneyim hizmetleriyle yaÅŸam kaliteni yÃ¼kselt. Kendin iÃ§in en uygun modu seÃ§, uzmanlarla tanÄ±ÅŸ.</p>";
    return h;
  }
  function buildFormHead() {
    var head = document.createElement('div');
    head.className = 'md-auth-form-head';
    head.setAttribute('data-kb-signup', 'head');
    head.innerHTML =
      "<div class='md-auth-head-row'><span class='md-auth-head-icn'>" + ic(USERPLUS) + "</span><h2>HesabÄ±nÄ± OluÅŸtur</h2></div>" +
      "<p>Zaten Ã¼ye misin? <a href='" + loginHref() + "'>GiriÅŸ Yap &rarr;</a></p>";
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
        "<h3>ÃœYELÄ°K AVANTAJLARI</h3>" +
        ben(SPARKLES, "6 FarklÄ± YaÅŸam Modu", "Ä°lgi alanÄ±na uygun modlarda kiÅŸisel deneyim hizmeti") +
        ben(ZAP, "CanlÄ± Oturumlar", "HaftanÄ±n 7 gÃ¼nÃ¼ uzmanlarla birebir ve grup oturumlarÄ±") +
        ben(CROWN, "AyrÄ±calÄ±klar KulÃ¼bÃ¼", "Ã–zel indirimler, kampanyalar ve marka avantajlarÄ±") +
        ben(GIFT, "2 Ay Ãœcretsiz Deneme", "Hemen kayÄ±t ol, ilk 2 ay Ã¼cretsiz keÅŸfet") +
      "</div>" +
      "<div class='md-reg-card'><div class='md-reg-trust'>" +
        trust(SHIELD, "256-bit SSL ile gÃ¼venli baÄŸlantÄ±") +
        trust(CHECK, "KVKK uyumlu veri iÅŸleme") +
        trust(CHECK, "Ä°stediÄŸin zaman iptal edebilirsin") +
        trust(CHECK, "7/24 destek hattÄ±") +
      "</div></div>";
    return aside;
  }
  function addPassToggle(input) {
    if (!input || input.parentNode.classList.contains('md-pass-wrap')) return;
    var w = document.createElement('div'); w.className = 'md-pass-wrap';
    input.parentNode.insertBefore(w, input); w.appendChild(input);
    var t = document.createElement('button'); t.type = 'button'; t.className = 'md-pass-toggle';
    t.setAttribute('aria-label', 'Åifreyi gÃ¶ster/gizle'); t.innerHTML = EYE;
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
    /* 1) Hero (en Ã¼st) */
    if (!$('.md-reg-hero', wrap)) wrap.insertBefore(buildHero(), wrap.firstChild);
    /* 2) form + aside'Ä± .md-reg-grid'e sar */
    var userForm = $('.user-form.register', wrap);
    if (userForm && !$('.md-reg-grid', wrap)) {
      var grid = document.createElement('div'); grid.className = 'md-reg-grid'; grid.setAttribute('data-kb-signup', 'grid');
      wrap.insertBefore(grid, userForm);
      grid.appendChild(userForm);
      grid.appendChild(buildAside());
    }
    /* 3) Form baÅŸlÄ±ÄŸÄ± (form'un ilk child'i) */
    if (!$('.md-auth-form-head', form)) form.insertBefore(buildFormHead(), form.firstChild);
    /* 4) BoÅŸ label'larÄ± gizle (custom_profile alanlarÄ±) */
    [].forEach.call(form.querySelectorAll('.field > label'), function (l) {
      if (!l.textContent.trim() && !l.querySelector('input')) l.classList.add('md-label-empty');
    });
    /* 5) Parola + Parola Tekrar yan yana */
    var pass = $('#password', form), passR = $('#password-repeat', form);
    var pf = pass ? pass.closest('.field') : null, prf = passR ? passR.closest('.field') : null;
    if (pf && prf && !$('.md-reg-row2', form)) {
      var row = document.createElement('div'); row.className = 'md-reg-row2'; row.setAttribute('data-kb-signup', 'row2');
      pf.parentNode.insertBefore(row, pf); row.appendChild(pf); row.appendChild(prf);
    }
    /* 6) ÅŸifre gÃ¶ster/gizle */
    addPassToggle(pass); addPassToggle(passR);
    /* 7) Submit'e user-plus ikon (idempotent) */
    var sBtn = form.querySelector('.btn-primary-signup');
    if (sBtn && !sBtn.querySelector('.md-btn-ic')) {
      var span = document.createElement('span'); span.className = 'md-btn-ic'; span.style.display = 'inline-flex'; span.innerHTML = ic(USERPLUS);
      sBtn.insertBefore(span, sBtn.firstChild);
    }
    /* 8) Sosyal butonlarÄ± (Facebook + Google) submit altÄ±nda satÄ±ra grupla + "veya" divider */
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
  /* disconnect/reconnect ile self-trigger loop'unu engelle (body subtree observer) */
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
/* ============================================================
   SECTION: AGENT CARDS â€” global (her sayfada)
   .agents .item kartlarini ModdoDay YATAY kart tasarimina (uzmannew.PNG)
   donusturur. GLOBAL â€” uzmanlar listesi, kategori-detay, vb. her yerde ayni.
   Hedef yapi (flex order ile garanti):
     .item-c
       .kb-head  (yatay)        â†’ .item-image(avatar sol) + .kb-headcol(col)
                                    .kb-headcol: .kb-mode-tag + .item-title(isim) + .unvan-title(meslek)
       .item-excerpt (aciklama)
       .profile-categories (kategori pill'leri â€” mod disindakiler)
       .kb-foot (yatay space-between) â†’ .kb-rating(sol) [+ .kb-sessions(sag)]
   VERI ESLESMESI (recon):
   - mod-tag = bir KATEGORI (.pcategory-btn) â€” adi bir moda uyani (".. Modu")
     secip isim ustune renkli pill yapariz; kalan kategoriler altta kalir.
   - seans sayisi: platformda listede KAYNAK YOK â†’ simdilik render edilmez.
   - bos alanlar (.unvan-title/.item-excerpt/.profile-categories/.profile-review-stars)
     CSS :empty ile gizli; prod verisi gelince otomatik gorunur. UYDURMA YOK.
   ! Sonsuz dongu engeli: idempotency guard (data-kb-card) + run() icinde
     observer disconnect/reconnect (bkz feedback_mutationobserver_infinite_loop).
   ============================================================ */
(function () {
  'use strict';
  var DONE = 'data-kb-card';
  var OBS_OPTS = { childList: true, subtree: true };
  var mo = null;
  var applying = false;
  /* Avatar fallback gradient paleti (isim hash'i) */
  var GRADIENTS = [
    ['#10B981', '#14B8A6'], ['#3B82F6', '#06B6D4'], ['#F59E0B', '#EF4444'],
    ['#F43F5E', '#EC4899'], ['#22C55E', '#84CC16'], ['#8B5CF6', '#A855F7']
  ];
  /* Mod tespiti â€” kategori adina gore renk. */
  var MODES = [
    { re: /[Ã¼u]retken/i,  color: '#F59E0B' },
    { re: /teknoloji/i,   color: '#3B82F6' },
    { re: /keyif/i,       color: '#F43F5E' },
    { re: /sa[ÄŸg]l[Ä±i]k/i, color: '#10B981' },
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
  /* Platform yapisi: 1. .profile-categories blogu = TAG (tek etiket),
     sonraki blok(lar) = KATEGORILER. Tag'i (ilk blok) cikar, kalan
     bloklar kategori pill'i olarak kalir. Renk tag adina gore (mod eslesmesi). */
  function extractMode(c) {
    var blocks = c.querySelectorAll('.profile-categories');
    if (!blocks.length) return null;
    var first = blocks[0];
    var btns = first.querySelectorAll('.pcategory-btn');
    if (btns.length !== 1) return null;             /* tek etiketli degilse tag blogu sayma */
    var label = (btns[0].textContent || '').trim();
    if (first.parentNode) first.parentNode.removeChild(first);  /* tag blogunu DOM'dan cikar */
    if (!label) return null;
    var m = matchMode(label);
    return { label: label, color: m ? m.color : '#F59E0B' };    /* mod yoksa turuncu */
  }
  function buildCard(item) {
    var c = item.querySelector('.item-c');
    if (!c || c.getAttribute(DONE) === '1') return;
    var title = c.querySelector('.item-title');
    if (!title) return; /* icerik henuz yok; observer tekrar dener */
    var name = title.textContent.trim();
    var imgWrap = c.querySelector('.item-image');
    var unvan = c.querySelector('.unvan-title');
    var mode = extractMode(c);
    /* Bos kategori pill'lerini temizle (platform bazen bos .pcategory-btn render eder) */
    var ebtns = c.querySelectorAll('.profile-categories .pcategory-btn');
    for (var ei = 0; ei < ebtns.length; ei++) {
      if (!(ebtns[ei].textContent || '').trim()) {
        var eblk = ebtns[ei].closest('.profile-categories');
        if (ebtns[ei].parentNode) ebtns[ei].parentNode.removeChild(ebtns[ei]);
        if (eblk && !eblk.querySelector('.pcategory-btn') && eblk.parentNode) eblk.parentNode.removeChild(eblk);
      }
    }
    /* HEAD: avatar + (mod-tag, isim, meslek) */
    var head = document.createElement('div');
    head.className = 'kb-head';
    var col = document.createElement('div');
    col.className = 'kb-headcol';
    if (mode) {
      var pill = document.createElement('span');
      pill.className = 'kb-mode-tag';
      pill.textContent = mode.label;
      pill.style.color = mode.color;
      pill.style.backgroundColor = mode.color + '22';   /* ~13% alpha */
      pill.style.borderColor = mode.color + '59';        /* ~35% alpha */
      col.appendChild(pill);
    }
    if (imgWrap) head.appendChild(imgWrap);             /* avatar sola */
    col.appendChild(title);                              /* isim */
    if (unvan) col.appendChild(unvan);                   /* meslek */
    head.appendChild(col);
    c.appendChild(head);                                 /* sira CSS order ile */
    buildAvatar(imgWrap, name);
    /* FOOT: puan (+ ileride seans). Veri yoksa foot eklenmez. */
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
        r.innerHTML = '<span class="kb-star" aria-hidden="true">â˜…</span>' +
          '<strong>' + starCount.toFixed(1) + '</strong>' +
          (ccNum ? '<span class="kb-rev">(' + ccNum + ')</span>' : '');
        foot.appendChild(r);
      }
    }
    /* Gorusme sayisi = .item-services icinde rel=service-video/-phone/-audio
       olanlarin .service-count degerlerinin toplami (mesaj haric). */
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
  /* SAVUNMA: bir uzmanin aciklama/alaninda kapanmamis HTML (orn `</p` eksik `>`)
     varsa tarayici karti kapatamaz ve SONRAKI kart bu kartin .item'i ICINE
     gomulur â†’ tum liste cokmesi. Ic ice girmis .item'leri grid'e geri tasi
     ki tek bozuk veri butun listeyi bozmasin. (Asil cozum: bozuk veriyi duzelt.) */
  function unnestStray() {
    var grids = document.querySelectorAll('.agents .list.flex:not(.order-flex-list)');
    for (var g = 0; g < grids.length; g++) {
      var grid = grids[g];
      var stray = grid.querySelectorAll('.item .item'); /* .item icinde .item */
      for (var i = 0; i < stray.length; i++) {
        var nested = stray[i];
        if (!nested.querySelector(':scope > .item-c')) continue; /* gercek kart mi */
        var top = nested.parentElement;
        while (top && top.parentElement !== grid) top = top.parentElement;
        if (top && top !== nested && top.parentElement === grid) {
          grid.insertBefore(nested, top.nextSibling); /* bozuk host'tan sonra grid'e al */
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
/* ============================================================
   SECTION: AYRICALIKLAR KATEGORÄ° â€” /s/ayricaliklar-kategori
   MINIMAL JS â€” sadece marka kartÄ± sekmeleri (AVANTAJLAR / NASIL YARARLANILIR).
   Markup page content'te (editÃ¶r); burada yalnÄ±z davranÄ±ÅŸ. Event delegation
   (server-rendered iÃ§erik load'da hazÄ±r) â†’ idempotent, observer gerekmez.
   ============================================================ */
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
/* ============================================================
   SECTION: AYRICALIKLAR â€” /s/ayricaliklar  (CMS Ã¶zel sayfa)
   MINIMAL JS â€” yalnizca HTML'in yapamadigi: FAQ akordeon davranisi.
   Tasarim/hero/bÃ¶lÃ¼mler tamamen `content` HTML'i (kb-a-*) + css/_ayricaliklar.css;
   ikonlar CSS ::before mask. Idempotent.
   ============================================================ */
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
/* ============================================================
   SECTION: CONTACT â€” /tr-TR/s/iletisim
   MINIMAL JS â€” only what HTML/CSS cannot do:
     - Hero: breadcrumb badge + 1-word gradient title
       (h1 is a plain-text admin field; gradient/breadcrumb can't be HTML there)
     - Form: native contact-form is server-rendered â†’ relabel, 2-col rows,
       extra "Konusu" field, and submit-prefix behavior require JS
     - FAQ: click-to-toggle accordion on the server-rendered .kb-c-faq-item
       (markup lives in the editable page content; only the behavior is JS)
   Everything visual (CTA row, info aside, FAQ markup, bottom CTA + all icons
   as PNG <img>) now lives in the page `content` HTML, editable from admin and
   safe from the TinyMCE sanitizer. Inline SVG below is JS-injected only (never
   passes through TinyMCE), so it is safe.
   Idempotent via data-kb-c attribute markers.
   ============================================================ */
(function () {
  function isContactPage() {
    var p = location.pathname.replace(/\/$/, '');
    return /(?:^|\/)s\/iletisim$/.test(p);
  }
  if (!isContactPage()) return;
  /* SVG icons used ONLY by JS-injected hero/form (not page content) â†’ safe. */
  var SVG = {
    home: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 2l9 7.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z"/></svg>',
    chev: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    msg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    send: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>'
  };
  /* ---------------- Hero ---------------- */
  function injectHero() {
    var title = document.querySelector('.page-header .page-title');
    if (!title) return;
    var h1ref = title.querySelector('h1');
    /* Breadcrumb nav (Ana Sayfa > Ä°letiÅŸim) */
    if (!title.querySelector('.kb-c-breadcrumb')) {
      var bc = document.createElement('nav');
      bc.className = 'kb-c-breadcrumb';
      bc.setAttribute('data-kb-c', 'breadcrumb');
      bc.innerHTML = '<a href="/">Ana Sayfa</a> <span class="kb-c-bc-sep">' + SVG.chev + '</span> <span class="kb-c-bc-cur">Ä°letiÅŸim</span>';
      title.insertBefore(bc, title.firstChild);
    }
    /* Badge ("Bize UlaÅŸÄ±n") â€” blue */
    if (!title.querySelector('.kb-c-badge')) {
      var bd = document.createElement('div');
      bd.className = 'kb-c-badge';
      bd.setAttribute('data-kb-c', 'badge');
      bd.innerHTML = SVG.msg + ' <span>Bize UlaÅŸÄ±n</span>';
      title.insertBefore(bd, h1ref);
    }
    /* H1 â€” replace text with gradient-wrapped title */
    var h1 = title.querySelector('h1');
    if (h1 && h1.getAttribute('data-kb-c') !== 'title') {
      h1.innerHTML = 'Size NasÄ±l <span class="kb-gradient">YardÄ±mcÄ±</span> Olabiliriz?';
      h1.setAttribute('data-kb-c', 'title');
    }
  }
  /* ---------------- Form Intro + JS-inject fields + Row wrapping ---------------- */
  function makeField(opts) {
    /* opts: { name, label, type, placeholder, full, options:[{v,t}] } */
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
    /* Intro */
    if (!container.querySelector('.kb-c-form-title')) {
      var h2 = document.createElement('h2');
      h2.className = 'kb-c-form-title';
      h2.setAttribute('data-kb-c', 'form-title');
      h2.textContent = 'Ä°letiÅŸim Formu';
      var lead = document.createElement('p');
      lead.className = 'kb-c-form-lead';
      lead.setAttribute('data-kb-c', 'form-lead');
      lead.textContent = 'Formu doldurun, ekibimiz 24 saat iÃ§inde size dÃ¶nÃ¼ÅŸ yapsÄ±n.';
      container.insertBefore(lead, container.firstChild);
      container.insertBefore(h2, lead);
    }
    /* Built-in fields */
    var nameInp  = formEl.querySelector('input[name="name"]');
    var emailInp = formEl.querySelector('input[name="email"]');
    var phoneInp = formEl.querySelector('input[name="phone"]');
    var msgInp   = formEl.querySelector('textarea[name="message"]');
    var nameField  = nameInp  ? nameInp.closest('.field')  : null;
    var emailField = emailInp ? emailInp.closest('.field') : null;
    var phoneField = phoneInp ? phoneInp.closest('.field') : null;
    var msgField   = msgInp   ? msgInp.closest('.field')   : null;
    if (!nameField || !emailField || !phoneField || !msgField) return;
    /* Set label texts (upper-case styling handled by CSS, content is uppercase visually but stored Turkish-cased) */
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
    setLab(msgField, 'MesajÄ±nÄ±z');
    setPh(nameInp, 'AdÄ±nÄ±zÄ± ve soyadÄ±nÄ±zÄ± yazÄ±n');
    setPh(emailInp, 'ornek@eposta.com');
    setPh(phoneInp, '+90 5XX XXX XX XX');
    setPh(msgInp, 'MesajÄ±nÄ±zÄ± buraya yazÄ±n...');
    /* Build new field nodes (design2 birebir: Sirket + Konu select) */
    var sirketField = makeField({ name: 'sirket', label: 'Åirket', placeholder: 'Åirket adÄ± (opsiyonel)' });
    var konuField = makeField({ name: 'konu', label: 'Konu', type: 'select', full: true, options: [
      { v: '', t: 'Konu seÃ§in' },
      { v: 'genel', t: 'Genel Bilgi' },
      { v: 'uyelik', t: 'Ãœyelik & Abonelik' },
      { v: 'oturum', t: 'CanlÄ± Oturum Sorgusu' },
      { v: 'danismanlik', t: 'DanÄ±ÅŸmanlÄ±k BaÅŸvurusu' },
      { v: 'sponsorluk', t: 'Sponsorluk & Ä°ÅŸ BirliÄŸi' },
      { v: 'kurumsal', t: 'Kurumsal Ã‡Ã¶zÃ¼mler' },
      { v: 'teknik', t: 'Teknik Destek' },
      { v: 'diger', t: 'DiÄŸer' }
    ] });
    /* Clean up older injected fields (konusu/hata/konu_secin) */
    ['field-konusu', 'field-hata_kodu', 'field-konu_secin'].forEach(function (sel) {
      var old = formEl.querySelector('[data-kb-c="' + sel + '"]');
      if (old && old.parentNode) old.parentNode.removeChild(old);
    });
    /* Row1 = name + email */
    if (!nameField.parentNode.classList.contains('kb-c-row')) {
      var row1 = document.createElement('div');
      row1.className = 'kb-c-row';
      row1.setAttribute('data-kb-c', 'row1');
      nameField.parentNode.insertBefore(row1, nameField);
      row1.appendChild(nameField);
      row1.appendChild(emailField);
    }
    /* Row2 = phone + sirket */
    if (!phoneField.parentNode.classList.contains('kb-c-row')) {
      var row2 = document.createElement('div');
      row2.className = 'kb-c-row';
      row2.setAttribute('data-kb-c', 'row2');
      phoneField.parentNode.insertBefore(row2, phoneField);
      row2.appendChild(phoneField);
      row2.appendChild(sirketField);
    }
    /* Konu select (full width) â€” message'tan once */
    if (!formEl.querySelector('[data-kb-c="field-konu"]') && msgField && msgField.parentNode) {
      msgField.parentNode.insertBefore(konuField, msgField);
    }
    /* Submit button: MESAJ GÃ–NDER + send ikonu */
    var btn = formEl.querySelector('button[type="submit"], input[type="submit"]');
    if (btn) {
      if (btn.tagName === 'INPUT') { btn.value = 'MESAJ GÃ–NDER'; }
      else { btn.innerHTML = SVG.send + ' MESAJ GÃ–NDER'; }
    }
    /* Submit handler: Konu + Åirket degerlerini mesaj govdesine prefix'le
       (native backend yalnizca name/email/phone/message gonderir) */
    formEl.addEventListener('submit', function () {
      try {
        var konu = (formEl.querySelector('#kb-c-konu') || {}).value || '';
        var sirket = (formEl.querySelector('#kb-c-sirket') || {}).value || '';
        var lines = [];
        if (konu) lines.push('[Konu: ' + konu + ']');
        if (sirket) lines.push('[Åirket: ' + sirket + ']');
        if (lines.length && msgInp) {
          var orig = msgInp.value || '';
          if (orig.indexOf('[Konu:') !== 0 && orig.indexOf('[Åirket:') !== 0) {
            msgInp.value = lines.join('\n') + '\n\n' + orig;
          }
        }
      } catch (e) { /* never block submit */ }
    }, true);
    formEl.setAttribute('data-kb-c-built', '1');
  }
  /* ---------------- FAQ accordion (markup is in page content; behavior only) ---------------- */
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
/* ============================================================
   SECTION: KATEGORI (mod) detay â€” /kategori/<slug>
   MINIMAL JS â€” yalnizca HTML/editÃ¶r iceriginin yapamadigi:
     - body'ye per-mode class (kb-cat-<slug>) â†’ CSS accent rengi
     - "Uzman DanÄ±ÅŸmanlar" basligini native .agents listesinin ONUNE ekle
       (excerpt header'da, content en altta; bu pozisyona HTML giremez)
   Hero/stats/diger-modlar HTML (category excerpt+content) ile; uzman kartlari
   native (gercek veri) + agent-cards.js ile stillidir.
   Idempotent: data-kb-cat marker.
   ============================================================ */
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
  function run() {
    var b = document.body;
    if (!b) return;
    var s = slug();
    if (s && !b.classList.contains('kb-cat-' + s)) b.classList.add('kb-cat-' + s);
    /* "Uzman DanÄ±ÅŸmanlar" basligi â€” native .agents listesinin hemen onune */
    var agents = document.querySelector('.page .agents');
    if (agents && !document.querySelector('[data-kb-cat="experts-h"]')) {
      var wrap = agents.closest('.categories') || agents.parentElement;
      var catName = ((document.querySelector('.page-title h1') || {}).textContent || '').trim();
      var h = document.createElement('div');
      h.className = 'kb-cat-experts-head';
      h.setAttribute('data-kb-cat', 'experts-h');
      h.innerHTML = '<h2>Uzman DanÄ±ÅŸmanlar</h2><p>' + (catName ? catName + ' kategorisindeki uzman danÄ±ÅŸmanlarÄ±mÄ±z' : 'Uzman danÄ±ÅŸmanlarÄ±mÄ±z') + '</p>';
      (wrap.parentElement || wrap).insertBefore(h, wrap);
    }
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
   SECTION: KURUMSAL KAYIT â€” CMS /s/kurumsal-kayit (tasarÄ±m: kurumsal-kayit.html)
   - Layout: hero (iÃ§erik, Ã¼stte) + .md-kk-grid [ native form KARTI (sol) | aside (saÄŸ) ]
   - Native #contact-form (attach_contact_form) restyle: form-head, relabel,
     Firma + Ã‡alÄ±ÅŸan SayÄ±sÄ± alanlarÄ± inject, 2-kolon satÄ±r, KVKK onayÄ±, submit.
   - Submit'te Firma + Ã‡alÄ±ÅŸan SayÄ±sÄ± deÄŸerlerini message gÃ¶vdesine katla
     (native backend yalnÄ±z name/email/phone/message gÃ¶nderir â†’ gerÃ§ek lead).
   Ä°Ã§erik (hero + aside) page content'te (editÃ¶r'den dÃ¼zenlenebilir). SVG sadece
   JS-inject (TinyMCE'ye girmez â†’ gÃ¼venli). Idempotent + observer auto-disconnect.
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
  /* hero altÄ±nda [form | aside] grid'i kur */
  function buildGrid() {
    var pb = $('.page-body');
    var form = $('.form-container.contact-form');
    var aside = $('.md-kk-aside');
    if (!pb || !form || !aside) return;
    if ($('.md-kk-grid', pb)) return;
    var grid = document.createElement('div'); grid.className = 'md-kk-grid'; grid.setAttribute('data-kk', 'grid');
    /* grid'i form'un olduÄŸu yere koy, sonra form + aside'Ä± iÃ§ine al */
    form.parentNode.insertBefore(grid, form);
    grid.appendChild(form);   /* sol */
    grid.appendChild(aside);  /* saÄŸ */
  }
  function foldMessage(formEl, msgInp) {
    try {
      var firma = (formEl.querySelector('#kk-firma') || {}).value || '';
      var calisan = (formEl.querySelector('#kk-calisan') || {}).value || '';
      var lines = [];
      if (firma) lines.push('[Firma: ' + firma + ']');
      if (calisan) lines.push('[Ã‡alÄ±ÅŸan SayÄ±sÄ±: ' + calisan + ']');
      if (lines.length && msgInp) {
        var orig = msgInp.value || '';
        if (orig.indexOf('[Firma:') !== 0 && orig.indexOf('[Ã‡alÄ±ÅŸan') !== 0) {
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
    setLab(nameField, 'Yetkili AdÄ± SoyadÄ±'); setPh(nameInp, 'Ad ve soyadÄ±nÄ±zÄ± yazÄ±n');
    setLab(emailField, 'E-Posta Adresi'); setPh(emailInp, 'ornek@firma.com');
    setLab(phoneField, 'Telefon NumarasÄ±'); setPh(phoneInp, '+90 5XX XXX XX XX');
    setLab(msgField, 'Talebiniz'); setPh(msgInp, 'Kurumsal Ã¼yelik talebinizi, beklentilerinizi veya sorularÄ±nÄ±zÄ± yazÄ±n...');
    /* inject: Firma + Ã‡alÄ±ÅŸan SayÄ±sÄ± */
    var firmaField = makeField({ name: 'firma', label: 'Firma AdÄ±', placeholder: 'Firma adÄ±nÄ±zÄ± girin', full: true });
    var calisanField = makeField({ name: 'calisan', label: 'Ã‡alÄ±ÅŸan SayÄ±sÄ±', type: 'select', full: true, options: [
      { v: '', t: 'SeÃ§iniz' }, { v: '1-50', t: '1 - 50' }, { v: '51-200', t: '51 - 200' },
      { v: '201-500', t: '201 - 500' }, { v: '501-1000', t: '501 - 1.000' }, { v: '1000+', t: '1.000+' }
    ] });
    /* sÄ±ralama: name(full) â†’ firma(full) â†’ [email+phone row] â†’ calisan(full) â†’ message(full) */
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
    /* KVKK onayÄ± (message'tan sonra, submit'ten Ã¶nce) */
    if (!formEl.querySelector('.md-kk-consent')) {
      var consent = document.createElement('div'); consent.className = 'md-kk-consent'; consent.setAttribute('data-kk', 'consent');
      consent.innerHTML = "<input type='checkbox' id='kk-kvkk'><label for='kk-kvkk'><a href='/s/yasal' target='_blank'>KullanÄ±m KoÅŸullarÄ±, Gizlilik PolitikasÄ±</a> ve <a href='/s/yasal' target='_blank'>KVKK AydÄ±nlatma Metni</a>'ni okudum, kiÅŸisel verilerimin iÅŸlenmesini kabul ediyorum.</label>";
      var errP = document.createElement('p'); errP.className = 'md-kk-consent-err'; errP.textContent = 'Devam etmek iÃ§in KVKK ve kullanÄ±m koÅŸullarÄ±nÄ± onaylayÄ±n.';
      var submitField = (formEl.querySelector('button[type="submit"], input[type="submit"]') || {}).closest ? formEl.querySelector('button[type="submit"], input[type="submit"]').closest('.field') : null;
      if (submitField && submitField.parentNode) { submitField.parentNode.insertBefore(consent, submitField); submitField.parentNode.insertBefore(errP, submitField); }
      else { msgField.parentNode.appendChild(consent); msgField.parentNode.appendChild(errP); }
    }
    /* submit metni + ikon */
    var btn = formEl.querySelector('button[type="submit"], input[type="submit"]');
    if (btn) { if (btn.tagName === 'INPUT') btn.value = 'TALEBÄ°MÄ° GÃ–NDER'; else btn.innerHTML = SVG.send + ' TALEBÄ°MÄ° GÃ–NDER'; }
    /* consent gate + message fold â€” hem click (recaptcha yolu) hem submit (Enter) */
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
   SECTION: UZMAN DETAY â€” DOM yeniden yapÄ±landÄ±rma (tasarÄ±m: danisman-detay)
   Native node'larÄ± MOVE edip (clone deÄŸil â†’ listener korunur) tasarÄ±mdaki dÃ¼zeni kurar:
ana kolon hero + iÃ§erik; SEANS & PAKET kartlarÄ±nÄ±n Ä°KÄ°SÄ° de 2-satÄ±r (aynÄ± tasarÄ±m).
SaÄŸ aside sadeleÅŸtirilir (CSS: sadece gÃ¼ven kartÄ±). Idempotent. CSS: _uzman-detay.css.
============================================================ */
(function () {
var CHECK_SVG = "<svg viewBox='0 0 24 24' width='15' height='15' fill='none' stroke='#34d399' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><path d='m9 12 2 2 4-4'/></svg>";
function buildCard(item) {
if (item.getAttribute('data-kb-pkg') === '1') return;
var left = item.querySelector('.package-item-left');
var right = item.querySelector('.package-item-right');
var title = item.querySelector('.package-title');
var desc = item.querySelector('.package-description');
var price = item.querySelector('.package-meta-price');
var sessions = item.querySelector('.package-meta-sessions');
var duration = item.querySelector('.package-meta-duration');
var btnWrap = item.querySelector('.package-button');
var priceNum = parseFloat(item.getAttribute('data-package-price') || '0');
var sessCount = 0;
if (sessions) { var m = (sessions.textContent || '').match(/(\d+)/); if (m) sessCount = parseInt(m[1], 10); }
var top = document.createElement('div'); top.className = 'kb-ud-pkg-top';
var head = document.createElement('div'); head.className = 'kb-ud-pkg-head';
if (title) head.appendChild(title);
if (desc) head.appendChild(desc);
var pr = document.createElement('div'); pr.className = 'kb-ud-pkg-price';
if (price) {
var val = price.querySelector('.package-meta-value:not(.package-credits)') || price.querySelector('.package-meta-value');
if (val) {
var fm = (val.textContent || '').trim().match(/^([\d.,]+)\s*(.+)$/);
if (fm) val.textContent = fm[2].trim() + fm[1];
}
pr.appendChild(price);
}
if (priceNum > 0 && sessCount > 1) {
var ps = document.createElement('p'); ps.className = 'kb-ud-perseans';
ps.textContent = 'â‚º' + Math.round(priceNum / sessCount) + '/seans';
pr.appendChild(ps);
}
top.appendChild(head); top.appendChild(pr);
var bot = document.createElement('div'); bot.className = 'kb-ud-pkg-bot';
var meta = document.createElement('div'); meta.className = 'kb-ud-pkg-meta';
if (sessions) meta.appendChild(sessions);
if (duration) meta.appendChild(duration);
bot.appendChild(meta);
if (btnWrap) bot.appendChild(btnWrap);   
if (left) left.remove();
if (right) right.remove();
item.appendChild(top); item.appendChild(bot);
item.setAttribute('data-kb-pkg', '1');
}
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
var countHtml = "<span class='kb-ud-rating-count'>" + total + " deÄŸerlendirme</span>";
if (rated > 0) {
var avg = (sum / rated).toFixed(1).replace('.', ',');
el.innerHTML = "<span class='kb-ud-star'>â˜…</span>" + avg + "<span class='kb-ud-rating-sep'>Â·</span>" + countHtml;
} else {
el.innerHTML = countHtml; 
}
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
.then(function (html) {
var doc = new DOMParser().parseFromString(html, 'text/html');
computeAndShow([].slice.call(doc.querySelectorAll('.review')));
})
.catch(function () {
el.removeAttribute('data-kb-fetch');
computeAndShow([].slice.call(document.querySelectorAll('.review'))); 
});
} else {
computeAndShow([].slice.call(document.querySelectorAll('.review')));
}
}
function stripTitleParens() {
var pt = document.querySelector('.profile-title');
if (!pt || pt.getAttribute('data-kb-paren') === '1') return;
var changed = false;
[].forEach.call(pt.childNodes, function (nd) {
if (nd.nodeType === 3 && /[()]/.test(nd.textContent)) { nd.textContent = nd.textContent.replace(/[()]/g, ''); changed = true; }
});
if (changed) pt.setAttribute('data-kb-paren', '1');
}
function build() {
var b = document.body;
if (!b || !b.classList.contains('kb-page-uzman-detay')) return true; 
var main = document.querySelector('.profile-right .page-content');
var aside = document.querySelector('.profile-left .agent-header') || document.querySelector('.profile-left');
if (!main || !aside) return false; 
var img = aside.querySelector('.profile-image');
var title = aside.querySelector('.profile-title');
var cats = (document.querySelector('.profile-left') || aside).querySelector('.profile-categories');
if (!main.querySelector('.kb-ud-hero') && (img || title)) {
var hero = document.createElement('div');
hero.className = 'kb-ud-hero';
var txt = document.createElement('div');
txt.className = 'kb-ud-hero-txt';
if (cats) txt.appendChild(cats);     
if (title) txt.appendChild(title);   
var metaRow = document.createElement('div'); metaRow.className = 'kb-ud-hero-meta';
metaRow.innerHTML = "<span class='kb-ud-rating kb-ud-hidden'></span><span class='kb-ud-verified'>" + CHECK_SVG + "OnaylÄ± Uzman</span>";
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
if (kws.length > 1) {
p.innerHTML = kws.map(function (k) {
return '<span class="kb-ud-kw">' + k.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
}).join('');
}
}
}
var ap = document.querySelector('.appointment-packages') || document.querySelector('#apdiv');
if (ap && !ap.querySelector('.kb-ud-tabs')) {
var its = [].slice.call(ap.querySelectorAll('.package-item'));
if (its.length) {
var pakets = its.filter(function (it) { return !!it.querySelector('.package-meta-sessions'); });
var seanslar = its.filter(function (it) { return !it.querySelector('.package-meta-sessions'); });
var seansPanel = document.createElement('div'); seansPanel.className = 'kb-ud-panel'; seansPanel.setAttribute('data-kb-panel', 'seans');
var paketPanel = document.createElement('div'); paketPanel.className = 'kb-ud-panel'; paketPanel.setAttribute('data-kb-panel', 'paket');
seanslar.forEach(function (it) { seansPanel.appendChild(it); buildCard(it); });
pakets.forEach(function (it) { paketPanel.appendChild(it); buildCard(it); });
var hasSeans = seanslar.length > 0, hasPaket = pakets.length > 0;
var tabbar = document.createElement('div'); tabbar.className = 'kb-ud-tabs';
tabbar.innerHTML =
(hasSeans ? '<button type="button" class="kb-ud-tab" data-kb-tab="seans">Seans TÃ¼rleri</button>' : '') +
(hasPaket ? '<button type="button" class="kb-ud-tab" data-kb-tab="paket">Paket DanÄ±ÅŸmanlÄ±klar</button>' : '');
var h2 = ap.querySelector('h2.profile-content-title') || ap.querySelector('.profile-content-title');
if (h2 && h2.parentNode === ap) { ap.insertBefore(tabbar, h2.nextSibling); }
else { ap.insertBefore(tabbar, ap.firstChild); }
ap.insertBefore(seansPanel, tabbar.nextSibling);
ap.insertBefore(paketPanel, seansPanel.nextSibling);
function kbSetTab(k) {
[].slice.call(tabbar.querySelectorAll('.kb-ud-tab')).forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-kb-tab') === k); });
seansPanel.classList.toggle('kb-ud-hidden', k !== 'seans');
paketPanel.classList.toggle('kb-ud-hidden', k !== 'paket');
}
[].slice.call(tabbar.querySelectorAll('.kb-ud-tab')).forEach(function (b) { b.addEventListener('click', function () { kbSetTab(b.getAttribute('data-kb-tab')); }); });
kbSetTab(hasSeans ? 'seans' : 'paket');
}
}
[].slice.call(document.querySelectorAll('.review')).forEach(function (r) {
if (r.getAttribute('data-kb-rev') === '1') return;
r.setAttribute('data-kb-rev', '1');
var head = r.querySelector('.review-head');
var date = r.querySelector('.review-date');
if (head && date) head.insertBefore(date, head.firstChild);
});
var leftCol = document.querySelector('.profile-left');
if (leftCol && !leftCol.querySelector('.kb-ud-trust')) {
var ic = function (inner) { return "<svg class='kb-ud-trust-ic' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#34d399' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>" + inner + "</svg>"; };
var SHIELD = ic("<path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'/>");
var CHECK = ic("<circle cx='12' cy='12' r='10'/><path d='m9 12 2 2 4-4'/>");
var VIDEO = ic("<path d='m16 13 5.223 3.482a.5.5 0 0 0 .777-.415V7.93a.5.5 0 0 0-.752-.432L16 10.5'/><rect x='2' y='6' width='14' height='12' rx='2'/>");
var rows = [
[SHIELD, 'GÃ¼venli GÃ¶rÃ¼ÅŸme', 'Åifreli video baÄŸlantÄ±sÄ± ile gÃ¼venli oturum'],
[CHECK, 'Memnuniyet Garantisi', 'Ä°lk seans memnun kalmazsanÄ±z iade'],
[VIDEO, 'KayÄ±t Ä°mkanÄ±', 'Oturumunuzu kaydedin, tekrar izleyin']
];
var tc = document.createElement('div'); tc.className = 'kb-ud-trust';
tc.innerHTML = rows.map(function (r) {
return "<div class='kb-ud-trust-row'>" + r[0] + "<div class='kb-ud-trust-txt'><strong>" + r[1] + "</strong><span>" + r[2] + "</span></div></div>";
}).join('');
leftCol.appendChild(tc);
}
return true;
}
function pump() { try { build(); } catch (e) {  } }
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
var TITLE = 'DanÄ±ÅŸmanlar';
var INTRO = 'AlanÄ±nda uzman bireysel danÄ±ÅŸmanlar ve kurumsal firma danÄ±ÅŸmanlarÄ± ile birebir gÃ¶rÃ¼ÅŸme yapÄ±n, kiÅŸiselleÅŸtirilmiÅŸ rehberlik alÄ±n.';
var MODES = [
{ key: 'all',       label: 'TÃ¼mÃ¼',                                    re: null },
{ key: 'uretken',   label: 'Ãœretken Modu',                            re: /[Ã¼u]retken/i },
{ key: 'teknoloji', label: 'Teknolojiye MeraklÄ± Modu',                re: /teknoloji/i },
{ key: 'keyif',     label: 'Keyif Modu',                              re: /keyif/i },
{ key: 'saglik',    label: 'SaÄŸlÄ±klÄ±yÄ±m Modu',                        re: /sa[ÄŸg]l[Ä±i]k/i },
{ key: 'longevity', label: 'Longevity (En Ä°yi VersiyonumdayÄ±m) Modu', re: /longevity/i },
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
'    <input type="text" class="kb-u-search" placeholder="DanÄ±ÅŸman veya uzmanlÄ±k alanÄ± araâ€¦" aria-label="DanÄ±ÅŸman veya uzmanlÄ±k alanÄ± ara">',
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
empty.textContent = 'Aramana uygun danÄ±ÅŸman bulunamadÄ±. AramanÄ± temizle veya farklÄ± bir mod seÃ§.';
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
