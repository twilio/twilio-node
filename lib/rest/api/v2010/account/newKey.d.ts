/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the NewKeyList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function NewKeyList(version: V2010, accountSid: string): NewKeyListInstance;

interface NewKeyResource {
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  secret: string;
  sid: string;
}

interface NewKeyPayload extends NewKeyResource, Page.TwilioResponsePayload {
}

interface NewKeySolution {
  accountSid?: string;
}

interface NewKeyListInstance {
  /**
   * create a NewKeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: NewKeyListInstanceCreateOptions, callback?: (error: Error | null, items: NewKeyListInstance) => any): Promise<NewKeyInstance>;
}


declare class NewKeyPage extends Page<V2010, NewKeyPayload, NewKeyResource, NewKeyInstance> {
  /**
   * Initialize the NewKeyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: NewKeySolution);

  /**
   * Build an instance of NewKeyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NewKeyPayload): NewKeyInstance;
}


declare class NewKeyInstance extends SerializableClass {
  /**
   * Initialize the NewKeyContext
   *
   * @property sid - The sid
   * @property friendlyName - The friendly_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property secret - The secret
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V2010, payload: NewKeyPayload, accountSid: string);

  dateCreated: Date;
  dateUpdated: Date;
  friendlyName: string;
  secret: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the NewKeyInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
}

export { NewKeyInstance, NewKeyList, NewKeyListInstance, NewKeyListInstanceCreateOptions, NewKeyPage, NewKeyPayload, NewKeyResource, NewKeySolution }
