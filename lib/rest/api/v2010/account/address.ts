/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { DependentPhoneNumberListInstance } from "./address/dependentPhoneNumber";




/**
 * Options to pass to update a AddressInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the address. It can be up to 64 characters long.
 * @property { string } [customerName] The name to associate with the address.
 * @property { string } [street] The number and street address of the address.
 * @property { string } [city] The city of the address.
 * @property { string } [region] The state or region of the address.
 * @property { string } [postalCode] The postal code of the address.
 * @property { boolean } [emergencyEnabled] Whether to enable emergency calling on the address. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [autoCorrectAddress] Whether we should automatically correct the address. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;. If empty or &#x60;true&#x60;, we will correct the address you provide if necessary. If &#x60;false&#x60;, we won\\\&#39;t alter the address you provide.
 */
export interface AddressContextUpdateOptions {
  friendlyName?: string;
  customerName?: string;
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  emergencyEnabled?: boolean;
  autoCorrectAddress?: boolean;
}

/**
 * Options to pass to create a AddressInstance
 *
 * @property { string } customerName The name to associate with the new address.
 * @property { string } street The number and street address of the new address.
 * @property { string } city The city of the new address.
 * @property { string } region The state or region of the new address.
 * @property { string } postalCode The postal code of the new address.
 * @property { string } isoCountry The ISO country code of the new address.
 * @property { string } [friendlyName] A descriptive string that you create to describe the new address. It can be up to 64 characters long.
 * @property { boolean } [emergencyEnabled] Whether to enable emergency calling on the new address. Can be: &#x60;true&#x60; or &#x60;false&#x60;.
 * @property { boolean } [autoCorrectAddress] Whether we should automatically correct the address. Can be: &#x60;true&#x60; or &#x60;false&#x60; and the default is &#x60;true&#x60;. If empty or &#x60;true&#x60;, we will correct the address you provide if necessary. If &#x60;false&#x60;, we won\\\&#39;t alter the address you provide.
 */
