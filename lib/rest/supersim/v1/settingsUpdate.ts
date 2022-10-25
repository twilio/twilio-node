/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Supersim
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");


export class SupersimV1SettingsUpdate {
  /**
   * The unique identifier of this Settings Update
   */
  "sid"?: string | null;
  /**
   * The ICCID associated with the SIM
   */
  "iccid"?: string | null;
  /**
   * The SID of the Super SIM to which this Settings Update was applied
   */
  "simSid"?: string | null;
  "status"?: SettingsUpdateEnumStatus;
  /**
   * Array containing the different Settings Packages that will be applied to the SIM after the update completes
   */
  "packages"?: Array<any> | null;
  /**
   * The time when the update successfully completed and the new settings were applied to the SIM
   */
  "dateCompleted"?: Date | null;
  /**
   * The date this Settings Update was created
   */
  "dateCreated"?: Date | null;
  /**
   * The date this Settings Update was last updated
   */
  "dateUpdated"?: Date | null;
}


export class ListBillingPeriodResponseMeta {
  "firstPageUrl"?: string;
  "nextPageUrl"?: string;
  "page"?: number;
  "pageSize"?: number;
  "previousPageUrl"?: string;
  "url"?: string;
  "key"?: string;
}


/**
 * Options to pass to each
 *
 * @property { string } [sim] Filter the Settings Updates by a Super SIM\&#39;s SID or UniqueName.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SettingsUpdateListInstanceEachOptions {
  sim?: string;
  pageSize?: number;
  callback?: (item: SettingsUpdateInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [sim] Filter the Settings Updates by a Super SIM\&#39;s SID or UniqueName.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface SettingsUpdateListInstanceOptions {
  sim?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [sim] Filter the Settings Updates by a Super SIM\&#39;s SID or UniqueName.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface SettingsUpdateListInstancePageOptions {
  sim?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface SettingsUpdateListInstance {



  /**
   * Streams SettingsUpdateInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: SettingsUpdateInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SettingsUpdateInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SettingsUpdateListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: SettingsUpdateListInstanceEachOptions, callback?: (item: SettingsUpdateInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SettingsUpdateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SettingsUpdatePage) => any): Promise<SettingsUpdatePage>;
  /**
   * Retrieve a single target page of SettingsUpdateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SettingsUpdatePage) => any): Promise<SettingsUpdatePage>;
  getPage(params?: any, callback?: any): Promise<SettingsUpdatePage>;
  /**
   * Lists SettingsUpdateInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SettingsUpdateInstance[]) => any): Promise<SettingsUpdateInstance[]>;
  /**
   * Lists SettingsUpdateInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SettingsUpdateListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: SettingsUpdateListInstanceOptions, callback?: (error: Error | null, items: SettingsUpdateInstance[]) => any): Promise<SettingsUpdateInstance[]>;
  list(params?: any, callback?: any): Promise<SettingsUpdateInstance[]>;
  /**
   * Retrieve a single page of SettingsUpdateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SettingsUpdatePage) => any): Promise<SettingsUpdatePage>;
  /**
   * Retrieve a single page of SettingsUpdateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SettingsUpdateListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: SettingsUpdateListInstancePageOptions, callback?: (error: Error | null, items: SettingsUpdatePage) => any): Promise<SettingsUpdatePage>;
  page(params?: any, callback?: any): Promise<SettingsUpdatePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SettingsUpdateSolution {
}

interface SettingsUpdateListInstanceImpl extends SettingsUpdateListInstance {}
class SettingsUpdateListInstanceImpl implements SettingsUpdateListInstance {
  _version?: V1;
  _solution?: SettingsUpdateSolution;
  _uri?: string;

}

export function SettingsUpdateListInstance(version: V1): SettingsUpdateListInstance {
  const instance = {} as SettingsUpdateListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/SettingsUpdates`;

  instance.page = function page(params?: any, callback?: any): Promise<SettingsUpdatePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.sim !== undefined) data['Sim'] = params.sim;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SettingsUpdatePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<SettingsUpdatePage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new SettingsUpdatePage(this._version, payload, this._solution));
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

interface SettingsUpdatePayload extends SettingsUpdateResource, Page.TwilioResponsePayload {
}

interface SettingsUpdateResource {
  settings_updates?: Array<SupersimV1SettingsUpdate>;
  meta?: ListBillingPeriodResponseMeta;
}

export class SettingsUpdateInstance {

  constructor(protected _version: V1, payload: SettingsUpdatePayload) {
    this.settingsUpdates = payload.settings_updates;
    this.meta = payload.meta;

  }

  settingsUpdates?: Array<SupersimV1SettingsUpdate>;
  meta?: ListBillingPeriodResponseMeta;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      settingsUpdates: this.settingsUpdates, 
      meta: this.meta
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class SettingsUpdatePage extends Page<V1, SettingsUpdatePayload, SettingsUpdateResource, SettingsUpdateInstance> {
/**
* Initialize the SettingsUpdatePage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: SettingsUpdateSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of SettingsUpdateInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: SettingsUpdatePayload): SettingsUpdateInstance {
    return new SettingsUpdateInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

