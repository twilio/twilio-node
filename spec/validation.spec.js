'use strict';

const {
  validateRequest,
  validateRequestWithBody,
  validateBody,
  webhook,
} = require('../lib/webhooks/webhooks');
const httpMocks = require('node-mocks-http');
const url = require('url');

const defaultParams = {
  CallSid: 'CA1234567890ABCDE',
  Caller: '+14158675309',
  Digits: '1234',
  From: '+14158675309',
  To: '+18005551212',
};
const token = '12345';
const defaultSignature = 'RSOYDt4T1cUTdK1PDd93/VVr8B8=';
const requestUrl = 'https://mycompany.com/myapp.php?foo=1&bar=2';
const body = '{"property": "value", "boolean": true}';
const bodySignature = '0a1ff7634d9ab3b95db5c9a2dfe9416e41502b283a80c7cf19632632f96e6620';
const requestUrlWithHash = requestUrl + '&bodySHA256=' + bodySignature;
const requestUrlWithHashSignature = 'a9nBmqA0ju/hNViExpshrM61xv4=';

describe('Request validation', () => {
  it('should succeed with the correct signature', () => {
    const isValid = validateRequest(token, defaultSignature, requestUrl, defaultParams);

    expect(isValid).toBeTruthy();
  });

  it('should fail when given the wrong signature', () => {
    const isValid = validateRequest(token, 'WRONG_SIGNATURE', requestUrl, defaultParams);

    expect(isValid).toBeFalsy();
  });

  it('should validate post body correctly', () => {
    const isValid = validateBody(body, bodySignature);

    expect(isValid).toBeTruthy();
  });

  it('should fail to validate with wrong sha', () => {
    const isValid = validateBody(body, 'WRONG_HASH');

    expect(isValid).toBeFalsy();
  });

  it('should validate request body when given', () => {
    const isValid = validateRequestWithBody(token, requestUrlWithHashSignature, requestUrlWithHash, body);

    expect(isValid).toBeTruthy();
  });

  it('should validate request body with only sha param', () => {
    const sig = bodySignature.replace('+', '%2B').replace('=', '%3D');
    const shortUrl = 'https://mycompany.com/myapp.php?bodySHA256=' + sig;
    const isValid = validateRequestWithBody(token, 'y77kIzt2vzLz71DgmJGsen2scGs=', shortUrl, body);

    expect(isValid).toBeTruthy();
  });

  it('should fail validation if given body but no bodySHA256 param', () => {
    const isValid = validateRequestWithBody(token, defaultSignature, requestUrl, defaultParams, body);

    expect(isValid).toBeFalsy();
  });

  it('should fail when signature undefined', () => {
    const isValid = validateRequest(token, undefined, requestUrl, defaultParams);

    expect(isValid).toBeFalsy();
  });

  it('should validate https urls with ports by stripping them', () => {
    const requestUrlWithPort = requestUrl.replace('.com', '.com:1234');
    const isValid = validateRequest(token, defaultSignature, requestUrlWithPort, defaultParams);

    expect(isValid).toBeTruthy();
  });

  it('should validate http urls with ports', () => {
    let requestUrlWithPort = requestUrl.replace('.com', '.com:1234');
    requestUrlWithPort = requestUrlWithPort.replace('https', 'http');
    const signature = 'Zmvh+3yNM1Phv2jhDCwEM3q5ebU='; // hash of http url with port 1234
    const isValid = validateRequest(token, signature, requestUrlWithPort, defaultParams);

    expect(isValid).toBeTruthy();
  });

  it('should validate https urls without ports by adding standard port 443', () => {
    const signature = 'kvajT1Ptam85bY51eRf/AJRuM3w=';  // hash of https url with port 443
    const isValid = validateRequest(token, signature, requestUrl, defaultParams);

    expect(isValid).toBeTruthy();
  });

  it('should validate http urls without ports by adding standard port 80', () => {
    const requestUrlHttp = requestUrl.replace('https', 'http');
    const signature = '0ZXoZLH/DfblKGATFgpif+LLRf4=';  // hash of http url with port 80
    const isValid = validateRequest(token, signature, requestUrlHttp, defaultParams);

    expect(isValid).toBeTruthy();
  });

  it('should validate urls with credentials', () => {
    const urlWithCreds = 'https://user:pass@mycompany.com/myapp.php?foo=1&bar=2';
    const signature = 'CukzLTc1tT5dXEDIHm/tKBanW10='; // hash of this url
    const isValid = validateRequest(token, signature, urlWithCreds, defaultParams);

    expect(isValid).toBeTruthy();
  });

  it('should validate urls with just username', () => {
    const urlWithCreds = 'https://user@mycompany.com/myapp.php?foo=1&bar=2';
    const signature = '2YRLlVAflCqxaNicjMpJcSTgzSs='; // hash of this url
    const isValid = validateRequest(token, signature, urlWithCreds, defaultParams);

    expect(isValid).toBeTruthy();
  });

  it('should validate urls with credentials by adding port', () => {
    const urlWithCreds = 'https://user:pass@mycompany.com/myapp.php?foo=1&bar=2';
    const signature = 'ZQFR1PTIZXF2MXB8ZnKCvnnA+rI='; // hash of this url with port 443
    const isValid = validateRequest(token, signature, urlWithCreds, defaultParams);

    expect(isValid).toBeTruthy();
  });

  it('should validate urls with special characters', () => {
    const specialRequestUrl = requestUrl + '&Body=It\'s+amazing';
    const signature = 'dsq4Ehbj6cs+KdTkpF5sSSplOWw=';
    const isValid = validateRequest(token, signature, specialRequestUrl, defaultParams);

    expect(isValid).toBeTruthy();
  });
});

