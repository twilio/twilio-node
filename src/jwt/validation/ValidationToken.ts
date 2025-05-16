import { ValidationClient } from "../../base/RequestClient";
import RequestCanonicalizer from "./RequestCanonicalizer";
import jwt, { Algorithm } from "jsonwebtoken";

class ValidationToken {
  accountSid: string;
  credentialSid: string;
  signingKey: string;
  privateKey: string;
  algorithm: Algorithm;
  ttl: number;

  /**
   * @constructor
   * @param opts - The options for the ValidationToken
   * @param opts.accountSid - The account SID
   * @param opts.credentialSid - The credential SID for public key submitted to Twilio
   * @param opts.signingKey - The signing key
   * @param opts.privateKey - The private key for signing the token
   * @param opts.algorithm - The algorithm to use for signing the token
   * @param opts.ttl - The time to live for the token in seconds
   */
  constructor(opts: ValidationClient) {
    this.accountSid = opts.accountSid;
    this.credentialSid = opts.credentialSid;
    this.signingKey = opts.signingKey;
    this.privateKey = opts.privateKey;
    this.algorithm = (opts.algorithm as Algorithm) || "RS256"; // default to RS256
    this.ttl = 300;
  }

  /**
   * Create JWT token to be added in the request header for PKCV
   * @param request - The request object
   * @returns {string} - The JWT token
   */
  fromHttpRequest(request: any): string {
    const headers = request.headers;
    const url = new URL(request.url);
    let signedHeaders = {
      host: url.host,
      authorization: headers["Authorization"],
    };

    const requestCanonicalizer = new RequestCanonicalizer(
      request.method,
      url.pathname,
      request.params,
      request.data,
      signedHeaders
    );
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
  }
}

export default ValidationToken;
