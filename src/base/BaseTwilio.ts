import RequestClient from "./RequestClient"; /* jshint ignore:line */
import { HttpMethod } from "../interfaces"; /* jshint ignore:line */
import { Headers } from "../http/request"; /* jshint ignore:line */
import AuthStrategy from "../auth_strategy/AuthStrategy"; /* jshint ignore:line */
import CredentialProvider from "../credential_provider/CredentialProvider"; /* jshint ignore:line */

const os = require("os"); /* jshint ignore:line */
const url = require("url"); /* jshint ignore:line */
const moduleInfo = require("../../package.json"); /* jshint ignore:line */
const util = require("util"); /* jshint ignore:line */
const RestException = require("../base/RestException"); /* jshint ignore:line */

namespace Twilio {
  export interface ClientOpts {
    httpClient?: RequestClient;
    accountSid?: string;
    env?: NodeJS.ProcessEnv;
    edge?: string;
    region?: string;
    lazyLoading?: boolean;
    logLevel?: string;
    userAgentExtensions?: string[];
    autoRetry?: boolean;
    maxRetryDelay?: number;
    maxRetries?: number;

    /**
     https.Agent options
     */
    timeout?: number;
    keepAlive?: boolean;
    keepAliveMsecs?: number;
    maxSockets?: number;
    maxTotalSockets?: number;
    maxFreeSockets?: number;
    scheduling?: "fifo" | "lifo" | undefined;
    ca?: string | Buffer;
  }

  export interface RequestOpts {
    method?: HttpMethod;
    uri?: string;
    username?: string;
    password?: string;
    authStrategy?: AuthStrategy;
    headers?: Headers;
    params?: object;
    data?: object;
    timeout?: number;
    allowRedirects?: boolean;
    logLevel?: string;
  }

  /* jshint ignore:start */
  /**
   * Parent class for Twilio Client that implements request & validation logic
   */

  /* jshint ignore:end */

  export class Client {
    username?: string;
    password?: string;
    accountSid: string;
    credentialProvider?: CredentialProvider;
    opts?: ClientOpts;
    env?: NodeJS.ProcessEnv;
    edge?: string;
    region?: string;
    logLevel?: string;
    autoRetry?: boolean;
    maxRetryDelay?: number;
    maxRetries?: number;

    /**
     https.Agent options
     */
    timeout?: number;
    keepAlive?: boolean;
    keepAliveMsecs?: number;
    maxSockets?: number;
    maxTotalSockets?: number;
    maxFreeSockets?: number;
    scheduling?: "fifo" | "lifo" | undefined;
    ca?: string | Buffer;

    userAgentExtensions?: string[];
    _httpClient?: RequestClient;

    /* jshint ignore:start */
    /**
     * Create a BaseTwilio instance
     *
     * @param username -
     *          The username used for authentication. This is normally account sid, but if using key/secret auth will be
     *          the api key sid.
     * @param password -
     *          The password used for authentication. This is normally auth token, but if using key/secret auth will be
     *          the secret.
     * @param opts - The options argument
     *
     * @returns A new instance of BaseTwilio
     */

    /* jshint ignore:end */

    constructor(username?: string, password?: string, opts?: ClientOpts) {
      this.setOpts(opts);
      this.username =
        username ??
        this.env?.TWILIO_ACCOUNT_SID ??
        process.env.TWILIO_ACCOUNT_SID;
      this.password =
        password ??
        this.env?.TWILIO_AUTH_TOKEN ??
        process.env.TWILIO_AUTH_TOKEN;
      this.accountSid = "";
      this.setAccountSid(this.opts?.accountSid || this.username);
      this.invalidateOAuth();
    }

    setOpts(opts?: ClientOpts) {
      this.opts = opts || {};
      this.env = this.opts.env || {};
      this.edge =
        this.opts.edge ?? this.env.TWILIO_EDGE ?? process.env.TWILIO_EDGE;
      this.region =
        this.opts.region ?? this.env.TWILIO_REGION ?? process.env.TWILIO_REGION;
      this.logLevel =
        this.opts.logLevel ??
        this.env.TWILIO_LOG_LEVEL ??
        process.env.TWILIO_LOG_LEVEL;

      this.timeout = this.opts.timeout;
      this.keepAlive = this.opts.keepAlive;
      this.keepAliveMsecs = this.opts.keepAliveMsecs;
      this.maxSockets = this.opts.maxSockets;
      this.maxTotalSockets = this.opts.maxTotalSockets;
      this.maxFreeSockets = this.opts.maxFreeSockets;
      this.scheduling = this.opts.scheduling;
      this.ca = this.opts.ca;
      this.autoRetry = this.opts.autoRetry || false;
      this.maxRetryDelay = this.opts.maxRetryDelay;
      this.maxRetries = this.opts.maxRetries;
      this.userAgentExtensions = this.opts.userAgentExtensions || [];
      this._httpClient = this.opts.httpClient;

      if (this.opts.lazyLoading === false) {
        this._httpClient = this.httpClient;
      }
    }

