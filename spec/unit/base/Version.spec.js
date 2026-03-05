import { vi } from "vitest";
import { Version } from '../../../src/base/Version';
import Holodeck from "../../integration/holodeck";
import { Response } from '../../../src/http/response';
import { Twilio } from "../../../src/rest/Twilio";

describe("fetch method", function () {
  it("should not throw an exception on 3xx status code", function () {
    const body = { test: true };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 307, body }),
      },
      {}
    );

    return version.fetch({}).then((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(body);

    });
  });

  it("should throw an exception if status code >= 400", function () {
    const body = { message: "invalid body" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 400, body }),
      },
      null
    );

    return version.fetch({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(400);
      expect(error.message).toEqual(body.message);

    });
  });
});

describe("patch method", function () {
  it("should parse JSON string response body for patch", function () {
    const body = { test: true, patched: true };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({ statusCode: 200, body: JSON.stringify(body) }),
      },
      {}
    );

    return version.patch({}).then((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(body);

    });
  });

  it("should throw an exception if status code >= 300", function () {
    const body = { message: "invalid body" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 400, body }),
      },
      null
    );

    return version.patch({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(400);
      expect(error.message).toEqual(body.message);

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

  it("streams all results", function () {
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));
    return client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.list()
      .then((messages) => {
        expect(messages.length).toEqual(5);
      });

  });

  it("limits results", function () {
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));
    return client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.list({ limit: 3 })
      .then((messages) => {
        expect(messages.length).toEqual(3);
      });

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
    const mockDone = vi.fn(console.debug.bind(null, "done!"));
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
    const mockDone = vi.fn(console.debug.bind(null, "done!"));
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

  it("should call user callback foreach resource instance", function () {
    let mockCallback = vi.fn();
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

        },
        callback: mockCallback,
      });
  });

  it("should call user callback with a done function argument", function () {
    let mockCallback = vi.fn();
    holodeck.mock(new Response(200, bodyOne));

    client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        limit: 1,
        done: () => {
          expect(mockCallback).toHaveBeenCalledTimes(1);
          expect(mockCallback.mock.calls[0][1]).toBeInstanceOf(Function);

        },
        callback: mockCallback,
      });
  });

  it("should call user done with an error if user callback throws an error", function () {
    let mockError = new Error("An error occurred.");
    let mockCallback = vi.fn(() => {
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

        },
        callback: mockCallback,
      });
  });

  it("should resolve promise after looping through each resource instance", function () {
    let mockCallback = vi.fn();
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    return client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        callback: mockCallback,
      })
      .then(() => {
        expect(mockCallback).toHaveBeenCalledTimes(5);

      });
  });

  it("should resolve promise if an error occurs and user done function executes successfully", function () {
    let mockCallback = vi.fn(() => {
      throw new Error("An error occurred.");
    });
    let mockDone = vi.fn();
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    return client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        limit: 3,
        callback: mockCallback,
        done: mockDone,
      })
      .then(() => {
        expect(mockDone).toHaveBeenCalledTimes(1);

      });
  });

  it("should reject promise with error if an error occurs and user done function is not provided", function () {
    let mockError = new Error("An error occurred.");
    let mockCallback = vi.fn(() => {
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

      });
  });

  it("should reject promise with error if an error occurs in user done function", function () {
    let mockCallback = vi.fn(() => {
      throw new Error("An error occurred in callback fn.");
    });
    let mockError = new Error("An error occurred in done fn.");
    let mockDone = vi.fn((error) => {
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

      });
  });

  it("should short-circuit foreach loop if user callback done argument is called", function () {
    let mockCallback = vi.fn((instance, done) => {
      done();
    });
    let mockDone = vi.fn();
    holodeck.mock(new Response(200, bodyOne));
    holodeck.mock(new Response(200, bodyTwo));
    holodeck.mock(new Response(200, bodyThree));

    return client.api.v2010
      .accounts("ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .messages.each({
        limit: 3,
        callback: mockCallback,
        done: mockDone,
      })
      .then(() => {
        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(mockDone).toHaveBeenCalledTimes(1);

      });
  });

  it("should short-circuit foreach loop and pass an error if user callback done argument is called with an error", function () {
    let mockError = new Error("An error occurred.");
    let mockCallback = vi.fn((instance, done) => {
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
        done: (error) => {
          expect(mockCallback).toHaveBeenCalledTimes(1);
          expect(error).toBe(mockError);

        },
      });
  });
});

