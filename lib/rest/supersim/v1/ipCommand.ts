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



type IpCommandDirection = 'to_sim'|'from_sim';

type IpCommandPayloadType = 'text'|'binary';

type IpCommandStatus = 'queued'|'sent'|'received'|'failed';


/**
 * Options to pass to create a IpCommandInstance
 *
 * @property { string } sim The &#x60;sid&#x60; or &#x60;unique_name&#x60; of the [Super SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource) to send the IP Command to.
 * @property { string } payload The payload to be delivered to the device.
 * @property { number } devicePort The device port to which the IP Command will be sent.
 * @property { IpCommandPayloadType } [payloadType] 
 * @property { string } [callbackUrl] The URL we should call using the &#x60;callback_method&#x60; after we have sent the IP Command.
 * @property { string } [callbackMethod] The HTTP method we should use to call &#x60;callback_url&#x60;. Can be &#x60;GET&#x60; or &#x60;POST&#x60;, and the default is &#x60;POST&#x60;.
 */
export interface IpCommandListInstanceCreateOptions {
  "sim": string;
  "payload": string;
  "devicePort": number;
  "payloadType"?: IpCommandPayloadType;
  "callbackUrl"?: string;
  "callbackMethod"?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [sim] The SID or unique name of the Sim resource that IP Command was sent to or from.
 * @property { string } [simIccid] The ICCID of the Sim resource that IP Command was sent to or from.
 * @property { IpCommandStatus } [status] The status of the IP Command. Can be: &#x60;queued&#x60;, &#x60;sent&#x60;, &#x60;received&#x60; or &#x60;failed&#x60;. See the [IP Command Status Values](https://www.twilio.com/docs/wireless/api/ipcommand-resource#status-values) for a description of each.
 * @property { IpCommandDirection } [direction] The direction of the IP Command. Can be &#x60;to_sim&#x60; or &#x60;from_sim&#x60;. The value of &#x60;to_sim&#x60; is synonymous with the term &#x60;mobile terminated&#x60;, and &#x60;from_sim&#x60; is synonymous with the term &#x60;mobile originated&#x60;.
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
export interface IpCommandListInstanceEachOptions {
  "sim"?: string;
  "simIccid"?: string;
  "status"?: IpCommandStatus;
  "direction"?: IpCommandDirection;
  "pageSize"?: number;
  callback?: (item: IpCommandInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [sim] The SID or unique name of the Sim resource that IP Command was sent to or from.
 * @property { string } [simIccid] The ICCID of the Sim resource that IP Command was sent to or from.
 * @property { IpCommandStatus } [status] The status of the IP Command. Can be: &#x60;queued&#x60;, &#x60;sent&#x60;, &#x60;received&#x60; or &#x60;failed&#x60;. See the [IP Command Status Values](https://www.twilio.com/docs/wireless/api/ipcommand-resource#status-values) for a description of each.
 * @property { IpCommandDirection } [direction] The direction of the IP Command. Can be &#x60;to_sim&#x60; or &#x60;from_sim&#x60;. The value of &#x60;to_sim&#x60; is synonymous with the term &#x60;mobile terminated&#x60;, and &#x60;from_sim&#x60; is synonymous with the term &#x60;mobile originated&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface IpCommandListInstanceOptions {
  "sim"?: string;
  "simIccid"?: string;
  "status"?: IpCommandStatus;
  "direction"?: IpCommandDirection;
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [sim] The SID or unique name of the Sim resource that IP Command was sent to or from.
 * @property { string } [simIccid] The ICCID of the Sim resource that IP Command was sent to or from.
 * @property { IpCommandStatus } [status] The status of the IP Command. Can be: &#x60;queued&#x60;, &#x60;sent&#x60;, &#x60;received&#x60; or &#x60;failed&#x60;. See the [IP Command Status Values](https://www.twilio.com/docs/wireless/api/ipcommand-resource#status-values) for a description of each.
 * @property { IpCommandDirection } [direction] The direction of the IP Command. Can be &#x60;to_sim&#x60; or &#x60;from_sim&#x60;. The value of &#x60;to_sim&#x60; is synonymous with the term &#x60;mobile terminated&#x60;, and &#x60;from_sim&#x60; is synonymous with the term &#x60;mobile originated&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface IpCommandListInstancePageOptions {
  "sim"?: string;
  "simIccid"?: string;
  "status"?: IpCommandStatus;
  "direction"?: IpCommandDirection;
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface IpCommandContext {


  /**
   * Fetch a IpCommandInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpCommandInstance
   */
  fetch(callback?: (error: Error | null, item?: IpCommandInstance) => any): Promise<IpCommandInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpCommandContextSolution {
  "sid"?: string;
}

export class IpCommandContextImpl implements IpCommandContext {
  protected _solution: IpCommandContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/IpCommands/${sid}`;
  }

  fetch(callback?: any): Promise<IpCommandInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new IpCommandInstance(operationVersion, payload, this._solution.sid));
    

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

interface IpCommandPayload extends IpCommandResource, Page.TwilioResponsePayload {
}

interface IpCommandResource {
  sid?: string | null;
  account_sid?: string | null;
  sim_sid?: string | null;
  sim_iccid?: string | null;
  status?: IpCommandStatus;
  direction?: IpCommandDirection;
  device_ip?: string | null;
  device_port?: number | null;
  payload_type?: IpCommandPayloadType;
  payload?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class IpCommandInstance {
  protected _solution: IpCommandContextSolution;
  protected _context?: IpCommandContext;

  constructor(protected _version: V1, payload: IpCommandPayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.simSid = payload.sim_sid;
    this.simIccid = payload.sim_iccid;
    this.status = payload.status;
    this.direction = payload.direction;
    this.deviceIp = payload.device_ip;
    this.devicePort = deserialize.integer(payload.device_port);
    this.payloadType = payload.payload_type;
    this.payload = payload.payload;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Super SIM that this IP Command was sent to or from
   */
  simSid?: string | null;
  /**
   * The ICCID of the Super SIM that this IP Command was sent to or from
   */
  simIccid?: string | null;
  status?: IpCommandStatus;
  direction?: IpCommandDirection;
  /**
   * The IP address of the device that the IP Command was sent to or received from
   */
  deviceIp?: string | null;
  /**
   * The port that the IP Command either originated from or was sent to
   */
  devicePort?: number | null;
  payloadType?: IpCommandPayloadType;
  /**
   * The payload of the IP Command sent to or from the Super SIM
   */
  payload?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the IP Command resource
   */
  url?: string | null;

  private get _proxy(): IpCommandContext {
    this._context = this._context || new IpCommandContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a IpCommandInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpCommandInstance
   */
  fetch(callback?: (error: Error | null, item?: IpCommandInstance) => any): Promise<IpCommandInstance>
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
      sid: this.sid, 
      accountSid: this.accountSid, 
      simSid: this.simSid, 
      simIccid: this.simIccid, 
      status: this.status, 
      direction: this.direction, 
      deviceIp: this.deviceIp, 
      devicePort: this.devicePort, 
      payloadType: this.payloadType, 
      payload: this.payload, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface IpCommandListInstance {
  (sid: string): IpCommandContext;
  get(sid: string): IpCommandContext;


  /**
   * Create a IpCommandInstance
   *
   * @param { IpCommandListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed IpCommandInstance
   */
  create(params: IpCommandListInstanceCreateOptions, callback?: (error: Error | null, item?: IpCommandInstance) => any): Promise<IpCommandInstance>;
  create(params: any, callback?: any): Promise<IpCommandInstance>



  /**
   * Streams IpCommandInstance records from the API.
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
  each(callback?: (item: IpCommandInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams IpCommandInstance records from the API.
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
   * @param { IpCommandListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: IpCommandListInstanceEachOptions, callback?: (item: IpCommandInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of IpCommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: IpCommandPage) => any): Promise<IpCommandPage>;
  /**
   * Retrieve a single target page of IpCommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: IpCommandPage) => any): Promise<IpCommandPage>;
  getPage(params?: any, callback?: any): Promise<IpCommandPage>;
  /**
   * Lists IpCommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: IpCommandInstance[]) => any): Promise<IpCommandInstance[]>;
  /**
   * Lists IpCommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpCommandListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: IpCommandListInstanceOptions, callback?: (error: Error | null, items: IpCommandInstance[]) => any): Promise<IpCommandInstance[]>;
  list(params?: any, callback?: any): Promise<IpCommandInstance[]>;
  /**
   * Retrieve a single page of IpCommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: IpCommandPage) => any): Promise<IpCommandPage>;
  /**
   * Retrieve a single page of IpCommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { IpCommandListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: IpCommandListInstancePageOptions, callback?: (error: Error | null, items: IpCommandPage) => any): Promise<IpCommandPage>;
  page(params?: any, callback?: any): Promise<IpCommandPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface IpCommandSolution {
}

interface IpCommandListInstanceImpl extends IpCommandListInstance {}
class IpCommandListInstanceImpl implements IpCommandListInstance {
  _version?: V1;
  _solution?: IpCommandSolution;
  _uri?: string;

}

export function IpCommandListInstance(version: V1): IpCommandListInstance {
  const instance = ((sid) => instance.get(sid)) as IpCommandListInstanceImpl;

  instance.get = function get(sid): IpCommandContext {
    return new IpCommandContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/IpCommands`;

  instance.create = function create(params: any, callback?: any): Promise<IpCommandInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["sim"] === null || params["sim"] === undefined) {
      throw new Error('Required parameter "params[\'sim\']" missing.');
    }

    if (params["payload"] === null || params["payload"] === undefined) {
      throw new Error('Required parameter "params[\'payload\']" missing.');
    }

    if (params["devicePort"] === null || params["devicePort"] === undefined) {
      throw new Error('Required parameter "params[\'devicePort\']" missing.');
    }

    const data: any = {};

    data["Sim"] = params["sim"];
    data["Payload"] = params["payload"];
    data["DevicePort"] = params["devicePort"];
    if (params["payloadType"] !== undefined) data["PayloadType"] = params["payloadType"];
    if (params["callbackUrl"] !== undefined) data["CallbackUrl"] = params["callbackUrl"];
    if (params["callbackMethod"] !== undefined) data["CallbackMethod"] = params["callbackMethod"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new IpCommandInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<IpCommandPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["sim"] !== undefined) data["Sim"] = params["sim"];
    if (params["simIccid"] !== undefined) data["SimIccid"] = params["simIccid"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["direction"] !== undefined) data["Direction"] = params["direction"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new IpCommandPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<IpCommandPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new IpCommandPage(this._version, payload, this._solution));
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


export class IpCommandPage extends Page<V1, IpCommandPayload, IpCommandResource, IpCommandInstance> {
/**
* Initialize the IpCommandPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: IpCommandSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of IpCommandInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: IpCommandPayload): IpCommandInstance {
    return new IpCommandInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

