/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a GoodDataInstance
 *
 * @property { string } [token] The Token HTTP request header
 */
export interface GoodDataContextCreateOptions {
    token?: string;
}
export interface GoodDataContext {
    /**
     * Create a GoodDataInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed GoodDataInstance
     */
    create(callback?: (error: Error | null, item?: GoodDataInstance) => any): Promise<GoodDataInstance>;
    /**
     * Create a GoodDataInstance
     *
     * @param { GoodDataContextCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed GoodDataInstance
     */
    create(params: GoodDataContextCreateOptions, callback?: (error: Error | null, item?: GoodDataInstance) => any): Promise<GoodDataInstance>;
    create(params?: any, callback?: any): Promise<GoodDataInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface GoodDataContextSolution {
}
export declare class GoodDataContextImpl implements GoodDataContext {
    protected _version: V1;
    protected _solution: GoodDataContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    create(params?: any, callback?: any): Promise<GoodDataInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): GoodDataContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface GoodDataResource {
    workspace_id?: string | null;
    session_expiry?: string | null;
    session_id?: string | null;
    base_url?: string | null;
    url?: string | null;
}
export declare class GoodDataInstance {
    protected _version: V1;
    protected _solution: GoodDataContextSolution;
    protected _context?: GoodDataContext;
    constructor(_version: V1, payload: GoodDataResource);
    /**
     * Unique ID to identify the user\'s workspace
     */
    workspaceId?: string | null;
    /**
     * The session expiry date and time
     */
    sessionExpiry?: string | null;
    /**
     * Unique session ID
     */
    sessionId?: string | null;
    /**
     * Base URL to fetch reports and dashboards
     */
    baseUrl?: string | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Create a GoodDataInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed GoodDataInstance
     */
    create(callback?: (error: Error | null, item?: GoodDataInstance) => any): Promise<GoodDataInstance>;
    /**
     * Create a GoodDataInstance
     *
     * @param { GoodDataContextCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed GoodDataInstance
     */
    create(params: GoodDataContextCreateOptions, callback?: (error: Error | null, item?: GoodDataInstance) => any): Promise<GoodDataInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        workspaceId: string | null | undefined;
        sessionExpiry: string | null | undefined;
        sessionId: string | null | undefined;
        baseUrl: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface GoodDataListInstance {
    (): GoodDataContext;
    get(): GoodDataContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface GoodDataSolution {
}
export declare function GoodDataListInstance(version: V1): GoodDataListInstance;
export {};
