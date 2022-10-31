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



/**
 * Options to pass to update a TaskActionsInstance
 *
 * @property { any } [actions] The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task.
 */
export interface TaskActionsListInstanceUpdateOptions {
  "actions"?: any;
}

export interface TaskActionsListInstance {


  /**
   * Fetch a TaskActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskActionsInstance
   */
  fetch(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>


  /**
   * Update a TaskActionsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskActionsInstance
   */
  update(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
  /**
   * Update a TaskActionsInstance
   *
   * @param { TaskActionsListInstanceUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskActionsInstance
   */
  update(params: TaskActionsListInstanceUpdateOptions, callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
  update(params?: any, callback?: any): Promise<TaskActionsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskActionsSolution {
  assistantSid?: string;
  taskSid?: string;
}

interface TaskActionsListInstanceImpl extends TaskActionsListInstance {}
class TaskActionsListInstanceImpl implements TaskActionsListInstance {
  _version?: V1;
  _solution?: TaskActionsSolution;
  _uri?: string;

}

export function TaskActionsListInstance(version: V1, assistantSid: string, taskSid: string): TaskActionsListInstance {
  const instance = {} as TaskActionsListInstanceImpl;

  instance._version = version;
  instance._solution = { assistantSid, taskSid };
  instance._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Actions`;

  instance.fetch = function fetch(callback?: any): Promise<TaskActionsInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new TaskActionsInstance(operationVersion, payload, this._solution.assistantSid, this._solution.taskSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.update = function update(params?: any, callback?: any): Promise<TaskActionsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["actions"] !== undefined) data["Actions"] = params["actions"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new TaskActionsInstance(operationVersion, payload, this._solution.assistantSid, this._solution.taskSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

interface TaskActionsPayload extends TaskActionsResource{
}

interface TaskActionsResource {
  account_sid?: string | null;
  assistant_sid?: string | null;
  task_sid?: string | null;
  url?: string | null;
  data?: any | null;
}

export class TaskActionsInstance {

  constructor(protected _version: V1, payload: TaskActionsPayload, assistantSid: string, taskSid?: string) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.taskSid = payload.task_sid;
    this.url = payload.url;
    this.data = payload.data;

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
   * The SID of the Task associated with the resource
   */
  taskSid?: string | null;
  /**
   * The absolute URL of the TaskActions resource
   */
  url?: string | null;
  /**
   * The JSON string that specifies the actions that instruct the Assistant on how to perform the task
   */
  data?: any | null;

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
      url: this.url, 
      data: this.data
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


