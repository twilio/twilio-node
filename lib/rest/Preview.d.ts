/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import AccSecurity = require('./preview/AccSecurity');
import BulkExports = require('./preview/BulkExports');
import DeployedDevices = require('./preview/DeployedDevices');
import Domain = require('../base/Domain');
import HostedNumbers = require('./preview/HostedNumbers');
import Marketplace = require('./preview/Marketplace');
import Sync = require('./preview/Sync');
import TrustedComms = require('./preview/TrustedComms');
import Twilio = require('./Twilio');
import Understand = require('./preview/Understand');
import Wireless = require('./preview/Wireless');
import { AssistantListInstance } from './preview/understand/assistant';
import { AuthorizationDocumentListInstance } from './preview/hosted_numbers/authorizationDocument';
import { AvailableAddOnListInstance } from './preview/marketplace/availableAddOn';
import { CommandListInstance } from './preview/wireless/command';
import { CpsListInstance } from './preview/trusted_comms/cps';
import { CurrentCallListInstance } from './preview/trusted_comms/currentCall';
import { DeviceListInstance } from './preview/trusted_comms/device';
import { ExportConfigurationListInstance } from './preview/bulk_exports/exportConfiguration';
import { ExportListInstance } from './preview/bulk_exports/export';
import { FleetListInstance } from './preview/deployed_devices/fleet';
import { HostedNumberOrderListInstance } from './preview/hosted_numbers/hostedNumberOrder';
import { InstalledAddOnListInstance } from './preview/marketplace/installedAddOn';
import { PhoneCallListInstance } from './preview/trusted_comms/phoneCall';
import { RatePlanListInstance } from './preview/wireless/ratePlan';
import { ServiceListInstance } from './preview/sync/service';
import { SimListInstance } from './preview/wireless/sim';


declare class Preview extends Domain {
  /**
   * Initialize preview domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly acc_security: AccSecurity;
  readonly assistants: AssistantListInstance;
  readonly authorizationDocuments: AuthorizationDocumentListInstance;
  readonly availableAddOns: AvailableAddOnListInstance;
  readonly bulk_exports: BulkExports;
  readonly commands: CommandListInstance;
  readonly cps: CpsListInstance;
  readonly currentCalls: CurrentCallListInstance;
  readonly deployed_devices: DeployedDevices;
  readonly devices: DeviceListInstance;
  readonly exportConfiguration: ExportConfigurationListInstance;
  readonly exports: ExportListInstance;
  readonly fleets: FleetListInstance;
  readonly hostedNumberOrders: HostedNumberOrderListInstance;
  readonly hosted_numbers: HostedNumbers;
  readonly installedAddOns: InstalledAddOnListInstance;
  readonly marketplace: Marketplace;
  readonly phoneCalls: PhoneCallListInstance;
  readonly ratePlans: RatePlanListInstance;
  readonly services: ServiceListInstance;
  readonly sims: SimListInstance;
  readonly sync: Sync;
  readonly trusted_comms: TrustedComms;
  readonly understand: Understand;
  readonly wireless: Wireless;
}

export = Preview;
