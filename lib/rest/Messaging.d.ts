/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./messaging/V1');
import { DeactivationsListInstance } from './messaging/v1/deactivation';
import { ServiceListInstance } from './messaging/v1/service';


declare class Messaging extends Domain {
  /**
   * Initialize messaging domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly deactivations: DeactivationsListInstance;
  readonly services: ServiceListInstance;
  readonly v1: V1;
}

export = Messaging;
