/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../../../V2";
declare type ReplaceItemsStatus = "draft" | "pending-review" | "in-review" | "twilio-rejected" | "twilio-approved" | "provisionally-approved";
/**
 * Options to pass to create a ReplaceItemsInstance
 *
 * @property { string } fromBundleSid The source bundle sid to copy the item assignments from.
 */
export interface ReplaceItemsListInstanceCreateOptions {
    fromBundleSid: string;
}
export interface ReplaceItemsListInstance {
    /**
     * Create a ReplaceItemsInstance
     *
     * @param { ReplaceItemsListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ReplaceItemsInstance
     */
    create(params: ReplaceItemsListInstanceCreateOptions, callback?: (error: Error | null, item?: ReplaceItemsInstance) => any): Promise<ReplaceItemsInstance>;
    create(params: any, callback?: any): Promise<ReplaceItemsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ReplaceItemsSolution {
    bundleSid?: string;
}
export declare function ReplaceItemsListInstance(version: V2, bundleSid: string): ReplaceItemsListInstance;
interface ReplaceItemsResource {
    sid?: string | null;
    account_sid?: string | null;
    regulation_sid?: string | null;
    friendly_name?: string | null;
    status?: ReplaceItemsStatus;
    valid_until?: Date | null;
    email?: string | null;
    status_callback?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class ReplaceItemsInstance {
    protected _version: V2;
    constructor(_version: V2, payload: ReplaceItemsResource, bundleSid: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The unique string of a regulation
     */
    regulationSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    status?: ReplaceItemsStatus;
    /**
     * The ISO 8601 date and time in GMT when the resource will be valid until
     */
    validUntil?: Date | null;
    /**
     * The email address
     */
    email?: string | null;
    /**
     * The URL we call to inform your application of status changes
     */
    statusCallback?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        regulationSid: string | null | undefined;
        friendlyName: string | null | undefined;
        status: ReplaceItemsStatus | undefined;
        validUntil: Date | null | undefined;
        email: string | null | undefined;
        statusCallback: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
