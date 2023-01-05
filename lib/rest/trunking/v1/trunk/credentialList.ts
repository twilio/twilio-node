/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trunking
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
 * Options to pass to create a CredentialListInstance
 */
export interface CredentialListListInstanceCreateOptions {
  /** The SID of the [Credential List](https://www.twilio.com/docs/voice/sip/api/sip-credentiallist-resource) that you want to associate with the trunk. Once associated, we will authenticate access to the trunk against this list. */
  credentialListSid: string;
}
/**
 * Options to pass to each
 */
export interface CredentialListListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: CredentialListInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface CredentialListListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CredentialListListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CredentialListContext {
  /**
   * Remove a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialListInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CredentialListInstance) => any
  ): Promise<CredentialListInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CredentialListContextSolution {
  trunkSid: string;
  sid: string;
}

export class CredentialListContextImpl implements CredentialListContext {
  protected _solution: CredentialListContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, trunkSid: string, sid: string) {
    if (!isValidPathParam(trunkSid)) {
      throw new Error("Parameter 'trunkSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { trunkSid, sid };
    this._uri = `/Trunks/${trunkSid}/CredentialLists/${sid}`;
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
    callback?: (error: Error | null, item?: CredentialListInstance) => any
  ): Promise<CredentialListInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CredentialListInstance(
          operationVersion,
          payload,
          instance._solution.trunkSid,
          instance._solution.sid
        )
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

interface CredentialListPayload extends TwilioResponsePayload {
  credential_lists: CredentialListResource[];
}

interface CredentialListResource {
  account_sid: string;
  sid: string;
  trunk_sid: string;
  friendly_name: string;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class CredentialListInstance {
  protected _solution: CredentialListContextSolution;
  protected _context?: CredentialListContext;

  constructor(
    protected _version: V1,
    payload: CredentialListResource,
    trunkSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.trunkSid = payload.trunk_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { trunkSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the Trunk the credential list in associated with
   */
  trunkSid: string;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the resource
   */
  url: string;

  private get _proxy(): CredentialListContext {
    this._context =
      this._context ||
      new CredentialListContextImpl(
        this._version,
        this._solution.trunkSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a CredentialListInstance
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
   * Fetch a CredentialListInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialListInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CredentialListInstance) => any
  ): Promise<CredentialListInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      sid: this.sid,
      trunkSid: this.trunkSid,
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

export interface CredentialListSolution {
  trunkSid: string;
}

export interface CredentialListListInstance {
  _version: V1;
  _solution: CredentialListSolution;
  _uri: string;

  (sid: string): CredentialListContext;
  get(sid: string): CredentialListContext;

  /**
   * Create a CredentialListInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CredentialListInstance
   */
  create(
    params: CredentialListListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CredentialListInstance) => any
  ): Promise<CredentialListInstance>;

  /**
   * Streams CredentialListInstance records from the API.
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
   * @param { CredentialListListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: CredentialListInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: CredentialListListInstanceEachOptions,
    callback?: (
      item: CredentialListInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of CredentialListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: CredentialListPage) => any
  ): Promise<CredentialListPage>;
  /**
   * Lists CredentialListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CredentialListInstance[]) => any
  ): Promise<CredentialListInstance[]>;
  list(
    params: CredentialListListInstanceOptions,
    callback?: (error: Error | null, items: CredentialListInstance[]) => any
  ): Promise<CredentialListInstance[]>;
  /**
   * Retrieve a single page of CredentialListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CredentialListPage) => any
  ): Promise<CredentialListPage>;
  page(
    params: CredentialListListInstancePageOptions,
    callback?: (error: Error | null, items: CredentialListPage) => any
  ): Promise<CredentialListPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CredentialListListInstance(
  version: V1,
  trunkSid: string
): CredentialListListInstance {
  if (!isValidPathParam(trunkSid)) {
    throw new Error("Parameter 'trunkSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as CredentialListListInstance;

  instance.get = function get(sid): CredentialListContext {
    return new CredentialListContextImpl(version, trunkSid, sid);
  };

  instance._version = version;
  instance._solution = { trunkSid };
  instance._uri = `/Trunks/${trunkSid}/CredentialLists`;

  instance.create = function create(
    params: CredentialListListInstanceCreateOptions,
    callback?: (error: Error | null, items: CredentialListInstance) => any
  ): Promise<CredentialListInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["credentialListSid"] === null ||
      params["credentialListSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['credentialListSid']\" missing."
      );
    }

    let data: any = {};

    data["CredentialListSid"] = params["credentialListSid"];

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
      (payload) =>
        new CredentialListInstance(
          operationVersion,
          payload,
          instance._solution.trunkSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | CredentialListListInstancePageOptions
      | ((error: Error | null, items: CredentialListPage) => any),
    callback?: (error: Error | null, items: CredentialListPage) => any
  ): Promise<CredentialListPage> {
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
        new CredentialListPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: CredentialListPage) => any
  ): Promise<CredentialListPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new CredentialListPage(instance._version, payload, instance._solution)
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

export class CredentialListPage extends Page<
  V1,
  CredentialListPayload,
  CredentialListResource,
  CredentialListInstance
> {
  /**
   * Initialize the CredentialListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CredentialListSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CredentialListInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialListResource): CredentialListInstance {
    return new CredentialListInstance(
      this._version,
      payload,
      this._solution.trunkSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
