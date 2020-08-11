//make sure that the sw are supported

// if('serviceWorker' in navigator){
//     console.log("service worker supported");
// }

//register service worker on load

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./cached_pages.js').then(reg=>{
            console.log('Service Worker Registered!!!');
        }).catch(err=>console.log(`Service Register Error : ${err}`))
    })
}