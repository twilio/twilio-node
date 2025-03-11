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
 * Options to pass to update a AssessmentsInstance
 */
export interface AssessmentsContextUpdateOptions {
  /** The offset of the conversation */
  offset: number;
  /** The answer text selected by user */
  answerText: string;
  /** The id of the answer selected by user */
  answerId: string;
  /** The Authorization HTTP request header */
  authorization?: string;
}

/**
 * Options to pass to create a AssessmentsInstance
 */
export interface AssessmentsListInstanceCreateOptions {
  /** The SID of the category  */
  categorySid: string;
  /** The name of the category */
  categoryName: string;
  /** Segment Id of the conversation */
  segmentId: string;
  /** The id of the Agent */
  agentId: string;
  /** The offset of the conversation. */
  offset: number;
  /** The question SID selected for assessment */
  metricId: string;
  /** The question name of the assessment */
  metricName: string;
  /** The answer text selected by user */
  answerText: string;
  /** The id of the answer selected by user */
  answerId: string;
  /** Questionnaire SID of the associated question */
  questionnaireSid: string;
  /** The Authorization HTTP request header */
  authorization?: string;
}
/**
 * Options to pass to each
 */
export interface AssessmentsListInstanceEachOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** The id of the segment. */
  segmentId?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AssessmentsInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AssessmentsListInstanceOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** The id of the segment. */
  segmentId?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AssessmentsListInstancePageOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
  /** The id of the segment. */
  segmentId?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AssessmentsContext {
  /**
   * Update a AssessmentsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssessmentsInstance
   */
  update(
    params: AssessmentsContextUpdateOptions,
    callback?: (error: Error | null, item?: AssessmentsInstance) => any
  ): Promise<AssessmentsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssessmentsContextSolution {
  assessmentSid: string;
}

export class AssessmentsContextImpl implements AssessmentsContext {
  protected _solution: AssessmentsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, assessmentSid: string) {
    if (!isValidPathParam(assessmentSid)) {
      throw new Error("Parameter 'assessmentSid' is not valid.");
    }

    this._solution = { assessmentSid };
    this._uri = `/Insights/QualityManagement/Assessments/${assessmentSid}`;
  }

  update(
    params: AssessmentsContextUpdateOptions,
    callback?: (error: Error | null, item?: AssessmentsInstance) => any
  ): Promise<AssessmentsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["offset"] === null || params["offset"] === undefined) {
      throw new Error("Required parameter \"params['offset']\" missing.");
    }

    if (params["answerText"] === null || params["answerText"] === undefined) {
      throw new Error("Required parameter \"params['answerText']\" missing.");
    }

    if (params["answerId"] === null || params["answerId"] === undefined) {
      throw new Error("Required parameter \"params['answerId']\" missing.");
    }

    let data: any = {};

    data["Offset"] = params["offset"];

    data["AnswerText"] = params["answerText"];

    data["AnswerId"] = params["answerId"];

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
        new AssessmentsInstance(
          operationVersion,
          payload,
          instance._solution.assessmentSid
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

interface AssessmentsPayload extends TwilioResponsePayload {
  assessments: AssessmentsResource[];
}

interface AssessmentsResource {
  account_sid: string;
  assessment_sid: string;
  offset: number;
  report: boolean;
  weight: number;
  agent_id: string;
  segment_id: string;
  user_name: string;
  user_email: string;
  answer_text: string;
  answer_id: string;
  assessment: Record<string, object>;
  timestamp: number;
  url: string;
}

export class AssessmentsInstance {
  protected _solution: AssessmentsContextSolution;
  protected _context?: AssessmentsContext;

  constructor(
    protected _version: V1,
    payload: AssessmentsResource,
    assessmentSid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.assessmentSid = payload.assessment_sid;
    this.offset = payload.offset;
    this.report = payload.report;
    this.weight = payload.weight;
    this.agentId = payload.agent_id;
    this.segmentId = payload.segment_id;
    this.userName = payload.user_name;
    this.userEmail = payload.user_email;
    this.answerText = payload.answer_text;
    this.answerId = payload.answer_id;
    this.assessment = payload.assessment;
    this.timestamp = payload.timestamp;
    this.url = payload.url;

    this._solution = { assessmentSid: assessmentSid || this.assessmentSid };
  }

  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The SID of the assessment
   */
  assessmentSid: string;
  /**
   * Offset of the conversation
   */
  offset: number;
  /**
   * The flag indicating if this assessment is part of report
   */
  report: boolean;
  /**
   * The weightage given to this comment
   */
  weight: number;
  /**
   * The id of the Agent
   */
  agentId: string;
  /**
   * Segment Id of conversation
   */
  segmentId: string;
  /**
   * The name of the user.
   */
  userName: string;
  /**
   * The email id of the user.
   */
  userEmail: string;
  /**
   * The answer text selected by user
   */
  answerText: string;
  /**
   * The id of the answer selected by user
   */
  answerId: string;
  /**
   * Assessment Details associated with an assessment
   */
  assessment: Record<string, object>;
  timestamp: number;
  url: string;

  private get _proxy(): AssessmentsContext {
    this._context =
      this._context ||
      new AssessmentsContextImpl(this._version, this._solution.assessmentSid);
    return this._context;
  }

  /**
   * Update a AssessmentsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssessmentsInstance
   */
  update(
    params: AssessmentsContextUpdateOptions,
    callback?: (error: Error | null, item?: AssessmentsInstance) => any
  ): Promise<AssessmentsInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: AssessmentsInstance) => any
  ): Promise<AssessmentsInstance> {
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
      assessmentSid: this.assessmentSid,
      offset: this.offset,
      report: this.report,
      weight: this.weight,
      agentId: this.agentId,
      segmentId: this.segmentId,
      userName: this.userName,
      userEmail: this.userEmail,
      answerText: this.answerText,
      answerId: this.answerId,
      assessment: this.assessment,
      timestamp: this.timestamp,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AssessmentsSolution {}

export interface AssessmentsListInstance {
  _version: V1;
  _solution: AssessmentsSolution;
  _uri: string;

  (assessmentSid: string): AssessmentsContext;
  get(assessmentSid: string): AssessmentsContext;

  /**
   * Create a AssessmentsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssessmentsInstance
   */
  create(
    params: AssessmentsListInstanceCreateOptions,
    callback?: (error: Error | null, item?: AssessmentsInstance) => any
  ): Promise<AssessmentsInstance>;

  /**
   * Streams AssessmentsInstance records from the API.
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
   * @param { AssessmentsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: AssessmentsInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: AssessmentsListInstanceEachOptions,
    callback?: (item: AssessmentsInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of AssessmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AssessmentsPage) => any
  ): Promise<AssessmentsPage>;
  /**
   * Lists AssessmentsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssessmentsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AssessmentsInstance[]) => any
  ): Promise<AssessmentsInstance[]>;
  list(
    params: AssessmentsListInstanceOptions,
    callback?: (error: Error | null, items: AssessmentsInstance[]) => any
  ): Promise<AssessmentsInstance[]>;
  /**
   * Retrieve a single page of AssessmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssessmentsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AssessmentsPage) => any
  ): Promise<AssessmentsPage>;
  page(
    params: AssessmentsListInstancePageOptions,
    callback?: (error: Error | null, items: AssessmentsPage) => any
  ): Promise<AssessmentsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AssessmentsListInstance(version: V1): AssessmentsListInstance {
  const instance = ((assessmentSid) =>
    instance.get(assessmentSid)) as AssessmentsListInstance;

  instance.get = function get(assessmentSid): AssessmentsContext {
    return new AssessmentsContextImpl(version, assessmentSid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Insights/QualityManagement/Assessments`;

  instance.create = function create(
    params: AssessmentsListInstanceCreateOptions,
    callback?: (error: Error | null, items: AssessmentsInstance) => any
  ): Promise<AssessmentsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["categorySid"] === null || params["categorySid"] === undefined) {
      throw new Error("Required parameter \"params['categorySid']\" missing.");
    }

    if (
      params["categoryName"] === null ||
      params["categoryName"] === undefined
    ) {
      throw new Error("Required parameter \"params['categoryName']\" missing.");
    }

    if (params["segmentId"] === null || params["segmentId"] === undefined) {
      throw new Error("Required parameter \"params['segmentId']\" missing.");
    }

    if (params["agentId"] === null || params["agentId"] === undefined) {
      throw new Error("Required parameter \"params['agentId']\" missing.");
    }

    if (params["offset"] === null || params["offset"] === undefined) {
      throw new Error("Required parameter \"params['offset']\" missing.");
    }

    if (params["metricId"] === null || params["metricId"] === undefined) {
      throw new Error("Required parameter \"params['metricId']\" missing.");
    }

    if (params["metricName"] === null || params["metricName"] === undefined) {
      throw new Error("Required parameter \"params['metricName']\" missing.");
    }

    if (params["answerText"] === null || params["answerText"] === undefined) {
      throw new Error("Required parameter \"params['answerText']\" missing.");
    }

    if (params["answerId"] === null || params["answerId"] === undefined) {
      throw new Error("Required parameter \"params['answerId']\" missing.");
    }

    if (
      params["questionnaireSid"] === null ||
      params["questionnaireSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['questionnaireSid']\" missing."
      );
    }

    let data: any = {};

    data["CategorySid"] = params["categorySid"];

    data["CategoryName"] = params["categoryName"];

    data["SegmentId"] = params["segmentId"];

    data["AgentId"] = params["agentId"];

    data["Offset"] = params["offset"];

    data["MetricId"] = params["metricId"];

    data["MetricName"] = params["metricName"];

    data["AnswerText"] = params["answerText"];

    data["AnswerId"] = params["answerId"];

    data["QuestionnaireSid"] = params["questionnaireSid"];

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
      (payload) => new AssessmentsInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | AssessmentsListInstancePageOptions
      | ((error: Error | null, items: AssessmentsPage) => any),
    callback?: (error: Error | null, items: AssessmentsPage) => any
  ): Promise<AssessmentsPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["segmentId"] !== undefined)
      data["SegmentId"] = params["segmentId"];
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
        new AssessmentsPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: AssessmentsPage) => any
  ): Promise<AssessmentsPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AssessmentsPage(instance._version, payload, instance._solution)
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

export class AssessmentsPage extends Page<
  V1,
  AssessmentsPayload,
  AssessmentsResource,
  AssessmentsInstance
> {
  /**
   * Initialize the AssessmentsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AssessmentsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AssessmentsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssessmentsResource): AssessmentsInstance {
    return new AssessmentsInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
