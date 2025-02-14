/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
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

/**
 * Options to pass to remove a InsightsQuestionnairesInstance
 */
export interface InsightsQuestionnairesContextRemoveOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
}

/**
 * Options to pass to fetch a InsightsQuestionnairesInstance
 */
export interface InsightsQuestionnairesContextFetchOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
}

/**
 * Options to pass to update a InsightsQuestionnairesInstance
 */
export interface InsightsQuestionnairesContextUpdateOptions {
  /** The flag to enable or disable questionnaire */
  active: boolean;
  /** The Authorization HTTP request header */
  authorization?: string;
  /** The name of this questionnaire */
  name?: string;
  /** The description of this questionnaire */
  description?: string;
  /** The list of questions sids under a questionnaire */
  questionSids?: Array<string>;
}

/**
 * Options to pass to create a InsightsQuestionnairesInstance
 */
export interface InsightsQuestionnairesListInstanceCreateOptions {
  /** The name of this questionnaire */
  name: string;
  /** The Authorization HTTP request header */
  authorization?: string;
  /** The description of this questionnaire */
  description?: string;
  /** The flag to enable or disable questionnaire */
  active?: boolean;
  /** The list of questions sids under a questionnaire */
  questionSids?: Array<string>;
}
/**
 * Options to pass to each
 */
