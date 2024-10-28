import mockfs from "mock-fs";
import axios from "axios";
import RequestClient from "../../../src/base/RequestClient";
import HttpsProxyAgent from "https-proxy-agent";
import http from "http";

function createMockAxios(promiseHandler) {
  let instance = function () {
    return promiseHandler;
  };

  instance.defaults = {
    headers: {
      post: {},
    },
  };

  return instance;
}

describe("RequestClient constructor", function () {
  let createSpy;
  let initialHttpProxyValue = process.env.HTTP_PROXY;

  beforeEach(function () {
    createSpy = jest.spyOn(axios, "create");
    createSpy.mockReturnValue(
      createMockAxios(
        Promise.resolve({
          status: 200,
          data: "voltron",
          headers: { response: "header" },
        })
      )
    );
  });

  afterEach(function () {
    createSpy.mockRestore();
    if (initialHttpProxyValue) {
      process.env.HTTP_PROXY = initialHttpProxyValue;
    } else {
      delete process.env.HTTP_PROXY;
    }
  });

  it("should initialize with default values", function () {
    const requestClient = new RequestClient();
    expect(requestClient.defaultTimeout).toEqual(30000);
    expect(requestClient.axios.defaults.headers.post).toEqual({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    expect(requestClient.axios.defaults.httpsAgent).not.toBeInstanceOf(
      HttpsProxyAgent
    );
    expect(requestClient.axios.defaults.httpsAgent.options.timeout).toEqual(
      30000
    );
    expect(requestClient.axios.defaults.httpsAgent.options.keepAlive).toBe(
      true
    );
    expect(requestClient.axios.defaults.httpsAgent.options.keepAliveMsecs).toBe(
      undefined
    );
    expect(requestClient.axios.defaults.httpsAgent.options.maxSockets).toBe(20);
    expect(
      requestClient.axios.defaults.httpsAgent.options.maxTotalSockets
    ).toBe(100);
    expect(requestClient.axios.defaults.httpsAgent.options.maxFreeSockets).toBe(
      5
    );
    expect(requestClient.axios.defaults.httpsAgent.options.scheduling).toBe(
      undefined
    );
    expect(requestClient.axios.defaults.httpsAgent.options.ca).toBe(undefined);
  });

  it("should initialize with a proxy", function () {
    process.env.HTTP_PROXY = "http://example.com:8080";

    const requestClient = new RequestClient();
    expect(requestClient.defaultTimeout).toEqual(30000);
    expect(requestClient.axios.defaults.headers.post).toEqual({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    expect(requestClient.axios.defaults.httpsAgent).toBeInstanceOf(
      HttpsProxyAgent
    );
    expect(requestClient.axios.defaults.httpsAgent.proxy.host).toEqual(
      "example.com"
    );
  });

  it("should initialize custom https settings (all settings customized)", function () {
    const requestClient = new RequestClient({
      timeout: 5000,
      keepAlive: true,
      keepAliveMsecs: 1500,
      maxSockets: 100,
      maxTotalSockets: 1000,
      maxFreeSockets: 10,
      scheduling: "fifo",
    });
    expect(requestClient.defaultTimeout).toEqual(5000);
    expect(requestClient.axios.defaults.headers.post).toEqual({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    expect(requestClient.axios.defaults.httpsAgent).not.toBeInstanceOf(
      HttpsProxyAgent
    );
    expect(requestClient.axios.defaults.httpsAgent.options.timeout).toEqual(
      5000
    );
    expect(requestClient.axios.defaults.httpsAgent.options.keepAlive).toBe(
      true
    );
    expect(
      requestClient.axios.defaults.httpsAgent.options.keepAliveMsecs
    ).toEqual(1500);
    expect(requestClient.axios.defaults.httpsAgent.options.maxSockets).toEqual(
      100
    );
    expect(
      requestClient.axios.defaults.httpsAgent.options.maxTotalSockets
    ).toEqual(1000);
    expect(
      requestClient.axios.defaults.httpsAgent.options.maxFreeSockets
    ).toEqual(10);
    expect(requestClient.axios.defaults.httpsAgent.options.scheduling).toEqual(
      "fifo"
    );
  });

  it("should initialize custom https settings (some settings customized)", function () {
    const requestClient = new RequestClient({
      timeout: 5000,
      keepAlive: false,
      maxTotalSockets: 1500,
      scheduling: "lifo",
    });
    expect(requestClient.defaultTimeout).toEqual(5000);
    expect(requestClient.axios.defaults.headers.post).toEqual({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    expect(requestClient.axios.defaults.httpsAgent).not.toBeInstanceOf(
      HttpsProxyAgent
    );
    expect(requestClient.axios.defaults.httpsAgent.options.timeout).toEqual(
      5000
    );
    expect(requestClient.axios.defaults.httpsAgent.options.keepAlive).toBe(
      false
    );
    expect(requestClient.axios.defaults.httpsAgent.options.keepAliveMsecs).toBe(
      undefined
    );
    expect(requestClient.axios.defaults.httpsAgent.options.maxSockets).toBe(20);
    expect(
      requestClient.axios.defaults.httpsAgent.options.maxTotalSockets
    ).toEqual(1500);
    expect(requestClient.axios.defaults.httpsAgent.options.maxFreeSockets).toBe(
      5
    );
    expect(requestClient.axios.defaults.httpsAgent.options.scheduling).toEqual(
      "lifo"
    );
  });
});

describe("lastResponse and lastRequest defined", function () {
  let createSpy;
  let client;
  let response;

  beforeEach(function () {
    createSpy = jest.spyOn(axios, "create");
    createSpy.mockReturnValue(
      createMockAxios(
        Promise.resolve({
          status: 200,
          data: "voltron",
          headers: { response: "header" },
        })
      )
    );

    client = new RequestClient();

    const options = {
      method: "GET",
      uri: "test-uri",
      username: "test-username",
      password: "test-password",
      headers: { "test-header-key": "test-header-value" },
      params: { "test-param-key": "test-param-value" },
      data: { "test-data-key": "test-data-value" },
    };

    response = client.request(options);

    return response;
  });

  afterEach(function () {
    createSpy.mockRestore();
  });

  it("should have lastResponse and lastRequest on success", function () {
    expect(client.lastRequest).toBeDefined();
    expect(client.lastRequest.method).toEqual("GET");
    expect(client.lastRequest.url).toEqual("test-uri");
    expect(client.lastRequest.auth).toEqual(
      "dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk"
    );
    expect(client.lastRequest.params).toEqual({
      "test-param-key": "test-param-value",
    });
    expect(client.lastRequest.headers).toEqual({
      "test-header-key": "test-header-value",
      Authorization: "Basic dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk",
      Connection: "keep-alive",
    });
    expect(client.lastRequest.data).toEqual({
      "test-data-key": "test-data-value",
    });
    expect(client.lastResponse).toBeDefined();
    expect(client.lastResponse.statusCode).toEqual(200);
    expect(client.lastResponse.body).toEqual("voltron");
  });

  it("should include response properties", function () {
    response.then(function (resp) {
      expect(resp.statusCode).toBeDefined();
      expect(resp.body).toBeDefined();
      expect(resp.headers).toBeDefined();
    });
  });

  it("should not include request authorization header in filtered headers", function () {
    const filteredHeaderKeys = client.filterLoggingHeaders(
      client.lastRequest.headers
    );
    expect(filteredHeaderKeys).toEqual(["test-header-key", "Connection"]);
  });
});

describe("lastRequest defined, lastResponse undefined", function () {
  let createSpy;
  let client;
  let options;

  beforeEach(function () {
    createSpy = jest.spyOn(axios, "create");
    createSpy.mockReturnValue(createMockAxios(Promise.reject("failed")));

    client = new RequestClient();

    options = {
      method: "GET",
      uri: "test-uri",
      username: "test-username",
      password: "test-password",
      headers: { "test-header-key": "test-header-value" },
      params: { "test-param-key": "test-param-value" },
      data: { "test-data-key": "test-data-value" },
    };
  });

  afterEach(function () {
    createSpy.mockRestore();
  });

  it("should have lastResponse and lastRequest on success", function () {
    return client.request(options).catch(() => {
      expect(client.lastRequest).toBeDefined();
      expect(client.lastRequest.method).toEqual("GET");
      expect(client.lastRequest.url).toEqual("test-uri");
      expect(client.lastRequest.auth).toEqual(
        "dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk"
      );
      expect(client.lastRequest.params).toEqual({
        "test-param-key": "test-param-value",
      });
      expect(client.lastRequest.headers).toEqual({
        "test-header-key": "test-header-value",
        Authorization: "Basic dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk",
        Connection: "keep-alive",
      });
      expect(client.lastRequest.data).toEqual({
        "test-data-key": "test-data-value",
      });
      expect(client.lastResponse).toBeUndefined();
    });
  });
});

describe("User specified CA bundle", function () {
  let createSpy;

  beforeEach(function () {
    createSpy = jest.spyOn(axios, "create");
    createSpy.mockReturnValue(createMockAxios(Promise.resolve()));

    mockfs({
      "/path/to/ca": {
        "test-ca.pem": "test ca data",
      },
    });
  });

  afterEach(function () {
    createSpy.mockRestore();
    mockfs.restore();
  });

  it("should use CA if it is specified", function () {
    process.env.TWILIO_CA_BUNDLE = "/path/to/ca/test-ca.pem";
    let client = new RequestClient();
    delete process.env.TWILIO_CA_BUNDLE;

    return expect(
      client.axios.defaults.httpsAgent.options.ca.toString()
    ).toEqual("test ca data");
  });
});

describe("Exponential backoff and retry", function () {
  let client;
  let server;

  /**
   * Returns a new RequestListener function that will return 429 Error responses
   * until requests to the listener exceed the specified number of errors.
   * @param errors - Number of 429 Error responses returned by the listener
   *   before returning a 200 OK response
   * @returns RequestListener function
   */
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
  /**
   * Creates and starts an HTTP server
   * @param listener - Request listener function
   * @returns Returns a promise that resolves with the server URL
   */
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

  it("should not retry when auto-retry disabled", function (done) {
    let client = new RequestClient();
    startServer(getRequestListenerWithErrors(1))
      .then((uri) => {
        return client.request({
          method: "GET",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(429);
        expect(res.body).toEqual("FAILED! Request #1");
        done();
      });
  });

  it("should not retry on non-429 Error response", function (done) {
    startServer(getRequestListenerWithErrors(0))
      .then((uri) => {
        return client.request({
          method: "GET",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("OK! Request #1");
        done();
      });
  });

  it("should retry request on 429 Error response", function (done) {
    let client = new RequestClient({
      autoRetry: true,
    });
    startServer(getRequestListenerWithErrors(1))
      .then((uri) => {
        return client.request({
          method: "GET",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("OK! Request #2");
        done();
      });
  });

  it("should retry up to max retries allowed", function (done) {
    startServer(getRequestListenerWithErrors(3))
      .then((uri) => {
        return client.request({
          method: "GET",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("OK! Request #4");
        done();
      });
  });

  it("should return 429 Error response when exceeding max retries allowed", function (done) {
    startServer(getRequestListenerWithErrors(99))
      .then((uri) => {
        return client.request({
          method: "GET",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(429);
        expect(res.body).toEqual("FAILED! Request #4");
        done();
      });
  });

  it("should retry up to custom max retries allowed", function (done) {
    client = new RequestClient({
      autoRetry: true,
      maxRetries: 6,
    });
    startServer(getRequestListenerWithErrors(6))
      .then((uri) => {
        return client.request({
          method: "GET",
          uri,
        });
      })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("OK! Request #7");
        done();
      });
  }, 10000);
});
