// Example usage of twilio-node with ESM/ES6 import syntax
import twilio, { Twilio, RestException } from "../lib-esm/index.js";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const token = process.env.TWILIO_AUTH_TOKEN;

// Uncomment the following line to specify a custom CA bundle for HTTPS requests:
// process.env.TWILIO_CA_BUNDLE = '/path/to/cert.pem';
// You can also set this as a regular environment variable outside of the code

// Option 1: Use default export (convenience function)
const client = twilio(accountSid, token);

// Option 2: Use named export (Twilio class)
// const client = new Twilio(accountSid, token);

let i = 0;
// Callback as second parameter
client.calls.each({
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
client.calls.each(function (call) {
  console.log(call.sid);
});

const from = process.env.FROM_NUMBER;
const to = process.env.TO_NUMBER;

// Send message using callback with RestException handling
client.messages.create(
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
const promise = client.messages.create({
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

// Using async/await syntax (ESM makes this even more natural)
async function sendMessageAsync() {
  try {
    const message = await client.messages.create({
      from: from,
      to: to,
      body: "create using async/await",
    });
    console.log("Created message using async/await");
    console.log(message.sid);
  } catch (error) {
    if (error instanceof RestException) {
      console.log(`Twilio Error ${error.code}: ${error.message}`);
      console.log(`Status: ${error.status}`);
      console.log(`More info: ${error.moreInfo}`);
    } else {
      console.log("Other error:", error);
    }
  }
}

// Uncomment to run async example
// sendMessageAsync();