describe("remove method", function () {
  const body = { message: "Resource deleted" };

  // Test all 2XX status codes
  const successStatusCodes = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];

  successStatusCodes.forEach((statusCode) => {
    it(`should return true for ${statusCode} status code`, function () {
      const version = new Version(
        {
          request: () => Promise.resolve({ statusCode, body }),
        },
        {}
      );

      version.remove({}).then((response) => {
        expect(response).toBeDefined();
        expect(response).toBe(true);

      });
    });
  });

  it("should throw an exception for status code < 200", function () {
    const errorBody = { message: "Invalid request" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 199, body: errorBody }),
      },
      null
    );

    return version.remove({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(199);
      expect(error.message).toEqual(errorBody.message);

    });
  });

  it("should throw an exception for status code >= 300", function () {
    const errorBody = { message: "Resource not found" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 404, body: errorBody }),
      },
      null
    );

    return version.remove({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(404);
      expect(error.message).toEqual(errorBody.message);

    });
  });

  it("should throw an exception for 5xx status code", function () {
    const errorBody = { message: "Internal server error" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 500, body: errorBody }),
      },
      null
    );

    return version.remove({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(500);
      expect(error.message).toEqual(errorBody.message);

    });
  });
});

describe("createWithResponseInfo method", function () {
  it("should return ApiResponse with body, statusCode, and headers on success", function () {
    const body = { id: "12345", name: "test resource" };
    const headers = { "x-request-id": "abc123", "x-ratelimit-remaining": "99" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 201, body, headers }),
      },
      {}
    );

    return version.createWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(201);
      expect(response.headers).toEqual(headers);

    });
  });

  it("should parse JSON string response body", function () {
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

    return version.createWithResponseInfo({}).then((response) => {
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(201);
      expect(response.headers).toEqual(headers);

    });
  });

  it("should throw exception for non-2xx status codes", function () {
    const errorBody = { message: "Bad request" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 400, body: errorBody }),
      },
      null
    );

    return version.createWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(400);
      expect(error.message).toEqual(errorBody.message);

    });
  });

  it("should handle empty headers", function () {
    const body = { id: "12345", name: "test resource" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 201, body, headers: {} }),
      },
      {}
    );

    return version.createWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(201);
      expect(response.headers).toEqual({});

    });
  });

  it("should handle undefined headers", function () {
    const body = { id: "12345", name: "test resource" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 201, body }),
      },
      {}
    );

    return version.createWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(201);
      expect(response.headers).toBeUndefined();

    });
  });
});

describe("fetchWithResponseInfo method", function () {
  it("should return ApiResponse with body, statusCode, and headers", function () {
    const body = { id: "12345", status: "active" };
    const headers = { "x-request-id": "xyz789", "x-ratelimit-limit": "1000" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers }),
      },
      {}
    );

    return version.fetchWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);

    });
  });

  it("should handle 3xx status codes successfully", function () {
    const body = { id: "12345", redirected: true };
    const headers = { location: "https://api.twilio.com/new-location" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 307, body, headers }),
      },
      {}
    );

    return version.fetchWithResponseInfo({}).then((response) => {
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(307);
      expect(response.headers).toEqual(headers);

    });
  });

  it("should throw exception for status code >= 400", function () {
    const errorBody = { message: "Not found" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 404, body: errorBody }),
      },
      null
    );

    return version.fetchWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(404);
      expect(error.message).toEqual(errorBody.message);

    });
  });

  it("should handle empty headers", function () {
    const body = { id: "12345", status: "active" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers: {} }),
      },
      {}
    );

    return version.fetchWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual({});

    });
  });
});

