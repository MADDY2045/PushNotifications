const express = require('express');
const app = express();
const webpush = require('web-push');
const cors = require('cors');

app.use(express.json());
app.use(cors());
const port = 6040;

const publicVapidkey = 'BK3AcnFdTx0BH-RLhsSkk1hzbiMBnuo2MYqZ-1m8KZzcBKygRFNTtfEHP2k6sR_9Pi-FuiK5RGGsOhcqT036tU4';
const privateVapidkey = 'jpKrpXh8Fcz3jbqNYBVgG5SwTWL51vyIW1vuYpegut8';

webpush.setVapidDetails('mailto:madhavan@growsmartsmb.com',publicVapidkey,privateVapidkey);

//subscribe route

app.post('/subscribe',(req,res)=>{
    //assign subscription
const subscription = req.body;

//send status
res.status(201).send("received");

//create payload
const payload = JSON.stringify({name:"Madhavan Sankaran"});

//pass object to send notification
webpush.sendNotification(subscription,payload).catch(err=>console.log(`err in sending notification ${err}`));

})

app.listen(port,()=>console.log(`app is listening on ${port}`));