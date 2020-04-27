var RestException = require('../../../lib/base/RestException');

describe('exception gets created from string', function () {
  it('should test serialize without details', function () {
    const response = {
      statusCode: 200,
      body: '{"message":"test", "code":81022,"more_info": "https://www.twilio.com/docs/errors/81022"}',
    };
    const exception = new RestException(response);
    expect(exception.status).toEqual(200);
    expect(exception.message).toEqual('test');
    expect(exception.code).toEqual(81022);
    expect(exception.moreInfo).toEqual('https://www.twilio.com/docs/errors/81022');
  });
});

describe('exception gets created from json error', function () {

  it('should create exception without details', function () {
    const response = {
      statusCode: 200,
      body: {
        message: 'test',
        code: 81022,
        more_info: 'https://www.twilio.com/docs/errors/81022',
      },
    };

    var exception = new RestException(response);
    expect(exception.status).toEqual(200);
    expect(exception.message).toEqual('test');
    expect(exception.code).toEqual(81022);
    expect(exception.moreInfo).toEqual('https://www.twilio.com/docs/errors/81022');
    expect(exception.details).toEqual(undefined);
  });

  it('should create exception with details', function () {
    const details = {
      foo: 'bar',
    };

    const response = {
      statusCode: 200,
      body: {
        message: 'test',
        code: 81022,
        more_info: 'https://www.twilio.com/docs/errors/81022',
        details: details,
      },
    };

    const exception = new RestException(response);
    expect(exception.details).toEqual(details);
  });
});