describe("updateWithResponseInfo method", function () {
  it("should return ApiResponse with updated resource", function () {
    const body = { id: "12345", name: "updated resource" };
    const headers = { "x-request-id": "update123" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers }),
      },
      {}
    );

    return version.updateWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);

    });
  });

  it("should parse JSON string response body", function () {
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

    return version.updateWithResponseInfo({}).then((response) => {
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);

    });
  });

  it("should throw exception for non-2xx status codes", function () {
    const errorBody = { message: "Forbidden" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 403, body: errorBody }),
      },
      null
    );

    return version.updateWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(403);
      expect(error.message).toEqual(errorBody.message);

    });
  });

  it("should handle empty headers", function () {
    const body = { id: "12345", updated: true };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers: {} }),
      },
      {}
    );

    return version.updateWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual({});

    });
  });
});

describe("patchWithResponseInfo method", function () {
  it("should return ApiResponse with patched resource", function () {
    const body = { id: "12345", patched: true };
    const headers = { "x-request-id": "patch123" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers }),
      },
      {}
    );

    return version.patchWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);

    });
  });

  it("should parse JSON string response body", function () {
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

    return version.patchWithResponseInfo({}).then((response) => {
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);

    });
  });

  it("should throw exception for non-2xx status codes", function () {
    const errorBody = { message: "Unprocessable Entity" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 422, body: errorBody }),
      },
      null
    );

    return version.patchWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(422);
      expect(error.message).toEqual(errorBody.message);

    });
  });

  it("should handle empty headers", function () {
    const body = { id: "12345", patched: true };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 200, body, headers: {} }),
      },
      {}
    );

    return version.patchWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toEqual(body);
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual({});

    });
  });
});

describe("removeWithResponseInfo method", function () {
  it("should return ApiResponse with true body for successful deletion", function () {
    const headers = { "x-request-id": "delete123" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 204, body: "", headers }),
      },
      {}
    );

    return version.removeWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toBe(true);
      expect(response.statusCode).toEqual(204);
      expect(response.headers).toEqual(headers);

    });
  });

  // Test all 2XX status codes
  const successStatusCodes = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];

  successStatusCodes.forEach((statusCode) => {
    it(`should return ApiResponse with true body for ${statusCode} status code`, function () {
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

      });
    });
  });

  it("should throw exception for status code >= 300", function () {
    const errorBody = { message: "Resource not found" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 404, body: errorBody }),
      },
      null
    );

    return version.removeWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(404);
      expect(error.message).toEqual(errorBody.message);

    });
  });

  it("should throw exception for 5xx status codes", function () {
    const errorBody = { message: "Internal server error" };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 500, body: errorBody }),
      },
      null
    );

    return version.removeWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(500);
      expect(error.message).toEqual(errorBody.message);

    });
  });

  it("should handle empty headers", function () {
    const version = new Version(
      {
        request: () =>
          Promise.resolve({ statusCode: 204, body: "", headers: {} }),
      },
      {}
    );

    return version.removeWithResponseInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.body).toBe(true);
      expect(response.statusCode).toEqual(204);
      expect(response.headers).toEqual({});

    });
  });
});

