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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import HostedNumbers from "../HostedNumbers";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { DependentHostedNumberOrderListInstance } from "./authorizationDocument/dependentHostedNumberOrder";

type AuthorizationDocumentStatus =
  | "opened"
  | "signing"
  | "signed"
  | "canceled"
  | "failed";

/**
 * Options to pass to update a AuthorizationDocumentInstance
 *
 * @property { Array<string> } [hostedNumberOrderSids] A list of HostedNumberOrder sids that this AuthorizationDocument will authorize for hosting phone number capabilities on Twilio\\\'s platform.
 * @property { string } [addressSid] A 34 character string that uniquely identifies the Address resource that is associated with this AuthorizationDocument.
 * @property { string } [email] Email that this AuthorizationDocument will be sent to for signing.
 * @property { Array<string> } [ccEmails] Email recipients who will be informed when an Authorization Document has been sent and signed
 * @property { AuthorizationDocumentStatus } [status]
 * @property { string } [contactTitle] The title of the person authorized to sign the Authorization Document for this phone number.
 * @property { string } [contactPhoneNumber] The contact phone number of the person authorized to sign the Authorization Document.
 */
export interface AuthorizationDocumentContextUpdateOptions {
  hostedNumberOrderSids?: Array<string>;
  addressSid?: string;
  email?: string;
  ccEmails?: Array<string>;
  status?: AuthorizationDocumentStatus;
  contactTitle?: string;
  contactPhoneNumber?: string;
}

/**
 * Options to pass to create a AuthorizationDocumentInstance
 *
 * @property { Array<string> } hostedNumberOrderSids A list of HostedNumberOrder sids that this AuthorizationDocument will authorize for hosting phone number capabilities on Twilio\\\'s platform.
 * @property { string } addressSid A 34 character string that uniquely identifies the Address resource that is associated with this AuthorizationDocument.
 * @property { string } email Email that this AuthorizationDocument will be sent to for signing.
 * @property { string } contactTitle The title of the person authorized to sign the Authorization Document for this phone number.
 * @property { string } contactPhoneNumber The contact phone number of the person authorized to sign the Authorization Document.
 * @property { Array<string> } [ccEmails] Email recipients who will be informed when an Authorization Document has been sent and signed.
 */
