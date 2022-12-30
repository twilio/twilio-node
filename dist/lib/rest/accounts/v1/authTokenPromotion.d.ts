/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface AuthTokenPromotionContext {
    /**
     * Update a AuthTokenPromotionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthTokenPromotionInstance
     */
    update(callback?: (error: Error | null, item?: AuthTokenPromotionInstance) => any): Promise<AuthTokenPromotionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AuthTokenPromotionContextSolution {
}
export declare class AuthTokenPromotionContextImpl implements AuthTokenPromotionContext {
    protected _version: V1;
    protected _solution: AuthTokenPromotionContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    update(callback?: any): Promise<AuthTokenPromotionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AuthTokenPromotionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AuthTokenPromotionResource {
    account_sid?: string | null;
    auth_token?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    url?: string | null;
}
export declare class AuthTokenPromotionInstance {
    protected _version: V1;
    protected _solution: AuthTokenPromotionContextSolution;
    protected _context?: AuthTokenPromotionContext;
    constructor(_version: V1, payload: AuthTokenPromotionResource);
    /**
     * The SID of the Account that the secondary Auth Token was created for
     */
    accountSid?: string | null;
    /**
     * The promoted Auth Token
     */
    authToken?: string | null;
    /**
     * The ISO 8601 formatted date and time in UTC when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 formatted date and time in UTC when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The URI for this resource, relative to `https://accounts.twilio.com`
     */
    url?: string | null;
    private get _proxy();
    /**
     * Update a AuthTokenPromotionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthTokenPromotionInstance
     */
    update(callback?: (error: Error | null, item?: AuthTokenPromotionInstance) => any): Promise<AuthTokenPromotionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        authToken: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AuthTokenPromotionListInstance {
    (): AuthTokenPromotionContext;
    get(): AuthTokenPromotionContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AuthTokenPromotionSolution {
}
export declare function AuthTokenPromotionListInstance(version: V1): AuthTokenPromotionListInstance;
export {};
