var _ = require('lodash');
var Twilio = require('./lib');

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

var twilio = new Twilio(accountSid, token);
var promise = twilio.calls.each({
    pageSize: 1,
    callback: function(call) {
      console.log(call.price);
    }
});

promise.then(function(data) {
  console.log('success');
  // console.log(data)
}).catch(function(error) {
  console.log('error');
  console.log(error);
}).done();
