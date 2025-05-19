import crypto from "crypto";

class RequestCanonicalizer {
  method: string;
  uri: string;
  queryParams: any;
  requestBody: any;
  headers: any;

  constructor(
    method: string,
    uri: string,
    queryParams: any,
    requestBody: any,
    headers: any
  ) {
    this.method = method;
    this.uri = uri;
    this.queryParams = queryParams;
    this.requestBody = requestBody;
    this.headers = headers;
  }

  getCanonicalizedMethod(): string {
    if (!this.method) {
      return "";
    }
    return this.method.toUpperCase();
  }

  customEncode(str: string): string {
    return encodeURIComponent(decodeURIComponent(str))
      .replace(/\*/g, "%2A")
      .replace(/%7E/g, "~");
  }

  getCanonicalizedPath(): string {
    if (!this.uri) return "/";
    // Remove query string from path
    const path = this.uri.split("?")[0];
    // Normalize duplicate slashes (but preserve the leading one)
    const normalizedPath = path.replace(/\/+/g, "/");

    // We must preserve slashes (as path delimiters) but encode each segment
    // Split and encode, but first decode each segment to avoid double-encoding
    return normalizedPath
      .split("/")
      .map((segment) => this.customEncode(segment))
      .join("/");
  }

  getCanonicalizedQueryParams(): string {
    if (!this.queryParams) {
      return "";
    }
    // sort query params on the basis of '{key}={value}'
    const sortedQueryParams = Object.entries(this.queryParams)
      .map(([key, value]) => {
        return `${key}=${value}`;
      })
      .sort()
      .map((param) => {
        const [key, value] = param.split("=");
        return `${this.customEncode(key)}=${this.customEncode(value)}`; // encode and concatenate as `key=value`
      });
    return sortedQueryParams.join("&");
  }

  getCanonicalizedHeaders(): string {
    // sort headers on the basis of '{key}:{value}'
    const sortedHeaders = Object.keys(this.headers)
      .map((key) => {
        if (!this.headers[key]) {
          return `${key.toLowerCase()}:`;
        }
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

    if (typeof this.requestBody === "string") {
      return this.sha256Hex(this.requestBody);
    } else return this.sha256Hex(JSON.stringify(this.requestBody));
  }

  sha256Hex(body: string) {
    return crypto.createHash("sha256").update(body).digest("hex");
  }

  getCanonicalizedRequestString(): string {
    let canonicalizedRequest = "";
    canonicalizedRequest += this.getCanonicalizedMethod() + "\n";
    canonicalizedRequest += this.getCanonicalizedPath() + "\n";
    canonicalizedRequest += this.getCanonicalizedQueryParams() + "\n";
    canonicalizedRequest += this.getCanonicalizedHeaders() + "\n";
    canonicalizedRequest += this.getCanonicalizedHashedHeaders() + "\n";
    canonicalizedRequest += this.getCanonicalizedRequestBody();
    return canonicalizedRequest;
  }

  create(): string {
    return this.sha256Hex(this.getCanonicalizedRequestString());
  }
}

export default RequestCanonicalizer;
