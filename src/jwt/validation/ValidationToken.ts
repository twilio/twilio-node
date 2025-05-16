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

  constructor(opts: ValidationClient) {
    this.accountSid = opts.accountSid;
    this.credentialSid = opts.credentialSid;
    this.signingKey = opts.signingKey;
    this.privateKey = opts.privateKey;
    this.algorithm = (opts.algorithm as Algorithm) || "RS256";
    this.ttl = 300;
  }

  fromHttpRequest(request: any): string {
    const headers = request.headers;
    const url = new URL(request.url);
    let requestBody = "";
    if (headers["Content-Type"] === "application/json")
      requestBody = request.data;
    let signedHeaders = {
      host: url.host,
      authorization: headers["Authorization"],
    };

    const requestCanonicalizer = new RequestCanonicalizer(
      request.method,
      url.pathname,
      request.params,
      requestBody,
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
