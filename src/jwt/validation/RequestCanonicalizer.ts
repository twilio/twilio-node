const crypto = require("crypto");
const hash = crypto.createHash("sha256");

class RequestCanonicalizer {
  method: string;
  uri: string;
  queryParams: any;
  requestBody: string;
  headers: any;

  constructor(
    method: string,
    uri: string,
    queryParams: any,
    requestBody: string,
    headers: any
  ) {
    this.method = method;
    this.uri = uri;
    this.queryParams = queryParams;
    this.requestBody = requestBody;
    this.headers = this.getNonNullHeaders(headers);
  }

  getNonNullHeaders(headers: any): string[] {
    const nonNullKeys = Object.keys(headers).filter((key) => {
      return headers[key] !== null && headers[key] !== undefined;
    });
    const nonNullHeaders: any = {};
    nonNullKeys.forEach((key) => {
      nonNullHeaders[key] = headers[key];
    });
    return nonNullHeaders;
  }

  getCanonicalizedPath(): string {
    if (!this.uri) {
      return "/";
    }
    const path = this.uri.split("?")[0];
    const normalizedPath = path.replace(/\/+/g, "/");
    return encodeURI(normalizedPath);
  }

  getCanonicalizedQueryParams(): string {
    if (!this.queryParams) {
      return "";
    }
    const queryParamsList = Object.keys(this.queryParams).map((key) => {
      const value = this.queryParams[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    });
    return queryParamsList.join("&");
  }

  getCanonicalizedHeaders(): string {
    // sort headers on the basis of '{key}:{value}'
    const sortedHeaders = Object.keys(this.headers)
      .map((key) => {
        return `${key.toLowerCase()}:${this.headers[key].trim()}`;
      })
      .sort();
    return sortedHeaders.join("\n") + "\n";
  }

  getCanonicalizedHashedHeaders(): string {
    const sortedHeaders = Object.keys(this.headers).sort();
    return sortedHeaders.join(";");
  }

  getCanonicalizedRequestBody(): string {
    if (!this.requestBody) {
      return "";
    }

    return this.sha256Hex(JSON.stringify(this.requestBody));
  }

  sha256Hex(body: string) {
    return crypto.createHash("sha256").update(body).digest("hex");
  }

  create(): string {
    let canonicalizedRequest = "";
    canonicalizedRequest += this.method.toUpperCase() + "\n";
    canonicalizedRequest += this.getCanonicalizedPath() + "\n";
    canonicalizedRequest += this.getCanonicalizedQueryParams() + "\n";
    canonicalizedRequest += this.getCanonicalizedHeaders() + "\n";
    canonicalizedRequest += this.getCanonicalizedHashedHeaders() + "\n";
    canonicalizedRequest += this.getCanonicalizedRequestBody();

    return this.sha256Hex(canonicalizedRequest);
  }
}

export default RequestCanonicalizer;
