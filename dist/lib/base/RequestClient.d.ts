/// <reference types="node" />
import { HttpMethod } from "../interfaces";
import { AxiosInstance } from "axios";
import Response from "../http/response";
import Request from "../http/request";
import { Headers } from "../http/request";
export interface RequestOptions<TData = any, TParams = object> {
    /**
     * The HTTP method
     */
    method: HttpMethod;
    /**
     * The request URI
     */
    uri: string;
    /**
     * The username used for auth
     */
    username?: string;
    /**
     * The password used for auth
     */
    password?: string;
    /**
     * The request headers
     */
    headers?: Headers;
    /**
     * The object of params added as query string to the request
     */
    params?: TParams;
    /**
     * The form data that should be submitted
     */
    data?: TData;
    /**
     * The request timeout in milliseconds
     */
    timeout?: number;
    /**
     * Should the client follow redirects
     */
    allowRedirects?: boolean;
    /**
     * Set to true to use the forever-agent
     */
    forever?: boolean;
    /**
     * Set to 'debug' to enable debug logging
     */
    logLevel?: string;
}
export interface RequestClientOptions {
    /**
     * A timeout in milliseconds. This will be used as the HTTPS agent's socket
     * timeout, AND as the default request timeout.
     */
    timeout?: number;
    /**
     * https.Agent keepAlive option
     */
    keepAlive?: boolean;
    /**
     * https.Agent keepAliveMSecs option
     */
    keepAliveMsecs?: number;
    /**
     * https.Agent maxSockets option
     */
    maxSockets?: number;
    /**
     * https.Agent maxTotalSockets option
     */
    maxTotalSockets?: number;
    /**
     * https.Agent maxFreeSockets option
     */
    maxFreeSockets?: number;
    /**
     * https.Agent scheduling option
     */
    scheduling?: string;
    /**
     * The private CA certificate bundle (if private SSL certificate)
     */
    ca?: string | Buffer;
}
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
export default class RequestClient {
    defaultTimeout: number;
    axios: AxiosInstance;
    ca?: string | Buffer;
    lastResponse?: Response<any>;
    lastRequest?: Request<any>;
    constructor(opts?: RequestClientOptions);
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
    request<TData>(opts: RequestOptions<TData>): Promise<Response<TData>>;
    filterLoggingHeaders(headers: Headers | "*"): string[];
    private logRequest;
}
