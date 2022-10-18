/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Notify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

type BindingBindingType = 'apn'|'gcm'|'sms'|'fcm'|'facebook-messenger'|'alexa';


/**
 * Options to pass to create a BindingInstance
 *
 * @property { string } identity The &#x60;identity&#x60; value that uniquely identifies the new resource\\\&#39;s [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/notify/api/service-resource). Up to 20 Bindings can be created for the same Identity in a given Service.
 * @property { BindingBindingType } bindingType 
 * @property { string } address The channel-specific address. For APNS, the device token. For FCM and GCM, the registration token. For SMS, a phone number in E.164 format. For Facebook Messenger, the Messenger ID of the user or a phone number in E.164 format.
 * @property { Array<string> } [tag] A tag that can be used to select the Bindings to notify. Repeat this parameter to specify more than one tag, up to a total of 20 tags.
 * @property { string } [notificationProtocolVersion] The protocol version to use to send the notification. This defaults to the value of &#x60;default_xxxx_notification_protocol_version&#x60; for the protocol in the [Service](https://www.twilio.com/docs/notify/api/service-resource). The current version is &#x60;\\\&quot;3\\\&quot;&#x60; for &#x60;apn&#x60;, &#x60;fcm&#x60;, and &#x60;gcm&#x60; type Bindings. The parameter is not applicable to &#x60;sms&#x60; and &#x60;facebook-messenger&#x60; type Bindings as the data format is fixed.
 * @property { string } [credentialSid] The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) resource to be used to send notifications to this Binding. If present, this overrides the Credential specified in the Service resource. Applies to only &#x60;apn&#x60;, &#x60;fcm&#x60;, and &#x60;gcm&#x60; type Bindings.
 * @property { string } [endpoint] Deprecated.
 */
