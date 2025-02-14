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
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import HostedNumbers from "../HostedNumbers";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { DependentHostedNumberOrderListInstance } from "./authorizationDocument/dependentHostedNumberOrder";

export type AuthorizationDocumentStatus =
  | "opened"
  | "signing"
  | "signed"
  | "canceled"
  | "failed";

/**
 * Options to pass to update a AuthorizationDocumentInstance
 */
export interface AuthorizationDocumentContextUpdateOptions {
  /** A list of HostedNumberOrder sids that this AuthorizationDocument will authorize for hosting phone number capabilities on Twilio\\\'s platform. */
  hostedNumberOrderSids?: Array<string>;
  /** A 34 character string that uniquely identifies the Address resource that is associated with this AuthorizationDocument. */
  addressSid?: string;
  /** Email that this AuthorizationDocument will be sent to for signing. */
  email?: string;
  /** Email recipients who will be informed when an Authorization Document has been sent and signed */
  ccEmails?: Array<string>;
  /**  */
  status?: AuthorizationDocumentStatus;
  /** The title of the person authorized to sign the Authorization Document for this phone number. */
  contactTitle?: string;
  /** The contact phone number of the person authorized to sign the Authorization Document. */
  contactPhoneNumber?: string;
}

/**
 * Options to pass to create a AuthorizationDocumentInstance
 */
export interface AuthorizationDocumentListInstanceCreateOptions {
  /** A list of HostedNumberOrder sids that this AuthorizationDocument will authorize for hosting phone number capabilities on Twilio\\\'s platform. */
  hostedNumberOrderSids: Array<string>;
  /** A 34 character string that uniquely identifies the Address resource that is associated with this AuthorizationDocument. */
  addressSid: string;
  /** Email that this AuthorizationDocument will be sent to for signing. */
  email: string;
  /** The title of the person authorized to sign the Authorization Document for this phone number. */
  contactTitle: string;
  /** The contact phone number of the person authorized to sign the Authorization Document. */
  contactPhoneNumber: string;
  /** Email recipients who will be informed when an Authorization Document has been sent and signed. */
  ccEmails?: Array<string>;
}
/**
 * Options to pass to each
 */
