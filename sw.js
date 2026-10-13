// Minimal service worker — just enough for the browser to consider this app
// "installable". It doesn't cache anything offline on purpose: this app needs
// a live connection to the backend anyway (login, meal logging, AI estimates),
// so pretending to work offline would be misleading. Feel free to extend this
// with real caching later if you add offline support.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass every request straight through to the network.
  event.respondWith(fetch(event.request));
});
