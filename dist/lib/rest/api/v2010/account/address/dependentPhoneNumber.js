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
exports.DependentPhoneNumberPage = exports.DependentPhoneNumberInstance = exports.DependentPhoneNumberListInstance = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class DependentPhoneNumberListInstanceImpl {
}
function DependentPhoneNumberListInstance(version, accountSid, addressSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(addressSid)) {
        throw new Error("Parameter 'addressSid' is not valid.");
    }
    const instance = {};
    instance._version = version;
    instance._solution = { accountSid, addressSid };
    instance._uri = `/Accounts/${accountSid}/Addresses/${addressSid}/DependentPhoneNumbers.json`;
    instance.page = function page(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
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
        operationPromise = operationPromise.then((payload) => new DependentPhoneNumberPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new DependentPhoneNumberPage(this._version, payload, this._solution));
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
exports.DependentPhoneNumberListInstance = DependentPhoneNumberListInstance;
class DependentPhoneNumberInstance {
    constructor(_version, payload, accountSid, addressSid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.friendlyName = payload.friendly_name;
        this.phoneNumber = payload.phone_number;
        this.voiceUrl = payload.voice_url;
        this.voiceMethod = payload.voice_method;
        this.voiceFallbackMethod = payload.voice_fallback_method;
        this.voiceFallbackUrl = payload.voice_fallback_url;
        this.voiceCallerIdLookup = payload.voice_caller_id_lookup;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.smsFallbackMethod = payload.sms_fallback_method;
        this.smsFallbackUrl = payload.sms_fallback_url;
        this.smsMethod = payload.sms_method;
        this.smsUrl = payload.sms_url;
        this.addressRequirements = payload.address_requirements;
        this.capabilities = payload.capabilities;
        this.statusCallback = payload.status_callback;
        this.statusCallbackMethod = payload.status_callback_method;
        this.apiVersion = payload.api_version;
        this.smsApplicationSid = payload.sms_application_sid;
        this.voiceApplicationSid = payload.voice_application_sid;
        this.trunkSid = payload.trunk_sid;
        this.emergencyStatus = payload.emergency_status;
        this.emergencyAddressSid = payload.emergency_address_sid;
        this.uri = payload.uri;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            sid: this.sid,
            accountSid: this.accountSid,
            friendlyName: this.friendlyName,
            phoneNumber: this.phoneNumber,
            voiceUrl: this.voiceUrl,
            voiceMethod: this.voiceMethod,
            voiceFallbackMethod: this.voiceFallbackMethod,
            voiceFallbackUrl: this.voiceFallbackUrl,
            voiceCallerIdLookup: this.voiceCallerIdLookup,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            smsFallbackMethod: this.smsFallbackMethod,
            smsFallbackUrl: this.smsFallbackUrl,
            smsMethod: this.smsMethod,
            smsUrl: this.smsUrl,
            addressRequirements: this.addressRequirements,
            capabilities: this.capabilities,
            statusCallback: this.statusCallback,
            statusCallbackMethod: this.statusCallbackMethod,
            apiVersion: this.apiVersion,
            smsApplicationSid: this.smsApplicationSid,
            voiceApplicationSid: this.voiceApplicationSid,
            trunkSid: this.trunkSid,
            emergencyStatus: this.emergencyStatus,
            emergencyAddressSid: this.emergencyAddressSid,
            uri: this.uri,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.DependentPhoneNumberInstance = DependentPhoneNumberInstance;
class DependentPhoneNumberPage extends Page_1.default {
    /**
     * Initialize the DependentPhoneNumberPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of DependentPhoneNumberInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new DependentPhoneNumberInstance(this._version, payload, this._solution.accountSid, this._solution.addressSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.DependentPhoneNumberPage = DependentPhoneNumberPage;
