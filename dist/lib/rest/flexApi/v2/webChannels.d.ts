/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
/**
 * Options to pass to create a WebChannelsInstance
 *
 * @property { string } addressSid The SID of the Conversations Address. See [Address Configuration Resource](https://www.twilio.com/docs/conversations/api/address-configuration-resource) for configuration details. When a conversation is created on the Flex backend, the callback URL will be set to the corresponding Studio Flow SID or webhook URL in your address configuration.
 * @property { string } [chatFriendlyName] The Conversation\\\'s friendly name. See the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource) for an example.
 * @property { string } [customerFriendlyName] The Conversation participant\\\'s friendly name. See the [Conversation Participant Resource](https://www.twilio.com/docs/conversations/api/conversation-participant-resource) for an example.
 * @property { string } [preEngagementData] The pre-engagement data.
 */
export interface WebChannelsListInstanceCreateOptions {
    addressSid: string;
    chatFriendlyName?: string;
    customerFriendlyName?: string;
    preEngagementData?: string;
}
export interface WebChannelsListInstance {
    /**
     * Create a WebChannelsInstance
     *
     * @param { WebChannelsListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed WebChannelsInstance
     */
    create(params: WebChannelsListInstanceCreateOptions, callback?: (error: Error | null, item?: WebChannelsInstance) => any): Promise<WebChannelsInstance>;
    create(params: any, callback?: any): Promise<WebChannelsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface WebChannelsSolution {
}
export declare function WebChannelsListInstance(version: V2): WebChannelsListInstance;
interface WebChannelsResource {
    conversation_sid?: string | null;
    identity?: string | null;
}
export declare class WebChannelsInstance {
    protected _version: V2;
    constructor(_version: V2, payload: WebChannelsResource);
    /**
     * The unique string representing the Conversation resource created
     */
    conversationSid?: string | null;
    /**
     * The unique string representing the User created
     */
    identity?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        conversationSid: string | null | undefined;
        identity: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
