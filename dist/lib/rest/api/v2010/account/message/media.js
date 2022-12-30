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
exports.MediaPage = exports.MediaListInstance = exports.MediaInstance = exports.MediaContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class MediaContextImpl {
    constructor(_version, accountSid, messageSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(messageSid)) {
            throw new Error("Parameter 'messageSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, messageSid, sid };
        this._uri = `/Accounts/${accountSid}/Messages/${messageSid}/Media/${sid}.json`;
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
        operationPromise = operationPromise.then((payload) => new MediaInstance(operationVersion, payload, this._solution.accountSid, this._solution.messageSid, this._solution.sid));
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
exports.MediaContextImpl = MediaContextImpl;
class MediaInstance {
    constructor(_version, payload, accountSid, messageSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.contentType = payload.content_type;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.parentSid = payload.parent_sid;
        this.sid = payload.sid;
        this.uri = payload.uri;
        this._solution = { accountSid, messageSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new MediaContextImpl(this._version, this._solution.accountSid, this._solution.messageSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a MediaInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a MediaInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MediaInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            contentType: this.contentType,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            parentSid: this.parentSid,
            sid: this.sid,
            uri: this.uri,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.MediaInstance = MediaInstance;
class MediaListInstanceImpl {
}
function MediaListInstance(version, accountSid, messageSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(messageSid)) {
        throw new Error("Parameter 'messageSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new MediaContextImpl(version, accountSid, messageSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid, messageSid };
    instance._uri = `/Accounts/${accountSid}/Messages/${messageSid}/Media.json`;
    instance.page = function page(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["dateCreated"] !== undefined)
            data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
        if (params["dateCreatedBefore"] !== undefined)
            data["DateCreated<"] = serialize.iso8601DateTime(params["dateCreatedBefore"]);
        if (params["dateCreatedAfter"] !== undefined)
            data["DateCreated>"] = serialize.iso8601DateTime(params["dateCreatedAfter"]);
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
        operationPromise = operationPromise.then((payload) => new MediaPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new MediaPage(this._version, payload, this._solution));
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
exports.MediaListInstance = MediaListInstance;
class MediaPage extends Page_1.default {
    /**
     * Initialize the MediaPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of MediaInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new MediaInstance(this._version, payload, this._solution.accountSid, this._solution.messageSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.MediaPage = MediaPage;
