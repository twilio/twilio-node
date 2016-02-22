'use strict';

var _ = require('lodash');
var Holodeck = require('../../../holodeck');
var Request = require('../../../../../lib/http/request');
var Response = require('../../../../../lib/http/response');
var Twilio = require('../../../../../lib');


var client;
var holodeck;

describe('Alert', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.monitor.v1.alerts('NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://monitor.twilio.com/v1/Alerts/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'alert_text': 'sourceComponent=14100&httpResponse=500&url=https%3A%2F%2F2Fv1%2Fsms%2Ftwilio&ErrorCode=11200&LogLevel=ERROR&Msg=Internal+Server+Error&EmailNotification=false',
          'api_version': '2008-08-01',
          'date_created': '2015-08-29T17:20:16Z',
          'date_generated': '2015-08-29T17:20:14Z',
          'date_updated': '2015-08-29T17:20:16Z',
          'error_code': '11200',
          'log_level': 'error',
          'more_info': 'https://www.twilio.com/docs/errors/11200',
          'request_method': 'POST',
          'request_url': 'https://www.example.com',
          'request_variables': 'ToCountry=US&ToState=CA&SmsMessageSid=SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&NumMedia=0&ToCity=&FromZp&FromState=CA&SmsStatus=received&FromCity=SAN+FRANCISCO&Body=plan+5+potato&FromCountry=US&To=%2B1&ToZip=&NumSegments=1&MessageSid=SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AccountSid=ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&From=%2B1&ApiVersion=2010-04-01',
          'resource_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'response_body': 'blahblah',
          'response_headers': 'X-Cache=MISS+from+ip-10-.Google+Frontend&X-Cache-Lookup=MISS+from+ip&Alt-Svc=quic%3D%22%3A443%22%3B+p%3D%221%22%3B+ma%3D604800&Content-Length=323&Content-Type=text%2Fhtml%3B+charset%3DUTF-8&Date=Sat%2C+29+Aug+2015+17%3A20%3A16+GMT&Alternate-Protocol=443%3Aquic%2Cp%3D1',
          'sid': 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://monitor.twilio.com/v1/Alerts/NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.monitor.v1.alerts('NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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

      var promise = client.monitor.v1.alerts('NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://monitor.twilio.com/v1/Alerts/<%= sid %>')(solution);

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

      var promise = client.monitor.v1.alerts('NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
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

      var promise = client.monitor.v1.alerts.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://monitor.twilio.com/v1/Alerts';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'alerts': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'alert_text': 'sourceComponent=14100&httpResponse=500&url=https%3A%2F%2Fcommunicate-indonesia-staging.appspot.com%2Fv1%2Fsms%2Ftwilio&ErrorCode=11200&LogLevel=ERROR&Msg=Internal+Server+Error&EmailNotification=false',
                  'api_version': '2008-08-01',
                  'date_created': '2015-08-29T17:20:16Z',
                  'date_generated': '2015-08-29T17:20:14Z',
                  'date_updated': '2015-08-29T17:20:16Z',
                  'error_code': '11200',
                  'log_level': 'error',
                  'more_info': 'https://www.twilio.com/docs/errors/11200',
                  'request_method': 'POST',
                  'request_url': 'https://www.example.com',
                  'resource_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://monitor.twilio.com/v1/Alerts/NOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://monitor.twilio.com/v1/Alerts?PageSize=1&Page=0',
              'key': 'alerts',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://monitor.twilio.com/v1/Alerts?PageSize=1&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.monitor.v1.alerts.list();
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
          'alerts': [],
          'meta': {
              'first_page_url': 'https://monitor.twilio.com/v1/Alerts?PageSize=1&Page=0',
              'key': 'alerts',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://monitor.twilio.com/v1/Alerts?PageSize=1&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.monitor.v1.alerts.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

