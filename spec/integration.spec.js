import twilio from "../src/";

var accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
var token = "token";

describe("twilio", function () {
  it("should set the account sid and auth token", function () {
    var client = twilio(accountSid, token);
    expect(client.username).toBe(accountSid);
    expect(client.password).toBe(token);
    expect(client.accountSid).toBe(accountSid);
  });

  it("should provide list shorthand alias", function () {
    var client = new twilio(accountSid, token);
    expect(client.api.v2010.account.calls.list).toBeTruthy();
    expect(client.api.account.calls.list).toBeTruthy();
    expect(client.calls.list).toBeTruthy();
  });

  it("should provide instance shorthand alias", function () {
    var client = new twilio(accountSid, token);
    expect(client.api.v2010.account.calls("CA123").fetch).toBeTruthy();
    expect(client.api.account.calls("CA123").fetch).toBeTruthy();
    expect(client.calls("CA123").fetch).toBeTruthy();
  });

  it("should provide each for integration", function () {
    var client = new twilio.Twilio(accountSid, token);
    expect(client.api.v2010.account.calls.each).toBeTruthy();
  });

  it("should disable HTTP client auto-retry with exponential backoff by default", function () {
    var client = new twilio.Twilio(accountSid, token);
    expect(client.autoRetry).toBe(false);
    expect(client.httpClient.autoRetry).toBe(false);
  });

  it("should set Twilio and HTTP client auto-retry with exponential backoff properties", function () {
    var client = new twilio.Twilio(accountSid, token, {
      autoRetry: true,
      maxRetries: 5,
    });
    expect(client.autoRetry).toBe(true);
    expect(client.maxRetries).toBe(5);
    expect(client.httpClient.autoRetry).toBe(true);
    expect(client.httpClient.maxRetries).toBe(5);
  });
});
