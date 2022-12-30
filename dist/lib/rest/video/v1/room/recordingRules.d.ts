/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export declare class VideoV1RoomRoomRecordingRuleRules {
    "type"?: string;
    "all"?: boolean;
    "publisher"?: string;
    "track"?: string;
    "kind"?: string;
}
/**
 * Options to pass to update a RecordingRulesInstance
 *
 * @property { any } [rules] A JSON-encoded array of recording rules.
 */
export interface RecordingRulesListInstanceUpdateOptions {
    rules?: any;
}
export interface RecordingRulesListInstance {
    /**
     * Fetch a RecordingRulesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingRulesInstance
     */
    fetch(callback?: (error: Error | null, item?: RecordingRulesInstance) => any): Promise<RecordingRulesInstance>;
    /**
     * Update a RecordingRulesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingRulesInstance
     */
    update(callback?: (error: Error | null, item?: RecordingRulesInstance) => any): Promise<RecordingRulesInstance>;
    /**
     * Update a RecordingRulesInstance
     *
     * @param { RecordingRulesListInstanceUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingRulesInstance
     */
    update(params: RecordingRulesListInstanceUpdateOptions, callback?: (error: Error | null, item?: RecordingRulesInstance) => any): Promise<RecordingRulesInstance>;
    update(params?: any, callback?: any): Promise<RecordingRulesInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RecordingRulesSolution {
    roomSid?: string;
}
export declare function RecordingRulesListInstance(version: V1, roomSid: string): RecordingRulesListInstance;
interface RecordingRulesResource {
    room_sid?: string | null;
    rules?: Array<VideoV1RoomRoomRecordingRuleRules> | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class RecordingRulesInstance {
    protected _version: V1;
    constructor(_version: V1, payload: RecordingRulesResource, roomSid: string);
    /**
     * The SID of the Room resource for the Recording Rules
     */
    roomSid?: string | null;
    /**
     * A collection of recording Rules that describe how to include or exclude matching tracks for recording
     */
    rules?: Array<VideoV1RoomRoomRecordingRuleRules> | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        roomSid: string | null | undefined;
        rules: VideoV1RoomRoomRecordingRuleRules[] | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
