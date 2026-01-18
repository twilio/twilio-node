import Version from "../../../src/base/Version";
import Holodeck from "../../integration/holodeck";
import Response from "../../../src/http/response";
import Twilio from "../../../src";

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

describe("patch method", function () {
  it("should parse JSON string response body for patch", function (done) {
    const body = { test: true, patched: true };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({ statusCode: 200, body: JSON.stringify(body) }),
      },
      {}
    );

    version.patch({}).then((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(body);
      done();
    });
  });

  it("should throw an exception if status code >= 300", function (done) {
    const body = { message: "invalid body" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 400, body }),
      },
      null
    );

    version.patch({}).catch((error) => {
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

describe("done should only be called once in each", () => {
  let holodeck;
  let client;
  let body;

  beforeEach(function () {
    holodeck = new Holodeck();
    client = new Twilio("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "AUTHTOKEN", {
      httpClient: holodeck,
    });
    body = {
      end: 0,
      first_page_uri:
        "/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?FriendlyName=friendly_name&Beta=true&PhoneNumber=%2B19876543210&PageSize=1&Page=0",
      incoming_phone_numbers: [{}],
      next_page_uri:
        "/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?FriendlyName=friendly_name&Beta=true&PhoneNumber=%2B19876543210&PageSize=1&Page=1",
      page: 0,
      page_size: 1,
      previous_page_uri: null,
      start: 0,
      uri: "/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?FriendlyName=friendly_name&Beta=true&PhoneNumber=%2B19876543210&PageSize=1&Page=0",
    };
  });

  it("done is explicitly called", async () => {
    holodeck.mock(new Response(200, body));
    holodeck.mock(new Response(200, body));
    const mockDone = jest.fn(console.debug.bind(null, "done!"));
    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .incomingPhoneNumbers.each({
        limit: 1,
        callback: (account, done) => {
          done();
        },
        done: mockDone,
      });

    // Sleep to allow async work to complete
    await new Promise((r) => setTimeout(r, 2000));

    expect(mockDone.mock.calls.length).toBe(1);
  });

  it("done is not explicitly called", async () => {
    holodeck.mock(new Response(200, body));
    holodeck.mock(new Response(200, body));
    const mockDone = jest.fn(console.debug.bind(null, "done!"));
    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .incomingPhoneNumbers.each({
        limit: 1,
        callback: (account, done) => {
          console.log();
        },
        done: mockDone,
      });

    // Sleep to allow async work to complete
    await new Promise((r) => setTimeout(r, 2000));

    expect(mockDone.mock.calls.length).toBe(1);
  });
});

describe("each method", function () {
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

  it("should call user callback foreach resource instance", function (done) {
    let mockCallback = jest.fn();
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        done: () => {
          expect(mockCallback).toHaveBeenCalledTimes(5);
          expect(mockCallback.mock.calls[0][0].body).toBe("payload0");
          expect(mockCallback.mock.calls[1][0].body).toBe("payload1");
          expect(mockCallback.mock.calls[2][0].body).toBe("payload2");
          expect(mockCallback.mock.calls[3][0].body).toBe("payload3");
          expect(mockCallback.mock.calls[4][0].body).toBe("payload4");
          done();
        },
        callback: mockCallback,
      });
  });

  it("should call user callback with a done function argument", function (done) {
    let mockCallback = jest.fn();
    holodeck.mock(new Response(200, bodyOne));

    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        limit: 1,
        done: () => {
          expect(mockCallback).toHaveBeenCalledTimes(1);
          expect(mockCallback.mock.calls[0][1]).toBeInstanceOf(Function);
          done();
        },
        callback: mockCallback,
      });
  });

  it("should call user done with an error if user callback throws an error", function (done) {
    let mockError = new Error("An error occurred.");
    let mockCallback = jest.fn(() => {
      throw mockError;
    });
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        limit: 3,
        done: (error) => {
          expect(mockCallback).toHaveBeenCalledTimes(1);
          expect(error).toBe(mockError);
          done();
        },
        callback: mockCallback,
      });
  });

  it("should resolve promise after looping through each resource instance", function (done) {
    let mockCallback = jest.fn();
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        callback: mockCallback,
      })
      .then(() => {
        expect(mockCallback).toHaveBeenCalledTimes(5);
        done();
      });
  });

  it("should resolve promise if an error occurs and user done function executes successfully", function (done) {
    let mockCallback = jest.fn(() => {
      throw new Error("An error occurred.");
    });
    let mockDone = jest.fn();
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        limit: 3,
        callback: mockCallback,
        done: mockDone,
      })
      .then(() => {
        expect(mockDone).toHaveBeenCalledTimes(1);
        done();
      });
  });

  it("should reject promise with error if an error occurs and user done function is not provided", function (done) {
    let mockError = new Error("An error occurred.");
    let mockCallback = jest.fn(() => {
      throw mockError;
    });
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        limit: 3,
        callback: mockCallback,
      })
      .catch((e) => {
        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(e).toBe(mockError);
        done();
      });
  });

  it("should reject promise with error if an error occurs in user done function", function (done) {
    let mockCallback = jest.fn(() => {
      throw new Error("An error occurred in callback fn.");
    });
    let mockError = new Error("An error occurred in done fn.");
    let mockDone = jest.fn((error) => {
      throw mockError;
    });
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        limit: 3,
        callback: mockCallback,
        done: mockDone,
      })
      .catch((e) => {
        expect(mockDone).toHaveBeenCalledTimes(1);
        expect(e).toBe(mockError);
        done();
      });
  });

  it("should short-circuit foreach loop if user callback done argument is called", function (done) {
    let mockCallback = jest.fn((instance, done) => {
      done();
    });
    let mockDone = jest.fn();
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        limit: 3,
        callback: mockCallback,
        done: mockDone,
      })
      .then(() => {
        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(mockDone).toHaveBeenCalledTimes(1);
        done();
      });
  });

  it("should short-circuit foreach loop and pass an error if user callback done argument is called with an error", function (done) {
    let mockError = new Error("An error occurred.");
    let mockCallback = jest.fn((instance, done) => {
      done(mockError);
    });
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        limit: 3,
        callback: mockCallback,
        done: (error) => {
          expect(mockCallback).toHaveBeenCalledTimes(1);
          expect(error).toBe(mockError);
          done();
        },
      });
  });
});

