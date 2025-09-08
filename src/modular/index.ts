/**
 * Modular Twilio client for minimal bundle size
 * This allows creating a client with only the services you need
 */

import { Client, ClientOpts } from "../base/BaseTwilio";

export interface ModularClientOptions extends ClientOpts {
  /** Array of service names to load. If not provided, services are loaded on-demand */
  services?: Array<keyof ModularTwilioClient>;
}

/**
 * A modular Twilio client that only loads the services you specify
 * This significantly reduces bundle size compared to the full Twilio client
 *
 * Example usage:
 * const client = new ModularTwilioClient(accountSid, authToken, {
 *   services: ['messaging', 'voice'] // Only load messaging and voice services
 * });
 */
export class ModularTwilioClient extends Client {
  private _loadedServices = new Set<string>();
  private _requestedServices?: Array<keyof ModularTwilioClient>;

  constructor(
    username?: string,
    password?: string,
    opts?: ModularClientOptions
  ) {
    super(username, password, opts);
    this._requestedServices = opts?.services;
  }

  // Core services (most commonly used)
  private _api?: import("../rest/Api");
  get api(): import("../rest/Api") {
    if (!this._api && this._shouldLoadService("api")) {
      this._api = new (require("../rest/Api"))(this);
      this._loadedServices.add("api");
    }
    if (!this._api) {
      throw new Error(
        'API service not enabled. Add "api" to services array in client options.'
      );
    }
    return this._api;
  }

  private _messaging?: import("../rest/Messaging");
  get messaging(): import("../rest/Messaging") {
    if (!this._messaging && this._shouldLoadService("messaging")) {
      this._messaging = new (require("../rest/Messaging"))(this);
      this._loadedServices.add("messaging");
    }
    if (!this._messaging) {
      throw new Error(
        'Messaging service not enabled. Add "messaging" to services array in client options.'
      );
    }
    return this._messaging;
  }

  private _voice?: import("../rest/Voice");
  get voice(): import("../rest/Voice") {
    if (!this._voice && this._shouldLoadService("voice")) {
      this._voice = new (require("../rest/Voice"))(this);
      this._loadedServices.add("voice");
    }
    if (!this._voice) {
      throw new Error(
        'Voice service not enabled. Add "voice" to services array in client options.'
      );
    }
    return this._voice;
  }

  private _verify?: import("../rest/Verify");
  get verify(): import("../rest/Verify") {
    if (!this._verify && this._shouldLoadService("verify")) {
      this._verify = new (require("../rest/Verify"))(this);
      this._loadedServices.add("verify");
    }
    if (!this._verify) {
      throw new Error(
        'Verify service not enabled. Add "verify" to services array in client options.'
      );
    }
    return this._verify;
  }

  private _lookups?: import("../rest/Lookups");
  get lookups(): import("../rest/Lookups") {
    if (!this._lookups && this._shouldLoadService("lookups")) {
      this._lookups = new (require("../rest/Lookups"))(this);
      this._loadedServices.add("lookups");
    }
    if (!this._lookups) {
      throw new Error(
        'Lookups service not enabled. Add "lookups" to services array in client options.'
      );
    }
    return this._lookups;
  }

  // Communication services
  private _conversations?: import("../rest/Conversations");
  get conversations(): import("../rest/Conversations") {
    if (!this._conversations && this._shouldLoadService("conversations")) {
      this._conversations = new (require("../rest/Conversations"))(this);
      this._loadedServices.add("conversations");
    }
    if (!this._conversations) {
      throw new Error(
        'Conversations service not enabled. Add "conversations" to services array in client options.'
      );
    }
    return this._conversations;
  }

  private _video?: import("../rest/Video");
  get video(): import("../rest/Video") {
    if (!this._video && this._shouldLoadService("video")) {
      this._video = new (require("../rest/Video"))(this);
      this._loadedServices.add("video");
    }
    if (!this._video) {
      throw new Error(
        'Video service not enabled. Add "video" to services array in client options.'
      );
    }
    return this._video;
  }

  private _sync?: import("../rest/Sync");
  get sync(): import("../rest/Sync") {
    if (!this._sync && this._shouldLoadService("sync")) {
      this._sync = new (require("../rest/Sync"))(this);
      this._loadedServices.add("sync");
    }
    if (!this._sync) {
      throw new Error(
        'Sync service not enabled. Add "sync" to services array in client options.'
      );
    }
    return this._sync;
  }

  /**
   * Check if a service should be loaded based on the requested services
   */
  private _shouldLoadService(serviceName: string): boolean {
    // If no specific services requested, allow all (backward compatibility)
    if (!this._requestedServices) {
      return true;
    }
    // If specific services requested, only load those
    return this._requestedServices.includes(
      serviceName as keyof ModularTwilioClient
    );
  }

  /**
   * Get list of currently loaded services
   */
  getLoadedServices(): string[] {
    return Array.from(this._loadedServices);
  }

  /**
   * Get list of requested services
   */
  getRequestedServices(): Array<keyof ModularTwilioClient> | undefined {
    return this._requestedServices;
  }
}