export interface BindingListInstanceCreateOptions {
  identity: string;
  bindingType: BindingBindingType;
  address: string;
  tag?: Array<string>;
  notificationProtocolVersion?: string;
  credentialSid?: string;
  endpoint?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;.
 * @property { string } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;.
 * @property { Array<string> } [identity] The [User](https://www.twilio.com/docs/chat/rest/user-resource)\&#39;s &#x60;identity&#x60; value of the resources to read.
 * @property { Array<string> } [tag] Only list Bindings that have all of the specified Tags. The following implicit tags are available: &#x60;all&#x60;, &#x60;apn&#x60;, &#x60;fcm&#x60;, &#x60;gcm&#x60;, &#x60;sms&#x60;, &#x60;facebook-messenger&#x60;. Up to 5 tags are allowed.
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
export interface BindingListInstanceEachOptions {
  startDate?: string;
  endDate?: string;
  identity?: Array<string>;
  tag?: Array<string>;
  pageSize?: number;
  callback?: (item: BindingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;.
 * @property { string } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;.
 * @property { Array<string> } [identity] The [User](https://www.twilio.com/docs/chat/rest/user-resource)\&#39;s &#x60;identity&#x60; value of the resources to read.
 * @property { Array<string> } [tag] Only list Bindings that have all of the specified Tags. The following implicit tags are available: &#x60;all&#x60;, &#x60;apn&#x60;, &#x60;fcm&#x60;, &#x60;gcm&#x60;, &#x60;sms&#x60;, &#x60;facebook-messenger&#x60;. Up to 5 tags are allowed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface BindingListInstanceOptions {
  startDate?: string;
  endDate?: string;
  identity?: Array<string>;
  tag?: Array<string>;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;.
 * @property { string } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as &#x60;YYYY-MM-DD&#x60;.
 * @property { Array<string> } [identity] The [User](https://www.twilio.com/docs/chat/rest/user-resource)\&#39;s &#x60;identity&#x60; value of the resources to read.
 * @property { Array<string> } [tag] Only list Bindings that have all of the specified Tags. The following implicit tags are available: &#x60;all&#x60;, &#x60;apn&#x60;, &#x60;fcm&#x60;, &#x60;gcm&#x60;, &#x60;sms&#x60;, &#x60;facebook-messenger&#x60;. Up to 5 tags are allowed.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface BindingListInstancePageOptions {
  startDate?: string;
  endDate?: string;
  identity?: Array<string>;
  tag?: Array<string>;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface BindingListInstance {
  (sid: string): BindingContext;
  get(sid: string): BindingContext;


  /**
   * Create a BindingInstance
   *
   * @param { BindingListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BindingInstance
   */
  create(params: BindingListInstanceCreateOptions, callback?: (error: Error | null, item?: BindingInstance) => any): Promise<BindingInstance>;
  create(params: any, callback?: any): Promise<BindingInstance>



  /**
   * Streams BindingInstance records from the API.
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
  each(callback?: (item: BindingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams BindingInstance records from the API.
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
   * @param { BindingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: BindingListInstanceEachOptions, callback?: (item: BindingInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  getPage(params?: any, callback?: any): Promise<BindingPage>;
  /**
   * Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: BindingInstance[]) => any): Promise<BindingInstance[]>;
  /**
   * Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BindingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: BindingListInstanceOptions, callback?: (error: Error | null, items: BindingInstance[]) => any): Promise<BindingInstance[]>;
  list(params?: any, callback?: any): Promise<BindingInstance[]>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BindingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: BindingListInstancePageOptions, callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  page(params?: any, callback?: any): Promise<BindingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface BindingListInstanceImpl extends BindingListInstance {}
class BindingListInstanceImpl implements BindingListInstance {
  _version?: V1;
  _solution?: BindingSolution;
  _uri?: string;

}

export function BindingListInstance(version: V1, serviceSid: string): BindingListInstance {
  const instance = ((sid) => instance.get(sid)) as BindingListInstanceImpl;

  instance.get = function get(sid): BindingContext {
    return new BindingContextImpl(version, serviceSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Bindings`;

  instance.create = function create(params: any, callback?: any): Promise<BindingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.identity === null || params.identity === undefined) {
      throw new Error('Required parameter "params.identity" missing.');
    }

    if (params.bindingType === null || params.bindingType === undefined) {
      throw new Error('Required parameter "params.bindingType" missing.');
    }

    if (params.address === null || params.address === undefined) {
      throw new Error('Required parameter "params.address" missing.');
    }

    const data: any = {};

    data['Identity'] = params.identity;
    data['BindingType'] = params.bindingType;
    data['Address'] = params.address;
    if (params.tag !== undefined) data['Tag'] = serialize.map(params.tag, ((e) => e));
    if (params.notificationProtocolVersion !== undefined) data['NotificationProtocolVersion'] = params.notificationProtocolVersion;
    if (params.credentialSid !== undefined) data['CredentialSid'] = params.credentialSid;
    if (params.endpoint !== undefined) data['Endpoint'] = params.endpoint;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new BindingInstance(operationVersion, payload, this._solution.serviceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<BindingPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.startDate !== undefined) data['StartDate'] = serialize.iso8601Date(params.startDate);
    if (params.endDate !== undefined) data['EndDate'] = serialize.iso8601Date(params.endDate);
    if (params.identity !== undefined) data['Identity'] = serialize.map(params.identity, ((e) => e));
    if (params.tag !== undefined) data['Tag'] = serialize.map(params.tag, ((e) => e));
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new BindingPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<BindingPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new BindingPage(this._version, payload, this._solution));
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


export interface BindingContext {


  /**
   * Remove a BindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: BindingInstance) => any): Promise<boolean>


  /**
   * Fetch a BindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BindingInstance
   */
  fetch(callback?: (error: Error | null, item?: BindingInstance) => any): Promise<BindingInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class BindingContextImpl implements BindingContext {
  protected _solution: BindingSolution;
  protected _uri: string;


  constructor(protected _version: V1, serviceSid: string, sid: string) {
    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Bindings/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<BindingInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new BindingInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

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

interface BindingPayload extends BindingResource, Page.TwilioResponsePayload {
}

interface BindingResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  credential_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  notification_protocol_version?: string | null;
  endpoint?: string | null;
  identity?: string | null;
  binding_type?: string | null;
  address?: string | null;
  tags?: Array<string> | null;
  url?: string | null;
  links?: object | null;
}

export class BindingInstance {
  protected _solution: BindingSolution;
  protected _context?: BindingContext;

  constructor(protected _version: V1, payload: BindingPayload, serviceSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.credentialSid = payload.credential_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.notificationProtocolVersion = payload.notification_protocol_version;
    this.endpoint = payload.endpoint;
    this.identity = payload.identity;
    this.bindingType = payload.binding_type;
    this.address = payload.address;
    this.tags = payload.tags;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
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
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Credential resource to be used to send notifications to this Binding
   */
  credentialSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The protocol version to use to send the notification
   */
  notificationProtocolVersion?: string | null;
  /**
   * Deprecated
   */
  endpoint?: string | null;
  /**
   * The `identity` value that identifies the new resource\'s User
   */
  identity?: string | null;
  /**
   * The type of the Binding
   */
  bindingType?: string | null;
  /**
   * The channel-specific address
   */
  address?: string | null;
  /**
   * The list of tags associated with this Binding
   */
  tags?: Array<string> | null;
  /**
   * The absolute URL of the Binding resource
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): BindingContext {
    this._context = this._context || new BindingContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a BindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: BindingInstance) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a BindingInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BindingInstance
   */
  fetch(callback?: (error: Error | null, item?: BindingInstance) => any): Promise<BindingInstance>
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
      serviceSid: this.serviceSid, 
      credentialSid: this.credentialSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      notificationProtocolVersion: this.notificationProtocolVersion, 
      endpoint: this.endpoint, 
      identity: this.identity, 
      bindingType: this.bindingType, 
      address: this.address, 
      tags: this.tags, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface BindingSolution {
  serviceSid?: string;
  sid?: string;
}

export class BindingPage extends Page<V1, BindingPayload, BindingResource, BindingInstance> {
  /**
   * Initialize the BindingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: BindingSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BindingPayload): BindingInstance {
    return new BindingInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

