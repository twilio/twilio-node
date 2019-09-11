/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the EngagementContextList
 *
 * @param version - Version of the resource
 * @param flowSid - Flow SID
 * @param engagementSid - Engagement SID
 */
declare function EngagementContextList(version: V1, flowSid: string, engagementSid: string): EngagementContextListInstance;

interface EngagementContextListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): EngagementContextContext;
  /**
   * Constructs a engagement_context
   */
  get(): EngagementContextContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface EngagementContextPayload extends EngagementContextResource, Page.TwilioResponsePayload {
}

interface EngagementContextResource {
  account_sid: string;
  context: object;
  engagement_sid: string;
  flow_sid: string;
  url: string;
}

interface EngagementContextSolution {
  engagementSid?: string;
  flowSid?: string;
}


declare class EngagementContextContext {
  /**
   * Initialize the EngagementContextContext
   *
   * @param version - Version of the resource
   * @param flowSid - Flow SID
   * @param engagementSid - Engagement SID
   */
  constructor(version: V1, flowSid: string, engagementSid: string);

  /**
   * fetch a EngagementContextInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EngagementContextInstance) => any): Promise<EngagementContextInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class EngagementContextInstance extends SerializableClass {
  /**
   * Initialize the EngagementContextContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - Flow SID
   * @param engagementSid - Engagement SID
   */
  constructor(version: V1, payload: EngagementContextPayload, flowSid: string, engagementSid: string);

  private _proxy: EngagementContextContext;
  accountSid: string;
  context: object;
  engagementSid: string;
  /**
   * fetch a EngagementContextInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EngagementContextInstance) => any): void;
  flowSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class EngagementContextPage extends Page<V1, EngagementContextPayload, EngagementContextResource, EngagementContextInstance> {
  /**
   * Initialize the EngagementContextPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: EngagementContextSolution);

  /**
   * Build an instance of EngagementContextInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EngagementContextPayload): EngagementContextInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { EngagementContextContext, EngagementContextInstance, EngagementContextList, EngagementContextListInstance, EngagementContextPage, EngagementContextPayload, EngagementContextResource, EngagementContextSolution }
