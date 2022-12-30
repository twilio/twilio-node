"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
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
exports.ExecutionPage = exports.ExecutionListInstance = exports.ExecutionInstance = exports.ExecutionContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const executionContext_1 = require("./execution/executionContext");
const executionStep_1 = require("./execution/executionStep");
class ExecutionContextImpl {
    constructor(_version, flowSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(flowSid)) {
            throw new Error("Parameter 'flowSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { flowSid, sid };
        this._uri = `/Flows/${flowSid}/Executions/${sid}`;
    }
    get executionContext() {
        this._executionContext =
            this._executionContext ||
                (0, executionContext_1.ExecutionContextListInstance)(this._version, this._solution.flowSid, this._solution.sid);
        return this._executionContext;
    }
    get steps() {
        this._steps =
            this._steps ||
                (0, executionStep_1.ExecutionStepListInstance)(this._version, this._solution.flowSid, this._solution.sid);
        return this._steps;
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
        operationPromise = operationPromise.then((payload) => new ExecutionInstance(operationVersion, payload, this._solution.flowSid, this._solution.sid));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["status"] === null || params["status"] === undefined) {
            throw new Error("Required parameter \"params['status']\" missing.");
        }
        let data = {};
        data["Status"] = params["status"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ExecutionInstance(operationVersion, payload, this._solution.flowSid, this._solution.sid));
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
exports.ExecutionContextImpl = ExecutionContextImpl;
class ExecutionInstance {
    constructor(_version, payload, flowSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.flowSid = payload.flow_sid;
        this.contactChannelAddress = payload.contact_channel_address;
        this.context = payload.context;
        this.status = payload.status;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { flowSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ExecutionContextImpl(this._version, this._solution.flowSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a ExecutionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a ExecutionInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the executionContext.
     */
    executionContext() {
        return this._proxy.executionContext;
    }
    /**
     * Access the steps.
     */
    steps() {
        return this._proxy.steps;
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
            flowSid: this.flowSid,
            contactChannelAddress: this.contactChannelAddress,
            context: this.context,
            status: this.status,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ExecutionInstance = ExecutionInstance;
class ExecutionListInstanceImpl {
}
function ExecutionListInstance(version, flowSid) {
    if (!(0, utility_1.isValidPathParam)(flowSid)) {
        throw new Error("Parameter 'flowSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new ExecutionContextImpl(version, flowSid, sid);
    };
    instance._version = version;
    instance._solution = { flowSid };
    instance._uri = `/Flows/${flowSid}/Executions`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["to"] === null || params["to"] === undefined) {
            throw new Error("Required parameter \"params['to']\" missing.");
        }
        if (params["from"] === null || params["from"] === undefined) {
            throw new Error("Required parameter \"params['from']\" missing.");
        }
        let data = {};
        data["To"] = params["to"];
        data["From"] = params["from"];
        if (params["parameters"] !== undefined)
            data["Parameters"] = serialize.object(params["parameters"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ExecutionInstance(operationVersion, payload, this._solution.flowSid));
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
        if (params["dateCreatedFrom"] !== undefined)
            data["DateCreatedFrom"] = serialize.iso8601DateTime(params["dateCreatedFrom"]);
        if (params["dateCreatedTo"] !== undefined)
            data["DateCreatedTo"] = serialize.iso8601DateTime(params["dateCreatedTo"]);
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
        operationPromise = operationPromise.then((payload) => new ExecutionPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new ExecutionPage(this._version, payload, this._solution));
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
exports.ExecutionListInstance = ExecutionListInstance;
class ExecutionPage extends Page_1.default {
    /**
     * Initialize the ExecutionPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of ExecutionInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new ExecutionInstance(this._version, payload, this._solution.flowSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ExecutionPage = ExecutionPage;
