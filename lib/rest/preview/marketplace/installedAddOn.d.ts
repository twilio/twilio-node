/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../Marketplace');
import Page = require('../../../base/Page');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');
import { InstalledAddOnExtensionList } from './installedAddOn/installedAddOnExtension';

/**
 * @constructor Twilio.Preview.Marketplace.InstalledAddOnList
 * @description Initialize the InstalledAddOnList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function InstalledAddOnList(version: Marketplace): InstalledAddOnListInstance;

/**
 * Options to pass to update
 *
 * @property configuration - The JSON object representing the configuration
 * @property uniqueName - The string that uniquely identifies this Add-on installation
 */
export interface UpdateOptions {
  configuration?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property configuration - The JSON object representing the configuration
 * @property uniqueName - The string that uniquely identifies this Add-on installation
 */
export interface UpdateOptions {
  configuration?: string;
  uniqueName?: string;
}


declare class InstalledAddOnPage extends Page {
  /**
   * @constructor Twilio.Preview.Marketplace.InstalledAddOnPage
   * @augments Page
   * @description Initialize the InstalledAddOnPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Marketplace, response: object, solution: object);

  /**
   * Build an instance of InstalledAddOnInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class InstalledAddOnInstance {
  /**
   * @constructor Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @description Initialize the InstalledAddOnContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Add-on installation
   * @property accountSid - The Account id that has installed this Add-on
   * @property friendlyName - A description of this Add-on installation
   * @property description - A short description of the Add-on functionality
   * @property configuration - The JSON object representing the current configuration
   * @property uniqueName - The string that uniquely identifies this Add-on installation
   * @property dateCreated - The date this Add-on installation was created
   * @property dateUpdated - The date this Add-on installation was last updated
   * @property url - The url
   * @property links - A dictionary of URLs for related resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique Installed Add-on Sid
   */
  constructor(version: Twilio.Preview.Marketplace, payload: object, sid: sid);

  _proxy?: InstalledAddOnContext;
  /**
   * Access the extensions
   *
   * @function extensions
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @instance
   */
  extensions();
  /**
   * fetch a InstalledAddOnInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a InstalledAddOnInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the InstalledAddOnInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @instance
   */
  toJSON();
  /**
   * update a InstalledAddOnInstance
   *
   * @function update
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class InstalledAddOnContext {
  /**
   * @constructor Twilio.Preview.Marketplace.InstalledAddOnContext
   * @description Initialize the InstalledAddOnContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property extensions - extensions resource
   *
   * @param version - Version of the resource
   * @param sid - The unique Installed Add-on Sid
   */
  constructor(version: Twilio.Preview.Marketplace, sid: sid);

  extensions?: Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionList;
  /**
   * fetch a InstalledAddOnInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a InstalledAddOnInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a InstalledAddOnInstance
   *
   * @function update
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { InstalledAddOnContext, InstalledAddOnInstance, InstalledAddOnList, InstalledAddOnPage }
