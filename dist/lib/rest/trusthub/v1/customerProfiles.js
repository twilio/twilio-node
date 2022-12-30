"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
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
exports.CustomerProfilesPage = exports.CustomerProfilesListInstance = exports.CustomerProfilesInstance = exports.CustomerProfilesContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const customerProfilesChannelEndpointAssignment_1 = require("./customerProfiles/customerProfilesChannelEndpointAssignment");
const customerProfilesEntityAssignments_1 = require("./customerProfiles/customerProfilesEntityAssignments");
const customerProfilesEvaluations_1 = require("./customerProfiles/customerProfilesEvaluations");
class CustomerProfilesContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/CustomerProfiles/${sid}`;
    }
    get customerProfilesChannelEndpointAssignment() {
        this._customerProfilesChannelEndpointAssignment =
            this._customerProfilesChannelEndpointAssignment ||
                (0, customerProfilesChannelEndpointAssignment_1.CustomerProfilesChannelEndpointAssignmentListInstance)(this._version, this._solution.sid);
        return this._customerProfilesChannelEndpointAssignment;
    }
    get customerProfilesEntityAssignments() {
        this._customerProfilesEntityAssignments =
            this._customerProfilesEntityAssignments ||
                (0, customerProfilesEntityAssignments_1.CustomerProfilesEntityAssignmentsListInstance)(this._version, this._solution.sid);
        return this._customerProfilesEntityAssignments;
    }
    get customerProfilesEvaluations() {
        this._customerProfilesEvaluations =
            this._customerProfilesEvaluations ||
                (0, customerProfilesEvaluations_1.CustomerProfilesEvaluationsListInstance)(this._version, this._solution.sid);
        return this._customerProfilesEvaluations;
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
        operationPromise = operationPromise.then((payload) => new CustomerProfilesInstance(operationVersion, payload, this._solution.sid));
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
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["email"] !== undefined)
            data["Email"] = params["email"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new CustomerProfilesInstance(operationVersion, payload, this._solution.sid));
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
exports.CustomerProfilesContextImpl = CustomerProfilesContextImpl;
class CustomerProfilesInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.policySid = payload.policy_sid;
        this.friendlyName = payload.friendly_name;
        this.status = payload.status;
        this.validUntil = deserialize.iso8601DateTime(payload.valid_until);
        this.email = payload.email;
        this.statusCallback = payload.status_callback;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new CustomerProfilesContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a CustomerProfilesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a CustomerProfilesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CustomerProfilesInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the customerProfilesChannelEndpointAssignment.
     */
    customerProfilesChannelEndpointAssignment() {
        return this._proxy.customerProfilesChannelEndpointAssignment;
    }
    /**
     * Access the customerProfilesEntityAssignments.
     */
    customerProfilesEntityAssignments() {
        return this._proxy.customerProfilesEntityAssignments;
    }
    /**
     * Access the customerProfilesEvaluations.
     */
    customerProfilesEvaluations() {
        return this._proxy.customerProfilesEvaluations;
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
            policySid: this.policySid,
            friendlyName: this.friendlyName,
            status: this.status,
            validUntil: this.validUntil,
            email: this.email,
            statusCallback: this.statusCallback,
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
exports.CustomerProfilesInstance = CustomerProfilesInstance;
class CustomerProfilesListInstanceImpl {
}
function CustomerProfilesListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new CustomerProfilesContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/CustomerProfiles`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        if (params["email"] === null || params["email"] === undefined) {
            throw new Error("Required parameter \"params['email']\" missing.");
        }
        if (params["policySid"] === null || params["policySid"] === undefined) {
            throw new Error("Required parameter \"params['policySid']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        data["Email"] = params["email"];
        data["PolicySid"] = params["policySid"];
        if (params["statusCallback"] !== undefined)
            data["StatusCallback"] = params["statusCallback"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new CustomerProfilesInstance(operationVersion, payload));
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
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["policySid"] !== undefined)
            data["PolicySid"] = params["policySid"];
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
        operationPromise = operationPromise.then((payload) => new CustomerProfilesPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new CustomerProfilesPage(this._version, payload, this._solution));
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
exports.CustomerProfilesListInstance = CustomerProfilesListInstance;
class CustomerProfilesPage extends Page_1.default {
    /**
     * Initialize the CustomerProfilesPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of CustomerProfilesInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new CustomerProfilesInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.CustomerProfilesPage = CustomerProfilesPage;
