/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import Wireless = require('../Wireless');
import { CommandList } from './v1/command';
import { CommandListInstance } from './v1/command';
import { RatePlanList } from './v1/ratePlan';
import { RatePlanListInstance } from './v1/ratePlan';
import { SimList } from './v1/sim';
import { SimListInstance } from './v1/sim';
import { UsageRecordList } from './v1/usageRecord';
import { UsageRecordListInstance } from './v1/usageRecord';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Wireless
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Wireless);

  readonly commands: CommandListInstance;
  readonly ratePlans: RatePlanListInstance;
  readonly sims: SimListInstance;
  readonly usageRecords: UsageRecordListInstance;
}

export = V1;