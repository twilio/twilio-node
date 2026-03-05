import mockfs from "mock-fs";
import { RequestClient } from "../../../src/base/RequestClient";
import http from "node:http";

describe("RequestClient constructor", function () {
  let initialHttpProxyValue = process.env.HTTP_PROXY;

  afterEach(function () {
    if (initialHttpProxyValue) {
      process.env.HTTP_PROXY = initialHttpProxyValue;
    } else {
      delete process.env.HTTP_PROXY;
    }
  });

  it("should initialize with default values", function () {
    const requestClient = new RequestClient();
    expect(requestClient.defaultTimeout).toEqual(30000);
    expect(requestClient.keepAlive).toBe(true);
    expect(requestClient.autoRetry).toBe(false);
    expect(requestClient.maxRetryDelay).toBe(3000);
    expect(requestClient.maxRetries).toBe(3);
  });

  it("should initialize custom settings", function () {
    const requestClient = new RequestClient({
      timeout: 5000,
      keepAlive: false,
      autoRetry: true,
      maxRetryDelay: 5000,
      maxRetries: 5,
    });
    expect(requestClient.defaultTimeout).toEqual(5000);
    expect(requestClient.keepAlive).toBe(false);
    expect(requestClient.autoRetry).toBe(true);
    expect(requestClient.maxRetryDelay).toBe(5000);
    expect(requestClient.maxRetries).toBe(5);
  });
});

describe("lastResponse and lastRequest defined", function () {
  let server;
  let client;
  let serverUrl;

  beforeEach(async function () {
    server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify("voltron"));
    });
    await new Promise((resolve) => {
      server.listen(0, "localhost", () => {
        serverUrl = `http://localhost:${server.address().port}`;
        resolve();
      });
    });
    client = new RequestClient();
  });

  afterEach(function () {
    if (server && server.listening) server.close();
  });

  it("should have lastResponse and lastRequest on success", async function () {
    await client.request({
      method: "get",
      uri: serverUrl,
      username: "test-username",
      password: "test-password",
      headers: { "test-header-key": "test-header-value" },
      params: { "test-param-key": "test-param-value" },
      data: { "test-data-key": "test-data-value" },
    });

    expect(client.lastRequest).toBeDefined();
    expect(client.lastRequest.method).toEqual("get");
    expect(client.lastRequest.url).toEqual(serverUrl);
    expect(client.lastRequest.auth).toEqual(
      "dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk"
    );
    expect(client.lastRequest.params).toEqual({
      "test-param-key": "test-param-value",
    });
    expect(client.lastResponse).toBeDefined();
    expect(client.lastResponse.statusCode).toEqual(200);
    expect(client.lastResponse.body).toEqual("voltron");
  });

  it("should not include request authorization header in filtered headers", async function () {
    await client.request({
      method: "get",
      uri: serverUrl,
      username: "test-username",
      password: "test-password",
      headers: { "test-header-key": "test-header-value" },
    });
    const filteredHeaderKeys = client.filterLoggingHeaders(
      client.lastRequest.headers
    );
    expect(filteredHeaderKeys).toContain("test-header-key");
    expect(filteredHeaderKeys).not.toContain("Authorization");
  });
});

describe("User specified CA bundle", function () {
  afterEach(function () {
    mockfs.restore();
  });

  it("should use CA if it is specified", function () {
    mockfs({
      "/path/to/ca": {
        "test-ca.pem": "test ca data",
      },
    });
    process.env.TWILIO_CA_BUNDLE = "/path/to/ca/test-ca.pem";
    const client = new RequestClient();
    delete process.env.TWILIO_CA_BUNDLE;

    expect(client.ca?.toString()).toEqual("test ca data");
  });
});

describe("Exponential backoff and retry", function () {
  let client;
  let server;

  function getRequestListenerWithErrors(errors) {
    let requestCount = 0;
    return function (req, res) {
      requestCount++;
      if (requestCount <= errors) {
        res.writeHead(429);
        res.end(`FAILED! Request #${requestCount}`);
        return;
      }
      res.writeHead(200);
      res.end(`OK! Request #${requestCount}`);
    };
  }

  function startServer(listener) {
    return new Promise((resolve) => {
      server = http.createServer(listener);
      server.listen(0, "localhost", () => {
        resolve(`http://localhost:${server.address().port}`);
      });
    });
  }

  beforeEach(function () {
    client = new RequestClient({
      autoRetry: true,
    });
  });

  afterEach(function () {
    if (server && server.listening) {
      server.close();
    }
  });

  it("should set exponential backoff and retry default values", function () {
    client = new RequestClient();
    expect(client.autoRetry).toBe(false);
    expect(client.maxRetryDelay).toBe(3000);
    expect(client.maxRetries).toBe(3);
  });

  it("should not retry when auto-retry disabled", function () {
    let client = new RequestClient();
    return startServer(getRequestListenerWithErrors(1))
      .then((uri) => {
        return client.request({
          method: "get",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(429);
        expect(res.body).toEqual("FAILED! Request #1");

      });
  });

  it("should not retry on non-429 Error response", function () {
    return startServer(getRequestListenerWithErrors(0))
      .then((uri) => {
        return client.request({
          method: "get",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("OK! Request #1");

      });
  });

  it("should retry request on 429 Error response", function () {
    let client = new RequestClient({
      autoRetry: true,
    });
    return startServer(getRequestListenerWithErrors(1))
      .then((uri) => {
        return client.request({
          method: "get",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("OK! Request #2");

      });
  });

  it("should retry up to max retries allowed", function () {
    return startServer(getRequestListenerWithErrors(3))
      .then((uri) => {
        return client.request({
          method: "get",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("OK! Request #4");

      });
  });

  it("should return 429 Error response when exceeding max retries allowed", function () {
    return startServer(getRequestListenerWithErrors(99))
      .then((uri) => {
        return client.request({
          method: "get",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(429);
        expect(res.body).toEqual("FAILED! Request #4");

      });
  });

  it("should retry up to custom max retries allowed", function () {
    client = new RequestClient({
      autoRetry: true,
      maxRetries: 6,
    });
    return startServer(getRequestListenerWithErrors(6))
      .then((uri) => {
        return client.request({
          method: "get",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("OK! Request #7");

      });
  }, 10000);
});