describe("eachWithHttpInfo method", function () {
  const bodyOne = {
    instances: [{ body: "payload0" }, { body: "payload1" }],
    nextPage: function () {
      return Promise.resolve({
        statusCode: 200,
        headers: { "x-page": "2" },
        body: bodyTwo,
      });
    },
  };
  const bodyTwo = {
    instances: [{ body: "payload2" }, { body: "payload3" }],
    nextPage: function () {
      return Promise.resolve({
        statusCode: 200,
        headers: { "x-page": "3" },
        body: bodyThree,
      });
    },
  };
  const bodyThree = {
    instances: [{ body: "payload4" }],
    nextPage: null,
  };

  it("should call user callback for each resource instance with HTTP metadata", function () {
    let mockCallback = vi.fn();
    const headers = { "x-request-id": "abc123", "x-ratelimit-remaining": "99" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers,
            body: bodyOne,
          }),
      },
      {}
    );

    version
      .eachWithHttpInfo({
        done: (error, metadata) => {
          expect(error).toBeUndefined();
          expect(mockCallback).toHaveBeenCalledTimes(5);
          expect(metadata).toBeDefined();
          expect(metadata.statusCode).toEqual(200);
          expect(metadata.headers).toEqual(headers);

        },
        callback: mockCallback,
      })
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(response.headers).toEqual(headers);
      });
  });

  it("should capture first page metadata", function () {
    const headers = { "x-request-id": "first-page" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers,
            body: bodyOne,
          }),
      },
      {}
    );

    return version.eachWithHttpInfo({ callback: vi.fn() }).then((response) => {
      expect(response).toBeDefined();
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);
      expect(response.body).toBeUndefined();

    });
  });

  it("should handle string body by parsing JSON", function () {
    const stringBody = JSON.stringify({
      instances: [{ id: "1" }],
      nextPage: null,
    });
    const headers = { "content-type": "application/json" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers,
            body: stringBody,
          }),
      },
      {}
    );

    version
      .eachWithHttpInfo({
        callback: (item) => {
          expect(item.id).toEqual("1");
        },
      })
      .then((response) => {
        expect(response.statusCode).toEqual(200);

      });
  });

  it("should reject with error when page method returns undefined on first page", function () {
    const version = new Version(
      {
        request: () => undefined,
      },
      {}
    );

    return version.eachWithHttpInfo({ callback: vi.fn() }).catch((error) => {
      expect(error).toBeDefined();
      expect(error.message).toContain("did not return a Promise");

    });
  });

  it("should handle response without statusCode (direct Page object)", function () {
    const directPageBody = {
      instances: [{ id: "test1" }],
      nextPage: null,
    };
    const version = new Version(
      {
        request: () => Promise.resolve(directPageBody),
      },
      {}
    );

    return version.eachWithHttpInfo({ callback: vi.fn() }).then((response) => {
      expect(response.statusCode).toEqual(200); // Default when no metadata
      expect(response.headers).toEqual({});

    });
  });

  it("should call user done with error if callback throws", function () {
    const mockError = new Error("Callback error");
    const mockCallback = vi.fn(() => {
      throw mockError;
    });
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers: {},
            body: { instances: [{ id: "1" }], nextPage: null },
          }),
      },
      {}
    );

    version
      .eachWithHttpInfo({
        callback: mockCallback,
        done: (error) => {
          expect(error).toBe(mockError);

        },
      })
      .catch(() => {});
  });

  it("should short-circuit when done is called with error", function () {
    const mockError = new Error("User stopped iteration");
    const mockCallback = vi.fn((instance, doneCallback) => {
      doneCallback(mockError);
    });
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers: {},
            body: bodyOne,
          }),
      },
      {}
    );

    version
      .eachWithHttpInfo({
        callback: mockCallback,
        done: (error) => {
          expect(error).toBe(mockError);
          expect(mockCallback).toHaveBeenCalledTimes(1);

        },
      })
      .catch(() => {});
  });

  it("should respect limit parameter", function () {
    const mockCallback = vi.fn();
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers: {},
            body: bodyOne,
          }),
      },
      {}
    );

    version._version = version; // Make it check limits

    version
      .eachWithHttpInfo({
        limit: 2,
        callback: mockCallback,
      })
      .then(() => {
        expect(mockCallback).toHaveBeenCalledTimes(2);

      });
  });

  it("should throw error if callback is not provided", function () {
    const version = new Version({ request: vi.fn() }, {});

    expect(() => {
      version.eachWithHttpInfo({});
    }).toThrow("Callback function must be provided");
  });

  it("should handle pageWithHttpInfo method if available", function () {
    const headers = { "x-request-id": "page-http-info" };
    const mockCallback = vi.fn();

    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers,
            body: { instances: [{ id: "1" }], nextPage: null },
          }),
      },
      {}
    );

    // Add pageWithHttpInfo method to version
    version.pageWithHttpInfo = function () {
      return Promise.resolve({
        statusCode: 200,
        headers,
        body: { instances: [{ id: "1" }], nextPage: null },
      });
    };

    return version.eachWithHttpInfo({ callback: mockCallback }).then((response) => {
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);

    });
  });
});

