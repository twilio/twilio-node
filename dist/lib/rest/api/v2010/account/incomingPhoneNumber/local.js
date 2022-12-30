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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalPage = exports.LocalInstance = exports.LocalListInstance = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class LocalListInstanceImpl {
}
function LocalListInstance(version, accountSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    const instance = {};
    instance._version = version;
    instance._solution = { accountSid };
    instance._uri = `/Accounts/${accountSid}/IncomingPhoneNumbers/Local.json`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["phoneNumber"] === null || params["phoneNumber"] === undefined) {
            throw new Error("Required parameter \"params['phoneNumber']\" missing.");
        }
        let data = {};
        data["PhoneNumber"] = params["phoneNumber"];
        if (params["apiVersion"] !== undefined)
            data["ApiVersion"] = params["apiVersion"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["smsApplicationSid"] !== undefined)
            data["SmsApplicationSid"] = params["smsApplicationSid"];
        if (params["smsFallbackMethod"] !== undefined)
            data["SmsFallbackMethod"] = params["smsFallbackMethod"];
        if (params["smsFallbackUrl"] !== undefined)
            data["SmsFallbackUrl"] = params["smsFallbackUrl"];
        if (params["smsMethod"] !== undefined)
            data["SmsMethod"] = params["smsMethod"];
        if (params["smsUrl"] !== undefined)
            data["SmsUrl"] = params["smsUrl"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        if (params["statusCallbackMethod"] !== undefined)
            data["StatusCallbackMethod"] = params["statusCallbackMethod"];
        if (params["voiceApplicationSid"] !== undefined)
            data["VoiceApplicationSid"] = params["voiceApplicationSid"];
        if (params["voiceCallerIdLookup"] !== undefined)
            data["VoiceCallerIdLookup"] = serialize.bool(params["voiceCallerIdLookup"]);
        if (params["voiceFallbackMethod"] !== undefined)
            data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
        if (params["voiceFallbackUrl"] !== undefined)
            data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
        if (params["voiceMethod"] !== undefined)
            data["VoiceMethod"] = params["voiceMethod"];
        if (params["voiceUrl"] !== undefined)
            data["VoiceUrl"] = params["voiceUrl"];
        if (params["identitySid"] !== undefined)
            data["IdentitySid"] = params["identitySid"];
        if (params["addressSid"] !== undefined)
            data["AddressSid"] = params["addressSid"];
        if (params["emergencyStatus"] !== undefined)
            data["EmergencyStatus"] = params["emergencyStatus"];
        if (params["emergencyAddressSid"] !== undefined)
            data["EmergencyAddressSid"] = params["emergencyAddressSid"];
        if (params["trunkSid"] !== undefined)
            data["TrunkSid"] = params["trunkSid"];
        if (params["voiceReceiveMode"] !== undefined)
            data["VoiceReceiveMode"] = params["voiceReceiveMode"];
        if (params["bundleSid"] !== undefined)
            data["BundleSid"] = params["bundleSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new LocalInstance(operationVersion, payload, this._solution.accountSid));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.page = function page(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["beta"] !== undefined)
            data["Beta"] = serialize.bool(params["beta"]);
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["phoneNumber"] !== undefined)
            data["PhoneNumber"] = params["phoneNumber"];
        if (params["origin"] !== undefined)
            data["Origin"] = params["origin"];
        if (params["pageSize"] !== undefined)
            data["PageSize"] = params["pageSize"];
        if (params.page !== undefined)
            data["Page"] = params.pageNumber;
        if (params.pageToken !== undefined)
            data["PageToken"] = params.pageToken;
        const headers = {};
        let operationVersion = version, operationPromise = operationVersion.page({
            uri: this._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new LocalPage(operationVersion, payload, this._solution));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.each = instance._version.each;
    instance.list = instance._version.list;
    instance.getPage = function getPage(targetUrl, callback) {
        let operationPromise = this._version._domain.twilio.request({
            method: "get",
            uri: targetUrl,
        });
        operationPromise = operationPromise.then((payload) => new LocalPage(this._version, payload, this._solution));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.toJSON = function toJSON() {
        return this._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    };
    return instance;
}
exports.LocalListInstance = LocalListInstance;
class LocalInstance {
    constructor(_version, payload, accountSid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.addressSid = payload.address_sid;
        this.addressRequirements = payload.address_requirements;
        this.apiVersion = payload.api_version;
        this.beta = payload.beta;
        this.capabilities = payload.capabilities;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.friendlyName = payload.friendly_name;
        this.identitySid = payload.identity_sid;
        this.phoneNumber = payload.phone_number;
        this.origin = payload.origin;
        this.sid = payload.sid;
        this.smsApplicationSid = payload.sms_application_sid;
        this.smsFallbackMethod = payload.sms_fallback_method;
        this.smsFallbackUrl = payload.sms_fallback_url;
        this.smsMethod = payload.sms_method;
        this.smsUrl = payload.sms_url;
        this.statusCallback = payload.status_callback;
        this.statusCallbackMethod = payload.status_callback_method;
        this.trunkSid = payload.trunk_sid;
        this.uri = payload.uri;
        this.voiceReceiveMode = payload.voice_receive_mode;
        this.voiceApplicationSid = payload.voice_application_sid;
        this.voiceCallerIdLookup = payload.voice_caller_id_lookup;
        this.voiceFallbackMethod = payload.voice_fallback_method;
        this.voiceFallbackUrl = payload.voice_fallback_url;
        this.voiceMethod = payload.voice_method;
        this.voiceUrl = payload.voice_url;
        this.emergencyStatus = payload.emergency_status;
        this.emergencyAddressSid = payload.emergency_address_sid;
        this.emergencyAddressStatus = payload.emergency_address_status;
        this.bundleSid = payload.bundle_sid;
        this.status = payload.status;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            addressSid: this.addressSid,
            addressRequirements: this.addressRequirements,
            apiVersion: this.apiVersion,
            beta: this.beta,
            capabilities: this.capabilities,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            friendlyName: this.friendlyName,
            identitySid: this.identitySid,
            phoneNumber: this.phoneNumber,
            origin: this.origin,
            sid: this.sid,
            smsApplicationSid: this.smsApplicationSid,
            smsFallbackMethod: this.smsFallbackMethod,
            smsFallbackUrl: this.smsFallbackUrl,
            smsMethod: this.smsMethod,
            smsUrl: this.smsUrl,
            statusCallback: this.statusCallback,
            statusCallbackMethod: this.statusCallbackMethod,
            trunkSid: this.trunkSid,
            uri: this.uri,
            voiceReceiveMode: this.voiceReceiveMode,
            voiceApplicationSid: this.voiceApplicationSid,
            voiceCallerIdLookup: this.voiceCallerIdLookup,
            voiceFallbackMethod: this.voiceFallbackMethod,
            voiceFallbackUrl: this.voiceFallbackUrl,
            voiceMethod: this.voiceMethod,
            voiceUrl: this.voiceUrl,
            emergencyStatus: this.emergencyStatus,
            emergencyAddressSid: this.emergencyAddressSid,
            emergencyAddressStatus: this.emergencyAddressStatus,
            bundleSid: this.bundleSid,
            status: this.status,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.LocalInstance = LocalInstance;
class LocalPage extends Page_1.default {
    /**
     * Initialize the LocalPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of LocalInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new LocalInstance(this._version, payload, this._solution.accountSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.LocalPage = LocalPage;
