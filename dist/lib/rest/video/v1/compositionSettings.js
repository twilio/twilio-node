"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionSettingsListInstance = exports.CompositionSettingsInstance = exports.CompositionSettingsContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
class CompositionSettingsContextImpl {
    constructor(_version) {
        this._version = _version;
        this._solution = {};
        this._uri = `/CompositionSettings/Default`;
    }
    create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        if (params["awsCredentialsSid"] !== undefined)
            data["AwsCredentialsSid"] = params["awsCredentialsSid"];
        if (params["encryptionKeySid"] !== undefined)
            data["EncryptionKeySid"] = params["encryptionKeySid"];
        if (params["awsS3Url"] !== undefined)
            data["AwsS3Url"] = params["awsS3Url"];
        if (params["awsStorageEnabled"] !== undefined)
            data["AwsStorageEnabled"] = serialize.bool(params["awsStorageEnabled"]);
        if (params["encryptionEnabled"] !== undefined)
            data["EncryptionEnabled"] = serialize.bool(params["encryptionEnabled"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new CompositionSettingsInstance(operationVersion, payload));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    fetch(callback) {
        let operationVersion = this._version, operationPromise = operationVersion.fetch({
            uri: this._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new CompositionSettingsInstance(operationVersion, payload));
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
exports.CompositionSettingsContextImpl = CompositionSettingsContextImpl;
class CompositionSettingsInstance {
    constructor(_version, payload) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.friendlyName = payload.friendly_name;
        this.awsCredentialsSid = payload.aws_credentials_sid;
        this.awsS3Url = payload.aws_s3_url;
        this.awsStorageEnabled = payload.aws_storage_enabled;
        this.encryptionKeySid = payload.encryption_key_sid;
        this.encryptionEnabled = payload.encryption_enabled;
        this.url = payload.url;
        this._solution = {};
    }
    get _proxy() {
        this._context =
            this._context || new CompositionSettingsContextImpl(this._version);
        return this._context;
    }
    create(params, callback) {
        return this._proxy.create(params, callback);
    }
    /**
     * Fetch a CompositionSettingsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CompositionSettingsInstance
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
            friendlyName: this.friendlyName,
            awsCredentialsSid: this.awsCredentialsSid,
            awsS3Url: this.awsS3Url,
            awsStorageEnabled: this.awsStorageEnabled,
            encryptionKeySid: this.encryptionKeySid,
            encryptionEnabled: this.encryptionEnabled,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.CompositionSettingsInstance = CompositionSettingsInstance;
class CompositionSettingsListInstanceImpl {
}
function CompositionSettingsListInstance(version) {
    const instance = (() => instance.get());
    instance.get = function get() {
        return new CompositionSettingsContextImpl(version);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return this._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    };
    return instance;
}
exports.CompositionSettingsListInstance = CompositionSettingsListInstance;
