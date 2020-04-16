var proxyquire = require('proxyquire');
var url = require('url');  /* jshint ignore:line */
var Q = require('q');

describe('hostname', function() {
  var client;
  beforeEach(function() {
    RequestClientMock = proxyquire('../../../lib', {
      axios: function(options) {
        var deferred = Q.defer();
        deferred.resolve({status: 200, data: 'voltron'});
        return deferred.promise;
      },
    });
  });

  it('should use the default region if only edge is defined', function() {
    client = new RequestClientMock('ACXXXXXXXX', 'test-password');
    client.edge = 'edge';
    client.messages.create({
      body: 'Hello from Node',
      to: '+XXXXXXXXXX',
      from: '+XXXXXXXXXX',
    });
    var uri = new url.URL(client._httpClient.lastRequest.url);
    expect(uri.hostname).toEqual('api.edge.us1.twilio.com');
  });

  it('should set the region properly', function() {
    client = new RequestClientMock('ACXXXXXXXX', 'test-password');
    client.region = 'region';
    client.messages.create({
      body: 'Hello from Node',
      to: '+XXXXXXXXXX',
      from: '+XXXXXXXXXX',
    });
    var uri = new url.URL(client._httpClient.lastRequest.url);
    expect(uri.hostname).toEqual('api.region.twilio.com');
  });

  it('should set the region and edge properly', function() {
    client = new RequestClientMock('ACXXXXXXXX', 'test-password');
    client.edge = 'edge';
    client.region = 'region';
    client.messages.create({
      body: 'Hello from Node',
      to: '+XXXXXXXXXX',
      from: '+XXXXXXXXXX',
    });
    var uri = new url.URL(client._httpClient.lastRequest.url);
    expect(uri.hostname).toEqual('api.edge.region.twilio.com');
  });

  it('should set the region and edge properly when there is already a region defined', function() {
    client = new RequestClientMock('ACXXXXXXXX', 'test-password', {
      uri: 'https://api.region.twilio.com',
    });
    client.region = 'new_region';
    client.messages.create({
      body: 'Hello from Node',
      to: '+XXXXXXXXXX',
      from: '+XXXXXXXXXX',
    });
    var uri = new url.URL(client._httpClient.lastRequest.url);
    expect(uri.hostname).toEqual('api.new_region.twilio.com');
  });

  it('should set the region and edge properly when there is already an edge defined', function() {
    client = new RequestClientMock('ACXXXXXXXX', 'test-password', {
      uri: 'https://api.edge.region.twilio.com',
    });
    client.edge = 'new_edge';
    client.region = 'new_region';
    client.messages.create({
      body: 'Hello from Node',
      to: '+XXXXXXXXXX',
      from: '+XXXXXXXXXX',
    });
    var uri = new url.URL(client._httpClient.lastRequest.url);
    expect(uri.hostname).toEqual('api.new_edge.new_region.twilio.com');
  });
});
