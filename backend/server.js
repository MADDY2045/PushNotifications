const express = require('express');
const webpush = require('web-push');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

//set static path
app.use(express.static(path.join(__dirname,'client')));
app.use(bodyparser.json());
const publicVapidkey = 'BG6F38fMqLk0D_EnRdrDVAVPS9CaAGJV0RRhl2FzHJEAVqs1MPFAgtjc4ust9ZJ8mPYP5NhABruDtHlMapyBSSM';

const privatekey = 'CNwbCdmDgzpPxmffeBLZ5U9YCmdQmgnELsFMHoordUE';

webpush.setVapidDetails('mailto:madhavaneee08@gmail.com',publicVapidkey,privatekey);

//subscribe route
app.post('/subscribe',(req,res)=>{
    //get pushsubscription oject
    const subscription = req.body;
    //send 201 - resource created
    res.status(201).send("received");

    //create payload
    const payload = JSON.stringify({title : "push test"});

    //pass object into sendNotification
    webpush.sendNotification(subscription,payload).catch(err=>console.log(err));

})

const port = 6010;

app.listen(port,()=>console.log(`app is listening on ${port}`));