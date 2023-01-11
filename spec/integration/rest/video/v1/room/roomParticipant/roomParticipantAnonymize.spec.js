'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Anonymize', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .anonymize().update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var roomSid = 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://video.twilio.com/v1/Rooms/${roomSid}/Participants/${sid}/Anonymize`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'start_time': '2015-07-30T20:00:00Z',
          'end_time': null,
          'sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'disconnected',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Anonymize',
          'duration': 1
      };

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .anonymize().update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});