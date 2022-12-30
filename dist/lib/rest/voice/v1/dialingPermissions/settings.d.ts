/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Options to pass to update a SettingsInstance
 *
 * @property { boolean } [dialingPermissionsInheritance] `true` for the sub-account to inherit voice dialing permissions from the Master Project; otherwise `false`.
 */
export interface SettingsContextUpdateOptions {
    dialingPermissionsInheritance?: boolean;
}
export interface SettingsContext {
    /**
     * Fetch a SettingsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingsInstance
     */
    fetch(callback?: (error: Error | null, item?: SettingsInstance) => any): Promise<SettingsInstance>;
    /**
     * Update a SettingsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingsInstance
     */
    update(callback?: (error: Error | null, item?: SettingsInstance) => any): Promise<SettingsInstance>;
    /**
     * Update a SettingsInstance
     *
     * @param { SettingsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingsInstance
     */
    update(params: SettingsContextUpdateOptions, callback?: (error: Error | null, item?: SettingsInstance) => any): Promise<SettingsInstance>;
    update(params?: any, callback?: any): Promise<SettingsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SettingsContextSolution {
}
export declare class SettingsContextImpl implements SettingsContext {
    protected _version: V1;
    protected _solution: SettingsContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(callback?: any): Promise<SettingsInstance>;
    update(params?: any, callback?: any): Promise<SettingsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SettingsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SettingsResource {
    dialing_permissions_inheritance?: boolean | null;
    url?: string | null;
}
export declare class SettingsInstance {
    protected _version: V1;
    protected _solution: SettingsContextSolution;
    protected _context?: SettingsContext;
    constructor(_version: V1, payload: SettingsResource);
    /**
     * `true` if the sub-account will inherit voice dialing permissions from the Master Project; otherwise `false`
     */
    dialingPermissionsInheritance?: boolean | null;
    /**
     * The absolute URL of this resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a SettingsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingsInstance
     */
    fetch(callback?: (error: Error | null, item?: SettingsInstance) => any): Promise<SettingsInstance>;
    /**
     * Update a SettingsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingsInstance
     */
    update(callback?: (error: Error | null, item?: SettingsInstance) => any): Promise<SettingsInstance>;
    /**
     * Update a SettingsInstance
     *
     * @param { SettingsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingsInstance
     */
    update(params: SettingsContextUpdateOptions, callback?: (error: Error | null, item?: SettingsInstance) => any): Promise<SettingsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        dialingPermissionsInheritance: boolean | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SettingsListInstance {
    (): SettingsContext;
    get(): SettingsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SettingsSolution {
}
export declare function SettingsListInstance(version: V1): SettingsListInstance;
export {};
