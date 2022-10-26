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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { FieldListInstance } from "./task/field";
import { SampleListInstance } from "./task/sample";
import { TaskStatisticsListInstance } from "./task/taskStatistics";
import { TaskActionsListInstance } from "./task/taskActions";




/**
 * Options to pass to update a TaskInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the resource. This value must be 64 characters or less in length and be unique. It can be used as an alternative to the &#x60;sid&#x60; in the URL path to address the resource.
 * @property { any } [actions] The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task.
 * @property { string } [actionsUrl] The URL from which the Assistant can fetch actions.
 */
export interface TaskContextUpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
  actions?: any;
  actionsUrl?: string;
}

/**
 * Options to pass to create a TaskInstance
 *
 * @property { string } uniqueName An application-defined string that uniquely identifies the new resource. It can be used as an alternative to the &#x60;sid&#x60; in the URL path to address the resource. This value must be unique and 64 characters or less in length.
 * @property { string } [friendlyName] A descriptive string that you create to describe the new resource. It is not unique and can be up to 255 characters long.
 * @property { any } [actions] The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task. It is optional and not unique.
 * @property { string } [actionsUrl] The URL from which the Assistant can fetch actions.
 */
export interface TaskListInstanceCreateOptions {
  uniqueName: string;
  friendlyName?: string;
  actions?: any;
  actionsUrl?: string;
}
/**
 * Options to pass to each
 *
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
export interface TaskListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: TaskInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TaskListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TaskListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface TaskContext {

  fields: FieldListInstance;
  samples: SampleListInstance;
  statistics: TaskStatisticsListInstance;
  taskActions: TaskActionsListInstance;

  /**
   * Remove a TaskInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a TaskInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskInstance
   */
  fetch(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>


  /**
   * Update a TaskInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskInstance
   */
  update(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
  /**
   * Update a TaskInstance
   *
   * @param { TaskContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskInstance
   */
  update(params: TaskContextUpdateOptions, callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
  update(params?: any, callback?: any): Promise<TaskInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskContextSolution {
  assistantSid?: string;
  sid?: string;
}

export class TaskContextImpl implements TaskContext {
  protected _solution: TaskContextSolution;
  protected _uri: string;

  protected _fields?: FieldListInstance;
  protected _samples?: SampleListInstance;
  protected _statistics?: TaskStatisticsListInstance;
  protected _taskActions?: TaskActionsListInstance;

  constructor(protected _version: V1, assistantSid: string, sid: string) {
    this._solution = { assistantSid, sid };
    this._uri = `/Assistants/${assistantSid}/Tasks/${sid}`;
  }

  get fields(): FieldListInstance {
    this._fields = this._fields || FieldListInstance(this._version, this._solution.assistantSid, this._solution.sid);
    return this._fields;
  }

  get samples(): SampleListInstance {
    this._samples = this._samples || SampleListInstance(this._version, this._solution.assistantSid, this._solution.sid);
    return this._samples;
  }

  get statistics(): TaskStatisticsListInstance {
    this._statistics = this._statistics || TaskStatisticsListInstance(this._version, this._solution.assistantSid, this._solution.sid);
    return this._statistics;
  }

  get taskActions(): TaskActionsListInstance {
    this._taskActions = this._taskActions || TaskActionsListInstance(this._version, this._solution.assistantSid, this._solution.sid);
    return this._taskActions;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<TaskInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new TaskInstance(operationVersion, payload, this._solution.assistantSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<TaskInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.uniqueName !== undefined) data['UniqueName'] = params.uniqueName;
    if (params.actions !== undefined) data['Actions'] = params.actions;
    if (params.actionsUrl !== undefined) data['ActionsUrl'] = params.actionsUrl;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new TaskInstance(operationVersion, payload, this._solution.assistantSid, this._solution.sid));
    

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

interface TaskPayload extends TaskResource, Page.TwilioResponsePayload {
}

interface TaskResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  friendly_name?: string | null;
  links?: object | null;
  assistant_sid?: string | null;
  sid?: string | null;
  unique_name?: string | null;
  actions_url?: string | null;
  url?: string | null;
}

export class TaskInstance {
  protected _solution: TaskContextSolution;
  protected _context?: TaskContext;

  constructor(protected _version: V1, payload: TaskPayload, assistantSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.links = payload.links;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.actionsUrl = payload.actions_url;
    this.url = payload.url;

    this._solution = { assistantSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * A list of the URLs of related resources
   */
  links?: object | null;
  /**
   * The SID of the Assistant that is the parent of the resource
   */
  assistantSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The URL from which the Assistant can fetch actions
   */
  actionsUrl?: string | null;
  /**
   * The absolute URL of the Task resource
   */
  url?: string | null;

  private get _proxy(): TaskContext {
    this._context = this._context || new TaskContextImpl(this._version, this._solution.assistantSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a TaskInstance
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
   * Fetch a TaskInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskInstance
   */
  fetch(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TaskInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskInstance
   */
  update(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
  /**
   * Update a TaskInstance
   *
   * @param { TaskContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskInstance
   */
  update(params: TaskContextUpdateOptions, callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
  update(params?: any, callback?: any): Promise<TaskInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the fields.
   */
  fields(): FieldListInstance {
    return this._proxy.fields;
  }

  /**
   * Access the samples.
   */
  samples(): SampleListInstance {
    return this._proxy.samples;
  }

  /**
   * Access the statistics.
   */
  statistics(): TaskStatisticsListInstance {
    return this._proxy.statistics;
  }

  /**
   * Access the taskActions.
   */
  taskActions(): TaskActionsListInstance {
    return this._proxy.taskActions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      friendlyName: this.friendlyName, 
      links: this.links, 
      assistantSid: this.assistantSid, 
      sid: this.sid, 
      uniqueName: this.uniqueName, 
      actionsUrl: this.actionsUrl, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface TaskListInstance {
  (sid: string): TaskContext;
  get(sid: string): TaskContext;


  /**
   * Create a TaskInstance
   *
   * @param { TaskListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TaskInstance
   */
  create(params: TaskListInstanceCreateOptions, callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
  create(params: any, callback?: any): Promise<TaskInstance>



  /**
   * Streams TaskInstance records from the API.
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
  each(callback?: (item: TaskInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams TaskInstance records from the API.
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
   * @param { TaskListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: TaskListInstanceEachOptions, callback?: (item: TaskInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
  /**
   * Retrieve a single target page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
  getPage(params?: any, callback?: any): Promise<TaskPage>;
  /**
   * Lists TaskInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: TaskInstance[]) => any): Promise<TaskInstance[]>;
  /**
   * Lists TaskInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: TaskListInstanceOptions, callback?: (error: Error | null, items: TaskInstance[]) => any): Promise<TaskInstance[]>;
  list(params?: any, callback?: any): Promise<TaskInstance[]>;
  /**
   * Retrieve a single page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
  /**
   * Retrieve a single page of TaskInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TaskListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: TaskListInstancePageOptions, callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
  page(params?: any, callback?: any): Promise<TaskPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskSolution {
  assistantSid?: string;
}

interface TaskListInstanceImpl extends TaskListInstance {}
class TaskListInstanceImpl implements TaskListInstance {
  _version?: V1;
  _solution?: TaskSolution;
  _uri?: string;

}

export function TaskListInstance(version: V1, assistantSid: string): TaskListInstance {
  const instance = ((sid) => instance.get(sid)) as TaskListInstanceImpl;

  instance.get = function get(sid): TaskContext {
    return new TaskContextImpl(version, assistantSid, sid);
  }

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/Tasks`;

  instance.create = function create(params: any, callback?: any): Promise<TaskInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.uniqueName === null || params.uniqueName === undefined) {
      throw new Error('Required parameter "params.uniqueName" missing.');
    }

    const data: any = {};

    data['UniqueName'] = params.uniqueName;
    if (params.friendlyName !== undefined) data['FriendlyName'] = params.friendlyName;
    if (params.actions !== undefined) data['Actions'] = params.actions;
    if (params.actionsUrl !== undefined) data['ActionsUrl'] = params.actionsUrl;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new TaskInstance(operationVersion, payload, this._solution.assistantSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<TaskPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TaskPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<TaskPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new TaskPage(this._version, payload, this._solution));
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


export class TaskPage extends Page<V1, TaskPayload, TaskResource, TaskInstance> {
/**
* Initialize the TaskPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: TaskSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of TaskInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: TaskPayload): TaskInstance {
    return new TaskInstance(
    this._version,
    payload,
        this._solution.assistantSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

