/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
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


type BuildStatusStatus = 'building'|'completed'|'failed';


export interface BuildStatusListInstance {


  /**
   * Fetch a BuildStatusInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BuildStatusInstance
   */
  fetch(callback?: (error: Error | null, item?: BuildStatusInstance) => any): Promise<BuildStatusInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BuildStatusSolution {
  serviceSid?: string;
  sid?: string;
}

interface BuildStatusListInstanceImpl extends BuildStatusListInstance {}
class BuildStatusListInstanceImpl implements BuildStatusListInstance {
  _version?: V1;
  _solution?: BuildStatusSolution;
  _uri?: string;

}

export function BuildStatusListInstance(version: V1, serviceSid: string, sid: string): BuildStatusListInstance {
  const instance = {} as BuildStatusListInstanceImpl;

  instance._version = version;
  instance._solution = { serviceSid, sid };
  instance._uri = `/Services/${serviceSid}/Builds/${sid}/Status`;

  instance.fetch = function fetch(callback?: any): Promise<BuildStatusInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new BuildStatusInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

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

interface BuildStatusPayload extends BuildStatusResource{
}

interface BuildStatusResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  status?: BuildStatusStatus;
  url?: string | null;
}

export class BuildStatusInstance {

  constructor(protected _version: V1, payload: BuildStatusPayload, serviceSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.status = payload.status;
    this.url = payload.url;

  }

  /**
   * The unique string that identifies the Build resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Build resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the Build resource is associated with
   */
  serviceSid?: string | null;
  status?: BuildStatusStatus;
  /**
   * The absolute URL of the Build Status resource
   */
  url?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      accountSid: this.accountSid, 
      serviceSid: this.serviceSid, 
      status: this.status, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


