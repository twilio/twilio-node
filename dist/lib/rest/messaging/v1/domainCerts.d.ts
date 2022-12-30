/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a DomainCertsInstance
 *
 * @property { string } tlsCert Contains the full TLS certificate and private for this domain in PEM format: https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail. Twilio uses this information to process HTTPS traffic sent to your domain.
 */
export interface DomainCertsContextUpdateOptions {
    tlsCert: string;
}
export interface DomainCertsContext {
    /**
     * Remove a DomainCertsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a DomainCertsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DomainCertsInstance
     */
    fetch(callback?: (error: Error | null, item?: DomainCertsInstance) => any): Promise<DomainCertsInstance>;
    /**
     * Update a DomainCertsInstance
     *
     * @param { DomainCertsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DomainCertsInstance
     */
    update(params: DomainCertsContextUpdateOptions, callback?: (error: Error | null, item?: DomainCertsInstance) => any): Promise<DomainCertsInstance>;
    update(params: any, callback?: any): Promise<DomainCertsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DomainCertsContextSolution {
    domainSid?: string;
}
export declare class DomainCertsContextImpl implements DomainCertsContext {
    protected _version: V1;
    protected _solution: DomainCertsContextSolution;
    protected _uri: string;
    constructor(_version: V1, domainSid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<DomainCertsInstance>;
    update(params: any, callback?: any): Promise<DomainCertsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DomainCertsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DomainCertsResource {
    domain_sid?: string | null;
    date_updated?: Date | null;
    date_expires?: Date | null;
    date_created?: Date | null;
    domain_name?: string | null;
    certificate_sid?: string | null;
    url?: string | null;
    validated?: boolean | null;
}
export declare class DomainCertsInstance {
    protected _version: V1;
    protected _solution: DomainCertsContextSolution;
    protected _context?: DomainCertsContext;
    constructor(_version: V1, payload: DomainCertsResource, domainSid?: string);
    /**
     * The unique string that we created to identify the Domain resource.
     */
    domainSid?: string | null;
    /**
     * Date that this Domain was last updated.
     */
    dateUpdated?: Date | null;
    /**
     * Expiration date for your private certificate.
     */
    dateExpires?: Date | null;
    /**
     * Date this Domain SID was created.
     */
    dateCreated?: Date | null;
    /**
     * Full url path for this domain.
     */
    domainName?: string | null;
    /**
     * The unique string that we created to identify this Certificate resource.
     */
    certificateSid?: string | null;
    url?: string | null;
    /**
     * Certificate validation field
     */
    validated?: boolean | null;
    private get _proxy();
    /**
     * Remove a DomainCertsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a DomainCertsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DomainCertsInstance
     */
    fetch(callback?: (error: Error | null, item?: DomainCertsInstance) => any): Promise<DomainCertsInstance>;
    /**
     * Update a DomainCertsInstance
     *
     * @param { DomainCertsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DomainCertsInstance
     */
    update(params: DomainCertsContextUpdateOptions, callback?: (error: Error | null, item?: DomainCertsInstance) => any): Promise<DomainCertsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        domainSid: string | null | undefined;
        dateUpdated: Date | null | undefined;
        dateExpires: Date | null | undefined;
        dateCreated: Date | null | undefined;
        domainName: string | null | undefined;
        certificateSid: string | null | undefined;
        url: string | null | undefined;
        validated: boolean | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DomainCertsListInstance {
    (domainSid: string): DomainCertsContext;
    get(domainSid: string): DomainCertsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DomainCertsSolution {
}
export declare function DomainCertsListInstance(version: V1): DomainCertsListInstance;
export {};
