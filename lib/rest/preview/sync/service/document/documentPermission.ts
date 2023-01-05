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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Sync from "../../../Sync";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to update a DocumentPermissionInstance
 */
export interface DocumentPermissionContextUpdateOptions {
  /** Boolean flag specifying whether the identity can read the Sync Document. */
  read: boolean;
  /** Boolean flag specifying whether the identity can update the Sync Document. */
  write: boolean;
  /** Boolean flag specifying whether the identity can delete the Sync Document. */
  manage: boolean;
}
/**
 * Options to pass to each
 */
export interface DocumentPermissionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: DocumentPermissionInstance,
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
export interface DocumentPermissionListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface DocumentPermissionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface DocumentPermissionContext {
  /**
   * Remove a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentPermissionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DocumentPermissionInstance) => any
  ): Promise<DocumentPermissionInstance>;

  /**
   * Update a DocumentPermissionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentPermissionInstance
   */
  update(
    params: DocumentPermissionContextUpdateOptions,
    callback?: (error: Error | null, item?: DocumentPermissionInstance) => any
  ): Promise<DocumentPermissionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DocumentPermissionContextSolution {
  serviceSid: string;
  documentSid: string;
  identity: string;
}

export class DocumentPermissionContextImpl
  implements DocumentPermissionContext
{
  protected _solution: DocumentPermissionContextSolution;
  protected _uri: string;

  constructor(
    protected _version: Sync,
    serviceSid: string,
    documentSid: string,
    identity: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(documentSid)) {
      throw new Error("Parameter 'documentSid' is not valid.");
    }

    if (!isValidPathParam(identity)) {
      throw new Error("Parameter 'identity' is not valid.");
    }

    this._solution = { serviceSid, documentSid, identity };
    this._uri = `/Services/${serviceSid}/Documents/${documentSid}/Permissions/${identity}`;
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
    callback?: (error: Error | null, item?: DocumentPermissionInstance) => any
  ): Promise<DocumentPermissionInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DocumentPermissionInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.documentSid,
          instance._solution.identity
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params:
      | DocumentPermissionContextUpdateOptions
      | ((error: Error | null, item?: DocumentPermissionInstance) => any),
    callback?: (error: Error | null, item?: DocumentPermissionInstance) => any
  ): Promise<DocumentPermissionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["read"] === null || params["read"] === undefined) {
      throw new Error("Required parameter \"params['read']\" missing.");
    }

    if (params["write"] === null || params["write"] === undefined) {
      throw new Error("Required parameter \"params['write']\" missing.");
    }

    if (params["manage"] === null || params["manage"] === undefined) {
      throw new Error("Required parameter \"params['manage']\" missing.");
    }

    let data: any = {};

    data["Read"] = serialize.bool(params["read"]);

    data["Write"] = serialize.bool(params["write"]);

    data["Manage"] = serialize.bool(params["manage"]);

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
        new DocumentPermissionInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.documentSid,
          instance._solution.identity
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

interface DocumentPermissionPayload extends TwilioResponsePayload {
  permissions: DocumentPermissionResource[];
}

interface DocumentPermissionResource {
  account_sid: string;
  service_sid: string;
  document_sid: string;
  identity: string;
  read: boolean;
  write: boolean;
  manage: boolean;
  url: string;
}

export class DocumentPermissionInstance {
  protected _solution: DocumentPermissionContextSolution;
  protected _context?: DocumentPermissionContext;

  constructor(
    protected _version: Sync,
    payload: DocumentPermissionResource,
    serviceSid: string,
    documentSid: string,
    identity?: string
  ) {
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.documentSid = payload.document_sid;
    this.identity = payload.identity;
    this.read = payload.read;
    this.write = payload.write;
    this.manage = payload.manage;
    this.url = payload.url;

    this._solution = {
      serviceSid,
      documentSid,
      identity: identity || this.identity,
    };
  }

