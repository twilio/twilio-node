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
exports.AuthCallsIpAccessControlListMappingPage = exports.AuthCallsIpAccessControlListMappingListInstance = exports.AuthCallsIpAccessControlListMappingInstance = exports.AuthCallsIpAccessControlListMappingContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../../../../base/Page"));
const deserialize = require("../../../../../../../../base/deserialize");
const serialize = require("../../../../../../../../base/serialize");
const utility_1 = require("../../../../../../../../base/utility");
class AuthCallsIpAccessControlListMappingContextImpl {
    constructor(_version, accountSid, domainSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(domainSid)) {
            throw new Error("Parameter 'domainSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, domainSid, sid };
        this._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings/${sid}.json`;
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
        operationPromise = operationPromise.then((payload) => new AuthCallsIpAccessControlListMappingInstance(operationVersion, payload, this._solution.accountSid, this._solution.domainSid, this._solution.sid));
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
exports.AuthCallsIpAccessControlListMappingContextImpl = AuthCallsIpAccessControlListMappingContextImpl;
class AuthCallsIpAccessControlListMappingInstance {
    constructor(_version, payload, accountSid, domainSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.friendlyName = payload.friendly_name;
        this.sid = payload.sid;
        this._solution = { accountSid, domainSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new AuthCallsIpAccessControlListMappingContextImpl(this._version, this._solution.accountSid, this._solution.domainSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a AuthCallsIpAccessControlListMappingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a AuthCallsIpAccessControlListMappingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AuthCallsIpAccessControlListMappingInstance
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
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            friendlyName: this.friendlyName,
            sid: this.sid,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AuthCallsIpAccessControlListMappingInstance = AuthCallsIpAccessControlListMappingInstance;
class AuthCallsIpAccessControlListMappingListInstanceImpl {
}
function AuthCallsIpAccessControlListMappingListInstance(version, accountSid, domainSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(domainSid)) {
        throw new Error("Parameter 'domainSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new AuthCallsIpAccessControlListMappingContextImpl(version, accountSid, domainSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid, domainSid };
    instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings.json`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["ipAccessControlListSid"] === null ||
            params["ipAccessControlListSid"] === undefined) {
            throw new Error("Required parameter \"params['ipAccessControlListSid']\" missing.");
        }
        let data = {};
        data["IpAccessControlListSid"] = params["ipAccessControlListSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new AuthCallsIpAccessControlListMappingInstance(operationVersion, payload, this._solution.accountSid, this._solution.domainSid));
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
        operationPromise = operationPromise.then((payload) => new AuthCallsIpAccessControlListMappingPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new AuthCallsIpAccessControlListMappingPage(this._version, payload, this._solution));
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
exports.AuthCallsIpAccessControlListMappingListInstance = AuthCallsIpAccessControlListMappingListInstance;
class AuthCallsIpAccessControlListMappingPage extends Page_1.default {
    /**
     * Initialize the AuthCallsIpAccessControlListMappingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of AuthCallsIpAccessControlListMappingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new AuthCallsIpAccessControlListMappingInstance(this._version, payload, this._solution.accountSid, this._solution.domainSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AuthCallsIpAccessControlListMappingPage = AuthCallsIpAccessControlListMappingPage;
