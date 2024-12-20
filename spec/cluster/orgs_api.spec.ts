jest.setTimeout(15000);

import twilio from "twilio";

const clientId = process.env.TWILIO_ORGS_CLIENT_ID;
const clientSecret = process.env.TWILIO_ORGS_CLIENT_SECRET;
const organizationSid = process.env.TWILIO_ORG_SID;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const userId = process.env.TWILIO_ORGS_USER_ID;

const client = twilio();
const orgsCredentialProvider = new twilio.OrgsCredentialProviderBuilder()
  .setClientId(clientId)
  .setClientSecret(clientSecret)
  .build();
client.setCredentialProvider(orgsCredentialProvider);

test("Should generate access token", () => {
  const noAuthClient = twilio();
  noAuthClient.setCredentialProvider(new twilio.NoAuthCredentialProvider());
  return noAuthClient.previewIam.v1.token
    .create({
      grantType: "client_credentials",
      clientId: clientId,
      clientSecret: clientSecret,
    })
    .then((token) => {
      expect(token).not.toBeNull();
      expect(token.accessToken).not.toBeUndefined();
      expect(token.tokenType).toEqual("Bearer");
      expect(token.expiresIn).toEqual(86400);
    });
});

test("Should list accounts under an organization", () => {
  return client.previewIam
    .organization(organizationSid)
    .accounts.list()
    .then((accounts) => {
      expect(accounts).not.toBeNull();
      expect(accounts).not.toBeUndefined();
      expect(accounts.length).toBeGreaterThanOrEqual(0);
    });
});

test("Should fetch given account", () => {
  return client.previewIam
    .organization(organizationSid)
    .accounts(accountSid)
    .fetch()
    .then((account) => {
      expect(account).not.toBeNull();
      expect(account).not.toBeUndefined();
      expect(account.accountSid).toEqual(accountSid);
    });
});

test("Should list users", () => {
  return client.previewIam
    .organization(organizationSid)
    .users.list()
    .then((users) => {
      expect(users).not.toBeNull();
      expect(users).not.toBeUndefined();
      expect(users.length).toBeGreaterThanOrEqual(0);
    });
});

test("Should fetch given user", () => {
  return client.previewIam
    .organization(organizationSid)
    .users(userId)
    .fetch()
    .then((user) => {
      expect(user).not.toBeNull();
      expect(user).not.toBeUndefined();
      expect(user.id).toEqual(userId);
    });
});

test("Should list role assignments", () => {
  client.previewIam
    .organization(organizationSid)
    .roleAssignments.list({ scope: accountSid })
    .then((roles) => {
      expect(roles).not.toBeNull();
      expect(roles.length).toBeGreaterThanOrEqual(0);
    });
});
