var _ = require('lodash');
var Twilio = require('../lib');

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

// var twilio = Twilio(accountSid, token);

// twilio.notifications.v1.services.create({
//   'FriendlyName': 'Alice'
// }, function(err, data) {
//   console.log(data.friendlyName);
// })



console.log(Twilio.TwimlResponse.message());


