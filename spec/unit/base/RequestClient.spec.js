var mockfs = require('mock-fs');
var proxyquire = require('proxyquire');
var Q = require('q');

describe('lastResponse and lastRequest defined', function() {
  var client;
  beforeEach(function() {
    RequestClientMock = proxyquire('../../../lib/base/RequestClient', {
      axios: function(options) {
        var deferred = Q.defer();
        deferred.resolve({status: 200, data: 'voltron'});
        return deferred.promise;
      },
    });

    client = new RequestClientMock();

    var options = {
      method: 'GET',
      uri: 'test-uri',
      username: 'test-username',
      password: 'test-password',
      headers: {'test-header-key': 'test-header-value'},
      params: {'test-param-key': 'test-param-value'},
      data: {'test-data-key': 'test-data-value'},
    };

    return client.request(options);

  });

  it('should have lastResponse and lastRequest on success', function() {
    expect(client.lastRequest).toBeDefined();
    expect(client.lastRequest.method).toEqual('GET');
    expect(client.lastRequest.url).toEqual('test-uri');
    expect(client.lastRequest.auth).toEqual('dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk');
    expect(client.lastRequest.params).toEqual({'test-param-key': 'test-param-value'});
    expect(client.lastRequest.headers).toEqual({
      'test-header-key': 'test-header-value',
      'Authorization': 'Basic dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk',
      'Connection': 'close',
    });
    expect(client.lastRequest.data).toEqual({'test-data-key': 'test-data-value'});
    expect(client.lastResponse).toBeDefined();
    expect(client.lastResponse.statusCode).toEqual(200);
    expect(client.lastResponse.body).toEqual('voltron');
  });

});

describe('lastRequest defined, lastResponse undefined', function() {
  var client;
  var options;
  beforeEach(function() {
    RequestClientMock = proxyquire('../../../lib/base/RequestClient', {
      axios: function(options) {
        var deferred = Q.defer();
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
        'Authorization': 'Basic dGVzdC11c2VybmFtZTp0ZXN0LXBhc3N3b3Jk',
        'Connection': 'close',
      });
      expect(client.lastRequest.data).toEqual({'test-data-key': 'test-data-value'});
      expect(client.lastResponse).toBeUndefined();
    });
  });

});

describe('User specified CA bundle', function() {
  var client;
  var options;
  beforeEach(function() {
    RequestClientMock = proxyquire('../../../lib/base/RequestClient', {
      axios: function (options) {
        var deferred = Q.defer();
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
      data: {'test-data-key': 'test-data-value'}
    };

    mockfs({
      '/path/to/ca': {
        'test-ca.pem': 'test ca data'
      }
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
          'test-ca.pem': null
        }
      });
      return client.request(options).catch(() => {
        expect(client.lastRequest.ca.toString()).toEqual('test ca data');
        delete process.env.TWILIO_CA_BUNDLE;
      });
    });
  });
});
