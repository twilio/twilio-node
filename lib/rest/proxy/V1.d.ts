/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Proxy = require('../Proxy');
import Version = require('../../base/Version');
import { ServiceList } from './v1/service';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Proxy
   *
   * @property services - services resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Proxy);

  services?: Twilio.Proxy.V1.ServiceList;
}

export = V1;
