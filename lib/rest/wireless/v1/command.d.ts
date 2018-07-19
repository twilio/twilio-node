/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the CommandList
 *
 * @param version - Version of the resource
 */
declare function CommandList(version: V1): CommandListInstance;

interface CommandResource {
  account_sid: string;
  command: string;
  command_mode: CommandCommandMode;
  date_created: Date;
  date_updated: Date;
  direction: CommandDirection;
  sid: string;
  sim_sid: string;
  status: CommandStatus;
  url: string;
}

interface CommandPayload extends CommandResource, Page.TwilioResponsePayload {
}

interface CommandSolution {
}

interface CommandListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CommandContext;
  /**
   * create a CommandInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CommandListInstanceCreateOptions, callback?: (error: Error | null, items: CommandListInstance) => any): Promise<CommandInstance>;
  /**
   * Streams CommandInstance records from the API.
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
  each(opts?: CommandListInstanceEachOptions, callback?: (item: CommandInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a command
   *
   * @param sid - The sid
   */
  get(sid: string): CommandContext;
  /**
   * Retrieve a single target page of CommandInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function): Promise<CommandPage>;
  /**
   * @description Lists CommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CommandListInstanceOptions, callback?: function): Promise<CommandInstance[]>;
  /**
   * Retrieve a single page of CommandInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CommandListInstancePageOptions, callback?: function): Promise<CommandPage>;
}

/**
 * Options to pass to each
 *
 * @property sim - Only return Commands to or from this SIM.
 * @property status - Only return Commands with this status value.
 * @property direction - Only return Commands with this direction value.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 */
export interface CommandListInstanceEachOptions {
  callback?: (item: CommandInstance, done: (err?: Error) => void) => void;
  direction?: command.direction;
  done?: Function;
  limit?: number;
  pageSize?: number;
  sim?: string;
  status?: command.status;
}

/**
 * Options to pass to list
 *
 * @property sim - Only return Commands to or from this SIM.
 * @property status - Only return Commands with this status value.
 * @property direction - Only return Commands with this direction value.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
export interface CommandListInstanceOptions {
  direction?: command.direction;
  limit?: number;
  pageSize?: number;
  sim?: string;
  status?: command.status;
}

/**
 * Options to pass to page
 *
 * @property sim - Only return Commands to or from this SIM.
 * @property status - Only return Commands with this status value.
 * @property direction - Only return Commands with this direction value.
 * @property pageToken - PageToken provided by the API
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 */
export interface CommandListInstancePageOptions {
  direction?: command.direction;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  sim?: string;
  status?: command.status;
}

/**
 * Options to pass to create
 *
 * @property command - The message body of the Command or a Base64 encoded byte string in binary mode.
 * @property sim - The Sid or UniqueName of the SIM to send the Command to.
 * @property callbackMethod - The HTTP method Twilio will use when making a request to the callback URL.
 * @property callbackUrl - Twilio will make a request to this URL when the Command has finished sending.
 * @property commandMode - A string representing which mode to send the SMS message using.
 * @property includeSid - When sending a Command to a SIM in text mode, Twilio can automatically include the Sid of the Command in the message body, which could be used to ensure that the device does not process the same Command more than once.
 */
export interface CommandListInstanceCreateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  command: string;
  commandMode?: command.command_mode;
  includeSid?: string;
  sim?: string;
}


declare class CommandPage extends Page {
  /**
   * @constructor Twilio.Wireless.V1.CommandPage
   * @augments Page
   * @description Initialize the CommandPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Wireless.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of CommandInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CommandInstance {
  /**
   * @constructor Twilio.Wireless.V1.CommandInstance
   * @description Initialize the CommandContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account that this Command belongs to.
   * @property simSid - The unique ID of the SIM that this Command was sent to or from.
   * @property command - The message being sent to or from the SIM.
   * @property commandMode - A string representing which mode the SMS was sent or received using.
   * @property status - A string representing the status of the Command.
   * @property direction - The direction of the Command.
   * @property dateCreated - The date that this resource was created, given as GMT in ISO 8601 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in ISO 8601 format.
   * @property url - The URL for this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Wireless.V1, payload: object, sid: sid);

  _proxy?: CommandContext;
  /**
   * fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CommandInstance) => any);
  /**
   * Produce a plain JSON object version of the CommandInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON();
}


declare class CommandContext {
  /**
   * @constructor Twilio.Wireless.V1.CommandContext
   * @description Initialize the CommandContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Wireless.V1, sid: sid);

  /**
   * fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CommandContext) => any);
}

export { CommandContext, CommandInstance, CommandList, CommandListInstance, CommandPage, CommandPayload, CommandResource, CommandSolution }
