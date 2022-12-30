"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTwilio = void 0;
const RequestClient_1 = __importDefault(require("./RequestClient")); /* jshint ignore:line */
const os = require("os"); /* jshint ignore:line */
const url = require("url"); /* jshint ignore:line */
const moduleInfo = require("../../package.json"); /* jshint ignore:line */
const util = require("util"); /* jshint ignore:line */
const RestException = require("../base/RestException"); /* jshint ignore:line */
/* jshint ignore:start */
/**
 * Parent class for Twilio Client that implements request & validation logic
 *
 * @constructor BaseTwilio
 *
 * @param {string} username -
 *          The username used for authentication. This is normally account sid, but if using key/secret auth will be
 *          the api key sid.
 * @param {string} password -
 *          The password used for authentication. This is normally auth token, but if using key/secret auth will be
 *          the secret.
 * @param {ClientOpts} [opts] - The options argument
 *
 * @returns {BaseTwilio} A new instance of BaseTwilio
 */
/* jshint ignore:end */
class BaseTwilio {
    constructor(username, password, opts) {
        this.opts = opts || {};
        this.env = this.opts.env || process.env;
        this.username = username || this.env.TWILIO_ACCOUNT_SID;
        this.password = password || this.env.TWILIO_AUTH_TOKEN;
        this.accountSid = this.opts.accountSid || this.username;
        this.edge = this.opts.edge || this.env.TWILIO_EDGE;
        this.region = this.opts.region || this.env.TWILIO_REGION;
        this.logLevel = this.opts.logLevel || this.env.TWILIO_LOG_LEVEL;
        this.userAgentExtensions = this.opts.userAgentExtensions || [];
        this._httpClient = this.opts.httpClient;
        if (this.opts.lazyLoading === false) {
            this._httpClient = this.httpClient;
        }
        if (!this.username) {
            throw new Error("username is required");
        }
        if (!this.password) {
            throw new Error("password is required");
        }
        if (!this.accountSid?.startsWith("AC")) {
            const apiKeyMsg = this.accountSid.startsWith("SK")
                ? ". The given SID indicates an API Key which requires the accountSid to be passed as an additional option"
                : "";
            throw new Error("accountSid must start with AC" + apiKeyMsg);
        }
    }
    get httpClient() {
        if (!this._httpClient) {
            this._httpClient = new RequestClient_1.default();
        }
        return this._httpClient;
    }
    /* jshint ignore:start */
    /**
     * Makes a request to the Twilio API using the configured http client.
     * Authentication information is automatically added if none is provided.
     *
     * @function request
     * @memberof BaseTwilio#
     *
     * @param {RequestOpts} opts - The options argument
     */
    /* jshint ignore:end */
    request(opts) {
        opts = opts || {};
        if (!opts.method) {
            throw new Error("method is required");
        }
        if (!opts.uri) {
            throw new Error("uri is required");
        }
        const username = opts.username || this.username;
        const password = opts.password || this.password;
        const headers = opts.headers || {};
        const pkgVersion = moduleInfo.version;
        const osName = os.platform();
        const osArch = os.arch();
        const nodeVersion = process.version;
        headers["User-Agent"] = util.format("twilio-node/%s (%s %s) node/%s", pkgVersion, osName, osArch, nodeVersion);
        this.userAgentExtensions?.forEach((extension) => {
            headers["User-Agent"] += ` ${extension}`;
        });
        headers["Accept-Charset"] = "utf-8";
        if (opts.method === "post" && !headers["Content-Type"]) {
            headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
        if (!headers["Accept"]) {
            headers["Accept"] = "application/json";
        }
        var uri = new url.URL(opts.uri);
        uri.hostname = this.getHostname(uri.hostname, this.edge, this.region);
        return this.httpClient?.request({
            method: opts.method,
            uri: uri.href,
            username: username,
            password: password,
            headers: headers,
            params: opts.params,
            data: opts.data,
            timeout: opts.timeout,
            allowRedirects: opts.allowRedirects,
            logLevel: opts.logLevel,
        });
    }
    /* jshint ignore:start */
    /**
     * Adds a region and/or edge to a given hostname
     *
     * @function getHostname
     * @memberof BaseTwilio#
     *
     * @param {string} hostname - A URI hostname (e.g. api.twilio.com)
     * @param {string | undefined} targetEdge - The targeted edge location (e.g. sydney)
     * @param {string | undefined} targetRegion - The targeted region location (e.g. au1)
     */
    /* jshint ignore:end */
    getHostname(hostname, targetEdge, targetRegion) {
        const defaultRegion = "us1";
        const domain = hostname.split(".").slice(-2).join(".");
        const prefix = hostname.split("." + domain)[0];
        let [product, edge, region] = prefix.split(".");
        if (edge && !region) {
            region = edge;
            edge = undefined;
        }
        region = targetRegion || region || (targetEdge && defaultRegion);
        if (!region) {
            return hostname;
        }
        edge = targetEdge || edge;
        return [product, edge, region, domain].filter((part) => part).join(".");
    }
    /* jshint ignore:start */
    /**
     * Validates that a request to the new SSL certificate is successful.
     *
     * @throws {RestException} if the request fails
     *
     * @function validateSslCert
     * @memberof BaseTwilio#
     */
    /* jshint ignore:end */
    validateSslCert() {
        return this.httpClient
            ?.request({
            method: "get",
            uri: "https://api.twilio.com:8443/2010-04-01/.json",
        })
            .then((response) => {
            if (response["statusCode"] < 200 || response["statusCode"] >= 300) {
                throw new RestException(response);
            }
            return response;
        });
    }
}
exports.BaseTwilio = BaseTwilio;
