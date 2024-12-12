/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Assistants
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
 * Options to pass to each
 */
export interface AssistantsKnowledgeListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: AssistantsKnowledgeInstance,
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
export interface AssistantsKnowledgeListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AssistantsKnowledgeListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AssistantsKnowledgeContext {
  /**
   * Create a AssistantsKnowledgeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantsKnowledgeInstance
   */
  create(
    callback?: (error: Error | null, item?: AssistantsKnowledgeInstance) => any
  ): Promise<AssistantsKnowledgeInstance>;

  /**
   * Remove a AssistantsKnowledgeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantsKnowledgeContextSolution {
  assistantId: string;
  id: string;
}

export class AssistantsKnowledgeContextImpl
  implements AssistantsKnowledgeContext
{
  protected _solution: AssistantsKnowledgeContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, assistantId: string, id: string) {
    if (!isValidPathParam(assistantId)) {
      throw new Error("Parameter 'assistantId' is not valid.");
    }

    if (!isValidPathParam(id)) {
      throw new Error("Parameter 'id' is not valid.");
    }

    this._solution = { assistantId, id };
    this._uri = `/Assistants/${assistantId}/Knowledge/${id}`;
  }

  create(
    callback?: (error: Error | null, item?: AssistantsKnowledgeInstance) => any
  ): Promise<AssistantsKnowledgeInstance> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssistantsKnowledgeInstance(
          operationVersion,
          payload,
          instance._solution.assistantId,
          instance._solution.id
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface AssistantsKnowledgePayload extends TwilioResponsePayload {
  knowledge: AssistantsKnowledgeResource[];
}

interface AssistantsKnowledgeResource {
  description: string;
  id: string;
  account_sid: string;
  knowledge_source_details: Record<string, object>;
  name: string;
  status: string;
  type: string;
  url: string;
  date_created: Date;
  date_updated: Date;
}

export class AssistantsKnowledgeInstance {
  protected _solution: AssistantsKnowledgeContextSolution;
  protected _context?: AssistantsKnowledgeContext;

  constructor(
    protected _version: V1,
    payload: AssistantsKnowledgeResource,
    assistantId: string,
    id?: string
  ) {
    this.description = payload.description;
    this.id = payload.id;
    this.accountSid = payload.account_sid;
    this.knowledgeSourceDetails = payload.knowledge_source_details;
    this.name = payload.name;
    this.status = payload.status;
    this.type = payload.type;
    this.url = payload.url;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { assistantId, id: id || this.id };
  }

  /**
   * The type of knowledge source.
   */
  description: string;
  /**
   * The description of knowledge.
   */
  id: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Knowledge resource.
   */
  accountSid: string;
  /**
   * The details of the knowledge source based on the type.
   */
  knowledgeSourceDetails: Record<string, object>;
  /**
   * The name of the knowledge source.
   */
  name: string;
  /**
   * The status of processing the knowledge source (\'QUEUED\', \'PROCESSING\', \'COMPLETED\', \'FAILED\')
   */
  status: string;
  /**
   * The type of knowledge source (\'Web\', \'Database\', \'Text\', \'File\')
   */
  type: string;
  /**
   * The url of the knowledge resource.
   */
  url: string;
  /**
   * The date and time in GMT when the Knowledge was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the Knowledge was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  private get _proxy(): AssistantsKnowledgeContext {
    this._context =
      this._context ||
      new AssistantsKnowledgeContextImpl(
        this._version,
        this._solution.assistantId,
        this._solution.id
      );
    return this._context;
  }

  /**
   * Create a AssistantsKnowledgeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantsKnowledgeInstance
   */
  create(
    callback?: (error: Error | null, item?: AssistantsKnowledgeInstance) => any
  ): Promise<AssistantsKnowledgeInstance> {
    return this._proxy.create(callback);
  }

  /**
   * Remove a AssistantsKnowledgeInstance
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
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      description: this.description,
      id: this.id,
      accountSid: this.accountSid,
      knowledgeSourceDetails: this.knowledgeSourceDetails,
      name: this.name,
      status: this.status,
      type: this.type,
      url: this.url,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AssistantsKnowledgeSolution {
  assistantId: string;
}

export interface AssistantsKnowledgeListInstance {
  _version: V1;
  _solution: AssistantsKnowledgeSolution;
  _uri: string;

  (id: string): AssistantsKnowledgeContext;
  get(id: string): AssistantsKnowledgeContext;

  /**
   * Streams AssistantsKnowledgeInstance records from the API.
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
   * @param { AssistantsKnowledgeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: AssistantsKnowledgeInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: AssistantsKnowledgeListInstanceEachOptions,
    callback?: (
      item: AssistantsKnowledgeInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of AssistantsKnowledgeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AssistantsKnowledgePage) => any
  ): Promise<AssistantsKnowledgePage>;
  /**
   * Lists AssistantsKnowledgeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantsKnowledgeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AssistantsKnowledgeInstance[]
    ) => any
  ): Promise<AssistantsKnowledgeInstance[]>;
  list(
    params: AssistantsKnowledgeListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AssistantsKnowledgeInstance[]
    ) => any
  ): Promise<AssistantsKnowledgeInstance[]>;
  /**
   * Retrieve a single page of AssistantsKnowledgeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantsKnowledgeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AssistantsKnowledgePage) => any
  ): Promise<AssistantsKnowledgePage>;
  page(
    params: AssistantsKnowledgeListInstancePageOptions,
    callback?: (error: Error | null, items: AssistantsKnowledgePage) => any
  ): Promise<AssistantsKnowledgePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AssistantsKnowledgeListInstance(
  version: V1,
  assistantId: string
): AssistantsKnowledgeListInstance {
  if (!isValidPathParam(assistantId)) {
    throw new Error("Parameter 'assistantId' is not valid.");
  }

  const instance = ((id) =>
    instance.get(id)) as AssistantsKnowledgeListInstance;

  instance.get = function get(id): AssistantsKnowledgeContext {
    return new AssistantsKnowledgeContextImpl(version, assistantId, id);
  };

  instance._version = version;
  instance._solution = { assistantId };
  instance._uri = `/Assistants/${assistantId}/Knowledge`;

  instance.page = function page(
    params?:
      | AssistantsKnowledgeListInstancePageOptions
      | ((error: Error | null, items: AssistantsKnowledgePage) => any),
    callback?: (error: Error | null, items: AssistantsKnowledgePage) => any
  ): Promise<AssistantsKnowledgePage> {
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
        new AssistantsKnowledgePage(
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
    callback?: (error: Error | null, items: AssistantsKnowledgePage) => any
  ): Promise<AssistantsKnowledgePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AssistantsKnowledgePage(
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

export class AssistantsKnowledgePage extends Page<
  V1,
  AssistantsKnowledgePayload,
  AssistantsKnowledgeResource,
  AssistantsKnowledgeInstance
> {
  /**
   * Initialize the AssistantsKnowledgePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AssistantsKnowledgeSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AssistantsKnowledgeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: AssistantsKnowledgeResource
  ): AssistantsKnowledgeInstance {
    return new AssistantsKnowledgeInstance(
      this._version,
      payload,
      this._solution.assistantId
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
