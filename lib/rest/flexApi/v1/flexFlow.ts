/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type FlexFlowChannelType =
  | "web"
  | "sms"
  | "facebook"
  | "whatsapp"
  | "line"
  | "custom";

type FlexFlowIntegrationType = "studio" | "external" | "task";

/**
 * Options to pass to update a FlexFlowInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the Flex Flow resource.
 * @property { string } [chatServiceSid] The SID of the chat service.
 * @property { FlexFlowChannelType } [channelType]
 * @property { string } [contactIdentity] The channel contact\\\'s Identity.
 * @property { boolean } [enabled] Whether the new Flex Flow is enabled.
 * @property { FlexFlowIntegrationType } [integrationType]
 * @property { string } [integration.flowSid] The SID of the Studio Flow. Required when `integrationType` is `studio`.
 * @property { string } [integration.url] The URL of the external webhook. Required when `integrationType` is `external`.
 * @property { string } [integration.workspaceSid] The Workspace SID for a new Task. Required when `integrationType` is `task`.
 * @property { string } [integration.workflowSid] The Workflow SID for a new Task. Required when `integrationType` is `task`.
 * @property { string } [integration.channel] The Task Channel SID (TCXXXX) or unique name (e.g., `sms`) to use for the Task that will be created. Applicable and required when `integrationType` is `task`. The default value is `default`.
 * @property { number } [integration.timeout] The Task timeout in seconds for a new Task. Default is 86,400 seconds (24 hours). Optional when `integrationType` is `task`, not applicable otherwise.
 * @property { number } [integration.priority] The Task priority of a new Task. The default priority is 0. Optional when `integrationType` is `task`, not applicable otherwise.
 * @property { boolean } [integration.creationOnMessage] In the context of outbound messaging, defines whether to create a Task immediately (and therefore reserve the conversation to current agent), or delay Task creation until the customer sends the first response. Set to false to create immediately, true to delay Task creation. This setting is only applicable for outbound messaging.
 * @property { boolean } [longLived] When enabled, Flex will keep the chat channel active so that it may be used for subsequent interactions with a contact identity. Defaults to `false`.
 * @property { boolean } [janitorEnabled] When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the associated Task is deleted outside of the Flex UI. Defaults to `false`.
 * @property { number } [integration.retryCount] The number of times to retry the Studio Flow or webhook in case of failure. Takes integer values from 0 to 3 with the default being 3. Optional when `integrationType` is `studio` or `external`, not applicable otherwise.
 */
export interface FlexFlowContextUpdateOptions {
  friendlyName?: string;
  chatServiceSid?: string;
  channelType?: FlexFlowChannelType;
  contactIdentity?: string;
  enabled?: boolean;
  integrationType?: FlexFlowIntegrationType;
  "integration.flowSid"?: string;
  "integration.url"?: string;
  "integration.workspaceSid"?: string;
  "integration.workflowSid"?: string;
  "integration.channel"?: string;
  "integration.timeout"?: number;
  "integration.priority"?: number;
  "integration.creationOnMessage"?: boolean;
  longLived?: boolean;
  janitorEnabled?: boolean;
  "integration.retryCount"?: number;
}

/**
 * Options to pass to create a FlexFlowInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Flex Flow resource.
 * @property { string } chatServiceSid The SID of the chat service.
 * @property { FlexFlowChannelType } channelType
 * @property { string } [contactIdentity] The channel contact\\\'s Identity.
 * @property { boolean } [enabled] Whether the new Flex Flow is enabled.
 * @property { FlexFlowIntegrationType } [integrationType]
 * @property { string } [integration.flowSid] The SID of the Studio Flow. Required when `integrationType` is `studio`.
 * @property { string } [integration.url] The URL of the external webhook. Required when `integrationType` is `external`.
 * @property { string } [integration.workspaceSid] The Workspace SID for a new Task. Required when `integrationType` is `task`.
 * @property { string } [integration.workflowSid] The Workflow SID for a new Task. Required when `integrationType` is `task`.
 * @property { string } [integration.channel] The Task Channel SID (TCXXXX) or unique name (e.g., `sms`) to use for the Task that will be created. Applicable and required when `integrationType` is `task`. The default value is `default`.
 * @property { number } [integration.timeout] The Task timeout in seconds for a new Task. Default is 86,400 seconds (24 hours). Optional when `integrationType` is `task`, not applicable otherwise.
 * @property { number } [integration.priority] The Task priority of a new Task. The default priority is 0. Optional when `integrationType` is `task`, not applicable otherwise.
 * @property { boolean } [integration.creationOnMessage] In the context of outbound messaging, defines whether to create a Task immediately (and therefore reserve the conversation to current agent), or delay Task creation until the customer sends the first response. Set to false to create immediately, true to delay Task creation. This setting is only applicable for outbound messaging.
 * @property { boolean } [longLived] When enabled, Flex will keep the chat channel active so that it may be used for subsequent interactions with a contact identity. Defaults to `false`.
 * @property { boolean } [janitorEnabled] When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the associated Task is deleted outside of the Flex UI. Defaults to `false`.
 * @property { number } [integration.retryCount] The number of times to retry the Studio Flow or webhook in case of failure. Takes integer values from 0 to 3 with the default being 3. Optional when `integrationType` is `studio` or `external`, not applicable otherwise.
 */
