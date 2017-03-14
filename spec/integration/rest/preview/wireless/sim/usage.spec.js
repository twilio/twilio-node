'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var RestException = require('../../../../../../lib/base/RestException');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('Usage', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.wireless.sims('DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .usage().fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        simSid: 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/wireless/Sims/<%= simSid %>/Usage')(solution);

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
          'commands_costs': {},
          'commands_usage': {},
          'data_costs': {},
          'data_usage': {},
          'sim_unique_name': 'sim_unique_name',
          'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'period': {},
          'url': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.sims('DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .usage().fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

