/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a PublicKeyInstance
 */
export interface PublicKeyContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
}

/**
 * Options to pass to create a PublicKeyInstance
 */
export interface PublicKeyListInstanceCreateOptions {
  /** A URL encoded representation of the public key. For example, `-----BEGIN PUBLIC KEY-----MIIBIjANB.pa9xQIDAQAB-----END PUBLIC KEY-----` */
  publicKey: string;
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** The SID of the Subaccount that this Credential should be associated with. Must be a valid Subaccount of the account issuing the request */
  accountSid?: string;
}
/**
 * Options to pass to each
 */
export interface PublicKeyListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: PublicKeyInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface PublicKeyListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface PublicKeyListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface PublicKeyContext {
  /**
   * Remove a PublicKeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a PublicKeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PublicKeyInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance>;

  /**
   * Update a PublicKeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PublicKeyInstance
   */
  update(
    callback?: (error: Error | null, item?: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance>;
  /**
   * Update a PublicKeyInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PublicKeyInstance
   */
  update(
    params: PublicKeyContextUpdateOptions,
    callback?: (error: Error | null, item?: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PublicKeyContextSolution {
  sid: string;
}

export class PublicKeyContextImpl implements PublicKeyContext {
  protected _solution: PublicKeyContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Credentials/PublicKeys/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PublicKeyInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | PublicKeyContextUpdateOptions
      | ((error: Error | null, item?: PublicKeyInstance) => any),
    callback?: (error: Error | null, item?: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PublicKeyInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface PublicKeyPayload extends TwilioResponsePayload {
  credentials: PublicKeyResource[];
}

interface PublicKeyResource {
  sid: string;
  account_sid: string;
  friendly_name: string;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class PublicKeyInstance {
  protected _solution: PublicKeyContextSolution;
  protected _context?: PublicKeyContext;

  constructor(
    protected _version: V1,
    payload: PublicKeyResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that that we created to identify the PublicKey resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to.
   */
  accountSid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The URI for this resource, relative to `https://accounts.twilio.com`
   */
  url: string;

  private get _proxy(): PublicKeyContext {
    this._context =
      this._context ||
      new PublicKeyContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a PublicKeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a PublicKeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PublicKeyInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a PublicKeyInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PublicKeyInstance
   */
  update(
    callback?: (error: Error | null, item?: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance>;
  /**
   * Update a PublicKeyInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PublicKeyInstance
   */
  update(
    params: PublicKeyContextUpdateOptions,
    callback?: (error: Error | null, item?: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PublicKeySolution {}

export interface PublicKeyListInstance {
  _version: V1;
  _solution: PublicKeySolution;
  _uri: string;

  (sid: string): PublicKeyContext;
  get(sid: string): PublicKeyContext;

  /**
   * Create a PublicKeyInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PublicKeyInstance
   */
  create(
    params: PublicKeyListInstanceCreateOptions,
    callback?: (error: Error | null, item?: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance>;

  /**
   * Streams PublicKeyInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PublicKeyListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: PublicKeyInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: PublicKeyListInstanceEachOptions,
    callback?: (item: PublicKeyInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of PublicKeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: PublicKeyPage) => any
  ): Promise<PublicKeyPage>;
  /**
   * Lists PublicKeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PublicKeyListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: PublicKeyInstance[]) => any
  ): Promise<PublicKeyInstance[]>;
  list(
    params: PublicKeyListInstanceOptions,
    callback?: (error: Error | null, items: PublicKeyInstance[]) => any
  ): Promise<PublicKeyInstance[]>;
  /**
   * Retrieve a single page of PublicKeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PublicKeyListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: PublicKeyPage) => any
  ): Promise<PublicKeyPage>;
  page(
    params: PublicKeyListInstancePageOptions,
    callback?: (error: Error | null, items: PublicKeyPage) => any
  ): Promise<PublicKeyPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PublicKeyListInstance(version: V1): PublicKeyListInstance {
  const instance = ((sid) => instance.get(sid)) as PublicKeyListInstance;

  instance.get = function get(sid): PublicKeyContext {
    return new PublicKeyContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Credentials/PublicKeys`;

  instance.create = function create(
    params: PublicKeyListInstanceCreateOptions,
    callback?: (error: Error | null, items: PublicKeyInstance) => any
  ): Promise<PublicKeyInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["publicKey"] === null || params["publicKey"] === undefined) {
      throw new Error("Required parameter \"params['publicKey']\" missing.");
    }

    let data: any = {};

    data["PublicKey"] = params["publicKey"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["accountSid"] !== undefined)
      data["AccountSid"] = params["accountSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new PublicKeyInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | PublicKeyListInstancePageOptions
      | ((error: Error | null, items: PublicKeyPage) => any),
    callback?: (error: Error | null, items: PublicKeyPage) => any
  ): Promise<PublicKeyPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PublicKeyPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: PublicKeyPage) => any
  ): Promise<PublicKeyPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new PublicKeyPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class PublicKeyPage extends Page<
  V1,
  PublicKeyPayload,
  PublicKeyResource,
  PublicKeyInstance
> {
  /**
   * Initialize the PublicKeyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: PublicKeySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of PublicKeyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PublicKeyResource): PublicKeyInstance {
    return new PublicKeyInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
