/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type FeedbackIssues = 'audio-latency'|'digits-not-captured'|'dropped-call'|'imperfect-audio'|'incorrect-caller-id'|'one-way-audio'|'post-dial-delay'|'unsolicited-call';

/**
 * Initialize the FeedbackList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 * @param callSid - The unique string that identifies this resource
 */
declare function FeedbackList(version: V2010, accountSid: string, callSid: string): FeedbackListInstance;

/**
 * Options to pass to create
 *
 * @property issue - Issues experienced during the call
 * @property qualityScore - The call quality expressed as an integer from 1 to 5
 */
interface FeedbackInstanceCreateOptions {
  issue?: FeedbackIssues | FeedbackIssues[];
  qualityScore: number;
}

/**
 * Options to pass to update
 *
 * @property issue - Issues experienced during the call
 * @property qualityScore - The call quality expressed as an integer from 1 to 5
 */
interface FeedbackInstanceUpdateOptions {
  issue?: FeedbackIssues | FeedbackIssues[];
  qualityScore: number;
}

interface FeedbackListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FeedbackContext;
  /**
   * Constructs a feedback
   */
  get(): FeedbackContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface FeedbackPayload extends FeedbackResource, Page.TwilioResponsePayload {
}

interface FeedbackResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  issues: FeedbackIssues[];
  quality_score: number;
  sid: string;
}

interface FeedbackSolution {
  accountSid?: string;
  callSid?: string;
}


declare class FeedbackContext {
  /**
   * Initialize the FeedbackContext
   *
   * @param version - Version of the resource
   * @param accountSid - The unique sid that identifies this account
   * @param callSid - The call sid that uniquely identifies the call
   */
  constructor(version: V2010, accountSid: string, callSid: string);

  /**
   * create a FeedbackInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FeedbackInstanceCreateOptions, callback?: (error: Error | null, item: FeedbackInstance) => any): Promise<FeedbackInstance>;
  /**
   * fetch a FeedbackInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FeedbackInstance) => any): Promise<FeedbackInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FeedbackInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: FeedbackInstanceUpdateOptions, callback?: (error: Error | null, items: FeedbackInstance) => any): Promise<FeedbackInstance>;
}


declare class FeedbackInstance extends SerializableClass {
  /**
   * Initialize the FeedbackContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param callSid - The unique string that identifies this resource
   */
  constructor(version: V2010, payload: FeedbackPayload, accountSid: string, callSid: string);

  private _proxy: FeedbackContext;
  accountSid: string;
  /**
   * create a FeedbackInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FeedbackInstanceCreateOptions, callback?: (error: Error | null, items: FeedbackInstance) => any): Promise<FeedbackInstance>;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a FeedbackInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FeedbackInstance) => any): Promise<FeedbackInstance>;
  issues: FeedbackIssues[];
  qualityScore: number;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FeedbackInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: FeedbackInstanceUpdateOptions, callback?: (error: Error | null, items: FeedbackInstance) => any): Promise<FeedbackInstance>;
}


declare class FeedbackPage extends Page<V2010, FeedbackPayload, FeedbackResource, FeedbackInstance> {
  /**
   * Initialize the FeedbackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: FeedbackSolution);

  /**
   * Build an instance of FeedbackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FeedbackPayload): FeedbackInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FeedbackContext, FeedbackInstance, FeedbackInstanceCreateOptions, FeedbackInstanceUpdateOptions, FeedbackList, FeedbackListInstance, FeedbackPage, FeedbackPayload, FeedbackResource, FeedbackSolution }
