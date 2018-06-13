'use strict';
var proxyquire = require('proxyquire');
var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../holodeck');  /* jshint ignore:line */
var Response = require(
    '../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../lib');  /* jshint ignore:line */

var client;
var holodeck;

describe('validateSslCert', function() {
    beforeEach(function() {
        holodeck = new Holodeck();
        client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
            httpClient: holodeck,
          });
      });

    it('Should successfully validate a working SSL certificate', function(done) {
        holodeck.mock(new Response(200, ''));
        client.validateSslCert().then(function(result) {
            expect(result).toBe(null);
            done();
          });
      });

    it('should fail to validate a broken SSL certificate', function(done) {
        holodeck.mock(new Response(504, ''));
        let resp = client.validateSslCert().then(function(resp) {
            done();
            expect(resp).toThrow(RestException);

          });
      });

  });
