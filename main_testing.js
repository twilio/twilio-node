var _ = require('lodash');
var Twilio = require('./lib').Twilio;

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

var twilio = new Twilio(accountSid, token);
var promise = twilio.api.account.calls('CA123');
console.log(promise);

promise.then(function(data) {
  console.log(data);
}).catch(function(error) {
  console.log(error);
}).done();