describe("remove method", function () {
  const body = { message: "Resource deleted" };

  // Test all 2XX status codes
  const successStatusCodes = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];

  successStatusCodes.forEach((statusCode) => {
    it(`should return true for ${statusCode} status code`, function (done) {
      const version = new Version(
        {
          request: () => Promise.resolve({ statusCode, body }),
        },
        {}
      );

      version.remove({}).then((response) => {
        expect(response).toBeDefined();
        expect(response).toBe(true);
        done();
      });
    });
  });

  it("should throw an exception for status code < 200", function (done) {
    const errorBody = { message: "Invalid request" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 199, body: errorBody }),
      },
      null
    );

    version.remove({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(199);
      expect(error.message).toEqual(errorBody.message);
      done();
    });
  });

  it("should throw an exception for status code >= 300", function (done) {
    const errorBody = { message: "Resource not found" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 404, body: errorBody }),
      },
      null
    );

    version.remove({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(404);
      expect(error.message).toEqual(errorBody.message);
      done();
    });
  });

  it("should throw an exception for 5xx status code", function (done) {
    const errorBody = { message: "Internal server error" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 500, body: errorBody }),
      },
      null
    );

    version.remove({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(500);
      expect(error.message).toEqual(errorBody.message);
      done();
    });
  });
});

describe("createWithResponseInfo method", function () {
  it("should return ApiResponse with body, statusCode, and headers on success", function (done) {
    const body = { id: "12345", name: "test resource" };
    const headers = { "x-request-id": "abc123", "x-ratelimit-remaining": "99" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 201, body, headers }),
      },
      {}
    );

    version.createWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(201);
      expect(response.headers).toEqual(headers);
      done();
    });
  });

  it("should parse JSON string response body", function (done) {
    const body = { id: "12345", name: "test resource" };
    const headers = { "x-request-id": "abc123" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 201,
            body: JSON.stringify(body),
            headers,
          }),
      },
      {}
    );

    version.createWithResponseInfo({}).then((response) => {
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(201);
      expect(response.headers).toEqual(headers);
      done();
    });
  });

  it("should throw exception for non-2xx status codes", function (done) {
    const errorBody = { message: "Bad request" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 400, body: errorBody }),
      },
      null
    );

    version.createWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(400);
      expect(error.message).toEqual(errorBody.message);
      done();
    });
  });

  it("should handle empty headers", function (done) {
    const body = { id: "12345", name: "test resource" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 201, body, headers: {} }),
      },
      {}
    );

    version.createWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(201);
      expect(response.headers).toEqual({});
      done();
    });
  });

  it("should handle undefined headers", function (done) {
    const body = { id: "12345", name: "test resource" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 201, body }),
      },
      {}
    );

    version.createWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(201);
      expect(response.headers).toBeUndefined();
      done();
    });
  });
});

