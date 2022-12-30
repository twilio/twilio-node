/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Options to pass to fetch a UsAppToPersonUsecaseInstance
 *
 * @property { string } [brandRegistrationSid] The unique string to identify the A2P brand.
 */
export interface UsAppToPersonUsecaseListInstanceFetchOptions {
    brandRegistrationSid?: string;
}
export interface UsAppToPersonUsecaseListInstance {
    /**
     * Fetch a UsAppToPersonUsecaseInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UsAppToPersonUsecaseInstance
     */
    fetch(callback?: (error: Error | null, item?: UsAppToPersonUsecaseInstance) => any): Promise<UsAppToPersonUsecaseInstance>;
    /**
     * Fetch a UsAppToPersonUsecaseInstance
     *
     * @param { UsAppToPersonUsecaseListInstanceFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UsAppToPersonUsecaseInstance
     */
    fetch(params: UsAppToPersonUsecaseListInstanceFetchOptions, callback?: (error: Error | null, item?: UsAppToPersonUsecaseInstance) => any): Promise<UsAppToPersonUsecaseInstance>;
    fetch(params?: any, callback?: any): Promise<UsAppToPersonUsecaseInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UsAppToPersonUsecaseSolution {
    messagingServiceSid?: string;
}
export declare function UsAppToPersonUsecaseListInstance(version: V1, messagingServiceSid: string): UsAppToPersonUsecaseListInstance;
interface UsAppToPersonUsecaseResource {
    us_app_to_person_usecases?: Array<any> | null;
}
export declare class UsAppToPersonUsecaseInstance {
    protected _version: V1;
    constructor(_version: V1, payload: UsAppToPersonUsecaseResource, messagingServiceSid: string);
    /**
     * Human readable A2P Use Case details
     */
    usAppToPersonUsecases?: Array<any> | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        usAppToPersonUsecases: any[] | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
