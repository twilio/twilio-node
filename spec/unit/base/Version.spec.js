import Version from "../../../lib/base/Version";
import Holodeck from "../../integration/holodeck";
import Response from "../../../lib/http/response";
import Twilio from "../../../lib";

describe("fetch method", function () {
  it("should not throw an exception on 3xx status code", function (done) {
    const body = { test: true };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 307, body }),
      },
      {}
    );

    version.fetch({}).then((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(body);
      done();
    });
  });

  it("should throw an exception if status code >= 400", function (done) {
    const body = { message: "invalid body" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 400, body }),
      },
      null
    );

    version.fetch({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(400);
      expect(error.message).toEqual(body.message);
      done();
    });
  });
});

describe("streaming results", function () {
  let holodeck;
  let client;
  const bodyOne = {
    next_page_uri: "/2010-04-01/Accounts/AC123/Messages.json?Page=1",
    messages: [{ body: "payload0" }, { body: "payload1" }],
  };
  const bodyTwo = {
    next_page_uri: "/2010-04-01/Accounts/AC123/Messages.json?Page=2",
    messages: [{ body: "payload2" }, { body: "payload3" }],
  };
  const bodyThree = {
    next_page_uri: null,
    messages: [{ body: "payload4" }],
  };

  beforeEach(function () {
    holodeck = new Holodeck();
    client = new Twilio("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "AUTHTOKEN", {
      httpClient: holodeck,
    });
  });

  it("streams all results", function (done) {
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));
    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.list()
      .then((messages) => {
        expect(messages.length).toEqual(5);
      });
    done();
  });

  it("limits results", function (done) {
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));
    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.list({ limit: 3 })
      .then((messages) => {
        expect(messages.length).toEqual(3);
      });
    done();
  });
});

describe("each method",  () => {
  it("done should only be called once", async () => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID || "";
    const token = process.env.TWILIO_AUTH_TOKEN || "";
    const client = new Twilio(accountSid, token);
    const mockDone = jest.fn(console.debug.bind(null, "done!"));

    client.api.v2010.accounts.each({
      callback: (account, done) => {
        done();
      },
      done: mockDone
    });

    // Sleep to allow async work to complete
    await new Promise(r => setTimeout(r, 2000));

    expect(mockDone.mock.calls.length).toBe(1);
  });
});
