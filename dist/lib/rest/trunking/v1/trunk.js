"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trunking
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
exports.TrunkPage = exports.TrunkListInstance = exports.TrunkInstance = exports.TrunkContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const credentialList_1 = require("./trunk/credentialList");
const ipAccessControlList_1 = require("./trunk/ipAccessControlList");
const originationUrl_1 = require("./trunk/originationUrl");
const phoneNumber_1 = require("./trunk/phoneNumber");
const recording_1 = require("./trunk/recording");
class TrunkContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Trunks/${sid}`;
    }
    get credentialsLists() {
        this._credentialsLists =
            this._credentialsLists ||
                (0, credentialList_1.CredentialListListInstance)(this._version, this._solution.sid);
        return this._credentialsLists;
    }
    get ipAccessControlLists() {
        this._ipAccessControlLists =
            this._ipAccessControlLists ||
                (0, ipAccessControlList_1.IpAccessControlListListInstance)(this._version, this._solution.sid);
        return this._ipAccessControlLists;
    }
    get originationUrls() {
        this._originationUrls =
            this._originationUrls ||
                (0, originationUrl_1.OriginationUrlListInstance)(this._version, this._solution.sid);
        return this._originationUrls;
    }
    get phoneNumbers() {
        this._phoneNumbers =
            this._phoneNumbers ||
                (0, phoneNumber_1.PhoneNumberListInstance)(this._version, this._solution.sid);
        return this._phoneNumbers;
    }
    get recordings() {
        this._recordings =
            this._recordings ||
                (0, recording_1.RecordingListInstance)(this._version, this._solution.sid);
        return this._recordings;
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
        operationPromise = operationPromise.then((payload) => new TrunkInstance(operationVersion, payload, this._solution.sid));
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
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["domainName"] !== undefined)
            data["DomainName"] = params["domainName"];
        if (params["disasterRecoveryUrl"] !== undefined)
            data["DisasterRecoveryUrl"] = params["disasterRecoveryUrl"];
        if (params["disasterRecoveryMethod"] !== undefined)
            data["DisasterRecoveryMethod"] = params["disasterRecoveryMethod"];
        if (params["transferMode"] !== undefined)
            data["TransferMode"] = params["transferMode"];
        if (params["secure"] !== undefined)
            data["Secure"] = serialize.bool(params["secure"]);
        if (params["cnamLookupEnabled"] !== undefined)
            data["CnamLookupEnabled"] = serialize.bool(params["cnamLookupEnabled"]);
        if (params["transferCallerId"] !== undefined)
            data["TransferCallerId"] = params["transferCallerId"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new TrunkInstance(operationVersion, payload, this._solution.sid));
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
exports.TrunkContextImpl = TrunkContextImpl;
class TrunkInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.domainName = payload.domain_name;
        this.disasterRecoveryMethod = payload.disaster_recovery_method;
        this.disasterRecoveryUrl = payload.disaster_recovery_url;
        this.friendlyName = payload.friendly_name;
        this.secure = payload.secure;
        this.recording = payload.recording;
        this.transferMode = payload.transfer_mode;
        this.transferCallerId = payload.transfer_caller_id;
        this.cnamLookupEnabled = payload.cnam_lookup_enabled;
        this.authType = payload.auth_type;
        this.authTypeSet = payload.auth_type_set;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.sid = payload.sid;
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context || new TrunkContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the credentialsLists.
     */
    credentialsLists() {
        return this._proxy.credentialsLists;
    }
    /**
     * Access the ipAccessControlLists.
     */
    ipAccessControlLists() {
        return this._proxy.ipAccessControlLists;
    }
    /**
     * Access the originationUrls.
     */
    originationUrls() {
        return this._proxy.originationUrls;
    }
    /**
     * Access the phoneNumbers.
     */
    phoneNumbers() {
        return this._proxy.phoneNumbers;
    }
    /**
     * Access the recordings.
     */
    recordings() {
        return this._proxy.recordings;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            domainName: this.domainName,
            disasterRecoveryMethod: this.disasterRecoveryMethod,
            disasterRecoveryUrl: this.disasterRecoveryUrl,
            friendlyName: this.friendlyName,
            secure: this.secure,
            recording: this.recording,
            transferMode: this.transferMode,
            transferCallerId: this.transferCallerId,
            cnamLookupEnabled: this.cnamLookupEnabled,
            authType: this.authType,
            authTypeSet: this.authTypeSet,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            sid: this.sid,
            url: this.url,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.TrunkInstance = TrunkInstance;
class TrunkListInstanceImpl {
}
function TrunkListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new TrunkContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Trunks`;
    instance.create = function create(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["domainName"] !== undefined)
            data["DomainName"] = params["domainName"];
        if (params["disasterRecoveryUrl"] !== undefined)
            data["DisasterRecoveryUrl"] = params["disasterRecoveryUrl"];
        if (params["disasterRecoveryMethod"] !== undefined)
            data["DisasterRecoveryMethod"] = params["disasterRecoveryMethod"];
        if (params["transferMode"] !== undefined)
            data["TransferMode"] = params["transferMode"];
        if (params["secure"] !== undefined)
            data["Secure"] = serialize.bool(params["secure"]);
        if (params["cnamLookupEnabled"] !== undefined)
            data["CnamLookupEnabled"] = serialize.bool(params["cnamLookupEnabled"]);
        if (params["transferCallerId"] !== undefined)
            data["TransferCallerId"] = params["transferCallerId"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new TrunkInstance(operationVersion, payload));
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
        operationPromise = operationPromise.then((payload) => new TrunkPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new TrunkPage(this._version, payload, this._solution));
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
exports.TrunkListInstance = TrunkListInstance;
class TrunkPage extends Page_1.default {
    /**
     * Initialize the TrunkPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of TrunkInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new TrunkInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.TrunkPage = TrunkPage;
