/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
import { SchemaVersionListInstance } from "./schema/schemaVersion";
export interface SchemaContext {
    versions: SchemaVersionListInstance;
    /**
     * Fetch a SchemaInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SchemaInstance
     */
    fetch(callback?: (error: Error | null, item?: SchemaInstance) => any): Promise<SchemaInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SchemaContextSolution {
    id?: string;
}
export declare class SchemaContextImpl implements SchemaContext {
    protected _version: V1;
    protected _solution: SchemaContextSolution;
    protected _uri: string;
    protected _versions?: SchemaVersionListInstance;
    constructor(_version: V1, id: string);
    get versions(): SchemaVersionListInstance;
    fetch(callback?: any): Promise<SchemaInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SchemaContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SchemaResource {
    id?: string | null;
    url?: string | null;
    links?: object | null;
    latest_version_date_created?: Date | null;
    latest_version?: number | null;
}
export declare class SchemaInstance {
    protected _version: V1;
    protected _solution: SchemaContextSolution;
    protected _context?: SchemaContext;
    constructor(_version: V1, payload: SchemaResource, id?: string);
    /**
     * Schema Identifier.
     */
    id?: string | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    /**
     * Nested resource URLs.
     */
    links?: object | null;
    /**
     * The date that the latest schema version was created.
     */
    latestVersionDateCreated?: Date | null;
    /**
     * Latest schema version.
     */
    latestVersion?: number | null;
    private get _proxy();
    /**
     * Fetch a SchemaInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SchemaInstance
     */
    fetch(callback?: (error: Error | null, item?: SchemaInstance) => any): Promise<SchemaInstance>;
    /**
     * Access the versions.
     */
    versions(): SchemaVersionListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        id: string | null | undefined;
        url: string | null | undefined;
        links: object | null | undefined;
        latestVersionDateCreated: Date | null | undefined;
        latestVersion: number | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SchemaListInstance {
    (id: string): SchemaContext;
    get(id: string): SchemaContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SchemaSolution {
}
export declare function SchemaListInstance(version: V1): SchemaListInstance;
export {};