describe('Request validation middleware', () => {
  const fullUrl = new url.URL(requestUrl);
  const defaultRequest = {
    method: 'POST',
    protocol: fullUrl.protocol,
    host: fullUrl.host,
    headers: {
      'X-Twilio-Signature': defaultSignature,
      host: fullUrl.host,
    },
    url: fullUrl.pathname + fullUrl.search,
    originalUrl: fullUrl.pathname + fullUrl.search,
    body: defaultParams,
  };
  const defaultRequestWithoutTwilioSignature = {
    method: 'POST',
    protocol: fullUrl.protocol,
    host: fullUrl.host,
    headers: {
      host: fullUrl.host,
    },
    url: fullUrl.pathname + fullUrl.search,
    originalUrl: fullUrl.pathname + fullUrl.search,
    body: defaultParams,
  };
  const middleware = webhook(token);
  let response;

  beforeEach(() => {
    response = httpMocks.createResponse();
  });

  it('should validate standard requests', done => {
    const request = httpMocks.createRequest(defaultRequest);

    middleware(request, response, () => {
      // This test will only pass if the middleware calls next().
      done();
    });

    expect(response.statusCode).toEqual(200);
  });

  it('should send 403 for invalid signatures', () => {
    const newUrl = fullUrl.pathname + fullUrl.search + '&somethingUnexpected=true';
    const request = httpMocks.createRequest(Object.assign({}, defaultRequest, {
      originalUrl: newUrl,
    }));

    middleware(request, response, () => {
      expect(true).toBeFalsy();
    });

    expect(response.statusCode).toEqual(403);
  });

  it('should bypass validation if given {validate:false}', done => {
    const request = httpMocks.createRequest(defaultRequest);

    const middleware = webhook(token, {
      validate: false,
    });

    middleware(request, response, () => {
      done();
    });

    expect(response.statusCode).toEqual(200);
  });

  it('should accept manual host+proto', done => {
    const request = httpMocks.createRequest(Object.assign({}, defaultRequest, {
      host: 'someothercompany.com',
      protocol: 'http',
      headers: Object.assign({}, defaultRequest.headers, {
        host: 'someothercompany.com',
      }),
    }));

    const middleware = webhook(token, {
      host: 'mycompany.com',
      protocol: 'https',
    });

    middleware(request, response, () => {
      done();
    });

    expect(response.statusCode).toEqual(200);
  });

  it('should accept manual url and override host+proto', done => {
    const request = httpMocks.createRequest(Object.assign({}, defaultRequest, {
      host: 'someothercompany.com',
      protocol: 'http',
      headers: Object.assign({}, defaultRequest.headers, {
        host: 'someothercompany.com',
      }),
    }));

    const middleware = webhook(token, {
      host: 'myothercompany.com',
      protocol: 'ftp',
      url: requestUrl,
    });

    middleware(request, response, () => {
      done();
    });

    expect(response.statusCode).toEqual(200);

    if (response.statusCode !== 200) {
      done();
    }
  });

  it('should validate post body if given a query param', done => {
    const request = httpMocks.createRequest(Object.assign({}, defaultRequest, {
      originalUrl: requestUrlWithHash.substring(requestUrlWithHash.indexOf('.com/') + 4),
      body,
      headers: Object.assign({}, defaultRequest.headers, {
        'X-Twilio-Signature': requestUrlWithHashSignature,
      }),
    }));

    middleware(request, response, () => {
      done();
    });

    expect(response.statusCode).toEqual(200);

    if (response.statusCode !== 200) {
      done();
    }
  });

  it('should fail validation of post body with wrong hash', () => {
    const request = httpMocks.createRequest(Object.assign({}, defaultRequest, {
      originalUrl: requestUrlWithHash.substring(requestUrlWithHash.indexOf('.com/') + 4).slice(0, -1),
      body,
      headers: Object.assign({}, defaultRequest.headers, {
        'X-Twilio-Signature': requestUrlWithHashSignature,
      }),
    }));

    middleware(request, response, () => {
      expect(true).toBeFalsy();
    });

    expect(response.statusCode).toEqual(403);
  });

  it('should fail if no twilio signature is provided in the request headers', () => {
    const newUrl = fullUrl.pathname + fullUrl.search + '&somethingUnexpected=true';
    const request = httpMocks.createRequest(Object.assign({},
      defaultRequestWithoutTwilioSignature, {
        originalUrl: newUrl,
      }));

    middleware(request, response, () => {
      expect(true).toBeFalsy();
    });

    expect(response.statusCode).toEqual(400);
  });
});
