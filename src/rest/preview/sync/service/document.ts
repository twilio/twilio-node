/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Sync from "../../Sync";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { DocumentPermissionListInstance } from "./document/documentPermission";

/**
 * Options to pass to update a DocumentInstance
 */
export interface DocumentContextUpdateOptions {
  /**  */
  data: any;
  /** The If-Match HTTP request header */
  ifMatch?: string;
}

/**
 * Options to pass to create a DocumentInstance
 */
export interface DocumentListInstanceCreateOptions {
  /**  */
  uniqueName?: string;
  /**  */
  data?: any;
}
/**
 * Options to pass to each
 */
export interface DocumentListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: DocumentInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface DocumentListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface DocumentListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface DocumentContext {
  documentPermissions: DocumentPermissionListInstance;

  /**
   * Remove a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DocumentInstance) => any
  ): Promise<DocumentInstance>;

  /**
   * Update a DocumentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentInstance
   */
  update(
    params: DocumentContextUpdateOptions,
    callback?: (error: Error | null, item?: DocumentInstance) => any
  ): Promise<DocumentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DocumentContextSolution {
  serviceSid: string;
  sid: string;
}

export class DocumentContextImpl implements DocumentContext {
  protected _solution: DocumentContextSolution;
  protected _uri: string;

  protected _documentPermissions?: DocumentPermissionListInstance;

  constructor(protected _version: Sync, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Documents/${sid}`;
  }

  get documentPermissions(): DocumentPermissionListInstance {
    this._documentPermissions =
      this._documentPermissions ||
      DocumentPermissionListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._documentPermissions;
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

  async fetch(
    callback?: (error: Error | null, item?: DocumentInstance) => any
  ): Promise<DocumentInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new DocumentInstance(
        operationVersion,
        payload,
        instance._solution.serviceSid,
        instance._solution.sid
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
  }

  async update(
    params: DocumentContextUpdateOptions,
    callback?: (error: Error | null, item?: DocumentInstance) => any
  ): Promise<DocumentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["data"] === null || params["data"] === undefined) {
      throw new Error("Required parameter \"params['data']\" missing.");
    }

    let data: any = {};

    data["Data"] = serialize.object(params["data"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["ifMatch"] !== undefined)
      headers["If-Match"] = params["ifMatch"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new DocumentInstance(
        operationVersion,
        payload,
        instance._solution.serviceSid,
        instance._solution.sid
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
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

interface DocumentPayload extends TwilioResponsePayload {
  documents: DocumentResource[];
}

interface DocumentResource {
  sid: string;
  unique_name: string;
  account_sid: string;
  service_sid: string;
  url: string;
  links: Record<string, string>;
  revision: string;
  data: any;
  date_created: Date;
  date_updated: Date;
  created_by: string;
}

export class DocumentInstance {
  protected _solution: DocumentContextSolution;
  protected _context?: DocumentContext;

  constructor(
    protected _version: Sync,
    payload: DocumentResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.revision = payload.revision;
    this.data = payload.data;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  sid: string;
  uniqueName: string;
  accountSid: string;
  serviceSid: string;
  url: string;
  links: Record<string, string>;
  revision: string;
  data: any;
  dateCreated: Date;
  dateUpdated: Date;
  createdBy: string;

  private get _proxy(): DocumentContext {
    this._context =
      this._context ||
      new DocumentContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a DocumentInstance
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
   * Fetch a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DocumentInstance) => any
  ): Promise<DocumentInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DocumentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentInstance
   */
  update(
    params: DocumentContextUpdateOptions,
    callback?: (error: Error | null, item?: DocumentInstance) => any
  ): Promise<DocumentInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: DocumentInstance) => any
  ): Promise<DocumentInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the documentPermissions.
   */
  documentPermissions(): DocumentPermissionListInstance {
    return this._proxy.documentPermissions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      uniqueName: this.uniqueName,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      url: this.url,
      links: this.links,
      revision: this.revision,
      data: this.data,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      createdBy: this.createdBy,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DocumentSolution {
  serviceSid: string;
}

export interface DocumentListInstance {
  _version: Sync;
  _solution: DocumentSolution;
  _uri: string;

  (sid: string): DocumentContext;
  get(sid: string): DocumentContext;

  /**
   * Create a DocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentInstance
   */
  create(
    callback?: (error: Error | null, item?: DocumentInstance) => any
  ): Promise<DocumentInstance>;
  /**
   * Create a DocumentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentInstance
   */
  create(
    params: DocumentListInstanceCreateOptions,
    callback?: (error: Error | null, item?: DocumentInstance) => any
  ): Promise<DocumentInstance>;

  /**
   * Streams DocumentInstance records from the API.
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
   * @param { DocumentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: DocumentInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: DocumentListInstanceEachOptions,
    callback?: (item: DocumentInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of DocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DocumentPage) => any
  ): Promise<DocumentPage>;
  /**
   * Lists DocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DocumentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DocumentInstance[]) => any
  ): Promise<DocumentInstance[]>;
  list(
    params: DocumentListInstanceOptions,
    callback?: (error: Error | null, items: DocumentInstance[]) => any
  ): Promise<DocumentInstance[]>;
  /**
   * Retrieve a single page of DocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DocumentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DocumentPage) => any
  ): Promise<DocumentPage>;
  page(
    params: DocumentListInstancePageOptions,
    callback?: (error: Error | null, items: DocumentPage) => any
  ): Promise<DocumentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DocumentListInstance(
  version: Sync,
  serviceSid: string
): DocumentListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as DocumentListInstance;

  instance.get = function get(sid): DocumentContext {
    return new DocumentContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Documents`;

  instance.create = function create(
    params?:
      | DocumentListInstanceCreateOptions
      | ((error: Error | null, items: DocumentInstance) => any),
    callback?: (error: Error | null, items: DocumentInstance) => any
  ): Promise<DocumentInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["data"] !== undefined)
      data["Data"] = serialize.object(params["data"]);

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
      (payload) =>
        new DocumentInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
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
      | DocumentListInstancePageOptions
      | ((error: Error | null, items: DocumentPage) => any),
    callback?: (error: Error | null, items: DocumentPage) => any
  ): Promise<DocumentPage> {
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
        new DocumentPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: DocumentPage) => any
  ): Promise<DocumentPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DocumentPage(instance._version, payload, instance._solution)
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

export class DocumentPage extends Page<
  Sync,
  DocumentPayload,
  DocumentResource,
  DocumentInstance
> {
  /**
   * Initialize the DocumentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Sync,
    response: Response<string>,
    solution: DocumentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DocumentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DocumentResource): DocumentInstance {
    return new DocumentInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
