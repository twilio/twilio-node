/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the SubscribeRulesList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param roomSid - The unique Room identifier for the Subscribe Rules
 * @param participantSid - The unique Participant identifier for the Subscribe Rules.
 */
declare function SubscribeRulesList(version: V1, roomSid: string, participantSid: string): SubscribeRulesListInstance;

interface SubscribeRulesListInstance {
  /**
   * fetch a SubscribeRulesInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SubscribeRulesListInstance) => any): Promise<SubscribeRulesInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SubscribeRulesInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SubscribeRulesListInstanceUpdateOptions, callback?: (error: Error | null, items: SubscribeRulesListInstance) => any): Promise<SubscribeRulesInstance>;
}

/**
 * Options to pass to update
 *
 * @property rules - A JSON-encoded array of Subscribe Rules.
 */
interface SubscribeRulesListInstanceUpdateOptions {
  rules?: object;
}

interface SubscribeRulesPayload extends SubscribeRulesResource, Page.TwilioResponsePayload {
}

interface SubscribeRulesResource {
  date_created: Date;
  date_updated: Date;
  participant_sid: string;
  room_sid: string;
  rules: string[];
}

interface SubscribeRulesSolution {
  participantSid?: string;
  roomSid?: string;
}


declare class SubscribeRulesInstance extends SerializableClass {
  /**
   * Initialize the SubscribeRulesContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - The unique Room identifier for the Subscribe Rules
   * @param participantSid - The unique Participant identifier for the Subscribe Rules.
   */
  constructor(version: V1, payload: SubscribeRulesPayload, roomSid: string, participantSid: string);

  dateCreated: Date;
  dateUpdated: Date;
  participantSid: string;
  roomSid: string;
  rules: string[];
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class SubscribeRulesPage extends Page<V1, SubscribeRulesPayload, SubscribeRulesResource, SubscribeRulesInstance> {
  /**
   * Initialize the SubscribeRulesPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SubscribeRulesSolution);

  /**
   * Build an instance of SubscribeRulesInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SubscribeRulesPayload): SubscribeRulesInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SubscribeRulesInstance, SubscribeRulesList, SubscribeRulesListInstance, SubscribeRulesListInstanceUpdateOptions, SubscribeRulesPage, SubscribeRulesPayload, SubscribeRulesResource, SubscribeRulesSolution }
