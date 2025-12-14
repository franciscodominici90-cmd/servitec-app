self.addEventListener("install", e=>{
 e.waitUntil(
  caches.open("servitec").then(c=>
   c.addAll([
    "index.html",
    "logo.png",
    "icon.png",
    "apple-icon.png"
   ])
  )
 );
});

self.addEventListener("fetch", e=>{
 e.respondWith(
  caches.match(e.request).then(r=>r||fetch(e.request))
 );
});
