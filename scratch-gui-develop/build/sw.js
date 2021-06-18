// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["js/vendors~addon-settings~credits~editor~embed~fullscreen~player.6ebf98a54f57a67f9dbd.js","js/addon-settings~editor~fullscreen~player.73e0408f9a3d57ff08fa.js","js/editor~embed~fullscreen~player.a03bb41340964e803467.js","js/vendors~editor~embed~fullscreen~player.9e294b5f4928afd4b5a5.js","js/addon-settings~addons.171f0e54ed3fa1e3808c.js","js/addon-settings.1d6c04241cecb75e1238.js","js/addons.1c5c8194bc4dcb6946be.js","js/editor.dbd069ad26574b20b150.js","js/fullscreen.f2cb231d6aa1799062bc.js","js/player.f61cf3b20775e9a6f987.js","editor.html","index.html","fullscreen.html","addons.html"];
const CACHE_NAME = 'tw-92c65a8e3299e9376a1f877e4fa3c4883987ee79';

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
