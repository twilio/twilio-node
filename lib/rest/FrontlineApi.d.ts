/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./frontlineApi/V1');
import { UserListInstance } from './frontlineApi/v1/user';


declare class FrontlineApi extends Domain {
  /**
   * Initialize frontline_api domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly users: UserListInstance;
  readonly v1: V1;
}

export = FrontlineApi;
