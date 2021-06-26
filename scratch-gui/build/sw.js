// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["js/addon-settings.js","js/addon-settings~addons.js","js/addon-settings~editor~fullscreen~player.js","js/addons.js","js/editor.js","js/editor~embed~fullscreen~player.js","js/fullscreen.js","js/player.js","js/vendors~addon-settings~credits~editor~embed~fullscreen~player.js","js/vendors~editor~embed~fullscreen~player.js","editor.html","index.html","fullscreen.html","addons.html"];
const CACHE_NAME = 'tw-88d1d4f18a32c69bca8f201bbdf222b82320c6f9';

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
