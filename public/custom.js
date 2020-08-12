const publicVapidkey = 'BK3AcnFdTx0BH-RLhsSkk1hzbiMBnuo2MYqZ-1m8KZzcBKygRFNTtfEHP2k6sR_9Pi-FuiK5RGGsOhcqT036tU4';

if('serviceWorker' in navigator){
   send().catch(err=>console.log(err));
}

let subscription ='';

async function send(){
    console.log('Registering service worker .....');
    const register = await navigator.serviceWorker.register('./cached_pages.js');
    console.log('Registering push!!!!!');
    //Register Push
    subscription = await register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:urlBase64ToUint8Array(publicVapidkey)
    })
    console.log('Registered push successfully!!!!!');

    //Send Push Notifications
    console.log('sending push .....');
    await fetch('http://localhost:6040/subscribe',{
        method:'POST',
        body:JSON.stringify(subscription),
        headers:{
            'content-type':'application/json'
        }
    })
    console.log('Push Sent .....');
}

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }