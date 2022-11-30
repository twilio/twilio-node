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

describe('PhoneNumber', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var phoneNumber = 'phone_number';
      var url = `https://lookups.twilio.com/v2/PhoneNumbers/${phoneNumber}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'calling_country_code': '1',
          'country_code': 'US',
          'phone_number': '+14159929960',
          'national_format': '(415) 992-9960',
          'valid': true,
          'validation_errors': null,
          'caller_name': null,
          'sim_swap': null,
          'call_forwarding': null,
          'live_activity': null,
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+14159929960'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_invalid response',
    function(done) {
      var body = {
          'calling_country_code': null,
          'country_code': null,
          'phone_number': '+141599299600',
          'national_format': null,
          'valid': false,
          'validation_errors': [
              'TOO_LONG'
          ],
          'caller_name': null,
          'sim_swap': null,
          'call_forwarding': null,
          'live_activity': null,
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+141599299600'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_caller_name response',
    function(done) {
      var body = {
          'calling_country_code': '1',
          'country_code': 'US',
          'phone_number': '+14159929960',
          'national_format': '(415) 992-9960',
          'valid': true,
          'validation_errors': null,
          'caller_name': {
              'caller_name': 'Sergio Suarez',
              'caller_type': 'CONSUMER',
              'error_code': null
          },
          'sim_swap': null,
          'call_forwarding': null,
          'live_activity': null,
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+14159929960'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_sim_swap response',
    function(done) {
      var body = {
          'calling_country_code': '44',
          'country_code': 'GB',
          'phone_number': '+447772000001',
          'national_format': '07772 000001',
          'valid': true,
          'validation_errors': null,
          'caller_name': null,
          'sim_swap': {
              'last_sim_swap': {
                  'last_sim_swap_date': '2020-04-27T10:18:50Z',
                  'swapped_period': 'PT15282H33M44S',
                  'swapped_in_period': true
              },
              'carrier_name': 'Vodafone UK',
              'mobile_country_code': '276',
              'mobile_network_code': '02',
              'error_code': null
          },
          'call_forwarding': null,
          'live_activity': null,
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+447772000001'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_sim_swap_without_last_sim_swap_date response',
    function(done) {
      var body = {
          'calling_country_code': '44',
          'country_code': 'GB',
          'phone_number': '+447772000001',
          'national_format': '07772 000001',
          'valid': true,
          'validation_errors': null,
          'caller_name': null,
          'sim_swap': {
              'last_sim_swap': {
                  'last_sim_swap_date': null,
                  'swapped_period': 'PT24H',
                  'swapped_in_period': true
              },
              'carrier_name': 'Vodafone UK',
              'mobile_country_code': '276',
              'mobile_network_code': '02',
              'error_code': null
          },
          'call_forwarding': null,
          'live_activity': null,
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+447772000001'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_sim_swap_with_false_swapped response',
    function(done) {
      var body = {
          'calling_country_code': '44',
          'country_code': 'GB',
          'phone_number': '+447772000001',
          'national_format': '07772 000001',
          'valid': true,
          'validation_errors': null,
          'caller_name': null,
          'sim_swap': {
              'last_sim_swap': {
                  'last_sim_swap_date': null,
                  'swapped_period': 'PT24H',
                  'swapped_in_period': false
              },
              'carrier_name': 'Vodafone UK',
              'mobile_country_code': '276',
              'mobile_network_code': '02',
              'error_code': null
          },
          'call_forwarding': null,
          'live_activity': null,
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+447772000001'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_call_forwarding response',
    function(done) {
      var body = {
          'calling_country_code': '44',
          'country_code': 'GB',
          'phone_number': '+447772000001',
          'national_format': '07772 000001',
          'valid': true,
          'validation_errors': null,
          'caller_name': null,
          'sim_swap': null,
          'call_forwarding': {
              'call_forwarding_status': 'true',
              'carrier_name': 'Vodafone UK',
              'mobile_country_code': '276',
              'mobile_network_code': '02',
              'error_code': null
          },
          'live_activity': null,
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+447772000001'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_sim_swap_and_call_forwarding response',
    function(done) {
      var body = {
          'calling_country_code': '44',
          'country_code': 'GB',
          'phone_number': '+447772000001',
          'national_format': '07772 000001',
          'valid': true,
          'validation_errors': null,
          'caller_name': null,
          'sim_swap': {
              'last_sim_swap': {
                  'last_sim_swap_date': '2020-11-05T20:52:09.322Z',
                  'swapped_period': 'PT24H',
                  'swapped_in_period': true
              },
              'carrier_name': 'Vodafone UK',
              'mobile_country_code': '276',
              'mobile_network_code': '02',
              'error_code': null
          },
          'call_forwarding': {
              'call_forwarding_status': 'true',
              'carrier_name': 'Vodafone UK',
              'mobile_country_code': '276',
              'mobile_network_code': '02',
              'error_code': null
          },
          'live_activity': null,
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+447772000001'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_live_activity_connectivity response',
    function(done) {
      var body = {
          'calling_country_code': '44',
          'country_code': 'GB',
          'phone_number': '+447772000001',
          'national_format': '07772 000001',
          'valid': true,
          'validation_errors': null,
          'caller_name': null,
          'sim_swap': null,
          'call_forwarding': null,
          'live_activity': {
              'connectivity': 'connected',
              'original_carrier': {
                  'name': 'Vodafone',
                  'mobile_country_code': '234',
                  'mobile_network_code': '15'
              },
              'ported': 'false',
              'ported_carrier': null,
              'roaming': 'false',
              'roaming_carrier': null,
              'error_code': null
          },
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+447772000001'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_live_activity_porting response',
    function(done) {
      var body = {
          'calling_country_code': '44',
          'country_code': 'GB',
          'phone_number': '+447772000001',
          'national_format': '07772 000001',
          'valid': true,
          'validation_errors': null,
          'caller_name': null,
          'sim_swap': null,
          'call_forwarding': null,
          'live_activity': {
              'connectivity': 'connected',
              'original_carrier': {
                  'name': 'Vodafone',
                  'mobile_country_code': '234',
                  'mobile_network_code': '15'
              },
              'ported': 'true',
              'ported_carrier': {
                  'name': 'Orange',
                  'mobile_country_code': '266',
                  'mobile_network_code': '10'
              },
              'roaming': 'false',
              'roaming_carrier': null,
              'error_code': null
          },
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+447772000001'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_live_activity_roaming response',
    function(done) {
      var body = {
          'calling_country_code': '44',
          'country_code': 'GB',
          'phone_number': '+447772000001',
          'national_format': '07772 000001',
          'valid': true,
          'validation_errors': null,
          'caller_name': null,
          'sim_swap': null,
          'call_forwarding': null,
          'live_activity': {
              'connectivity': 'connected',
              'original_carrier': {
                  'name': 'Vodafone',
                  'mobile_country_code': '234',
                  'mobile_network_code': '15'
              },
              'ported': 'false',
              'ported_carrier': null,
              'roaming': 'true',
              'roaming_carrier': {
                  'name': 'Orange',
                  'mobile_country_code': '266',
                  'mobile_network_code': '10',
                  'country_code': 'RO'
              },
              'error_code': null
          },
          'line_type_intelligence': null,
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+447772000001'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_line_type_intelligence response',
    function(done) {
      var body = {
          'calling_country_code': '1',
          'country_code': 'US',
          'phone_number': '+14159929960',
          'national_format': '(415) 992-9960',
          'valid': true,
          'validation_errors': null,
          'caller_name': null,
          'sim_swap': null,
          'call_forwarding': null,
          'live_activity': null,
          'line_type_intelligence': {
              'error_code': null,
              'mobile_country_code': '240',
              'mobile_network_code': '38',
              'carrier_name': 'Twilio - SMS/MMS-SVR',
              'type': 'nonFixedVoip'
          },
          'identity_match': null,
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+14159929960'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_identity_match response',
    function(done) {
      var body = {
          'calling_country_code': '1',
          'country_code': 'US',
          'phone_number': '+14159929960',
          'national_format': '(415) 992-9960',
          'valid': true,
          'validation_errors': [],
          'caller_name': null,
          'sim_swap': null,
          'call_forwarding': null,
          'live_activity': null,
          'line_type_intelligence': null,
          'identity_match': {
              'first_name_match': 'exact_match',
              'last_name_match': 'high_partial_match',
              'address_lines_match': 'no_match',
              'city_match': 'no_match',
              'state_match': 'high_partial_match',
              'postal_code_match': 'no_data',
              'address_country_match': 'exact_match',
              'national_id_match': 'exact_match',
              'date_of_birth_match': 'exact_match',
              'summary_score': 90,
              'error_code': null,
              'error_message': null
          },
          'url': 'https://lookups.twilio.com/v2/PhoneNumbers/+14159929960'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.lookups.v2.phoneNumbers('phone_number').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
