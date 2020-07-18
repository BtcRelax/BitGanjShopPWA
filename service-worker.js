const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'about.html',
  'styles/main.css',
  'images/logo.png',
  'images/great-mind.webp'
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