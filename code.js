

const accountSid = process.env.TWILIO_ACCOUNT_SID;

const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);


client.serverless.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

.environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

.logs

.list({

startDate:
new 
Date('January 30, 2021 01:00:00'),

limit:
20})

.then(logs
=> 
logs.forEach(l
=> 
console.log(l.sid)));
