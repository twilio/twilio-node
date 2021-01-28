const Version = require('../../../lib/base/Version');
const Holodeck = require('../../integration/holodeck')
const Response = require('../../../lib/http/response');
const Twilio = require('../../../lib');

describe('fetch method', function () {
  it('should not throw an exception on 3xx status code', function (done) {
    const body = {test: true};
    const version = new Version({
      request: () => Promise.resolve({statusCode: 307, body}),
    }, {});

    version.fetch({}).then(response => {
      expect(response).toBeDefined();
      expect(response).toEqual(body);
      done();
    });
  });

  it('should throw an exception if status code >= 400', function (done) {
    const body = {message: 'invalid body'};
    const version = new Version({
      request: () => Promise.resolve({statusCode: 400, body}),
    }, null);

    version.fetch({}).catch(error => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(400);
      expect(error.message).toEqual(body.message);
      done();
    });
  });
});

describe('Paging limit', function () {
  const body = {
    'next_page_uri': '/2010-04-01/Accounts/AC123/Messages.json?Page=1',
    'messages': [{'body': 'payload0'}, {'body': 'payload1'}],
    'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages.json?To=%2B123456789&From=%2B987654321&DateSent%3E=2008-01-02&PageSize=2&Page=0'
  };

  beforeEach(function () {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });

  it('should limit results to one result',
    function (done) {
      const messages = [];
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        .messages.list({limit: 1}, (m => {
        messages.push(m);
        expect(messages.length).toEqual(1);
      }));
      done();
    });
});

