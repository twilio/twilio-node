/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
/**
 * Options to pass to create a UserDefinedMessageSubscriptionInstance
 *
 * @property { string } callback The URL we should call using the `method` to send user defined events to your application. URLs must contain a valid hostname (underscores are not permitted).
 * @property { string } [idempotencyKey] A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated.
 * @property { string } [method] The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`.
 */
export interface UserDefinedMessageSubscriptionListInstanceCreateOptions {
    callback: string;
    idempotencyKey?: string;
    method?: string;
}
export interface UserDefinedMessageSubscriptionContext {
    /**
     * Remove a UserDefinedMessageSubscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserDefinedMessageSubscriptionContextSolution {
    accountSid?: string;
    callSid?: string;
    sid?: string;
}
export declare class UserDefinedMessageSubscriptionContextImpl implements UserDefinedMessageSubscriptionContext {
    protected _version: V2010;
    protected _solution: UserDefinedMessageSubscriptionContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, callSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UserDefinedMessageSubscriptionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UserDefinedMessageSubscriptionResource {
    account_sid?: string | null;
    call_sid?: string | null;
    sid?: string | null;
    date_created?: Date | null;
    uri?: string | null;
}
export declare class UserDefinedMessageSubscriptionInstance {
    protected _version: V2010;
    protected _solution: UserDefinedMessageSubscriptionContextSolution;
    protected _context?: UserDefinedMessageSubscriptionContext;
    constructor(_version: V2010, payload: UserDefinedMessageSubscriptionResource, accountSid: string, callSid: string, sid?: string);
    /**
     * Account SID.
     */
    accountSid?: string | null;
    /**
     * Call SID.
     */
    callSid?: string | null;
    /**
     * User Defined Message Subscription SID.
     */
    sid?: string | null;
    /**
     * The date this User Defined Message Subscription was created.
     */
    dateCreated?: Date | null;
    /**
     * The URI of the User Defined Message Subscription Resource, relative to `https://api.twilio.com`.
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Remove a UserDefinedMessageSubscriptionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        callSid: string | null | undefined;
        sid: string | null | undefined;
        dateCreated: Date | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UserDefinedMessageSubscriptionListInstance {
    (sid: string): UserDefinedMessageSubscriptionContext;
    get(sid: string): UserDefinedMessageSubscriptionContext;
    /**
     * Create a UserDefinedMessageSubscriptionInstance
     *
     * @param { UserDefinedMessageSubscriptionListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserDefinedMessageSubscriptionInstance
     */
    create(params: UserDefinedMessageSubscriptionListInstanceCreateOptions, callback?: (error: Error | null, item?: UserDefinedMessageSubscriptionInstance) => any): Promise<UserDefinedMessageSubscriptionInstance>;
    create(params: any, callback?: any): Promise<UserDefinedMessageSubscriptionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserDefinedMessageSubscriptionSolution {
    accountSid?: string;
    callSid?: string;
}
export declare function UserDefinedMessageSubscriptionListInstance(version: V2010, accountSid: string, callSid: string): UserDefinedMessageSubscriptionListInstance;
export {};
