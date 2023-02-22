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
 * Options to pass to create a InsightsAssessmentsCommentInstance
 */
export interface InsightsAssessmentsCommentListInstanceCreateOptions {
  /** The ID of the category */
  categoryId: string;
  /** The name of the category */
  categoryName: string;
  /** The Assessment comment. */
  comment: string;
  /** The id of the segment. */
  segmentId: string;
  /** The name of the user. */
  userName: string;
  /** The email id of the user. */
  userEmail: string;
  /** The id of the agent. */
  agentId: string;
  /** The offset */
  offset: number;
  /** The Token HTTP request header */
  token?: string;
}
/**
 * Options to pass to each
 */
export interface InsightsAssessmentsCommentListInstanceEachOptions {
  /** The Token HTTP request header */
  token?: string;
  /** The id of the segment. */
  segmentId?: string;
  /** The id of the agent. */
  agentId?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: InsightsAssessmentsCommentInstance,
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
export interface InsightsAssessmentsCommentListInstanceOptions {
  /** The Token HTTP request header */
  token?: string;
  /** The id of the segment. */
  segmentId?: string;
  /** The id of the agent. */
  agentId?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface InsightsAssessmentsCommentListInstancePageOptions {
  /** The Token HTTP request header */
  token?: string;
  /** The id of the segment. */
  segmentId?: string;
  /** The id of the agent. */
  agentId?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InsightsAssessmentsCommentSolution {}

export interface InsightsAssessmentsCommentListInstance {
  _version: V1;
  _solution: InsightsAssessmentsCommentSolution;
  _uri: string;

  /**
   * Create a InsightsAssessmentsCommentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsAssessmentsCommentInstance
   */
  create(
    params: InsightsAssessmentsCommentListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: InsightsAssessmentsCommentInstance
    ) => any
  ): Promise<InsightsAssessmentsCommentInstance>;

  /**
   * Streams InsightsAssessmentsCommentInstance records from the API.
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
   * @param { InsightsAssessmentsCommentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: InsightsAssessmentsCommentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: InsightsAssessmentsCommentListInstanceEachOptions,
    callback?: (
      item: InsightsAssessmentsCommentInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of InsightsAssessmentsCommentInstance records from the API.
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
      items: InsightsAssessmentsCommentPage
    ) => any
  ): Promise<InsightsAssessmentsCommentPage>;
  /**
   * Lists InsightsAssessmentsCommentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsAssessmentsCommentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: InsightsAssessmentsCommentInstance[]
    ) => any
  ): Promise<InsightsAssessmentsCommentInstance[]>;
  list(
    params: InsightsAssessmentsCommentListInstanceOptions,
    callback?: (
      error: Error | null,
      items: InsightsAssessmentsCommentInstance[]
    ) => any
  ): Promise<InsightsAssessmentsCommentInstance[]>;
  /**
   * Retrieve a single page of InsightsAssessmentsCommentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InsightsAssessmentsCommentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: InsightsAssessmentsCommentPage
    ) => any
  ): Promise<InsightsAssessmentsCommentPage>;
  page(
    params: InsightsAssessmentsCommentListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: InsightsAssessmentsCommentPage
    ) => any
  ): Promise<InsightsAssessmentsCommentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InsightsAssessmentsCommentListInstance(
  version: V1
): InsightsAssessmentsCommentListInstance {
  const instance = {} as InsightsAssessmentsCommentListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Insights/QM/Assessments/Comments`;

  instance.create = function create(
    params: InsightsAssessmentsCommentListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: InsightsAssessmentsCommentInstance
    ) => any
  ): Promise<InsightsAssessmentsCommentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["categoryId"] === null || params["categoryId"] === undefined) {
      throw new Error("Required parameter \"params['categoryId']\" missing.");
    }

    if (
      params["categoryName"] === null ||
      params["categoryName"] === undefined
    ) {
      throw new Error("Required parameter \"params['categoryName']\" missing.");
    }

    if (params["comment"] === null || params["comment"] === undefined) {
      throw new Error("Required parameter \"params['comment']\" missing.");
    }

    if (params["segmentId"] === null || params["segmentId"] === undefined) {
      throw new Error("Required parameter \"params['segmentId']\" missing.");
    }

    if (params["userName"] === null || params["userName"] === undefined) {
      throw new Error("Required parameter \"params['userName']\" missing.");
    }

    if (params["userEmail"] === null || params["userEmail"] === undefined) {
      throw new Error("Required parameter \"params['userEmail']\" missing.");
    }

    if (params["agentId"] === null || params["agentId"] === undefined) {
      throw new Error("Required parameter \"params['agentId']\" missing.");
    }

    if (params["offset"] === null || params["offset"] === undefined) {
      throw new Error("Required parameter \"params['offset']\" missing.");
    }

    let data: any = {};

    data["CategoryId"] = params["categoryId"];

    data["CategoryName"] = params["categoryName"];

    data["Comment"] = params["comment"];

    data["SegmentId"] = params["segmentId"];

    data["UserName"] = params["userName"];

    data["UserEmail"] = params["userEmail"];

    data["AgentId"] = params["agentId"];

    data["Offset"] = params["offset"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (params["token"] !== undefined) headers["Token"] = params["token"];

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InsightsAssessmentsCommentInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | InsightsAssessmentsCommentListInstancePageOptions
      | ((error: Error | null, items: InsightsAssessmentsCommentPage) => any),
    callback?: (
      error: Error | null,
      items: InsightsAssessmentsCommentPage
    ) => any
  ): Promise<InsightsAssessmentsCommentPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["segmentId"] !== undefined)
      data["SegmentId"] = params["segmentId"];
    if (params["agentId"] !== undefined) data["AgentId"] = params["agentId"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    if (params["token"] !== undefined) headers["Token"] = params["token"];

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InsightsAssessmentsCommentPage(
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
      items: InsightsAssessmentsCommentPage
    ) => any
  ): Promise<InsightsAssessmentsCommentPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InsightsAssessmentsCommentPage(
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

interface InsightsAssessmentsCommentPayload extends TwilioResponsePayload {
  comments: InsightsAssessmentsCommentResource[];
}

interface InsightsAssessmentsCommentResource {
  account_sid: string;
  assessment_id: string;
  comment: any;
  offset: number;
  report: boolean;
  weight: number;
  agent_id: string;
  segment_id: string;
  user_name: string;
  user_email: string;
  timestamp: number;
  url: string;
}

export class InsightsAssessmentsCommentInstance {
  constructor(
    protected _version: V1,
    payload: InsightsAssessmentsCommentResource
  ) {
    this.accountSid = payload.account_sid;
    this.assessmentId = payload.assessment_id;
    this.comment = payload.comment;
    this.offset = payload.offset;
    this.report = payload.report;
    this.weight = payload.weight;
    this.agentId = payload.agent_id;
    this.segmentId = payload.segment_id;
    this.userName = payload.user_name;
    this.userEmail = payload.user_email;
    this.timestamp = payload.timestamp;
    this.url = payload.url;
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
   */
  accountSid: string;
  /**
   * The unique ID of the assessment.
   */
  assessmentId: string;
  /**
   * The comment added for assessment.
   */
  comment: any;
  /**
   * The offset
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
   * The id of the agent.
   */
  agentId: string;
  /**
   * The id of the segment.
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
   * The timestamp when the record is inserted
   */
  timestamp: number;
  url: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      assessmentId: this.assessmentId,
      comment: this.comment,
      offset: this.offset,
      report: this.report,
      weight: this.weight,
      agentId: this.agentId,
      segmentId: this.segmentId,
      userName: this.userName,
      userEmail: this.userEmail,
      timestamp: this.timestamp,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class InsightsAssessmentsCommentPage extends Page<
  V1,
  InsightsAssessmentsCommentPayload,
  InsightsAssessmentsCommentResource,
  InsightsAssessmentsCommentInstance
> {
  /**
   * Initialize the InsightsAssessmentsCommentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: InsightsAssessmentsCommentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InsightsAssessmentsCommentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: InsightsAssessmentsCommentResource
  ): InsightsAssessmentsCommentInstance {
    return new InsightsAssessmentsCommentInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}