/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");


type AnnotationAnsweredBy = 'unknown_answered_by'|'human'|'machine';

type AnnotationConnectivityIssue = 'unknown_connectivity_issue'|'no_connectivity_issue'|'invalid_number'|'caller_id'|'dropped_call'|'number_reachability';


/**
 * Options to pass to update a AnnotationInstance
 *
 * @property { AnnotationAnsweredBy } [answeredBy] 
 * @property { AnnotationConnectivityIssue } [connectivityIssue] 
 * @property { string } [qualityIssues] Specify if the call had any subjective quality issues. Possible values, one or more of:  no_quality_issue, low_volume, choppy_robotic, echo, dtmf, latency, owa, static_noise. Use comma separated values to indicate multiple quality issues for the same call
 * @property { boolean } [spam] Specify if the call was a spam call. Use this to provide feedback on whether calls placed from your account were marked as spam, or if inbound calls received by your account were unwanted spam. Is of type Boolean: true, false. Use true if the call was a spam call.
 * @property { number } [callScore] Specify the call score. This is of type integer. Use a range of 1-5 to indicate the call experience score, with the following mapping as a reference for rating the call [5: Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad].
 * @property { string } [comment] Specify any comments pertaining to the call. This of type string with a max limit of 100 characters. Twilio does not treat this field as PII, so don’t put any PII in here.
 * @property { string } [incident] Associate this call with an incident or support ticket. This is of type string with a max limit of 100 characters. Twilio does not treat this field as PII, so don’t put any PII in here.
 */
export interface AnnotationListInstanceUpdateOptions {
  answeredBy?: AnnotationAnsweredBy;
  connectivityIssue?: AnnotationConnectivityIssue;
  qualityIssues?: string;
  spam?: boolean;
  callScore?: number;
  comment?: string;
  incident?: string;
}

export interface AnnotationListInstance {


  /**
   * Fetch a AnnotationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AnnotationInstance
   */
  fetch(callback?: (error: Error | null, item?: AnnotationInstance) => any): Promise<AnnotationInstance>


  /**
   * Update a AnnotationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AnnotationInstance
   */
  update(callback?: (error: Error | null, item?: AnnotationInstance) => any): Promise<AnnotationInstance>;
  /**
   * Update a AnnotationInstance
   *
   * @param { AnnotationListInstanceUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AnnotationInstance
   */
  update(params: AnnotationListInstanceUpdateOptions, callback?: (error: Error | null, item?: AnnotationInstance) => any): Promise<AnnotationInstance>;
  update(params?: any, callback?: any): Promise<AnnotationInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AnnotationSolution {
  callSid?: string;
}

interface AnnotationListInstanceImpl extends AnnotationListInstance {}
class AnnotationListInstanceImpl implements AnnotationListInstance {
  _version?: V1;
  _solution?: AnnotationSolution;
  _uri?: string;

}

export function AnnotationListInstance(version: V1, callSid: string): AnnotationListInstance {
  const instance = {} as AnnotationListInstanceImpl;

  instance._version = version;
  instance._solution = { callSid };
  instance._uri = `/Voice/${callSid}/Annotation`;

  instance.fetch = function fetch(callback?: any): Promise<AnnotationInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new AnnotationInstance(operationVersion, payload, this._solution.callSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.update = function update(params?: any, callback?: any): Promise<AnnotationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.answeredBy !== undefined) data['AnsweredBy'] = params.answeredBy;
    if (params.connectivityIssue !== undefined) data['ConnectivityIssue'] = params.connectivityIssue;
    if (params.qualityIssues !== undefined) data['QualityIssues'] = params.qualityIssues;
    if (params.spam !== undefined) data['Spam'] = serialize.bool(params.spam);
    if (params.callScore !== undefined) data['CallScore'] = params.callScore;
    if (params.comment !== undefined) data['Comment'] = params.comment;
    if (params.incident !== undefined) data['Incident'] = params.incident;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new AnnotationInstance(operationVersion, payload, this._solution.callSid));
    

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

interface AnnotationPayload extends AnnotationResource{
}

interface AnnotationResource {
  call_sid?: string | null;
  account_sid?: string | null;
  answered_by?: AnnotationAnsweredBy;
  connectivity_issue?: AnnotationConnectivityIssue;
  quality_issues?: Array<string> | null;
  spam?: boolean | null;
  call_score?: number | null;
  comment?: string | null;
  incident?: string | null;
  url?: string | null;
}

export class AnnotationInstance {

  constructor(protected _version: V1, payload: AnnotationPayload, callSid?: string) {
    this.callSid = payload.call_sid;
    this.accountSid = payload.account_sid;
    this.answeredBy = payload.answered_by;
    this.connectivityIssue = payload.connectivity_issue;
    this.qualityIssues = payload.quality_issues;
    this.spam = payload.spam;
    this.callScore = deserialize.integer(payload.call_score);
    this.comment = payload.comment;
    this.incident = payload.incident;
    this.url = payload.url;

  }

  /**
   * Call SID.
   */
  callSid?: string | null;
  /**
   * Account SID.
   */
  accountSid?: string | null;
  answeredBy?: AnnotationAnsweredBy;
  connectivityIssue?: AnnotationConnectivityIssue;
  /**
   * Indicates if the call had audio quality issues.
   */
  qualityIssues?: Array<string> | null;
  /**
   * Call spam indicator
   */
  spam?: boolean | null;
  /**
   * Call Score
   */
  callScore?: number | null;
  /**
   * User comments
   */
  comment?: string | null;
  /**
   * Call tag for incidents or support ticket
   */
  incident?: string | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      callSid: this.callSid, 
      accountSid: this.accountSid, 
      answeredBy: this.answeredBy, 
      connectivityIssue: this.connectivityIssue, 
      qualityIssues: this.qualityIssues, 
      spam: this.spam, 
      callScore: this.callScore, 
      comment: this.comment, 
      incident: this.incident, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


