/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { InviteListInstance } from "./channel/invite";
import { MemberListInstance } from "./channel/member";
import { MessageListInstance } from "./channel/message";

type ChannelChannelType = "public" | "private";

/**
 * Options to pass to update a ChannelInstance
 */
export interface ChannelContextUpdateOptions {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL. This value must be 64 characters or less in length and be unique within the Service. */
  uniqueName?: string;
  /** A valid JSON string that contains application-specific data. */
  attributes?: string;
}

/**
 * Options to pass to create a ChannelInstance
 */
export interface ChannelListInstanceCreateOptions {
  /** A descriptive string that you create to describe the new resource. It can be up to 64 characters long. */
  friendlyName?: string;
  /** An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL. This value must be 64 characters or less in length and be unique within the Service. */
  uniqueName?: string;
  /** A valid JSON string that contains application-specific data. */
  attributes?: string;
  /**  */
  type?: ChannelChannelType;
}
/**
 * Options to pass to each
 */
export interface ChannelListInstanceEachOptions {
  /** The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`. */
  type?: Array<ChannelChannelType>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ChannelInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ChannelListInstanceOptions {
  /** The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`. */
  type?: Array<ChannelChannelType>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ChannelListInstancePageOptions {
  /** The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`. */
  type?: Array<ChannelChannelType>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ChannelContext {
  invites: InviteListInstance;
  members: MemberListInstance;
  messages: MessageListInstance;

  /**
   * Remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;

  /**
   * Update a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  /**
   * Update a ChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    params: ChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChannelContextSolution {
  serviceSid: string;
  sid: string;
}

export class ChannelContextImpl implements ChannelContext {
  protected _solution: ChannelContextSolution;
  protected _uri: string;

  protected _invites?: InviteListInstance;
  protected _members?: MemberListInstance;
  protected _messages?: MessageListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Channels/${sid}`;
  }

  get invites(): InviteListInstance {
    this._invites =
      this._invites ||
      InviteListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._invites;
  }

  get members(): MemberListInstance {
    this._members =
      this._members ||
      MemberListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._members;
  }

  get messages(): MessageListInstance {
    this._messages =
      this._messages ||
      MessageListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._messages;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChannelInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | ChannelContextUpdateOptions
      | ((error: Error | null, item?: ChannelInstance) => any),
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChannelInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
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

interface ChannelPayload extends TwilioResponsePayload {
  channels: ChannelResource[];
}

interface ChannelResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  friendly_name: string;
  unique_name: string;
  attributes: string;
  type: ChannelChannelType;
  date_created: Date;
  date_updated: Date;
  created_by: string;
  members_count: number;
  messages_count: number;
  url: string;
  links: Record<string, string>;
}

export class ChannelInstance {
  protected _solution: ChannelContextSolution;
  protected _context?: ChannelContext;

  constructor(
    protected _version: V1,
    payload: ChannelResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.friendlyName = payload.friendly_name;
    this.uniqueName = payload.unique_name;
    this.attributes = payload.attributes;
    this.type = payload.type;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;
    this.membersCount = deserialize.integer(payload.members_count);
    this.messagesCount = deserialize.integer(payload.messages_count);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Channel resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Channel resource.
   */
  accountSid: string;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
   */
  serviceSid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\'s `sid` in the URL.
   */
  uniqueName: string;
  /**
   * The JSON string that stores application-specific data. **Note** If this property has been assigned a value, it\'s only  displayed in a FETCH action that returns a single resource; otherwise, it\'s null. If the attributes have not been set, `{}` is returned.
   */
  attributes: string;
  type: ChannelChannelType;
  /**
   * The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The `identity` of the User that created the channel. If the Channel was created by using the API, the value is `system`.
   */
  createdBy: string;
  /**
   * The number of Members in the Channel.
   */
  membersCount: number;
  /**
   * The number of Messages in the Channel.
   */
  messagesCount: number;
  /**
   * The absolute URL of the Channel resource.
   */
  url: string;
  /**
   * The absolute URLs of the [Members](https://www.twilio.com/docs/chat/api/members), [Messages](https://www.twilio.com/docs/chat/api/messages) , [Invites](https://www.twilio.com/docs/chat/api/invites) and, if it exists, the last [Message](https://www.twilio.com/docs/chat/api/messages) for the Channel.
   */
  links: Record<string, string>;

  private get _proxy(): ChannelContext {
    this._context =
      this._context ||
      new ChannelContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  /**
   * Update a ChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  update(
    params: ChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the invites.
   */
  invites(): InviteListInstance {
    return this._proxy.invites;
  }

  /**
   * Access the members.
   */
  members(): MemberListInstance {
    return this._proxy.members;
  }

  /**
   * Access the messages.
   */
  messages(): MessageListInstance {
    return this._proxy.messages;
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
      friendlyName: this.friendlyName,
      uniqueName: this.uniqueName,
      attributes: this.attributes,
      type: this.type,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      createdBy: this.createdBy,
      membersCount: this.membersCount,
      messagesCount: this.messagesCount,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ChannelSolution {
  serviceSid: string;
}

export interface ChannelListInstance {
  _version: V1;
  _solution: ChannelSolution;
  _uri: string;

  (sid: string): ChannelContext;
  get(sid: string): ChannelContext;

  /**
   * Create a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  create(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;
  /**
   * Create a ChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  create(
    params: ChannelListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;

  /**
   * Streams ChannelInstance records from the API.
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
   * @param { ChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ChannelInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ChannelListInstanceEachOptions,
    callback?: (item: ChannelInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage>;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ChannelInstance[]) => any
  ): Promise<ChannelInstance[]>;
  list(
    params: ChannelListInstanceOptions,
    callback?: (error: Error | null, items: ChannelInstance[]) => any
  ): Promise<ChannelInstance[]>;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage>;
  page(
    params: ChannelListInstancePageOptions,
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ChannelListInstance(
  version: V1,
  serviceSid: string
): ChannelListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ChannelListInstance;

  instance.get = function get(sid): ChannelContext {
    return new ChannelContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Channels`;

  instance.create = function create(
    params?:
      | ChannelListInstanceCreateOptions
      | ((error: Error | null, items: ChannelInstance) => any),
    callback?: (error: Error | null, items: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["attributes"] !== undefined)
      data["Attributes"] = params["attributes"];
    if (params["type"] !== undefined) data["Type"] = params["type"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChannelInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | ChannelListInstancePageOptions
      | ((error: Error | null, items: ChannelPage) => any),
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["type"] !== undefined)
      data["Type"] = serialize.map(
        params["type"],
        (e: ChannelChannelType) => e
      );
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChannelPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ChannelPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class ChannelPage extends Page<
  V1,
  ChannelPayload,
  ChannelResource,
  ChannelInstance
> {
  /**
   * Initialize the ChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ChannelSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChannelResource): ChannelInstance {
    return new ChannelInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
