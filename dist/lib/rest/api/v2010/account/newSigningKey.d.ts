/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../V2010";
/**
 * Options to pass to create a NewSigningKeyInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 */
export interface NewSigningKeyListInstanceCreateOptions {
    friendlyName?: string;
}
export interface NewSigningKeyListInstance {
    /**
     * Create a NewSigningKeyInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NewSigningKeyInstance
     */
    create(callback?: (error: Error | null, item?: NewSigningKeyInstance) => any): Promise<NewSigningKeyInstance>;
    /**
     * Create a NewSigningKeyInstance
     *
     * @param { NewSigningKeyListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NewSigningKeyInstance
     */
    create(params: NewSigningKeyListInstanceCreateOptions, callback?: (error: Error | null, item?: NewSigningKeyInstance) => any): Promise<NewSigningKeyInstance>;
    create(params?: any, callback?: any): Promise<NewSigningKeyInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NewSigningKeySolution {
    accountSid?: string;
}
export declare function NewSigningKeyListInstance(version: V2010, accountSid: string): NewSigningKeyListInstance;
interface NewSigningKeyResource {
    sid?: string | null;
    friendly_name?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    secret?: string | null;
}
export declare class NewSigningKeyInstance {
    protected _version: V2010;
    constructor(_version: V2010, payload: NewSigningKeyResource, accountSid: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The secret your application uses to sign Access Tokens and to authenticate to the REST API.
     */
    secret?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        friendlyName: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        secret: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
