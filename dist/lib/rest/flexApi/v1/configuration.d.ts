/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
declare type ConfigurationStatus = "ok" | "inprogress" | "notstarted";
/**
 * Options to pass to fetch a ConfigurationInstance
 *
 * @property { string } [uiVersion] The Pinned UI version of the Configuration resource to fetch.
 */
export interface ConfigurationContextFetchOptions {
    uiVersion?: string;
}
export interface ConfigurationContext {
    /**
     * Fetch a ConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
    /**
     * Fetch a ConfigurationInstance
     *
     * @param { ConfigurationContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConfigurationInstance
     */
    fetch(params: ConfigurationContextFetchOptions, callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
    fetch(params?: any, callback?: any): Promise<ConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConfigurationContextSolution {
}
export declare class ConfigurationContextImpl implements ConfigurationContext {
    protected _version: V1;
    protected _solution: ConfigurationContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(params?: any, callback?: any): Promise<ConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ConfigurationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ConfigurationResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    attributes?: any | null;
    status?: ConfigurationStatus;
    taskrouter_workspace_sid?: string | null;
    taskrouter_target_workflow_sid?: string | null;
    taskrouter_target_taskqueue_sid?: string | null;
    taskrouter_taskqueues?: Array<any> | null;
    taskrouter_skills?: Array<any> | null;
    taskrouter_worker_channels?: any | null;
    taskrouter_worker_attributes?: any | null;
    taskrouter_offline_activity_sid?: string | null;
    runtime_domain?: string | null;
    messaging_service_instance_sid?: string | null;
    chat_service_instance_sid?: string | null;
    flex_service_instance_sid?: string | null;
    ui_language?: string | null;
    ui_attributes?: any | null;
    ui_dependencies?: any | null;
    ui_version?: string | null;
    service_version?: string | null;
    call_recording_enabled?: boolean | null;
    call_recording_webhook_url?: string | null;
    crm_enabled?: boolean | null;
    crm_type?: string | null;
    crm_callback_url?: string | null;
    crm_fallback_url?: string | null;
    crm_attributes?: any | null;
    public_attributes?: any | null;
    plugin_service_enabled?: boolean | null;
    plugin_service_attributes?: any | null;
    integrations?: Array<any> | null;
    outbound_call_flows?: any | null;
    serverless_service_sids?: Array<string> | null;
    queue_stats_configuration?: any | null;
    notifications?: any | null;
    markdown?: any | null;
    url?: string | null;
    flex_insights_hr?: any | null;
    flex_insights_drilldown?: boolean | null;
    flex_url?: string | null;
    channel_configs?: Array<any> | null;
    debugger_integration?: any | null;
    flex_ui_status_report?: any | null;
}
export declare class ConfigurationInstance {
    protected _version: V1;
    protected _solution: ConfigurationContextSolution;
    protected _context?: ConfigurationContext;
    constructor(_version: V1, payload: ConfigurationResource);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the Configuration resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Configuration resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * An object that contains application-specific data
     */
    attributes?: any | null;
    status?: ConfigurationStatus;
    /**
     * The SID of the TaskRouter Workspace
     */
    taskrouterWorkspaceSid?: string | null;
    /**
     * The SID of the TaskRouter target Workflow
     */
    taskrouterTargetWorkflowSid?: string | null;
    /**
     * The SID of the TaskRouter Target TaskQueue
     */
    taskrouterTargetTaskqueueSid?: string | null;
    /**
     * The list of TaskRouter TaskQueues
     */
    taskrouterTaskqueues?: Array<any> | null;
    /**
     * The Skill description for TaskRouter workers
     */
    taskrouterSkills?: Array<any> | null;
    /**
     * The TaskRouter default channel capacities and availability for workers
     */
    taskrouterWorkerChannels?: any | null;
    /**
     * The TaskRouter Worker attributes
     */
    taskrouterWorkerAttributes?: any | null;
    /**
     * The TaskRouter SID of the offline activity
     */
    taskrouterOfflineActivitySid?: string | null;
    /**
     * The URL where the Flex instance is hosted
     */
    runtimeDomain?: string | null;
    /**
     * The SID of the Messaging service instance
     */
    messagingServiceInstanceSid?: string | null;
    /**
     * The SID of the chat service this user belongs to
     */
    chatServiceInstanceSid?: string | null;
    /**
     * The SID of the Flex service instance
     */
    flexServiceInstanceSid?: string | null;
    /**
     * The primary language of the Flex UI
     */
    uiLanguage?: string | null;
    /**
     * The object that describes Flex UI characteristics and settings
     */
    uiAttributes?: any | null;
    /**
     * The object that defines the NPM packages and versions to be used in Hosted Flex
     */
    uiDependencies?: any | null;
    /**
     * The Pinned UI version
     */
    uiVersion?: string | null;
    /**
     * The Flex Service version
     */
    serviceVersion?: string | null;
    /**
     * Whether call recording is enabled
     */
    callRecordingEnabled?: boolean | null;
    /**
     * The call recording webhook URL
     */
    callRecordingWebhookUrl?: string | null;
    /**
     * Whether CRM is present for Flex
     */
    crmEnabled?: boolean | null;
    /**
     * The CRM Type
     */
    crmType?: string | null;
    /**
     * The CRM Callback URL
     */
    crmCallbackUrl?: string | null;
    /**
     * The CRM Fallback URL
     */
    crmFallbackUrl?: string | null;
    /**
     * An object that contains the CRM attributes
     */
    crmAttributes?: any | null;
    /**
     * The list of public attributes
     */
    publicAttributes?: any | null;
    /**
     * Whether the plugin service enabled
     */
    pluginServiceEnabled?: boolean | null;
    /**
     * The plugin service attributes
     */
    pluginServiceAttributes?: any | null;
    /**
     * A list of objects that contain the configurations for the Integrations supported in this configuration
     */
    integrations?: Array<any> | null;
    /**
     * The list of outbound call flows
     */
    outboundCallFlows?: any | null;
    /**
     * The list of serverless service SIDs
     */
    serverlessServiceSids?: Array<string> | null;
    /**
     * Configurable parameters for Queues Statistics
     */
    queueStatsConfiguration?: any | null;
    /**
     * Configurable parameters for Notifications
     */
    notifications?: any | null;
    /**
     * Configurable parameters for Markdown
     */
    markdown?: any | null;
    /**
     * The absolute URL of the Configuration resource
     */
    url?: string | null;
    /**
     * Object that controls workspace reporting
     */
    flexInsightsHr?: any | null;
    /**
     * Setting to enable Flex UI redirection
     */
    flexInsightsDrilldown?: boolean | null;
    /**
     * URL to redirect to in case drilldown is enabled.
     */
    flexUrl?: string | null;
    /**
     * Flex Conversations channels\' attachments configurations
     */
    channelConfigs?: Array<any> | null;
    /**
     * Configurable parameters for Debugger Integration
     */
    debuggerIntegration?: any | null;
    /**
     * Configurable parameters for Flex UI Status report
     */
    flexUiStatusReport?: any | null;
    private get _proxy();
    /**
     * Fetch a ConfigurationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
    /**
     * Fetch a ConfigurationInstance
     *
     * @param { ConfigurationContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ConfigurationInstance
     */
    fetch(params: ConfigurationContextFetchOptions, callback?: (error: Error | null, item?: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        attributes: any;
        status: ConfigurationStatus | undefined;
        taskrouterWorkspaceSid: string | null | undefined;
        taskrouterTargetWorkflowSid: string | null | undefined;
        taskrouterTargetTaskqueueSid: string | null | undefined;
        taskrouterTaskqueues: any[] | null | undefined;
        taskrouterSkills: any[] | null | undefined;
        taskrouterWorkerChannels: any;
        taskrouterWorkerAttributes: any;
        taskrouterOfflineActivitySid: string | null | undefined;
        runtimeDomain: string | null | undefined;
        messagingServiceInstanceSid: string | null | undefined;
        chatServiceInstanceSid: string | null | undefined;
        flexServiceInstanceSid: string | null | undefined;
        uiLanguage: string | null | undefined;
        uiAttributes: any;
        uiDependencies: any;
        uiVersion: string | null | undefined;
        serviceVersion: string | null | undefined;
        callRecordingEnabled: boolean | null | undefined;
        callRecordingWebhookUrl: string | null | undefined;
        crmEnabled: boolean | null | undefined;
        crmType: string | null | undefined;
        crmCallbackUrl: string | null | undefined;
        crmFallbackUrl: string | null | undefined;
        crmAttributes: any;
        publicAttributes: any;
        pluginServiceEnabled: boolean | null | undefined;
        pluginServiceAttributes: any;
        integrations: any[] | null | undefined;
        outboundCallFlows: any;
        serverlessServiceSids: string[] | null | undefined;
        queueStatsConfiguration: any;
        notifications: any;
        markdown: any;
        url: string | null | undefined;
        flexInsightsHr: any;
        flexInsightsDrilldown: boolean | null | undefined;
        flexUrl: string | null | undefined;
        channelConfigs: any[] | null | undefined;
        debuggerIntegration: any;
        flexUiStatusReport: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ConfigurationListInstance {
    (): ConfigurationContext;
    get(): ConfigurationContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConfigurationSolution {
}
export declare function ConfigurationListInstance(version: V1): ConfigurationListInstance;
export {};
