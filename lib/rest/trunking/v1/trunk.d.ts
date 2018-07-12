/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');
import { CredentialListList } from './trunk/credentialList';
import { IpAccessControlListList } from './trunk/ipAccessControlList';
import { OriginationUrlList } from './trunk/originationUrl';
import { PhoneNumberList } from './trunk/phoneNumber';

/**
 * @constructor Twilio.Trunking.V1.TrunkList
 * @description Initialize the TrunkList
 *
 * @param version - Version of the resource
 */
declare function TrunkList(version: V1): TrunkListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A human-readable name for the Trunk.
 * @property domainName - The unique address you reserve on Twilio to which you route your SIP traffic.
 * @property disasterRecoveryUrl - The HTTP URL that Twilio will request if an error occurs while sending SIP traffic towards your configured Origination URL.
 * @property disasterRecoveryMethod - The HTTP method Twilio will use when requesting the DisasterRecoveryUrl.
 * @property recording - The recording settings for this trunk.
 * @property secure - The Secure Trunking  settings for this trunk.
 * @property cnamLookupEnabled - The Caller ID Name (CNAM) lookup setting for this trunk.
 */
export interface UpdateOptions {
  cnamLookupEnabled?: boolean;
  disasterRecoveryMethod?: string;
  disasterRecoveryUrl?: string;
  domainName?: string;
  friendlyName?: string;
  recording?: trunk.recording_setting;
  secure?: boolean;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human-readable name for the Trunk.
 * @property domainName - The unique address you reserve on Twilio to which you route your SIP traffic.
 * @property disasterRecoveryUrl - The HTTP URL that Twilio will request if an error occurs while sending SIP traffic towards your configured Origination URL.
 * @property disasterRecoveryMethod - The HTTP method Twilio will use when requesting the DisasterRecoveryUrl.
 * @property recording - The recording settings for this trunk.
 * @property secure - The Secure Trunking  settings for this trunk.
 * @property cnamLookupEnabled - The Caller ID Name (CNAM) lookup setting for this trunk.
 */
export interface UpdateOptions {
  cnamLookupEnabled?: boolean;
  disasterRecoveryMethod?: string;
  disasterRecoveryUrl?: string;
  domainName?: string;
  friendlyName?: string;
  recording?: trunk.recording_setting;
  secure?: boolean;
}


declare class TrunkPage extends Page {
  /**
   * @constructor Twilio.Trunking.V1.TrunkPage
   * @augments Page
   * @description Initialize the TrunkPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Trunking.V1, response: object, solution: object);

  /**
   * Build an instance of TrunkInstance
   *
   * @function getInstance
   * @memberof Twilio.Trunking.V1.TrunkPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TrunkInstance {
  /**
   * @constructor Twilio.Trunking.V1.TrunkInstance
   * @description Initialize the TrunkContext
   *
   * @property accountSid - The unique ID of the Account that owns this Trunk.
   * @property domainName - The unique address you reserve on Twilio to which you route your SIP traffic.
   * @property disasterRecoveryMethod - The HTTP method Twilio will use when requesting the DisasterRecoveryUrl.
   * @property disasterRecoveryUrl - The HTTP URL that Twilio will request if an error occurs while sending SIP traffic towards your configured Origination URL.
   * @property friendlyName - A human-readable name for the Trunk.
   * @property secure - The Secure Trunking  settings for this trunk.
   * @property recording - The recording settings for this trunk.
   * @property cnamLookupEnabled - The Caller ID Name (CNAM) lookup setting for this trunk.
   * @property authType - The types of authentication you have mapped to your domain.
   * @property authTypeSet - The auth_type_set
   * @property dateCreated - The date this Activity was created.
   * @property dateUpdated - The date this Activity was updated.
   * @property sid - A 34 character string that uniquely identifies the SIP Trunk in Twilio.
   * @property url - The URL for this resource, relative to https://trunking.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, payload: object, sid: sid);

  _proxy?: TrunkContext;
  /**
   * Access the credentialsLists
   *
   * @function credentialsLists
   * @memberof Twilio.Trunking.V1.TrunkInstance
   * @instance
   */
  credentialsLists();
  /**
   * fetch a TrunkInstance
   *
   * @function fetch
   * @memberof Twilio.Trunking.V1.TrunkInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the ipAccessControlLists
   *
   * @function ipAccessControlLists
   * @memberof Twilio.Trunking.V1.TrunkInstance
   * @instance
   */
  ipAccessControlLists();
  /**
   * Access the originationUrls
   *
   * @function originationUrls
   * @memberof Twilio.Trunking.V1.TrunkInstance
   * @instance
   */
  originationUrls();
  /**
   * Access the phoneNumbers
   *
   * @function phoneNumbers
   * @memberof Twilio.Trunking.V1.TrunkInstance
   * @instance
   */
  phoneNumbers();
  /**
   * remove a TrunkInstance
   *
   * @function remove
   * @memberof Twilio.Trunking.V1.TrunkInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the TrunkInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Trunking.V1.TrunkInstance
   * @instance
   */
  toJSON();
  /**
   * update a TrunkInstance
   *
   * @function update
   * @memberof Twilio.Trunking.V1.TrunkInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class TrunkContext {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext
   * @description Initialize the TrunkContext
   *
   * @property originationUrls - originationUrls resource
   * @property credentialsLists - credentialsLists resource
   * @property ipAccessControlLists - ipAccessControlLists resource
   * @property phoneNumbers - phoneNumbers resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, sid: sid);

  credentialsLists?: Twilio.Trunking.V1.TrunkContext.CredentialListList;
  /**
   * fetch a TrunkInstance
   *
   * @function fetch
   * @memberof Twilio.Trunking.V1.TrunkContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  ipAccessControlLists?: Twilio.Trunking.V1.TrunkContext.IpAccessControlListList;
  originationUrls?: Twilio.Trunking.V1.TrunkContext.OriginationUrlList;
  phoneNumbers?: Twilio.Trunking.V1.TrunkContext.PhoneNumberList;
  /**
   * remove a TrunkInstance
   *
   * @function remove
   * @memberof Twilio.Trunking.V1.TrunkContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a TrunkInstance
   *
   * @function update
   * @memberof Twilio.Trunking.V1.TrunkContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { TrunkContext, TrunkInstance, TrunkList, TrunkPage }
