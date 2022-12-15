"use strict";

import Version from "./Version";
import Response from "../http/response";
import RestException from "./RestException";

export interface TwilioResponsePayload {
  first_page_uri: string;
  next_page_uri: string;
  page: number;
  page_size: number;
  previous_page_uri: string;
  uri?: string;
  meta?: {
    key?: string;
    next_page_url?: string;
    previous_page_url?: string;
  };
}

interface Solution {
  [name: string]: any;
}

type META_KEYS =
  | "end"
  | "first_page_uri"
  | "last_page_uri"
  | "next_page_uri"
  | "num_pages"
  | "page"
  | "page_size"
  | "previous_page_uri"
  | "start"
  | "total"
  | "uri";

export default class Page<
  TVersion extends Version,
  TPayload extends TwilioResponsePayload,
  TResource,
  TInstance
> {
  nextPageUrl: string;
  previousPageUrl: string;
  instances: TInstance[];
  _version: TVersion;
  _payload: TPayload;
  _solution: Solution;

  /**
   * @constructor
   *
   * @description Base page object to maintain request state.
   *
   * @param {Version} version - A twilio version instance
   * @param {Object} response - The http response
   * @param {Object} solution - path solution
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
   * @constant META_KEYS
   * @description meta keys returned in a list request
   */
  static META_KEYS: META_KEYS[] = [
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
   * @return {string|undefined} url of the previous page, or undefined if the
   * previous page URI/URL is not defined.
   */
  getPreviousPageUrl(): string | undefined {
    if (
      "meta" in this._payload &&
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
   * @return {string|undefined} url of the next page, or undefined if the
   * next page URI/URL is not defined.
   */
  getNextPageUrl(): string | undefined {
    if (
      "meta" in this._payload &&
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
   * @abstract
   *
   * @param {object} payload - Payload response from the API
   * @return {object} instance of a resource
   */
  getInstance(payload: any) {
    throw new Error(
      "Page.get_instance() must be implemented in the derived class"
    );
  }

  /**
   * Load a list of records
   *
   * @param  {object} resources json payload of records
   * @return {Array} list of resources
   */
  loadInstances(resources: TResource[]): TInstance[] {
    let instances: TInstance[] = [];
    Object.keys(resources).forEach((key) => {
      instances[key] = this.getInstance(resources[key]);
    });
    return instances;
  }

  /**
   * Fetch the next page of records
   *
   * @return {promise|undefined} promise that resolves to next page of results,
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
      function (response) {
        return new this.constructor(this._version, response, this._solution);
      }.bind(this)
    );

    return nextPagePromise;
  }

  /**
   * Fetch the previous page of records
   *
   * @return {promise|undefined} promise that resolves to previous page of
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
      function (response) {
        return new this.constructor(this._version, response, this._solution);
      }.bind(this)
    );

    return prevPagePromise;
  }

  /**
   * Parse json response from API
   * @throws {Error} If non 200 status code is returned
   *
   * @param  {object} response API response
   * @return {object} json parsed response
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
   * @throws {Error} If records cannot be deserialized
   *
   * @param  {object} payload json payload
   * @return {array} the page of records
   */
  loadPage(payload: TPayload): TResource[] {
    if ("meta" in payload && "key" in payload.meta) {
      return payload[payload.meta.key];
    }

    const keys = Object.keys(payload).filter(
      (key: META_KEYS) => !Page.META_KEYS.includes(key)
    );
    if (keys.length === 1) {
      return payload[keys[0]];
    }

    throw new Error("Page Records cannot be deserialized");
  }

  forOwn(obj: object, iteratee: (val: any, key: string, object) => void) {
    obj = Object(obj);
    for (const [key, val] of Object.entries(obj)) {
      iteratee(val, key, obj);
    }
  }

  toJSON(): object {
    let clone = {};
    this.forOwn(this, (value, key) => {
      if (!key.startsWith("_") && typeof value !== "function") {
        clone[key] = value;
      }
    });
    return clone;
  }
}
