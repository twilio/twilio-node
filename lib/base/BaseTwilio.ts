'use strict'

import RequestClient from '../base/RequestClient'; /* jshint ignore:line */
import { HttpMethod } from '../interfaces'; /* jshint ignore:line */

var os = require('os');  /* jshint ignore:line */
var url = require('url');  /* jshint ignore:line */
var moduleInfo = require('../../package.json');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var RestException = require('../base/RestException');  /* jshint ignore:line */

export interface clientOpts {
    httpClient?: RequestClient
    accountSid?: string
    env?: NodeJS.ProcessEnv
    edge?: string
    region?: string
    lazyLoading?: boolean
    logLevel?: string
    userAgentExtensions?: string[]
}

interface requestOpts {
    method?: HttpMethod
    uri?: string
    username?: string
    password?: string
    headers?: Headers
    params?: object
    data?: object
    timeout?: number
    allowRedirects?: boolean
    logLevel?: string
}

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
 * @param {clientOpts} [opts] - The options argument
 *
 * @returns {BaseTwilio} A new instance of BaseTwilio
 */
/* jshint ignore:end */

export class BaseTwilio {
    username: string
    password: string
    accountSid: string
    opts: clientOpts
    env: NodeJS.ProcessEnv
    edge: string
    region: string
    logLevel: string
    userAgentExtensions: string[]
    _httpClient: RequestClient

    constructor(username: string, password: string, opts: clientOpts) {
        this.opts = opts;
        this.env = this.opts.env || process.env;
        this.username = username || this.env.TWILIO_ACCOUNT_SID;
        this.password = password || this.env.TWILIO_AUTH_TOKEN;
        this.accountSid = this.opts.accountSid || this.username;
        this.edge = this.opts.edge || this.env.TWILIO_EDGE;
        this.region = this.opts.region || this.env.TWILIO_REGION;
        this.logLevel = this.opts.logLevel || this.env.TWILIO_LOG_LEVEL;
        this.userAgentExtensions = this.opts.userAgentExtensions || [];
        this._httpClient = this.opts.httpClient;

        if (!this.opts.lazyLoading) {
            this._httpClient = this.httpClient;
        }

        if (!this.username) {
            throw new Error('username is required');
        }

        if (!this.password) {
            throw new Error('password is required');
        }

        if (!this.accountSid.startsWith('AC')) {
            throw new Error('accountSid must start with AC');
        }
    }

    get httpClient() {
        if (!this._httpClient) {
            var RequestClient = require('../base/RequestClient');  /* jshint ignore:line */
            this._httpClient = new RequestClient();
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
     * @param {requestOpts} opts - The options argument
     */
    /* jshint ignore:end */

    request(opts: requestOpts) {
        opts = opts || {};

        if (!opts.method) {
            throw new Error('method is required');
        }

        if (!opts.uri) {
            throw new Error('uri is required');
        }

        var username = opts.username || this.username;
        var password = opts.password || this.password;

        var headers = opts.headers || {};

        var pkgVersion = moduleInfo.version;
        var osName = os.platform();
        var osArch = os.arch();
        var nodeVersion = process.version;

        headers['User-Agent'] = util.format(
            'twilio-node/%s (%s %s) node/%s',
            pkgVersion,
            osName,
            osArch,
            nodeVersion
        );
        this.userAgentExtensions.forEach(extension => {
            headers['User-Agent'] += ` ${extension}`;
        });
        headers['Accept-Charset'] = 'utf-8';

        if (opts.method === 'post' && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }

        if (!headers['Accept']) {
            headers['Accept'] = 'application/json';
        }

        var uri = new url.URL(opts.uri);
        uri.hostname = this.getHostname(uri.hostname, this.edge, this.region);

        return this.httpClient.request({
            method: opts.method,
            uri: uri.href,
            username: username,
            password: password,
            headers: headers,
            params: opts.params,
            data: opts.data,
            timeout: opts.timeout,
            allowRedirects: opts.allowRedirects,
            logLevel: opts.logLevel
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
     * @param {string} targetEdge - The targeted edge location (e.g. sydney)
     * @param {string} targetRegion - The targeted region location (e.g. au1)
     */
    /* jshint ignore:end */

    getHostname(hostname: string, targetEdge: string, targetRegion: string) {
        const defaultRegion = 'us1';

        const domain = hostname.split('.').slice(-2).join('.');
        const prefix = hostname.split('.' + domain)[0];
        let [product, edge, region] = prefix.split('.');
        if (edge && !region) {
            region = edge;
            edge = undefined;
        }

        region = targetRegion || region || (targetEdge && defaultRegion);
        if (!region) {
            return hostname;
        }
        edge = targetEdge || edge;

        return [product, edge, region, domain].filter(part => part).join('.');
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
        return this.httpClient.request({
            method: 'get',
            uri: 'https://api.twilio.com:8443/2010-04-01/.json',
        }).then((response) => {
            if (response['statusCode'] < 200 || response['statusCode'] >= 300) {
                throw new RestException(response);
            }

            return response;
        });
    }
}
