'use strict';
const nock = require('nock');
var url = require('url');  /* jshint ignore:line */

describe('client', () => {
  var client;
  const twilio = require('../../../lib');

  beforeEach(() => {
    client = new twilio('ACXXXXXXXX', 'test-password');
  });
  describe('setting the region', () => {
    it('should use the default region if only edge is defined', () => {
      const scope = nock('https://api.edge.us1.twilio.com')
        .get('/')
        .reply(200, 'test response');
      client.edge = 'edge';
      return client.request({method: 'GET', uri: 'https://api.twilio.com'})
        .then(() => scope.done());
    });
    it('should use the default region if only edge is defined and there is a defined region', () => {
      const scope = nock('https://api.edge.us1.twilio.com')
        .get('/')
        .reply(200, 'test response');
      client.edge = 'edge';
      return client.request({method: 'GET', uri: 'https://api.region.twilio.com'})
        .then(() => scope.done());
    });
    it('should set the region properly if only the region is specified', () => {
      const scope = nock('https://api.region.twilio.com')
        .get('/')
        .reply(200, 'test response');
      client.region = 'region';
      return client.request({method: 'GET', uri: 'https://api.twilio.com'})
        .then(() => scope.done());
    });
    it('should set the region and edge properly', () => {
      const scope = nock('https://api.edge.region.twilio.com')
        .get('/')
        .reply(200, 'test response');
      client.edge = 'edge';
      client.region = 'region';
      return client.request({method: 'GET', uri: 'https://api.twilio.com'})
        .then(() => scope.done());
    });
    it('should set the region and edge properly when an edge is already included', () => {
      const scope = nock('https://api.edge2.us1.twilio.com')
        .get('/')
        .reply(200, 'test response');
      client.edge = 'edge2';
      return client.request({method: 'GET', uri: 'https://api.edge1.region.twilio.com'})
        .then(() => scope.done());
    });
    it('should set the region and edge properly when a region is already included', () => {
      const scope = nock('https://api.edge.region2.twilio.com')
        .get('/')
        .reply(200, 'test response');
      client.region = 'region2';
      return client.request({method: 'GET', uri: 'https://api.edge.region.twilio.com'})
        .then(() => scope.done());
    });
  });
});
