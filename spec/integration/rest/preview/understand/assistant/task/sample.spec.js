'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Sample', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var taskSid = 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Samples/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'language': 'language',
          'tagged_text': 'tagged_text',
          'date_updated': '2015-07-30T20:00:00Z',
          'source_channel': null
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
      var body = JSON.stringify({
          'samples': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'language': 'language',
                  'tagged_text': 'tagged_text',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'source_channel': 'sms'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?Language=language&PageSize=50&Page=0',
              'previous_page_url': null,
              'key': 'samples',
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?Language=language&PageSize=50&Page=0',
              'page': 0,
              'page_size': 50
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .samples.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'samples': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'language': 'language',
                  'tagged_text': 'tagged_text',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'source_channel': 'sms'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?Language=language&PageSize=50&Page=0',
              'previous_page_url': null,
              'key': 'samples',
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?Language=language&PageSize=50&Page=0',
              'page': 0,
              'page_size': 50
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .samples.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Samples',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'samples': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'language': 'language',
                  'tagged_text': 'tagged_text',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'source_channel': 'sms'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?Language=language&PageSize=50&Page=0',
              'previous_page_url': null,
              'key': 'samples',
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?Language=language&PageSize=50&Page=0',
              'page': 0,
              'page_size': 50
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .samples.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var taskSid = 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Samples`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'samples': [],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?Language=language&PageSize=50&Page=0',
              'previous_page_url': null,
              'key': 'samples',
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?Language=language&PageSize=50&Page=0',
              'page': 0,
              'page_size': 50
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'samples': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'language': 'language',
                  'tagged_text': 'tagged_text',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'source_channel': 'sms'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?Language=language&PageSize=50&Page=0',
              'previous_page_url': null,
              'key': 'samples',
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?Language=language&PageSize=50&Page=0',
              'page': 0,
              'page_size': 50
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {language: 'language', taggedText: 'tagged_text'};
      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var taskSid = 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Samples`;

      var values = {Language: 'language', TaggedText: 'tagged_text', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'language': 'language',
          'tagged_text': 'tagged_text',
          'date_updated': '2015-07-30T20:00:00Z',
          'source_channel': 'alexa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {language: 'language', taggedText: 'tagged_text'};
      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples.create(opts);
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
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var taskSid = 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Samples/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = JSON.stringify({
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'language': 'language',
          'tagged_text': 'tagged_text',
          'date_updated': '2015-07-30T20:00:00Z',
          'source_channel': 'alexa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var assistantSid = 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var taskSid = 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/understand/Assistants/${assistantSid}/Tasks/${taskSid}/Samples/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .tasks('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
