/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../../../../V1";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");



export interface ExecutionStepContextListInstance {


  /**
   * Fetch a ExecutionStepContextInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExecutionStepContextInstance
   */
  fetch(callback?: (error: Error | null, item?: ExecutionStepContextInstance) => any): Promise<ExecutionStepContextInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExecutionStepContextSolution {
  flowSid?: string;
  executionSid?: string;
  stepSid?: string;
}

interface ExecutionStepContextListInstanceImpl extends ExecutionStepContextListInstance {}
class ExecutionStepContextListInstanceImpl implements ExecutionStepContextListInstance {
  _version?: V1;
  _solution?: ExecutionStepContextSolution;
  _uri?: string;

}

export function ExecutionStepContextListInstance(version: V1, flowSid: string, executionSid: string, stepSid: string): ExecutionStepContextListInstance {
  const instance = {} as ExecutionStepContextListInstanceImpl;

  instance._version = version;
  instance._solution = { flowSid, executionSid, stepSid };
  instance._uri = `/Flows/${flowSid}/Executions/${executionSid}/Steps/${stepSid}/Context`;

  instance.fetch = function fetch(callback?: any): Promise<ExecutionStepContextInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new ExecutionStepContextInstance(operationVersion, payload, this._solution.flowSid, this._solution.executionSid, this._solution.stepSid));
    

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

interface ExecutionStepContextPayload extends ExecutionStepContextResource{
}

interface ExecutionStepContextResource {
  account_sid?: string | null;
  context?: any | null;
  execution_sid?: string | null;
  flow_sid?: string | null;
  step_sid?: string | null;
  url?: string | null;
}

export class ExecutionStepContextInstance {

  constructor(protected _version: V1, payload: ExecutionStepContextPayload, flowSid: string, executionSid: string, stepSid?: string) {
    this.accountSid = payload.account_sid;
    this.context = payload.context;
    this.executionSid = payload.execution_sid;
    this.flowSid = payload.flow_sid;
    this.stepSid = payload.step_sid;
    this.url = payload.url;

  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The current state of the flow
   */
  context?: any | null;
  /**
   * The SID of the Execution
   */
  executionSid?: string | null;
  /**
   * The SID of the Flow
   */
  flowSid?: string | null;
  /**
   * Step SID
   */
  stepSid?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      context: this.context, 
      executionSid: this.executionSid, 
      flowSid: this.flowSid, 
      stepSid: this.stepSid, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


