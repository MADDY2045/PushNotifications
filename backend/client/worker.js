console.log("service worker loaded..");

self.addEventListener('push', e=>{
    const data = e.data.json();
    console.log('Push Received ....');
    self.ServiceWorkerRegistration.showNotification(data.title,{
        body:"Notified by Maddy"
    })
})