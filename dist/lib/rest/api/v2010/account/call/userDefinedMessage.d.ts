/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
/**
 * Options to pass to create a UserDefinedMessageInstance
 *
 * @property { string } content The User Defined Message in the form of URL-encoded JSON string.
 * @property { string } [idempotencyKey] A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated.
 */
export interface UserDefinedMessageListInstanceCreateOptions {
    content: string;
    idempotencyKey?: string;
}
export interface UserDefinedMessageListInstance {
    /**
     * Create a UserDefinedMessageInstance
     *
     * @param { UserDefinedMessageListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserDefinedMessageInstance
     */
    create(params: UserDefinedMessageListInstanceCreateOptions, callback?: (error: Error | null, item?: UserDefinedMessageInstance) => any): Promise<UserDefinedMessageInstance>;
    create(params: any, callback?: any): Promise<UserDefinedMessageInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserDefinedMessageSolution {
    accountSid?: string;
    callSid?: string;
}
export declare function UserDefinedMessageListInstance(version: V2010, accountSid: string, callSid: string): UserDefinedMessageListInstance;
interface UserDefinedMessageResource {
    account_sid?: string | null;
    call_sid?: string | null;
    sid?: string | null;
    date_created?: Date | null;
}
export declare class UserDefinedMessageInstance {
    protected _version: V2010;
    constructor(_version: V2010, payload: UserDefinedMessageResource, accountSid: string, callSid: string);
    /**
     * Account SID.
     */
    accountSid?: string | null;
    /**
     * Call SID.
     */
    callSid?: string | null;
    /**
     * User Defined Message SID.
     */
    sid?: string | null;
    /**
     * The date this User Defined Message was created.
     */
    dateCreated?: Date | null;
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
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
