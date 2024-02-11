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
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to fetch a InsightsConversationalAiReportInsightsInstance
 */
export interface InsightsConversationalAiReportInsightsContextFetchOptions {
  /** Maximum number of rows to return */
  maxRows?: number;
  /** The type of report insights required to fetch.Like gauge,channel-metrics,queue-metrics */
  reportId?: string;
  /** The time period for which report insights is needed */
  granularity?: string;
  /** A reference date that should be included in the returned period */
  includeDate?: Date;
}

export interface InsightsConversationalAiReportInsightsContext {
  /**
   * Fetch a InsightsConversationalAiReportInsightsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsConversationalAiReportInsightsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: InsightsConversationalAiReportInsightsInstance
    ) => any
  ): Promise<InsightsConversationalAiReportInsightsInstance>;
  /**
   * Fetch a InsightsConversationalAiReportInsightsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsConversationalAiReportInsightsInstance
   */
  fetch(
    params: InsightsConversationalAiReportInsightsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: InsightsConversationalAiReportInsightsInstance
    ) => any
  ): Promise<InsightsConversationalAiReportInsightsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InsightsConversationalAiReportInsightsContextSolution {
  instanceSid: string;
}

export class InsightsConversationalAiReportInsightsContextImpl
  implements InsightsConversationalAiReportInsightsContext
{
  protected _solution: InsightsConversationalAiReportInsightsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, instanceSid: string) {
    if (!isValidPathParam(instanceSid)) {
      throw new Error("Parameter 'instanceSid' is not valid.");
    }

    this._solution = { instanceSid };
    this._uri = `/Insights/Instances/${instanceSid}/AI/ReportInsights`;
  }

  fetch(
    params?:
      | InsightsConversationalAiReportInsightsContextFetchOptions
      | ((
          error: Error | null,
          item?: InsightsConversationalAiReportInsightsInstance
        ) => any),
    callback?: (
      error: Error | null,
      item?: InsightsConversationalAiReportInsightsInstance
    ) => any
  ): Promise<InsightsConversationalAiReportInsightsInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["maxRows"] !== undefined) data["MaxRows"] = params["maxRows"];
    if (params["reportId"] !== undefined) data["ReportId"] = params["reportId"];
    if (params["granularity"] !== undefined)
      data["Granularity"] = params["granularity"];
    if (params["includeDate"] !== undefined)
      data["IncludeDate"] = serialize.iso8601DateTime(params["includeDate"]);

    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InsightsConversationalAiReportInsightsInstance(
          operationVersion,
          payload,
          instance._solution.instanceSid
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

interface InsightsConversationalAiReportInsightsPayload
  extends InsightsConversationalAiReportInsightsResource {}

interface InsightsConversationalAiReportInsightsResource {
  instance_sid: string;
  report_id: string;
  period_start: Date;
  period_end: Date;
  updated: Date;
  insights: Array<any>;
  url: string;
}

export class InsightsConversationalAiReportInsightsInstance {
  protected _solution: InsightsConversationalAiReportInsightsContextSolution;
  protected _context?: InsightsConversationalAiReportInsightsContext;

  constructor(
    protected _version: V1,
    payload: InsightsConversationalAiReportInsightsResource,
    instanceSid?: string
  ) {
    this.instanceSid = payload.instance_sid;
    this.reportId = payload.report_id;
    this.periodStart = deserialize.iso8601DateTime(payload.period_start);
    this.periodEnd = deserialize.iso8601DateTime(payload.period_end);
    this.updated = deserialize.iso8601DateTime(payload.updated);
    this.insights = payload.insights;
    this.url = payload.url;

    this._solution = { instanceSid: instanceSid || this.instanceSid };
  }

  /**
   * The Instance SID of the instance for which report insights is fetched
   */
  instanceSid: string;
  /**
   * The type of report insights required to fetch.Like gauge,channel-metrics,queue-metrics
   */
  reportId: string;
  /**
   * The start date from which report insights data is included
   */
  periodStart: Date;
  /**
   * The end date till report insights data is included
   */
  periodEnd: Date;
  /**
   * Updated time of the report insights
   */
  updated: Date;
  /**
   * List of report insights breakdown
   */
  insights: Array<any>;
  /**
   * The URL of this resource
   */
  url: string;

  private get _proxy(): InsightsConversationalAiReportInsightsContext {
    this._context =
      this._context ||
      new InsightsConversationalAiReportInsightsContextImpl(
        this._version,
        this._solution.instanceSid
      );
    return this._context;
  }

  /**
   * Fetch a InsightsConversationalAiReportInsightsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsConversationalAiReportInsightsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: InsightsConversationalAiReportInsightsInstance
    ) => any
  ): Promise<InsightsConversationalAiReportInsightsInstance>;
  /**
   * Fetch a InsightsConversationalAiReportInsightsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsConversationalAiReportInsightsInstance
   */
  fetch(
    params: InsightsConversationalAiReportInsightsContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: InsightsConversationalAiReportInsightsInstance
    ) => any
  ): Promise<InsightsConversationalAiReportInsightsInstance>;

  fetch(
    params?: any,
    callback?: (
      error: Error | null,
      item?: InsightsConversationalAiReportInsightsInstance
    ) => any
  ): Promise<InsightsConversationalAiReportInsightsInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      instanceSid: this.instanceSid,
      reportId: this.reportId,
      periodStart: this.periodStart,
      periodEnd: this.periodEnd,
      updated: this.updated,
      insights: this.insights,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InsightsConversationalAiReportInsightsSolution {}

export interface InsightsConversationalAiReportInsightsListInstance {
  _version: V1;
  _solution: InsightsConversationalAiReportInsightsSolution;
  _uri: string;

  (instanceSid: string): InsightsConversationalAiReportInsightsContext;
  get(instanceSid: string): InsightsConversationalAiReportInsightsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InsightsConversationalAiReportInsightsListInstance(
  version: V1
): InsightsConversationalAiReportInsightsListInstance {
  const instance = ((instanceSid) =>
    instance.get(
      instanceSid
    )) as InsightsConversationalAiReportInsightsListInstance;

  instance.get = function get(
    instanceSid
  ): InsightsConversationalAiReportInsightsContext {
    return new InsightsConversationalAiReportInsightsContextImpl(
      version,
      instanceSid
    );
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
