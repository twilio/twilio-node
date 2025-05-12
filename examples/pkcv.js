"use strict";
var Twilio = require("../lib");
const crypto = require("crypto");

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

// Uncomment the following line to specify a custom CA bundle for HTTPS requests:
// process.env.TWILIO_CA_BUNDLE = '/path/to/cert.pem';
// You can also set this as a regular environment variable outside of the code

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});

var client = new Twilio(accountSid, token);

client.accounts.v1.credentials.publicKey.create({
  friendlyName: "Public Key",
  publicKey: publicKey,
}).then(key => {
  client.newSigningKeys.create().then(signingKey => {
    const validationClient = new Twilio(signingKey.sid, signingKey.secret, {
      accountSid: accountSid,
      validationClient: {
        accountSid: accountSid,
        credentialSid: key.sid,
        signingKey: signingKey.sid,
        privateKey: privateKey,
        algorithm: "PS256",
      },
    });
    validationClient.setAccountSid(accountSid);

    validationClient.messages.list().then((messages) => {
      console.log(messages);
    });
  });
}).catch(err => {
  console.log("Error creating public key: ", err);
});
