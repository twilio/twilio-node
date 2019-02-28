/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Preview = require('../Preview');
import Version = require('../../base/Version');
import { FleetList } from './deployed_devices/fleet';
import { FleetListInstance } from './deployed_devices/fleet';


declare class DeployedDevices extends Version {
  /**
   * Initialize the DeployedDevices version of Preview
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Preview);

  readonly fleets: FleetListInstance;
}

export = DeployedDevices;
