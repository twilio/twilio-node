'use strict';

var _ = require('lodash');
var Holodeck = require('../../../holodeck');
var Request = require('../../../../../lib/http/request');
var Response = require('../../../../../lib/http/response');
var Twilio = require('../../../../../lib');


var client;
var holodeck;

describe('Event', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.monitor.v1.events('AEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'AEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://monitor.twilio.com/v1/Events/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'actor_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'actor_type': 'account',
          'description': null,
          'event_data': {
              'friendly_name': {
                  'previous': 'SubAccount Created at 2014-10-03 09:48 am',
                  'updated': 'Mr. Friendly'
              }
          },
          'event_date': '2014-10-03T16:48:25Z',
          'event_type': 'account.updated',
          'links': {
              'actor': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'resource': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'resource_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'resource_type': 'account',
          'sid': 'AEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'source': 'api',
          'source_ip_address': '10.86.6.250',
          'url': 'https://monitor.twilio.com/v1/Events/AEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.monitor.v1.events('AEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.monitor.v1.events.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://monitor.twilio.com/v1/Events';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'events': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'actor_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'actor_type': 'account',
                  'description': null,
                  'event_data': {
                      'friendly_name': {
                          'previous': 'SubAccount Created at 2014-10-03 09:48 am',
                          'updated': 'Mr. Friendly'
                      }
                  },
                  'event_date': '2014-10-03T16:48:25Z',
                  'event_type': 'account.updated',
                  'links': {
                      'actor': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'resource': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'resource_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'resource_type': 'account',
                  'sid': 'AEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'source': 'api',
                  'source_ip_address': '10.86.6.250',
                  'url': 'https://monitor.twilio.com/v1/Events/AEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://monitor.twilio.com/v1/Events?PageSize=50&Page=0',
              'key': 'events',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://monitor.twilio.com/v1/Events?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.monitor.v1.events.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'events': [],
          'meta': {
              'first_page_url': 'https://monitor.twilio.com/v1/Events?PageSize=50&Page=0',
              'key': 'events',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://monitor.twilio.com/v1/Events?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.monitor.v1.events.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

