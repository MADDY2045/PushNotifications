import React,{ useState,useEffect } from 'react';
import notify from '../components/notify';
import '../App.css';

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
const publicVapidkey = 'BK3AcnFdTx0BH-RLhsSkk1hzbiMBnuo2MYqZ-1m8KZzcBKygRFNTtfEHP2k6sR_9Pi-FuiK5RGGsOhcqT036tU4';
const Home = () => {
        const [txn,setTxn] = useState('');
        const [amount,setAmount] = useState(0);

    const handleNotify=async(e)=>{
        e.preventDefault();
        console.clear();
        console.log('txn is',txn);
        console.log('amount is',amount);
        if('serviceWorker' in navigator){


            Notification.requestPermission().then(function(permission) {
                console.log(permission);
                if(permission === 'denied'){
                    alert('You Have Denied Notification!');
                }else if(permission === 'granted'){
                    alert('You Have Granted notification.');
                }
            })
           console.log('service worker supported in handle notify');
           console.log('Registering service worker .....');
           const register = await navigator.serviceWorker.register('/cached_pages.js');
            console.log('Registering push!!!!!');
        //Register Push
           let subscription = await register.pushManager.subscribe({
            userVisibleOnly:true,
            applicationServerKey:urlBase64ToUint8Array(publicVapidkey)
           })
           console.log('Registered push successfully!!!!!');
            //Send Push Notifications
            console.log('sending push .....');
            let bodydata={subscription:subscription,txn:txn,amount:amount}
            await fetch('http://localhost:6040/subscribe',{
                method:'POST',
                body:JSON.stringify(bodydata),
                headers:{
                    'content-type':'application/json'
                }
            })
            console.log('Push Sent .....');


                }
    }

    const handleChange=(e)=>{
        e.preventDefault();
        if(e.target.id==='txn'){
                setTxn(e.target.value)
        }else if(e.target.id==='amount'){
            setAmount(e.target.value)
        }
       }

       const getNotification=async ()=>{
        console.clear();
        navigator.serviceWorker.register('cached_pages.js');
        var options = { tag : 'user_alerts' };
        navigator.serviceWorker.ready.then(function(registration) {
            registration.getNotifications(options).then(function(notifications) {
            console.log("notification count is",notifications)
  })
});
    }

    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-8 card" id="card">
                <form id="form" onSubmit={handleNotify}>
                    <div className="form-group">
                        <input onChange={handleChange} name="txn" type="text" className="form-control" id="txn" required/>
                    </div>
                    <div className="form-group">
                        <input onChange={handleChange} type="number" name= "amount" className="form-control" id="amount" required/>
                    </div>
                    <button className="btn btn-outline-primary">Notify Me</button>
                </form>
                <button
                onClick={getNotification}
                style={{position:"absolute",width:"100px",top:"400px",left:"315px"}}
                className="btn btn-outline-primary">Get Details</button>
                </div>
            </div>

        </div>
    );
}

export default Home;
