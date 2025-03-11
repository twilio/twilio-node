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
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export type ConfigurationStatus = "ok" | "inprogress" | "notstarted";

/**
 * Options to pass to fetch a ConfigurationInstance
 */
export interface ConfigurationContextFetchOptions {
  /** The Pinned UI version of the Configuration resource to fetch. */
  uiVersion?: string;
}

/**
 * Options to pass to update a ConfigurationInstance
 */
export interface ConfigurationContextUpdateOptions {
  /**  */
  body?: object;
}

export interface ConfigurationContext {
  /**
   * Fetch a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;
  /**
   * Fetch a ConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  fetch(
    params: ConfigurationContextFetchOptions,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;

  /**
   * Update a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;
  /**
   * Update a ConfigurationInstance
   *
   * @param params - Body for request
   * @param headers - header params for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  update(
    params: object,
    headers?: any,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConfigurationContextSolution {}

export class ConfigurationContextImpl implements ConfigurationContext {
  protected _solution: ConfigurationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/Configuration`;
  }

  fetch(
    params?:
      | ConfigurationContextFetchOptions
      | ((error: Error | null, item?: ConfigurationInstance) => any),
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uiVersion"] !== undefined)
      data["UiVersion"] = params["uiVersion"];

    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new ConfigurationInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | object
      | ((error: Error | null, item?: ConfigurationInstance) => any),
    headers?: any,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    data = params;

    if (headers === null || headers === undefined) {
      headers = {};
    }

    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new ConfigurationInstance(operationVersion, payload)
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

interface ConfigurationPayload extends ConfigurationResource {}

interface ConfigurationResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  attributes: Record<string, object>;
  status: ConfigurationStatus;
  taskrouter_workspace_sid: string;
  taskrouter_target_workflow_sid: string;
  taskrouter_target_taskqueue_sid: string;
  taskrouter_taskqueues: Array<Record<string, object>>;
  taskrouter_skills: Array<Record<string, object>>;
  taskrouter_worker_channels: Record<string, object>;
  taskrouter_worker_attributes: Record<string, object>;
  taskrouter_offline_activity_sid: string;
  runtime_domain: string;
  messaging_service_instance_sid: string;
  chat_service_instance_sid: string;
  flex_service_instance_sid: string;
  flex_instance_sid: string;
  ui_language: string;
  ui_attributes: Record<string, object>;
  ui_dependencies: Record<string, object>;
  ui_version: string;
  service_version: string;
  call_recording_enabled: boolean;
  call_recording_webhook_url: string;
  crm_enabled: boolean;
  crm_type: string;
  crm_callback_url: string;
  crm_fallback_url: string;
  crm_attributes: Record<string, object>;
  public_attributes: Record<string, object>;
  plugin_service_enabled: boolean;
  plugin_service_attributes: Record<string, object>;
  integrations: Array<Record<string, object>>;
  outbound_call_flows: Record<string, object>;
  serverless_service_sids: Array<string>;
  queue_stats_configuration: Record<string, object>;
  notifications: Record<string, object>;
  markdown: Record<string, object>;
  url: string;
  flex_insights_hr: Record<string, object>;
  flex_insights_drilldown: boolean;
  flex_url: string;
  channel_configs: Array<Record<string, object>>;
  debugger_integration: Record<string, object>;
  flex_ui_status_report: Record<string, object>;
  agent_conv_end_methods: Record<string, object>;
  citrix_voice_vdi: Record<string, object>;
  offline_config: Record<string, object>;
}

export class ConfigurationInstance {
  protected _solution: ConfigurationContextSolution;
  protected _context?: ConfigurationContext;

  constructor(protected _version: V1, payload: ConfigurationResource) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.attributes = payload.attributes;
    this.status = payload.status;
    this.taskrouterWorkspaceSid = payload.taskrouter_workspace_sid;
    this.taskrouterTargetWorkflowSid = payload.taskrouter_target_workflow_sid;
    this.taskrouterTargetTaskqueueSid = payload.taskrouter_target_taskqueue_sid;
    this.taskrouterTaskqueues = payload.taskrouter_taskqueues;
    this.taskrouterSkills = payload.taskrouter_skills;
    this.taskrouterWorkerChannels = payload.taskrouter_worker_channels;
    this.taskrouterWorkerAttributes = payload.taskrouter_worker_attributes;
    this.taskrouterOfflineActivitySid = payload.taskrouter_offline_activity_sid;
    this.runtimeDomain = payload.runtime_domain;
    this.messagingServiceInstanceSid = payload.messaging_service_instance_sid;
    this.chatServiceInstanceSid = payload.chat_service_instance_sid;
    this.flexServiceInstanceSid = payload.flex_service_instance_sid;
    this.flexInstanceSid = payload.flex_instance_sid;
    this.uiLanguage = payload.ui_language;
    this.uiAttributes = payload.ui_attributes;
    this.uiDependencies = payload.ui_dependencies;
    this.uiVersion = payload.ui_version;
    this.serviceVersion = payload.service_version;
    this.callRecordingEnabled = payload.call_recording_enabled;
    this.callRecordingWebhookUrl = payload.call_recording_webhook_url;
    this.crmEnabled = payload.crm_enabled;
    this.crmType = payload.crm_type;
    this.crmCallbackUrl = payload.crm_callback_url;
    this.crmFallbackUrl = payload.crm_fallback_url;
    this.crmAttributes = payload.crm_attributes;
    this.publicAttributes = payload.public_attributes;
    this.pluginServiceEnabled = payload.plugin_service_enabled;
    this.pluginServiceAttributes = payload.plugin_service_attributes;
    this.integrations = payload.integrations;
    this.outboundCallFlows = payload.outbound_call_flows;
    this.serverlessServiceSids = payload.serverless_service_sids;
    this.queueStatsConfiguration = payload.queue_stats_configuration;
    this.notifications = payload.notifications;
    this.markdown = payload.markdown;
    this.url = payload.url;
    this.flexInsightsHr = payload.flex_insights_hr;
    this.flexInsightsDrilldown = payload.flex_insights_drilldown;
    this.flexUrl = payload.flex_url;
    this.channelConfigs = payload.channel_configs;
    this.debuggerIntegration = payload.debugger_integration;
    this.flexUiStatusReport = payload.flex_ui_status_report;
    this.agentConvEndMethods = payload.agent_conv_end_methods;
    this.citrixVoiceVdi = payload.citrix_voice_vdi;
    this.offlineConfig = payload.offline_config;

    this._solution = {};
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Configuration resource.
   */
  accountSid: string;
  /**
   * The date and time in GMT when the Configuration resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the Configuration resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * An object that contains application-specific data.
   */
  attributes: Record<string, object>;
  status: ConfigurationStatus;
  /**
   * The SID of the TaskRouter Workspace.
   */
  taskrouterWorkspaceSid: string;
  /**
   * The SID of the TaskRouter target Workflow.
   */
  taskrouterTargetWorkflowSid: string;
  /**
   * The SID of the TaskRouter Target TaskQueue.
   */
  taskrouterTargetTaskqueueSid: string;
  /**
   * The list of TaskRouter TaskQueues.
   */
  taskrouterTaskqueues: Array<Record<string, object>>;
  /**
   * The Skill description for TaskRouter workers.
   */
  taskrouterSkills: Array<Record<string, object>>;
  /**
   * The TaskRouter default channel capacities and availability for workers.
   */
  taskrouterWorkerChannels: Record<string, object>;
  /**
   * The TaskRouter Worker attributes.
   */
  taskrouterWorkerAttributes: Record<string, object>;
  /**
   * The TaskRouter SID of the offline activity.
   */
  taskrouterOfflineActivitySid: string;
  /**
   * The URL where the Flex instance is hosted.
   */
  runtimeDomain: string;
  /**
   * The SID of the Messaging service instance.
   */
  messagingServiceInstanceSid: string;
  /**
   * The SID of the chat service this user belongs to.
   */
  chatServiceInstanceSid: string;
  /**
   * The SID of the Flex service instance.
   */
  flexServiceInstanceSid: string;
  /**
   * The SID of the Flex instance.
   */
  flexInstanceSid: string;
  /**
   * The primary language of the Flex UI.
   */
  uiLanguage: string;
  /**
   * The object that describes Flex UI characteristics and settings.
   */
  uiAttributes: Record<string, object>;
  /**
   * The object that defines the NPM packages and versions to be used in Hosted Flex.
   */
  uiDependencies: Record<string, object>;
  /**
   * The Pinned UI version.
   */
  uiVersion: string;
  /**
   * The Flex Service version.
   */
  serviceVersion: string;
  /**
   * Whether call recording is enabled.
   */
  callRecordingEnabled: boolean;
  /**
   * The call recording webhook URL.
   */
  callRecordingWebhookUrl: string;
  /**
   * Whether CRM is present for Flex.
   */
  crmEnabled: boolean;
  /**
   * The CRM type.
   */
  crmType: string;
  /**
   * The CRM Callback URL.
   */
  crmCallbackUrl: string;
  /**
   * The CRM Fallback URL.
   */
  crmFallbackUrl: string;
  /**
   * An object that contains the CRM attributes.
   */
  crmAttributes: Record<string, object>;
  /**
   * The list of public attributes, which are visible to unauthenticated clients.
   */
  publicAttributes: Record<string, object>;
  /**
   * Whether the plugin service enabled.
   */
  pluginServiceEnabled: boolean;
  /**
   * The plugin service attributes.
   */
  pluginServiceAttributes: Record<string, object>;
  /**
   * A list of objects that contain the configurations for the Integrations supported in this configuration.
   */
  integrations: Array<Record<string, object>>;
  /**
   * The list of outbound call flows.
   */
  outboundCallFlows: Record<string, object>;
  /**
   * The list of serverless service SIDs.
   */
  serverlessServiceSids: Array<string>;
  /**
   * Configurable parameters for Queues Statistics.
   */
  queueStatsConfiguration: Record<string, object>;
  /**
   * Configurable parameters for Notifications.
   */
  notifications: Record<string, object>;
  /**
   * Configurable parameters for Markdown.
   */
  markdown: Record<string, object>;
  /**
   * The absolute URL of the Configuration resource.
   */
  url: string;
  /**
   * Object with enabled/disabled flag with list of workspaces.
   */
  flexInsightsHr: Record<string, object>;
  /**
   * Setting this to true will redirect Flex UI to the URL set in flex_url
   */
  flexInsightsDrilldown: boolean;
  /**
   * URL to redirect to in case drilldown is enabled.
   */
  flexUrl: string;
  /**
   * Settings for different limits for Flex Conversations channels attachments.
   */
  channelConfigs: Array<Record<string, object>>;
  /**
   * Configurable parameters for Debugger Integration.
   */
  debuggerIntegration: Record<string, object>;
  /**
   * Configurable parameters for Flex UI Status report.
   */
  flexUiStatusReport: Record<string, object>;
  /**
   * Agent conversation end methods.
   */
  agentConvEndMethods: Record<string, object>;
  /**
   * Citrix voice vdi configuration and settings.
   */
  citrixVoiceVdi: Record<string, object>;
  /**
   * Presence and presence ttl configuration
   */
  offlineConfig: Record<string, object>;

