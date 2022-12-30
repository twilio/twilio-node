/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../../../../V2";
/**
 * Options to pass to create a NotificationInstance
 *
 * @property { number } [ttl] How long, in seconds, the notification is valid. Can be an integer between 0 and 300. Default is 300. Delivery is attempted until the TTL elapses, even if the device is offline. 0 means that the notification delivery is attempted immediately, only once, and is not stored for future delivery.
 */
export interface NotificationListInstanceCreateOptions {
    ttl?: number;
}
export interface NotificationListInstance {
    /**
     * Create a NotificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    create(callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    /**
     * Create a NotificationInstance
     *
     * @param { NotificationListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    create(params: NotificationListInstanceCreateOptions, callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    create(params?: any, callback?: any): Promise<NotificationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NotificationSolution {
    serviceSid?: string;
    identity?: string;
    challengeSid?: string;
}
export declare function NotificationListInstance(version: V2, serviceSid: string, identity: string, challengeSid: string): NotificationListInstance;
interface NotificationResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    entity_sid?: string | null;
    identity?: string | null;
    challenge_sid?: string | null;
    priority?: string | null;
    ttl?: number | null;
    date_created?: Date | null;
}
export declare class NotificationInstance {
    protected _version: V2;
    constructor(_version: V2, payload: NotificationResource, serviceSid: string, identity: string, challengeSid: string);
    /**
     * A string that uniquely identifies this Notification.
     */
    sid?: string | null;
    /**
     * Account Sid.
     */
    accountSid?: string | null;
    /**
     * Service Sid.
     */
    serviceSid?: string | null;
    /**
     * Entity Sid.
     */
    entitySid?: string | null;
    /**
     * Unique external identifier of the Entity
     */
    identity?: string | null;
    /**
     * Challenge Sid.
     */
    challengeSid?: string | null;
    /**
     * The priority of the notification.
     */
    priority?: string | null;
    /**
     * How long, in seconds, the notification is valid.
     */
    ttl?: number | null;
    /**
     * The date this Notification was created
     */
    dateCreated?: Date | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        entitySid: string | null | undefined;
        identity: string | null | undefined;
        challengeSid: string | null | undefined;
        priority: string | null | undefined;
        ttl: number | null | undefined;
        dateCreated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