export interface AuthorizationDocumentListInstanceCreateOptions {
  hostedNumberOrderSids: Array<string>;
  addressSid: string;
  email: string;
  contactTitle: string;
  contactPhoneNumber: string;
  ccEmails?: Array<string>;
}
/**
 * Options to pass to each
 *
 * @property { string } [email] Email that this AuthorizationDocument will be sent to for signing.
 * @property { AuthorizationDocumentStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AuthorizationDocumentListInstanceEachOptions {
  email?: string;
  status?: AuthorizationDocumentStatus;
  pageSize?: number;
  callback?: (
    item: AuthorizationDocumentInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [email] Email that this AuthorizationDocument will be sent to for signing.
 * @property { AuthorizationDocumentStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AuthorizationDocumentListInstanceOptions {
  email?: string;
  status?: AuthorizationDocumentStatus;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [email] Email that this AuthorizationDocument will be sent to for signing.
 * @property { AuthorizationDocumentStatus } [status] Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AuthorizationDocumentListInstancePageOptions {
  email?: string;
  status?: AuthorizationDocumentStatus;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface AuthorizationDocumentContext {
  dependentHostedNumberOrders: DependentHostedNumberOrderListInstance;

  /**
   * Fetch a AuthorizationDocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
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
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
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
   * @param { AuthorizationDocumentContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
   */
  update(
    params: AuthorizationDocumentContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance>;
  update(params?: any, callback?: any): Promise<AuthorizationDocumentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthorizationDocumentContextSolution {
  sid?: string;
}

export class AuthorizationDocumentContextImpl
  implements AuthorizationDocumentContext
{
  protected _solution: AuthorizationDocumentContextSolution;
  protected _uri: string;

  protected _dependentHostedNumberOrders?: DependentHostedNumberOrderListInstance;

  constructor(protected _version: HostedNumbers, sid: string) {
    this._solution = { sid };
    this._uri = `/AuthorizationDocuments/${sid}`;
  }

  get dependentHostedNumberOrders(): DependentHostedNumberOrderListInstance {
    this._dependentHostedNumberOrders =
      this._dependentHostedNumberOrders ||
      DependentHostedNumberOrderListInstance(this._version, this._solution.sid);
    return this._dependentHostedNumberOrders;
  }

  fetch(callback?: any): Promise<AuthorizationDocumentInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthorizationDocumentInstance(
          operationVersion,
          payload,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<AuthorizationDocumentInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["hostedNumberOrderSids"] !== undefined)
      data["HostedNumberOrderSids"] = serialize.map(
        params["hostedNumberOrderSids"],
        (e) => e
      );
    if (params["addressSid"] !== undefined)
      data["AddressSid"] = params["addressSid"];
    if (params["email"] !== undefined) data["Email"] = params["email"];
    if (params["ccEmails"] !== undefined)
      data["CcEmails"] = serialize.map(params["ccEmails"], (e) => e);
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["contactTitle"] !== undefined)
      data["ContactTitle"] = params["contactTitle"];
    if (params["contactPhoneNumber"] !== undefined)
      data["ContactPhoneNumber"] = params["contactPhoneNumber"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthorizationDocumentInstance(
          operationVersion,
          payload,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
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

interface AuthorizationDocumentPayload
  extends AuthorizationDocumentResource,
    Page.TwilioResponsePayload {}

interface AuthorizationDocumentResource {
  sid?: string | null;
  address_sid?: string | null;
  status?: AuthorizationDocumentStatus;
  email?: string | null;
  cc_emails?: Array<string> | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class AuthorizationDocumentInstance {
  protected _solution: AuthorizationDocumentContextSolution;
  protected _context?: AuthorizationDocumentContext;

  constructor(
    protected _version: HostedNumbers,
    payload: AuthorizationDocumentPayload,
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
   * AuthorizationDocument sid.
   */
  sid?: string | null;
  /**
   * Address sid.
   */
  addressSid?: string | null;
  status?: AuthorizationDocumentStatus;
  /**
   * Email.
   */
  email?: string | null;
  /**
   * A list of emails.
   */
  ccEmails?: Array<string> | null;
  /**
   * The date this AuthorizationDocument was created.
   */
  dateCreated?: Date | null;
  /**
   * The date this AuthorizationDocument was updated.
   */
  dateUpdated?: Date | null;
  url?: string | null;
  links?: object | null;

  private get _proxy(): AuthorizationDocumentContext {
    this._context =
      this._context ||
      new AuthorizationDocumentContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a AuthorizationDocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
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
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
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
   * @param { AuthorizationDocumentContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
   */
  update(
    params: AuthorizationDocumentContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance>;
  update(params?: any, callback?: any): Promise<AuthorizationDocumentInstance> {
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

export interface AuthorizationDocumentListInstance {
  (sid: string): AuthorizationDocumentContext;
  get(sid: string): AuthorizationDocumentContext;

  /**
   * Create a AuthorizationDocumentInstance
   *
   * @param { AuthorizationDocumentListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AuthorizationDocumentInstance
   */
  create(
    params: AuthorizationDocumentListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: AuthorizationDocumentInstance
    ) => any
  ): Promise<AuthorizationDocumentInstance>;
  create(params: any, callback?: any): Promise<AuthorizationDocumentInstance>;

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
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: AuthorizationDocumentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
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
    params?: AuthorizationDocumentListInstanceEachOptions,
    callback?: (
      item: AuthorizationDocumentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AuthorizationDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: AuthorizationDocumentPage) => any
  ): Promise<AuthorizationDocumentPage>;
  /**
   * Retrieve a single target page of AuthorizationDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: AuthorizationDocumentPage) => any
  ): Promise<AuthorizationDocumentPage>;
  getPage(params?: any, callback?: any): Promise<AuthorizationDocumentPage>;
  /**
   * Lists AuthorizationDocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AuthorizationDocumentInstance[]
    ) => any
  ): Promise<AuthorizationDocumentInstance[]>;
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
    params?: AuthorizationDocumentListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AuthorizationDocumentInstance[]
    ) => any
  ): Promise<AuthorizationDocumentInstance[]>;
  list(params?: any, callback?: any): Promise<AuthorizationDocumentInstance[]>;
  /**
   * Retrieve a single page of AuthorizationDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AuthorizationDocumentPage) => any
  ): Promise<AuthorizationDocumentPage>;
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
    params: AuthorizationDocumentListInstancePageOptions,
    callback?: (error: Error | null, items: AuthorizationDocumentPage) => any
  ): Promise<AuthorizationDocumentPage>;
  page(params?: any, callback?: any): Promise<AuthorizationDocumentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthorizationDocumentSolution {}

interface AuthorizationDocumentListInstanceImpl
  extends AuthorizationDocumentListInstance {}
class AuthorizationDocumentListInstanceImpl
  implements AuthorizationDocumentListInstance
{
  _version?: HostedNumbers;
  _solution?: AuthorizationDocumentSolution;
  _uri?: string;
}

export function AuthorizationDocumentListInstance(
  version: HostedNumbers
): AuthorizationDocumentListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as AuthorizationDocumentListInstanceImpl;

  instance.get = function get(sid): AuthorizationDocumentContext {
    return new AuthorizationDocumentContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/AuthorizationDocuments`;

  instance.create = function create(
    params: any,
    callback?: any
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
      (e) => e
    );

    data["AddressSid"] = params["addressSid"];

    data["Email"] = params["email"];

    data["ContactTitle"] = params["contactTitle"];

    data["ContactPhoneNumber"] = params["contactPhoneNumber"];
    if (params["ccEmails"] !== undefined)
      data["CcEmails"] = serialize.map(params["ccEmails"], (e) => e);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new AuthorizationDocumentInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<AuthorizationDocumentPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["email"] !== undefined) data["Email"] = params["email"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthorizationDocumentPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<AuthorizationDocumentPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthorizationDocumentPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
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
    payload: AuthorizationDocumentPayload
  ): AuthorizationDocumentInstance {
    return new AuthorizationDocumentInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