  private get _proxy(): ConfigurationContext {
    this._context =
      this._context || new ConfigurationContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;
  /**
   * Fetch a ConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  fetch(
    params: ConfigurationContextFetchOptions,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Update a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;
  /**
   * Update a ConfigurationInstance
   *
   * @param params - Body for request
   * @param headers - header params for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConfigurationInstance
   */
  update(
    params: object,
    headers?: any,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ConfigurationInstance) => any
  ): Promise<ConfigurationInstance> {
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
      attributes: this.attributes,
      status: this.status,
      taskrouterWorkspaceSid: this.taskrouterWorkspaceSid,
      taskrouterTargetWorkflowSid: this.taskrouterTargetWorkflowSid,
      taskrouterTargetTaskqueueSid: this.taskrouterTargetTaskqueueSid,
      taskrouterTaskqueues: this.taskrouterTaskqueues,
      taskrouterSkills: this.taskrouterSkills,
      taskrouterWorkerChannels: this.taskrouterWorkerChannels,
      taskrouterWorkerAttributes: this.taskrouterWorkerAttributes,
      taskrouterOfflineActivitySid: this.taskrouterOfflineActivitySid,
      runtimeDomain: this.runtimeDomain,
      messagingServiceInstanceSid: this.messagingServiceInstanceSid,
      chatServiceInstanceSid: this.chatServiceInstanceSid,
      flexServiceInstanceSid: this.flexServiceInstanceSid,
      flexInstanceSid: this.flexInstanceSid,
      uiLanguage: this.uiLanguage,
      uiAttributes: this.uiAttributes,
      uiDependencies: this.uiDependencies,
      uiVersion: this.uiVersion,
      serviceVersion: this.serviceVersion,
      callRecordingEnabled: this.callRecordingEnabled,
      callRecordingWebhookUrl: this.callRecordingWebhookUrl,
      crmEnabled: this.crmEnabled,
      crmType: this.crmType,
      crmCallbackUrl: this.crmCallbackUrl,
      crmFallbackUrl: this.crmFallbackUrl,
      crmAttributes: this.crmAttributes,
      publicAttributes: this.publicAttributes,
      pluginServiceEnabled: this.pluginServiceEnabled,
      pluginServiceAttributes: this.pluginServiceAttributes,
      integrations: this.integrations,
      outboundCallFlows: this.outboundCallFlows,
      serverlessServiceSids: this.serverlessServiceSids,
      queueStatsConfiguration: this.queueStatsConfiguration,
      notifications: this.notifications,
      markdown: this.markdown,
      url: this.url,
      flexInsightsHr: this.flexInsightsHr,
      flexInsightsDrilldown: this.flexInsightsDrilldown,
      flexUrl: this.flexUrl,
      channelConfigs: this.channelConfigs,
      debuggerIntegration: this.debuggerIntegration,
      flexUiStatusReport: this.flexUiStatusReport,
      agentConvEndMethods: this.agentConvEndMethods,
      citrixVoiceVdi: this.citrixVoiceVdi,
      offlineConfig: this.offlineConfig,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ConfigurationSolution {}

export interface ConfigurationListInstance {
  _version: V1;
  _solution: ConfigurationSolution;
  _uri: string;

  (): ConfigurationContext;
  get(): ConfigurationContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ConfigurationListInstance(
  version: V1
): ConfigurationListInstance {
  const instance = (() => instance.get()) as ConfigurationListInstance;

  instance.get = function get(): ConfigurationContext {
    return new ConfigurationContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
