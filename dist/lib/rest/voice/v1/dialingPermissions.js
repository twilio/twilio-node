"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialingPermissionsListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const bulkCountryUpdate_1 = require("./dialingPermissions/bulkCountryUpdate");
const country_1 = require("./dialingPermissions/country");
const settings_1 = require("./dialingPermissions/settings");
class DialingPermissionsListInstanceImpl {
}
function DialingPermissionsListInstance(version) {
    const instance = {};
    instance._version = version;
    instance._solution = {};
    instance._uri = `/DialingPermissions`;
    Object.defineProperty(instance, "bulkCountryUpdates", {
        get: function bulkCountryUpdates() {
            if (!this._bulkCountryUpdates) {
                this._bulkCountryUpdates = (0, bulkCountryUpdate_1.BulkCountryUpdateListInstance)(this._version);
            }
            return this._bulkCountryUpdates;
        },
    });
    Object.defineProperty(instance, "countries", {
        get: function countries() {
            if (!this._countries) {
                this._countries = (0, country_1.CountryListInstance)(this._version);
            }
            return this._countries;
        },
    });
    Object.defineProperty(instance, "settings", {
        get: function settings() {
            if (!this._settings) {
                this._settings = (0, settings_1.SettingsListInstance)(this._version);
            }
            return this._settings;
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
exports.DialingPermissionsListInstance = DialingPermissionsListInstance;
