"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Pricing
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const country_1 = require("./messaging/country");
class MessagingListInstanceImpl {
}
function MessagingListInstance(version) {
    const instance = {};
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Messaging`;
    Object.defineProperty(instance, "countries", {
        get: function countries() {
            if (!this._countries) {
                this._countries = (0, country_1.CountryListInstance)(this._version);
            }
            return this._countries;
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
exports.MessagingListInstance = MessagingListInstance;
