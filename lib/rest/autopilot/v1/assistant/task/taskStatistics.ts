/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Autopilot
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

export interface TaskStatisticsContext {
  /**
   * Fetch a TaskStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskStatisticsInstance) => any
  ): Promise<TaskStatisticsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskStatisticsContextSolution {
  assistantSid?: string;
  taskSid?: string;
}

export class TaskStatisticsContextImpl implements TaskStatisticsContext {
  protected _solution: TaskStatisticsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, assistantSid: string, taskSid: string) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(taskSid)) {
      throw new Error("Parameter 'taskSid' is not valid.");
    }

    this._solution = { assistantSid, taskSid };
    this._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Statistics`;
  }

  fetch(callback?: any): Promise<TaskStatisticsInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskStatisticsInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.taskSid
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

interface TaskStatisticsPayload extends TaskStatisticsResource {}

interface TaskStatisticsResource {
  account_sid?: string | null;
  assistant_sid?: string | null;
  task_sid?: string | null;
  samples_count?: number | null;
  fields_count?: number | null;
  url?: string | null;
}

export class TaskStatisticsInstance {
  protected _solution: TaskStatisticsContextSolution;
  protected _context?: TaskStatisticsContext;

  constructor(
    protected _version: V1,
    payload: TaskStatisticsResource,
    assistantSid: string,
    taskSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.taskSid = payload.task_sid;
    this.samplesCount = deserialize.integer(payload.samples_count);
    this.fieldsCount = deserialize.integer(payload.fields_count);
    this.url = payload.url;

    this._solution = { assistantSid, taskSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Assistant that is the parent of the Task associated with the resource
   */
  assistantSid?: string | null;
  /**
   * The SID of the Task for which the statistics were collected
   */
  taskSid?: string | null;
  /**
   * The total number of Samples associated with the Task
   */
  samplesCount?: number | null;
  /**
   * The total number of Fields associated with the Task
   */
  fieldsCount?: number | null;
  /**
   * The absolute URL of the TaskStatistics resource
   */
  url?: string | null;

  private get _proxy(): TaskStatisticsContext {
    this._context =
      this._context ||
      new TaskStatisticsContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.taskSid
      );
    return this._context;
  }

  /**
   * Fetch a TaskStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskStatisticsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskStatisticsInstance) => any
  ): Promise<TaskStatisticsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      assistantSid: this.assistantSid,
      taskSid: this.taskSid,
      samplesCount: this.samplesCount,
      fieldsCount: this.fieldsCount,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TaskStatisticsListInstance {
  (): TaskStatisticsContext;
  get(): TaskStatisticsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskStatisticsSolution {
  assistantSid?: string;
  taskSid?: string;
}

interface TaskStatisticsListInstanceImpl extends TaskStatisticsListInstance {}
class TaskStatisticsListInstanceImpl implements TaskStatisticsListInstance {
  _version?: V1;
  _solution?: TaskStatisticsSolution;
  _uri?: string;
}

export function TaskStatisticsListInstance(
  version: V1,
  assistantSid: string,
  taskSid: string
): TaskStatisticsListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  if (!isValidPathParam(taskSid)) {
    throw new Error("Parameter 'taskSid' is not valid.");
  }

  const instance = (() => instance.get()) as TaskStatisticsListInstanceImpl;

  instance.get = function get(): TaskStatisticsContext {
    return new TaskStatisticsContextImpl(version, assistantSid, taskSid);
  };

  instance._version = version;
  instance._solution = { assistantSid, taskSid };
  instance._uri = ``;

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
