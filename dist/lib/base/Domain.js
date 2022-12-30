"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
/**
 * Base domain object
 *
 * @constructor
 *
 * @param {Twilio} twilio - A Twilio Client
 * @param {string} baseUrl - Base url for this domain
 */
class Domain {
    /**
     * Base domain object
     *
     * @constructor
     *
     * @param {Twilio} twilio - A Twilio Client
     * @param {string} baseUrl - Base url for this domain
     */
    constructor(twilio, baseUrl) {
        this.twilio = twilio;
        this.baseUrl = baseUrl;
    }
    /**
     * Turn a uri into an absolute url
     *
     * @param  {string} uri uri to transform
     * @return {string} absolute url
     */
    absoluteUrl(uri) {
        var result = "";
        if (typeof this.baseUrl === "string") {
            const cleanBaseUrl = (0, utility_1.trim)(this.baseUrl, "/");
            result += cleanBaseUrl;
            result += "/";
        }
        if (typeof uri === "string") {
            uri = (0, utility_1.trim)(uri, "/");
            if (result === "") {
                result += "/";
            }
            result += uri;
        }
        return result;
    }
    /**
     * Make request to this domain
     *
     * @param {object} opts request options
     * @return {Promise} request promise
     */
    request(opts) {
        return this.twilio.request({
            ...opts,
            uri: this.absoluteUrl(opts.uri),
        });
    }
}
exports.default = Domain;
