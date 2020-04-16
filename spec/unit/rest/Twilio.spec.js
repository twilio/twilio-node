'use strict';
const nock = require('nock');
var url = require('url');  /* jshint ignore:line */

describe('client', () => {
  var client;

  beforeEach(() => {
    var twilio = require('../../../lib');
    client = new twilio('ACXXXXXXXX', 'test-password');
    nock('https://api.twilio.com')
      .get('/')
      .reply(200, 'test response');
  });

  describe('setting the region', () => {
    it('should use the default region if only edge is defined', () => {
      client.edge = 'edge';
      client.messages.create({
        body: 'Hello from Node',
        to: '+XXXXXXXXXX',
        from: '+XXXXXXXXXX',
      });
      var uri = new url.URL(client._httpClient.lastRequest.url);
      expect(uri.hostname).toEqual('api.edge.us1.twilio.com');
    });
    it('should set the region properly if only the region is specified', () => {
      client.region = 'region';
      client.messages.create({
        body: 'Hello from Node',
        to: '+XXXXXXXXXX',
        from: '+XXXXXXXXXX',
      });
      var uri = new url.URL(client._httpClient.lastRequest.url);
      expect(uri.hostname).toEqual('api.region.twilio.com');
    });
    it('should use the default region if only edge is defined', () => {
      client.edge = 'edge';
      client.messages.create({
        body: 'Hello from Node',
        to: '+XXXXXXXXXX',
        from: '+XXXXXXXXXX',
      });
      var uri = new url.URL(client._httpClient.lastRequest.url);
      expect(uri.hostname).toEqual('api.edge.us1.twilio.com');
    });
    it('should set the region and edge properly', () => {
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
  });
});
