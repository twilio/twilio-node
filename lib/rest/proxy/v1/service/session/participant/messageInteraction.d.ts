/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import V1 = require('../../../../V1');
import deserialize = require('../../../../../../base/deserialize');
import serialize = require('../../../../../../base/serialize');
import values = require('../../../../../../base/values');

/**
 * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionList
 * @description Initialize the MessageInteractionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param sessionSid - Session Sid.
 * @param participantSid - Participant Sid.
 */
declare function MessageInteractionList(version: V1, serviceSid: string, sessionSid: string, participantSid: string): MessageInteractionListInstance;


declare class MessageInteractionPage extends Page {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionPage
   * @augments Page
   * @description Initialize the MessageInteractionPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Proxy.V1, response: object, solution: object);

  /**
   * Build an instance of MessageInteractionInstance
   *
   * @function getInstance
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MessageInteractionInstance {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionInstance
   * @description Initialize the MessageInteractionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Message Interaction.
   * @property sessionSid - Session Sid.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property data - Message body
   * @property type - The Type of this Message Interaction
   * @property participantSid - Participant Sid.
   * @property inboundParticipantSid - Always empty for Message Interactions.
   * @property inboundResourceSid - Always empty for Message Interactions.
   * @property inboundResourceStatus - Always empty for Message Interactions.
   * @property inboundResourceType - Always empty for Message Interactions.
   * @property inboundResourceUrl - Always empty for Message Interactions.
   * @property outboundParticipantSid - Outbound Participant Sid.
   * @property outboundResourceSid - Outbound message resource Sid.
   * @property outboundResourceStatus - The Outbound Resource Status of this Message Interaction
   * @property outboundResourceType - Message
   * @property outboundResourceUrl - The URL of the Twilio message resource.
   * @property dateCreated - The date this Message Interaction was created
   * @property dateUpdated - The date this Message Interaction was last updated
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param participantSid - Participant Sid.
   * @param sid - The sid
   */
  constructor(version: Twilio.Proxy.V1, payload: object, serviceSid: sid, sessionSid: sid, participantSid: sid, sid: sid);

  _proxy?: MessageInteractionContext;
  /**
   * fetch a MessageInteractionInstance
   *
   * @function fetch
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the MessageInteractionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionInstance
   * @instance
   */
  toJSON();
}


declare class MessageInteractionContext {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionContext
   * @description Initialize the MessageInteractionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sessionSid - The session_sid
   * @param participantSid - The participant_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Proxy.V1, serviceSid: sid, sessionSid: sid, participantSid: sid, sid: sid);

  /**
   * fetch a MessageInteractionInstance
   *
   * @function fetch
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { MessageInteractionContext, MessageInteractionInstance, MessageInteractionList, MessageInteractionPage }
