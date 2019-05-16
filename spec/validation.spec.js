'use strict';

const {
    validateRequest,
    validateRequestWithBody,
    validateBody,
    webhook,
} = require('../lib/webhooks/webhooks');
const httpMocks = require('node-mocks-http');
const url = require('url');

const cloneObject = require('lodash/clone')

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
const body = "{\"property\": \"value\", \"boolean\": true}";
const bodySignature = "0a1ff7634d9ab3b95db5c9a2dfe9416e41502b283a80c7cf19632632f96e6620";
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
        const shortUrl = 'https://mycompany.com/myapp.php?bodySHA256=' + bodySignature.replace('+', '%2B').replace('=', '%3D');
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
});

describe('Request validation middleware', () => {
    const fullUrl = new url.URL(requestUrl);
    const defaultRequest = {
        method: 'POST',
        protocol: fullUrl.protocol,
        host: fullUrl.host,
        headers: {
            'X-Twilio-Signature': defaultSignature,
            'host': fullUrl.host,
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

        middleware(request, response, error => {
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

        middleware(request, response, error => {
            expect(true).toBeFalsy();
        });

        expect(response.statusCode).toEqual(403);
    });

    it('should send 403 when no twilio signature header', () => {
        const newUrl = fullUrl.pathname + fullUrl.search + '&somethingUnexpected=true';

        // Make a copy of the default request so the header object can be modified without
        // affecting other tests.
        const noSignatureRequest = Object.assign({}, defaultRequest);
        noSignatureRequest.headers = Object.assign({}, defaultRequest.headers);
        delete noSignatureRequest.headers['X-Twilio-Signature'];

        const request = httpMocks.createRequest(Object.assign({}, noSignatureRequest, {
            originalUrl: newUrl,
        }));

        middleware(request, response, error => {
            expect(true).toBeFalsy();
        });

        expect(response.statusCode).toEqual(403);
    });

    it('should bypass validation if given {validate:false}', done => {
        const request = httpMocks.createRequest(defaultRequest);

        const middleware = webhook(token, {
            validate: false,
        });

        middleware(request, response, error => {
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

        middleware(request, response, error => {
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

        middleware(request, response, error => {
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

        middleware(request, response, error => {
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

        middleware(request, response, error => {
            expect(true).toBeFalsy();
        });

        expect(response.statusCode).toEqual(403);
    });
});
