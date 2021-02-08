const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'manifest.json',
  'index.html',
  'about.html',
  'styles/main.css',
  'js/main.js',
  'images/logo.png',
  'images/great-mind.webp',
  'images/background.png',
  'images/touch/icon-128x128.png',
  'images/touch/icon-192x192.png',
  'images/touch/icon-256x256.png',
  'images/touch/icon-384x384.png',
  'images/touch/icon-512x512.png',
  'videos/demo.mp4',
  'videos/demo.ogg',
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  // For install new version withoud reopen all windows
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});