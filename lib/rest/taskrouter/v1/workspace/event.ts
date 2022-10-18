/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
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

/**
 * Options to pass to each
 *
 * @property { Date } [endDate] Only include Events that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [eventType] The type of Events to read. Returns only Events of the type specified.
 * @property { number } [minutes] The period of events to read in minutes. Returns only Events that occurred since this many minutes in the past. The default is &#x60;15&#x60; minutes. Task Attributes for Events occuring more 43,200 minutes ago will be redacted.
 * @property { string } [reservationSid] The SID of the Reservation with the Events to read. Returns only Events that pertain to the specified Reservation.
 * @property { Date } [startDate] Only include Events from on or after this date and time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Task Attributes for Events older than 30 days will be redacted.
 * @property { string } [taskQueueSid] The SID of the TaskQueue with the Events to read. Returns only the Events that pertain to the specified TaskQueue.
 * @property { string } [taskSid] The SID of the Task with the Events to read. Returns only the Events that pertain to the specified Task.
 * @property { string } [workerSid] The SID of the Worker with the Events to read. Returns only the Events that pertain to the specified Worker.
 * @property { string } [workflowSid] The SID of the Workflow with the Events to read. Returns only the Events that pertain to the specified Workflow.
 * @property { string } [taskChannel] The TaskChannel with the Events to read. Returns only the Events that pertain to the specified TaskChannel.
 * @property { string } [sid] The SID of the Event resource to read.
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
export interface EventListInstanceEachOptions {
  endDate?: Date;
  eventType?: string;
  minutes?: number;
  reservationSid?: string;
  startDate?: Date;
  taskQueueSid?: string;
  taskSid?: string;
  workerSid?: string;
  workflowSid?: string;
  taskChannel?: string;
  sid?: string;
  pageSize?: number;
  callback?: (item: EventInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Date } [endDate] Only include Events that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [eventType] The type of Events to read. Returns only Events of the type specified.
 * @property { number } [minutes] The period of events to read in minutes. Returns only Events that occurred since this many minutes in the past. The default is &#x60;15&#x60; minutes. Task Attributes for Events occuring more 43,200 minutes ago will be redacted.
 * @property { string } [reservationSid] The SID of the Reservation with the Events to read. Returns only Events that pertain to the specified Reservation.
 * @property { Date } [startDate] Only include Events from on or after this date and time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Task Attributes for Events older than 30 days will be redacted.
 * @property { string } [taskQueueSid] The SID of the TaskQueue with the Events to read. Returns only the Events that pertain to the specified TaskQueue.
 * @property { string } [taskSid] The SID of the Task with the Events to read. Returns only the Events that pertain to the specified Task.
 * @property { string } [workerSid] The SID of the Worker with the Events to read. Returns only the Events that pertain to the specified Worker.
 * @property { string } [workflowSid] The SID of the Workflow with the Events to read. Returns only the Events that pertain to the specified Workflow.
 * @property { string } [taskChannel] The TaskChannel with the Events to read. Returns only the Events that pertain to the specified TaskChannel.
 * @property { string } [sid] The SID of the Event resource to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface EventListInstanceOptions {
  endDate?: Date;
  eventType?: string;
  minutes?: number;
  reservationSid?: string;
  startDate?: Date;
  taskQueueSid?: string;
  taskSid?: string;
  workerSid?: string;
  workflowSid?: string;
  taskChannel?: string;
  sid?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Date } [endDate] Only include Events that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [eventType] The type of Events to read. Returns only Events of the type specified.
 * @property { number } [minutes] The period of events to read in minutes. Returns only Events that occurred since this many minutes in the past. The default is &#x60;15&#x60; minutes. Task Attributes for Events occuring more 43,200 minutes ago will be redacted.
 * @property { string } [reservationSid] The SID of the Reservation with the Events to read. Returns only Events that pertain to the specified Reservation.
 * @property { Date } [startDate] Only include Events from on or after this date and time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Task Attributes for Events older than 30 days will be redacted.
 * @property { string } [taskQueueSid] The SID of the TaskQueue with the Events to read. Returns only the Events that pertain to the specified TaskQueue.
 * @property { string } [taskSid] The SID of the Task with the Events to read. Returns only the Events that pertain to the specified Task.
 * @property { string } [workerSid] The SID of the Worker with the Events to read. Returns only the Events that pertain to the specified Worker.
 * @property { string } [workflowSid] The SID of the Workflow with the Events to read. Returns only the Events that pertain to the specified Workflow.
 * @property { string } [taskChannel] The TaskChannel with the Events to read. Returns only the Events that pertain to the specified TaskChannel.
 * @property { string } [sid] The SID of the Event resource to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface EventListInstancePageOptions {
  endDate?: Date;
  eventType?: string;
  minutes?: number;
  reservationSid?: string;
  startDate?: Date;
  taskQueueSid?: string;
  taskSid?: string;
  workerSid?: string;
  workflowSid?: string;
  taskChannel?: string;
  sid?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface EventListInstance {
  (sid: string): EventContext;
  get(sid: string): EventContext;



  /**
   * Streams EventInstance records from the API.
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
  each(callback?: (item: EventInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams EventInstance records from the API.
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
   * @param { EventListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: EventListInstanceEachOptions, callback?: (item: EventInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of EventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
  /**
   * Retrieve a single target page of EventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
  getPage(params?: any, callback?: any): Promise<EventPage>;
  /**
   * Lists EventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: EventInstance[]) => any): Promise<EventInstance[]>;
  /**
   * Lists EventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EventListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: EventListInstanceOptions, callback?: (error: Error | null, items: EventInstance[]) => any): Promise<EventInstance[]>;
  list(params?: any, callback?: any): Promise<EventInstance[]>;
  /**
   * Retrieve a single page of EventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
  /**
   * Retrieve a single page of EventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { EventListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: EventListInstancePageOptions, callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
  page(params?: any, callback?: any): Promise<EventPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface EventListInstanceImpl extends EventListInstance {}
class EventListInstanceImpl implements EventListInstance {
  _version?: V1;
  _solution?: EventSolution;
  _uri?: string;

}

export function EventListInstance(version: V1, workspaceSid: string): EventListInstance {
  const instance = ((sid) => instance.get(sid)) as EventListInstanceImpl;

  instance.get = function get(sid): EventContext {
    return new EventContextImpl(version, workspaceSid, sid);
  }

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/Events`;

  instance.page = function page(params?: any, callback?: any): Promise<EventPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.endDate !== undefined) data['EndDate'] = serialize.iso8601DateTime(params.endDate);
    if (params.eventType !== undefined) data['EventType'] = params.eventType;
    if (params.minutes !== undefined) data['Minutes'] = params.minutes;
    if (params.reservationSid !== undefined) data['ReservationSid'] = params.reservationSid;
    if (params.startDate !== undefined) data['StartDate'] = serialize.iso8601DateTime(params.startDate);
    if (params.taskQueueSid !== undefined) data['TaskQueueSid'] = params.taskQueueSid;
    if (params.taskSid !== undefined) data['TaskSid'] = params.taskSid;
    if (params.workerSid !== undefined) data['WorkerSid'] = params.workerSid;
    if (params.workflowSid !== undefined) data['WorkflowSid'] = params.workflowSid;
    if (params.taskChannel !== undefined) data['TaskChannel'] = params.taskChannel;
    if (params.sid !== undefined) data['Sid'] = params.sid;
    if (params.pageSize !== undefined) data['PageSize'] = params.pageSize;
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new EventPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<EventPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new EventPage(this._version, payload, this._solution));
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


export interface EventContext {


  /**
   * Fetch a EventInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EventInstance
   */
  fetch(callback?: (error: Error | null, item?: EventInstance) => any): Promise<EventInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export class EventContextImpl implements EventContext {
  protected _solution: EventSolution;
  protected _uri: string;


  constructor(protected _version: V1, workspaceSid: string, sid: string) {
    this._solution = { workspaceSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/Events/${sid}`;
  }

  fetch(callback?: any): Promise<EventInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new EventInstance(operationVersion, payload, this._solution.workspaceSid, this._solution.sid));
    

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

interface EventPayload extends EventResource, Page.TwilioResponsePayload {
}

interface EventResource {
  account_sid?: string | null;
  actor_sid?: string | null;
  actor_type?: string | null;
  actor_url?: string | null;
  description?: string | null;
  event_data?: any | null;
  event_date?: Date | null;
  event_date_ms?: number | null;
  event_type?: string | null;
  resource_sid?: string | null;
  resource_type?: string | null;
  resource_url?: string | null;
  sid?: string | null;
  source?: string | null;
  source_ip_address?: string | null;
  url?: string | null;
  workspace_sid?: string | null;
}

export class EventInstance {
  protected _solution: EventSolution;
  protected _context?: EventContext;

  constructor(protected _version: V1, payload: EventPayload, workspaceSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.actorSid = payload.actor_sid;
    this.actorType = payload.actor_type;
    this.actorUrl = payload.actor_url;
    this.description = payload.description;
    this.eventData = payload.event_data;
    this.eventDate = deserialize.iso8601DateTime(payload.event_date);
    this.eventDateMs = payload.event_date_ms;
    this.eventType = payload.event_type;
    this.resourceSid = payload.resource_sid;
    this.resourceType = payload.resource_type;
    this.resourceUrl = payload.resource_url;
    this.sid = payload.sid;
    this.source = payload.source;
    this.sourceIpAddress = payload.source_ip_address;
    this.url = payload.url;
    this.workspaceSid = payload.workspace_sid;

    this._solution = { workspaceSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the resource that triggered the event
   */
  actorSid?: string | null;
  /**
   * The type of resource that triggered the event
   */
  actorType?: string | null;
  /**
   * The absolute URL of the resource that triggered the event
   */
  actorUrl?: string | null;
  /**
   * A description of the event
   */
  description?: string | null;
  /**
   * Data about the event
   */
  eventData?: any | null;
  /**
   * The time the event was sent
   */
  eventDate?: Date | null;
  /**
   * The time the event was sent in milliseconds
   */
  eventDateMs?: number | null;
  /**
   * The identifier for the event
   */
  eventType?: string | null;
  /**
   * The SID of the object the event is most relevant to
   */
  resourceSid?: string | null;
  /**
   * The type of object the event is most relevant to
   */
  resourceType?: string | null;
  /**
   * The URL of the resource the event is most relevant to
   */
  resourceUrl?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * Where the Event originated
   */
  source?: string | null;
  /**
   * The IP from which the Event originated
   */
  sourceIpAddress?: string | null;
  /**
   * The absolute URL of the Event resource
   */
  url?: string | null;
  /**
   * The SID of the Workspace that contains the Event
   */
  workspaceSid?: string | null;

  private get _proxy(): EventContext {
    this._context = this._context || new EventContextImpl(this._version, this._solution.workspaceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a EventInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed EventInstance
   */
  fetch(callback?: (error: Error | null, item?: EventInstance) => any): Promise<EventInstance>
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
      accountSid: this.accountSid, 
      actorSid: this.actorSid, 
      actorType: this.actorType, 
      actorUrl: this.actorUrl, 
      description: this.description, 
      eventData: this.eventData, 
      eventDate: this.eventDate, 
      eventDateMs: this.eventDateMs, 
      eventType: this.eventType, 
      resourceSid: this.resourceSid, 
      resourceType: this.resourceType, 
      resourceUrl: this.resourceUrl, 
      sid: this.sid, 
      source: this.source, 
      sourceIpAddress: this.sourceIpAddress, 
      url: this.url, 
      workspaceSid: this.workspaceSid
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface EventSolution {
  workspaceSid?: string;
  sid?: string;
}

export class EventPage extends Page<V1, EventPayload, EventResource, EventInstance> {
  /**
   * Initialize the EventPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: EventSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of EventInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EventPayload): EventInstance {
    return new EventInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

