const publicVapidkey = 'BG6F38fMqLk0D_EnRdrDVAVPS9CaAGJV0RRhl2FzHJEAVqs1MPFAgtjc4ust9ZJ8mPYP5NhABruDtHlMapyBSSM';

//check for service worker
if('serviceworker' in navigator){
    send().catch(err=>console.log(err));
}
// Register the service worker, Register Push, Send Push
async function send(){
    //Register Service worker
    console.log('Registering service worker');
    const register = await navigator.serviceWorker.register('/worker.js',{scope:'/'});
    console.log('Service worker registered');

    //Register push
    console.log('Registering push');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:urlBase64ToUint8Array(publicVapidkey)
    })
    console.log('push Registered....');
    //send push notification
    console.log('sending push');
    await fetch('/subscribe',{
        method:'POST',
        body:JSON.stringify(subscription),
        headers:{
            'content-type':'application/json'
        }
    });
    console.log('Push Sent');
}

function urlBase64ToUint8Array(base64String){
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).
    replace(/\-/g,'+').replace(/_/g,'/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for(let i=0;i<rawData.length;++i){
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}