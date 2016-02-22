'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('IncomingPhoneNumber', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        ownerAccountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= ownerAccountSid %>/IncomingPhoneNumbers/<%= sid %>.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address_requirements': 'none',
          'api_version': '2010-04-01',
          'beta': false,
          'capabilities': {
              'mms': true,
              'sms': false,
              'voice': true
          },
          'date_created': 'Thu, 30 Jul 2015 23:19:04 +0000',
          'date_updated': 'Thu, 30 Jul 2015 23:19:04 +0000',
          'friendly_name': '(808) 925-5327',
          'phone_number': '+18089255327',
          'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sms_application_sid': '',
          'sms_fallback_method': 'POST',
          'sms_fallback_url': '',
          'sms_method': 'POST',
          'sms_url': '',
          'status_callback': '',
          'status_callback_method': 'POST',
          'trunk_sid': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_application_sid': '',
          'voice_caller_id_lookup': false,
          'voice_fallback_method': 'POST',
          'voice_fallback_url': null,
          'voice_method': 'POST',
          'voice_url': null
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        ownerAccountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= ownerAccountSid %>/IncomingPhoneNumbers/<%= sid %>.json')(solution);

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
          'address_requirements': 'none',
          'api_version': '2010-04-01',
          'beta': false,
          'capabilities': {
              'mms': true,
              'sms': false,
              'voice': true
          },
          'date_created': 'Thu, 30 Jul 2015 23:19:04 +0000',
          'date_updated': 'Thu, 30 Jul 2015 23:19:04 +0000',
          'friendly_name': '(808) 925-5327',
          'phone_number': '+18089255327',
          'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sms_application_sid': '',
          'sms_fallback_method': 'POST',
          'sms_fallback_url': '',
          'sms_method': 'POST',
          'sms_url': '',
          'status_callback': '',
          'status_callback_method': 'POST',
          'trunk_sid': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_application_sid': '',
          'voice_caller_id_lookup': false,
          'voice_fallback_method': 'POST',
          'voice_fallback_url': null,
          'voice_method': 'POST',
          'voice_url': null
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        ownerAccountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= ownerAccountSid %>/IncomingPhoneNumbers/<%= sid %>.json')(solution);

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

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers('PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        ownerAccountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= ownerAccountSid %>/IncomingPhoneNumbers.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?PageSize=1&Page=0',
          'incoming_phone_numbers': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address_requirements': 'none',
                  'api_version': '2010-04-01',
                  'beta': null,
                  'capabilities': {
                      'mms': true,
                      'sms': false,
                      'voice': true
                  },
                  'date_created': 'Thu, 30 Jul 2015 23:19:04 +0000',
                  'date_updated': 'Thu, 30 Jul 2015 23:19:04 +0000',
                  'friendly_name': '(808) 925-5327',
                  'phone_number': '+18089255327',
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_application_sid': '',
                  'sms_fallback_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_method': 'POST',
                  'sms_url': '',
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'trunk_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_application_sid': '',
                  'voice_caller_id_lookup': false,
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_url': null
              }
          ],
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?PageSize=1&Page=2',
          'next_page_uri': null,
          'num_pages': 3,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'total': 3,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?PageSize=1'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers.list();
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
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?PageSize=1&Page=0',
          'incoming_phone_numbers': [],
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?PageSize=1&Page=2',
          'next_page_uri': null,
          'num_pages': 3,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'total': 3,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?PageSize=1'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        ownerAccountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= ownerAccountSid %>/IncomingPhoneNumbers.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address_requirements': 'none',
          'api_version': '2010-04-01',
          'beta': false,
          'capabilities': {
              'mms': true,
              'sms': false,
              'voice': true
          },
          'date_created': 'Thu, 30 Jul 2015 23:19:04 +0000',
          'date_updated': 'Thu, 30 Jul 2015 23:19:04 +0000',
          'friendly_name': '(808) 925-5327',
          'phone_number': '+18089255327',
          'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sms_application_sid': '',
          'sms_fallback_method': 'POST',
          'sms_fallback_url': '',
          'sms_method': 'POST',
          'sms_url': '',
          'status_callback': '',
          'status_callback_method': 'POST',
          'trunk_sid': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_application_sid': '',
          'voice_caller_id_lookup': false,
          'voice_fallback_method': 'POST',
          'voice_fallback_url': null,
          'voice_method': 'POST',
          'voice_url': null
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .incomingPhoneNumbers.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

