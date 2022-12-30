/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a DeviceCodeInstance
 *
 * @property { string } clientSid A 34 character string that uniquely identifies this OAuth App.
 * @property { Array<string> } scopes An Array of scopes for authorization request
 * @property { Array<string> } [audiences] An array of intended audiences for token requests
 */
export interface DeviceCodeListInstanceCreateOptions {
    clientSid: string;
    scopes: Array<string>;
    audiences?: Array<string>;
}
export interface DeviceCodeListInstance {
    /**
     * Create a DeviceCodeInstance
     *
     * @param { DeviceCodeListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DeviceCodeInstance
     */
    create(params: DeviceCodeListInstanceCreateOptions, callback?: (error: Error | null, item?: DeviceCodeInstance) => any): Promise<DeviceCodeInstance>;
    create(params: any, callback?: any): Promise<DeviceCodeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DeviceCodeSolution {
}
export declare function DeviceCodeListInstance(version: V1): DeviceCodeListInstance;
interface DeviceCodeResource {
    device_code?: string | null;
    user_code?: string | null;
    verification_uri?: string | null;
    verification_uri_complete?: string | null;
    expires_in?: number | null;
    interval?: number | null;
}
export declare class DeviceCodeInstance {
    protected _version: V1;
    constructor(_version: V1, payload: DeviceCodeResource);
    /**
     * The device verification code
     */
    deviceCode?: string | null;
    /**
     * The verification code for the end user
     */
    userCode?: string | null;
    /**
     * The URI that the end user visits to verify request
     */
    verificationUri?: string | null;
    /**
     * he URI with user_code that the end-user alternatively visits to verify request
     */
    verificationUriComplete?: string | null;
    /**
     * The expiration time of the device_code and user_code in seconds
     */
    expiresIn?: number | null;
    /**
     * The minimum amount of time in seconds that the client should wait between polling requests to the token endpoint
     */
    interval?: number | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        deviceCode: string | null | undefined;
        userCode: string | null | undefined;
        verificationUri: string | null | undefined;
        verificationUriComplete: string | null | undefined;
        expiresIn: number | null | undefined;
        interval: number | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
