/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface OauthContext {
    /**
     * Fetch a OauthInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OauthInstance
     */
    fetch(callback?: (error: Error | null, item?: OauthInstance) => any): Promise<OauthInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OauthContextSolution {
}
export declare class OauthContextImpl implements OauthContext {
    protected _version: V1;
    protected _solution: OauthContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(callback?: any): Promise<OauthInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): OauthContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface OauthResource {
    keys?: any | null;
    url?: string | null;
}
export declare class OauthInstance {
    protected _version: V1;
    protected _solution: OauthContextSolution;
    protected _context?: OauthContext;
    constructor(_version: V1, payload: OauthResource);
    /**
     * A collection of certificates
     */
    keys?: any | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a OauthInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed OauthInstance
     */
    fetch(callback?: (error: Error | null, item?: OauthInstance) => any): Promise<OauthInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        keys: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface OauthListInstance {
    (): OauthContext;
    get(): OauthContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OauthSolution {
}
export declare function OauthListInstance(version: V1): OauthListInstance;
export {};
