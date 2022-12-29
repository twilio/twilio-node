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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to create a CustomerProfilesEntityAssignmentsInstance
 *
 * @property { string } objectSid The SID of an object bag that holds information of the different items.
 */
export interface CustomerProfilesEntityAssignmentsListInstanceCreateOptions {
  objectSid: string;
}
/**
 * Options to pass to each
 *
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
export interface CustomerProfilesEntityAssignmentsListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: CustomerProfilesEntityAssignmentsInstance,
    done: (err?: Error) => void
  ) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CustomerProfilesEntityAssignmentsListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CustomerProfilesEntityAssignmentsListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface CustomerProfilesEntityAssignmentsContext {
  /**
   * Remove a CustomerProfilesEntityAssignmentsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CustomerProfilesEntityAssignmentsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CustomerProfilesEntityAssignmentsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEntityAssignmentsInstance
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CustomerProfilesEntityAssignmentsContextSolution {
  customerProfileSid?: string;
  sid?: string;
}

export class CustomerProfilesEntityAssignmentsContextImpl
  implements CustomerProfilesEntityAssignmentsContext
{
  protected _solution: CustomerProfilesEntityAssignmentsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, customerProfileSid: string, sid: string) {
    if (!isValidPathParam(customerProfileSid)) {
      throw new Error("Parameter 'customerProfileSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { customerProfileSid, sid };
    this._uri = `/CustomerProfiles/${customerProfileSid}/EntityAssignments/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<CustomerProfilesEntityAssignmentsInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesEntityAssignmentsInstance(
          operationVersion,
          payload,
          this._solution.customerProfileSid,
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

interface CustomerProfilesEntityAssignmentsPayload
  extends TwilioResponsePayload {
  results: CustomerProfilesEntityAssignmentsResource[];
}

interface CustomerProfilesEntityAssignmentsResource {
  sid?: string | null;
  customer_profile_sid?: string | null;
  account_sid?: string | null;
  object_sid?: string | null;
  date_created?: Date | null;
  url?: string | null;
}

export class CustomerProfilesEntityAssignmentsInstance {
  protected _solution: CustomerProfilesEntityAssignmentsContextSolution;
  protected _context?: CustomerProfilesEntityAssignmentsContext;

  constructor(
    protected _version: V1,
    payload: CustomerProfilesEntityAssignmentsResource,
    customerProfileSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.customerProfileSid = payload.customer_profile_sid;
    this.accountSid = payload.account_sid;
    this.objectSid = payload.object_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { customerProfileSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The unique string that identifies the CustomerProfile resource.
   */
  customerProfileSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The sid of an object bag
   */
  objectSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The absolute URL of the Identity resource
   */
  url?: string | null;

  private get _proxy(): CustomerProfilesEntityAssignmentsContext {
    this._context =
      this._context ||
      new CustomerProfilesEntityAssignmentsContextImpl(
        this._version,
        this._solution.customerProfileSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a CustomerProfilesEntityAssignmentsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a CustomerProfilesEntityAssignmentsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CustomerProfilesEntityAssignmentsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEntityAssignmentsInstance
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      customerProfileSid: this.customerProfileSid,
      accountSid: this.accountSid,
      objectSid: this.objectSid,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CustomerProfilesEntityAssignmentsListInstance {
  (sid: string): CustomerProfilesEntityAssignmentsContext;
  get(sid: string): CustomerProfilesEntityAssignmentsContext;

  /**
   * Create a CustomerProfilesEntityAssignmentsInstance
   *
   * @param { CustomerProfilesEntityAssignmentsListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CustomerProfilesEntityAssignmentsInstance
   */
  create(
    params: CustomerProfilesEntityAssignmentsListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEntityAssignmentsInstance
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance>;

  /**
   * Streams CustomerProfilesEntityAssignmentsInstance records from the API.
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
   * @param { CustomerProfilesEntityAssignmentsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | CustomerProfilesEntityAssignmentsListInstanceEachOptions
      | ((
          item: CustomerProfilesEntityAssignmentsInstance,
          done: (err?: Error) => void
        ) => void),
    callback?: (
      item: CustomerProfilesEntityAssignmentsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of CustomerProfilesEntityAssignmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (
      error: Error | null,
      items: CustomerProfilesEntityAssignmentsPage
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsPage>;
  /**
   * Lists CustomerProfilesEntityAssignmentsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomerProfilesEntityAssignmentsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | CustomerProfilesEntityAssignmentsListInstanceOptions
      | ((
          error: Error | null,
          items: CustomerProfilesEntityAssignmentsInstance[]
        ) => any),
    callback?: (
      error: Error | null,
      items: CustomerProfilesEntityAssignmentsInstance[]
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance[]>;
  /**
   * Retrieve a single page of CustomerProfilesEntityAssignmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomerProfilesEntityAssignmentsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | CustomerProfilesEntityAssignmentsListInstancePageOptions
      | ((
          error: Error | null,
          items: CustomerProfilesEntityAssignmentsPage
        ) => any),
    callback?: (
      error: Error | null,
      items: CustomerProfilesEntityAssignmentsPage
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CustomerProfilesEntityAssignmentsSolution {
  customerProfileSid?: string;
}

interface CustomerProfilesEntityAssignmentsListInstanceImpl
  extends CustomerProfilesEntityAssignmentsListInstance {}
class CustomerProfilesEntityAssignmentsListInstanceImpl
  implements CustomerProfilesEntityAssignmentsListInstance
{
  _version?: V1;
  _solution?: CustomerProfilesEntityAssignmentsSolution;
  _uri?: string;
}

export function CustomerProfilesEntityAssignmentsListInstance(
  version: V1,
  customerProfileSid: string
): CustomerProfilesEntityAssignmentsListInstance {
  if (!isValidPathParam(customerProfileSid)) {
    throw new Error("Parameter 'customerProfileSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as CustomerProfilesEntityAssignmentsListInstanceImpl;

  instance.get = function get(sid): CustomerProfilesEntityAssignmentsContext {
    return new CustomerProfilesEntityAssignmentsContextImpl(
      version,
      customerProfileSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { customerProfileSid };
  instance._uri = `/CustomerProfiles/${customerProfileSid}/EntityAssignments`;

  instance.create = function create(
    params: CustomerProfilesEntityAssignmentsListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEntityAssignmentsInstance
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["objectSid"] === null || params["objectSid"] === undefined) {
      throw new Error("Required parameter \"params['objectSid']\" missing.");
    }

    let data: any = {};

    data["ObjectSid"] = params["objectSid"];

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
      (payload) =>
        new CustomerProfilesEntityAssignmentsInstance(
          operationVersion,
          payload,
          this._solution.customerProfileSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | CustomerProfilesEntityAssignmentsListInstancePageOptions
      | ((
          error: Error | null,
          item?: CustomerProfilesEntityAssignmentsPage
        ) => any),
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEntityAssignmentsPage
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsPage> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: CustomerProfilesEntityAssignmentsPage
      ) => any;
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
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesEntityAssignmentsPage(
          operationVersion,
          payload,
          this._solution
        )
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
    targetUrl: string,
    callback?: (
      error: Error | null,
      items: CustomerProfilesEntityAssignmentsPage
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesEntityAssignmentsPage(
          this._version,
          payload,
          this._solution
        )
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

export class CustomerProfilesEntityAssignmentsPage extends Page<
  V1,
  CustomerProfilesEntityAssignmentsPayload,
  CustomerProfilesEntityAssignmentsResource,
  CustomerProfilesEntityAssignmentsInstance
> {
  /**
   * Initialize the CustomerProfilesEntityAssignmentsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CustomerProfilesEntityAssignmentsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CustomerProfilesEntityAssignmentsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: CustomerProfilesEntityAssignmentsResource
  ): CustomerProfilesEntityAssignmentsInstance {
    return new CustomerProfilesEntityAssignmentsInstance(
      this._version,
      payload,
      this._solution.customerProfileSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
