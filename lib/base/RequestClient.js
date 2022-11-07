"use strict";

var axios = require("axios");
var fs = require("fs");
var HttpsProxyAgent = require("https-proxy-agent");
var qs = require("qs");
var https = require("https");
var Response = require("../http/response");
var Request = require("../http/request");

const DEFAULT_CONTENT_TYPE = "application/x-www-form-urlencoded";
const DEFAULT_TIMEOUT = 30000;

/**
 * Make http request
 * @param {object} opts - The options passed to https.Agent
 * @param {number} opts.timeout - https.Agent timeout option. Used as the socket timeout, AND as the default request timeout.
 * @param {boolean} opts.keepAlive - https.Agent keepAlive option
 * @param {number} opts.keepAliveMsecs - https.Agent keepAliveMsecs option
 * @param {number} opts.maxSockets - https.Agent maxSockets option
 * @param {number} opts.maxTotalSockets - https.Agent maxTotalSockets option
 * @param {number} opts.maxFreeSockets - https.Agent maxFreeSockets option
 * @param {string} opts.scheduling - https.Agent scheduling option
 */
class RequestClient {
  constructor(opts) {
    opts = opts || {};
    this.defaultTimeout = opts.timeout || DEFAULT_TIMEOUT;

    // construct an https agent
    let agentOpts = {
      timeout: this.defaultTimeout,
      keepAlive: opts.keepAlive,
      keepAliveMsecs: opts.keepAliveMsecs,
      maxSockets: opts.maxSockets,
      maxTotalSockets: opts.maxTotalSockets,
      maxFreeSockets: opts.maxFreeSockets,
      scheduling: opts.scheduling,
    };

    let agent;
    if (process.env.HTTP_PROXY) {
      // Note: if process.env.HTTP_PROXY is set, we're not able to apply the given
      // socket timeout. See: https://github.com/TooTallNate/node-https-proxy-agent/pull/96
      agent = new HttpsProxyAgent(process.env.HTTP_PROXY);
    } else {
      agent = new https.Agent(agentOpts);
    }

    // construct an axios instance
    this.axios = axios.create();
    this.axios.defaults.headers.post["Content-Type"] = DEFAULT_CONTENT_TYPE;
    this.axios.defaults.httpsAgent = agent;
  }

  /**
   * Make http request
   * @param {object} opts - The options argument
   * @param {string} opts.method - The http method
   * @param {string} opts.uri - The request uri
   * @param {string} [opts.username] - The username used for auth
   * @param {string} [opts.password] - The password used for auth
   * @param {object} [opts.headers] - The request headers
   * @param {object} [opts.params] - The request params
   * @param {object} [opts.data] - The request data
   * @param {int} [opts.timeout=30000] - The request timeout in milliseconds
   * @param {boolean} [opts.allowRedirects] - Should the client follow redirects
   * @param {boolean} [opts.forever] - Set to true to use the forever-agent
   * @param {string} [opts.logLevel] - Show debug logs
   */

  request(opts) {
    opts = opts || {};
    if (!opts.method) {
      throw new Error("http method is required");
    }

    if (!opts.uri) {
      throw new Error("uri is required");
    }

    var headers = opts.headers || {};

    if (!headers.Connection && !headers.connection && opts.forever) {
      headers.Connection = "keep-alive";
    } else if (!headers.Connection && !headers.connection) {
      headers.Connection = "close";
    }

    if (opts.username && opts.password) {
      var b64Auth = Buffer.from(opts.username + ":" + opts.password).toString(
        "base64"
      );
      headers.Authorization = "Basic " + b64Auth;
    }

    var options = {
      timeout: opts.timeout || this.defaultTimeout,
      maxRedirects: opts.allowRedirects ? 10 : 0,
      url: opts.uri,
      method: opts.method,
      headers: opts.headers,
      proxy: false,
      validateStatus: (status) => status >= 100 && status < 600,
    };

    if (process.env.TWILIO_CA_BUNDLE !== undefined) {
      if (this.ca === undefined) {
        this.ca = fs.readFileSync(process.env.TWILIO_CA_BUNDLE);
      }
      options.ca = this.ca;
    }

    if (opts.data) {
      options.data = qs.stringify(opts.data, { arrayFormat: "repeat" });
    }

    if (opts.params) {
      options.params = opts.params;
      options.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      };
    }

    var optionsRequest = {
      method: options.method,
      url: options.url,
      auth: b64Auth || null,
      params: options.params,
      data: opts.data,
      headers: options.headers,
      ca: options.ca,
    };

    if (opts.logLevel === "debug") {
      this.logRequest(options);
    }

    var _this = this;
    this.lastResponse = undefined;
    this.lastRequest = new Request(optionsRequest);

    return this.axios(options)
      .then((response) => {
        if (opts.logLevel === "debug") {
          console.log(`response.statusCode: ${response.status}`);
          console.log(`response.headers: ${JSON.stringify(response.headers)}`);
        }
        _this.lastResponse = new Response(
          response.status,
          response.data,
          response.headers
        );
        return {
          statusCode: response.status,
          body: response.data,
          headers: response.headers,
        };
      })
      .catch((error) => {
        _this.lastResponse = undefined;
        throw error;
      });
  }

  filterLoggingHeaders(headers) {
    return Object.keys(headers).filter((header) => {
      return !"authorization".includes(header.toLowerCase());
    });
  }

  logRequest(options) {
    console.log("-- BEGIN Twilio API Request --");
    console.log(`${options.method} ${options.url}`);

    if (options.params) {
      console.log("Querystring:");
      console.log(options.params);
    }

    if (options.headers) {
      console.log("Headers:");
      const filteredHeaderKeys = this.filterLoggingHeaders(options.headers);
      filteredHeaderKeys.forEach((header) =>
        console.log(`${header}: ${options.headers[header]}`)
      );
    }

    console.log("-- END Twilio API Request --");
  }
}

module.exports = RequestClient;
