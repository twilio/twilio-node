/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export type SupportingDocumentStatus =
  | "DRAFT"
  | "PENDING_REVIEW"
  | "REJECTED"
  | "APPROVED"
  | "EXPIRED"
  | "PROVISIONALLY_APPROVED";

/**
 * Options to pass to update a SupportingDocumentInstance
 */
export interface SupportingDocumentContextUpdateOptions {
  /** The string that you assigned to describe the resource. */
  friendlyName?: string;
  /** The set of parameters that are the attributes of the Supporting Document resource which are derived Supporting Document Types. */
  attributes?: object;
}

/**
 * Options to pass to create a SupportingDocumentInstance
 */
export interface SupportingDocumentListInstanceCreateOptions {
  /** The string that you assigned to describe the resource. */
  friendlyName: string;
  /** The type of the Supporting Document. */
  type: string;
  /** The set of parameters that are the attributes of the Supporting Documents resource which are derived Supporting Document Types. */
  attributes?: object;
}
/**
 * Options to pass to each
 */
export interface SupportingDocumentListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: SupportingDocumentInstance,
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
export interface SupportingDocumentListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SupportingDocumentListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SupportingDocumentContext {
  /**
   * Remove a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SupportingDocumentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance>;

  /**
   * Update a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SupportingDocumentInstance
   */
  update(
    callback?: (error: Error | null, item?: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance>;
  /**
   * Update a SupportingDocumentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SupportingDocumentInstance
   */
  update(
    params: SupportingDocumentContextUpdateOptions,
    callback?: (error: Error | null, item?: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SupportingDocumentContextSolution {
  sid: string;
}

export class SupportingDocumentContextImpl
  implements SupportingDocumentContext
{
  protected _solution: SupportingDocumentContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/SupportingDocuments/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SupportingDocumentInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | SupportingDocumentContextUpdateOptions
      | ((error: Error | null, item?: SupportingDocumentInstance) => any),
    callback?: (error: Error | null, item?: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = serialize.object(params["attributes"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

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
        new SupportingDocumentInstance(
          operationVersion,
          payload,
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

interface SupportingDocumentPayload extends TwilioResponsePayload {
  results: SupportingDocumentResource[];
}

interface SupportingDocumentResource {
  sid: string;
  account_sid: string;
  friendly_name: string;
  mime_type: string;
  status: SupportingDocumentStatus;
  type: string;
  attributes: Record<string, object>;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class SupportingDocumentInstance {
  protected _solution: SupportingDocumentContextSolution;
  protected _context?: SupportingDocumentContext;

  constructor(
    protected _version: V1,
    payload: SupportingDocumentResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.mimeType = payload.mime_type;
    this.status = payload.status;
    this.type = payload.type;
    this.attributes = payload.attributes;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string created by Twilio to identify the Supporting Document resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Document resource.
   */
  accountSid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The image type uploaded in the Supporting Document container.
   */
  mimeType: string;
  status: SupportingDocumentStatus;
  /**
   * The type of the Supporting Document.
   */
  type: string;
  /**
   * The set of parameters that are the attributes of the Supporting Documents resource which are listed in the Supporting Document Types.
   */
  attributes: Record<string, object>;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the Supporting Document resource.
   */
  url: string;

  private get _proxy(): SupportingDocumentContext {
    this._context =
      this._context ||
      new SupportingDocumentContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SupportingDocumentInstance
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
   * Fetch a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SupportingDocumentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SupportingDocumentInstance
   */
  update(
    callback?: (error: Error | null, item?: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance>;
  /**
   * Update a SupportingDocumentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SupportingDocumentInstance
   */
  update(
    params: SupportingDocumentContextUpdateOptions,
    callback?: (error: Error | null, item?: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance> {
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
      mimeType: this.mimeType,
      status: this.status,
      type: this.type,
      attributes: this.attributes,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SupportingDocumentSolution {}

export interface SupportingDocumentListInstance {
  _version: V1;
  _solution: SupportingDocumentSolution;
  _uri: string;

  (sid: string): SupportingDocumentContext;
  get(sid: string): SupportingDocumentContext;

  /**
   * Create a SupportingDocumentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SupportingDocumentInstance
   */
  create(
    params: SupportingDocumentListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance>;

  /**
   * Streams SupportingDocumentInstance records from the API.
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
   * @param { SupportingDocumentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: SupportingDocumentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: SupportingDocumentListInstanceEachOptions,
    callback?: (
      item: SupportingDocumentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of SupportingDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SupportingDocumentPage) => any
  ): Promise<SupportingDocumentPage>;
  /**
   * Lists SupportingDocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SupportingDocumentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SupportingDocumentInstance[]) => any
  ): Promise<SupportingDocumentInstance[]>;
  list(
    params: SupportingDocumentListInstanceOptions,
    callback?: (error: Error | null, items: SupportingDocumentInstance[]) => any
  ): Promise<SupportingDocumentInstance[]>;
  /**
   * Retrieve a single page of SupportingDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SupportingDocumentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SupportingDocumentPage) => any
  ): Promise<SupportingDocumentPage>;
  page(
    params: SupportingDocumentListInstancePageOptions,
    callback?: (error: Error | null, items: SupportingDocumentPage) => any
  ): Promise<SupportingDocumentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SupportingDocumentListInstance(
  version: V1
): SupportingDocumentListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as SupportingDocumentListInstance;

  instance.get = function get(sid): SupportingDocumentContext {
    return new SupportingDocumentContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/SupportingDocuments`;

  instance.create = function create(
    params: SupportingDocumentListInstanceCreateOptions,
    callback?: (error: Error | null, items: SupportingDocumentInstance) => any
  ): Promise<SupportingDocumentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["type"] === null || params["type"] === undefined) {
      throw new Error("Required parameter \"params['type']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["Type"] = params["type"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = serialize.object(params["attributes"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new SupportingDocumentInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | SupportingDocumentListInstancePageOptions
      | ((error: Error | null, items: SupportingDocumentPage) => any),
    callback?: (error: Error | null, items: SupportingDocumentPage) => any
  ): Promise<SupportingDocumentPage> {
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
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SupportingDocumentPage(
          operationVersion,
          payload,
          instance._solution
        )
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
    callback?: (error: Error | null, items: SupportingDocumentPage) => any
  ): Promise<SupportingDocumentPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SupportingDocumentPage(
          instance._version,
          payload,
          instance._solution
        )
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

export class SupportingDocumentPage extends Page<
  V1,
  SupportingDocumentPayload,
  SupportingDocumentResource,
  SupportingDocumentInstance
> {
  /**
   * Initialize the SupportingDocumentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SupportingDocumentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SupportingDocumentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SupportingDocumentResource): SupportingDocumentInstance {
    return new SupportingDocumentInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
