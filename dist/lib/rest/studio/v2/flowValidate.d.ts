/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
declare type FlowValidateStatus = "draft" | "published";
/**
 * Options to pass to update a FlowValidateInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the Flow.
 * @property { FlowValidateStatus } status
 * @property { any } definition JSON representation of flow definition.
 * @property { string } [commitMessage] Description of change made in the revision.
 */
export interface FlowValidateListInstanceUpdateOptions {
    friendlyName: string;
    status: FlowValidateStatus;
    definition: any;
    commitMessage?: string;
}
export interface FlowValidateListInstance {
    /**
     * Update a FlowValidateInstance
     *
     * @param { FlowValidateListInstanceUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowValidateInstance
     */
    update(params: FlowValidateListInstanceUpdateOptions, callback?: (error: Error | null, item?: FlowValidateInstance) => any): Promise<FlowValidateInstance>;
    update(params: any, callback?: any): Promise<FlowValidateInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FlowValidateSolution {
}
export declare function FlowValidateListInstance(version: V2): FlowValidateListInstance;
interface FlowValidateResource {
    valid?: boolean | null;
}
export declare class FlowValidateInstance {
    protected _version: V2;
    constructor(_version: V2, payload: FlowValidateResource);
    /**
     * Boolean if the flow definition is valid
     */
    valid?: boolean | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        valid: boolean | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