describe("fetchWithResponseInfo method", function () {
  it("should return ApiResponse with body, statusCode, and headers", function (done) {
    const body = { id: "12345", status: "active" };
    const headers = { "x-request-id": "xyz789", "x-ratelimit-limit": "1000" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers }),
      },
      {}
    );

    version.fetchWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);
      done();
    });
  });

  it("should handle 3xx status codes successfully", function (done) {
    const body = { id: "12345", redirected: true };
    const headers = { location: "https://api.twilio.com/new-location" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 307, body, headers }),
      },
      {}
    );

    version.fetchWithResponseInfo({}).then((response) => {
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(307);
      expect(response.headers).toEqual(headers);
      done();
    });
  });

  it("should throw exception for status code >= 400", function (done) {
    const errorBody = { message: "Not found" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 404, body: errorBody }),
      },
      null
    );

    version.fetchWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(404);
      expect(error.message).toEqual(errorBody.message);
      done();
    });
  });

  it("should handle empty headers", function (done) {
    const body = { id: "12345", status: "active" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers: {} }),
      },
      {}
    );

    version.fetchWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual({});
      done();
    });
  });
});

describe("updateWithResponseInfo method", function () {
  it("should return ApiResponse with updated resource", function (done) {
    const body = { id: "12345", name: "updated resource" };
    const headers = { "x-request-id": "update123" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers }),
      },
      {}
    );

    version.updateWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);
      done();
    });
  });

  it("should parse JSON string response body", function (done) {
    const body = { id: "12345", updated: true };
    const headers = { "content-type": "application/json" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            body: JSON.stringify(body),
            headers,
          }),
      },
      {}
    );

    version.updateWithResponseInfo({}).then((response) => {
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it("should throw exception for non-2xx status codes", function (done) {
    const errorBody = { message: "Forbidden" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 403, body: errorBody }),
      },
      null
    );

    version.updateWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(403);
      expect(error.message).toEqual(errorBody.message);
      done();
    });
  });

  it("should handle empty headers", function (done) {
    const body = { id: "12345", updated: true };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers: {} }),
      },
      {}
    );

    version.updateWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual({});
      done();
    });
  });
});

describe("patchWithResponseInfo method", function () {
  it("should return ApiResponse with patched resource", function (done) {
    const body = { id: "12345", patched: true };
    const headers = { "x-request-id": "patch123" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers }),
      },
      {}
    );

    version.patchWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);
      done();
    });
  });

  it("should parse JSON string response body", function (done) {
    const body = { id: "12345", field: "new value" };
    const headers = { "x-request-id": "patch456" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            body: JSON.stringify(body),
            headers,
          }),
      },
      {}
    );

    version.patchWithResponseInfo({}).then((response) => {
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);
      done();
    });
  });

  it("should throw exception for non-2xx status codes", function (done) {
    const errorBody = { message: "Unprocessable Entity" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 422, body: errorBody }),
      },
      null
    );

    version.patchWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(422);
      expect(error.message).toEqual(errorBody.message);
      done();
    });
  });

  it("should handle empty headers", function (done) {
    const body = { id: "12345", patched: true };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers: {} }),
      },
      {}
    );

    version.patchWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual({});
      done();
    });
  });
});

describe("removeWithResponseInfo method", function () {
  it("should return ApiResponse with true body for successful deletion", function (done) {
    const headers = { "x-request-id": "delete123" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 204, body: "", headers }),
      },
      {}
    );

    version.removeWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toBe(true);
      expect(response.statusCode).toEqual(204);
      expect(response.headers).toEqual(headers);
      done();
    });
  });

  // Test all 2XX status codes
  const successStatusCodes = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];

  successStatusCodes.forEach((statusCode) => {
    it(`should return ApiResponse with true body for ${statusCode} status code`, function (done) {
      const headers = { "x-request-id": `delete-${statusCode}` };
      const version = new Version(
        {
          request: () => Promise.resolve({ statusCode, body: {}, headers }),
        },
        {}
      );

      version.removeWithResponseInfo({}).then((response) => {
        expect(response.body).toBe(true);
        expect(response.statusCode).toEqual(statusCode);
        expect(response.headers).toEqual(headers);
        done();
      });
    });
  });

  it("should throw exception for status code >= 300", function (done) {
    const errorBody = { message: "Resource not found" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 404, body: errorBody }),
      },
      null
    );

    version.removeWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(404);
      expect(error.message).toEqual(errorBody.message);
      done();
    });
  });

  it("should throw exception for 5xx status codes", function (done) {
    const errorBody = { message: "Internal server error" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 500, body: errorBody }),
      },
      null
    );

    version.removeWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(500);
      expect(error.message).toEqual(errorBody.message);
      done();
    });
  });

  it("should handle empty headers", function (done) {
    const version = new Version(
      {
        request: () =>
          Promise.resolve({ statusCode: 204, body: "", headers: {} }),
      },
      {}
    );

    version.removeWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toBe(true);
      expect(response.statusCode).toEqual(204);
      expect(response.headers).toEqual({});
      done();
    });
  });
});

