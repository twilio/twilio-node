/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
import { DayListInstance } from "./export/day";
import { ExportCustomJobListInstance } from "./export/exportCustomJob";
import { JobListInstance } from "./export/job";
export interface ExportContext {
    days: DayListInstance;
    exportCustomJobs: ExportCustomJobListInstance;
    /**
     * Fetch a ExportInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExportInstance
     */
    fetch(callback?: (error: Error | null, item?: ExportInstance) => any): Promise<ExportInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExportContextSolution {
    resourceType?: string;
}
export declare class ExportContextImpl implements ExportContext {
    protected _version: V1;
    protected _solution: ExportContextSolution;
    protected _uri: string;
    protected _days?: DayListInstance;
    protected _exportCustomJobs?: ExportCustomJobListInstance;
    constructor(_version: V1, resourceType: string);
    get days(): DayListInstance;
    get exportCustomJobs(): ExportCustomJobListInstance;
    fetch(callback?: any): Promise<ExportInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ExportContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ExportResource {
    resource_type?: string | null;
    url?: string | null;
    links?: object | null;
}
export declare class ExportInstance {
    protected _version: V1;
    protected _solution: ExportContextSolution;
    protected _context?: ExportContext;
    constructor(_version: V1, payload: ExportResource, resourceType?: string);
    /**
     * The type of communication – Messages, Calls, Conferences, and Participants
     */
    resourceType?: string | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    /**
     * Nested resource URLs.
     */
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a ExportInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExportInstance
     */
    fetch(callback?: (error: Error | null, item?: ExportInstance) => any): Promise<ExportInstance>;
    /**
     * Access the days.
     */
    days(): DayListInstance;
    /**
     * Access the exportCustomJobs.
     */
    exportCustomJobs(): ExportCustomJobListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        resourceType: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ExportListInstance {
    (resourceType: string): ExportContext;
    get(resourceType: string): ExportContext;
    jobs: JobListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExportSolution {
}
export declare function ExportListInstance(version: V1): ExportListInstance;
export {};
