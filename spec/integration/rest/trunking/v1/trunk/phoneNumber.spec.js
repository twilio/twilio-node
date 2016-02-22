'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('PhoneNumber', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .phoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/PhoneNumbers/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2010-12-10T17:27:34Z',
          'date_updated': '2015-10-09T11:36:32Z',
          'friendly_name': '(415) 867-5309',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'phone_number': '+14158675309',
          'api_version': '2010-04-01',
          'voice_caller_id_lookup': null,
          'voice_url': '',
          'voice_method': 'POST',
          'voice_fallback_url': null,
          'voice_fallback_method': null,
          'status_callback': '',
          'status_callback_method': 'POST',
          'voice_application_sid': null,
          'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sms_url': '',
          'sms_method': 'POST',
          'sms_fallback_url': '',
          'sms_fallback_method': 'POST',
          'sms_application_sid': '',
          'address_requirements': 'none',
          'beta': false,
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'capabilities': {
              'voice': true,
              'sms': true,
              'mms': true
          },
          'links': {
              'phone_number': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .phoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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
                                      .phoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/PhoneNumbers/<%= sid %>')(solution);

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
                                      .phoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
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
        phoneNumberSid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .phoneNumbers.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/PhoneNumbers')(solution);

      var values = {
        PhoneNumberSid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
          'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2010-12-10T17:27:34Z',
          'date_updated': '2015-10-09T11:36:32Z',
          'friendly_name': '(415) 867-5309',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'phone_number': '+14158675309',
          'api_version': '2010-04-01',
          'voice_caller_id_lookup': null,
          'voice_url': '',
          'voice_method': 'POST',
          'voice_fallback_url': null,
          'voice_fallback_method': null,
          'status_callback': '',
          'status_callback_method': 'POST',
          'voice_application_sid': null,
          'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sms_url': '',
          'sms_method': 'POST',
          'sms_fallback_url': '',
          'sms_fallback_method': 'POST',
          'sms_application_sid': '',
          'address_requirements': 'none',
          'beta': false,
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'capabilities': {
              'voice': true,
              'sms': true,
              'mms': true
          },
          'links': {
              'phone_number': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
          }
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        phoneNumberSid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .phoneNumbers.create(opts);
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
                                      .phoneNumbers.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/PhoneNumbers')(solution);

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
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers?PageSize=1&Page=0',
              'key': 'phone_numbers',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers?PageSize=1&Page=0'
          },
          'phone_numbers': [
              {
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2010-12-10T17:27:34Z',
                  'date_updated': '2015-10-09T11:36:32Z',
                  'friendly_name': '(415) 867-5309',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'phone_number': '+14158675309',
                  'api_version': '2010-04-01',
                  'voice_caller_id_lookup': null,
                  'voice_url': '',
                  'voice_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_fallback_method': null,
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'voice_application_sid': null,
                  'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_url': '',
                  'sms_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_fallback_method': 'POST',
                  'sms_application_sid': '',
                  'address_requirements': 'none',
                  'beta': false,
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'capabilities': {
                      'voice': true,
                      'sms': true,
                      'mms': true
                  },
                  'links': {
                      'phone_number': 'https://api.twilio.com/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
                  }
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .phoneNumbers.list();
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
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers?PageSize=1&Page=0',
              'key': 'phone_numbers',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/PhoneNumbers?PageSize=1&Page=0'
          },
          'phone_numbers': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .phoneNumbers.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

