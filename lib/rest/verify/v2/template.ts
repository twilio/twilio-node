/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");


export class ListBucketResponseMeta {
  "firstPageUrl"?: string;
  "nextPageUrl"?: string;
  "page"?: number;
  "pageSize"?: number;
  "previousPageUrl"?: string;
  "url"?: string;
  "key"?: string;
}


export class VerifyV2VerificationTemplate {
  /**
   * A string that uniquely identifies this Template
   */
  "sid"?: string | null;
  /**
   * Account Sid
   */
  "accountSid"?: string | null;
  /**
   * A string to describe the verification template
   */
  "friendlyName"?: string | null;
  "channels"?: Array<string> | null;
  /**
   * Object with the template translations.
   */
  "translations"?: any | null;
}


/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] String filter used to query templates with a given friendly name
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
export interface TemplateListInstanceEachOptions {
  "friendlyName"?: string;
  "pageSize"?: number;
  callback?: (item: TemplateInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] String filter used to query templates with a given friendly name
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TemplateListInstanceOptions {
  "friendlyName"?: string;
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] String filter used to query templates with a given friendly name
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TemplateListInstancePageOptions {
  "friendlyName"?: string;
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface TemplateListInstance {



  /**
   * Streams TemplateInstance records from the API.
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
  each(callback?: (item: TemplateInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams TemplateInstance records from the API.
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
   * @param { TemplateListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: TemplateListInstanceEachOptions, callback?: (item: TemplateInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TemplateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: TemplatePage) => any): Promise<TemplatePage>;
  /**
   * Retrieve a single target page of TemplateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TemplatePage) => any): Promise<TemplatePage>;
  getPage(params?: any, callback?: any): Promise<TemplatePage>;
  /**
   * Lists TemplateInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: TemplateInstance[]) => any): Promise<TemplateInstance[]>;
  /**
   * Lists TemplateInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TemplateListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: TemplateListInstanceOptions, callback?: (error: Error | null, items: TemplateInstance[]) => any): Promise<TemplateInstance[]>;
  list(params?: any, callback?: any): Promise<TemplateInstance[]>;
  /**
   * Retrieve a single page of TemplateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: TemplatePage) => any): Promise<TemplatePage>;
  /**
   * Retrieve a single page of TemplateInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TemplateListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: TemplateListInstancePageOptions, callback?: (error: Error | null, items: TemplatePage) => any): Promise<TemplatePage>;
  page(params?: any, callback?: any): Promise<TemplatePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TemplateSolution {
}

interface TemplateListInstanceImpl extends TemplateListInstance {}
class TemplateListInstanceImpl implements TemplateListInstance {
  _version?: V2;
  _solution?: TemplateSolution;
  _uri?: string;

}

export function TemplateListInstance(version: V2): TemplateListInstance {
  const instance = {} as TemplateListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Templates`;

  instance.page = function page(params?: any, callback?: any): Promise<TemplatePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["friendlyName"] !== undefined) data["FriendlyName"] = params["friendlyName"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TemplatePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<TemplatePage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new TemplatePage(this._version, payload, this._solution));
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

interface TemplatePayload extends TemplateResource, Page.TwilioResponsePayload {
}

interface TemplateResource {
  templates?: Array<VerifyV2VerificationTemplate>;
  meta?: ListBucketResponseMeta;
}

export class TemplateInstance {

  constructor(protected _version: V2, payload: TemplatePayload) {
    this.templates = payload.templates;
    this.meta = payload.meta;

  }

  templates?: Array<VerifyV2VerificationTemplate>;
  meta?: ListBucketResponseMeta;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      templates: this.templates, 
      meta: this.meta
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class TemplatePage extends Page<V2, TemplatePayload, TemplateResource, TemplateInstance> {
/**
* Initialize the TemplatePage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2, response: Response<string>, solution: TemplateSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of TemplateInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: TemplatePayload): TemplateInstance {
    return new TemplateInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

