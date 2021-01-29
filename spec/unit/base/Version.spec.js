const Version = require('../../../lib/base/Version');

describe('fetch method', function() {
  it('should not throw an exception on 3xx status code', function(done) {
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

  it('should throw an exception if status code >= 400', function(done) {
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

