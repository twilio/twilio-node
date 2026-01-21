var Twilio = require("../lib");
var { RestException } = require("../lib");

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

// Uncomment the following line to specify a custom CA bundle for HTTPS requests:
// process.env.TWILIO_CA_BUNDLE = '/path/to/cert.pem';
// You can also set this as a regular environment variable outside of the code

var twilio = new Twilio(accountSid, token);

var i = 0;
// Callback as second parameter
twilio.calls.each({
  pageSize: 7,
  callback: function (call, done) {
    console.log(call.sid);
    i++;
    if (i === 10) {
      done();
    }
  },
  done: function (error) {
    console.log("je suis fini");
    console.log(error);
  },
});

// Callback as first parameter
twilio.calls.each(function (call) {
  console.log(call.sid);
});

var from = process.env.FROM_NUMBER;
var to = process.env.TO_NUMBER;

// Send message using callback with RestException handling
twilio.messages.create(
  {
    from: from,
    to: to,
    body: "create using callback",
  },
  function (err, result) {
    if (err) {
      if (err instanceof RestException) {
        console.log(`Twilio Error ${err.code}: ${err.message}`);
        console.log(`Status: ${err.status}`);
        console.log(`More info: ${err.moreInfo}`);
      } else {
        console.log("Other error:", err);
      }
      return;
    }
    console.log("Created message using callback");
    console.log(result.sid);
  }
);

// Send message using promise with RestException handling
var promise = twilio.messages.create({
  from: from,
  to: to,
  body: "create using promises",
});
promise
  .then(function (message) {
    console.log("Created message using promises");
    console.log(message.sid);
  })
  .catch(function (error) {
    if (error instanceof RestException) {
      console.log(`Twilio Error ${error.code}: ${error.message}`);
      console.log(`Status: ${error.status}`);
      console.log(`More info: ${error.moreInfo}`);
    } else {
      console.log("Other error:", error);
    }
  });

// Create sip trunk using callback as first parameter
twilio.trunking.v1.trunks.create(function (err, result) {
  console.log("Created default trunk");
  console.log(result.sid);
});

// Create sip trunk using callback as second parameter
twilio.trunking.v1.trunks.create(
  {
    friendlyName: "sip trunking",
  },
  function (err, result) {
    console.log("Created trunk with friendly name");
    console.log(result.sid);
    console.log(result.friendlyName);
  }
);

promise = twilio.trunking.v1.trunks.create({
  friendlyName: "promise trunking",
});
promise.then(function (trunk) {
  console.log("Created trunk with friendly name and promises");
  console.log(trunk.sid);
  console.log(trunk.friendlyName);
});

var trunkSid = "TK7e37e59861c14bb80dde245cfaad5522";

// Fetch trunk sid using callback
twilio.trunking.v1.trunks(trunkSid).fetch(function (err, result) {
  console.log("Fetch trunk using callback");
  console.log(result.sid);
});

// Fetch trunk using promise
promise = twilio.trunking.v1.trunks(trunkSid).fetch();
promise.then(function (trunk) {
  console.log("Fetch trunk using promise");
  console.log(trunk.sid);
});

// Update trunk using callback
twilio.trunking.v1.trunks(trunkSid).update(
  {
    friendlyName: "callback trunk",
  },
  function (err, result) {
    console.log("Updated using callbacks");
    console.log(result.sid);
    console.log(result.friendlyName);
  }
);

// Update trunk using promise
promise = twilio.trunking.v1.trunks(trunkSid).update({
  friendlyName: "promise trunk",
});
promise.then(function (trunk) {
  console.log("Updated trunk with friendly name and promises");
  console.log(trunk.sid);
  console.log(trunk.friendlyName);
});

// List messages using callbacks
twilio.messages.list(function (err, messages) {
  console.log("Listing messages using callbacks");
  messages.forEach(function (message) {
    console.log(message.sid);
  });
});

// List messages using promises
promise = twilio.messages.list();
promise.then(function (messages) {
  console.log("Listing messages using promises");
  messages.forEach(function (message) {
    console.log(message.sid);
  });
});

// Example: Create message with HTTP response info (status code and headers)
// Using createWithHttpInfo to get response headers like rate limits, request IDs
promise = twilio.messages.createWithHttpInfo({
  from: from,
  to: to,
  body: "create with HTTP info",
});
promise.then(function (response) {
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
promise = twilio.messages.listWithHttpInfo({ limit: 5 });
promise.then(function (response) {
  console.log("Listed messages with HTTP info");
  console.log("Total messages retrieved:", response.body.length);
  console.log("Status Code:", response.statusCode);
  console.log("Response Headers:", response.headers);
  response.body.forEach(function (message) {
    console.log(message.sid);
  });
});