    setAccountSid(accountSid?: string) {
      this.accountSid = accountSid || "";

      if (this.accountSid && !this.accountSid?.startsWith("AC")) {
        const apiKeyMsg = this.accountSid?.startsWith("SK")
          ? ". The given SID indicates an API Key which requires the accountSid to be passed as an additional option"
          : "";

        throw new Error("accountSid must start with AC" + apiKeyMsg);
      }
    }

    setCredentialProvider(credentialProvider: CredentialProvider) {
      this.credentialProvider = credentialProvider;
      this.accountSid = "";
      this.invalidateBasicAuth();
    }

    invalidateBasicAuth() {
      this.username = undefined;
      this.password = undefined;
    }

    invalidateOAuth() {
      this.credentialProvider = undefined;
    }

    get httpClient() {
      if (!this._httpClient) {
        this._httpClient = new RequestClient({
          timeout: this.timeout,
          keepAlive: this.keepAlive,
          keepAliveMsecs: this.keepAliveMsecs,
          maxSockets: this.maxSockets,
          maxTotalSockets: this.maxTotalSockets,
          maxFreeSockets: this.maxFreeSockets,
          scheduling: this.scheduling,
          ca: this.ca,
          autoRetry: this.autoRetry,
          maxRetryDelay: this.maxRetryDelay,
          maxRetries: this.maxRetries,
        });
      }
      return this._httpClient;
    }

    /* jshint ignore:start */
    /**
     * Makes a request to the Twilio API using the configured http client.
     * Authentication information is automatically added if none is provided.
     *
     * @param opts - The options argument
     */

    /* jshint ignore:end */

    request(opts: RequestOpts): Promise<any> {
      opts = opts || {};

      if (!opts.method) {
        throw new Error("method is required");
      }

      if (!opts.uri) {
        throw new Error("uri is required");
      }

      const username = opts.username || this.username;
      const password = opts.password || this.password;
      const authStrategy =
        opts.authStrategy || this.credentialProvider?.toAuthStrategy();

      if (!authStrategy) {
        if (!username) {
          (() => {
            throw new Error("username is required");
          })();
        }

        if (!password) {
          (() => {
            throw new Error("password is required");
          })();
        }
      }

      const headers = opts.headers || {};

      const pkgVersion = moduleInfo.version;
      const osName = os.platform();
      const osArch = os.arch();
      const nodeVersion = process.version;

      headers["User-Agent"] = util.format(
        "twilio-node/%s (%s %s) node/%s",
        pkgVersion,
        osName,
        osArch,
        nodeVersion
      );
      this.userAgentExtensions?.forEach((extension) => {
        headers["User-Agent"] += ` ${extension}`;
      });
      headers["Accept-Charset"] = "utf-8";

      if (
        (opts.method === "post" || opts.method === "put") &&
        !headers["Content-Type"]
      ) {
        headers["Content-Type"] = "application/x-www-form-urlencoded";
      }

      if (opts.method !== "delete" && !headers["Accept"]) {
        headers["Accept"] = "application/json";
      }

      var uri = new url.URL(opts.uri);
      uri.hostname = this.getHostname(uri.hostname, this.edge, this.region);

      return this.httpClient?.request({
        method: opts.method,
        uri: uri.href,
        username: username,
        password: password,
        authStrategy: authStrategy,
        headers: headers,
        params: opts.params,
        data: opts.data,
        timeout: opts.timeout,
        allowRedirects: opts.allowRedirects,
        // use the Twilio client's log-level if the httpClient's log-level is unspecified
        logLevel: opts.logLevel || this.opts?.logLevel,
      });
    }

    /* jshint ignore:start */
    /**
     * Adds a region and/or edge to a given hostname
     *
     * @param hostname - A URI hostname (e.g. api.twilio.com)
     * @param targetEdge - The targeted edge location (e.g. sydney)
     * @param targetRegion - The targeted region location (e.g. au1)
     */

    /* jshint ignore:end */

    getHostname(
      hostname: string,
      targetEdge: string | undefined,
      targetRegion: string | undefined
    ) {
      const defaultRegion = "us1";

      const domain = hostname.split(".").slice(-2).join(".");
      const prefix = hostname.split("." + domain)[0];
      let [product, edge, region]: any = prefix.split(".");
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
     * Test if your environment is impacted by a TLS or certificate
     * change is by sending an HTTP request to the test endpoint
     *
     * @throws RestException if the request fails
     *
     */

    /* jshint ignore:end */

    validateSslCert() {
      return this.httpClient
        ?.request({
          method: "get",
          uri: "https://tls-test.twilio.com:443",
        })
        .then((response: any) => {
          if (response["statusCode"] < 200 || response["statusCode"] >= 300) {
            throw new RestException(response);
          }

          return response;
        });
    }
  }
}

export = Twilio;
