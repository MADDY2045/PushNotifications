export default function notify(){
    window.addEventListener('push', (e)=>{
        const data = e.data.json();
        console.log('push has been received!!!');
        window.registration.showNotification(data.name,{
            body:'Sent by Maddy',
            icon:'http://image.ibb.co/frYOFd/tmlogo.png'
        })
    })
}