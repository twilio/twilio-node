'use strict';

const http = require('http');
const mockfs = require('mock-fs');
const proxyquire = require('proxyquire');
const Q = require('q');

describe('retry on 429', function() {
  const RequestClient = require('../../../lib/base/RequestClient')
  function makeRequestListener (errors) {
    let reqs = 0
    return function (req, res) {
      reqs++
      if (reqs <= errors) {
        res.writeHead(429)
        res.end(`FAIL: ${reqs}`)
        return
      }
      res.writeHead(200)
      res.end(`OK: ${reqs}`)
    }
  }
  function serveAndGet (listener) {
    return new Promise(resolve => {
      const server = http.createServer(listener)
      server.listen(0, 'localhost', () => {
        const client = new RequestClient()
        return client
          .request({
            method: 'GET',
            uri: `http://localhost:${server.address().port}`
          })
          .then(ret => {
            server.close()
            return resolve(ret)
          })
      })
    })
  }
  it('OK response - no retries', function() {
    serveAndGet(makeRequestListener(0)).then(res => {
      expect(res.statusCode).toEqual(200)
      expect(res.body).toEqual('OK: 1')
    })
  })

  it('OK response - 1 retry', function() {
    serveAndGet(makeRequestListener(1)).then(res => {
      expect(res.statusCode).toEqual(200)
      expect(res.body).toEqual('OK: 2')
    })
  })

  it('OK response - 3 retries', function() {
    serveAndGet(makeRequestListener(3)).then(res => {
      expect(res.statusCode).toEqual(200)
      expect(res.body).toEqual('OK: 4')
    })
  })

  it('Fail response - 4 retries', function() {
    serveAndGet(makeRequestListener(4)).then(res => {
      expect(res.statusCode).toEqual(429)
      expect(res.body).toEqual('FAIL: 4')
    })
  })
})

describe('lastResponse and lastRequest defined', function() {
  let client;
  let response;
  beforeEach(function() {
    const RequestClientMock = proxyquire('../../../lib/base/RequestClient', {
      axios: function(options) {
        const deferred = Q.defer();
        deferred.resolve({status: 200, data: 'voltron', headers: {response: 'header'}});
        return deferred.promise;
      },
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
      axios: function(options) {
        const deferred = Q.defer();
        deferred.reject('failed');
        return deferred.promise;
      },
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
      axios: function (options) {
        const deferred = Q.defer();
        deferred.reject('failed');
        return deferred.promise;
      },
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