  /**
   * Twilio Account SID.
   */
  accountSid: string;
  /**
   * Sync Service Instance SID.
   */
  serviceSid: string;
  /**
   * Sync Document SID.
   */
  documentSid: string;
  /**
   * Identity of the user to whom the Sync Document Permission applies.
   */
  identity: string;
  /**
   * Read access.
   */
  read: boolean;
  /**
   * Write access.
   */
  write: boolean;
  /**
   * Manage access.
   */
  manage: boolean;
  /**
   * URL of this Sync Document Permission.
   */
  url: string;

  private get _proxy(): DocumentPermissionContext {
    this._context =
      this._context ||
      new DocumentPermissionContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.documentSid,
        this._solution.identity
      );
    return this._context;
  }

  /**
   * Remove a DocumentPermissionInstance
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
   * Fetch a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentPermissionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DocumentPermissionInstance) => any
  ): Promise<DocumentPermissionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DocumentPermissionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DocumentPermissionInstance
   */
  update(
    params: DocumentPermissionContextUpdateOptions,
    callback?: (error: Error | null, item?: DocumentPermissionInstance) => any
  ): Promise<DocumentPermissionInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: DocumentPermissionInstance) => any
  ): Promise<DocumentPermissionInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      documentSid: this.documentSid,
      identity: this.identity,
      read: this.read,
      write: this.write,
      manage: this.manage,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DocumentPermissionSolution {
  serviceSid: string;
  documentSid: string;
}

export interface DocumentPermissionListInstance {
  _version: Sync;
  _solution: DocumentPermissionSolution;
  _uri: string;

  (identity: string): DocumentPermissionContext;
  get(identity: string): DocumentPermissionContext;

  /**
   * Streams DocumentPermissionInstance records from the API.
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
   * @param { DocumentPermissionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: DocumentPermissionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: DocumentPermissionListInstanceEachOptions,
    callback?: (
      item: DocumentPermissionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of DocumentPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DocumentPermissionPage) => any
  ): Promise<DocumentPermissionPage>;
  /**
   * Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DocumentPermissionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DocumentPermissionInstance[]) => any
  ): Promise<DocumentPermissionInstance[]>;
  list(
    params: DocumentPermissionListInstanceOptions,
    callback?: (error: Error | null, items: DocumentPermissionInstance[]) => any
  ): Promise<DocumentPermissionInstance[]>;
  /**
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DocumentPermissionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DocumentPermissionPage) => any
  ): Promise<DocumentPermissionPage>;
  page(
    params: DocumentPermissionListInstancePageOptions,
    callback?: (error: Error | null, items: DocumentPermissionPage) => any
  ): Promise<DocumentPermissionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DocumentPermissionListInstance(
  version: Sync,
  serviceSid: string,
  documentSid: string
): DocumentPermissionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(documentSid)) {
    throw new Error("Parameter 'documentSid' is not valid.");
  }

  const instance = ((identity) =>
    instance.get(identity)) as DocumentPermissionListInstance;

  instance.get = function get(identity): DocumentPermissionContext {
    return new DocumentPermissionContextImpl(
      version,
      serviceSid,
      documentSid,
      identity
    );
  };

  instance._version = version;
  instance._solution = { serviceSid, documentSid };
  instance._uri = `/Services/${serviceSid}/Documents/${documentSid}/Permissions`;

  instance.page = function page(
    params?:
      | DocumentPermissionListInstancePageOptions
      | ((error: Error | null, items: DocumentPermissionPage) => any),
    callback?: (error: Error | null, items: DocumentPermissionPage) => any
  ): Promise<DocumentPermissionPage> {
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
        new DocumentPermissionPage(
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
    callback?: (error: Error | null, items: DocumentPermissionPage) => any
  ): Promise<DocumentPermissionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DocumentPermissionPage(
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

export class DocumentPermissionPage extends Page<
  Sync,
  DocumentPermissionPayload,
  DocumentPermissionResource,
  DocumentPermissionInstance
> {
  /**
   * Initialize the DocumentPermissionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Sync,
    response: Response<string>,
    solution: DocumentPermissionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DocumentPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DocumentPermissionResource): DocumentPermissionInstance {
    return new DocumentPermissionInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.documentSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
