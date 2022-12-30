/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a ExternalCampaignInstance
 *
 * @property { string } campaignId ID of the preregistered campaign.
 * @property { string } messagingServiceSid The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) that the resource is associated with.
 */
export interface ExternalCampaignListInstanceCreateOptions {
    campaignId: string;
    messagingServiceSid: string;
}
export interface ExternalCampaignListInstance {
    /**
     * Create a ExternalCampaignInstance
     *
     * @param { ExternalCampaignListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExternalCampaignInstance
     */
    create(params: ExternalCampaignListInstanceCreateOptions, callback?: (error: Error | null, item?: ExternalCampaignInstance) => any): Promise<ExternalCampaignInstance>;
    create(params: any, callback?: any): Promise<ExternalCampaignInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExternalCampaignSolution {
}
export declare function ExternalCampaignListInstance(version: V1): ExternalCampaignListInstance;
interface ExternalCampaignResource {
    sid?: string | null;
    account_sid?: string | null;
    campaign_id?: string | null;
    messaging_service_sid?: string | null;
    date_created?: Date | null;
}
export declare class ExternalCampaignInstance {
    protected _version: V1;
    constructor(_version: V1, payload: ExternalCampaignResource);
    /**
     * The unique string that identifies a US A2P Compliance resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * ID of the preregistered campaign.
     */
    campaignId?: string | null;
    /**
     * The SID of the Messaging Service the resource is associated with
     */
    messagingServiceSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        campaignId: string | null | undefined;
        messagingServiceSid: string | null | undefined;
        dateCreated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
