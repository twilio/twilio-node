/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
declare type RoomParticipantAnonymizeStatus = "connected" | "disconnected";
export interface AnonymizeContext {
    /**
     * Update a AnonymizeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AnonymizeInstance
     */
    update(callback?: (error: Error | null, item?: AnonymizeInstance) => any): Promise<AnonymizeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AnonymizeContextSolution {
    roomSid?: string;
    sid?: string;
}
export declare class AnonymizeContextImpl implements AnonymizeContext {
    protected _version: V1;
    protected _solution: AnonymizeContextSolution;
    protected _uri: string;
    constructor(_version: V1, roomSid: string, sid: string);
    update(callback?: any): Promise<AnonymizeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AnonymizeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AnonymizeResource {
    sid?: string | null;
    room_sid?: string | null;
    account_sid?: string | null;
    status?: RoomParticipantAnonymizeStatus;
    identity?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    start_time?: Date | null;
    end_time?: Date | null;
    duration?: number | null;
    url?: string | null;
}
export declare class AnonymizeInstance {
    protected _version: V1;
    protected _solution: AnonymizeContextSolution;
    protected _context?: AnonymizeContext;
    constructor(_version: V1, payload: AnonymizeResource, roomSid: string, sid: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the participant\'s room
     */
    roomSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    status?: RoomParticipantAnonymizeStatus;
    /**
     * The SID of the participant
     */
    identity?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The time of participant connected to the room in ISO 8601 format
     */
    startTime?: Date | null;
    /**
     * The time when the participant disconnected from the room in ISO 8601 format
     */
    endTime?: Date | null;
    /**
     * Duration of time in seconds the participant was connected
     */
    duration?: number | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Update a AnonymizeInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AnonymizeInstance
     */
    update(callback?: (error: Error | null, item?: AnonymizeInstance) => any): Promise<AnonymizeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        roomSid: string | null | undefined;
        accountSid: string | null | undefined;
        status: RoomParticipantAnonymizeStatus | undefined;
        identity: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        startTime: Date | null | undefined;
        endTime: Date | null | undefined;
        duration: number | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AnonymizeListInstance {
    (): AnonymizeContext;
    get(): AnonymizeContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AnonymizeSolution {
    roomSid?: string;
    sid?: string;
}
export declare function AnonymizeListInstance(version: V1, roomSid: string, sid: string): AnonymizeListInstance;
export {};
