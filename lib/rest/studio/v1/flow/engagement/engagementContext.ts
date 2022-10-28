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
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");




export interface EngagementContextContext {


  /**
   * Fetch a EngagementContextInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EngagementContextInstance
   */
  fetch(callback?: (error: Error | null, item?: EngagementContextInstance) => any): Promise<EngagementContextInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface EngagementContextContextSolution {
  flowSid?: string;
  engagementSid?: string;
}

export class EngagementContextContextImpl implements EngagementContextContext {
  protected _solution: EngagementContextContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, flowSid: string, engagementSid: string) {
    this._solution = { flowSid, engagementSid };
    this._uri = `/Flows/${flowSid}/Engagements/${engagementSid}/Context`;
  }

  fetch(callback?: any): Promise<EngagementContextInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new EngagementContextInstance(operationVersion, payload, this._solution.flowSid, this._solution.engagementSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface EngagementContextPayload extends EngagementContextResource{
}

interface EngagementContextResource {
  account_sid?: string | null;
  context?: any | null;
  engagement_sid?: string | null;
  flow_sid?: string | null;
  url?: string | null;
}

export class EngagementContextInstance {
  protected _solution: EngagementContextContextSolution;
  protected _context?: EngagementContextContext;

  constructor(protected _version: V1, payload: EngagementContextPayload, flowSid: string, engagementSid?: string) {
    this.accountSid = payload.account_sid;
    this.context = payload.context;
    this.engagementSid = payload.engagement_sid;
    this.flowSid = payload.flow_sid;
    this.url = payload.url;

    this._solution = { flowSid, engagementSid: engagementSid || this.engagementSid };
  }

  /**
   * Account SID
   */
  accountSid?: string | null;
  /**
   * Flow state
   */
  context?: any | null;
  /**
   * Engagement SID
   */
  engagementSid?: string | null;
  /**
   * Flow SID
   */
  flowSid?: string | null;
  /**
   * The URL of the resource
   */
  url?: string | null;

  private get _proxy(): EngagementContextContext {
    this._context = this._context || new EngagementContextContextImpl(this._version, this._solution.flowSid, this._solution.engagementSid);
    return this._context;
  }

  /**
   * Fetch a EngagementContextInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EngagementContextInstance
   */
  fetch(callback?: (error: Error | null, item?: EngagementContextInstance) => any): Promise<EngagementContextInstance>
     {
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
      context: this.context, 
      engagementSid: this.engagementSid, 
      flowSid: this.flowSid, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface EngagementContextListInstance {
  (): EngagementContextContext;
  get(): EngagementContextContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface Solution {
  flowSid?: string;
  engagementSid?: string;
}

interface EngagementContextListInstanceImpl extends EngagementContextListInstance {}
class EngagementContextListInstanceImpl implements EngagementContextListInstance {
  _version?: V1;
  _solution?: Solution;
  _uri?: string;

}

export function EngagementContextListInstance(version: V1, flowSid: string, engagementSid: string): EngagementContextListInstance {
  const instance = (() => instance.get()) as EngagementContextListInstanceImpl;

  instance.get = function get(): EngagementContextContext {
    return new EngagementContextContextImpl(version, flowSid, engagementSid);
  }

  instance._version = version;
  instance._solution = { flowSid, engagementSid };
  instance._uri = `/Flows/${flowSid}/Engagements/${engagementSid}/Context`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



