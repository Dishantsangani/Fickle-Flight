const CACHE_NAME = " drag-drop-cache";
const CACHE_URLS = ["/", "/index.html"];

// That is Installing he Service Workers
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_URLS);
    })
  );
});

// That is Events To Response
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// This is a Activate The PWA
self.addEventListener("activate", (event) => {
  event
    .waitUntil(caches)
    .keys()
    .then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName === CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    });
});
