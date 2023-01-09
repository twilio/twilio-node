import mockfs from "mock-fs";
import axios from "axios";
import RequestClient from "../../../lib/base/RequestClient";
import HttpsProxyAgent from "https-proxy-agent";

jest.mock("axios");

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
  let initialHttpProxyValue = process.env.HTTP_PROXY;

  beforeEach(function () {
    axios.create.mockReturnValue(
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
      undefined
    );
    expect(requestClient.axios.defaults.httpsAgent.options.keepAliveMsecs).toBe(
      undefined
    );
    expect(requestClient.axios.defaults.httpsAgent.options.maxSockets).toBe(
      undefined
    );
    expect(
      requestClient.axios.defaults.httpsAgent.options.maxTotalSockets
    ).toBe(undefined);
    expect(requestClient.axios.defaults.httpsAgent.options.maxFreeSockets).toBe(
      undefined
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
    expect(requestClient.axios.defaults.httpsAgent.options.maxSockets).toBe(
      undefined
    );
    expect(
      requestClient.axios.defaults.httpsAgent.options.maxTotalSockets
    ).toEqual(1500);
    expect(requestClient.axios.defaults.httpsAgent.options.maxFreeSockets).toBe(
      undefined
    );
    expect(requestClient.axios.defaults.httpsAgent.options.scheduling).toEqual(
      "lifo"
    );
  });
});

describe("lastResponse and lastRequest defined", function () {
  let client;
  let response;
  beforeEach(function () {
    axios.create.mockReturnValue(
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
      Connection: "close",
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
  let client;
  let options;
  beforeEach(function () {
    axios.create.mockReturnValue(createMockAxios(Promise.reject("failed")));

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
        Connection: "close",
      });
      expect(client.lastRequest.data).toEqual({
        "test-data-key": "test-data-value",
      });
      expect(client.lastResponse).toBeUndefined();
    });
  });
});

describe("User specified CA bundle", function () {
  beforeEach(function () {
    axios.create.mockReturnValue(createMockAxios(Promise.resolve()));

    mockfs({
      "/path/to/ca": {
        "test-ca.pem": "test ca data",
      },
    });
  });

  afterEach(function () {
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
