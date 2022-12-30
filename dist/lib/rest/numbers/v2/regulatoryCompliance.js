"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegulatoryComplianceListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const bundle_1 = require("./regulatoryCompliance/bundle");
const endUser_1 = require("./regulatoryCompliance/endUser");
const endUserType_1 = require("./regulatoryCompliance/endUserType");
const regulation_1 = require("./regulatoryCompliance/regulation");
const supportingDocument_1 = require("./regulatoryCompliance/supportingDocument");
const supportingDocumentType_1 = require("./regulatoryCompliance/supportingDocumentType");
class RegulatoryComplianceListInstanceImpl {
}
function RegulatoryComplianceListInstance(version) {
    const instance = {};
    instance._version = version;
    instance._solution = {};
    instance._uri = `/RegulatoryCompliance`;
    Object.defineProperty(instance, "bundles", {
        get: function bundles() {
            if (!this._bundles) {
                this._bundles = (0, bundle_1.BundleListInstance)(this._version);
            }
            return this._bundles;
        },
    });
    Object.defineProperty(instance, "endUsers", {
        get: function endUsers() {
            if (!this._endUsers) {
                this._endUsers = (0, endUser_1.EndUserListInstance)(this._version);
            }
            return this._endUsers;
        },
    });
    Object.defineProperty(instance, "endUserTypes", {
        get: function endUserTypes() {
            if (!this._endUserTypes) {
                this._endUserTypes = (0, endUserType_1.EndUserTypeListInstance)(this._version);
            }
            return this._endUserTypes;
        },
    });
    Object.defineProperty(instance, "regulations", {
        get: function regulations() {
            if (!this._regulations) {
                this._regulations = (0, regulation_1.RegulationListInstance)(this._version);
            }
            return this._regulations;
        },
    });
    Object.defineProperty(instance, "supportingDocuments", {
        get: function supportingDocuments() {
            if (!this._supportingDocuments) {
                this._supportingDocuments = (0, supportingDocument_1.SupportingDocumentListInstance)(this._version);
            }
            return this._supportingDocuments;
        },
    });
    Object.defineProperty(instance, "supportingDocumentTypes", {
        get: function supportingDocumentTypes() {
            if (!this._supportingDocumentTypes) {
                this._supportingDocumentTypes = (0, supportingDocumentType_1.SupportingDocumentTypeListInstance)(this._version);
            }
            return this._supportingDocumentTypes;
        },
    });
    instance.toJSON = function toJSON() {
        return this._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    };
    return instance;
}
exports.RegulatoryComplianceListInstance = RegulatoryComplianceListInstance;
