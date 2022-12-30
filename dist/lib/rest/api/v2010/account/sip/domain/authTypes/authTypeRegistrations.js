"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTypeRegistrationsListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../../../base/deserialize");
const serialize = require("../../../../../../../base/serialize");
const utility_1 = require("../../../../../../../base/utility");
const authRegistrationsCredentialListMapping_1 = require("./authTypeRegistrations/authRegistrationsCredentialListMapping");
class AuthTypeRegistrationsListInstanceImpl {
}
function AuthTypeRegistrationsListInstance(version, accountSid, domainSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(domainSid)) {
        throw new Error("Parameter 'domainSid' is not valid.");
    }
    const instance = {};
    instance._version = version;
    instance._solution = { accountSid, domainSid };
    instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Registrations.json`;
    Object.defineProperty(instance, "credentialListMappings", {
        get: function credentialListMappings() {
            if (!this._credentialListMappings) {
                this._credentialListMappings =
                    (0, authRegistrationsCredentialListMapping_1.AuthRegistrationsCredentialListMappingListInstance)(this._version, this._solution.accountSid, this._solution.domainSid);
            }
            return this._credentialListMappings;
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
exports.AuthTypeRegistrationsListInstance = AuthTypeRegistrationsListInstance;
