var twilio = require('../lib/index');

describe('twilio', function() {
  var accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  var token = 'token';

  beforeEach(function() {
    this.prevAccountSid = process.env.TWILIO_ACCOUNT_SID;
    this.prevToken = process.env.TWILIO_AUTH_TOKEN;

    process.env.TWILIO_ACCOUNT_SID = accountSid;
    process.env.TWILIO_AUTH_TOKEN = token;
  });

  afterEach(function() {
    process.env.TWILIO_ACCOUNT_SID = this.prevAccountSid;
    process.env.TWILIO_AUTH_TOKEN = this.prevToken;
  });

  it('should allow shorthand client constructor', function() {
    var client = new twilio();
    expect(client).toBeTruthy();
    expect(client.username).toBe(accountSid);
    expect(client.password).toBe(token);
    expect(client.accountSid).toBe(accountSid);

    client = twilio(accountSid, token);
    expect(client.username).toBe(accountSid);
    expect(client.password).toBe(token);
    expect(client.accountSid).toBe(accountSid);
  });

  it('should provide list shorthand alias', function() {
    var client = new twilio(accountSid, token);
    expect(client.api.v2010.account.calls.list).toBeTruthy();
    expect(client.api.account.calls.list).toBeTruthy();
    expect(client.account.calls.list).toBeTruthy();
    expect(client.calls.list).toBeTruthy();
  });

  it('should provide instance shorthand alias', function() {
    var client = new twilio(accountSid, token);
    expect(client.api.v2010.account.calls('CA123').fetch).toBeTruthy();
    expect(client.api.account.calls('CA123').fetch).toBeTruthy();
    expect(client.account.calls('CA123').fetch).toBeTruthy();
    expect(client.calls('CA123').fetch).toBeTruthy();
  });

  it('should provide each for interation', function() {
    var client = new twilio.Twilio(accountSid, token);
    expect(client.api.v2010.account.calls.each).toBeTruthy();
  });
});
