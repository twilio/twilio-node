'use strict';

const mockfs = require('mock-fs');
const proxyquire = require('proxyquire');
const Q = require('q');
const HttpsProxyAgent = require('https-proxy-agent');

function createMockAxios(promiseHandler) {
  return {
    create: function(createOptions) {
      let instance = function(requestOptions) {
        const deferred = Q.defer();
        promiseHandler(deferred, { createOptions: createOptions, requestOptions: requestOptions });
        return deferred.promise;
      };

      instance.defaults = {
        headers: {
          post: {},
        },
      };

      return instance;
    },
  };
}

describe('RequestClient constructor', function() {
  let RequestClientMock;
  let initialHttpProxyValue = process.env.HTTP_PROXY;

  beforeEach(function() {
    RequestClientMock = proxyquire('../../../lib/base/RequestClient', {
      axios: createMockAxios(function(deferred) {
        deferred.resolve({status: 200, data: 'voltron', headers: {response: 'header'}});
      }),
    });
  });

  afterEach(function() {
    if (initialHttpProxyValue) {
      process.env.HTTP_PROXY = initialHttpProxyValue;
    } else {
      delete process.env.HTTP_PROXY;
    }
  });

  it('should initialize with default values', function() {
    const requestClient = new RequestClientMock();
    expect(requestClient.defaultTimeout).toEqual(30000);
    expect(requestClient.axios.defaults.headers.post).toEqual({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    expect(requestClient.axios.defaults.httpsAgent).not.toBeInstanceOf(HttpsProxyAgent);
    expect(requestClient.axios.defaults.httpsAgent.options.timeout).toEqual(30000);
  });

  it('should initialize with a proxy', function() {
    process.env.HTTP_PROXY = 'http://example.com:8080';

    const requestClient = new RequestClientMock();
    expect(requestClient.defaultTimeout).toEqual(30000);
    expect(requestClient.axios.defaults.headers.post).toEqual({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    expect(requestClient.axios.defaults.httpsAgent).toBeInstanceOf(HttpsProxyAgent);
    expect(requestClient.axios.defaults.httpsAgent.proxy.host).toEqual('example.com');
  });

  it('should initialize with a timeout', function() {
    const requestClient = new RequestClientMock({ timeout: 5000 });
    expect(requestClient.defaultTimeout).toEqual(5000);
    expect(requestClient.axios.defaults.headers.post).toEqual({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    expect(requestClient.axios.defaults.httpsAgent).not.toBeInstanceOf(HttpsProxyAgent);
    expect(requestClient.axios.defaults.httpsAgent.options.timeout).toEqual(5000);
  });
});

describe('lastResponse and lastRequest defined', function() {
  let client;
  let response;
  beforeEach(function() {
    const RequestClientMock = proxyquire('../../../lib/base/RequestClient', {
      axios: createMockAxios(function(deferred) {
        deferred.resolve({status: 200, data: 'voltron', headers: {response: 'header'}});
      }),
    });

    client = new RequestClientMock();

    const options = {
      method: 'GET',
      uri: 'test-uri',
      username: 'test-username',
      password: 'test-password',
      headers: {'test-header-key': 'test-header-value'},
      params: {'test-param-key': 'test-param-value'},
      data: {'test-data-key': 'test-data-value'},
    };

    response = client.request(options);

    return response;
  });

  it('should have lastResponse and lastRequest on success', function() {
    expect(client.lastRequest).toBeDefined();
    expect(client.lastRequest.method).toEqual('GET');
    expect(client.lastRequest.url).toEqual('test-uri');
    expect(client.lastRequest.auth).toEqual('dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk');
    expect(client.lastRequest.params).toEqual({'test-param-key': 'test-param-value'});
    expect(client.lastRequest.headers).toEqual({
      'test-header-key': 'test-header-value',
      Authorization: 'Basic dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk',
      Connection: 'close',
    });
    expect(client.lastRequest.data).toEqual({'test-data-key': 'test-data-value'});
    expect(client.lastResponse).toBeDefined();
    expect(client.lastResponse.statusCode).toEqual(200);
    expect(client.lastResponse.body).toEqual('voltron');
  });

  it('should include response properties', function () {
    response.then(function (resp) {
      expect(resp.statusCode).toBeDefined();
      expect(resp.body).toBeDefined();
      expect(resp.headers).toBeDefined();
    });
  });

  it('should not include request authorization header in filtered headers', function () {
    const filteredHeaderKeys = client.filterLoggingHeaders(client.lastRequest.headers);
    expect(filteredHeaderKeys).toEqual(['test-header-key', 'Connection']);
  });
});

describe('lastRequest defined, lastResponse undefined', function() {
  let client;
  let options;
  beforeEach(function() {
    const RequestClientMock = proxyquire('../../../lib/base/RequestClient', {
      axios: createMockAxios(function(deferred) {
        deferred.reject('failed');
      }),
    });

    client = new RequestClientMock();

    options = {
      method: 'GET',
      uri: 'test-uri',
      username: 'test-username',
      password: 'test-password',
      headers: {'test-header-key': 'test-header-value'},
      params: {'test-param-key': 'test-param-value'},
      data: {'test-data-key': 'test-data-value'},
    };
  });

  it('should have lastResponse and lastRequest on success', function() {
    return client.request(options).catch(() => {
      expect(client.lastRequest).toBeDefined();
      expect(client.lastRequest.method).toEqual('GET');
      expect(client.lastRequest.url).toEqual('test-uri');
      expect(client.lastRequest.auth).toEqual('dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk');
      expect(client.lastRequest.params).toEqual({'test-param-key': 'test-param-value'});
      expect(client.lastRequest.headers).toEqual({
        'test-header-key': 'test-header-value',
        Authorization: 'Basic dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk',
        Connection: 'close',
      });
      expect(client.lastRequest.data).toEqual({'test-data-key': 'test-data-value'});
      expect(client.lastResponse).toBeUndefined();
    });
  });
});

describe('User specified CA bundle', function() {
  let client;
  let options;
  beforeEach(function() {
    const RequestClientMock = proxyquire('../../../lib/base/RequestClient', {
      axios: createMockAxios(function(deferred) {
        deferred.reject('failed');
      }),
    });

    client = new RequestClientMock();

    options = {
      method: 'GET',
      uri: 'test-uri',
      username: 'test-username',
      password: 'test-password',
      headers: {'test-header-key': 'test-header-value'},
      params: {'test-param-key': 'test-param-value'},
      data: {'test-data-key': 'test-data-value'},
    };

    mockfs({
      '/path/to/ca': {
        'test-ca.pem': 'test ca data',
      },
    });
  });

  afterEach(function () {
    mockfs.restore();
  });

  it('should not modify CA if not specified', function() {
    return client.request(options).catch(() => {
      expect(client.lastRequest.ca).toBeUndefined();
    });
  });

  it('should use CA if it is specified', function() {
    process.env.TWILIO_CA_BUNDLE = '/path/to/ca/test-ca.pem';
    return client.request(options).catch(() => {
      expect(client.lastRequest.ca.toString()).toEqual('test ca data');
      delete process.env.TWILIO_CA_BUNDLE;
    });
  });

  it('should cache the CA after loading it for the first time', function () {
    process.env.TWILIO_CA_BUNDLE = '/path/to/ca/test-ca.pem';
    return client.request(options).catch(() => {
      mockfs({
        '/path/to/ca': {
          'test-ca.pem': null,
        },
      });
      return client.request(options).catch(() => {
        expect(client.lastRequest.ca.toString()).toEqual('test ca data');
        delete process.env.TWILIO_CA_BUNDLE;
      });
    });
  });
});
