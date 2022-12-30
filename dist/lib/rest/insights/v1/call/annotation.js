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
exports.AnnotationListInstance = exports.AnnotationInstance = exports.AnnotationContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class AnnotationContextImpl {
    constructor(_version, callSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(callSid)) {
            throw new Error("Parameter 'callSid' is not valid.");
        }
        this._solution = { callSid };
        this._uri = `/Voice/${callSid}/Annotation`;
    }
    fetch(callback) {
        let operationVersion = this._version, operationPromise = operationVersion.fetch({
            uri: this._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new AnnotationInstance(operationVersion, payload, this._solution.callSid));
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
        if (params["answeredBy"] !== undefined)
            data["AnsweredBy"] = params["answeredBy"];
        if (params["connectivityIssue"] !== undefined)
            data["ConnectivityIssue"] = params["connectivityIssue"];
        if (params["qualityIssues"] !== undefined)
            data["QualityIssues"] = params["qualityIssues"];
        if (params["spam"] !== undefined)
            data["Spam"] = serialize.bool(params["spam"]);
        if (params["callScore"] !== undefined)
            data["CallScore"] = params["callScore"];
        if (params["comment"] !== undefined)
            data["Comment"] = params["comment"];
        if (params["incident"] !== undefined)
            data["Incident"] = params["incident"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new AnnotationInstance(operationVersion, payload, this._solution.callSid));
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
exports.AnnotationContextImpl = AnnotationContextImpl;
class AnnotationInstance {
    constructor(_version, payload, callSid) {
        this._version = _version;
        this.callSid = payload.call_sid;
        this.accountSid = payload.account_sid;
        this.answeredBy = payload.answered_by;
        this.connectivityIssue = payload.connectivity_issue;
        this.qualityIssues = payload.quality_issues;
        this.spam = payload.spam;
        this.callScore = deserialize.integer(payload.call_score);
        this.comment = payload.comment;
        this.incident = payload.incident;
        this.url = payload.url;
        this._solution = { callSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new AnnotationContextImpl(this._version, this._solution.callSid);
        return this._context;
    }
    /**
     * Fetch a AnnotationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AnnotationInstance
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
            callSid: this.callSid,
            accountSid: this.accountSid,
            answeredBy: this.answeredBy,
            connectivityIssue: this.connectivityIssue,
            qualityIssues: this.qualityIssues,
            spam: this.spam,
            callScore: this.callScore,
            comment: this.comment,
            incident: this.incident,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AnnotationInstance = AnnotationInstance;
class AnnotationListInstanceImpl {
}
function AnnotationListInstance(version, callSid) {
    if (!(0, utility_1.isValidPathParam)(callSid)) {
        throw new Error("Parameter 'callSid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new AnnotationContextImpl(version, callSid);
    };
    instance._version = version;
    instance._solution = { callSid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return this._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    };
    return instance;
}
exports.AnnotationListInstance = AnnotationListInstance;
