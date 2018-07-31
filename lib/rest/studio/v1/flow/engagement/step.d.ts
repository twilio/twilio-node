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
import { StepContextList } from './step/stepContext';

/**
 * @description Initialize the StepList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param flowSid - The flow_sid
 * @param engagementSid - The engagement_sid
 */
declare function StepList(version: V1, flowSid: string, engagementSid: string): StepListInstance;

interface StepResource {
  account_sid: string;
  context: string;
  date_created: Date;
  date_updated: Date;
  engagement_sid: string;
  flow_sid: string;
  links: string;
  name: string;
  sid: string;
  transitioned_from: string;
  transitioned_to: string;
  url: string;
}

interface StepPayload extends StepResource, Page.TwilioResponsePayload {
}

interface StepSolution {
  engagementSid?: string;
  flowSid?: string;
}

interface StepListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): StepContext;
  /**
   * Streams StepInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: StepListInstanceEachOptions, callback?: (item: StepInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a step
   *
   * @param sid - The sid
   */
  get(sid: string): StepContext;
  /**
   * Retrieve a single target page of StepInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: StepPage) => any): Promise<StepPage>;
  /**
   * Lists StepInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: StepListInstanceOptions, callback?: (error: Error | null, items: StepInstance[]) => any): Promise<StepInstance[]>;
  /**
   * Retrieve a single page of StepInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: StepListInstancePageOptions, callback?: (error: Error | null, items: StepPage) => any): Promise<StepPage>;
}


declare class StepPage extends Page<V1, StepPayload, StepResource, StepInstance> {
  /**
   * Initialize the StepPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: StepSolution);

  /**
   * Build an instance of StepInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: StepPayload): StepInstance;
}


declare class StepInstance extends SerializableClass {
  /**
   * Initialize the StepContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property flowSid - The flow_sid
   * @property engagementSid - The engagement_sid
   * @property name - The name
   * @property context - The context
   * @property transitionedFrom - The transitioned_from
   * @property transitionedTo - The transitioned_to
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - The flow_sid
   * @param engagementSid - The engagement_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: StepPayload, flowSid: string, engagementSid: string, sid: string);

  private _proxy: StepContext;
  accountSid: string;
  context: string;
  dateCreated: Date;
  dateUpdated: Date;
  engagementSid: string;
  /**
   * fetch a StepInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: StepInstance) => any): void;
  flowSid: string;
  links: string;
  name: string;
  sid: string;
  /**
   * Access the stepContext
   */
  stepContext();
  /**
   * Produce a plain JSON object version of the StepInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  transitionedFrom: string;
  transitionedTo: string;
  url: string;
}


declare class StepContext {
  /**
   * Initialize the StepContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property stepContext - stepContext resource
   *
   * @param version - Version of the resource
   * @param flowSid - The flow_sid
   * @param engagementSid - The engagement_sid
   * @param sid - The sid
   */
  constructor(version: V1, flowSid: string, engagementSid: string, sid: string);

  /**
   * fetch a StepInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: StepInstance) => any): void;
  stepContext?: Twilio.Studio.V1.FlowContext.EngagementContext.StepContext.StepContextList;
}

export { StepContext, StepInstance, StepList, StepListInstance, StepListInstanceEachOptions, StepListInstanceOptions, StepListInstancePageOptions, StepPage, StepPayload, StepResource, StepSolution }
