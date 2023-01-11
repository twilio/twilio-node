import Version from "./Version";
import Response from "../http/response";
import RestException from "./RestException";

export interface TwilioResponsePayload {
  [key: string]: any;
  first_page_uri: string;
  next_page_uri: string;
  page: number;
  page_size: number;
  previous_page_uri: string;
  uri: string;
  meta?: {
    key?: string;
    next_page_url?: string;
    previous_page_url?: string;
  };
}

interface Solution {
  [name: string]: any;
}

export default class Page<
  TVersion extends Version,
  TPayload extends TwilioResponsePayload,
  TResource,
  TInstance
> {
  nextPageUrl?: string;
  previousPageUrl?: string;
  instances: TInstance[];
  _version: TVersion;
  _payload: TPayload;
  _solution: Solution;

  /**
   *
   * Base page object to maintain request state.
   *
   * @param version - A twilio version instance
   * @param response - The http response
   * @param solution - path solution
   */
  constructor(
    version: TVersion,
    response: Response<string | TPayload>,
    solution: Solution
  ) {
    let payload = this.processResponse(response);

    this._version = version;
    this._payload = payload;
    this._solution = solution;

    this.nextPageUrl = this.getNextPageUrl();
    this.previousPageUrl = this.getPreviousPageUrl();
    this.instances = this.loadInstances(this.loadPage(payload));
  }

  /**
   * Meta keys returned in a list request
   *
   * @constant META_KEYS
   */
  static META_KEYS: string[] = [
    "end",
    "first_page_uri",
    "last_page_uri",
    "next_page_uri",
    "num_pages",
    "page",
    "page_size",
    "previous_page_uri",
    "start",
    "total",
    "uri",
  ];

  /**
   * Get the url of the previous page of records
   *
   * @returns url of the previous page, or undefined if the
   * previous page URI/URL is not defined.
   */
  getPreviousPageUrl(): string | undefined {
    if (
      this._payload.meta &&
      "previous_page_url" in this._payload.meta &&
      this._payload.meta.previous_page_url
    ) {
      // jshint ignore:line
      return this._payload.meta.previous_page_url; // jshint ignore:line
    }

    if (
      "previous_page_uri" in this._payload &&
      this._payload.previous_page_uri
    ) {
      // jshint ignore:line
      return this._version._domain.absoluteUrl(this._payload.previous_page_uri); // jshint ignore:line
    }

    return undefined;
  }

  /**
   * Get the url of the next page of records
   *
   * @returns url of the next page, or undefined if the
   * next page URI/URL is not defined.
   */
  getNextPageUrl(): string | undefined {
    if (
      this._payload.meta &&
      "next_page_url" in this._payload.meta &&
      this._payload.meta.next_page_url
    ) {
      // jshint ignore:line
      return this._payload.meta.next_page_url; // jshint ignore:line
    }

    if ("next_page_uri" in this._payload && this._payload.next_page_uri) {
      // jshint ignore:line
      return this._version._domain.absoluteUrl(this._payload.next_page_uri); // jshint ignore:line
    }

    return undefined;
  }

  /**
   * Build a new instance given a json payload
   *
   * @param payload - Payload response from the API
   * @returns instance of a resource
   */
  getInstance(payload: any): TInstance {
    throw new Error(
      "Page.get_instance() must be implemented in the derived class"
    );
  }

  /**
   * Load a list of records
   *
   * @param resources - json payload of records
   * @returns list of resources
   */
  loadInstances(resources: TResource[]): TInstance[] {
    let instances: TInstance[] = [];
    resources.forEach((resource) => {
      instances.push(this.getInstance(resource));
    });
    return instances;
  }

  /**
   * Fetch the next page of records
   *
   * @returns promise that resolves to next page of results,
   * or undefined if there isn't a nextPageUrl undefined.
   */
  nextPage():
    | Promise<Page<TVersion, TPayload, TResource, TInstance>>
    | undefined {
    if (!this.nextPageUrl) {
      return undefined;
    }

    var reqPromise = this._version._domain.twilio.request({
      method: "get",
      uri: this.nextPageUrl,
    });

    var nextPagePromise: Promise<
      Page<TVersion, TPayload, TResource, TInstance>
    > = reqPromise.then(
      function (this: any, response: any) {
        return new this.constructor(this._version, response, this._solution);
      }.bind(this)
    );

    return nextPagePromise;
  }

  /**
   * Fetch the previous page of records
   *
   * @returns promise that resolves to previous page of
   * results, or undefined if there isn't a previousPageUrl undefined.
   */
  previousPage():
    | Promise<Page<TVersion, TPayload, TResource, TInstance>>
    | undefined {
    if (!this.previousPageUrl) {
      return undefined;
    }

    var reqPromise = this._version._domain.twilio.request({
      method: "get",
      uri: this.previousPageUrl,
    });

    var prevPagePromise: Promise<
      Page<TVersion, TPayload, TResource, TInstance>
    > = reqPromise.then(
      function (this: any, response: any) {
        return new this.constructor(this._version, response, this._solution);
      }.bind(this)
    );

    return prevPagePromise;
  }

  /**
   * Parse json response from API
   *
   * @param response - API response
   *
   * @throws Error If non 200 status code is returned
   *
   * @returns json parsed response
   */
  processResponse(response: Response<string | TPayload>): TPayload {
    if (response.statusCode !== 200) {
      throw new RestException(response);
    }

    if (typeof response.body === "string") {
      return JSON.parse(response.body);
    }
    return response.body;
  }

  /**
   * Load a page of records
   *
   * @param  {object} payload json payload
   * @return {array} the page of records
   */
  loadPage(payload: TPayload): TResource[] {
    if (payload.meta?.key) {
      return payload[payload.meta.key];
    }

    const keys = Object.keys(payload).filter(
      (key: string) => !Page.META_KEYS.includes(key)
    );
    if (keys.length === 1) {
      return payload[keys[0]];
    }

    throw new Error("Page Records cannot be deserialized");
  }

  forOwn(
    obj: object,
    iteratee: (val: any, key: string, object: object) => void
  ) {
    obj = Object(obj);
    for (const [key, val] of Object.entries(obj)) {
      iteratee(val, key, obj);
    }
  }

  toJSON(): object {
    const clone: Record<string, any> = {};
    this.forOwn(this, (value, key) => {
      if (!key.startsWith("_") && typeof value !== "function") {
        clone[key] = value;
      }
    });
    return clone;
  }
}
