const CACHE_NAME = 'pea-msci-world-swap-pwa-v1';
const ASSETS = [
  './',
  './pea-msci-world-swap-pwa.html',
  './manifest.webmanifest',
  './assets/icon-192.png',
  './assets/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});