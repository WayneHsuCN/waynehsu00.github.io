const cacheName="clock",contentToCache=["./","./index.html","./index.css","./index.js","./worker.js","./sw.js","./icons/icon192.png","./icons/icon512.png","./icons/maskable192.png","./icons/maskable512.png","./site.webmanifest","./icons/favicon.png","./icons/appletouch.png","./GitHub-Mark-64px.png"];self.addEventListener("install",e=>{console.log("Service Worker installed"),e.waitUntil((async()=>{const e=await caches.open(cacheName);await e.addAll(contentToCache)["catch"](e=>console.log(e))})())}),self.addEventListener("fetch",function(e){e.respondWith(fetch(e.request).then(n=>{let c=n.clone();return caches.open(cacheName).then(n=>{n.put(e.request,c)}),n})["catch"](()=>caches.match(e.request)))});