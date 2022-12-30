/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
import { InteractionChannelListInstance } from "./interaction/interactionChannel";
/**
 * Options to pass to create a InteractionInstance
 *
 * @property { any } channel The Interaction\\\'s channel.
 * @property { any } routing The Interaction\\\'s routing logic.
 */
export interface InteractionListInstanceCreateOptions {
    channel: any;
    routing: any;
}
export interface InteractionContext {
    channels: InteractionChannelListInstance;
    /**
     * Fetch a InteractionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionInstance
     */
    fetch(callback?: (error: Error | null, item?: InteractionInstance) => any): Promise<InteractionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InteractionContextSolution {
    sid?: string;
}
export declare class InteractionContextImpl implements InteractionContext {
    protected _version: V1;
    protected _solution: InteractionContextSolution;
    protected _uri: string;
    protected _channels?: InteractionChannelListInstance;
    constructor(_version: V1, sid: string);
    get channels(): InteractionChannelListInstance;
    fetch(callback?: any): Promise<InteractionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): InteractionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface InteractionResource {
    sid?: string | null;
    channel?: any | null;
    routing?: any | null;
    url?: string | null;
    links?: object | null;
}
export declare class InteractionInstance {
    protected _version: V1;
    protected _solution: InteractionContextSolution;
    protected _context?: InteractionContext;
    constructor(_version: V1, payload: InteractionResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The Interaction\'s channel
     */
    channel?: any | null;
    /**
     * A JSON Object representing the routing rules for the Interaction Channel
     */
    routing?: any | null;
    url?: string | null;
    links?: object | null;
    private get _proxy();
    /**
     * Fetch a InteractionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionInstance
     */
    fetch(callback?: (error: Error | null, item?: InteractionInstance) => any): Promise<InteractionInstance>;
    /**
     * Access the channels.
     */
    channels(): InteractionChannelListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        channel: any;
        routing: any;
        url: string | null | undefined;
        links: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface InteractionListInstance {
    (sid: string): InteractionContext;
    get(sid: string): InteractionContext;
    /**
     * Create a InteractionInstance
     *
     * @param { InteractionListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed InteractionInstance
     */
    create(params: InteractionListInstanceCreateOptions, callback?: (error: Error | null, item?: InteractionInstance) => any): Promise<InteractionInstance>;
    create(params: any, callback?: any): Promise<InteractionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InteractionSolution {
}
export declare function InteractionListInstance(version: V1): InteractionListInstance;
export {};
