/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Sync
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
import { DocumentPermissionListInstance } from "./document/documentPermission";

/**
 * Options to pass to update a DocumentInstance
 */
export interface DocumentContextUpdateOptions {
  /** The If-Match HTTP request header */
  ifMatch?: string;
  /** A JSON string that represents an arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length. */
  data?: object;
  /** How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Document expires and is deleted (time-to-live). */
  ttl?: number;
}

/**
 * Options to pass to create a DocumentInstance
 */
export interface DocumentListInstanceCreateOptions {
  /** An application-defined string that uniquely identifies the Sync Document */
  uniqueName?: string;
  /** A JSON string that represents an arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length. */
  data?: object;
  /** How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Document expires and is deleted (the Sync Document\\\'s time-to-live). */
  ttl?: number;
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
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentInstance
   */
  update(
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

  constructor(protected _version: V1, serviceSid: string, sid: string) {
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

  fetch(
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

    operationPromise = operationPromise.then(
      (payload) =>
        new DocumentInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
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
      | DocumentContextUpdateOptions
      | ((error: Error | null, item?: DocumentInstance) => any),
    callback?: (error: Error | null, item?: DocumentInstance) => any
  ): Promise<DocumentInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["data"] !== undefined)
      data["Data"] = serialize.object(params["data"]);
    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];

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

    operationPromise = operationPromise.then(
      (payload) =>
        new DocumentInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
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
  data: Record<string, object>;
  date_expires: Date;
  date_created: Date;
  date_updated: Date;
  created_by: string;
}

export class DocumentInstance {
  protected _solution: DocumentContextSolution;
  protected _context?: DocumentContext;

  constructor(
    protected _version: V1,
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
    this.dateExpires = deserialize.iso8601DateTime(payload.date_expires);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Document resource.
   */
  sid: string;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used in place of the resource\'s `sid` in the URL to address the resource and can be up to 320 characters long.
   */
  uniqueName: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Document resource.
   */
  accountSid: string;
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
   */
  serviceSid: string;
  /**
   * The absolute URL of the Document resource.
   */
  url: string;
  /**
   * The URLs of resources related to the Sync Document.
   */
  links: Record<string, string>;
  /**
   * The current revision of the Sync Document, represented as a string. The `revision` property is used with conditional updates to ensure data consistency.
   */
  revision: string;
  /**
   * An arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length.
   */
  data: Record<string, object>;
  /**
   * The date and time in GMT when the Sync Document expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Sync Document does not expire, this value is `null`. The Document resource might not be deleted immediately after it expires.
   */
  dateExpires: Date;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The identity of the Sync Document\'s creator. If the Sync Document is created from the client SDK, the value matches the Access Token\'s `identity` field. If the Sync Document was created from the REST API, the value is `system`.
   */
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
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentInstance
   */
  update(
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
      dateExpires: this.dateExpires,
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
  _version: V1;
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
  version: V1,
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
    if (params["ttl"] !== undefined) data["Ttl"] = params["ttl"];

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
  V1,
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
    version: V1,
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
