import * as _ from 'lodash';
import twilio = require('../../');
import { MessageListCreateOptions } from '../../lib/rest/api/v2010/account/message';

const accountSid: string = process.env.TWILIO_ACCOUNT_SID || '';
const token: string = process.env.TWILIO_AUTH_TOKEN || '';

const client = twilio(accountSid, token);

let i: number = 0;
client.calls.each({
  pageSize: 7,
  callback: (call, done) => {
    console.log(call.sid);
    i++;
    if (i === 10) {
      done();
    }
  },
  done: err => {
    console.log('je suis fini');
    console.log(err);
  }
});

client.calls.each(call => {
  console.log(call.sid);
});

const from = process.env.FROM_NUMBER || '';
const to = process.env.TO_NUMBER || '';

const msgData: MessageListCreateOptions = {
  from,
  to,
  body: 'create using callback'
}

// Send message using callback
client.messages.create(msgData,
  (err, result) => {
    console.log('Created message using callback');
    console.log(result.sid);
  }
);

// Send message using promise
const promise = client.messages.create({
  from: from,
  to: to,
  body: 'create using promises'
});
promise.then(function(message) {
  console.log('Created message using promises');
  console.log(message.sid);
});

// Create sip trunk using callback as first parameter
client.trunking.v1.trunks.create(function(err, result) {
  console.log('Created default trunk');
  console.log(result.sid);
});

// Create sip trunk using callback as second parameter
client.trunking.v1.trunks.create(
  {
    friendlyName: 'sip trunking'
  },
  function(err, result) {
    console.log('Created trunk with friendly name');
    console.log(result.sid);
    console.log(result.friendlyName);
  }
);

const promiseTrunk = client.trunking.v1.trunks.create({
  friendlyName: 'promise trunking'
});
promiseTrunk.then(function(trunk) {
  console.log('Created trunk with friendly name and promises');
  console.log(trunk.sid);
  console.log(trunk.friendlyName);
});

const trunkSid = 'TK7e37e59861c14bb80dde245cfaad5522';

// Fetch trunk sid using callback
client.trunking.v1.trunks(trunkSid).fetch(function(err, result) {
  console.log('Fetch trunk using callback');
  console.log(result.sid);
});

// Fetch trunk using promise
const promiseTrunk2 = client.trunking.v1.trunks(trunkSid).fetch();
promiseTrunk2.then(function(trunk) {
  console.log('Fetch trunk using promise');
  console.log(trunk.sid);
});

// Update trunk using callback
client.trunking.v1.trunks(trunkSid).update(
  {
    friendlyName: 'callback trunk'
  },
  function(err, result) {
    console.log('Updated using callbacks');
    console.log(result.sid);
    console.log(result.friendlyName);
  }
);

// Update trunk using promise
const promiseTrunk3 = client.trunking.v1.trunks(trunkSid).update({
  friendlyName: 'promise trunk'
});
promiseTrunk3.then(function(trunk) {
  console.log('Updated trunk with friendly name and promises');
  console.log(trunk.sid);
  console.log(trunk.friendlyName);
});

// List messages using callbacks
client.messages.list(function(err, messages) {
  console.log('Listing messages using callbacks');
  _.each(messages, function(message) {
    console.log(message.sid);
  });
});

// List messages using promises
const promiseMessage = client.messages.list();
promiseMessage.then(function(messages) {
  console.log('Listing messages using promises');
  _.each(messages, function(message) {
    console.log(message.sid);
  });
});

const twiml = new twilio.twiml.VoiceResponse();
twiml.dial({})