export interface InsightsQuestionnairesListInstanceEachOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** Flag indicating whether to include inactive questionnaires or not */
  includeInactive?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: InsightsQuestionnairesInstance,
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
export interface InsightsQuestionnairesListInstanceOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** Flag indicating whether to include inactive questionnaires or not */
  includeInactive?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface InsightsQuestionnairesListInstancePageOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** Flag indicating whether to include inactive questionnaires or not */
  includeInactive?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InsightsQuestionnairesContext {
  /**
   * Remove a InsightsQuestionnairesInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a InsightsQuestionnairesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesInstance
   */
  remove(
    params: InsightsQuestionnairesContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a InsightsQuestionnairesInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance>;
  /**
   * Fetch a InsightsQuestionnairesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesInstance
   */
  fetch(
    params: InsightsQuestionnairesContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance>;

  /**
   * Update a InsightsQuestionnairesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesInstance
   */
  update(
    params: InsightsQuestionnairesContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InsightsQuestionnairesContextSolution {
  questionnaireSid: string;
}

export class InsightsQuestionnairesContextImpl
  implements InsightsQuestionnairesContext
{
  protected _solution: InsightsQuestionnairesContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, questionnaireSid: string) {
    if (!isValidPathParam(questionnaireSid)) {
      throw new Error("Parameter 'questionnaireSid' is not valid.");
    }

    this._solution = { questionnaireSid };
    this._uri = `/Insights/QualityManagement/Questionnaires/${questionnaireSid}`;
  }

  remove(
    params?:
      | InsightsQuestionnairesContextRemoveOptions
      | ((error: Error | null, item?: boolean) => any),
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        params: data,
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  async fetch(
    params?:
      | InsightsQuestionnairesContextFetchOptions
      | ((error: Error | null, item?: InsightsQuestionnairesInstance) => any),
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    headers["Accept"] = "application/json";
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new InsightsQuestionnairesInstance(
        operationVersion,
        payload,
        instance._solution.questionnaireSid
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
    params: InsightsQuestionnairesContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["active"] === null || params["active"] === undefined) {
      throw new Error("Required parameter \"params['active']\" missing.");
    }

    let data: any = {};

    data["Active"] = serialize.bool(params["active"]);
    if (params["name"] !== undefined) data["Name"] = params["name"];
    if (params["description"] !== undefined)
      data["Description"] = params["description"];
    if (params["questionSids"] !== undefined)
      data["QuestionSids"] = serialize.map(
        params["questionSids"],
        (e: string) => e
      );

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

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
      let operation = new InsightsQuestionnairesInstance(
        operationVersion,
        payload,
        instance._solution.questionnaireSid
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

interface InsightsQuestionnairesPayload extends TwilioResponsePayload {
  questionnaires: InsightsQuestionnairesResource[];
}

interface InsightsQuestionnairesResource {
  account_sid: string;
  questionnaire_sid: string;
  name: string;
  description: string;
  active: boolean;
  questions: Array<any>;
  url: string;
}

export class InsightsQuestionnairesInstance {
  protected _solution: InsightsQuestionnairesContextSolution;
  protected _context?: InsightsQuestionnairesContext;

  constructor(
    protected _version: V1,
    payload: InsightsQuestionnairesResource,
    questionnaireSid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.questionnaireSid = payload.questionnaire_sid;
    this.name = payload.name;
    this.description = payload.description;
    this.active = payload.active;
    this.questions = payload.questions;
    this.url = payload.url;

    this._solution = {
      questionnaireSid: questionnaireSid || this.questionnaireSid,
    };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
   */
  accountSid: string;
  /**
   * The sid of this questionnaire
   */
  questionnaireSid: string;
  /**
   * The name of this category.
   */
  name: string;
  /**
   * The description of this questionnaire
   */
  description: string;
  /**
   * The flag to enable or disable questionnaire
   */
  active: boolean;
  /**
   * The list of questions with category for a questionnaire
   */
  questions: Array<any>;
  url: string;

  private get _proxy(): InsightsQuestionnairesContext {
    this._context =
      this._context ||
      new InsightsQuestionnairesContextImpl(
        this._version,
        this._solution.questionnaireSid
      );
    return this._context;
  }

  /**
   * Remove a InsightsQuestionnairesInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a InsightsQuestionnairesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesInstance
   */
  remove(
    params: InsightsQuestionnairesContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  remove(
    params?: any,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a InsightsQuestionnairesInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance>;
  /**
   * Fetch a InsightsQuestionnairesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesInstance
   */
  fetch(
    params: InsightsQuestionnairesContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance>;

  fetch(
    params?: any,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Update a InsightsQuestionnairesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesInstance
   */
  update(
    params: InsightsQuestionnairesContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance>;

  update(
    params?: any,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance> {
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
      questionnaireSid: this.questionnaireSid,
      name: this.name,
      description: this.description,
      active: this.active,
      questions: this.questions,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InsightsQuestionnairesSolution {}

export interface InsightsQuestionnairesListInstance {
  _version: V1;
  _solution: InsightsQuestionnairesSolution;
  _uri: string;

  (questionnaireSid: string): InsightsQuestionnairesContext;
  get(questionnaireSid: string): InsightsQuestionnairesContext;

  /**
   * Create a InsightsQuestionnairesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesInstance
   */
  create(
    params: InsightsQuestionnairesListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance>;

  /**
   * Streams InsightsQuestionnairesInstance records from the API.
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
   * @param { InsightsQuestionnairesListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: InsightsQuestionnairesInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: InsightsQuestionnairesListInstanceEachOptions,
    callback?: (
      item: InsightsQuestionnairesInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of InsightsQuestionnairesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: InsightsQuestionnairesPage) => any
  ): Promise<InsightsQuestionnairesPage>;
  /**
   * Lists InsightsQuestionnairesInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsQuestionnairesListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesInstance[]
    ) => any
  ): Promise<InsightsQuestionnairesInstance[]>;
  list(
    params: InsightsQuestionnairesListInstanceOptions,
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesInstance[]
    ) => any
  ): Promise<InsightsQuestionnairesInstance[]>;
  /**
   * Retrieve a single page of InsightsQuestionnairesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsQuestionnairesListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: InsightsQuestionnairesPage) => any
  ): Promise<InsightsQuestionnairesPage>;
  page(
    params: InsightsQuestionnairesListInstancePageOptions,
    callback?: (error: Error | null, items: InsightsQuestionnairesPage) => any
  ): Promise<InsightsQuestionnairesPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InsightsQuestionnairesListInstance(
  version: V1
): InsightsQuestionnairesListInstance {
  const instance = ((questionnaireSid) =>
    instance.get(questionnaireSid)) as InsightsQuestionnairesListInstance;

  instance.get = function get(questionnaireSid): InsightsQuestionnairesContext {
    return new InsightsQuestionnairesContextImpl(version, questionnaireSid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Insights/QualityManagement/Questionnaires`;

  instance.create = function create(
    params: InsightsQuestionnairesListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesInstance
    ) => any
  ): Promise<InsightsQuestionnairesInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["name"] === null || params["name"] === undefined) {
      throw new Error("Required parameter \"params['name']\" missing.");
    }

    let data: any = {};

    data["Name"] = params["name"];
    if (params["description"] !== undefined)
      data["Description"] = params["description"];
    if (params["active"] !== undefined)
      data["Active"] = serialize.bool(params["active"]);
    if (params["questionSids"] !== undefined)
      data["QuestionSids"] = serialize.map(
        params["questionSids"],
        (e: string) => e
      );

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new InsightsQuestionnairesInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | InsightsQuestionnairesListInstancePageOptions
      | ((error: Error | null, items: InsightsQuestionnairesPage) => any),
    callback?: (error: Error | null, items: InsightsQuestionnairesPage) => any
  ): Promise<InsightsQuestionnairesPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["includeInactive"] !== undefined)
      data["IncludeInactive"] = serialize.bool(params["includeInactive"]);
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";
    if (params["authorization"] !== undefined)
      headers["Authorization"] = params["authorization"];

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InsightsQuestionnairesPage(
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
    callback?: (error: Error | null, items: InsightsQuestionnairesPage) => any
  ): Promise<InsightsQuestionnairesPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InsightsQuestionnairesPage(
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

export class InsightsQuestionnairesPage extends Page<
  V1,
  InsightsQuestionnairesPayload,
  InsightsQuestionnairesResource,
  InsightsQuestionnairesInstance
> {
  /**
   * Initialize the InsightsQuestionnairesPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: InsightsQuestionnairesSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InsightsQuestionnairesInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: InsightsQuestionnairesResource
  ): InsightsQuestionnairesInstance {
    return new InsightsQuestionnairesInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
