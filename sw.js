var cacheName = 'PWA';
var filesToCache = [
  '/',
  '/index.html',
  '/mapa.html',
  '/sos.html',
  '/styles.css',
  '/app.js',
  
];


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('app-cache').then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
