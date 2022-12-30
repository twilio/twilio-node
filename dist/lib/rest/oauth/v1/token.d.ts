/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a TokenInstance
 *
 * @property { string } grantType Grant type is a credential representing resource owner\\\'s authorization which can be used by client to obtain access token.
 * @property { string } clientSid A 34 character string that uniquely identifies this OAuth App.
 * @property { string } [clientSecret] The credential for confidential OAuth App.
 * @property { string } [code] JWT token related to the authorization code grant type.
 * @property { string } [codeVerifier] A code which is generation cryptographically.
 * @property { string } [deviceCode] JWT token related to the device code grant type.
 * @property { string } [refreshToken] JWT token related to the refresh token grant type.
 * @property { string } [deviceId] The Id of the device associated with the token (refresh token).
 */
export interface TokenListInstanceCreateOptions {
    grantType: string;
    clientSid: string;
    clientSecret?: string;
    code?: string;
    codeVerifier?: string;
    deviceCode?: string;
    refreshToken?: string;
    deviceId?: string;
}
export interface TokenListInstance {
    /**
     * Create a TokenInstance
     *
     * @param { TokenListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TokenInstance
     */
    create(params: TokenListInstanceCreateOptions, callback?: (error: Error | null, item?: TokenInstance) => any): Promise<TokenInstance>;
    create(params: any, callback?: any): Promise<TokenInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TokenSolution {
}
export declare function TokenListInstance(version: V1): TokenListInstance;
interface TokenResource {
    access_token?: string | null;
    refresh_token?: string | null;
    id_token?: string | null;
    refresh_token_expires_at?: Date | null;
    access_token_expires_at?: Date | null;
}
export declare class TokenInstance {
    protected _version: V1;
    constructor(_version: V1, payload: TokenResource);
    /**
     * Token which carries the necessary information to access a Twilio resource directly
     */
    accessToken?: string | null;
    /**
     * Token which carries the information necessary to get a new access token
     */
    refreshToken?: string | null;
    idToken?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the refresh token expires
     */
    refreshTokenExpiresAt?: Date | null;
    /**
     * The RFC 2822 date and time in GMT when the access token expires
     */
    accessTokenExpiresAt?: Date | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accessToken: string | null | undefined;
        refreshToken: string | null | undefined;
        idToken: string | null | undefined;
        refreshTokenExpiresAt: Date | null | undefined;
        accessTokenExpiresAt: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
