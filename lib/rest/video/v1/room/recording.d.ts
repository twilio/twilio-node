/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import deserialize = require('../../../../base/deserialize');
import serialize = require('../../../../base/serialize');
import values = require('../../../../base/values');

/**
 * @constructor Twilio.Video.V1.RoomContext.RoomRecordingList
 * @description Initialize the RoomRecordingList
 *
 * @param version - Version of the resource
 * @param roomSid - The room_sid
 */
declare function RoomRecordingList(version: V1, roomSid: string): RoomRecordingListInstance;


declare class RoomRecordingPage extends Page {
  /**
   * @constructor Twilio.Video.V1.RoomContext.RoomRecordingPage
   * @augments Page
   * @description Initialize the RoomRecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of RoomRecordingInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RoomRecordingInstance {
  /**
   * @constructor Twilio.Video.V1.RoomContext.RoomRecordingInstance
   * @description Initialize the RoomRecordingContext
   *
   * @property accountSid - The account_sid
   * @property status - The status
   * @property dateCreated - The date_created
   * @property sid - The sid
   * @property sourceSid - The source_sid
   * @property size - The size
   * @property url - The url
   * @property type - The type
   * @property duration - The duration
   * @property containerFormat - The container_format
   * @property codec - The codec
   * @property groupingSids - The grouping_sids
   * @property trackName - The track_name
   * @property roomSid - The room_sid
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, payload: object, roomSid: sid, sid: sid);

  _proxy?: RoomRecordingContext;
  /**
   * fetch a RoomRecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the RoomRecordingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingInstance
   * @instance
   */
  toJSON();
}


declare class RoomRecordingContext {
  /**
   * @constructor Twilio.Video.V1.RoomContext.RoomRecordingContext
   * @description Initialize the RoomRecordingContext
   *
   * @param version - Version of the resource
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, roomSid: sid, sid: sid);

  /**
   * fetch a RoomRecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { RoomRecordingContext, RoomRecordingInstance, RoomRecordingList, RoomRecordingPage }
