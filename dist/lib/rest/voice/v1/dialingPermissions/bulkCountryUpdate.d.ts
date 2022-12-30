/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Options to pass to create a BulkCountryUpdateInstance
 *
 * @property { string } updateRequest URL encoded JSON array of update objects. example : `[ { \\\"iso_code\\\": \\\"GB\\\", \\\"low_risk_numbers_enabled\\\": \\\"true\\\", \\\"high_risk_special_numbers_enabled\\\":\\\"true\\\", \\\"high_risk_tollfraud_numbers_enabled\\\": \\\"false\\\" } ]`
 */
export interface BulkCountryUpdateListInstanceCreateOptions {
    updateRequest: string;
}
export interface BulkCountryUpdateListInstance {
    /**
     * Create a BulkCountryUpdateInstance
     *
     * @param { BulkCountryUpdateListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BulkCountryUpdateInstance
     */
    create(params: BulkCountryUpdateListInstanceCreateOptions, callback?: (error: Error | null, item?: BulkCountryUpdateInstance) => any): Promise<BulkCountryUpdateInstance>;
    create(params: any, callback?: any): Promise<BulkCountryUpdateInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BulkCountryUpdateSolution {
}
export declare function BulkCountryUpdateListInstance(version: V1): BulkCountryUpdateListInstance;
interface BulkCountryUpdateResource {
    update_count?: number | null;
    update_request?: string | null;
}
export declare class BulkCountryUpdateInstance {
    protected _version: V1;
    constructor(_version: V1, payload: BulkCountryUpdateResource);
    /**
     * The number of countries updated
     */
    updateCount?: number | null;
    /**
     * A URL encoded JSON array of update objects
     */
    updateRequest?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        updateCount: number | null | undefined;
        updateRequest: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
