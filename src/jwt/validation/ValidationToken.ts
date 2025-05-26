import { ValidationClient } from "../../base/RequestClient";
import RequestCanonicalizer from "./RequestCanonicalizer";
import jwt, { Algorithm } from "jsonwebtoken";

class ValidationToken implements ValidationToken.ValidationTokenOptions {
  static DEFAULT_ALGORITHM: "RS256" = "RS256";
  static ALGORITHMS = ["RS256", "PS256"];
  accountSid: string;
  credentialSid: string;
  signingKey: string;
  privateKey: string;
  algorithm: Algorithm;
  ttl: number;

  /**
   * @constructor
   * @param opts - The Options used to configure the ValidationToken
   * @param opts.accountSid - The account SID
   * @param opts.credentialSid - The credential SID for public key submitted to Twilio
   * @param opts.signingKey - The signing key
   * @param opts.privateKey - The private key for signing the token
   * @param opts.algorithm - The algorithm to use for signing the token
   * @param opts.ttl - The time to live for the token in seconds
   */
  constructor(opts: ValidationClient) {
    if (!opts.accountSid) {
      throw new Error("accountSid is required");
    }

    if (!opts.credentialSid) {
      throw new Error("credentialSid is required");
    }

    if (!opts.signingKey) {
      throw new Error("signingKey is required");
    }

    if (!opts.privateKey) {
      throw new Error("privateKey is required");
    }

    const algorithm =
      (opts.algorithm as Algorithm) || ValidationToken.DEFAULT_ALGORITHM; // default to RS256;
    if (!ValidationToken.ALGORITHMS.includes(algorithm)) {
      throw new Error(
        "Algorithm not supported. Allowed values are " +
          ValidationToken.ALGORITHMS.join(", ")
      );
    }

    this.accountSid = opts.accountSid;
    this.credentialSid = opts.credentialSid;
    this.signingKey = opts.signingKey;
    this.privateKey = opts.privateKey;
    this.algorithm = algorithm;
    this.ttl = 300;
  }
/**
 * Generates a `RequestCanonicalizer` instance for the given HTTP request.
 *
 * @param request - The HTTP request object containing details such as headers, URL, method, query parameters, and body.
 * @throws {Error} If the request URL or method is missing.
 * @returns {RequestCanonicalizer} - An instance of `RequestCanonicalizer` initialized with the canonicalized request details.
 */
  getRequestCanonicalizer(request: any): RequestCanonicalizer {
    const headers = request.headers || {};
    const requestUrl = request.url;
    const method = request.method;
    const queryParams = request.params;
    const requestBody = request.data;

    if (!requestUrl) {
      throw new Error("Url is required");
    }

    if (!method) {
      throw new Error("Method is required");
    }

    const url = new URL(requestUrl);
    let signedHeaders = {
      host: url.host,
      authorization: headers["Authorization"],
    };

    return new RequestCanonicalizer(
      method,
      url.pathname,
      queryParams,
      requestBody,
      signedHeaders
    );
  }

  /**
   * Generate a JWT token to include in the request header for PKCV
   * @param request - The request object
   * @returns {string} - The JWT token
   */
  fromHttpRequest(request: any): string {
    try {
      const requestCanonicalizer = this.getRequestCanonicalizer(request);
      const canonicalizedRequest = requestCanonicalizer.create();
      const header = {
        cty: "twilio-pkrv;v=1",
        typ: "JWT",
        alg: this.algorithm,
        kid: this.credentialSid,
      };
      const payload = {
        iss: this.signingKey,
        sub: this.accountSid,
        hrh: requestCanonicalizer.getCanonicalizedHashedHeaders(),
        rqh: canonicalizedRequest,
      };
      return jwt.sign(payload, this.privateKey, {
        header: header,
        algorithm: this.algorithm,
        expiresIn: this.ttl,
      });
    } catch (err) {
        throw new Error("Error generating JWT token " + err);
    }
  }
}

namespace ValidationToken {
  export interface ValidationTokenOptions {
    accountSid: string;
    credentialSid: string;
    signingKey: string;
    privateKey: string;
    algorithm?: Algorithm;
    ttl?: number;
  }
}

export = ValidationToken;
