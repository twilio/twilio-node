/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V2 = require('./routes/V2');
import { PhoneNumberListInstance } from './routes/v2/phoneNumber';
import { SipDomainListInstance } from './routes/v2/sipDomain';
import { TrunkListInstance } from './routes/v2/trunk';


declare class Routes extends Domain {
  /**
   * Initialize routes domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly phoneNumbers: PhoneNumberListInstance;
  readonly sipDomains: SipDomainListInstance;
  readonly trunks: TrunkListInstance;
  readonly v2: V2;
}

export = Routes;
