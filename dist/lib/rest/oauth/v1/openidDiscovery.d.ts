/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface OpenidDiscoveryContext {
    /**
     * Fetch a OpenidDiscoveryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OpenidDiscoveryInstance
     */
    fetch(callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any): Promise<OpenidDiscoveryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OpenidDiscoveryContextSolution {
}
export declare class OpenidDiscoveryContextImpl implements OpenidDiscoveryContext {
    protected _version: V1;
    protected _solution: OpenidDiscoveryContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(callback?: any): Promise<OpenidDiscoveryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): OpenidDiscoveryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface OpenidDiscoveryResource {
    issuer?: string | null;
    authorization_endpoint?: string | null;
    device_authorization_endpoint?: string | null;
    token_endpoint?: string | null;
    userinfo_endpoint?: string | null;
    revocation_endpoint?: string | null;
    jwk_uri?: string | null;
    response_type_supported?: Array<string> | null;
    subject_type_supported?: Array<string> | null;
    id_token_signing_alg_values_supported?: Array<string> | null;
    scopes_supported?: Array<string> | null;
    claims_supported?: Array<string> | null;
    url?: string | null;
}
export declare class OpenidDiscoveryInstance {
    protected _version: V1;
    protected _solution: OpenidDiscoveryContextSolution;
    protected _context?: OpenidDiscoveryContext;
    constructor(_version: V1, payload: OpenidDiscoveryResource);
    /**
     * The issuer URL
     */
    issuer?: string | null;
    /**
     * The URL of authorization endpoint
     */
    authorizationEndpoint?: string | null;
    /**
     * The URL of device code authorization endpoint
     */
    deviceAuthorizationEndpoint?: string | null;
    /**
     * The URL of token endpoint
     */
    tokenEndpoint?: string | null;
    /**
     * The URL of user info endpoint
     */
    userinfoEndpoint?: string | null;
    /**
     * The URL of revocation endpoint
     */
    revocationEndpoint?: string | null;
    /**
     * The URL of public JWK endpoint
     */
    jwkUri?: string | null;
    /**
     * List of response type supported for identity token
     */
    responseTypeSupported?: Array<string> | null;
    /**
     * List of subject supported for identity token
     */
    subjectTypeSupported?: Array<string> | null;
    /**
     * List of JWS signing algorithms supported for identity token
     */
    idTokenSigningAlgValuesSupported?: Array<string> | null;
    /**
     * List of scopes supported identity token
     */
    scopesSupported?: Array<string> | null;
    /**
     * List of claims supported for identity token
     */
    claimsSupported?: Array<string> | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a OpenidDiscoveryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OpenidDiscoveryInstance
     */
    fetch(callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any): Promise<OpenidDiscoveryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        issuer: string | null | undefined;
        authorizationEndpoint: string | null | undefined;
        deviceAuthorizationEndpoint: string | null | undefined;
        tokenEndpoint: string | null | undefined;
        userinfoEndpoint: string | null | undefined;
        revocationEndpoint: string | null | undefined;
        jwkUri: string | null | undefined;
        responseTypeSupported: string[] | null | undefined;
        subjectTypeSupported: string[] | null | undefined;
        idTokenSigningAlgValuesSupported: string[] | null | undefined;
        scopesSupported: string[] | null | undefined;
        claimsSupported: string[] | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface OpenidDiscoveryListInstance {
    (): OpenidDiscoveryContext;
    get(): OpenidDiscoveryContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OpenidDiscoverySolution {
}
export declare function OpenidDiscoveryListInstance(version: V1): OpenidDiscoveryListInstance;
export {};
