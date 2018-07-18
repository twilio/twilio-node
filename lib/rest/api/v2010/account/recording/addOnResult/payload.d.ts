/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../../interfaces';
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the PayloadList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 * @param referenceSid - A string that uniquely identifies the recording.
 * @param addOnResultSid - A string that uniquely identifies the result
 */
declare function PayloadList(version: V2010, accountSid: string, referenceSid: string, addOnResultSid: string): PayloadListInstance;

interface PayloadResource {
  account_sid: string;
  add_on_configuration_sid: string;
  add_on_result_sid: string;
  add_on_sid: string;
  content_type: string;
  date_created: Date;
  date_updated: Date;
  label: string;
  reference_sid: string;
  sid: string;
  subresource_uris: string;
}

interface PayloadPayload extends PayloadResource, Page.TwilioResponsePayload {
}

interface PayloadSolution {
  accountSid?: string;
  addOnResultSid?: string;
  referenceSid?: string;
}

interface PayloadListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): PayloadContext;
  /**
   * Streams PayloadInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a payload
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadList
   * @instance
   *
   * @param sid - Fetch by unique payload Sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of PayloadInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists PayloadInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of PayloadInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class PayloadPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadPage
   * @augments Page
   * @description Initialize the PayloadPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of PayloadInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class PayloadInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadInstance
   * @description Initialize the PayloadContext
   *
   * @property sid - A string that uniquely identifies this payload
   * @property addOnResultSid - A string that uniquely identifies the result
   * @property accountSid - The unique sid that identifies this account
   * @property label - A string that describes the payload.
   * @property addOnSid - A string that uniquely identifies the Add-on.
   * @property addOnConfigurationSid - A string that uniquely identifies the Add-on configuration.
   * @property contentType - The MIME type of the payload.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property referenceSid - A string that uniquely identifies the recording.
   * @property subresourceUris - A dictionary of URIs for related resources
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param referenceSid - A string that uniquely identifies the recording.
   * @param addOnResultSid - A string that uniquely identifies the result
   * @param sid - Fetch by unique payload Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, referenceSid: sid, addOnResultSid: sid, sid: sid);

  _proxy?: PayloadContext;
  /**
   * fetch a PayloadInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a PayloadInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the PayloadInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadInstance
   * @instance
   */
  toJSON();
}


declare class PayloadContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadContext
   * @description Initialize the PayloadContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param referenceSid - The reference_sid
   * @param addOnResultSid - The add_on_result_sid
   * @param sid - Fetch by unique payload Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, referenceSid: sid, addOnResultSid: sid, sid: sid);

  /**
   * fetch a PayloadInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a PayloadInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { PayloadContext, PayloadInstance, PayloadList, PayloadListInstance, PayloadPage, PayloadPayload, PayloadResource, PayloadSolution }
