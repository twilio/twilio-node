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

describe('Sim', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {iccid: 'iccid', registrationCode: 'registration_code'};
      var promise = client.supersim.v1.sims.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://supersim.twilio.com/v1/Sims';

      var values = {Iccid: 'iccid', RegistrationCode: 'registration_code', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': '',
          'status': 'new',
          'fleet_sid': null,
          'iccid': '89883070000123456789',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
          }
      };

      holodeck.mock(new Response(201, body));

      var opts = {iccid: 'iccid', registrationCode: 'registration_code'};
      var promise = client.supersim.v1.sims.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.sims('HSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'HSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://supersim.twilio.com/v1/Sims/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'My SIM',
          'status': 'new',
          'fleet_sid': null,
          'iccid': '89883070000123456789',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.sims('HSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.sims('HSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'HSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://supersim.twilio.com/v1/Sims/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update_unique_name response',
    function(done) {
      var body = {
          'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'MySIM',
          'status': 'new',
          'fleet_sid': null,
          'iccid': '89883070000123456789',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.sims('HSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update_status response',
    function(done) {
      var body = {
          'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': null,
          'status': 'scheduled',
          'fleet_sid': null,
          'iccid': '89883070000123456789',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.sims('HSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update_fleet_with_sid response',
    function(done) {
      var body = {
          'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': null,
          'status': 'new',
          'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'iccid': '89883070000123456789',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.sims('HSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update_fleet_with_unique_name response',
    function(done) {
      var body = {
          'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': null,
          'status': 'new',
          'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'iccid': '89883070000123456789',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.sims('HSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid transfer_sim_to_another_account response',
    function(done) {
      var body = {
          'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
          'unique_name': null,
          'status': 'new',
          'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'iccid': '89883070000123456789',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.sims('HSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'sims': [
              {
                  'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'My SIM',
                  'status': 'new',
                  'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '89883070000123456789',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.sims.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'sims': [
              {
                  'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'My SIM',
                  'status': 'new',
                  'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '89883070000123456789',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.sims.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://supersim.twilio.com/v1/Sims',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'sims': [
              {
                  'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'My SIM',
                  'status': 'new',
                  'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '89883070000123456789',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.sims.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.sims.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://supersim.twilio.com/v1/Sims';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'sims': [],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.sims.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full_by_fleet_sid response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'sims': [
              {
                  'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'My SIM',
                  'status': 'new',
                  'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '89883070000123456789',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
                  }
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.sims.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full_by_fleet_name response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=MyFleet&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Sims?Status=new&Fleet=MyFleet&PageSize=50&Page=0'
          },
          'sims': [
              {
                  'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'My SIM',
                  'status': 'new',
                  'fleet_sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '89883070000123456789',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
                  }
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.sims.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_by_iccid response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Sims?Iccid=89883070000123456789&PageSize=50&Page=0',
              'key': 'sims',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Sims?Iccid=89883070000123456789&PageSize=50&Page=0'
          },
          'sims': [
              {
                  'sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'My SIM',
                  'status': 'new',
                  'fleet_sid': null,
                  'iccid': '89883070000123456789',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'billing_periods': 'https://supersim.twilio.com/v1/Sims/HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/BillingPeriods'
                  }
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.sims.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
