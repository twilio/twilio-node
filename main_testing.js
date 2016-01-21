var _ = require('lodash');
var Twilio = require('./lib').Twilio;

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

var twilio = new Twilio(accountSid, token);
var promise = twilio.api.account.calls.list({
    pageSize: 1
});

//var promise = twilio.trunking.trunks.get('TK5c8d9c98df850dbf7b1066fefbcabd0c').remove();

promise.then(function(data) {
  console.log('success');
  console.log(_.map(data, function(call) {
    return call.sid;
  }));
}).catch(function(error) {
  console.log('error');
  console.log(error);
}).done();
