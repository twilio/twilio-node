"use strict";
var Twilio = require("../lib");

const clientId = process.env.ORGS_CLIENT_ID;
const clientSecret = process.env.ORGS_CLIENT_SECRET;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const organizationSid = process.env.TWILIO_ORG_SID;

const orgsCredentialProvider = new Twilio.OrgsCredentialProviderBuilder()
  .setClientId(clientId)
  .setClientSecret(clientSecret)
  .build();

const client = new Twilio();
client.setCredentialProvider(orgsCredentialProvider);
client.setAccountSid(accountSid);

client.previewIam
  .organization(organizationSid)
  .accounts.list()
  .then((accounts) => {
    console.log(accounts);
  })
  .catch((error) => {
    console.log(error);
  });

client.previewIam
  .organization(organizationSid)
  .accounts(accountSid)
  .fetch()
  .then((account) => {
    console.log(account);
  })
  .catch((error) => {
    console.log(error);
  });
