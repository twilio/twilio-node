/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
declare type MessageFeedbackOutcome = "confirmed" | "unconfirmed";
/**
 * Options to pass to create a FeedbackInstance
 *
 * @property { MessageFeedbackOutcome } [outcome]
 */
export interface FeedbackListInstanceCreateOptions {
    outcome?: MessageFeedbackOutcome;
}
export interface FeedbackListInstance {
    /**
     * Create a FeedbackInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackInstance
     */
    create(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Create a FeedbackInstance
     *
     * @param { FeedbackListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackInstance
     */
    create(params: FeedbackListInstanceCreateOptions, callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    create(params?: any, callback?: any): Promise<FeedbackInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FeedbackSolution {
    accountSid?: string;
    messageSid?: string;
}
export declare function FeedbackListInstance(version: V2010, accountSid: string, messageSid: string): FeedbackListInstance;
interface FeedbackResource {
    account_sid?: string | null;
    message_sid?: string | null;
    outcome?: MessageFeedbackOutcome;
    date_created?: Date | null;
    date_updated?: Date | null;
    uri?: string | null;
}
export declare class FeedbackInstance {
    protected _version: V2010;
    constructor(_version: V2010, payload: FeedbackResource, accountSid: string, messageSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Message resource for which the feedback was provided
     */
    messageSid?: string | null;
    outcome?: MessageFeedbackOutcome;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        messageSid: string | null | undefined;
        outcome: MessageFeedbackOutcome | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
