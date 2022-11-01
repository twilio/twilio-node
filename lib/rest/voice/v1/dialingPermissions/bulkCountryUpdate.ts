/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
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



/**
 * Options to pass to create a BulkCountryUpdateInstance
 *
 * @property { string } updateRequest URL encoded JSON array of update objects. example : &#x60;[ { \\\&quot;iso_code\\\&quot;: \\\&quot;GB\\\&quot;, \\\&quot;low_risk_numbers_enabled\\\&quot;: \\\&quot;true\\\&quot;, \\\&quot;high_risk_special_numbers_enabled\\\&quot;:\\\&quot;true\\\&quot;, \\\&quot;high_risk_tollfraud_numbers_enabled\\\&quot;: \\\&quot;false\\\&quot; } ]&#x60;
 */
export interface BulkCountryUpdateListInstanceCreateOptions {
  "updateRequest": string;
}

export interface BulkCountryUpdateListInstance {


  /**
   * Create a BulkCountryUpdateInstance
   *
   * @param { BulkCountryUpdateListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BulkCountryUpdateInstance
   */
  create(params: BulkCountryUpdateListInstanceCreateOptions, callback?: (error: Error | null, item?: BulkCountryUpdateInstance) => any): Promise<BulkCountryUpdateInstance>;
  create(params: any, callback?: any): Promise<BulkCountryUpdateInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BulkCountryUpdateSolution {
}

interface BulkCountryUpdateListInstanceImpl extends BulkCountryUpdateListInstance {}
class BulkCountryUpdateListInstanceImpl implements BulkCountryUpdateListInstance {
  _version?: V1;
  _solution?: BulkCountryUpdateSolution;
  _uri?: string;

}

export function BulkCountryUpdateListInstance(version: V1): BulkCountryUpdateListInstance {
  const instance = {} as BulkCountryUpdateListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/DialingPermissions/BulkCountryUpdates`;

  instance.create = function create(params: any, callback?: any): Promise<BulkCountryUpdateInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["updateRequest"] === null || params["updateRequest"] === undefined) {
      throw new Error('Required parameter "params[\'updateRequest\']" missing.');
    }

    const data: any = {};

    data["UpdateRequest"] = params["updateRequest"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new BulkCountryUpdateInstance(operationVersion, payload));
    

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

interface BulkCountryUpdatePayload extends BulkCountryUpdateResource{
}

interface BulkCountryUpdateResource {
  update_count?: number | null;
  update_request?: string | null;
}

export class BulkCountryUpdateInstance {

  constructor(protected _version: V1, payload: BulkCountryUpdatePayload) {
    this.updateCount = deserialize.integer(payload.update_count);
    this.updateRequest = payload.update_request;

  }

  /**
   * The number of countries updated
   */
  updateCount?: number | null;
  /**
   * A URL encoded JSON array of update objects
   */
  updateRequest?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      updateCount: this.updateCount, 
      updateRequest: this.updateRequest
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

