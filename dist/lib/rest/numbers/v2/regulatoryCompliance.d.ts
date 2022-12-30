/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
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
export interface RegulatoryComplianceSolution {
}
export declare function RegulatoryComplianceListInstance(version: V2): RegulatoryComplianceListInstance;
