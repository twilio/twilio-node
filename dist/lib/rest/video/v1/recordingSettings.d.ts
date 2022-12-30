/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a RecordingSettingsInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the resource and be shown to users in the console
 * @property { string } [awsCredentialsSid] The SID of the stored Credential resource.
 * @property { string } [encryptionKeySid] The SID of the Public Key resource to use for encryption.
 * @property { string } [awsS3Url] The URL of the AWS S3 bucket where the recordings should be stored. We only support DNS-compliant URLs like `https://documentation-example-twilio-bucket/recordings`, where `recordings` is the path in which you want the recordings to be stored. This URL accepts only URI-valid characters, as described in the <a href=\\\'https://tools.ietf.org/html/rfc3986#section-2\\\'>RFC 3986</a>.
 * @property { boolean } [awsStorageEnabled] Whether all recordings should be written to the `aws_s3_url`. When `false`, all recordings are stored in our cloud.
 * @property { boolean } [encryptionEnabled] Whether all recordings should be stored in an encrypted form. The default is `false`.
 */
export interface RecordingSettingsContextCreateOptions {
    friendlyName: string;
    awsCredentialsSid?: string;
    encryptionKeySid?: string;
    awsS3Url?: string;
    awsStorageEnabled?: boolean;
    encryptionEnabled?: boolean;
}
export interface RecordingSettingsContext {
    /**
     * Create a RecordingSettingsInstance
     *
     * @param { RecordingSettingsContextCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingSettingsInstance
     */
    create(params: RecordingSettingsContextCreateOptions, callback?: (error: Error | null, item?: RecordingSettingsInstance) => any): Promise<RecordingSettingsInstance>;
    create(params: any, callback?: any): Promise<RecordingSettingsInstance>;
    /**
     * Fetch a RecordingSettingsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingSettingsInstance
     */
    fetch(callback?: (error: Error | null, item?: RecordingSettingsInstance) => any): Promise<RecordingSettingsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RecordingSettingsContextSolution {
}
export declare class RecordingSettingsContextImpl implements RecordingSettingsContext {
    protected _version: V1;
    protected _solution: RecordingSettingsContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    create(params: any, callback?: any): Promise<RecordingSettingsInstance>;
    fetch(callback?: any): Promise<RecordingSettingsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RecordingSettingsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface RecordingSettingsResource {
    account_sid?: string | null;
    friendly_name?: string | null;
    aws_credentials_sid?: string | null;
    aws_s3_url?: string | null;
    aws_storage_enabled?: boolean | null;
    encryption_key_sid?: string | null;
    encryption_enabled?: boolean | null;
    url?: string | null;
}
export declare class RecordingSettingsInstance {
    protected _version: V1;
    protected _solution: RecordingSettingsContextSolution;
    protected _context?: RecordingSettingsContext;
    constructor(_version: V1, payload: RecordingSettingsResource);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The SID of the stored Credential resource
     */
    awsCredentialsSid?: string | null;
    /**
     * The URL of the AWS S3 bucket where the recordings are stored
     */
    awsS3Url?: string | null;
    /**
     * Whether all recordings are written to the aws_s3_url
     */
    awsStorageEnabled?: boolean | null;
    /**
     * The SID of the Public Key resource used for encryption
     */
    encryptionKeySid?: string | null;
    /**
     * Whether all recordings are stored in an encrypted form
     */
    encryptionEnabled?: boolean | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Create a RecordingSettingsInstance
     *
     * @param { RecordingSettingsContextCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingSettingsInstance
     */
    create(params: RecordingSettingsContextCreateOptions, callback?: (error: Error | null, item?: RecordingSettingsInstance) => any): Promise<RecordingSettingsInstance>;
    /**
     * Fetch a RecordingSettingsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingSettingsInstance
     */
    fetch(callback?: (error: Error | null, item?: RecordingSettingsInstance) => any): Promise<RecordingSettingsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        awsCredentialsSid: string | null | undefined;
        awsS3Url: string | null | undefined;
        awsStorageEnabled: boolean | null | undefined;
        encryptionKeySid: string | null | undefined;
        encryptionEnabled: boolean | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RecordingSettingsListInstance {
    (): RecordingSettingsContext;
    get(): RecordingSettingsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RecordingSettingsSolution {
}
export declare function RecordingSettingsListInstance(version: V1): RecordingSettingsListInstance;
export {};
