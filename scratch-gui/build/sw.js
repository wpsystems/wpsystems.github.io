// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["js/vendors~addon-settings~credits~editor~embed~fullscreen~player.18577f831941306ae888.js","js/addon-settings~editor~fullscreen~player.812b3fb51822d948676d.js","js/editor~embed~fullscreen~player.8f0177d3414676650503.js","js/vendors~editor~embed~fullscreen~player.7d663bbe629679a1459f.js","js/addon-settings~addons.817bd47c337c1d019e8b.js","js/addon-settings.3c3a45d66ee19cf324fd.js","js/addons.2b918aaa9c378259ca09.js","js/editor.a58fbe863d1afef54ebb.js","js/fullscreen.39b36a0365605ab26cfa.js","js/player.cdcf9e877f14306e4ee6.js","editor.html","index.html","fullscreen.html","addons.html"];
const CACHE_NAME = 'tw-efb387f66594f05e84f2a5296757ab85ab057dc4';

const base = location.pathname.substr(0, location.pathname.indexOf('sw.js'));

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(keys.filter(i => i !== CACHE_NAME).map(i => caches.delete(i))))
    );
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (url.origin !== location.origin) return;
    if (event.request.method !== 'GET') return;

    let rewrite;
    const pathname = url.pathname.substr(base.length);
    if (/^(\d+\/?)?$/.test(pathname)) {
        rewrite = 'index.html';
    } else if (/^(\d+\/)?editor\/?$/i.test(pathname)) {
        rewrite = 'editor.html';
    } else if (/^(\d+\/)?fullscreen\/?$/i.test(pathname)) {
        rewrite = 'fullscreen.html';
    } else if (/^addons\/?$/i.test(pathname)) {
        rewrite = 'addons.html';
    }
    if (rewrite) {
        event.respondWith(fetch(event.request).catch(() => caches.match(new Request(rewrite))));
    }
});
