"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Autopilot
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
exports.FieldPage = exports.FieldListInstance = exports.FieldInstance = exports.FieldContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class FieldContextImpl {
    constructor(_version, assistantSid, taskSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(assistantSid)) {
            throw new Error("Parameter 'assistantSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(taskSid)) {
            throw new Error("Parameter 'taskSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { assistantSid, taskSid, sid };
        this._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Fields/${sid}`;
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
        operationPromise = operationPromise.then((payload) => new FieldInstance(operationVersion, payload, this._solution.assistantSid, this._solution.taskSid, this._solution.sid));
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
exports.FieldContextImpl = FieldContextImpl;
class FieldInstance {
    constructor(_version, payload, assistantSid, taskSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.fieldType = payload.field_type;
        this.taskSid = payload.task_sid;
        this.assistantSid = payload.assistant_sid;
        this.sid = payload.sid;
        this.uniqueName = payload.unique_name;
        this.url = payload.url;
        this._solution = { assistantSid, taskSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new FieldContextImpl(this._version, this._solution.assistantSid, this._solution.taskSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a FieldInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a FieldInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FieldInstance
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
            fieldType: this.fieldType,
            taskSid: this.taskSid,
            assistantSid: this.assistantSid,
            sid: this.sid,
            uniqueName: this.uniqueName,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.FieldInstance = FieldInstance;
class FieldListInstanceImpl {
}
function FieldListInstance(version, assistantSid, taskSid) {
    if (!(0, utility_1.isValidPathParam)(assistantSid)) {
        throw new Error("Parameter 'assistantSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(taskSid)) {
        throw new Error("Parameter 'taskSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new FieldContextImpl(version, assistantSid, taskSid, sid);
    };
    instance._version = version;
    instance._solution = { assistantSid, taskSid };
    instance._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Fields`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["fieldType"] === null || params["fieldType"] === undefined) {
            throw new Error("Required parameter \"params['fieldType']\" missing.");
        }
        if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
            throw new Error("Required parameter \"params['uniqueName']\" missing.");
        }
        let data = {};
        data["FieldType"] = params["fieldType"];
        data["UniqueName"] = params["uniqueName"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new FieldInstance(operationVersion, payload, this._solution.assistantSid, this._solution.taskSid));
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
        operationPromise = operationPromise.then((payload) => new FieldPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new FieldPage(this._version, payload, this._solution));
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
exports.FieldListInstance = FieldListInstance;
class FieldPage extends Page_1.default {
    /**
     * Initialize the FieldPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of FieldInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new FieldInstance(this._version, payload, this._solution.assistantSid, this._solution.taskSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.FieldPage = FieldPage;
