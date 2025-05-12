const crypto = require("crypto");
const hash = crypto.createHash("sha256");

class RequestCanonicalizer {
  method: string;
  uri: string;
  queryString: string;
  requestBody: string;
  headers: any;

  constructor(
    method: string,
    uri: string,
    queryString: string,
    requestBody: string,
    headers: any
  ) {
    this.method = method;
    this.uri = new URL(uri).pathname;
    this.queryString = queryString;
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

  getCanonicalizedQueryString(): string {
    if (!this.queryString) {
      return "";
    }
    const queryParams = this.queryString.split("&").map((param) => {
      const [key, value] = param.split("=");
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    });
    return queryParams.join("&");
  }

  getCanonicalizedHeaders(): string {
    // sort headers on the basis of '
    const sortedHeaders = Object.keys(this.headers)
      .sort()
      .map((key) => {
        return `${key.toLowerCase()}:${this.headers[key].trim()}`;
      });
    return sortedHeaders.join("\n");
  }

  getCanonicalizedHashedHeaders(): string {
    const sortedHeaders = Object.keys(this.headers)
      .sort()
      .map((key) => {
        return `${key.toLowerCase()}:${this.headers[key].trim()}`;
      });
    return sortedHeaders.join("\n");
  }

  getCanonicalizedRequestBody(): string {
    if (!this.requestBody) {
      return "";
    }

    hash.update(this.requestBody);
    return hash.digest("hex");
  }

  create(): string {
    let canonicalizedRequest = "";
    canonicalizedRequest += this.method.toUpperCase() + "\n";
    canonicalizedRequest += this.getCanonicalizedPath() + "\n";
    canonicalizedRequest += this.getCanonicalizedQueryString() + "\n";
    canonicalizedRequest += this.getCanonicalizedHeaders() + "\n";
    canonicalizedRequest += this.getCanonicalizedHashedHeaders() + "\n";
    canonicalizedRequest += this.getCanonicalizedRequestBody() + "\n";

    hash.update(canonicalizedRequest);
    return hash.digest("hex");
  }
}

export default RequestCanonicalizer;
