import twilio from "../../";
import { MessageListInstanceCreateOptions } from "../../lib/rest/api/v2010/account/message";

const accountSid: string = process.env.TWILIO_ACCOUNT_SID || "";
const token: string = process.env.TWILIO_AUTH_TOKEN || "";

const client = twilio(accountSid, token);

let i: number = 0;
client.calls.each({
  pageSize: 7,
  callback: (call: any, done: any) => {
    console.log(call.sid);
    i++;
    if (i === 10) {
      done();
    }
  },
  done: (err: Error) => {
    console.log("je suis fini");
    console.log(err);
  },
});

client.calls.each({}, (call: any) => {
  console.log(call.sid);
});

const from = process.env.FROM_NUMBER || "";
const to = process.env.TO_NUMBER || "";

const msgData: MessageListInstanceCreateOptions = {
  from,
  to,
  body: "create using callback",
};

// Send message using callback
client.messages.create(msgData, (err: Error, result: any) => {
  console.log("Created message using callback");
  console.log(result.sid);
});

// Send message using promise
const promise = client.messages.create({
  from: from,
  to: to,
  body: "create using promises",
});
promise.then((message: any) => {
  console.log("Created message using promises");
  console.log(message.sid);
});

// Create sip trunk
client.trunking.v1.trunks.create(
  {
    friendlyName: "sip trunking",
  },
  (err: Error, result: any) => {
    console.log("Created trunk with friendly name");
    console.log(result.sid);
    console.log(result.friendlyName);
  }
);

const promiseTrunk = client.trunking.v1.trunks.create({
  friendlyName: "promise trunking",
});
promiseTrunk.then((trunk: any) => {
  console.log("Created trunk with friendly name and promises");
  console.log(trunk.sid);
  console.log(trunk.friendlyName);
});

const trunkSid = "TK7e37e59861c14bb80dde245cfaad5522";

// Fetch trunk sid using callback
client.trunking.v1.trunks(trunkSid).fetch((err: Error, result: any) => {
  console.log("Fetch trunk using callback");
  console.log(result.sid);
});

// Fetch trunk using promise
const promiseTrunk2 = client.trunking.v1.trunks(trunkSid).fetch();
promiseTrunk2.then((trunk: any) => {
  console.log("Fetch trunk using promise");
  console.log(trunk.sid);
});

// Update trunk using callback
client.trunking.v1.trunks(trunkSid).update(
  {
    friendlyName: "callback trunk",
  },
  (err: Error, result: any) => {
    console.log("Updated using callbacks");
    console.log(result.sid);
    console.log(result.friendlyName);
  }
);

// Update trunk using promise
const promiseTrunk3 = client.trunking.v1.trunks(trunkSid).update({
  friendlyName: "promise trunk",
});
promiseTrunk3.then((trunk: any) => {
  console.log("Updated trunk with friendly name and promises");
  console.log(trunk.sid);
  console.log(trunk.friendlyName);
});

// List messages using callbacks
client.messages.list({}, (err: Error, messages: any[]) => {
  console.log("Listing messages using callbacks");
  messages.forEach(function (message: any) {
    console.log(message.sid);
  });
});

// List messages using promises
const promiseMessage = client.messages.list();
promiseMessage.then((messages: any[]) => {
  console.log("Listing messages using promises");
  messages.forEach(function (message: any) {
    console.log(message.sid);
  });
});

const twiml = new twilio.twiml.VoiceResponse();
twiml.dial({}, "+12345678901");
twiml.play("https://demo.twilio.com/docs/classic.mp3");

// Example: Create message with HTTP response info (status code and headers)
// Using createWithHttpInfo to get response headers like rate limits, request IDs
const promiseWithInfo = client.messages.createWithHttpInfo({
  from: from,
  to: to,
  body: "create with HTTP info",
});
promiseWithInfo.then((response: any) => {
  console.log("Created message with HTTP info");
  console.log("Message SID:", response.body.sid);
  console.log("Status Code:", response.statusCode);
  console.log("Response Headers:", response.headers);
  console.log(
    "Rate Limit Remaining:",
    response.headers["x-ratelimit-remaining"]
  );
});

// Example: List messages with HTTP response info
// Using listWithHttpInfo to get first page metadata including rate limits
const promiseListWithInfo = client.messages.listWithHttpInfo({ limit: 5 });
promiseListWithInfo.then((response: any) => {
  console.log("Listed messages with HTTP info");
  console.log("Total messages retrieved:", response.body.length);
  console.log("Status Code:", response.statusCode);
  console.log("Response Headers:", response.headers);
  response.body.forEach(function (message: any) {
    console.log(message.sid);
  });
});
