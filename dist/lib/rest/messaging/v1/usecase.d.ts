/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface UsecaseListInstance {
    /**
     * Fetch a UsecaseInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UsecaseInstance
     */
    fetch(callback?: (error: Error | null, item?: UsecaseInstance) => any): Promise<UsecaseInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UsecaseSolution {
}
export declare function UsecaseListInstance(version: V1): UsecaseListInstance;
interface UsecaseResource {
    usecases?: Array<any> | null;
}
export declare class UsecaseInstance {
    protected _version: V1;
    constructor(_version: V1, payload: UsecaseResource);
    /**
     * Human readable Messaging Service Use Case details
     */
    usecases?: Array<any> | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        usecases: any[] | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
