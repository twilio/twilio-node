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
 * Options to pass to remove a InsightsQuestionnairesQuestionInstance
 */
export interface InsightsQuestionnairesQuestionContextRemoveOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
}

/**
 * Options to pass to update a InsightsQuestionnairesQuestionInstance
 */
export interface InsightsQuestionnairesQuestionContextUpdateOptions {
  /** The flag to enable for disable NA for answer. */
  allowNa: boolean;
  /** The Authorization HTTP request header */
  authorization?: string;
  /** The SID of the category */
  categorySid?: string;
  /** The question. */
  question?: string;
  /** The description for the question. */
  description?: string;
  /** The answer_set for the question. */
  answerSetId?: string;
}

/**
 * Options to pass to create a InsightsQuestionnairesQuestionInstance
 */
export interface InsightsQuestionnairesQuestionListInstanceCreateOptions {
  /** The SID of the category */
  categorySid: string;
  /** The question. */
  question: string;
  /** The answer_set for the question. */
  answerSetId: string;
  /** The flag to enable for disable NA for answer. */
  allowNa: boolean;
  /** The Authorization HTTP request header */
  authorization?: string;
  /** The description for the question. */
  description?: string;
}
/**
 * Options to pass to each
 */
export interface InsightsQuestionnairesQuestionListInstanceEachOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** The list of category SIDs */
  categorySid?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: InsightsQuestionnairesQuestionInstance,
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
export interface InsightsQuestionnairesQuestionListInstanceOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** The list of category SIDs */
  categorySid?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface InsightsQuestionnairesQuestionListInstancePageOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** The list of category SIDs */
  categorySid?: Array<string>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InsightsQuestionnairesQuestionContext {
  /**
   * Remove a InsightsQuestionnairesQuestionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a InsightsQuestionnairesQuestionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesQuestionInstance
   */
  remove(
    params: InsightsQuestionnairesQuestionContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Update a InsightsQuestionnairesQuestionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesQuestionInstance
   */
  update(
    params: InsightsQuestionnairesQuestionContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesQuestionInstance
    ) => any
  ): Promise<InsightsQuestionnairesQuestionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InsightsQuestionnairesQuestionContextSolution {
  questionSid: string;
}

export class InsightsQuestionnairesQuestionContextImpl
  implements InsightsQuestionnairesQuestionContext
{
  protected _solution: InsightsQuestionnairesQuestionContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, questionSid: string) {
    if (!isValidPathParam(questionSid)) {
      throw new Error("Parameter 'questionSid' is not valid.");
    }

    this._solution = { questionSid };
    this._uri = `/Insights/QualityManagement/Questions/${questionSid}`;
  }

  remove(
    params?:
      | InsightsQuestionnairesQuestionContextRemoveOptions
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

  update(
    params: InsightsQuestionnairesQuestionContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesQuestionInstance
    ) => any
  ): Promise<InsightsQuestionnairesQuestionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["allowNa"] === null || params["allowNa"] === undefined) {
      throw new Error("Required parameter \"params['allowNa']\" missing.");
    }

    let data: any = {};

    data["AllowNa"] = serialize.bool(params["allowNa"]);
    if (params["categorySid"] !== undefined)
      data["CategorySid"] = params["categorySid"];
    if (params["question"] !== undefined) data["Question"] = params["question"];
    if (params["description"] !== undefined)
      data["Description"] = params["description"];
    if (params["answerSetId"] !== undefined)
      data["AnswerSetId"] = params["answerSetId"];

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

    operationPromise = operationPromise.then(
      (payload) =>
        new InsightsQuestionnairesQuestionInstance(
          operationVersion,
          payload,
          instance._solution.questionSid
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

interface InsightsQuestionnairesQuestionPayload extends TwilioResponsePayload {
  questions: InsightsQuestionnairesQuestionResource[];
}

interface InsightsQuestionnairesQuestionResource {
  account_sid: string;
  question_sid: string;
  question: string;
  description: string;
  category: Record<string, object>;
  answer_set_id: string;
  allow_na: boolean;
  usage: number;
  answer_set: Record<string, object>;
  url: string;
}

export class InsightsQuestionnairesQuestionInstance {
  protected _solution: InsightsQuestionnairesQuestionContextSolution;
  protected _context?: InsightsQuestionnairesQuestionContext;

  constructor(
    protected _version: V1,
    payload: InsightsQuestionnairesQuestionResource,
    questionSid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.questionSid = payload.question_sid;
    this.question = payload.question;
    this.description = payload.description;
    this.category = payload.category;
    this.answerSetId = payload.answer_set_id;
    this.allowNa = payload.allow_na;
    this.usage = deserialize.integer(payload.usage);
    this.answerSet = payload.answer_set;
    this.url = payload.url;

    this._solution = { questionSid: questionSid || this.questionSid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
   */
  accountSid: string;
  /**
   * The SID of the question
   */
  questionSid: string;
  /**
   * The question.
   */
  question: string;
  /**
   * The description for the question.
   */
  description: string;
  /**
   * The Category for the question.
   */
  category: Record<string, object>;
  /**
   * The answer_set for the question.
   */
  answerSetId: string;
  /**
   * The flag  to enable for disable NA for answer.
   */
  allowNa: boolean;
  /**
   * Integer value that tells a particular question is used by how many questionnaires
   */
  usage: number;
  /**
   * Set of answers for the question
   */
  answerSet: Record<string, object>;
  url: string;

  private get _proxy(): InsightsQuestionnairesQuestionContext {
    this._context =
      this._context ||
      new InsightsQuestionnairesQuestionContextImpl(
        this._version,
        this._solution.questionSid
      );
    return this._context;
  }

  /**
   * Remove a InsightsQuestionnairesQuestionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a InsightsQuestionnairesQuestionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesQuestionInstance
   */
  remove(
    params: InsightsQuestionnairesQuestionContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  remove(
    params?: any,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Update a InsightsQuestionnairesQuestionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesQuestionInstance
   */
  update(
    params: InsightsQuestionnairesQuestionContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesQuestionInstance
    ) => any
  ): Promise<InsightsQuestionnairesQuestionInstance>;

  update(
    params?: any,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesQuestionInstance
    ) => any
  ): Promise<InsightsQuestionnairesQuestionInstance> {
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
      questionSid: this.questionSid,
      question: this.question,
      description: this.description,
      category: this.category,
      answerSetId: this.answerSetId,
      allowNa: this.allowNa,
      usage: this.usage,
      answerSet: this.answerSet,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InsightsQuestionnairesQuestionSolution {}

export interface InsightsQuestionnairesQuestionListInstance {
  _version: V1;
  _solution: InsightsQuestionnairesQuestionSolution;
  _uri: string;

  (questionSid: string): InsightsQuestionnairesQuestionContext;
  get(questionSid: string): InsightsQuestionnairesQuestionContext;

  /**
   * Create a InsightsQuestionnairesQuestionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsQuestionnairesQuestionInstance
   */
  create(
    params: InsightsQuestionnairesQuestionListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsQuestionnairesQuestionInstance
    ) => any
  ): Promise<InsightsQuestionnairesQuestionInstance>;

  /**
   * Streams InsightsQuestionnairesQuestionInstance records from the API.
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
   * @param { InsightsQuestionnairesQuestionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: InsightsQuestionnairesQuestionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: InsightsQuestionnairesQuestionListInstanceEachOptions,
    callback?: (
      item: InsightsQuestionnairesQuestionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of InsightsQuestionnairesQuestionInstance records from the API.
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
      items: InsightsQuestionnairesQuestionPage
    ) => any
  ): Promise<InsightsQuestionnairesQuestionPage>;
  /**
   * Lists InsightsQuestionnairesQuestionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsQuestionnairesQuestionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesQuestionInstance[]
    ) => any
  ): Promise<InsightsQuestionnairesQuestionInstance[]>;
  list(
    params: InsightsQuestionnairesQuestionListInstanceOptions,
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesQuestionInstance[]
    ) => any
  ): Promise<InsightsQuestionnairesQuestionInstance[]>;
  /**
   * Retrieve a single page of InsightsQuestionnairesQuestionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsQuestionnairesQuestionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesQuestionPage
    ) => any
  ): Promise<InsightsQuestionnairesQuestionPage>;
  page(
    params: InsightsQuestionnairesQuestionListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesQuestionPage
    ) => any
  ): Promise<InsightsQuestionnairesQuestionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InsightsQuestionnairesQuestionListInstance(
  version: V1
): InsightsQuestionnairesQuestionListInstance {
  const instance = ((questionSid) =>
    instance.get(questionSid)) as InsightsQuestionnairesQuestionListInstance;

  instance.get = function get(
    questionSid
  ): InsightsQuestionnairesQuestionContext {
    return new InsightsQuestionnairesQuestionContextImpl(version, questionSid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Insights/QualityManagement/Questions`;

  instance.create = function create(
    params: InsightsQuestionnairesQuestionListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesQuestionInstance
    ) => any
  ): Promise<InsightsQuestionnairesQuestionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["categorySid"] === null || params["categorySid"] === undefined) {
      throw new Error("Required parameter \"params['categorySid']\" missing.");
    }

    if (params["question"] === null || params["question"] === undefined) {
      throw new Error("Required parameter \"params['question']\" missing.");
    }

    if (params["answerSetId"] === null || params["answerSetId"] === undefined) {
      throw new Error("Required parameter \"params['answerSetId']\" missing.");
    }

    if (params["allowNa"] === null || params["allowNa"] === undefined) {
      throw new Error("Required parameter \"params['allowNa']\" missing.");
    }

    let data: any = {};

    data["CategorySid"] = params["categorySid"];

    data["Question"] = params["question"];

    data["AnswerSetId"] = params["answerSetId"];

    data["AllowNa"] = serialize.bool(params["allowNa"]);
    if (params["description"] !== undefined)
      data["Description"] = params["description"];

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
      (payload) =>
        new InsightsQuestionnairesQuestionInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | InsightsQuestionnairesQuestionListInstancePageOptions
      | ((
          error: Error | null,
          items: InsightsQuestionnairesQuestionPage
        ) => any),
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesQuestionPage
    ) => any
  ): Promise<InsightsQuestionnairesQuestionPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["categorySid"] !== undefined)
      data["CategorySid"] = serialize.map(
        params["categorySid"],
        (e: string) => e
      );
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
        new InsightsQuestionnairesQuestionPage(
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
    callback?: (
      error: Error | null,
      items: InsightsQuestionnairesQuestionPage
    ) => any
  ): Promise<InsightsQuestionnairesQuestionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InsightsQuestionnairesQuestionPage(
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

export class InsightsQuestionnairesQuestionPage extends Page<
  V1,
  InsightsQuestionnairesQuestionPayload,
  InsightsQuestionnairesQuestionResource,
  InsightsQuestionnairesQuestionInstance
> {
  /**
   * Initialize the InsightsQuestionnairesQuestionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: InsightsQuestionnairesQuestionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InsightsQuestionnairesQuestionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: InsightsQuestionnairesQuestionResource
  ): InsightsQuestionnairesQuestionInstance {
    return new InsightsQuestionnairesQuestionInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
