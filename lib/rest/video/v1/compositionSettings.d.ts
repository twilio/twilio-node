/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the CompositionSettingsList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CompositionSettingsList(version: V1): CompositionSettingsListInstance;

/**
 * Options to pass to create
 *
 * @property awsCredentialsSid - SID of the Stored Credential resource CRxx
 * @property awsS3Url - Identity of the external location where the compositions should be stored. We only support DNS-compliant URLs like http://<my-bucket>.s3-<aws-region>.amazonaws.com/compositions, where compositions is the path where you want compositions to be stored.
 * @property awsStorageEnabled - true|false When set to true, all Compositions will be written to the AwsS3Url specified above. When set to false, all Compositions will be stored in Twilio's cloud.
 * @property encryptionEnabled - true|false When set to true, all Compositions will be stored encrypted.
 * @property encryptionKeySid - SID of the Public Key resource CRxx
 * @property friendlyName - Friendly name of the configuration to be shown in the console
 */
interface CompositionSettingsInstanceCreateOptions {
  awsCredentialsSid?: string;
  awsS3Url?: string;
  awsStorageEnabled?: boolean;
  encryptionEnabled?: boolean;
  encryptionKeySid?: string;
  friendlyName: string;
}

interface CompositionSettingsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CompositionSettingsContext;
  /**
   * Constructs a composition_settings
   */
  get(): CompositionSettingsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface CompositionSettingsPayload extends CompositionSettingsResource, Page.TwilioResponsePayload {
}

interface CompositionSettingsResource {
  account_sid: string;
  aws_credentials_sid: string;
  aws_s3_url: string;
  aws_storage_enabled: boolean;
  encryption_enabled: boolean;
  encryption_key_sid: string;
  friendly_name: string;
  url: string;
}

interface CompositionSettingsSolution {
}


declare class CompositionSettingsContext {
  /**
   * Initialize the CompositionSettingsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   */
  constructor(version: V1);

  /**
   * create a CompositionSettingsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CompositionSettingsInstanceCreateOptions, callback?: (error: Error | null, item: CompositionSettingsInstance) => any): Promise<CompositionSettingsInstance>;
  /**
   * fetch a CompositionSettingsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CompositionSettingsInstance) => any): Promise<CompositionSettingsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class CompositionSettingsInstance extends SerializableClass {
  /**
   * Initialize the CompositionSettingsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: CompositionSettingsPayload);

  private _proxy: CompositionSettingsContext;
  accountSid: string;
  awsCredentialsSid: string;
  awsS3Url: string;
  awsStorageEnabled: boolean;
  /**
   * create a CompositionSettingsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CompositionSettingsInstanceCreateOptions, callback?: (error: Error | null, items: CompositionSettingsInstance) => any): void;
  encryptionEnabled: boolean;
  encryptionKeySid: string;
  /**
   * fetch a CompositionSettingsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CompositionSettingsInstance) => any): void;
  friendlyName: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class CompositionSettingsPage extends Page<V1, CompositionSettingsPayload, CompositionSettingsResource, CompositionSettingsInstance> {
  /**
   * Initialize the CompositionSettingsPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CompositionSettingsSolution);

  /**
   * Build an instance of CompositionSettingsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CompositionSettingsPayload): CompositionSettingsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CompositionSettingsContext, CompositionSettingsInstance, CompositionSettingsList, CompositionSettingsListInstance, CompositionSettingsPage, CompositionSettingsPayload, CompositionSettingsResource, CompositionSettingsSolution }
