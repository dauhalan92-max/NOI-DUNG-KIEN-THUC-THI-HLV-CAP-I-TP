const CACHE='hlv-cap-i-v2';
const FILES=['./','./index.html','./manifest.json','./assets/logo-hoi.png','./assets/icon-192.png','./assets/icon-512.png','./atgt.html','./so-cap-cuu.html','./doan-hoi.html','./nghi-thuc-hoi.html','./phuong-huong.html','./kien-thuc-tong-hop.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.waitUntil?null:null);
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return resp}).catch(()=>caches.match('./index.html'))))});
