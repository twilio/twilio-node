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
 * Options to pass to fetch a InsightsSettingsAnswerSetsInstance
 */
export interface InsightsSettingsAnswerSetsListInstanceFetchOptions {
  /** The Authorization HTTP request header */
  authorization?: string;
}

export interface InsightsSettingsAnswerSetsSolution {}

export interface InsightsSettingsAnswerSetsListInstance {
  _version: V1;
  _solution: InsightsSettingsAnswerSetsSolution;
  _uri: string;

  /**
   * Fetch a InsightsSettingsAnswerSetsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsSettingsAnswerSetsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: InsightsSettingsAnswerSetsInstance
    ) => any
  ): Promise<InsightsSettingsAnswerSetsInstance>;
  /**
   * Fetch a InsightsSettingsAnswerSetsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InsightsSettingsAnswerSetsInstance
   */
  fetch(
    params: InsightsSettingsAnswerSetsListInstanceFetchOptions,
    callback?: (
      error: Error | null,
      item?: InsightsSettingsAnswerSetsInstance
    ) => any
  ): Promise<InsightsSettingsAnswerSetsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InsightsSettingsAnswerSetsListInstance(
  version: V1
): InsightsSettingsAnswerSetsListInstance {
  const instance = {} as InsightsSettingsAnswerSetsListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Insights/QualityManagement/Settings/AnswerSets`;

  instance.fetch = function fetch(
    params?:
      | InsightsSettingsAnswerSetsListInstanceFetchOptions
      | ((
          error: Error | null,
          items: InsightsSettingsAnswerSetsInstance
        ) => any),
    callback?: (
      error: Error | null,
      items: InsightsSettingsAnswerSetsInstance
    ) => any
  ): Promise<InsightsSettingsAnswerSetsInstance> {
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

    let operationVersion = version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InsightsSettingsAnswerSetsInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface InsightsSettingsAnswerSetsPayload
  extends InsightsSettingsAnswerSetsResource {}

interface InsightsSettingsAnswerSetsResource {
  account_sid: string;
  answer_sets: any;
  answer_set_categories: any;
  not_applicable: any;
  url: string;
}

export class InsightsSettingsAnswerSetsInstance {
  constructor(
    protected _version: V1,
    payload: InsightsSettingsAnswerSetsResource
  ) {
    this.accountSid = payload.account_sid;
    this.answerSets = payload.answer_sets;
    this.answerSetCategories = payload.answer_set_categories;
    this.notApplicable = payload.not_applicable;
    this.url = payload.url;
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
   */
  accountSid: string;
  /**
   * The lis of answer sets
   */
  answerSets: any;
  /**
   * The list of answer set categories
   */
  answerSetCategories: any;
  /**
   * The details for not applicable answer set
   */
  notApplicable: any;
  url: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      answerSets: this.answerSets,
      answerSetCategories: this.answerSetCategories,
      notApplicable: this.notApplicable,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
