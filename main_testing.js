var _ = require('lodash');
var Twilio = require('./lib');

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

var twilio = new Twilio(accountSid, token);
// var promise = twilio.calls.each({
//     pageSize: 1,
//     callback: function(call) {
//       console.log(call.price);
//     }
// });

//SM04c30e31737243afb40557a52d2302f0

// var promise = twilio.messages.create({
//   from: '+18589354448',
//   to: '+18584618959',
//   body: 'hola'
// }, function(error, result) {
//   console.log("wooottt");
//   console.log(result);
//   console.log(error);
// });

// var promise = twilio.messages('SM04c30e31737243afb40557a52d2302f0').fetch(function(err, result) {
//   console.log('boo yah!');
//   console.log(result.body);
// });
// promise.then(function(data) {
//   console.log('success');
//   console.log(data.body);
// }).catch(function(error) {
//   console.log('error');
//   console.log(error);
// }).done();


twilio.messages.list(function(err, messages) {
  _.each(messages, function(message) {
    console.log(message.sid);
  })
})