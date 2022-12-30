/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../../../V2";
declare type NewFactorFactorStatuses = "unverified" | "verified";
declare type NewFactorFactorTypes = "push" | "totp";
declare type NewFactorNotificationPlatforms = "apn" | "fcm" | "none";
declare type NewFactorTotpAlgorithms = "sha1" | "sha256" | "sha512";
/**
 * Options to pass to create a NewFactorInstance
 *
 * @property { string } friendlyName The friendly name of this Factor. This can be any string up to 64 characters, meant for humans to distinguish between Factors. For `factor_type` `push`, this could be a device name. For `factor_type` `totp`, this value is used as the “account name” in constructing the `binding.uri` property. At the same time, we recommend avoiding providing PII.
 * @property { NewFactorFactorTypes } factorType
 * @property { string } [binding.alg] The algorithm used when `factor_type` is `push`. Algorithm supported: `ES256`
 * @property { string } [binding.publicKey] The Ecdsa public key in PKIX, ASN.1 DER format encoded in Base64.  Required when `factor_type` is `push`
 * @property { string } [config.appId] The ID that uniquely identifies your app in the Google or Apple store, such as `com.example.myapp`. It can be up to 100 characters long.  Required when `factor_type` is `push`.
 * @property { NewFactorNotificationPlatforms } [config.notificationPlatform]
 * @property { string } [config.notificationToken] For APN, the device token. For FCM, the registration token. It is used to send the push notifications. Must be between 32 and 255 characters long.  Required when `factor_type` is `push`.
 * @property { string } [config.sdkVersion] The Verify Push SDK version used to configure the factor  Required when `factor_type` is `push`
 * @property { string } [binding.secret] The shared secret for TOTP factors encoded in Base32. This can be provided when creating the Factor, otherwise it will be generated.  Used when `factor_type` is `totp`
 * @property { number } [config.timeStep] Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. The default value is defined at the service level in the property `totp.time_step`. Defaults to 30 seconds if not configured.  Used when `factor_type` is `totp`
 * @property { number } [config.skew] The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. The default value is defined at the service level in the property `totp.skew`. If not configured defaults to 1.  Used when `factor_type` is `totp`
 * @property { number } [config.codeLength] Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. The default value is defined at the service level in the property `totp.code_length`. If not configured defaults to 6.  Used when `factor_type` is `totp`
 * @property { NewFactorTotpAlgorithms } [config.alg]
 * @property { any } [metadata] Custom metadata associated with the factor. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{\\\"os\\\": \\\"Android\\\"}`. Can be up to 1024 characters in length.
 */
export interface NewFactorListInstanceCreateOptions {
    friendlyName: string;
    factorType: NewFactorFactorTypes;
    "binding.alg"?: string;
    "binding.publicKey"?: string;
    "config.appId"?: string;
    "config.notificationPlatform"?: NewFactorNotificationPlatforms;
    "config.notificationToken"?: string;
    "config.sdkVersion"?: string;
    "binding.secret"?: string;
    "config.timeStep"?: number;
    "config.skew"?: number;
    "config.codeLength"?: number;
    "config.alg"?: NewFactorTotpAlgorithms;
    metadata?: any;
}
export interface NewFactorListInstance {
    /**
     * Create a NewFactorInstance
     *
     * @param { NewFactorListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NewFactorInstance
     */
    create(params: NewFactorListInstanceCreateOptions, callback?: (error: Error | null, item?: NewFactorInstance) => any): Promise<NewFactorInstance>;
    create(params: any, callback?: any): Promise<NewFactorInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NewFactorSolution {
    serviceSid?: string;
    identity?: string;
}
export declare function NewFactorListInstance(version: V2, serviceSid: string, identity: string): NewFactorListInstance;
interface NewFactorResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    entity_sid?: string | null;
    identity?: string | null;
    binding?: any | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    status?: NewFactorFactorStatuses;
    factor_type?: NewFactorFactorTypes;
    config?: any | null;
    metadata?: any | null;
    url?: string | null;
}
export declare class NewFactorInstance {
    protected _version: V2;
    constructor(_version: V2, payload: NewFactorResource, serviceSid: string, identity: string);
    /**
     * A string that uniquely identifies this Factor.
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
     * Binding of the factor
     */
    binding?: any | null;
    /**
     * The date this Factor was created
     */
    dateCreated?: Date | null;
    /**
     * The date this Factor was updated
     */
    dateUpdated?: Date | null;
    /**
     * A human readable description of this resource.
     */
    friendlyName?: string | null;
    status?: NewFactorFactorStatuses;
    factorType?: NewFactorFactorTypes;
    /**
     * Configurations for a `factor_type`.
     */
    config?: any | null;
    /**
     * Metadata of the factor.
     */
    metadata?: any | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
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
        binding: any;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        status: NewFactorFactorStatuses | undefined;
        factorType: NewFactorFactorTypes | undefined;
        config: any;
        metadata: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