export interface AuthorizationDocumentListInstanceEachOptions {
  /** Email that this AuthorizationDocument will be sent to for signing. */
  email?: string;
  /** Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values) for more information on each of these statuses. */
  status?: AuthorizationDocumentStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: AuthorizationDocumentInstance,
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
export interface AuthorizationDocumentListInstanceOptions {
  /** Email that this AuthorizationDocument will be sent to for signing. */
  email?: string;
  /** Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values) for more information on each of these statuses. */
  status?: AuthorizationDocumentStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AuthorizationDocumentListInstancePageOptions {
  /** Email that this AuthorizationDocument will be sent to for signing. */
  email?: string;
  /** Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values) for more information on each of these statuses. */
  status?: AuthorizationDocumentStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AuthorizationDocumentContext {
  dependentHostedNumberOrders: DependentHostedNumberOrderListInstance;

  /**
   * Fetch a AuthorizationDocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthorizationDocumentInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance>;

  /**
   * Update a AuthorizationDocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthorizationDocumentInstance
   */
  update(
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance>;
  /**
   * Update a AuthorizationDocumentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthorizationDocumentInstance
   */
  update(
    params: AuthorizationDocumentContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthorizationDocumentContextSolution {
  sid: string;
}

export class AuthorizationDocumentContextImpl
  implements AuthorizationDocumentContext
{
  protected _solution: AuthorizationDocumentContextSolution;
  protected _uri: string;

  protected _dependentHostedNumberOrders?: DependentHostedNumberOrderListInstance;

  constructor(protected _version: HostedNumbers, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/AuthorizationDocuments/${sid}`;
  }

  get dependentHostedNumberOrders(): DependentHostedNumberOrderListInstance {
    this._dependentHostedNumberOrders =
      this._dependentHostedNumberOrders ||
      DependentHostedNumberOrderListInstance(this._version, this._solution.sid);
    return this._dependentHostedNumberOrders;
  }

  async fetch(
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance> {
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
      let operation = new AuthorizationDocumentInstance(
        operationVersion,
        payload,
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
    params?:
      | AuthorizationDocumentContextUpdateOptions
      | ((error: Error | null, item?: AuthorizationDocumentInstance) => any),
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["hostedNumberOrderSids"] !== undefined)
      data["HostedNumberOrderSids"] = serialize.map(
        params["hostedNumberOrderSids"],
        (e: string) => e
      );
    if (params["addressSid"] !== undefined)
      data["AddressSid"] = params["addressSid"];
    if (params["email"] !== undefined) data["Email"] = params["email"];
    if (params["ccEmails"] !== undefined)
      data["CcEmails"] = serialize.map(params["ccEmails"], (e: string) => e);
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["contactTitle"] !== undefined)
      data["ContactTitle"] = params["contactTitle"];
    if (params["contactPhoneNumber"] !== undefined)
      data["ContactPhoneNumber"] = params["contactPhoneNumber"];

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

    try {
      let payload = await operationPromise;
      let operation = new AuthorizationDocumentInstance(
        operationVersion,
        payload,
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

interface AuthorizationDocumentPayload extends TwilioResponsePayload {
  items: AuthorizationDocumentResource[];
}

interface AuthorizationDocumentResource {
  sid: string;
  address_sid: string;
  status: AuthorizationDocumentStatus;
  email: string;
  cc_emails: Array<string>;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: Record<string, string>;
}

export class AuthorizationDocumentInstance {
  protected _solution: AuthorizationDocumentContextSolution;
  protected _context?: AuthorizationDocumentContext;

  constructor(
    protected _version: HostedNumbers,
    payload: AuthorizationDocumentResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.addressSid = payload.address_sid;
    this.status = payload.status;
    this.email = payload.email;
    this.ccEmails = payload.cc_emails;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this AuthorizationDocument.
   */
  sid: string;
  /**
   * A 34 character string that uniquely identifies the Address resource that is associated with this AuthorizationDocument.
   */
  addressSid: string;
  status: AuthorizationDocumentStatus;
  /**
   * Email that this AuthorizationDocument will be sent to for signing.
   */
  email: string;
  /**
   * Email recipients who will be informed when an Authorization Document has been sent and signed.
   */
  ccEmails: Array<string>;
  /**
   * The date this resource was created, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was updated, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  url: string;
  links: Record<string, string>;

  private get _proxy(): AuthorizationDocumentContext {
    this._context =
      this._context ||
      new AuthorizationDocumentContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a AuthorizationDocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthorizationDocumentInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AuthorizationDocumentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthorizationDocumentInstance
   */
  update(
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance>;
  /**
   * Update a AuthorizationDocumentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthorizationDocumentInstance
   */
  update(
    params: AuthorizationDocumentContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance>;

  update(
    params?: any,
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the dependentHostedNumberOrders.
   */
  dependentHostedNumberOrders(): DependentHostedNumberOrderListInstance {
    return this._proxy.dependentHostedNumberOrders;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      addressSid: this.addressSid,
      status: this.status,
      email: this.email,
      ccEmails: this.ccEmails,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AuthorizationDocumentSolution {}

export interface AuthorizationDocumentListInstance {
  _version: HostedNumbers;
  _solution: AuthorizationDocumentSolution;
  _uri: string;

  (sid: string): AuthorizationDocumentContext;
  get(sid: string): AuthorizationDocumentContext;

  /**
   * Create a AuthorizationDocumentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthorizationDocumentInstance
   */
  create(
    params: AuthorizationDocumentListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance>;

  /**
   * Streams AuthorizationDocumentInstance records from the API.
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
   * @param { AuthorizationDocumentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: AuthorizationDocumentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: AuthorizationDocumentListInstanceEachOptions,
    callback?: (
      item: AuthorizationDocumentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of AuthorizationDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AuthorizationDocumentPage) => any
  ): Promise<AuthorizationDocumentPage>;
  /**
   * Lists AuthorizationDocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthorizationDocumentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AuthorizationDocumentInstance[]
    ) => any
  ): Promise<AuthorizationDocumentInstance[]>;
  list(
    params: AuthorizationDocumentListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AuthorizationDocumentInstance[]
    ) => any
  ): Promise<AuthorizationDocumentInstance[]>;
  /**
   * Retrieve a single page of AuthorizationDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthorizationDocumentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AuthorizationDocumentPage) => any
  ): Promise<AuthorizationDocumentPage>;
  page(
    params: AuthorizationDocumentListInstancePageOptions,
    callback?: (error: Error | null, items: AuthorizationDocumentPage) => any
  ): Promise<AuthorizationDocumentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AuthorizationDocumentListInstance(
  version: HostedNumbers
): AuthorizationDocumentListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as AuthorizationDocumentListInstance;

  instance.get = function get(sid): AuthorizationDocumentContext {
    return new AuthorizationDocumentContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/AuthorizationDocuments`;

  instance.create = function create(
    params: AuthorizationDocumentListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["hostedNumberOrderSids"] === null ||
      params["hostedNumberOrderSids"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['hostedNumberOrderSids']\" missing."
      );
    }

    if (params["addressSid"] === null || params["addressSid"] === undefined) {
      throw new Error("Required parameter \"params['addressSid']\" missing.");
    }

    if (params["email"] === null || params["email"] === undefined) {
      throw new Error("Required parameter \"params['email']\" missing.");
    }

    if (
      params["contactTitle"] === null ||
      params["contactTitle"] === undefined
    ) {
      throw new Error("Required parameter \"params['contactTitle']\" missing.");
    }

    if (
      params["contactPhoneNumber"] === null ||
      params["contactPhoneNumber"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['contactPhoneNumber']\" missing."
      );
    }

    let data: any = {};

    data["HostedNumberOrderSids"] = serialize.map(
      params["hostedNumberOrderSids"],
      (e: string) => e
    );

    data["AddressSid"] = params["addressSid"];

    data["Email"] = params["email"];

    data["ContactTitle"] = params["contactTitle"];

    data["ContactPhoneNumber"] = params["contactPhoneNumber"];
    if (params["ccEmails"] !== undefined)
      data["CcEmails"] = serialize.map(params["ccEmails"], (e: string) => e);

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
      (payload) => new AuthorizationDocumentInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | AuthorizationDocumentListInstancePageOptions
      | ((error: Error | null, items: AuthorizationDocumentPage) => any),
    callback?: (error: Error | null, items: AuthorizationDocumentPage) => any
  ): Promise<AuthorizationDocumentPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["email"] !== undefined) data["Email"] = params["email"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
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
        new AuthorizationDocumentPage(
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
    callback?: (error: Error | null, items: AuthorizationDocumentPage) => any
  ): Promise<AuthorizationDocumentPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AuthorizationDocumentPage(
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

export class AuthorizationDocumentPage extends Page<
  HostedNumbers,
  AuthorizationDocumentPayload,
  AuthorizationDocumentResource,
  AuthorizationDocumentInstance
> {
  /**
   * Initialize the AuthorizationDocumentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: HostedNumbers,
    response: Response<string>,
    solution: AuthorizationDocumentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AuthorizationDocumentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: AuthorizationDocumentResource
  ): AuthorizationDocumentInstance {
    return new AuthorizationDocumentInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
