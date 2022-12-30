"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Events
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
exports.SubscribedEventPage = exports.SubscribedEventListInstance = exports.SubscribedEventInstance = exports.SubscribedEventContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class SubscribedEventContextImpl {
    constructor(_version, subscriptionSid, type) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(subscriptionSid)) {
            throw new Error("Parameter 'subscriptionSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(type)) {
            throw new Error("Parameter 'type' is not valid.");
        }
        this._solution = { subscriptionSid, type };
        this._uri = `/Subscriptions/${subscriptionSid}/SubscribedEvents/${type}`;
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
        operationPromise = operationPromise.then((payload) => new SubscribedEventInstance(operationVersion, payload, this._solution.subscriptionSid, this._solution.type));
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
        if (params["schemaVersion"] !== undefined)
            data["SchemaVersion"] = params["schemaVersion"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SubscribedEventInstance(operationVersion, payload, this._solution.subscriptionSid, this._solution.type));
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
exports.SubscribedEventContextImpl = SubscribedEventContextImpl;
class SubscribedEventInstance {
    constructor(_version, payload, subscriptionSid, type) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.type = payload.type;
        this.schemaVersion = deserialize.integer(payload.schema_version);
        this.subscriptionSid = payload.subscription_sid;
        this.url = payload.url;
        this._solution = { subscriptionSid, type: type || this.type };
    }
    get _proxy() {
        this._context =
            this._context ||
                new SubscribedEventContextImpl(this._version, this._solution.subscriptionSid, this._solution.type);
        return this._context;
    }
    /**
     * Remove a SubscribedEventInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a SubscribedEventInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SubscribedEventInstance
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
            type: this.type,
            schemaVersion: this.schemaVersion,
            subscriptionSid: this.subscriptionSid,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SubscribedEventInstance = SubscribedEventInstance;
class SubscribedEventListInstanceImpl {
}
function SubscribedEventListInstance(version, subscriptionSid) {
    if (!(0, utility_1.isValidPathParam)(subscriptionSid)) {
        throw new Error("Parameter 'subscriptionSid' is not valid.");
    }
    const instance = ((type) => instance.get(type));
    instance.get = function get(type) {
        return new SubscribedEventContextImpl(version, subscriptionSid, type);
    };
    instance._version = version;
    instance._solution = { subscriptionSid };
    instance._uri = `/Subscriptions/${subscriptionSid}/SubscribedEvents`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["type"] === null || params["type"] === undefined) {
            throw new Error("Required parameter \"params['type']\" missing.");
        }
        let data = {};
        data["Type"] = params["type"];
        if (params["schemaVersion"] !== undefined)
            data["SchemaVersion"] = params["schemaVersion"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SubscribedEventInstance(operationVersion, payload, this._solution.subscriptionSid));
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
        operationPromise = operationPromise.then((payload) => new SubscribedEventPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new SubscribedEventPage(this._version, payload, this._solution));
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
exports.SubscribedEventListInstance = SubscribedEventListInstance;
class SubscribedEventPage extends Page_1.default {
    /**
     * Initialize the SubscribedEventPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of SubscribedEventInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new SubscribedEventInstance(this._version, payload, this._solution.subscriptionSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SubscribedEventPage = SubscribedEventPage;
