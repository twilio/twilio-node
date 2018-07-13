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
 * @description Initialize the EventList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The unique ID of the Workspace
 */
declare function EventList(version: V1, workspaceSid: string): EventListInstance;


declare class EventPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.EventPage
   * @augments Page
   * @description Initialize the EventPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of EventInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class EventInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.EventInstance
   * @description Initialize the EventContext
   *
   * @property accountSid - The account owning this event
   * @property actorSid - The actor_sid
   * @property actorType - The actor_type
   * @property actorUrl - The actor_url
   * @property description - A description of the event
   * @property eventData - Data about this specific event.
   * @property eventDate - The time this event was sent
   * @property eventType - An identifier for this event
   * @property resourceSid - The sid of the object this event is most relevant to
   * @property resourceType - The type of object this event is most relevant to
   * @property resourceUrl - The resource_url
   * @property sid - The sid
   * @property source - The source
   * @property sourceIpAddress - The source_ip_address
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The unique ID of the Workspace
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, sid: sid);

  _proxy?: EventContext;
  /**
   * fetch a EventInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the EventInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventInstance
   * @instance
   */
  toJSON();
}


declare class EventContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.EventContext
   * @description Initialize the EventContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, sid: sid);

  /**
   * fetch a EventInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { EventContext, EventInstance, EventList, EventPage }
