/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the CompositionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CompositionList(version: V1): CompositionListInstance;

interface CompositionResource {
  account_sid: string;
  audio_sources: string;
  audio_sources_excluded: string;
  bitrate: number;
  date_completed: string;
  date_created: Date;
  date_deleted: string;
  duration: number;
  format: CompositionFormat;
  links: string;
  resolution: string;
  room_sid: string;
  sid: string;
  size: number;
  status: CompositionStatus;
  trim: boolean;
  url: string;
  video_layout: string;
}

interface CompositionPayload extends CompositionResource, Page.TwilioResponsePayload {
}

interface CompositionSolution {
}

interface CompositionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CompositionContext;
  /**
   * create a CompositionInstance
   *
   * @function create
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts?: object, callback?: function);
  /**
   * Streams CompositionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a composition
   *
   * @function get
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param sid - The Composition Sid that uniquely identifies the Composition to fetch.
   */
  get(sid: string);
  /**
   * Retrieve a single target page of CompositionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists CompositionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of CompositionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.CompositionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class CompositionPage extends Page {
  /**
   * @constructor Twilio.Video.V1.CompositionPage
   * @augments Page
   * @description Initialize the CompositionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of CompositionInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.CompositionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CompositionInstance {
  /**
   * @constructor Twilio.Video.V1.CompositionInstance
   * @description Initialize the CompositionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - Twilio Account SID.
   * @property status - The status of the Composition.
   * @property dateCreated - Date when the Composition Resource was created.
   * @property dateCompleted - Date when the media processing task finished.
   * @property dateDeleted - Date when the Composition Resource generated media was deleted.
   * @property sid - A 34-character string that uniquely identifies this Composition.
   * @property roomSid - A 34-character string that uniquely identifies the source of this Composition.
   * @property audioSources - A list of audio sources related to this Composition.
   * @property audioSourcesExcluded - A list of audio sources excluded related to this Composition.
   * @property videoLayout - The JSON video layout description.
   * @property resolution - Pixel resolution of the composed video.
   * @property trim - Boolean flag for clipping intervals that have no media.
   * @property format - The file format for this Composition.
   * @property bitrate - The bitrate
   * @property size - Size of the Composed media file expressed in bytes.
   * @property duration - Duration of the Composed media in seconds.
   * @property url - The absolute URL for this resource.
   * @property links - JSON object with the URL where the media file can be fetched.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The Composition Sid that uniquely identifies the Composition to fetch.
   */
  constructor(version: Twilio.Video.V1, payload: object, sid: sid);

  _proxy?: CompositionContext;
  /**
   * fetch a CompositionInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.CompositionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CompositionInstance
   *
   * @function remove
   * @memberof Twilio.Video.V1.CompositionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CompositionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.CompositionInstance
   * @instance
   */
  toJSON();
}


declare class CompositionContext {
  /**
   * @constructor Twilio.Video.V1.CompositionContext
   * @description Initialize the CompositionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The Composition Sid that uniquely identifies the Composition to fetch.
   */
  constructor(version: Twilio.Video.V1, sid: sid);

  /**
   * fetch a CompositionInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.CompositionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CompositionInstance
   *
   * @function remove
   * @memberof Twilio.Video.V1.CompositionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { CompositionContext, CompositionInstance, CompositionList, CompositionListInstance, CompositionPage, CompositionPayload, CompositionResource, CompositionSolution }
