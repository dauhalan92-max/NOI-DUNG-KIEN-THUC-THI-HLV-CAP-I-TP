const CACHE='hlv-cap-i-stable-v3';
const ASSETS=['./','./index.html','./manifest.json','./assets/logo-hoi.png','./assets/icon-192.png','./assets/icon-512.png','./atgt.html','./so-cap-cuu.html','./doan-hoi.html','./nghi-thuc-hoi.html','./phuong-huong.html','./kien-thuc-tong-hop.html'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));});
