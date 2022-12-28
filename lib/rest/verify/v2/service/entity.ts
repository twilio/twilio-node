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
import { ChallengeListInstance } from "./entity/challenge";
import { FactorListInstance } from "./entity/factor";
import { NewFactorListInstance } from "./entity/newFactor";

/**
 * Options to pass to create a EntityInstance
 *
 * @property { string } identity The unique external identifier for the Entity of the Service. This identifier should be immutable, not PII, length between 8 and 64 characters, and generated by your external system, such as your user\\\'s UUID, GUID, or SID. It can only contain dash (-) separated alphanumeric characters.
 */
export interface EntityListInstanceCreateOptions {
  identity: string;
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
export interface EntityListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: EntityInstance, done: (err?: Error) => void) => void;
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
export interface EntityListInstanceOptions {
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
export interface EntityListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface EntityContext {
  challenges: ChallengeListInstance;
  factors: FactorListInstance;
  newFactors: NewFactorListInstance;

  /**
   * Remove a EntityInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a EntityInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EntityInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EntityInstance) => any
  ): Promise<EntityInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EntityContextSolution {
  serviceSid?: string;
  identity?: string;
}

export class EntityContextImpl implements EntityContext {
  protected _solution: EntityContextSolution;
  protected _uri: string;

  protected _challenges?: ChallengeListInstance;
  protected _factors?: FactorListInstance;
  protected _newFactors?: NewFactorListInstance;

  constructor(protected _version: V2, serviceSid: string, identity: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(identity)) {
      throw new Error("Parameter 'identity' is not valid.");
    }

    this._solution = { serviceSid, identity };
    this._uri = `/Services/${serviceSid}/Entities/${identity}`;
  }

  get challenges(): ChallengeListInstance {
    this._challenges =
      this._challenges ||
      ChallengeListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.identity
      );
    return this._challenges;
  }

  get factors(): FactorListInstance {
    this._factors =
      this._factors ||
      FactorListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.identity
      );
    return this._factors;
  }

  get newFactors(): NewFactorListInstance {
    this._newFactors =
      this._newFactors ||
      NewFactorListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.identity
      );
    return this._newFactors;
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

  fetch(callback?: any): Promise<EntityInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new EntityInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.identity
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

interface EntityPayload extends TwilioResponsePayload {
  entities: EntityResource[];
}

interface EntityResource {
  sid?: string | null;
  identity?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class EntityInstance {
  protected _solution: EntityContextSolution;
  protected _context?: EntityContext;

  constructor(
    protected _version: V2,
    payload: EntityResource,
    serviceSid: string,
    identity?: string
  ) {
    this.sid = payload.sid;
    this.identity = payload.identity;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, identity: identity || this.identity };
  }

  /**
   * A string that uniquely identifies this Entity.
   */
  sid?: string | null;
  /**
   * Unique external identifier of the Entity
   */
  identity?: string | null;
  /**
   * Account Sid.
   */
  accountSid?: string | null;
  /**
   * Service Sid.
   */
  serviceSid?: string | null;
  /**
   * The date this Entity was created
   */
  dateCreated?: Date | null;
  /**
   * The date this Entity was updated
   */
  dateUpdated?: Date | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;
  /**
   * Nested resource URLs.
   */
  links?: object | null;

  private get _proxy(): EntityContext {
    this._context =
      this._context ||
      new EntityContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.identity
      );
    return this._context;
  }

  /**
   * Remove a EntityInstance
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
   * Fetch a EntityInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EntityInstance
   */
  fetch(
    callback?: (error: Error | null, item?: EntityInstance) => any
  ): Promise<EntityInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the challenges.
   */
  challenges(): ChallengeListInstance {
    return this._proxy.challenges;
  }

  /**
   * Access the factors.
   */
  factors(): FactorListInstance {
    return this._proxy.factors;
  }

  /**
   * Access the newFactors.
   */
  newFactors(): NewFactorListInstance {
    return this._proxy.newFactors;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      identity: this.identity,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
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

export interface EntityListInstance {
  (identity: string): EntityContext;
  get(identity: string): EntityContext;

  /**
   * Create a EntityInstance
   *
   * @param { EntityListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EntityInstance
   */
  create(
    params: EntityListInstanceCreateOptions,
    callback?: (error: Error | null, item?: EntityInstance) => any
  ): Promise<EntityInstance>;

  /**
   * Streams EntityInstance records from the API.
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
   * @param { EntityListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | EntityListInstanceEachOptions
      | ((item: EntityInstance, done: (err?: Error) => void) => void),
    callback?: (item: EntityInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of EntityInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: EntityPage) => any
  ): Promise<EntityPage>;
  /**
   * Lists EntityInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EntityListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | EntityListInstanceOptions
      | ((error: Error | null, items: EntityInstance[]) => any),
    callback?: (error: Error | null, items: EntityInstance[]) => any
  ): Promise<EntityInstance[]>;
  /**
   * Retrieve a single page of EntityInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EntityListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | EntityListInstancePageOptions
      | ((error: Error | null, items: EntityPage) => any),
    callback?: (error: Error | null, items: EntityPage) => any
  ): Promise<EntityPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EntitySolution {
  serviceSid?: string;
}

interface EntityListInstanceImpl extends EntityListInstance {}
class EntityListInstanceImpl implements EntityListInstance {
  _version?: V2;
  _solution?: EntitySolution;
  _uri?: string;
}

export function EntityListInstance(
  version: V2,
  serviceSid: string
): EntityListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((identity) =>
    instance.get(identity)) as EntityListInstanceImpl;

  instance.get = function get(identity): EntityContext {
    return new EntityContextImpl(version, serviceSid, identity);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Entities`;

  instance.create = function create(
    params: EntityListInstanceCreateOptions,
    callback?: (error: Error | null, item?: EntityInstance) => any
  ): Promise<EntityInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error("Required parameter \"params['identity']\" missing.");
    }

    let data: any = {};

    data["Identity"] = params["identity"];

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
        new EntityInstance(operationVersion, payload, this._solution.serviceSid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | EntityListInstancePageOptions
      | ((error: Error | null, item?: EntityPage) => any),
    callback?: (error: Error | null, item?: EntityPage) => any
  ): Promise<EntityPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
      (payload) => new EntityPage(operationVersion, payload, this._solution)
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
    callback?: (error: Error | null, items: EntityPage) => any
  ): Promise<EntityPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new EntityPage(this._version, payload, this._solution)
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

export class EntityPage extends Page<
  V2,
  EntityPayload,
  EntityResource,
  EntityInstance
> {
  /**
   * Initialize the EntityPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: EntitySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EntityInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EntityResource): EntityInstance {
    return new EntityInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