describe("listWithHttpInfo method", function () {
  const bodyOne = {
    instances: [{ body: "payload0" }, { body: "payload1" }],
    nextPage: function () {
      return Promise.resolve({
        statusCode: 200,
        headers: { "x-page": "2" },
        body: bodyTwo,
      });
    },
  };
  const bodyTwo = {
    instances: [{ body: "payload2" }],
    nextPage: null,
  };

  it("should return ApiResponse with array of all resources and first page metadata", function () {
    const headers = { "x-request-id": "list123", "x-ratelimit-limit": "1000" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers,
            body: bodyOne,
          }),
      },
      {}
    );

    return version.listWithHttpInfo({}).then((response) => {
      expect(response).toBeDefined();
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toEqual(3);
      expect(response.body[0].body).toEqual("payload0");
      expect(response.body[1].body).toEqual("payload1");
      expect(response.body[2].body).toEqual("payload2");

    });
  });

  it("should respect limit parameter", function () {
    const headers = { "x-request-id": "limited-list" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers,
            body: bodyOne,
          }),
      },
      {}
    );

    return version._version = version; // Make it check limits

    return version.listWithHttpInfo({ limit: 2 }).then((response) => {
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);
      expect(response.body.length).toEqual(2);

    });
  });

  it("should handle callback parameter", function () {
    const headers = { "x-request-id": "callback-test" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers,
            body: { instances: [{ id: "1" }], nextPage: null },
          }),
      },
      {}
    );

    version._version = version; // Enable callback handling

    version.listWithHttpInfo({}, (error, response) => {
      expect(error).toBeNull();
      expect(response).toBeDefined();
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);
      expect(Array.isArray(response.body)).toBe(true);

    });
  });

  it("should handle function as first parameter", function () {
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers: {},
            body: { instances: [{ id: "1" }], nextPage: null },
          }),
      },
      {}
    );

    version._version = version; // Enable callback handling

    version.listWithHttpInfo((error, response) => {
      expect(error).toBeNull();
      expect(response).toBeDefined();

    });
  });

  it("should return empty array when no instances", function () {
    const headers = { "x-request-id": "empty-list" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers,
            body: { instances: [], nextPage: null },
          }),
      },
      {}
    );

    return version.listWithHttpInfo({}).then((response) => {
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual(headers);
      expect(response.body).toEqual([]);

    });
  });

  it("should set promise callback when _version is Version instance", function () {
    const headers = { "x-request-id": "promise-callback-test" };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 200,
            headers,
            body: { instances: [{ id: "1" }], nextPage: null },
          }),
      },
      {}
    );

    version._version = version;

    version.listWithHttpInfo({}, (error, response) => {
      expect(error).toBeNull();
      expect(response.statusCode).toEqual(200);

    });
  });
});

describe("throwException method (tested through public methods)", function () {
  it("should throw RestException for legacy format", function () {
    const legacyBody = {
      message: "Invalid parameter",
      code: 20001,
      more_info: "https://www.twilio.com/docs/errors/20001",
    };
    const version = new Version(
      {
        request: () => Promise.resolve({ statusCode: 400, body: legacyBody }),
      },
      null
    );

    return version.create({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.message).toEqual(legacyBody.message);
      expect(error.status).toEqual(400);

    });
  });

  it("should parse JSON string body before checking exception type", function () {
    const errorBody = {
      message: "Not Found",
      code: 20404,
    };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 404,
            body: JSON.stringify(errorBody),
          }),
      },
      null
    );

    return version.fetch({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(404);

    });
  });

  it("should handle JSON parse failure gracefully", function () {
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 500,
            body: "Invalid JSON {{{",
          }),
      },
      null
    );

    return version.update({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(500);

    });
  });

  it("should handle non-string error body in update", function () {
    const errorBody = {
      message: "Server error",
      code: 50000,
    };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 500,
            body: errorBody,
          }),
      },
      null
    );

    return version.patch({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(500);

    });
  });

  it("should handle error in createWithResponseInfo", function () {
    const errorBody = {
      message: "Conflict",
      code: 40900,
    };
    const version = new Version(
      {
        request: () =>
          Promise.resolve({
            statusCode: 409,
            body: errorBody,
          }),
      },
      null
    );

    return version.createWithResponseInfo({}).catch((error) => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(409);

    });
  });
});
