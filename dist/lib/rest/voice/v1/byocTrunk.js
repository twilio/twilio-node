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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByocTrunkPage = exports.ByocTrunkListInstance = exports.ByocTrunkInstance = exports.ByocTrunkContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
class ByocTrunkContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/ByocTrunks/${sid}`;
    }
    remove(callback) {
        let operationVersion = this._version, operationPromise = operationVersion.remove({
            uri: this._uri,
            method: "delete",
        });
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    fetch(callback) {
        let operationVersion = this._version, operationPromise = operationVersion.fetch({
            uri: this._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new ByocTrunkInstance(operationVersion, payload, this._solution.sid));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["voiceUrl"] !== undefined)
            data["VoiceUrl"] = params["voiceUrl"];
        if (params["voiceMethod"] !== undefined)
            data["VoiceMethod"] = params["voiceMethod"];
        if (params["voiceFallbackUrl"] !== undefined)
            data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
        if (params["voiceFallbackMethod"] !== undefined)
            data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
        if (params["statusCallbackUrl"] !== undefined)
            data["StatusCallbackUrl"] = params["statusCallbackUrl"];
        if (params["statusCallbackMethod"] !== undefined)
            data["StatusCallbackMethod"] = params["statusCallbackMethod"];
        if (params["cnamLookupEnabled"] !== undefined)
            data["CnamLookupEnabled"] = serialize.bool(params["cnamLookupEnabled"]);
        if (params["connectionPolicySid"] !== undefined)
            data["ConnectionPolicySid"] = params["connectionPolicySid"];
        if (params["fromDomainSid"] !== undefined)
            data["FromDomainSid"] = params["fromDomainSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ByocTrunkInstance(operationVersion, payload, this._solution.sid));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return this._solution;
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ByocTrunkContextImpl = ByocTrunkContextImpl;
class ByocTrunkInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.sid = payload.sid;
        this.friendlyName = payload.friendly_name;
        this.voiceUrl = payload.voice_url;
        this.voiceMethod = payload.voice_method;
        this.voiceFallbackUrl = payload.voice_fallback_url;
        this.voiceFallbackMethod = payload.voice_fallback_method;
        this.statusCallbackUrl = payload.status_callback_url;
        this.statusCallbackMethod = payload.status_callback_method;
        this.cnamLookupEnabled = payload.cnam_lookup_enabled;
        this.connectionPolicySid = payload.connection_policy_sid;
        this.fromDomainSid = payload.from_domain_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ByocTrunkContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a ByocTrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a ByocTrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ByocTrunkInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            sid: this.sid,
            friendlyName: this.friendlyName,
            voiceUrl: this.voiceUrl,
            voiceMethod: this.voiceMethod,
            voiceFallbackUrl: this.voiceFallbackUrl,
            voiceFallbackMethod: this.voiceFallbackMethod,
            statusCallbackUrl: this.statusCallbackUrl,
            statusCallbackMethod: this.statusCallbackMethod,
            cnamLookupEnabled: this.cnamLookupEnabled,
            connectionPolicySid: this.connectionPolicySid,
            fromDomainSid: this.fromDomainSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ByocTrunkInstance = ByocTrunkInstance;
class ByocTrunkListInstanceImpl {
}
function ByocTrunkListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new ByocTrunkContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/ByocTrunks`;
    instance.create = function create(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["voiceUrl"] !== undefined)
            data["VoiceUrl"] = params["voiceUrl"];
        if (params["voiceMethod"] !== undefined)
            data["VoiceMethod"] = params["voiceMethod"];
        if (params["voiceFallbackUrl"] !== undefined)
            data["VoiceFallbackUrl"] = params["voiceFallbackUrl"];
        if (params["voiceFallbackMethod"] !== undefined)
            data["VoiceFallbackMethod"] = params["voiceFallbackMethod"];
        if (params["statusCallbackUrl"] !== undefined)
            data["StatusCallbackUrl"] = params["statusCallbackUrl"];
        if (params["statusCallbackMethod"] !== undefined)
            data["StatusCallbackMethod"] = params["statusCallbackMethod"];
        if (params["cnamLookupEnabled"] !== undefined)
            data["CnamLookupEnabled"] = serialize.bool(params["cnamLookupEnabled"]);
        if (params["connectionPolicySid"] !== undefined)
            data["ConnectionPolicySid"] = params["connectionPolicySid"];
        if (params["fromDomainSid"] !== undefined)
            data["FromDomainSid"] = params["fromDomainSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ByocTrunkInstance(operationVersion, payload));
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
        operationPromise = operationPromise.then((payload) => new ByocTrunkPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new ByocTrunkPage(this._version, payload, this._solution));
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
exports.ByocTrunkListInstance = ByocTrunkListInstance;
class ByocTrunkPage extends Page_1.default {
    /**
     * Initialize the ByocTrunkPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of ByocTrunkInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new ByocTrunkInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ByocTrunkPage = ByocTrunkPage;
