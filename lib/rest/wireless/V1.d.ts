/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import Wireless = require('../Wireless');
import { CommandList } from './v1/command';
import { RatePlanList } from './v1/ratePlan';
import { SimList } from './v1/sim';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Wireless
   *
   * @property commands - commands resource
   * @property ratePlans - ratePlans resource
   * @property sims - sims resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Wireless);

  commands?: Twilio.Wireless.V1.CommandList;
  ratePlans?: Twilio.Wireless.V1.RatePlanList;
  sims?: Twilio.Wireless.V1.SimList;
}

export = V1;
