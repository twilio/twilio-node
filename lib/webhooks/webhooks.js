'use strict';

var crypto = require('crypto');
var _ = require('lodash');
var scmp = require('scmp');
var urllib = require('url');
var Url = require('url-parse');

/**
 * Utility function to construct the URL string, since Node.js url library won't include standard port numbers
 *
 * @param {Url} parsedUrl - The parsed url object that Twilio requested on your server
 * @returns {string} - URL with standard port number included
 */
function buildUrlWithStandardPort(parsedUrl) {
  let url = '';
  const port = parsedUrl.protocol === 'https:' ? ':443' : ':80';

  url += parsedUrl.protocol ? parsedUrl.protocol + '//' : '';
  url += parsedUrl.username;
  url += parsedUrl.password ? ':' + parsedUrl.password : '';
  url += (parsedUrl.username || parsedUrl.password) ? '@' : '';
  url += parsedUrl.host ? parsedUrl.host + port : '';
  url += parsedUrl.pathname + parsedUrl.query + parsedUrl.hash;

  return url;
}

/**
 Utility function to add a port number to a URL

 @param {Url} parsedUrl - The parsed url object that Twilio requested on your server
 @returns {string} - URL with port
 */
function addPort(parsedUrl) {
  if (!parsedUrl.port) {
    return buildUrlWithStandardPort(parsedUrl);
  }
  return parsedUrl.toString();
}

/**
 Utility function to remove a port number from a URL

 @param {Url} parsedUrl - The parsed url object that Twilio requested on your server
 @returns {string} - URL without port
 */
function removePort(parsedUrl) {
  parsedUrl.set('port', '');
  return parsedUrl.toString();
}

/**
 Utility function to get the expected signature for a given request

 @param {string} authToken - The auth token, as seen in the Twilio portal
 @param {string} url - The full URL (with query string) you configured to handle this request
 @param {object} params - the parameters sent with this request
 @returns {string} - signature
 */
function getExpectedTwilioSignature(authToken, url, params) {
  if (url.indexOf('bodySHA256') !== -1) {
    params = {};
  }

  var data = Object.keys(params)
    .sort()
    .reduce((acc, key) => acc + key + params[key], url);

  return crypto
    .createHmac('sha1', authToken)
    .update(Buffer.from(data, 'utf-8'))
    .digest('base64');
}

/**
 Utility function to get the expected body hash for a given request's body

 @param {string} body - The plain-text body of the request
 */
function getExpectedBodyHash(body) {
  return crypto
    .createHash('sha256')
    .update(Buffer.from(body, 'utf-8'))
    .digest('hex');
}

/**
 Utility function to validate an incoming request is indeed from Twilio

 @param {string} authToken - The auth token, as seen in the Twilio portal
 @param {string} twilioHeader - The value of the X-Twilio-Signature header from the request
 @param {string} url - The full URL (with query string) you configured to handle this request
 @param {object} params - the parameters sent with this request
 @returns {boolean} - valid
 */
function validateRequest(authToken, twilioHeader, url, params) {
  twilioHeader = twilioHeader || '';
  const urlObject = new Url(url);
  const urlWithPort = addPort(urlObject);
  const urlWithoutPort = removePort(urlObject);

  /*
   *  Check signature of the url with and without the port number
   *  since signature generation on the back end is inconsistent
   */
  const signatureWithPort = getExpectedTwilioSignature(authToken, urlWithPort, params);
  const signatureWithoutPort = getExpectedTwilioSignature(authToken, urlWithoutPort, params);
  const validSignatureWithPort = scmp(Buffer.from(twilioHeader), Buffer.from(signatureWithPort));
  const validSignatureWithoutPort = scmp(Buffer.from(twilioHeader), Buffer.from(signatureWithoutPort));

  return validSignatureWithoutPort || validSignatureWithPort;
}

function validateBody(body, bodyHash) {
  var expectedHash = getExpectedBodyHash(body);
  return scmp(Buffer.from(bodyHash), Buffer.from(expectedHash));
}

/**
 Utility function to validate an incoming request is indeed from Twilio. This also validates
 the request body against the bodySHA256 post parameter.

 @param {string} authToken - The auth token, as seen in the Twilio portal
 @param {string} twilioHeader - The value of the X-Twilio-Signature header from the request
 @param {string} url - The full URL (with query string) you configured to handle this request
 @param {string} body - The body of the request
 @returns {boolean} - valid
 */
function validateRequestWithBody(authToken, twilioHeader, url, body) {
  const urlObject = new Url(url, true);
  return validateRequest(authToken, twilioHeader, url, {}) &&
    validateBody(body, urlObject.query.bodySHA256);
}

