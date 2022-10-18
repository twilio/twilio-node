/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Wireless
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

type CommandCommandMode = 'text'|'binary';

type CommandStatus = 'queued'|'sent'|'delivered'|'received'|'failed';

type CommandDirection = 'from_sim'|'to_sim';

type CommandTransport = 'sms'|'ip';


/**
 * Options to pass to create a CommandInstance
 *
 * @property { string } command The message body of the Command. Can be plain text in text mode or a Base64 encoded byte string in binary mode.
 * @property { string } [sim] The &#x60;sid&#x60; or &#x60;unique_name&#x60; of the [SIM](https://www.twilio.com/docs/wireless/api/sim-resource) to send the Command to.
 * @property { string } [callbackMethod] The HTTP method we use to call &#x60;callback_url&#x60;. Can be: &#x60;POST&#x60; or &#x60;GET&#x60;, and the default is &#x60;POST&#x60;.
 * @property { string } [callbackUrl] The URL we call using the &#x60;callback_url&#x60; when the Command has finished sending, whether the command was delivered or it failed.
 * @property { CommandCommandMode } [commandMode] 
 * @property { string } [includeSid] Whether to include the SID of the command in the message body. Can be: &#x60;none&#x60;, &#x60;start&#x60;, or &#x60;end&#x60;, and the default behavior is &#x60;none&#x60;. When sending a Command to a SIM in text mode, we can automatically include the SID of the Command in the message body, which could be used to ensure that the device does not process the same Command more than once.  A value of &#x60;start&#x60; will prepend the message with the Command SID, and &#x60;end&#x60; will append it to the end, separating the Command SID from the message body with a space. The length of the Command SID is included in the 160 character limit so the SMS body must be 128 characters or less before the Command SID is included.
 * @property { boolean } [deliveryReceiptRequested] Whether to request delivery receipt from the recipient. For Commands that request delivery receipt, the Command state transitions to \\\&#39;delivered\\\&#39; once the server has received a delivery receipt from the device. The default value is &#x60;true&#x60;.
 */
export interface CommandListInstanceCreateOptions {
  command: string;
  sim?: string;
  callbackMethod?: string;
  callbackUrl?: string;
  commandMode?: CommandCommandMode;
  includeSid?: string;
  deliveryReceiptRequested?: boolean;
}
/**
 * Options to pass to each
 *
 * @property { string } [sim] The &#x60;sid&#x60; or &#x60;unique_name&#x60; of the [Sim resources](https://www.twilio.com/docs/wireless/api/sim-resource) to read.
 * @property { CommandStatus } [status] The status of the resources to read. Can be: &#x60;queued&#x60;, &#x60;sent&#x60;, &#x60;delivered&#x60;, &#x60;received&#x60;, or &#x60;failed&#x60;.
 * @property { CommandDirection } [direction] Only return Commands with this direction value.
 * @property { CommandTransport } [transport] Only return Commands with this transport value. Can be: &#x60;sms&#x60; or &#x60;ip&#x60;.
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
export interface CommandListInstanceEachOptions {
  sim?: string;
  status?: CommandStatus;
  direction?: CommandDirection;
  transport?: CommandTransport;
  pageSize?: number;
  callback?: (item: CommandInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [sim] The &#x60;sid&#x60; or &#x60;unique_name&#x60; of the [Sim resources](https://www.twilio.com/docs/wireless/api/sim-resource) to read.
 * @property { CommandStatus } [status] The status of the resources to read. Can be: &#x60;queued&#x60;, &#x60;sent&#x60;, &#x60;delivered&#x60;, &#x60;received&#x60;, or &#x60;failed&#x60;.
 * @property { CommandDirection } [direction] Only return Commands with this direction value.
 * @property { CommandTransport } [transport] Only return Commands with this transport value. Can be: &#x60;sms&#x60; or &#x60;ip&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface CommandListInstanceOptions {
  sim?: string;
  status?: CommandStatus;
  direction?: CommandDirection;
  transport?: CommandTransport;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [sim] The &#x60;sid&#x60; or &#x60;unique_name&#x60; of the [Sim resources](https://www.twilio.com/docs/wireless/api/sim-resource) to read.
 * @property { CommandStatus } [status] The status of the resources to read. Can be: &#x60;queued&#x60;, &#x60;sent&#x60;, &#x60;delivered&#x60;, &#x60;received&#x60;, or &#x60;failed&#x60;.
 * @property { CommandDirection } [direction] Only return Commands with this direction value.
 * @property { CommandTransport } [transport] Only return Commands with this transport value. Can be: &#x60;sms&#x60; or &#x60;ip&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface CommandListInstancePageOptions {
  sim?: string;
  status?: CommandStatus;
  direction?: CommandDirection;
  transport?: CommandTransport;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface CommandContext {


  /**
   * Remove a CommandInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a CommandInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CommandInstance
   */
  fetch(callback?: (error: Error | null, item?: CommandInstance) => any): Promise<CommandInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class CommandContextImpl implements CommandContext {
  protected _solution: CommandSolution;
  protected _uri: string;


  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Commands/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<CommandInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new CommandInstance(operationVersion, payload, this._solution.sid));
    

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

