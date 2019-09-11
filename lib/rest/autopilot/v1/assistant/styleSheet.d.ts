/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the StyleSheetList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The SID of the Assistant that is the parent of the resource
 */
declare function StyleSheetList(version: V1, assistantSid: string): StyleSheetListInstance;

/**
 * Options to pass to update
 *
 * @property styleSheet - The JSON string that describes the style sheet object
 */
interface StyleSheetInstanceUpdateOptions {
  styleSheet?: object;
}

interface StyleSheetListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): StyleSheetContext;
  /**
   * Constructs a style_sheet
   */
  get(): StyleSheetContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface StyleSheetPayload extends StyleSheetResource, Page.TwilioResponsePayload {
}

interface StyleSheetResource {
  account_sid: string;
  assistant_sid: string;
  data: object;
  url: string;
}

interface StyleSheetSolution {
  assistantSid?: string;
}


declare class StyleSheetContext {
  /**
   * Initialize the StyleSheetContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The SID of the Assistant with the StyleSheet resource to fetch
   */
  constructor(version: V1, assistantSid: string);

  /**
   * fetch a StyleSheetInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a StyleSheetInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: StyleSheetInstanceUpdateOptions, callback?: (error: Error | null, items: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
}


declare class StyleSheetInstance extends SerializableClass {
  /**
   * Initialize the StyleSheetContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The SID of the Assistant that is the parent of the resource
   */
  constructor(version: V1, payload: StyleSheetPayload, assistantSid: string);

  private _proxy: StyleSheetContext;
  accountSid: string;
  assistantSid: string;
  data: object;
  /**
   * fetch a StyleSheetInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: StyleSheetInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a StyleSheetInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: StyleSheetInstanceUpdateOptions, callback?: (error: Error | null, items: StyleSheetInstance) => any): void;
  url: string;
}


declare class StyleSheetPage extends Page<V1, StyleSheetPayload, StyleSheetResource, StyleSheetInstance> {
  /**
   * Initialize the StyleSheetPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: StyleSheetSolution);

  /**
   * Build an instance of StyleSheetInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: StyleSheetPayload): StyleSheetInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { StyleSheetContext, StyleSheetInstance, StyleSheetInstanceUpdateOptions, StyleSheetList, StyleSheetListInstance, StyleSheetPage, StyleSheetPayload, StyleSheetResource, StyleSheetSolution }
