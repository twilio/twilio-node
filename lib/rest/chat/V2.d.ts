/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Chat = require('../Chat');
import Version = require('../../base/Version');
import { CredentialList } from './v2/credential';
import { ServiceList } from './v2/service';


declare class V2 extends Version {
  /**
   * Initialize the V2 version of Chat
   *
   * @property credentials - credentials resource
   * @property services - services resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Chat);

  readonly credentials: CredentialListInstance;
  readonly services: ServiceListInstance;
}

export = V2;
