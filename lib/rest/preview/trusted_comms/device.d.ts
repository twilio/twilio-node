/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import TrustedComms = require('../TrustedComms');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the DeviceList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function DeviceList(version: TrustedComms): DeviceListInstance;

interface DeviceListInstance {
  /**
   * create a DeviceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: DeviceListInstanceCreateOptions, callback?: (error: Error | null, item: DeviceInstance) => any): Promise<DeviceInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property phoneNumber - The end user Phone Number
 * @property pushToken - The Push Token for this Phone Number
 */
interface DeviceListInstanceCreateOptions {
  phoneNumber: string;
  pushToken: string;
}

interface DevicePayload extends DeviceResource, Page.TwilioResponsePayload {
}

interface DeviceResource {
  binding_sid: string;
  phone_number: string;
  sid: string;
  url: string;
}

interface DeviceSolution {
}


declare class DeviceInstance extends SerializableClass {
  /**
   * Initialize the DeviceContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: TrustedComms, payload: DevicePayload);

  bindingSid: string;
  phoneNumber: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class DevicePage extends Page<TrustedComms, DevicePayload, DeviceResource, DeviceInstance> {
  /**
   * Initialize the DevicePage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: TrustedComms, response: Response<string>, solution: DeviceSolution);

  /**
   * Build an instance of DeviceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DevicePayload): DeviceInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { DeviceInstance, DeviceList, DeviceListInstance, DeviceListInstanceCreateOptions, DevicePage, DevicePayload, DeviceResource, DeviceSolution }
