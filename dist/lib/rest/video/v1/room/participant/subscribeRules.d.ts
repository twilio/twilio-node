/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
export declare class VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules {
    "type"?: string;
    "all"?: boolean;
    "publisher"?: string;
    "track"?: string;
    "kind"?: string;
    "priority"?: string;
}
/**
 * Options to pass to update a SubscribeRulesInstance
 *
 * @property { any } [rules] A JSON-encoded array of subscribe rules. See the [Specifying Subscribe Rules](https://www.twilio.com/docs/video/api/track-subscriptions#specifying-sr) section for further information.
 */
export interface SubscribeRulesListInstanceUpdateOptions {
    rules?: any;
}
export interface SubscribeRulesListInstance {
    /**
     * Fetch a SubscribeRulesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribeRulesInstance
     */
    fetch(callback?: (error: Error | null, item?: SubscribeRulesInstance) => any): Promise<SubscribeRulesInstance>;
    /**
     * Update a SubscribeRulesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribeRulesInstance
     */
    update(callback?: (error: Error | null, item?: SubscribeRulesInstance) => any): Promise<SubscribeRulesInstance>;
    /**
     * Update a SubscribeRulesInstance
     *
     * @param { SubscribeRulesListInstanceUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribeRulesInstance
     */
    update(params: SubscribeRulesListInstanceUpdateOptions, callback?: (error: Error | null, item?: SubscribeRulesInstance) => any): Promise<SubscribeRulesInstance>;
    update(params?: any, callback?: any): Promise<SubscribeRulesInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SubscribeRulesSolution {
    roomSid?: string;
    participantSid?: string;
}
export declare function SubscribeRulesListInstance(version: V1, roomSid: string, participantSid: string): SubscribeRulesListInstance;
interface SubscribeRulesResource {
    participant_sid?: string | null;
    room_sid?: string | null;
    rules?: Array<VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules> | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class SubscribeRulesInstance {
    protected _version: V1;
    constructor(_version: V1, payload: SubscribeRulesResource, roomSid: string, participantSid: string);
    /**
     * The SID of the Participant resource for the Subscribe Rules
     */
    participantSid?: string | null;
    /**
     * The SID of the Room resource for the Subscribe Rules
     */
    roomSid?: string | null;
    /**
     * A collection of Subscribe Rules that describe how to include or exclude matching tracks
     */
    rules?: Array<VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules> | null;
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
        participantSid: string | null | undefined;
        roomSid: string | null | undefined;
        rules: VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules[] | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
