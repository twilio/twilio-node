'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
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

describe('FieldValue', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldValues('UCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        assistantSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        fieldTypeSid: 'UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'UCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/FieldTypes/<%= fieldTypeSid %>/FieldValues/<%= sid %>')(solution);

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
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues/UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'field_type_sid': 'UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'language': 'language',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'value': 'value',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_created': '2015-07-30T20:00:00Z',
          'sid': 'UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'synonym_of': null
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldValues('UCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'field_values': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues/UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'field_type_sid': 'UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'language': 'language',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'value': 'value',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'synonym_of': 'UCbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues?PageSize=50&Page=0',
              'page_size': 50,
              'previous_page_url': null,
              'key': 'field_values',
              'page': 0,
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .fieldValues.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'field_values': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues/UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'field_type_sid': 'UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'language': 'language',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'value': 'value',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'synonym_of': 'UCbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues?PageSize=50&Page=0',
              'page_size': 50,
              'previous_page_url': null,
              'key': 'field_values',
              'page': 0,
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .fieldValues.each({}, () => done());
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'field_values': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues/UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'field_type_sid': 'UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'language': 'language',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'value': 'value',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'synonym_of': 'UCbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues?PageSize=50&Page=0',
              'page_size': 50,
              'previous_page_url': null,
              'key': 'field_values',
              'page': 0,
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .fieldValues.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldValues.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        assistantSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        fieldTypeSid: 'UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/FieldTypes/<%= fieldTypeSid %>/FieldValues')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'field_values': [],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues?PageSize=50&Page=0',
              'page_size': 50,
              'previous_page_url': null,
              'key': 'field_values',
              'page': 0,
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldValues.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'field_values': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues/UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'field_type_sid': 'UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'language': 'language',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'value': 'value',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_created': '2015-07-30T20:00:00Z',
                  'sid': 'UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'synonym_of': 'UCbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues?PageSize=50&Page=0',
              'page_size': 50,
              'previous_page_url': null,
              'key': 'field_values',
              'page': 0,
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldValues.list();
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
      holodeck.mock(new Response(500, '{}'));

      var opts = {language: 'language', value: 'value'};
      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldValues.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        assistantSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        fieldTypeSid: 'UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/FieldTypes/<%= fieldTypeSid %>/FieldValues')(solution);

      var values = {Language: 'language', Value: 'value', };
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
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes/UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldValues/UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'field_type_sid': 'UBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'language': 'language',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'value': 'value',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_created': '2015-07-30T20:00:00Z',
          'sid': 'UCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'synonym_of': 'UCbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
      });

      holodeck.mock(new Response(201, body));

      var opts = {language: 'language', value: 'value'};
      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldValues.create(opts);
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
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldValues('UCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        assistantSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        fieldTypeSid: 'UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'UCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/FieldTypes/<%= fieldTypeSid %>/FieldValues/<%= sid %>')(solution);

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

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldTypes('UBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .fieldValues('UCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

