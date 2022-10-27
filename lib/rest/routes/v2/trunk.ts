/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Routes
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");




/**
 * Options to pass to update a TrunkInstance
 *
 * @property { string } [voiceRegion] The Inbound Processing Region used for this SIP Trunk for voice
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 */
export interface TrunkContextUpdateOptions {
  voiceRegion?: string;
  friendlyName?: string;
}

export interface TrunkContext {


  /**
   * Fetch a TrunkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrunkInstance
   */
  fetch(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>


  /**
   * Update a TrunkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrunkInstance
   */
  update(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
  /**
   * Update a TrunkInstance
   *
   * @param { TrunkContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrunkInstance
   */
  update(params: TrunkContextUpdateOptions, callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
  update(params?: any, callback?: any): Promise<TrunkInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrunkContextSolution {
  sipTrunkDomain?: string;
}

export class TrunkContextImpl implements TrunkContext {
  protected _solution: TrunkContextSolution;
  protected _uri: string;


  constructor(protected _version: V2, sipTrunkDomain: string) {
    this._solution = { sipTrunkDomain };
    this._uri = `/Trunks/${sipTrunkDomain}`;
  }

  fetch(callback?: any): Promise<TrunkInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new TrunkInstance(operationVersion, payload, this._solution.sipTrunkDomain));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<TrunkInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.voiceRegion !== undefined) data['VoiceRegion'] = params.voiceRegion;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new TrunkInstance(operationVersion, payload, this._solution.sipTrunkDomain));
    

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

interface TrunkPayload extends TrunkResource{
}

interface TrunkResource {
  sip_trunk_domain?: string | null;
  url?: string | null;
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  voice_region?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class TrunkInstance {
  protected _solution: TrunkContextSolution;
  protected _context?: TrunkContext;

  constructor(protected _version: V2, payload: TrunkPayload, sipTrunkDomain?: string) {
    this.sipTrunkDomain = payload.sip_trunk_domain;
    this.url = payload.url;
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.voiceRegion = payload.voice_region;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { sipTrunkDomain: sipTrunkDomain || this.sipTrunkDomain };
  }

  /**
   * The SIP Trunk
   */
  sipTrunkDomain?: string | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  /**
   * A string that uniquely identifies the Inbound Processing Region assignments for this SIP Trunk.
   */
  sid?: string | null;
  /**
   * Account Sid.
   */
  accountSid?: string | null;
  /**
   * A human readable description of the Inbound Processing Region assignments for this SIP Trunk.
   */
  friendlyName?: string | null;
  /**
   * The Inbound Processing Region used for this SIP Trunk for voice.
   */
  voiceRegion?: string | null;
  /**
   * The date that this SIP Trunk was assigned an Inbound Processing Region.
   */
  dateCreated?: Date | null;
  /**
   * The date that the Inbound Processing Region was updated for this SIP Trunk.
   */
  dateUpdated?: Date | null;

  private get _proxy(): TrunkContext {
    this._context = this._context || new TrunkContextImpl(this._version, this._solution.sipTrunkDomain);
    return this._context;
  }

  /**
   * Fetch a TrunkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrunkInstance
   */
  fetch(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TrunkInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrunkInstance
   */
  update(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
  /**
   * Update a TrunkInstance
   *
   * @param { TrunkContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TrunkInstance
   */
  update(params: TrunkContextUpdateOptions, callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
  update(params?: any, callback?: any): Promise<TrunkInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sipTrunkDomain: this.sipTrunkDomain, 
      url: this.url, 
      sid: this.sid, 
      accountSid: this.accountSid, 
      friendlyName: this.friendlyName, 
      voiceRegion: this.voiceRegion, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface TrunkListInstance {
  (sipTrunkDomain: string): TrunkContext;
  get(sipTrunkDomain: string): TrunkContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrunkSolution {
}

interface TrunkListInstanceImpl extends TrunkListInstance {}
class TrunkListInstanceImpl implements TrunkListInstance {
  _version?: V2;
  _solution?: TrunkSolution;
  _uri?: string;

}

export function TrunkListInstance(version: V2): TrunkListInstance {
  const instance = ((sipTrunkDomain) => instance.get(sipTrunkDomain)) as TrunkListInstanceImpl;

  instance.get = function get(sipTrunkDomain): TrunkContext {
    return new TrunkContextImpl(version, sipTrunkDomain);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Trunks`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



