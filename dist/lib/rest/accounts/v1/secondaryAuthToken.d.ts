/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface SecondaryAuthTokenContext {
    /**
     * Create a SecondaryAuthTokenInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SecondaryAuthTokenInstance
     */
    create(callback?: (error: Error | null, item?: SecondaryAuthTokenInstance) => any): Promise<SecondaryAuthTokenInstance>;
    /**
     * Remove a SecondaryAuthTokenInstance
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
export interface SecondaryAuthTokenContextSolution {
}
export declare class SecondaryAuthTokenContextImpl implements SecondaryAuthTokenContext {
    protected _version: V1;
    protected _solution: SecondaryAuthTokenContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    create(callback?: any): Promise<SecondaryAuthTokenInstance>;
    remove(callback?: any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SecondaryAuthTokenContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SecondaryAuthTokenResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    secondary_auth_token?: string | null;
    url?: string | null;
}
export declare class SecondaryAuthTokenInstance {
    protected _version: V1;
    protected _solution: SecondaryAuthTokenContextSolution;
    protected _context?: SecondaryAuthTokenContext;
    constructor(_version: V1, payload: SecondaryAuthTokenResource);
    /**
     * The SID of the Account that the secondary Auth Token was created for
     */
    accountSid?: string | null;
    /**
     * The ISO 8601 formatted date and time in UTC when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 formatted date and time in UTC when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The generated secondary Auth Token
     */
    secondaryAuthToken?: string | null;
    /**
     * The URI for this resource, relative to `https://accounts.twilio.com`
     */
    url?: string | null;
    private get _proxy();
    /**
     * Create a SecondaryAuthTokenInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SecondaryAuthTokenInstance
     */
    create(callback?: (error: Error | null, item?: SecondaryAuthTokenInstance) => any): Promise<SecondaryAuthTokenInstance>;
    /**
     * Remove a SecondaryAuthTokenInstance
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
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        secondaryAuthToken: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SecondaryAuthTokenListInstance {
    (): SecondaryAuthTokenContext;
    get(): SecondaryAuthTokenContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SecondaryAuthTokenSolution {
}
export declare function SecondaryAuthTokenListInstance(version: V1): SecondaryAuthTokenListInstance;
export {};
