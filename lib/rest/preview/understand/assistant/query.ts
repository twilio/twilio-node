/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");


/**
 * Options to pass to update a QueryInstance
 *
 * @property { string } [sampleSid] An optional reference to the Sample created from this query.
 * @property { string } [status] A string that described the query status. The values can be: pending_review, reviewed, discarded
 */
export interface QueryContextUpdateOptions {
  sampleSid?: string;
  status?: string;
}


/**
 * Options to pass to create a QueryInstance
 *
 * @property { string } language An ISO language-country string of the sample.
 * @property { string } query A user-provided string that uniquely identifies this resource as an alternative to the sid. It can be up to 2048 characters long.
 * @property { string } [tasks] Constraints the query to a set of tasks. Useful when you need to constrain the paths the user can take. Tasks should be comma separated *task-unique-name-1*, *task-unique-name-2*
 * @property { string } [modelBuild] The Model Build Sid or unique name of the Model Build to be queried.
 * @property { string } [field] Constraints the query to a given Field with an task. Useful when you know the Field you are expecting. It accepts one field in the format *task-unique-name-1*:*field-unique-name*
 */
export interface QueryListInstanceCreateOptions {
  language: string;
  query: string;
  tasks?: string;
  modelBuild?: string;
  field?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [language] An ISO language-country string of the sample.
 * @property { string } [modelBuild] The Model Build Sid or unique name of the Model Build to be queried.
 * @property { string } [status] A string that described the query status. The values can be: pending_review, reviewed, discarded
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
export interface QueryListInstanceEachOptions {
  language?: string;
  modelBuild?: string;
  status?: string;
  pageSize?: number;
  callback?: (item: QueryInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [language] An ISO language-country string of the sample.
 * @property { string } [modelBuild] The Model Build Sid or unique name of the Model Build to be queried.
 * @property { string } [status] A string that described the query status. The values can be: pending_review, reviewed, discarded
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface QueryListInstanceOptions {
  language?: string;
  modelBuild?: string;
  status?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [language] An ISO language-country string of the sample.
 * @property { string } [modelBuild] The Model Build Sid or unique name of the Model Build to be queried.
 * @property { string } [status] A string that described the query status. The values can be: pending_review, reviewed, discarded
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface QueryListInstancePageOptions {
  language?: string;
  modelBuild?: string;
  status?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface QueryContext {


  /**
   * Remove a QueryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<boolean>


  /**
   * Fetch a QueryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  fetch(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>


  /**
   * Update a QueryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  update(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
  /**
   * Update a QueryInstance
   *
   * @param { QueryContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  update(params: QueryContextUpdateOptions, callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
  update(params?: any, callback?: any): Promise<QueryInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class QueryContextImpl implements QueryContext {
  protected _solution: QuerySolution;
  protected _uri: string;


  constructor(protected _version: Understand, assistantSid: string, sid: string) {
    this._solution = { assistantSid, sid };
    this._uri = `/Assistants/${assistantSid}/Queries/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  fetch(callback?: any): Promise<QueryInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new QueryInstance(operationVersion, payload, this._solution.assistantSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



  }

  update(params?: any, callback?: any): Promise<QueryInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.sampleSid !== undefined) data['SampleSid'] = params.sampleSid;
    if (params.status !== undefined) data['Status'] = params.status;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new QueryInstance(operationVersion, payload, this._solution.assistantSid, this._solution.sid));
    

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

interface QueryPayload extends QueryResource, Page.TwilioResponsePayload {
}

interface QueryResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  results?: any | null;
  language?: string | null;
  model_build_sid?: string | null;
  query?: string | null;
  sample_sid?: string | null;
  assistant_sid?: string | null;
  sid?: string | null;
  status?: string | null;
  url?: string | null;
  source_channel?: string | null;
}

export class QueryInstance {
  protected _solution: QuerySolution;
  protected _context?: QueryContext;

  constructor(protected _version: Understand, payload: QueryPayload, assistantSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.results = payload.results;
    this.language = payload.language;
    this.modelBuildSid = payload.model_build_sid;
    this.query = payload.query;
    this.sampleSid = payload.sample_sid;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.status = payload.status;
    this.url = payload.url;
    this.sourceChannel = payload.source_channel;

    this._solution = { assistantSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account that created this Query.
   */
  accountSid?: string | null;
  /**
   * The date that this resource was created
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The natural language analysis results which include the Task recognized, the confidence score and a list of identified Fields.
   */
  results?: any | null;
  /**
   * An ISO language-country string of the sample.
   */
  language?: string | null;
  /**
   * The unique ID of the Model Build queried.
   */
  modelBuildSid?: string | null;
  /**
   * The end-user\'s natural language input.
   */
  query?: string | null;
  /**
   * An optional reference to the Sample created from this query.
   */
  sampleSid?: string | null;
  /**
   * The unique ID of the parent Assistant.
   */
  assistantSid?: string | null;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * A string that described the query status. The values can be: pending_review, reviewed, discarded
   */
  status?: string | null;
  url?: string | null;
  /**
   * The communication channel where this end-user input came from
   */
  sourceChannel?: string | null;

  private get _proxy(): QueryContext {
    this._context = this._context || new QueryContextImpl(this._version, this._solution.assistantSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a QueryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a QueryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  fetch(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a QueryInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  update(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
  /**
   * Update a QueryInstance
   *
   * @param { QueryContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  update(params: QueryContextUpdateOptions, callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
  update(params?: any, callback?: any): Promise<QueryInstance>
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
      accountSid: this.accountSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      results: this.results, 
      language: this.language, 
      modelBuildSid: this.modelBuildSid, 
      query: this.query, 
      sampleSid: this.sampleSid, 
      assistantSid: this.assistantSid, 
      sid: this.sid, 
      status: this.status, 
      url: this.url, 
      sourceChannel: this.sourceChannel
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface QuerySolution {
  assistantSid?: string;
  sid?: string;
}

export class QueryPage extends Page<Understand, QueryPayload, QueryResource, QueryInstance> {
  /**
   * Initialize the QueryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Understand, response: Response<string>, solution: QuerySolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of QueryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: QueryPayload): QueryInstance {
    return new QueryInstance(
      this._version,
      payload,
      this._solution.assistantSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface QueryListInstance {
  (sid: string): QueryContext;
  get(sid: string): QueryContext;


  /**
   * Create a QueryInstance
   *
   * @param { QueryListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed QueryInstance
   */
  create(params: QueryListInstanceCreateOptions, callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
  create(params: any, callback?: any): Promise<QueryInstance>



  /**
   * Streams QueryInstance records from the API.
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
  each(callback?: (item: QueryInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams QueryInstance records from the API.
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
   * @param { QueryListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: QueryListInstanceEachOptions, callback?: (item: QueryInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of QueryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
  /**
   * Retrieve a single target page of QueryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
  getPage(params?: any, callback?: any): Promise<QueryPage>;
  /**
   * Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: QueryInstance[]) => any): Promise<QueryInstance[]>;
  /**
   * Lists QueryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { QueryListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: QueryListInstanceOptions, callback?: (error: Error | null, items: QueryInstance[]) => any): Promise<QueryInstance[]>;
  list(params?: any, callback?: any): Promise<QueryInstance[]>;
  /**
   * Retrieve a single page of QueryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
  /**
   * Retrieve a single page of QueryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { QueryListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: QueryListInstancePageOptions, callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
  page(params?: any, callback?: any): Promise<QueryPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface QueryListInstanceImpl extends QueryListInstance {}
class QueryListInstanceImpl implements QueryListInstance {
  _version?: Understand;
  _solution?: QuerySolution;
  _uri?: string;

}

export function QueryListInstance(version: Understand, assistantSid: string): QueryListInstance {
  const instance = ((sid) => instance.get(sid)) as QueryListInstanceImpl;

  instance.get = function get(sid): QueryContext {
    return new QueryContextImpl(version, assistantSid, sid);
  }

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/Queries`;

  instance.create = function create(params: any, callback?: any): Promise<QueryInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.language === null || params.language === undefined) {
      throw new Error('Required parameter "params.language" missing.');
    }

    if (params.query === null || params.query === undefined) {
      throw new Error('Required parameter "params.query" missing.');
    }

    const data: any = {};

    data['Language'] = params.language;
    data['Query'] = params.query;
    if (params.tasks !== undefined) data['Tasks'] = params.tasks;
    if (params.modelBuild !== undefined) data['ModelBuild'] = params.modelBuild;
    if (params.field !== undefined) data['Field'] = params.field;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new QueryInstance(operationVersion, payload, this._solution.assistantSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.page = function page(params?: any, callback?: any): Promise<QueryPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.language !== undefined) data['Language'] = params.language;
    if (params.modelBuild !== undefined) data['ModelBuild'] = params.modelBuild;
    if (params.status !== undefined) data['Status'] = params.status;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new QueryPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<QueryPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new QueryPage(this._version, payload, this._solution));
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

