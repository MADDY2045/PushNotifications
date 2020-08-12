//for caching based on assets
const cacheName = 'v1';

const cacheAssets=[
    'custom.js',
    'index.html',
    '../src/App.css',
    '../src/App.js',
    '../src/components/About.js',
    '../src/components/Home.js',
    '../package.json',
    '../package-lock.json',
    '../node_modules',
    '../src/index.js'
]


self.addEventListener('push', (e)=>{
    const data = e.data.json();
    console.log('push has been received!!!');
    self.registration.showNotification(data.name,{
        body:'Sent by Madhavan',
         vibrate: [100, 50, 100],
        icon:'https://www.maddyportal.com/Portals/_default/Skins/molly-portal-theme/img/maddy-logo.jpg',
        actions: [
          {action: 'explore', title: 'Explore this new world',
            icon: ''},
          {action: 'close', title: 'Close notification',
            icon: ''},
        ]
    })
})
// install event listener
self.addEventListener('install', (e)=>{
    console.log(`service worker installed...`)
    e.waitUntil(
        caches.open(cacheName).then(cache=>{
            console.log(`caching files...`);
            cache.addAll(cacheAssets);
        }).then(()=>{self.skipWaiting()})
    )
});

// Activate event listener
self.addEventListener('activate', (e)=>{
    console.log(`service worker activated...`)
    //remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cache=>{
                    if(cache !== cacheName){
                        console.log('service worker clearing cache ....');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

//call fetch event
self.addEventListener('fetch', (e)=>{
    console.log('Service Worker fetching .....');
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))
    )
})

self.addEventListener('notificationclose', function(e) {
    var notification = e.notification;
    console.log('Closed notification: ');
  });

  self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
        var action = e.action;

    if (action === 'close') {
      notification.close();
    } else {
      clients.openWindow('http://www.youtube.com');
      notification.close();
    }
  });