/**
 Utility function to validate an incoming request is indeed from Twilio (for use with express).
 adapted from https://github.com/crabasa/twiliosig

 @param {object} request - An expressjs request object (http://expressjs.com/api.html#req.params)
 @param {string} authToken - The auth token, as seen in the Twilio portal
 @param {object} opts - options for request validation:
    - url: The full URL (with query string) you used to configure the webhook with Twilio - overrides host/protocol options
    - host: manually specify the host name used by Twilio in a number's webhook config
    - protocol: manually specify the protocol used by Twilio in a number's webhook config
 */
function validateExpressRequest(request, authToken, opts) {
  var options = opts || {};
  var webhookUrl;

  if (options.url) {
    // Let the user specify the full URL
    webhookUrl = options.url;
  } else {
    // Use configured host/protocol, or infer based on request
    var protocol = options.protocol || request.protocol;
    var host = options.host || request.headers.host;

    webhookUrl = urllib.format({
      protocol: protocol,
      host: host,
      pathname: request.originalUrl,
    });
    if (request.originalUrl.search(/\?/) >= 0) {
      webhookUrl = webhookUrl.replace(/%3F/g, '?');
      webhookUrl = webhookUrl.replace(/%3A/g, ':');
      webhookUrl = webhookUrl.replace(/%40/g, '@');
    }

  }

  if (webhookUrl.indexOf('bodySHA256') > 0) {
    return validateRequestWithBody(
      authToken,
      request.header('X-Twilio-Signature'),
      webhookUrl,
      request.body || {}
    );
  } else {
    return validateRequest(
      authToken,
      request.header('X-Twilio-Signature'),
      webhookUrl,
      request.body || {}
    );
  }
}

/**
Express middleware to accompany a Twilio webhook. Provides Twilio
request validation, and makes the response a little more friendly for our
TwiML generator.  Request validation requires the express.urlencoded middleware
to have been applied (e.g. app.use(express.urlencoded()); in your app config).

Options:
- validate: {Boolean} whether or not the middleware should validate the request
    came from Twilio.  Default true. If the request does not originate from
    Twilio, we will return a text body and a 403.  If there is no configured
    auth token and validate=true, this is an error condition, so we will return
    a 500.
- host: manually specify the host name used by Twilio in a number's webhook config
- protocol: manually specify the protocol used by Twilio in a number's webhook config
- url: The full URL (with query string) you used to configure the webhook with Twilio - overrides host/protocol options

Returns a middleware function.

Examples:
var webhookMiddleware = twilio.webhook();
var webhookMiddleware = twilio.webhook('asdha9dhjasd'); //init with auth token
var webhookMiddleware = twilio.webhook({
    validate:false // don't attempt request validation
});
var webhookMiddleware = twilio.webhook({
    host: 'hook.twilio.com',
    protocol: 'https'
});
 */
function webhook() {
  var opts = {
    validate: true,
  };

  // Process arguments
  var tokenString;
  for (var i = 0, l = arguments.length; i < l; i++) {
    var arg = arguments[i];
    if (typeof arg === 'string') {
      tokenString = arg;
    } else {
      opts = _.extend(opts, arg);
    }
  }

  // set auth token from input or environment variable
  opts.authToken = tokenString ? tokenString : process.env.TWILIO_AUTH_TOKEN;

  // Create middleware function
  return function hook(request, response, next) {
    // Do validation if requested
    if (opts.validate) {
      // Check if the 'X-Twilio-Signature' header exists or not
      if (!request.header('X-Twilio-Signature')) {
        return response.type('text/plain')
          .status(400)
          .send('No signature header error - X-Twilio-Signature header does not exist, maybe this request is not coming from Twilio.');
      }
      // Check for a valid auth token
      if (!opts.authToken) {
        console.error('[Twilio]: Error - Twilio auth token is required for webhook request validation.');
        response.type('text/plain')
          .status(500)
          .send('Webhook Error - we attempted to validate this request without first configuring our auth token.');
      } else {
        // Check that the request originated from Twilio
        var valid = validateExpressRequest(request, opts.authToken, {
          url: opts.url,
          host: opts.host,
          protocol: opts.protocol,
        });

        if (valid) {
          next();
        } else {
          return response
            .type('text/plain')
            .status(403)
            .send('Twilio Request Validation Failed.');
        }
      }
    } else {
      next();
    }
  };
}

module.exports = {
  getExpectedTwilioSignature,
  getExpectedBodyHash,
  validateRequest,
  validateRequestWithBody,
  validateExpressRequest,
  validateBody,
  webhook,
};
