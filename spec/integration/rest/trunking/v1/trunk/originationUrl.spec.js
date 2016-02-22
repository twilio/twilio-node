'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('OriginationUrl', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls('OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/OriginationUrls/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'weight': 1,
          'date_updated': '2015-01-02T11:23:45Z',
          'enabled': true,
          'friendly_name': 'friendly_name',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'priority': 1,
          'sip_url': 'sip://sip-box.com:1234',
          'sid': 'OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-01-02T11:23:45Z',
          'trunk_sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls/OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls('OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls('OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/OriginationUrls/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls('OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, ''));

      var opts = {
        weight: 1,
        priority: 1,
        enabled: true,
        friendlyName: 'friendlyName',
        sipUrl: 'https://example.com'
      };
      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/OriginationUrls')(solution);

      var values = {
        Weight: 1,
        Priority: 1,
        Enabled: true,
        FriendlyName: 'friendlyName',
        SipUrl: 'https://example.com',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'weight': 1,
          'date_updated': '2015-01-02T11:23:45Z',
          'enabled': true,
          'friendly_name': 'friendly_name',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'priority': 1,
          'sip_url': 'sip://sip-box.com:1234',
          'sid': 'OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-01-02T11:23:45Z',
          'trunk_sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls/OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        weight: 1,
        priority: 1,
        enabled: true,
        friendlyName: 'friendlyName',
        sipUrl: 'https://example.com'
      };
      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls.create(opts);
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

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/OriginationUrls')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls?PageSize=1&Page=0',
              'key': 'origination_urls',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls?PageSize=1&Page=0'
          },
          'origination_urls': [
              {
                  'weight': 1,
                  'date_updated': '2015-01-02T11:23:45Z',
                  'enabled': true,
                  'friendly_name': 'friendly_name',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'priority': 1,
                  'sip_url': 'sip://sip-box.com:1234',
                  'sid': 'OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-01-02T11:23:45Z',
                  'trunk_sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls/OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls.list();
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
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls?PageSize=1&Page=0',
              'key': 'origination_urls',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls?PageSize=1&Page=0'
          },
          'origination_urls': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls('OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/OriginationUrls/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'weight': 2,
          'date_updated': '2015-01-02T11:23:45Z',
          'enabled': false,
          'friendly_name': 'updated_name',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'priority': 2,
          'sip_url': 'sip://sip-updated.com:4321',
          'sid': 'OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-01-02T11:23:45Z',
          'trunk_sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls/OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .originationUrls('OUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

