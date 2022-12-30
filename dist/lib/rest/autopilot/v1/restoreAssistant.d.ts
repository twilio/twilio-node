/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a RestoreAssistantInstance
 *
 * @property { string } assistant The Twilio-provided string that uniquely identifies the Assistant resource to restore.
 */
export interface RestoreAssistantListInstanceUpdateOptions {
    assistant: string;
}
export interface RestoreAssistantListInstance {
    /**
     * Update a RestoreAssistantInstance
     *
     * @param { RestoreAssistantListInstanceUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RestoreAssistantInstance
     */
    update(params: RestoreAssistantListInstanceUpdateOptions, callback?: (error: Error | null, item?: RestoreAssistantInstance) => any): Promise<RestoreAssistantInstance>;
    update(params: any, callback?: any): Promise<RestoreAssistantInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RestoreAssistantSolution {
}
export declare function RestoreAssistantListInstance(version: V1): RestoreAssistantListInstance;
interface RestoreAssistantResource {
    account_sid?: string | null;
    sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    unique_name?: string | null;
    friendly_name?: string | null;
    needs_model_build?: boolean | null;
    latest_model_build_sid?: string | null;
    log_queries?: boolean | null;
    development_stage?: string | null;
    callback_url?: string | null;
    callback_events?: string | null;
}
export declare class RestoreAssistantInstance {
    protected _version: V1;
    constructor(_version: V1, payload: RestoreAssistantResource);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * An application-defined string that uniquely identifies the resource
     */
    uniqueName?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * Whether model needs to be rebuilt
     */
    needsModelBuild?: boolean | null;
    /**
     * Reserved
     */
    latestModelBuildSid?: string | null;
    /**
     * Whether queries should be logged and kept after training
     */
    logQueries?: boolean | null;
    /**
     * A string describing the state of the assistant.
     */
    developmentStage?: string | null;
    /**
     * Reserved
     */
    callbackUrl?: string | null;
    /**
     * Reserved
     */
    callbackEvents?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        sid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        uniqueName: string | null | undefined;
        friendlyName: string | null | undefined;
        needsModelBuild: boolean | null | undefined;
        latestModelBuildSid: string | null | undefined;
        logQueries: boolean | null | undefined;
        developmentStage: string | null | undefined;
        callbackUrl: string | null | undefined;
        callbackEvents: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
