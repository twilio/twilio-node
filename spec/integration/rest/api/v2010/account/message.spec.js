'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Message', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {to: '+15558675310'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

      var values = {To: '+15558675310', };
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
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'body': 'Hello! \ud83d\udc4d',
          'date_created': 'Thu, 30 Jul 2015 20:12:31 +0000',
          'date_sent': 'Thu, 30 Jul 2015 20:12:33 +0000',
          'date_updated': 'Thu, 30 Jul 2015 20:12:33 +0000',
          'direction': 'outbound-api',
          'error_code': null,
          'error_message': null,
          'from': '+14155552345',
          'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'num_media': '0',
          'num_segments': '1',
          'price': null,
          'price_unit': null,
          'sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'sent',
          'subresource_uris': {
              'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media.json'
          },
          'to': '+14155552345',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      };

      holodeck.mock(new Response(201, body));

      var opts = {to: '+15558675310'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_wo_service response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'body': 'Hello! \ud83d\udc4d',
          'date_created': 'Thu, 30 Jul 2015 20:12:31 +0000',
          'date_sent': 'Thu, 30 Jul 2015 20:12:33 +0000',
          'date_updated': 'Thu, 30 Jul 2015 20:12:33 +0000',
          'direction': 'outbound-api',
          'error_code': null,
          'error_message': null,
          'from': '+14155552345',
          'messaging_service_sid': null,
          'num_media': '0',
          'num_segments': '1',
          'price': null,
          'price_unit': null,
          'sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'sent',
          'subresource_uris': {
              'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media.json'
          },
          'to': '+14155552345',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      };

      holodeck.mock(new Response(201, body));

      var opts = {to: '+15558675310'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages/${sid}.json`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages/${sid}.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'body': 'testing',
          'date_created': 'Fri, 24 May 2019 17:18:27 +0000',
          'date_sent': 'Fri, 24 May 2019 17:18:28 +0000',
          'date_updated': 'Fri, 24 May 2019 17:18:28 +0000',
          'direction': 'outbound-api',
          'error_code': 30007,
          'error_message': 'Carrier violation',
          'from': '+12019235161',
          'messaging_service_sid': 'MGdeadbeefdeadbeefdeadbeefdeadbeef',
          'num_media': '0',
          'num_segments': '1',
          'price': '-0.00750',
          'price_unit': 'USD',
          'sid': 'SMb7c0a2ce80504485a6f653a7110836f5',
          'status': 'sent',
          'subresource_uris': {
              'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMb7c0a2ce80504485a6f653a7110836f5/Media.json',
              'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMb7c0a2ce80504485a6f653a7110836f5/Feedback.json'
          },
          'to': '+18182008801',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMb7c0a2ce80504485a6f653a7110836f5.json'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'end': 1,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=2&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 2,
          'previous_page_uri': null,
          'messages': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'body': 'testing',
                  'date_created': 'Fri, 24 May 2019 17:44:46 +0000',
                  'date_sent': 'Fri, 24 May 2019 17:44:50 +0000',
                  'date_updated': 'Fri, 24 May 2019 17:44:50 +0000',
                  'direction': 'outbound-api',
                  'error_code': null,
                  'error_message': null,
                  'from': '+12019235161',
                  'messaging_service_sid': null,
                  'num_media': '0',
                  'num_segments': '1',
                  'price': '-0.00750',
                  'price_unit': 'USD',
                  'sid': 'SMded05904ccb347238880ca9264e8fe1c',
                  'status': 'sent',
                  'subresource_uris': {
                      'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c/Media.json',
                      'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c/Feedback.json'
                  },
                  'to': '+18182008801',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c.json'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'body': 'look mom I have media!',
                  'date_created': 'Fri, 24 May 2019 17:44:46 +0000',
                  'date_sent': 'Fri, 24 May 2019 17:44:49 +0000',
                  'date_updated': 'Fri, 24 May 2019 17:44:49 +0000',
                  'direction': 'inbound',
                  'error_code': 30004,
                  'error_message': 'Message blocked',
                  'from': '+12019235161',
                  'messaging_service_sid': null,
                  'num_media': '3',
                  'num_segments': '1',
                  'price': '-0.00750',
                  'price_unit': 'USD',
                  'sid': 'MMc26223853f8c46b4ab7dfaa6abba0a26',
                  'status': 'received',
                  'subresource_uris': {
                      'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26/Media.json',
                      'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26/Feedback.json'
                  },
                  'to': '+18182008801',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26.json'
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=2&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .messages.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'end': 1,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=2&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 2,
          'previous_page_uri': null,
          'messages': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'body': 'testing',
                  'date_created': 'Fri, 24 May 2019 17:44:46 +0000',
                  'date_sent': 'Fri, 24 May 2019 17:44:50 +0000',
                  'date_updated': 'Fri, 24 May 2019 17:44:50 +0000',
                  'direction': 'outbound-api',
                  'error_code': null,
                  'error_message': null,
                  'from': '+12019235161',
                  'messaging_service_sid': null,
                  'num_media': '0',
                  'num_segments': '1',
                  'price': '-0.00750',
                  'price_unit': 'USD',
                  'sid': 'SMded05904ccb347238880ca9264e8fe1c',
                  'status': 'sent',
                  'subresource_uris': {
                      'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c/Media.json',
                      'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c/Feedback.json'
                  },
                  'to': '+18182008801',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c.json'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'body': 'look mom I have media!',
                  'date_created': 'Fri, 24 May 2019 17:44:46 +0000',
                  'date_sent': 'Fri, 24 May 2019 17:44:49 +0000',
                  'date_updated': 'Fri, 24 May 2019 17:44:49 +0000',
                  'direction': 'inbound',
                  'error_code': 30004,
                  'error_message': 'Message blocked',
                  'from': '+12019235161',
                  'messaging_service_sid': null,
                  'num_media': '3',
                  'num_segments': '1',
                  'price': '-0.00750',
                  'price_unit': 'USD',
                  'sid': 'MMc26223853f8c46b4ab7dfaa6abba0a26',
                  'status': 'received',
                  'subresource_uris': {
                      'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26/Media.json',
                      'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26/Feedback.json'
                  },
                  'to': '+18182008801',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26.json'
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=2&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .messages.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'end': 1,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=2&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 2,
          'previous_page_uri': null,
          'messages': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'body': 'testing',
                  'date_created': 'Fri, 24 May 2019 17:44:46 +0000',
                  'date_sent': 'Fri, 24 May 2019 17:44:50 +0000',
                  'date_updated': 'Fri, 24 May 2019 17:44:50 +0000',
                  'direction': 'outbound-api',
                  'error_code': null,
                  'error_message': null,
                  'from': '+12019235161',
                  'messaging_service_sid': null,
                  'num_media': '0',
                  'num_segments': '1',
                  'price': '-0.00750',
                  'price_unit': 'USD',
                  'sid': 'SMded05904ccb347238880ca9264e8fe1c',
                  'status': 'sent',
                  'subresource_uris': {
                      'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c/Media.json',
                      'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c/Feedback.json'
                  },
                  'to': '+18182008801',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c.json'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'body': 'look mom I have media!',
                  'date_created': 'Fri, 24 May 2019 17:44:46 +0000',
                  'date_sent': 'Fri, 24 May 2019 17:44:49 +0000',
                  'date_updated': 'Fri, 24 May 2019 17:44:49 +0000',
                  'direction': 'inbound',
                  'error_code': 30004,
                  'error_message': 'Message blocked',
                  'from': '+12019235161',
                  'messaging_service_sid': null,
                  'num_media': '3',
                  'num_segments': '1',
                  'price': '-0.00750',
                  'price_unit': 'USD',
                  'sid': 'MMc26223853f8c46b4ab7dfaa6abba0a26',
                  'status': 'received',
                  'subresource_uris': {
                      'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26/Media.json',
                      'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26/Feedback.json'
                  },
                  'to': '+18182008801',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26.json'
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=2&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .messages.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full_page1 response',
    function(done) {
      var body = {
          'end': 1,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=2&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 2,
          'previous_page_uri': null,
          'messages': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'body': 'testing',
                  'date_created': 'Fri, 24 May 2019 17:44:46 +0000',
                  'date_sent': 'Fri, 24 May 2019 17:44:50 +0000',
                  'date_updated': 'Fri, 24 May 2019 17:44:50 +0000',
                  'direction': 'outbound-api',
                  'error_code': null,
                  'error_message': null,
                  'from': '+12019235161',
                  'messaging_service_sid': null,
                  'num_media': '0',
                  'num_segments': '1',
                  'price': '-0.00750',
                  'price_unit': 'USD',
                  'sid': 'SMded05904ccb347238880ca9264e8fe1c',
                  'status': 'sent',
                  'subresource_uris': {
                      'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c/Media.json',
                      'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c/Feedback.json'
                  },
                  'to': '+18182008801',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMded05904ccb347238880ca9264e8fe1c.json'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'body': 'look mom I have media!',
                  'date_created': 'Fri, 24 May 2019 17:44:46 +0000',
                  'date_sent': 'Fri, 24 May 2019 17:44:49 +0000',
                  'date_updated': 'Fri, 24 May 2019 17:44:49 +0000',
                  'direction': 'inbound',
                  'error_code': 30004,
                  'error_message': 'Message blocked',
                  'from': '+12019235161',
                  'messaging_service_sid': null,
                  'num_media': '3',
                  'num_segments': '1',
                  'price': '-0.00750',
                  'price_unit': 'USD',
                  'sid': 'MMc26223853f8c46b4ab7dfaa6abba0a26',
                  'status': 'received',
                  'subresource_uris': {
                      'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26/Media.json',
                      'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26/Feedback.json'
                  },
                  'to': '+18182008801',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/MMc26223853f8c46b4ab7dfaa6abba0a26.json'
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=2&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty_sentdate_less response',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3C=2008-01-02&PageSize=25&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 25,
          'previous_page_uri': null,
          'messages': [],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3C=2008-01-02&PageSize=25&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty_sentdate_equals response',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent=2008-01-02&PageSize=25&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 25,
          'previous_page_uri': null,
          'messages': [],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent=2008-01-02&PageSize=25&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty_sentdate_greater response',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=25&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 25,
          'previous_page_uri': null,
          'messages': [],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=25&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty_sentdate_greater_format1 response',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=06%2F11%2F2019+22%3A05%3A25+MST&PageSize=25&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 25,
          'previous_page_uri': null,
          'messages': [],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=06%2F11%2F2019+22%3A05%3A25+MST&PageSize=25&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty_sentdate_greater_format2 response',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2019-06-11+22%3A05%3A25.000&PageSize=25&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 25,
          'previous_page_uri': null,
          'messages': [],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2019-06-11+22%3A05%3A25.000&PageSize=25&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty_sentdate_greater_format3 response',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=Wed%2C+19+Jun+2019+22%3A04%3A00+-0000&PageSize=25&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 25,
          'previous_page_uri': null,
          'messages': [],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=Wed%2C+19+Jun+2019+22%3A04%3A00+-0000&PageSize=25&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages.list();
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

      var opts = {body: 'body'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages/${sid}.json`;

      var values = {Body: 'body', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'body': 'Hello, this is trash Benson cut and pasted and probably does not do anything useful! \ud83d\udc4d',
          'date_created': 'Thu, 30 Jul 2015 20:12:31 +0000',
          'date_sent': 'Thu, 30 Jul 2015 20:12:33 +0000',
          'date_updated': 'Thu, 30 Jul 2015 20:12:33 +0000',
          'direction': 'outbound-api',
          'error_code': null,
          'error_message': null,
          'from': '+14155552345',
          'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'num_media': '0',
          'num_segments': '1',
          'price': '-0.00750',
          'price_unit': 'USD',
          'sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'sent',
          'subresource_uris': {
              'media': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media.json'
          },
          'to': '+14155552345',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      };

      holodeck.mock(new Response(200, body));

      var opts = {body: 'body'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
