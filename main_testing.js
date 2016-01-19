var _ = require('lodash');
var Twilio = require('./lib').Twilio;

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

var twilio = new Twilio(accountSid, token);
console.log(twilio.api.account);

var promise = twilio.api.account.calls.list();

// var promise = twilio.trunking.trunks('TKa321d93fceb1b1e2f816c34de1d18454').remove();
console.log(promise);

promise.then(function(data) {
  console.log('success');
  console.log(data);
}).catch(function(error) {
  console.log('error');
  console.log(error);
}).done();
