var _ = require('lodash');
var Twilio = require('../lib');

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

var twilio = new Twilio(accountSid, token);

var i = 0;
// Callback as second parameter
var promise = twilio.calls.each({
  pageSize: 7,
  callback: function(call, done) {
    console.log(call.sid);
    i++;
    if (i == 10) {
      done();
    }
  },
  done: function(error) {
    console.log('je suis fini');
    console.log(error);
  }
})

// Callback as first parameter
twilio.calls.each(function(call, done) {
  console.log(call.sid);
});

var from = process.env.FROM_NUMBER;
var to = process.env.TO_NUMBER;

// Send message using callback
twilio.messages.create({
  from: from,
  to: to,
  body: 'create using callback'
}, function(err, result) {
  console.log('Created message using callback');
  console.log(result.sid);
})

// Send message using promise
var promise = twilio.messages.create({
  from: from,
  to: to,
  body: 'create using promises'
});
promise.then(function(message) {
  console.log('Created message using promises');
  console.log(message.sid);
});


// Create sip trunk using callback as first parameter
twilio.trunking.v1.trunks.create(function(err, result) {
  console.log('Created default trunk');
  console.log(result.sid);
});

// Create sip trunk using callback as second parameter
twilio.trunking.v1.trunks.create({
  friendlyName: 'sip trunking'
}, function(err, result) {
  console.log('Created trunk with friendly name');
  console.log(result.sid);
  console.log(result.friendlyName);
});

promise = twilio.trunking.v1.trunks.create({
  friendlyName: 'promise trunking'
});
promise.then(function(trunk) {
  console.log('Created trunk with friendly name and promises');
  console.log(trunk.sid);
  console.log(trunk.friendlyName);
});

var trunkSid = 'TK7e37e59861c14bb80dde245cfaad5522';

// Fetch trunk sid using callback
twilio.trunking.v1.trunks(trunkSid).fetch(function(err, result) {
  console.log('Fetch trunk using callback');
  console.log(result.sid);
});

// Fetch trunk using promise
promise = twilio.trunking.v1.trunks(trunkSid).fetch();
promise.then(function(trunk) {
  console.log('Fetch trunk using promise');
  console.log(trunk.sid);
});

// Update trunk using callback
twilio.trunking.v1.trunks(trunkSid).update({
  friendlyName: 'callback trunk'
}, function(err, result) {
  console.log('Updated using callbacks');
  console.log(result.sid);
  console.log(result.friendlyName);
});

// Update trunk using promise
promise = twilio.trunking.v1.trunks(trunkSid).update({
  friendlyName: 'promise trunk'
});
promise.then(function(trunk) {
  console.log('Updated trunk with friendly name and promises');
  console.log(trunk.sid);
  console.log(trunk.friendlyName);
});

// List messages using callbacks
twilio.messages.list(function(err, messages) {
  console.log('Listing messages using callbacks');
  _.each(messages, function(message) {
    console.log(message.sid);
  })
});

// List mesages using promises
promise = twilio.messages.list();
promise.then(function(messages) {
  console.log('Listing messages using promises');
  _.each(messages, function(message) {
    console.log(message.sid);
  })
});
