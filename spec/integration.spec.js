import twilio from "../src/";
import nock from "nock";
import { jest } from "@jest/globals";

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

  describe("logging", function () {
    let consoleSpy;

    beforeEach(() => {
      consoleSpy = jest.spyOn(console, "log").mockImplementation();
    });

    afterEach(() => {
      consoleSpy.mockRestore();
    });

    it("should use the log-level during http requests", async function () {
      const scope = nock("https://api.twilio.com")
        .get(`/2010-04-01/Accounts/${accountSid}/Messages.json?PageSize=1`)
        .reply(200, {
          first_page_uri: `/2010-04-01/Accounts/${accountSid}/Usage/Records/Daily.json?Category=sms-outbound&PageSize=1&Page=0`,
          end: 0,
          previous_page_uri: null,
          uri: "/2010-04-01/Accounts/${accountSid}/Usage/Records/Daily.json?Category=sms-outbound&PageSize=1&Page=0",
          page_size: 1,
          start: 0,
          usage_records: [],
          next_page_uri: null,
          page: 0
        });

      const client = new twilio.Twilio(accountSid, token, {
        logLevel: "debug",
      });

      await client.messages.list({ limit: 1 });
      expect(consoleSpy.mock.calls.map((a) => a[0]).join("\n")).toBe(
        "-- BEGIN Twilio API Request --\n" +
        `get https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json\n` +
        "Querystring:\n" +
        "[object Object]\n" +
        "Headers:\n" +
        "Accept: undefined\n" +
        "User-Agent: undefined\n" +
        "Accept-Charset: undefined\n" +
        "Connection: undefined\n" +
        "-- END Twilio API Request --\n" +
        "response.statusCode: 200\n" +
        'response.headers: {"content-type":"application/json"}'
        );
      scope.done();
    });
  });
});
