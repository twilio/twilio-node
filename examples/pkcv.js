"use strict";
var Twilio = require("../lib");
const crypto = require("crypto");

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

// Uncomment the following line to specify a custom CA bundle for HTTPS requests:
// process.env.TWILIO_CA_BUNDLE = '/path/to/cert.pem';
// You can also set this as a regular environment variable outside of the code

// Generate public and private key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});

// Create a default rest client
var client = new Twilio(accountSid, token);

// Submit the public key using the default client
client.accounts.v1.credentials.publicKey
  .create({
    friendlyName: "Public Key",
    publicKey: publicKey,
  })
  .then((key) => {
    // Create a new signing key using the default client
    client.newSigningKeys.create().then((signingKey) => {
      // Switch to the Validation Client to validate API calls
      const validationClient = new Twilio(signingKey.sid, signingKey.secret, {
        accountSid: accountSid,
        validationClient: {
          accountSid: accountSid,
          credentialSid: key.sid,
          signingKey: signingKey.sid,
          privateKey: privateKey,
          algorithm: "PS256",  // Validation client supports RS256 or PS256 algorithm. Default is RS256.
        },
      });
      validationClient.setAccountSid(accountSid);

      validationClient.messages.list({
        to: "+919667177192",
      }).then((messages) => {
        console.log(messages);
      }).catch((err) => {
        console.log("Error making API request: ", err);
      });
    });
  })
  .catch((err) => {
    console.log("Error creating public key: ", err);
  });