export interface AddressListInstanceCreateOptions {
  customerName: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  isoCountry: string;
  friendlyName?: string;
  emergencyEnabled?: boolean;
  autoCorrectAddress?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { string } [customerName] The &#x60;customer_name&#x60; of the Address resources to read.
 * @property { string } [friendlyName] The string that identifies the Address resources to read.
 * @property { string } [isoCountry] The ISO country code of the Address resources to read.
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
export interface AddressListInstanceEachOptions {
  customerName?: string;
  friendlyName?: string;
  isoCountry?: string;
  pageSize?: number;
  callback?: (item: AddressInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [customerName] The &#x60;customer_name&#x60; of the Address resources to read.
 * @property { string } [friendlyName] The string that identifies the Address resources to read.
 * @property { string } [isoCountry] The ISO country code of the Address resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AddressListInstanceOptions {
  customerName?: string;
  friendlyName?: string;
  isoCountry?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [customerName] The &#x60;customer_name&#x60; of the Address resources to read.
 * @property { string } [friendlyName] The string that identifies the Address resources to read.
 * @property { string } [isoCountry] The ISO country code of the Address resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AddressListInstancePageOptions {
  customerName?: string;
  friendlyName?: string;
  isoCountry?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface AddressContext {

  dependentPhoneNumbers: DependentPhoneNumberListInstance;

  /**
   * Remove a AddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a AddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AddressInstance
   */
  fetch(callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>


  /**
   * Update a AddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AddressInstance
   */
  update(callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
  /**
   * Update a AddressInstance
   *
   * @param { AddressContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AddressInstance
   */
  update(params: AddressContextUpdateOptions, callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
  update(params?: any, callback?: any): Promise<AddressInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AddressContextSolution {
  accountSid?: string;
  sid?: string;
}

export class AddressContextImpl implements AddressContext {
  protected _solution: AddressContextSolution;
  protected _uri: string;

  protected _dependentPhoneNumbers?: DependentPhoneNumberListInstance;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Addresses/${sid}.json`;
  }

  get dependentPhoneNumbers(): DependentPhoneNumberListInstance {
    this._dependentPhoneNumbers = this._dependentPhoneNumbers || DependentPhoneNumberListInstance(this._version, this._solution.accountSid, this._solution.sid);
    return this._dependentPhoneNumbers;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<AddressInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new AddressInstance(operationVersion, payload, this._solution.accountSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<AddressInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.customerName !== undefined) data['CustomerName'] = params.customerName;
    if (params.street !== undefined) data['Street'] = params.street;
    if (params.city !== undefined) data['City'] = params.city;
    if (params.region !== undefined) data['Region'] = params.region;
    if (params.postalCode !== undefined) data['PostalCode'] = params.postalCode;
    if (params.emergencyEnabled !== undefined) data['EmergencyEnabled'] = serialize.bool(params.emergencyEnabled);
    if (params.autoCorrectAddress !== undefined) data['AutoCorrectAddress'] = serialize.bool(params.autoCorrectAddress);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new AddressInstance(operationVersion, payload, this._solution.accountSid, this._solution.sid));
    

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

interface AddressPayload extends AddressResource, Page.TwilioResponsePayload {
}

interface AddressResource {
  account_sid?: string | null;
  city?: string | null;
  customer_name?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  iso_country?: string | null;
  postal_code?: string | null;
  region?: string | null;
  sid?: string | null;
  street?: string | null;
  uri?: string | null;
  emergency_enabled?: boolean | null;
  validated?: boolean | null;
  verified?: boolean | null;
}

export class AddressInstance {
  protected _solution: AddressContextSolution;
  protected _context?: AddressContext;

  constructor(protected _version: V2010, payload: AddressPayload, accountSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.city = payload.city;
    this.customerName = payload.customer_name;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.isoCountry = payload.iso_country;
    this.postalCode = payload.postal_code;
    this.region = payload.region;
    this.sid = payload.sid;
    this.street = payload.street;
    this.uri = payload.uri;
    this.emergencyEnabled = payload.emergency_enabled;
    this.validated = payload.validated;
    this.verified = payload.verified;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that is responsible for the resource
   */
  accountSid?: string | null;
  /**
   * The city in which the address is located
   */
  city?: string | null;
  /**
   * The name associated with the address
   */
  customerName?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The ISO country code of the address
   */
  isoCountry?: string | null;
  /**
   * The postal code of the address
   */
  postalCode?: string | null;
  /**
   * The state or region of the address
   */
  region?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The number and street address of the address
   */
  street?: string | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  /**
   * Whether emergency calling has been enabled on this number
   */
  emergencyEnabled?: boolean | null;
  /**
   * Whether the address has been validated to comply with local regulation
   */
  validated?: boolean | null;
  /**
   * Whether the address has been verified to comply with regulation
   */
  verified?: boolean | null;

  private get _proxy(): AddressContext {
    this._context = this._context || new AddressContextImpl(this._version, this._solution.accountSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a AddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a AddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AddressInstance
   */
  fetch(callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AddressInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AddressInstance
   */
  update(callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
  /**
   * Update a AddressInstance
   *
   * @param { AddressContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AddressInstance
   */
  update(params: AddressContextUpdateOptions, callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
  update(params?: any, callback?: any): Promise<AddressInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the dependentPhoneNumbers.
   */
  dependentPhoneNumbers(): DependentPhoneNumberListInstance {
    return this._proxy.dependentPhoneNumbers;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      city: this.city, 
      customerName: this.customerName, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      friendlyName: this.friendlyName, 
      isoCountry: this.isoCountry, 
      postalCode: this.postalCode, 
      region: this.region, 
      sid: this.sid, 
      street: this.street, 
      uri: this.uri, 
      emergencyEnabled: this.emergencyEnabled, 
      validated: this.validated, 
      verified: this.verified
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface AddressListInstance {
  (sid: string): AddressContext;
  get(sid: string): AddressContext;


  /**
   * Create a AddressInstance
   *
   * @param { AddressListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AddressInstance
   */
  create(params: AddressListInstanceCreateOptions, callback?: (error: Error | null, item?: AddressInstance) => any): Promise<AddressInstance>;
  create(params: any, callback?: any): Promise<AddressInstance>



  /**
   * Streams AddressInstance records from the API.
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
  each(callback?: (item: AddressInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AddressInstance records from the API.
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
   * @param { AddressListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: AddressListInstanceEachOptions, callback?: (item: AddressInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
  /**
   * Retrieve a single target page of AddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
  getPage(params?: any, callback?: any): Promise<AddressPage>;
  /**
   * Lists AddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AddressInstance[]) => any): Promise<AddressInstance[]>;
  /**
   * Lists AddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AddressListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: AddressListInstanceOptions, callback?: (error: Error | null, items: AddressInstance[]) => any): Promise<AddressInstance[]>;
  list(params?: any, callback?: any): Promise<AddressInstance[]>;
  /**
   * Retrieve a single page of AddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
  /**
   * Retrieve a single page of AddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AddressListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: AddressListInstancePageOptions, callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
  page(params?: any, callback?: any): Promise<AddressPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AddressSolution {
  accountSid?: string;
}

interface AddressListInstanceImpl extends AddressListInstance {}
class AddressListInstanceImpl implements AddressListInstance {
  _version?: V2010;
  _solution?: AddressSolution;
  _uri?: string;

}

export function AddressListInstance(version: V2010, accountSid: string): AddressListInstance {
  const instance = ((sid) => instance.get(sid)) as AddressListInstanceImpl;

  instance.get = function get(sid): AddressContext {
    return new AddressContextImpl(version, accountSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Addresses.json`;

  instance.create = function create(params: any, callback?: any): Promise<AddressInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.customerName === null || params.customerName === undefined) {
      throw new Error('Required parameter "params.customerName" missing.');
    }

    if (params.street === null || params.street === undefined) {
      throw new Error('Required parameter "params.street" missing.');
    }

    if (params.city === null || params.city === undefined) {
      throw new Error('Required parameter "params.city" missing.');
    }

    if (params.region === null || params.region === undefined) {
      throw new Error('Required parameter "params.region" missing.');
    }

    if (params.postalCode === null || params.postalCode === undefined) {
      throw new Error('Required parameter "params.postalCode" missing.');
    }

    if (params.isoCountry === null || params.isoCountry === undefined) {
      throw new Error('Required parameter "params.isoCountry" missing.');
    }

    const data: any = {};

    data['CustomerName'] = params.customerName;
    data['Street'] = params.street;
    data['City'] = params.city;
    data['Region'] = params.region;
    data['PostalCode'] = params.postalCode;
    data['IsoCountry'] = params.isoCountry;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.emergencyEnabled !== undefined) data['EmergencyEnabled'] = serialize.bool(params.emergencyEnabled);
    if (params.autoCorrectAddress !== undefined) data['AutoCorrectAddress'] = serialize.bool(params.autoCorrectAddress);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new AddressInstance(operationVersion, payload, this._solution.accountSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<AddressPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.customerName !== undefined) data['CustomerName'] = params.customerName;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.isoCountry !== undefined) data['IsoCountry'] = params.isoCountry;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new AddressPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<AddressPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new AddressPage(this._version, payload, this._solution));
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


export class AddressPage extends Page<V2010, AddressPayload, AddressResource, AddressInstance> {
/**
* Initialize the AddressPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: AddressSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of AddressInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: AddressPayload): AddressInstance {
    return new AddressInstance(
    this._version,
    payload,
        this._solution.accountSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