interface CommandPayload extends CommandResource, Page.TwilioResponsePayload {
}

interface CommandResource {
  sid?: string | null;
  account_sid?: string | null;
  sim_sid?: string | null;
  command?: string | null;
  command_mode?: CommandCommandMode;
  transport?: CommandTransport;
  delivery_receipt_requested?: boolean | null;
  status?: CommandStatus;
  direction?: CommandDirection;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class CommandInstance {
  protected _solution: CommandSolution;
  protected _context?: CommandContext;

  constructor(protected _version: V1, payload: CommandPayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.simSid = payload.sim_sid;
    this.command = payload.command;
    this.commandMode = payload.command_mode;
    this.transport = payload.transport;
    this.deliveryReceiptRequested = payload.delivery_receipt_requested;
    this.status = payload.status;
    this.direction = payload.direction;
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
   * The SID of the Sim resource that the Command was sent to or from
   */
  simSid?: string | null;
  /**
   * The message being sent to or from the SIM
   */
  command?: string | null;
  commandMode?: CommandCommandMode;
  transport?: CommandTransport;
  /**
   * Whether to request a delivery receipt
   */
  deliveryReceiptRequested?: boolean | null;
  status?: CommandStatus;
  direction?: CommandDirection;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated format
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): CommandContext {
    this._context = this._context || new CommandContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a CommandInstance
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
   * Fetch a CommandInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CommandInstance
   */
  fetch(callback?: (error: Error | null, item?: CommandInstance) => any): Promise<CommandInstance>
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
      command: this.command, 
      commandMode: this.commandMode, 
      transport: this.transport, 
      deliveryReceiptRequested: this.deliveryReceiptRequested, 
      status: this.status, 
      direction: this.direction, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface CommandSolution {
  sid?: string;
}

export class CommandPage extends Page<V1, CommandPayload, CommandResource, CommandInstance> {
  /**
   * Initialize the CommandPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CommandSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CommandInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CommandPayload): CommandInstance {
    return new CommandInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface CommandListInstance {
  (sid: string): CommandContext;
  get(sid: string): CommandContext;


  /**
   * Create a CommandInstance
   *
   * @param { CommandListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CommandInstance
   */
  create(params: CommandListInstanceCreateOptions, callback?: (error: Error | null, item?: CommandInstance) => any): Promise<CommandInstance>;
  create(params: any, callback?: any): Promise<CommandInstance>



  /**
   * Streams CommandInstance records from the API.
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
  each(callback?: (item: CommandInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams CommandInstance records from the API.
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
   * @param { CommandListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: CommandListInstanceEachOptions, callback?: (item: CommandInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
  /**
   * Retrieve a single target page of CommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
  getPage(params?: any, callback?: any): Promise<CommandPage>;
  /**
   * Lists CommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: CommandInstance[]) => any): Promise<CommandInstance[]>;
  /**
   * Lists CommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CommandListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: CommandListInstanceOptions, callback?: (error: Error | null, items: CommandInstance[]) => any): Promise<CommandInstance[]>;
  list(params?: any, callback?: any): Promise<CommandInstance[]>;
  /**
   * Retrieve a single page of CommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
  /**
   * Retrieve a single page of CommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CommandListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: CommandListInstancePageOptions, callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
  page(params?: any, callback?: any): Promise<CommandPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface CommandListInstanceImpl extends CommandListInstance {}
class CommandListInstanceImpl implements CommandListInstance {
  _version?: V1;
  _solution?: CommandSolution;
  _uri?: string;

}

export function CommandListInstance(version: V1): CommandListInstance {
  const instance = ((sid) => instance.get(sid)) as CommandListInstanceImpl;

  instance.get = function get(sid): CommandContext {
    return new CommandContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Commands`;

  instance.create = function create(params: any, callback?: any): Promise<CommandInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.command === null || params.command === undefined) {
      throw new Error('Required parameter "params.command" missing.');
    }

    const data: any = {};

    data['Command'] = params.command;
    if (params.sim !== undefined) data['Sim'] = params.sim;
    if (params.callbackMethod !== undefined) data['CallbackMethod'] = params.callbackMethod;
    if (params.callbackUrl !== undefined) data['CallbackUrl'] = params.callbackUrl;
    if (params.commandMode !== undefined) data['CommandMode'] = params.commandMode;
    if (params.includeSid !== undefined) data['IncludeSid'] = params.includeSid;
    if (params.deliveryReceiptRequested !== undefined) data['DeliveryReceiptRequested'] = serialize.bool(params.deliveryReceiptRequested);

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new CommandInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<CommandPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.sim !== undefined) data['Sim'] = params.sim;
    if (params.status !== undefined) data['Status'] = params.status;
    if (params.direction !== undefined) data['Direction'] = params.direction;
    if (params.transport !== undefined) data['Transport'] = params.transport;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new CommandPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<CommandPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new CommandPage(this._version, payload, this._solution));
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

