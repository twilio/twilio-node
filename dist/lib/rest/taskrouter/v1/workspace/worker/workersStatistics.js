"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkersStatisticsListInstance = exports.WorkersStatisticsInstance = exports.WorkersStatisticsContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class WorkersStatisticsContextImpl {
    constructor(_version, workspaceSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(workspaceSid)) {
            throw new Error("Parameter 'workspaceSid' is not valid.");
        }
        this._solution = { workspaceSid };
        this._uri = `/Workspaces/${workspaceSid}/Workers/Statistics`;
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
        if (params["minutes"] !== undefined)
            data["Minutes"] = params["minutes"];
        if (params["startDate"] !== undefined)
            data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
        if (params["endDate"] !== undefined)
            data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
        if (params["taskQueueSid"] !== undefined)
            data["TaskQueueSid"] = params["taskQueueSid"];
        if (params["taskQueueName"] !== undefined)
            data["TaskQueueName"] = params["taskQueueName"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["taskChannel"] !== undefined)
            data["TaskChannel"] = params["taskChannel"];
        const headers = {};
        let operationVersion = this._version, operationPromise = operationVersion.fetch({
            uri: this._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new WorkersStatisticsInstance(operationVersion, payload, this._solution.workspaceSid));
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
exports.WorkersStatisticsContextImpl = WorkersStatisticsContextImpl;
class WorkersStatisticsInstance {
    constructor(_version, payload, workspaceSid) {
        this._version = _version;
        this.realtime = payload.realtime;
        this.cumulative = payload.cumulative;
        this.accountSid = payload.account_sid;
        this.workspaceSid = payload.workspace_sid;
        this.url = payload.url;
        this._solution = { workspaceSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new WorkersStatisticsContextImpl(this._version, this._solution.workspaceSid);
        return this._context;
    }
    fetch(params, callback) {
        return this._proxy.fetch(params, callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            realtime: this.realtime,
            cumulative: this.cumulative,
            accountSid: this.accountSid,
            workspaceSid: this.workspaceSid,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.WorkersStatisticsInstance = WorkersStatisticsInstance;
class WorkersStatisticsListInstanceImpl {
}
function WorkersStatisticsListInstance(version, workspaceSid) {
    if (!(0, utility_1.isValidPathParam)(workspaceSid)) {
        throw new Error("Parameter 'workspaceSid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new WorkersStatisticsContextImpl(version, workspaceSid);
    };
    instance._version = version;
    instance._solution = { workspaceSid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return this._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    };
    return instance;
}
exports.WorkersStatisticsListInstance = WorkersStatisticsListInstance;
