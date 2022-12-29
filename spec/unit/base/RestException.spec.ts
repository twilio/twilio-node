import RestException from "../../../lib/base/RestException";

describe("exception gets created from string", function () {
  it("should test serialize without details", function () {
    const response = {
      statusCode: 200,
      body: '{"message":"test", "code":81022,"more_info": "https://www.twilio.com/docs/errors/81022"}',
    };

    const exception = new RestException(response);
    expect(exception.status).toEqual(200);
    expect(exception.message).toEqual("test");
    expect(exception.code).toEqual(81022);
    expect(exception.moreInfo).toEqual(
      "https://www.twilio.com/docs/errors/81022"
    );
  });
  it("should test serialize from improper json string", function () {
    const response = {
      statusCode: 200,
      body: '{message":test", "code:81022,"more_info": "https://www.twilio.com/docs/errors/12100"}',
    };
    const exception = new RestException(response);
    expect(exception.status).toEqual(200);
    expect(exception.message).toEqual("Failed to parse response body");
    expect(exception.code).toEqual(12100);
    expect(exception.moreInfo).toEqual(
      "https://www.twilio.com/docs/api/errors/12100"
    );
    expect(exception.details["error"] instanceof Error).toBe(true);
  });
});

describe("exception gets created from json error", function () {
  it("should create exception without details", function () {
    const response = {
      statusCode: 200,
      body: {
        message: "test",
        code: 81022,
        more_info: "https://www.twilio.com/docs/errors/81022",
      },
    };

    var exception = new RestException(response);
    expect(exception.status).toEqual(200);
    expect(exception.message).toEqual("test");
    expect(exception.code).toEqual(81022);
    expect(exception.moreInfo).toEqual(
      "https://www.twilio.com/docs/errors/81022"
    );
    expect(exception.details).toEqual(undefined);
  });

  it("should create exception with details", function () {
    const details = {
      foo: "bar",
    };

    const response = {
      statusCode: 200,
      body: {
        message: "test",
        code: 81022,
        more_info: "https://www.twilio.com/docs/errors/81022",
        details: details,
      },
    };

    const exception = new RestException(response);
    expect(exception.details).toEqual(details);
  });
});
