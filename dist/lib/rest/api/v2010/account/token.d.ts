/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../V2010";
export declare class ApiV2010AccountTokenIceServers {
    "credential"?: string;
    "username"?: string;
    "url"?: string;
    "urls"?: string;
}
/**
 * Options to pass to create a TokenInstance
 *
 * @property { number } [ttl] The duration in seconds for which the generated credentials are valid. The default value is 86400 (24 hours).
 */
export interface TokenListInstanceCreateOptions {
    ttl?: number;
}
export interface TokenListInstance {
    /**
     * Create a TokenInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TokenInstance
     */
    create(callback?: (error: Error | null, item?: TokenInstance) => any): Promise<TokenInstance>;
    /**
     * Create a TokenInstance
     *
     * @param { TokenListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TokenInstance
     */
    create(params: TokenListInstanceCreateOptions, callback?: (error: Error | null, item?: TokenInstance) => any): Promise<TokenInstance>;
    create(params?: any, callback?: any): Promise<TokenInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TokenSolution {
    accountSid?: string;
}
export declare function TokenListInstance(version: V2010, accountSid: string): TokenListInstance;
interface TokenResource {
    account_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    ice_servers?: Array<ApiV2010AccountTokenIceServers> | null;
    password?: string | null;
    ttl?: string | null;
    username?: string | null;
}
export declare class TokenInstance {
    protected _version: V2010;
    constructor(_version: V2010, payload: TokenResource, accountSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * An array representing the ephemeral credentials
     */
    iceServers?: Array<ApiV2010AccountTokenIceServers> | null;
    /**
     * The temporary password used for authenticating
     */
    password?: string | null;
    /**
     * The duration in seconds the credentials are valid
     */
    ttl?: string | null;
    /**
     * The temporary username that uniquely identifies a Token
     */
    username?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        iceServers: ApiV2010AccountTokenIceServers[] | null | undefined;
        password: string | null | undefined;
        ttl: string | null | undefined;
        username: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
