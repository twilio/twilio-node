/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to fetch a DeactivationsInstance
 *
 * @property { Date } [date] The request will return a list of all United States Phone Numbers that were deactivated on the day specified by this parameter. This date should be specified in YYYY-MM-DD format.
 */
export interface DeactivationsContextFetchOptions {
    date?: Date;
}
export interface DeactivationsContext {
    /**
     * Fetch a DeactivationsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeactivationsInstance
     */
    fetch(callback?: (error: Error | null, item?: DeactivationsInstance) => any): Promise<DeactivationsInstance>;
    /**
     * Fetch a DeactivationsInstance
     *
     * @param { DeactivationsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeactivationsInstance
     */
    fetch(params: DeactivationsContextFetchOptions, callback?: (error: Error | null, item?: DeactivationsInstance) => any): Promise<DeactivationsInstance>;
    fetch(params?: any, callback?: any): Promise<DeactivationsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeactivationsContextSolution {
}
export declare class DeactivationsContextImpl implements DeactivationsContext {
    protected _version: V1;
    protected _solution: DeactivationsContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(params?: any, callback?: any): Promise<DeactivationsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DeactivationsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DeactivationsResource {
    redirect_to?: string | null;
}
export declare class DeactivationsInstance {
    protected _version: V1;
    protected _solution: DeactivationsContextSolution;
    protected _context?: DeactivationsContext;
    constructor(_version: V1, payload: DeactivationsResource);
    /**
     * Redirect url to the list of deactivated numbers.
     */
    redirectTo?: string | null;
    private get _proxy();
    /**
     * Fetch a DeactivationsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeactivationsInstance
     */
    fetch(callback?: (error: Error | null, item?: DeactivationsInstance) => any): Promise<DeactivationsInstance>;
    /**
     * Fetch a DeactivationsInstance
     *
     * @param { DeactivationsContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeactivationsInstance
     */
    fetch(params: DeactivationsContextFetchOptions, callback?: (error: Error | null, item?: DeactivationsInstance) => any): Promise<DeactivationsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        redirectTo: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DeactivationsListInstance {
    (): DeactivationsContext;
    get(): DeactivationsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeactivationsSolution {
}
export declare function DeactivationsListInstance(version: V1): DeactivationsListInstance;
export {};
