var Twilio = require("../lib");

const clientId = process.env.OAUTH_CLIENT_ID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;
const accountSid = process.env.TWILIO_ACCOUNT_SID;

const clientCredentialProvider = new Twilio.ClientCredentialProviderBuilder()
  .setClientId(clientId)
  .setClientSecret(clientSecret)
  .build();

const client = new Twilio();
client.setCredentialProvider(clientCredentialProvider);
client.setAccountSid(accountSid);

const messageId = "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
client
  .messages(messageId)
  .fetch()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