export interface FlexFlowListInstanceCreateOptions {
  friendlyName: string;
  chatServiceSid: string;
  channelType: FlexFlowChannelType;
  contactIdentity?: string;
  enabled?: boolean;
  integrationType?: FlexFlowIntegrationType;
  "integration.flowSid"?: string;
  "integration.url"?: string;
  "integration.workspaceSid"?: string;
  "integration.workflowSid"?: string;
  "integration.channel"?: string;
  "integration.timeout"?: number;
  "integration.priority"?: number;
  "integration.creationOnMessage"?: boolean;
  longLived?: boolean;
  janitorEnabled?: boolean;
  "integration.retryCount"?: number;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The `friendly_name` of the Flex Flow resources to read.
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
export interface FlexFlowListInstanceEachOptions {
  friendlyName?: string;
  pageSize?: number;
  callback?: (item: FlexFlowInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The `friendly_name` of the Flex Flow resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface FlexFlowListInstanceOptions {
  friendlyName?: string;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The `friendly_name` of the Flex Flow resources to read.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface FlexFlowListInstancePageOptions {
  friendlyName?: string;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface FlexFlowContext {
  /**
   * Remove a FlexFlowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FlexFlowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlexFlowInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FlexFlowInstance) => any
  ): Promise<FlexFlowInstance>;

  /**
   * Update a FlexFlowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlexFlowInstance
   */
  update(
    callback?: (error: Error | null, item?: FlexFlowInstance) => any
  ): Promise<FlexFlowInstance>;
  /**
   * Update a FlexFlowInstance
   *
   * @param { FlexFlowContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlexFlowInstance
   */
  update(
    params?:
      | FlexFlowContextUpdateOptions
      | ((error: Error | null, item?: FlexFlowInstance) => any),
    callback?: (error: Error | null, item?: FlexFlowInstance) => any
  ): Promise<FlexFlowInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlexFlowContextSolution {
  sid?: string;
}

export class FlexFlowContextImpl implements FlexFlowContext {
  protected _solution: FlexFlowContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/FlexFlows/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<FlexFlowInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FlexFlowInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<FlexFlowInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["chatServiceSid"] !== undefined)
      data["ChatServiceSid"] = params["chatServiceSid"];
    if (params["channelType"] !== undefined)
      data["ChannelType"] = params["channelType"];
    if (params["contactIdentity"] !== undefined)
      data["ContactIdentity"] = params["contactIdentity"];
    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);
    if (params["integrationType"] !== undefined)
      data["IntegrationType"] = params["integrationType"];
    if (params["integration.flowSid"] !== undefined)
      data["Integration.FlowSid"] = params["integration.flowSid"];
    if (params["integration.url"] !== undefined)
      data["Integration.Url"] = params["integration.url"];
    if (params["integration.workspaceSid"] !== undefined)
      data["Integration.WorkspaceSid"] = params["integration.workspaceSid"];
    if (params["integration.workflowSid"] !== undefined)
      data["Integration.WorkflowSid"] = params["integration.workflowSid"];
    if (params["integration.channel"] !== undefined)
      data["Integration.Channel"] = params["integration.channel"];
    if (params["integration.timeout"] !== undefined)
      data["Integration.Timeout"] = params["integration.timeout"];
    if (params["integration.priority"] !== undefined)
      data["Integration.Priority"] = params["integration.priority"];
    if (params["integration.creationOnMessage"] !== undefined)
      data["Integration.CreationOnMessage"] = serialize.bool(
        params["integration.creationOnMessage"]
      );
    if (params["longLived"] !== undefined)
      data["LongLived"] = serialize.bool(params["longLived"]);
    if (params["janitorEnabled"] !== undefined)
      data["JanitorEnabled"] = serialize.bool(params["janitorEnabled"]);
    if (params["integration.retryCount"] !== undefined)
      data["Integration.RetryCount"] = params["integration.retryCount"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FlexFlowInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
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

interface FlexFlowPayload extends TwilioResponsePayload {
  flex_flows: FlexFlowResource[];
}

interface FlexFlowResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  sid?: string | null;
  friendly_name?: string | null;
  chat_service_sid?: string | null;
  channel_type?: FlexFlowChannelType;
  contact_identity?: string | null;
  enabled?: boolean | null;
  integration_type?: FlexFlowIntegrationType;
  integration?: any | null;
  long_lived?: boolean | null;
  janitor_enabled?: boolean | null;
  url?: string | null;
}

export class FlexFlowInstance {
  protected _solution: FlexFlowContextSolution;
  protected _context?: FlexFlowContext;

  constructor(protected _version: V1, payload: FlexFlowResource, sid?: string) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.sid = payload.sid;
    this.friendlyName = payload.friendly_name;
    this.chatServiceSid = payload.chat_service_sid;
    this.channelType = payload.channel_type;
    this.contactIdentity = payload.contact_identity;
    this.enabled = payload.enabled;
    this.integrationType = payload.integration_type;
    this.integration = payload.integration;
    this.longLived = payload.long_lived;
    this.janitorEnabled = payload.janitor_enabled;
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The SID of the chat service
   */
  chatServiceSid?: string | null;
  channelType?: FlexFlowChannelType;
  /**
   * The channel contact\'s Identity
   */
  contactIdentity?: string | null;
  /**
   * Whether the Flex Flow is enabled
   */
  enabled?: boolean | null;
  integrationType?: FlexFlowIntegrationType;
  /**
   * An object that contains specific parameters for the integration
   */
  integration?: any | null;
  /**
   * Re-use this chat channel for future interactions with a contact
   */
  longLived?: boolean | null;
  /**
   * Remove active Proxy sessions if the corresponding Task is deleted.
   */
  janitorEnabled?: boolean | null;
  /**
   * The absolute URL of the Flex Flow resource
   */
  url?: string | null;

  private get _proxy(): FlexFlowContext {
    this._context =
      this._context ||
      new FlexFlowContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a FlexFlowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a FlexFlowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlexFlowInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FlexFlowInstance) => any
  ): Promise<FlexFlowInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FlexFlowInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlexFlowInstance
   */
  update(
    callback?: (error: Error | null, item?: FlexFlowInstance) => any
  ): Promise<FlexFlowInstance>;
  /**
   * Update a FlexFlowInstance
   *
   * @param { FlexFlowContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlexFlowInstance
   */
  update(
    params?:
      | FlexFlowContextUpdateOptions
      | ((error: Error | null, item?: FlexFlowInstance) => any),
    callback?: (error: Error | null, item?: FlexFlowInstance) => any
  ): Promise<FlexFlowInstance> {
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
      sid: this.sid,
      friendlyName: this.friendlyName,
      chatServiceSid: this.chatServiceSid,
      channelType: this.channelType,
      contactIdentity: this.contactIdentity,
      enabled: this.enabled,
      integrationType: this.integrationType,
      integration: this.integration,
      longLived: this.longLived,
      janitorEnabled: this.janitorEnabled,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FlexFlowListInstance {
  (sid: string): FlexFlowContext;
  get(sid: string): FlexFlowContext;

  /**
   * Create a FlexFlowInstance
   *
   * @param { FlexFlowListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlexFlowInstance
   */
  create(
    params: FlexFlowListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FlexFlowInstance) => any
  ): Promise<FlexFlowInstance>;

  /**
   * Streams FlexFlowInstance records from the API.
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
   * @param { FlexFlowListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?:
      | FlexFlowListInstanceEachOptions
      | ((item: FlexFlowInstance, done: (err?: Error) => void) => void),
    callback?: (item: FlexFlowInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of FlexFlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FlexFlowPage) => any
  ): Promise<FlexFlowPage>;
  /**
   * Lists FlexFlowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FlexFlowListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?:
      | FlexFlowListInstanceOptions
      | ((error: Error | null, items: FlexFlowInstance[]) => any),
    callback?: (error: Error | null, items: FlexFlowInstance[]) => any
  ): Promise<FlexFlowInstance[]>;
  /**
   * Retrieve a single page of FlexFlowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FlexFlowListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params?:
      | FlexFlowListInstancePageOptions
      | ((error: Error | null, items: FlexFlowPage) => any),
    callback?: (error: Error | null, items: FlexFlowPage) => any
  ): Promise<FlexFlowPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlexFlowSolution {}

interface FlexFlowListInstanceImpl extends FlexFlowListInstance {}
class FlexFlowListInstanceImpl implements FlexFlowListInstance {
  _version?: V1;
  _solution?: FlexFlowSolution;
  _uri?: string;
}

export function FlexFlowListInstance(version: V1): FlexFlowListInstance {
  const instance = ((sid) => instance.get(sid)) as FlexFlowListInstanceImpl;

  instance.get = function get(sid): FlexFlowContext {
    return new FlexFlowContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/FlexFlows`;

  instance.create = function create(
    params: FlexFlowListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FlexFlowInstance) => any
  ): Promise<FlexFlowInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (
      params["chatServiceSid"] === null ||
      params["chatServiceSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['chatServiceSid']\" missing."
      );
    }

    if (params["channelType"] === null || params["channelType"] === undefined) {
      throw new Error("Required parameter \"params['channelType']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["ChatServiceSid"] = params["chatServiceSid"];

    data["ChannelType"] = params["channelType"];
    if (params["contactIdentity"] !== undefined)
      data["ContactIdentity"] = params["contactIdentity"];
    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);
    if (params["integrationType"] !== undefined)
      data["IntegrationType"] = params["integrationType"];
    if (params["integration.flowSid"] !== undefined)
      data["Integration.FlowSid"] = params["integration.flowSid"];
    if (params["integration.url"] !== undefined)
      data["Integration.Url"] = params["integration.url"];
    if (params["integration.workspaceSid"] !== undefined)
      data["Integration.WorkspaceSid"] = params["integration.workspaceSid"];
    if (params["integration.workflowSid"] !== undefined)
      data["Integration.WorkflowSid"] = params["integration.workflowSid"];
    if (params["integration.channel"] !== undefined)
      data["Integration.Channel"] = params["integration.channel"];
    if (params["integration.timeout"] !== undefined)
      data["Integration.Timeout"] = params["integration.timeout"];
    if (params["integration.priority"] !== undefined)
      data["Integration.Priority"] = params["integration.priority"];
    if (params["integration.creationOnMessage"] !== undefined)
      data["Integration.CreationOnMessage"] = serialize.bool(
        params["integration.creationOnMessage"]
      );
    if (params["longLived"] !== undefined)
      data["LongLived"] = serialize.bool(params["longLived"]);
    if (params["janitorEnabled"] !== undefined)
      data["JanitorEnabled"] = serialize.bool(params["janitorEnabled"]);
    if (params["integration.retryCount"] !== undefined)
      data["Integration.RetryCount"] = params["integration.retryCount"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new FlexFlowInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | FlexFlowListInstancePageOptions
      | ((error: Error | null, item?: FlexFlowPage) => any),
    callback?: (error: Error | null, item?: FlexFlowPage) => any
  ): Promise<FlexFlowPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new FlexFlowPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FlexFlowPage) => any
  ): Promise<FlexFlowPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new FlexFlowPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

export class FlexFlowPage extends Page<
  V1,
  FlexFlowPayload,
  FlexFlowResource,
  FlexFlowInstance
> {
  /**
   * Initialize the FlexFlowPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: FlexFlowSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FlexFlowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlexFlowResource): FlexFlowInstance {
    return new FlexFlowInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
