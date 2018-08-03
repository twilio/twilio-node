/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Sync = require('../Sync');
import Version = require('../../base/Version');
import { ServiceList } from './v1/service';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Sync
   *
   * @property services - services resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Sync);

  readonly services: ServiceListInstance;
}

export = V1;
