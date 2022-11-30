/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./messaging/V1');
import { BrandRegistrationListInstance } from './messaging/v1/brandRegistration';
import { DeactivationsListInstance } from './messaging/v1/deactivation';
import { DomainCertsListInstance } from './messaging/v1/domainCert';
import { DomainConfigListInstance } from './messaging/v1/domainConfig';
import { ExternalCampaignListInstance } from './messaging/v1/externalCampaign';
import { ServiceListInstance } from './messaging/v1/service';
import { TollfreeVerificationListInstance } from './messaging/v1/tollfreeVerification';
import { UsecaseListInstance } from './messaging/v1/usecase';


declare class Messaging extends Domain {
  /**
   * Initialize messaging domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly brandRegistrations: BrandRegistrationListInstance;
  readonly deactivations: DeactivationsListInstance;
  readonly domainCerts: DomainCertsListInstance;
  readonly domainConfig: DomainConfigListInstance;
  readonly externalCampaign: ExternalCampaignListInstance;
  readonly services: ServiceListInstance;
  readonly tollfreeVerifications: TollfreeVerificationListInstance;
  readonly usecases: UsecaseListInstance;
  readonly v1: V1;
}

export = Messaging;
