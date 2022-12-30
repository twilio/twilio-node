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
exports.QueryPage = exports.QueryListInstance = exports.QueryInstance = exports.QueryContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class QueryContextImpl {
    constructor(_version, assistantSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(assistantSid)) {
            throw new Error("Parameter 'assistantSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { assistantSid, sid };
        this._uri = `/Assistants/${assistantSid}/Queries/${sid}`;
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
        operationPromise = operationPromise.then((payload) => new QueryInstance(operationVersion, payload, this._solution.assistantSid, this._solution.sid));
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
        if (params["sampleSid"] !== undefined)
            data["SampleSid"] = params["sampleSid"];
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new QueryInstance(operationVersion, payload, this._solution.assistantSid, this._solution.sid));
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
exports.QueryContextImpl = QueryContextImpl;
class QueryInstance {
    constructor(_version, payload, assistantSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.results = payload.results;
        this.language = payload.language;
        this.modelBuildSid = payload.model_build_sid;
        this.query = payload.query;
        this.sampleSid = payload.sample_sid;
        this.assistantSid = payload.assistant_sid;
        this.sid = payload.sid;
        this.status = payload.status;
        this.url = payload.url;
        this.sourceChannel = payload.source_channel;
        this.dialogueSid = payload.dialogue_sid;
        this._solution = { assistantSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new QueryContextImpl(this._version, this._solution.assistantSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a QueryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a QueryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed QueryInstance
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
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            results: this.results,
            language: this.language,
            modelBuildSid: this.modelBuildSid,
            query: this.query,
            sampleSid: this.sampleSid,
            assistantSid: this.assistantSid,
            sid: this.sid,
            status: this.status,
            url: this.url,
            sourceChannel: this.sourceChannel,
            dialogueSid: this.dialogueSid,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.QueryInstance = QueryInstance;
class QueryListInstanceImpl {
}
function QueryListInstance(version, assistantSid) {
    if (!(0, utility_1.isValidPathParam)(assistantSid)) {
        throw new Error("Parameter 'assistantSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new QueryContextImpl(version, assistantSid, sid);
    };
    instance._version = version;
    instance._solution = { assistantSid };
    instance._uri = `/Assistants/${assistantSid}/Queries`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["language"] === null || params["language"] === undefined) {
            throw new Error("Required parameter \"params['language']\" missing.");
        }
        if (params["query"] === null || params["query"] === undefined) {
            throw new Error("Required parameter \"params['query']\" missing.");
        }
        let data = {};
        data["Language"] = params["language"];
        data["Query"] = params["query"];
        if (params["tasks"] !== undefined)
            data["Tasks"] = params["tasks"];
        if (params["modelBuild"] !== undefined)
            data["ModelBuild"] = params["modelBuild"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new QueryInstance(operationVersion, payload, this._solution.assistantSid));
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
        if (params["language"] !== undefined)
            data["Language"] = params["language"];
        if (params["modelBuild"] !== undefined)
            data["ModelBuild"] = params["modelBuild"];
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
        if (params["dialogueSid"] !== undefined)
            data["DialogueSid"] = params["dialogueSid"];
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
        operationPromise = operationPromise.then((payload) => new QueryPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new QueryPage(this._version, payload, this._solution));
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
exports.QueryListInstance = QueryListInstance;
class QueryPage extends Page_1.default {
    /**
     * Initialize the QueryPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of QueryInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new QueryInstance(this._version, payload, this._solution.assistantSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.QueryPage = QueryPage;
