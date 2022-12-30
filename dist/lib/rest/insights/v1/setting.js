"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingListInstance = exports.SettingInstance = exports.SettingContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
class SettingContextImpl {
    constructor(_version) {
        this._version = _version;
        this._solution = {};
        this._uri = `/Voice/Settings`;
    }
    fetch(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["subaccountSid"] !== undefined)
            data["SubaccountSid"] = params["subaccountSid"];
        const headers = {};
        let operationVersion = this._version, operationPromise = operationVersion.fetch({
            uri: this._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SettingInstance(operationVersion, payload));
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
        if (params["advancedFeatures"] !== undefined)
            data["AdvancedFeatures"] = serialize.bool(params["advancedFeatures"]);
        if (params["voiceTrace"] !== undefined)
            data["VoiceTrace"] = serialize.bool(params["voiceTrace"]);
        if (params["subaccountSid"] !== undefined)
            data["SubaccountSid"] = params["subaccountSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SettingInstance(operationVersion, payload));
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
exports.SettingContextImpl = SettingContextImpl;
class SettingInstance {
    constructor(_version, payload) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.advancedFeatures = payload.advanced_features;
        this.voiceTrace = payload.voice_trace;
        this.url = payload.url;
        this._solution = {};
    }
    get _proxy() {
        this._context = this._context || new SettingContextImpl(this._version);
        return this._context;
    }
    fetch(params, callback) {
        return this._proxy.fetch(params, callback);
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
            advancedFeatures: this.advancedFeatures,
            voiceTrace: this.voiceTrace,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SettingInstance = SettingInstance;
class SettingListInstanceImpl {
}
function SettingListInstance(version) {
    const instance = (() => instance.get());
    instance.get = function get() {
        return new SettingContextImpl(version);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return this._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    };
    return instance;
}
exports.SettingListInstance = SettingListInstance;
