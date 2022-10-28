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
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");



/**
 * Options to pass to update a RestoreAssistantInstance
 *
 * @property { string } assistant The Twilio-provided string that uniquely identifies the Assistant resource to restore.
 */
export interface RestoreAssistantListInstanceUpdateOptions {
  'assistant': string;
}

export interface RestoreAssistantListInstance {


  /**
   * Update a RestoreAssistantInstance
   *
   * @param { RestoreAssistantListInstanceUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed RestoreAssistantInstance
   */
  update(params: RestoreAssistantListInstanceUpdateOptions, callback?: (error: Error | null, item?: RestoreAssistantInstance) => any): Promise<RestoreAssistantInstance>;
  update(params: any, callback?: any): Promise<RestoreAssistantInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RestoreAssistantSolution {
}

interface RestoreAssistantListInstanceImpl extends RestoreAssistantListInstance {}
class RestoreAssistantListInstanceImpl implements RestoreAssistantListInstance {
  _version?: V1;
  _solution?: RestoreAssistantSolution;
  _uri?: string;

}

export function RestoreAssistantListInstance(version: V1): RestoreAssistantListInstance {
  const instance = {} as RestoreAssistantListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Assistants/Restore`;

  instance.update = function update(params: any, callback?: any): Promise<RestoreAssistantInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params['assistant'] === null || params['assistant'] === undefined) {
      throw new Error('Required parameter "params[\'assistant\']" missing.');
    }

    const data: any = {};

    data['Assistant'] = params['assistant'];

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new RestoreAssistantInstance(operationVersion, payload));
    

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

interface RestoreAssistantPayload extends RestoreAssistantResource{
}

interface RestoreAssistantResource {
  account_sid?: string | null;
  sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  unique_name?: string | null;
  friendly_name?: string | null;
  needs_model_build?: boolean | null;
  latest_model_build_sid?: string | null;
  log_queries?: boolean | null;
  development_stage?: string | null;
  callback_url?: string | null;
  callback_events?: string | null;
}

export class RestoreAssistantInstance {

  constructor(protected _version: V1, payload: RestoreAssistantPayload) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.uniqueName = payload.unique_name;
    this.friendlyName = payload.friendly_name;
    this.needsModelBuild = payload.needs_model_build;
    this.latestModelBuildSid = payload.latest_model_build_sid;
    this.logQueries = payload.log_queries;
    this.developmentStage = payload.development_stage;
    this.callbackUrl = payload.callback_url;
    this.callbackEvents = payload.callback_events;

  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * Whether model needs to be rebuilt
   */
  needsModelBuild?: boolean | null;
  /**
   * Reserved
   */
  latestModelBuildSid?: string | null;
  /**
   * Whether queries should be logged and kept after training
   */
  logQueries?: boolean | null;
  /**
   * A string describing the state of the assistant.
   */
  developmentStage?: string | null;
  /**
   * Reserved
   */
  callbackUrl?: string | null;
  /**
   * Reserved
   */
  callbackEvents?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      sid: this.sid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      uniqueName: this.uniqueName, 
      friendlyName: this.friendlyName, 
      needsModelBuild: this.needsModelBuild, 
      latestModelBuildSid: this.latestModelBuildSid, 
      logQueries: this.logQueries, 
      developmentStage: this.developmentStage, 
      callbackUrl: this.callbackUrl, 
      callbackEvents: this.callbackEvents
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


