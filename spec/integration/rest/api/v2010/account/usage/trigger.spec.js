'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../../holodeck');
var Request = require('../../../../../../../lib/http/request');
var Response = require('../../../../../../../lib/http/response');
var Twilio = require('../../../../../../../lib');


var client;
var holodeck;

describe('Trigger', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .usage
                                    .triggers('UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Usage/Triggers/<%= sid %>.json')(solution);

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
          'api_version': '2010-04-01',
          'callback_method': 'GET',
          'callback_url': 'http://cap.com/streetfight',
          'current_value': '0',
          'date_created': 'Sun, 06 Sep 2015 12:58:45 +0000',
          'date_fired': null,
          'date_updated': 'Sun, 06 Sep 2015 12:58:45 +0000',
          'friendly_name': 'raphael-cluster-1441544325.86',
          'recurring': 'yearly',
          'sid': 'UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'trigger_by': 'price',
          'trigger_value': '50',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Triggers/UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'usage_category': 'totalprice',
          'usage_record_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Records?Category=totalprice'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .usage
                                    .triggers('UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .usage
                                    .triggers('UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Usage/Triggers/<%= sid %>.json')(solution);

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
          'api_version': '2010-04-01',
          'callback_method': 'GET',
          'callback_url': 'http://cap.com/streetfight',
          'current_value': '0',
          'date_created': 'Sun, 06 Sep 2015 12:58:45 +0000',
          'date_fired': null,
          'date_updated': 'Sun, 06 Sep 2015 12:58:45 +0000',
          'friendly_name': 'raphael-cluster-1441544325.86',
          'recurring': 'yearly',
          'sid': 'UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'trigger_by': 'price',
          'trigger_value': '50',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Triggers/UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'usage_category': 'totalprice',
          'usage_record_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Records?Category=totalprice'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .usage
                                    .triggers('UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
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
                                    .usage
                                    .triggers('UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Usage/Triggers/<%= sid %>.json')(solution);

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
                                    .usage
                                    .triggers('UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
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
        callbackUrl: 'https://example.com',
        triggerValue: 'triggerValue',
        usageCategory: 'authy-authentications'
      };
      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .usage
                                    .triggers.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Usage/Triggers.json')(solution);

      var values = {
        CallbackUrl: 'https://example.com',
        TriggerValue: 'triggerValue',
        UsageCategory: 'authy-authentications',
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
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'callback_method': 'GET',
          'callback_url': 'http://cap.com/streetfight',
          'current_value': '0',
          'date_created': 'Sun, 06 Sep 2015 12:58:45 +0000',
          'date_fired': null,
          'date_updated': 'Sun, 06 Sep 2015 12:58:45 +0000',
          'friendly_name': 'raphael-cluster-1441544325.86',
          'recurring': 'yearly',
          'sid': 'UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'trigger_by': 'price',
          'trigger_value': '50',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Triggers/UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'usage_category': 'totalprice',
          'usage_record_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Records?Category=totalprice'
      });

      holodeck.mock(new Response(200, body));

      var opts = {
        callbackUrl: 'https://example.com',
        triggerValue: 'triggerValue',
        usageCategory: 'authy-authentications'
      };
      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .usage
                                    .triggers.create(opts);
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

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .usage
                                    .triggers.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Usage/Triggers.json')(solution);

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
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Triggers?PageSize=1&Page=0',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Triggers?PageSize=1&Page=626',
          'next_page_uri': null,
          'num_pages': 627,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'total': 627,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Triggers',
          'usage_triggers': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'callback_method': 'GET',
                  'callback_url': 'http://cap.com/streetfight',
                  'current_value': '0',
                  'date_created': 'Sun, 06 Sep 2015 12:58:45 +0000',
                  'date_fired': null,
                  'date_updated': 'Sun, 06 Sep 2015 12:58:45 +0000',
                  'friendly_name': 'raphael-cluster-1441544325.86',
                  'recurring': 'yearly',
                  'sid': 'UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trigger_by': 'price',
                  'trigger_value': '50',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Triggers/UTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'usage_category': 'totalprice',
                  'usage_record_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Records?Category=totalprice'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .usage
                                    .triggers.list();
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
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Triggers?PageSize=1&Page=0',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Triggers?PageSize=1&Page=626',
          'next_page_uri': null,
          'num_pages': 627,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'total': 627,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage/Triggers',
          'usage_triggers': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .usage
                                    .triggers.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

