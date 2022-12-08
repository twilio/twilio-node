/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { BundleListInstance } from "./regulatoryCompliance/bundle";
import { EndUserListInstance } from "./regulatoryCompliance/endUser";
import { EndUserTypeListInstance } from "./regulatoryCompliance/endUserType";
import { RegulationListInstance } from "./regulatoryCompliance/regulation";
import { SupportingDocumentListInstance } from "./regulatoryCompliance/supportingDocument";
import { SupportingDocumentTypeListInstance } from "./regulatoryCompliance/supportingDocumentType";

export interface RegulatoryComplianceListInstance {
  bundles: BundleListInstance;
  endUsers: EndUserListInstance;
  endUserTypes: EndUserTypeListInstance;
  regulations: RegulationListInstance;
  supportingDocuments: SupportingDocumentListInstance;
  supportingDocumentTypes: SupportingDocumentTypeListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface RegulatoryComplianceSolution {}

interface RegulatoryComplianceListInstanceImpl
  extends RegulatoryComplianceListInstance {}
class RegulatoryComplianceListInstanceImpl
  implements RegulatoryComplianceListInstance
{
  _version?: V2;
  _solution?: RegulatoryComplianceSolution;
  _uri?: string;

  _bundles?: BundleListInstance;
  _endUsers?: EndUserListInstance;
  _endUserTypes?: EndUserTypeListInstance;
  _regulations?: RegulationListInstance;
  _supportingDocuments?: SupportingDocumentListInstance;
  _supportingDocumentTypes?: SupportingDocumentTypeListInstance;
}

export function RegulatoryComplianceListInstance(
  version: V2
): RegulatoryComplianceListInstance {
  const instance = {} as RegulatoryComplianceListInstanceImpl;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/RegulatoryCompliance`;

  Object.defineProperty(instance, "bundles", {
    get: function bundles() {
      if (!this._bundles) {
        this._bundles = BundleListInstance(this._version);
      }
      return this._bundles;
    },
  });

  Object.defineProperty(instance, "endUsers", {
    get: function endUsers() {
      if (!this._endUsers) {
        this._endUsers = EndUserListInstance(this._version);
      }
      return this._endUsers;
    },
  });

  Object.defineProperty(instance, "endUserTypes", {
    get: function endUserTypes() {
      if (!this._endUserTypes) {
        this._endUserTypes = EndUserTypeListInstance(this._version);
      }
      return this._endUserTypes;
    },
  });

  Object.defineProperty(instance, "regulations", {
    get: function regulations() {
      if (!this._regulations) {
        this._regulations = RegulationListInstance(this._version);
      }
      return this._regulations;
    },
  });

  Object.defineProperty(instance, "supportingDocuments", {
    get: function supportingDocuments() {
      if (!this._supportingDocuments) {
        this._supportingDocuments = SupportingDocumentListInstance(
          this._version
        );
      }
      return this._supportingDocuments;
    },
  });

  Object.defineProperty(instance, "supportingDocumentTypes", {
    get: function supportingDocumentTypes() {
      if (!this._supportingDocumentTypes) {
        this._supportingDocumentTypes = SupportingDocumentTypeListInstance(
          this._version
        );
      }
      return this._supportingDocumentTypes;
    },
  });

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}
