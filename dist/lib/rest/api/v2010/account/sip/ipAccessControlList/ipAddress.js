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
exports.IpAddressPage = exports.IpAddressListInstance = exports.IpAddressInstance = exports.IpAddressContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../../base/Page"));
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
const utility_1 = require("../../../../../../base/utility");
class IpAddressContextImpl {
    constructor(_version, accountSid, ipAccessControlListSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(ipAccessControlListSid)) {
            throw new Error("Parameter 'ipAccessControlListSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, ipAccessControlListSid, sid };
        this._uri = `/Accounts/${accountSid}/SIP/IpAccessControlLists/${ipAccessControlListSid}/IpAddresses/${sid}.json`;
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
        operationPromise = operationPromise.then((payload) => new IpAddressInstance(operationVersion, payload, this._solution.accountSid, this._solution.ipAccessControlListSid, this._solution.sid));
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
        if (params["ipAddress"] !== undefined)
            data["IpAddress"] = params["ipAddress"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["cidrPrefixLength"] !== undefined)
            data["CidrPrefixLength"] = params["cidrPrefixLength"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new IpAddressInstance(operationVersion, payload, this._solution.accountSid, this._solution.ipAccessControlListSid, this._solution.sid));
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
exports.IpAddressContextImpl = IpAddressContextImpl;
class IpAddressInstance {
    constructor(_version, payload, accountSid, ipAccessControlListSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.friendlyName = payload.friendly_name;
        this.ipAddress = payload.ip_address;
        this.cidrPrefixLength = deserialize.integer(payload.cidr_prefix_length);
        this.ipAccessControlListSid = payload.ip_access_control_list_sid;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.uri = payload.uri;
        this._solution = {
            accountSid,
            ipAccessControlListSid,
            sid: sid || this.sid,
        };
    }
    get _proxy() {
        this._context =
            this._context ||
                new IpAddressContextImpl(this._version, this._solution.accountSid, this._solution.ipAccessControlListSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a IpAddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a IpAddressInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed IpAddressInstance
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
            sid: this.sid,
            accountSid: this.accountSid,
            friendlyName: this.friendlyName,
            ipAddress: this.ipAddress,
            cidrPrefixLength: this.cidrPrefixLength,
            ipAccessControlListSid: this.ipAccessControlListSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            uri: this.uri,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.IpAddressInstance = IpAddressInstance;
class IpAddressListInstanceImpl {
}
function IpAddressListInstance(version, accountSid, ipAccessControlListSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(ipAccessControlListSid)) {
        throw new Error("Parameter 'ipAccessControlListSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new IpAddressContextImpl(version, accountSid, ipAccessControlListSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid, ipAccessControlListSid };
    instance._uri = `/Accounts/${accountSid}/SIP/IpAccessControlLists/${ipAccessControlListSid}/IpAddresses.json`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        if (params["ipAddress"] === null || params["ipAddress"] === undefined) {
            throw new Error("Required parameter \"params['ipAddress']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        data["IpAddress"] = params["ipAddress"];
        if (params["cidrPrefixLength"] !== undefined)
            data["CidrPrefixLength"] = params["cidrPrefixLength"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new IpAddressInstance(operationVersion, payload, this._solution.accountSid, this._solution.ipAccessControlListSid));
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
        operationPromise = operationPromise.then((payload) => new IpAddressPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new IpAddressPage(this._version, payload, this._solution));
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
exports.IpAddressListInstance = IpAddressListInstance;
class IpAddressPage extends Page_1.default {
    /**
     * Initialize the IpAddressPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of IpAddressInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new IpAddressInstance(this._version, payload, this._solution.accountSid, this._solution.ipAccessControlListSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.IpAddressPage = IpAddressPage;
