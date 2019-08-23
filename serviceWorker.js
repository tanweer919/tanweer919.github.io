self.addEventListener('install', function(event) {
  console.log("Service Worked installed");
});
self.addEventListener('activate', function(event) {
  console.log("Service worker activated")
  return self.clients.claim();
});