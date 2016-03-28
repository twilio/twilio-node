'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('Notification', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .notifications.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://notifications.twilio.com/v1/Services/<%= serviceSid %>/Notifications')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'sid': 'NOb8021351170b4e1286adaac3fdd6d082',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'IS699b53e02da45a1ba9d13b7d7d2766af',
          'date_created': '2016-03-24T23:42:28Z',
          'identities': [
              'jing'
          ],
          'tags': [],
          'priority': 'high',
          'ttl': 2419200,
          'title': 'test',
          'body': 'body',
          'sound': null,
          'action': null,
          'data': null,
          'apn': null,
          'gcm': null
      });

      holodeck.mock(new Response(201, body));

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .notifications.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

