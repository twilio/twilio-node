/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a MessagingConfigurationInstance
 */
export interface MessagingConfigurationContextUpdateOptions {
  /** The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) to be used to send SMS to the country of this configuration. */
  messagingServiceSid: string;
}

/**
 * Options to pass to create a MessagingConfigurationInstance
 */
export interface MessagingConfigurationListInstanceCreateOptions {
  /** The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`. */
  country: string;
  /** The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) to be used to send SMS to the country of this configuration. */
  messagingServiceSid: string;
}
/**
 * Options to pass to each
 */
export interface MessagingConfigurationListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: MessagingConfigurationInstance,
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
export interface MessagingConfigurationListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface MessagingConfigurationListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface MessagingConfigurationContext {
  /**
   * Remove a MessagingConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a MessagingConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessagingConfigurationInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: MessagingConfigurationInstance
    ) => any
  ): Promise<MessagingConfigurationInstance>;

  /**
   * Update a MessagingConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessagingConfigurationInstance
   */
  update(
    params: MessagingConfigurationContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: MessagingConfigurationInstance
    ) => any
  ): Promise<MessagingConfigurationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MessagingConfigurationContextSolution {
  serviceSid: string;
  country: string;
}

export class MessagingConfigurationContextImpl
  implements MessagingConfigurationContext
{
  protected _solution: MessagingConfigurationContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, serviceSid: string, country: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(country)) {
      throw new Error("Parameter 'country' is not valid.");
    }

    this._solution = { serviceSid, country };
    this._uri = `/Services/${serviceSid}/MessagingConfigurations/${country}`;
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
    callback?: (
      error: Error | null,
      item?: MessagingConfigurationInstance
    ) => any
  ): Promise<MessagingConfigurationInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MessagingConfigurationInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.country
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params: MessagingConfigurationContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: MessagingConfigurationInstance
    ) => any
  ): Promise<MessagingConfigurationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["messagingServiceSid"] === null ||
      params["messagingServiceSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['messagingServiceSid']\" missing."
      );
    }

    let data: any = {};

    data["MessagingServiceSid"] = params["messagingServiceSid"];

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
        new MessagingConfigurationInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.country
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

interface MessagingConfigurationPayload extends TwilioResponsePayload {
  messaging_configurations: MessagingConfigurationResource[];
}

interface MessagingConfigurationResource {
  account_sid: string;
  service_sid: string;
  country: string;
  messaging_service_sid: string;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class MessagingConfigurationInstance {
  protected _solution: MessagingConfigurationContextSolution;
  protected _context?: MessagingConfigurationContext;

  constructor(
    protected _version: V2,
    payload: MessagingConfigurationResource,
    serviceSid: string,
    country?: string
  ) {
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.country = payload.country;
    this.messagingServiceSid = payload.messaging_service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { serviceSid, country: country || this.country };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid: string;
  /**
   * The ISO-3166-1 country code of the country or `all`.
   */
  country: string;
  /**
   * The SID of the Messaging Service used for this configuration.
   */
  messagingServiceSid: string;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): MessagingConfigurationContext {
    this._context =
      this._context ||
      new MessagingConfigurationContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.country
      );
    return this._context;
  }

  /**
   * Remove a MessagingConfigurationInstance
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
   * Fetch a MessagingConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessagingConfigurationInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: MessagingConfigurationInstance
    ) => any
  ): Promise<MessagingConfigurationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a MessagingConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessagingConfigurationInstance
   */
  update(
    params: MessagingConfigurationContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: MessagingConfigurationInstance
    ) => any
  ): Promise<MessagingConfigurationInstance>;

  update(
    params?: any,
    callback?: (
      error: Error | null,
      item?: MessagingConfigurationInstance
    ) => any
  ): Promise<MessagingConfigurationInstance> {
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
      country: this.country,
      messagingServiceSid: this.messagingServiceSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface MessagingConfigurationSolution {
  serviceSid: string;
}

export interface MessagingConfigurationListInstance {
  _version: V2;
  _solution: MessagingConfigurationSolution;
  _uri: string;

  (country: string): MessagingConfigurationContext;
  get(country: string): MessagingConfigurationContext;

  /**
   * Create a MessagingConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessagingConfigurationInstance
   */
  create(
    params: MessagingConfigurationListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: MessagingConfigurationInstance
    ) => any
  ): Promise<MessagingConfigurationInstance>;

  /**
   * Streams MessagingConfigurationInstance records from the API.
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
   * @param { MessagingConfigurationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: MessagingConfigurationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: MessagingConfigurationListInstanceEachOptions,
    callback?: (
      item: MessagingConfigurationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of MessagingConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: MessagingConfigurationPage) => any
  ): Promise<MessagingConfigurationPage>;
  /**
   * Lists MessagingConfigurationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessagingConfigurationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: MessagingConfigurationInstance[]
    ) => any
  ): Promise<MessagingConfigurationInstance[]>;
  list(
    params: MessagingConfigurationListInstanceOptions,
    callback?: (
      error: Error | null,
      items: MessagingConfigurationInstance[]
    ) => any
  ): Promise<MessagingConfigurationInstance[]>;
  /**
   * Retrieve a single page of MessagingConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessagingConfigurationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MessagingConfigurationPage) => any
  ): Promise<MessagingConfigurationPage>;
  page(
    params: MessagingConfigurationListInstancePageOptions,
    callback?: (error: Error | null, items: MessagingConfigurationPage) => any
  ): Promise<MessagingConfigurationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function MessagingConfigurationListInstance(
  version: V2,
  serviceSid: string
): MessagingConfigurationListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((country) =>
    instance.get(country)) as MessagingConfigurationListInstance;

  instance.get = function get(country): MessagingConfigurationContext {
    return new MessagingConfigurationContextImpl(version, serviceSid, country);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/MessagingConfigurations`;

  instance.create = function create(
    params: MessagingConfigurationListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: MessagingConfigurationInstance
    ) => any
  ): Promise<MessagingConfigurationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["country"] === null || params["country"] === undefined) {
      throw new Error("Required parameter \"params['country']\" missing.");
    }

    if (
      params["messagingServiceSid"] === null ||
      params["messagingServiceSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['messagingServiceSid']\" missing."
      );
    }

    let data: any = {};

    data["Country"] = params["country"];

    data["MessagingServiceSid"] = params["messagingServiceSid"];

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
        new MessagingConfigurationInstance(
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
      | MessagingConfigurationListInstancePageOptions
      | ((error: Error | null, items: MessagingConfigurationPage) => any),
    callback?: (error: Error | null, items: MessagingConfigurationPage) => any
  ): Promise<MessagingConfigurationPage> {
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
        new MessagingConfigurationPage(
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
    callback?: (error: Error | null, items: MessagingConfigurationPage) => any
  ): Promise<MessagingConfigurationPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new MessagingConfigurationPage(
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

export class MessagingConfigurationPage extends Page<
  V2,
  MessagingConfigurationPayload,
  MessagingConfigurationResource,
  MessagingConfigurationInstance
> {
  /**
   * Initialize the MessagingConfigurationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: MessagingConfigurationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MessagingConfigurationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: MessagingConfigurationResource
  ): MessagingConfigurationInstance {
    return new MessagingConfigurationInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
