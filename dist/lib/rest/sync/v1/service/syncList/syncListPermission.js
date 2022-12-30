"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Sync
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
exports.SyncListPermissionPage = exports.SyncListPermissionListInstance = exports.SyncListPermissionInstance = exports.SyncListPermissionContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class SyncListPermissionContextImpl {
    constructor(_version, serviceSid, listSid, identity) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(listSid)) {
            throw new Error("Parameter 'listSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(identity)) {
            throw new Error("Parameter 'identity' is not valid.");
        }
        this._solution = { serviceSid, listSid, identity };
        this._uri = `/Services/${serviceSid}/Lists/${listSid}/Permissions/${identity}`;
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
        operationPromise = operationPromise.then((payload) => new SyncListPermissionInstance(operationVersion, payload, this._solution.serviceSid, this._solution.listSid, this._solution.identity));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["read"] === null || params["read"] === undefined) {
            throw new Error("Required parameter \"params['read']\" missing.");
        }
        if (params["write"] === null || params["write"] === undefined) {
            throw new Error("Required parameter \"params['write']\" missing.");
        }
        if (params["manage"] === null || params["manage"] === undefined) {
            throw new Error("Required parameter \"params['manage']\" missing.");
        }
        let data = {};
        data["Read"] = serialize.bool(params["read"]);
        data["Write"] = serialize.bool(params["write"]);
        data["Manage"] = serialize.bool(params["manage"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SyncListPermissionInstance(operationVersion, payload, this._solution.serviceSid, this._solution.listSid, this._solution.identity));
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
exports.SyncListPermissionContextImpl = SyncListPermissionContextImpl;
class SyncListPermissionInstance {
    constructor(_version, payload, serviceSid, listSid, identity) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.listSid = payload.list_sid;
        this.identity = payload.identity;
        this.read = payload.read;
        this.write = payload.write;
        this.manage = payload.manage;
        this.url = payload.url;
        this._solution = {
            serviceSid,
            listSid,
            identity: identity || this.identity,
        };
    }
    get _proxy() {
        this._context =
            this._context ||
                new SyncListPermissionContextImpl(this._version, this._solution.serviceSid, this._solution.listSid, this._solution.identity);
        return this._context;
    }
    /**
     * Remove a SyncListPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a SyncListPermissionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SyncListPermissionInstance
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
            serviceSid: this.serviceSid,
            listSid: this.listSid,
            identity: this.identity,
            read: this.read,
            write: this.write,
            manage: this.manage,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SyncListPermissionInstance = SyncListPermissionInstance;
class SyncListPermissionListInstanceImpl {
}
function SyncListPermissionListInstance(version, serviceSid, listSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(listSid)) {
        throw new Error("Parameter 'listSid' is not valid.");
    }
    const instance = ((identity) => instance.get(identity));
    instance.get = function get(identity) {
        return new SyncListPermissionContextImpl(version, serviceSid, listSid, identity);
    };
    instance._version = version;
    instance._solution = { serviceSid, listSid };
    instance._uri = `/Services/${serviceSid}/Lists/${listSid}/Permissions`;
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
        operationPromise = operationPromise.then((payload) => new SyncListPermissionPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new SyncListPermissionPage(this._version, payload, this._solution));
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
exports.SyncListPermissionListInstance = SyncListPermissionListInstance;
class SyncListPermissionPage extends Page_1.default {
    /**
     * Initialize the SyncListPermissionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of SyncListPermissionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new SyncListPermissionInstance(this._version, payload, this._solution.serviceSid, this._solution.listSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SyncListPermissionPage = SyncListPermissionPage;
