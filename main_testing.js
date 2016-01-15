var _ = require('lodash');
var Twilio = require('./lib').Twilio;

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

var twilio = new Twilio(accountSid, token);
console.log(twilio.api.account);

// var promise = twilio.api.account.calls('CA8db1ab523c9141a4e25f8d88e26f0fcd').fetch();

var promise = twilio.trunking.trunks.create({
    friendlyName: 'name2'
});
console.log(promise);

promise.then(function(data) {
  console.log('success');
  console.log(data);
}).catch(function(error) {
  console.log('error');
  console.log(error);
}).done();
