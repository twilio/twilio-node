'use strict';

var _ = require('lodash');
var Holodeck = require('../../../holodeck');
var Request = require('../../../../../lib/http/request');
var Response = require('../../../../../lib/http/response');
var Twilio = require('../../../../../lib');


var client;
var holodeck;

describe('Trunk', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'domain_name': 'test.pstn.twilio.com',
          'disaster_recovery_method': 'POST',
          'disaster_recovery_url': 'http://disaster-recovery.com',
          'friendly_name': 'friendly_name',
          'secure': false,
          'recording': {
              'mode': 'do-not-record',
              'trim': 'do-not-trim'
          },
          'auth_type': '',
          'auth_type_set': [],
          'date_created': '2015-01-02T11:23:45Z',
          'date_updated': '2015-01-02T11:23:45Z',
          'url': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'origination_urls': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
              'credential_lists': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
              'ip_access_control_lists': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
              'phone_numbers': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= sid %>')(solution);

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

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
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

      var promise = client.trunking.v1.trunks.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://trunking.twilio.com/v1/Trunks';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'domain_name': 'test.pstn.twilio.com',
          'disaster_recovery_method': 'POST',
          'disaster_recovery_url': 'http://disaster-recovery.com',
          'friendly_name': 'friendly_name',
          'secure': false,
          'recording': {
              'mode': 'do-not-record',
              'trim': 'do-not-trim'
          },
          'auth_type': '',
          'auth_type_set': [],
          'date_created': '2015-01-02T11:23:45Z',
          'date_updated': '2015-01-02T11:23:45Z',
          'url': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'origination_urls': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
              'credential_lists': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
              'ip_access_control_lists': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
              'phone_numbers': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
          }
      });

      holodeck.mock(new Response(201, body));

      var promise = client.trunking.v1.trunks.create();
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

      var promise = client.trunking.v1.trunks.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://trunking.twilio.com/v1/Trunks';

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
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks?PageSize=1&Page=0',
              'key': 'trunks',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks?PageSize=1&Page=0'
          },
          'trunks': [
              {
                  'sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'domain_name': 'test.pstn.twilio.com',
                  'disaster_recovery_method': 'POST',
                  'disaster_recovery_url': 'http://disaster-recovery.com',
                  'friendly_name': 'friendly_name',
                  'secure': false,
                  'recording': {
                      'mode': 'do-not-record',
                      'trim': 'do-not-trim'
                  },
                  'auth_type': '',
                  'auth_type_set': [],
                  'date_created': '2015-01-02T11:23:45Z',
                  'date_updated': '2015-01-02T11:23:45Z',
                  'url': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'origination_urls': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
                      'credential_lists': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
                      'ip_access_control_lists': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
                      'phone_numbers': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
                  }
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks.list();
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
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks?PageSize=1&Page=0',
              'key': 'trunks',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks?PageSize=1&Page=0'
          },
          'trunks': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks.list();
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

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'sid': 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'domain_name': 'test.pstn.twilio.com',
          'disaster_recovery_method': 'GET',
          'disaster_recovery_url': 'http://updated-recovery.com',
          'friendly_name': 'updated_name',
          'secure': true,
          'recording': {
              'mode': 'do-not-record',
              'trim': 'do-not-trim'
          },
          'auth_type': '',
          'auth_type_set': [],
          'date_created': '2015-01-02T11:23:45Z',
          'date_updated': '2015-01-02T11:23:45Z',
          'url': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'origination_urls': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/OriginationUrls',
              'credential_lists': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialLists',
              'ip_access_control_lists': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists',
              'phone_numbers': 'http://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

