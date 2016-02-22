'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('IpAccessControlList', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .ipAccessControlLists('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/IpAccessControlLists/<%= sid %>')(solution);

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
          'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Fri, 17 Jul 2015 21:25:15 +0000',
          'date_updated': 'Fri, 17 Jul 2015 21:25:15 +0000',
          'friendly_name': 'aaaa',
          'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .ipAccessControlLists('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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
                                      .ipAccessControlLists('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/IpAccessControlLists/<%= sid %>')(solution);

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
                                      .ipAccessControlLists('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
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
        ipAccessControlListSid: 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .ipAccessControlLists.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/IpAccessControlLists')(solution);

      var values = {
        IpAccessControlListSid: 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
          'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Fri, 17 Jul 2015 21:25:15 +0000',
          'date_updated': 'Fri, 17 Jul 2015 21:25:15 +0000',
          'friendly_name': 'aaaa',
          'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var opts = {
        ipAccessControlListSid: 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .ipAccessControlLists.create(opts);
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
                                      .ipAccessControlLists.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        trunkSid: 'TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://trunking.twilio.com/v1/Trunks/<%= trunkSid %>/IpAccessControlLists')(solution);

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
          'first_page_uri': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0',
          'ip_access_control_lists': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Fri, 17 Jul 2015 21:25:15 +0000',
                  'date_updated': 'Fri, 17 Jul 2015 21:25:15 +0000',
                  'friendly_name': 'aaaa',
                  'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'last_page_uri': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .ipAccessControlLists.list();
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
          'first_page_uri': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0',
          'ip_access_control_lists': [],
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'uri': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                      .ipAccessControlLists.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

