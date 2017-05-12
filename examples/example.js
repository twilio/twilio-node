'use strict';

var _ = require('lodash');
var Twilio = require('../lib');

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = 'foobar'; //process.env.TWILIO_AUTH_TOKEN;

var twilio = new Twilio(accountSid, token);

// Send message using promise
var promise = twilio.messages.create({
  from: '+16508894546',
  to: '+18584618959',
  mediaUrl: [
    'http://tbbl.ca/wp-content/uploads/2015/10/Toronto_Raptors.svg_.png',
    'http://tsnimages.tsn.ca/ImageProvider/TeamLogo?seoId=toronto-raptors&width=620&height=620'
  ]
});
promise.then(function(message) {
  console.log('Created message using promises');
  console.log(message.sid);
});
promise.catch(function(error) {
  console.log(error);
});

