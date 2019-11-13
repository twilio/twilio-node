'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Device', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        phoneNumber: 'phone_number',
        pushToken: 'push_token',
        twilioSandboxMode: 'twilio_sandbox_mode'
      };
      var promise = client.preview.trusted_comms.devices.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://preview.twilio.com/TrustedComms/Devices';

      var values = {PhoneNumber: 'phone_number', PushToken: 'push_token', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));

      var headers = {'Twilio-Sandbox-Mode': 'twilio_sandbox_mode'};
      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'binding_sid': 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'phone_number': '+573000000000',
          'sid': 'DDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://preview.twilio.com/TrustedComms/Devices'
      });

      holodeck.mock(new Response(201, body));

      var opts = {phoneNumber: 'phone_number', pushToken: 'push_token'};
      var promise = client.preview.trusted_comms.devices.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
