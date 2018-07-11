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

declare function NewKeyList(version: V2010, accountSid: string): NewKeyListInstance

interface NewKeyResource {
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The secret
   */
  secret: string;
  /**
   * The sid
   */
  sid: string;
}

interface NewKeyPayload extends NewKeyResource, Page.TwilioResponsePayload {
}

interface NewKeySolution {
  accountSid: string;
}

interface NewKeyListCreateOptions {
  /**
   * The friendly_name
   */
  friendlyName?: string;
}

interface NewKeyListInstance {
  /**
   * create a NewKeyInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed NewKeyInstance
   */
  create(opts?: NewKeyListCreateOptions): Promise<NewKeyInstance>;
  /**
   * create a NewKeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: NewKeyListCreateOptions, callback: (error: Error | null, items: NewKeyInstance) => any): void;
  /**
   * create a NewKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: NewKeyInstance) => any): void;
}

declare class NewKeyPage extends Page<V2010, NewKeyPayload, NewKeyResource, NewKeyInstance> {
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
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V2010, payload: NewKeyPayload);

  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The secret
   */
  secret: string;
  /**
   * The sid
   */
  sid: string;
}

export { NewKeyInstance, NewKeyList, NewKeyListCreateOptions, NewKeyListInstance, NewKeyPage, NewKeyPayload, NewKeyResource, NewKeySolution }
