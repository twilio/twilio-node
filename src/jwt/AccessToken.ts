import jwt from "jsonwebtoken";

class AccessToken implements AccessToken.AccessTokenOptions {
  static DEFAULT_ALGORITHM: "HS256" = "HS256";
  static ALGORITHMS = ["HS256", "HS384", "HS512"];
  accountSid: string;
  keySid: string;
  secret: string;
  ttl: number;
  identity: string;
  nbf?: number;
  region?: string;
  grants: AccessToken.Grant<any, any, any>[];

  /**
   * @param accountSid - The account's unique ID to which access is scoped
   * @param keySid - The signing key's unique ID
   * @param secret - The secret to sign the token with
   * @param options - ...
   * @param options.ttl - Time to live in seconds (default 3600)
   * @param options.identity - The identity of the first person. Required.
   * @param options.nbf - Time from epoch in seconds for not before value
   * @param options.region - The region value associated with this account
   */
  constructor(
    accountSid: string,
    keySid: string,
    secret: string,
    options: AccessToken.AccessTokenOptions
  ) {
    if (!accountSid) {
      throw new Error("accountSid is required");
    }
    if (!keySid) {
      throw new Error("keySid is required");
    }
    if (!secret) {
      throw new Error("secret is required");
    }
    if (!options || !options.identity) {
      throw new Error("identity is required to be specified in options");
    }

    this.accountSid = accountSid;
    this.keySid = keySid;
    this.secret = secret;
    this.ttl = options.ttl || 3600;
    this.identity = options.identity;
    this.nbf = options.nbf;
    this.region = options.region;
    this.grants = [];
  }

  addGrant<T extends AccessToken.Grant<any, any, any>>(grant: T) {
    this.grants.push(grant);
  }

  toJwt(algorithm?: "HS256" | "HS384" | "HS512"): string {
    algorithm = algorithm || AccessToken.DEFAULT_ALGORITHM;
    if (!AccessToken.ALGORITHMS.includes(algorithm)) {
      throw new Error(
        "Algorithm not supported. Allowed values are " +
          AccessToken.ALGORITHMS.join(", ")
      );
    }

    let grants: any = {};
    if (Number.isInteger(this.identity) || typeof this.identity === "string") {
      grants.identity = String(this.identity);
    }

    for (const grant of this.grants) {
      grants[grant.key] = grant.toPayload();
    }

    const now = Math.floor(Date.now() / 1000);
    let payload: any = {
      jti: this.keySid + "-" + now,
      grants: grants,
    };
    if (typeof this.nbf === "number") {
      payload.nbf = this.nbf;
    }

    let header: any = {
      cty: "twilio-fpa;v=1",
      typ: "JWT",
    };

    if (this.region && typeof this.region === "string") {
      header.twr = this.region;
    }

    return jwt.sign(payload, this.secret, {
      header: header,
      algorithm: algorithm,
      issuer: this.keySid,
      subject: this.accountSid,
      expiresIn: this.ttl,
    });
  }
}

namespace AccessToken {
  export abstract class Grant<TOptions, TPayload, TKey> {
    key: TKey;

    protected constructor(key: TKey) {
      this.key = key;
    }

    abstract toPayload(): TPayload;
  }

  export interface TaskRouterGrantOptions {
    workspaceSid?: string;
    workerSid?: string;
    role?: string;
  }

  export interface TaskRouterGrantPayload {
    workspace_sid?: string;
    worker_sid?: string;
    role?: string;
  }

  export interface ChatGrantOptions {
    serviceSid?: string;
    endpointId?: string;
    deploymentRoleSid?: string;
    pushCredentialSid?: string;
  }

  export interface ChatGrantPayload {
    service_sid?: string;
    endpoint_id?: string;
    deployment_role_sid?: string;
    push_credential_sid?: string;
  }

  export interface VideoGrantOptions {
    room?: string;
  }

  export interface VideoGrantPayload {
    room?: string;
  }

  export interface SyncGrantOptions {
    serviceSid?: string;
    endpointId?: string;
  }

  export interface SyncGrantPayload {
    service_sid?: string;
    endpoint_id?: string;
  }

  export interface VoiceGrantOptions {
    incomingAllow?: boolean;
    outgoingApplicationSid?: string;
    outgoingApplicationParams?: object;
    pushCredentialSid?: string;
    endpointId?: string;
  }

  export interface VoiceGrantPayload {
    incoming?: { allow: boolean };
    outgoing?: { application_sid: string; params?: object };
    push_credential_sid?: string;
    endpoint_id?: string;
  }

  export interface PlaybackGrantOptions {
    grant?: object;
  }

  export interface PlaybackGrantPayload {
    grant?: object;
  }

  export interface AccessTokenOptions {
    /**
     * Time to live in seconds
     */
    ttl?: number;
    /**
     * The identity of the first person. Required.
     */
    identity: string;
    /**
     * Time from epoch in seconds for not before value
     */
    nbf?: number;
    /**
     * The region value associated with this account
     */
    region?: string;
  }

  export class TaskRouterGrant
    extends Grant<TaskRouterGrantOptions, TaskRouterGrantPayload, "task_router">
    implements TaskRouterGrantOptions
  {
    workspaceSid?: string;
    workerSid?: string;
    role?: string;

    /**
     * @param options - ...
     * @param options.workspaceSid - The workspace unique ID
     * @param options.workerSid - The worker unique ID
     * @param options.role - The role of the grant
     */
    constructor(options?: TaskRouterGrantOptions) {
      options = options || {};
      super("task_router");
      this.workspaceSid = options.workspaceSid;
      this.workerSid = options.workerSid;
      this.role = options.role;
    }

    toPayload(): TaskRouterGrantPayload {
      let grant: TaskRouterGrantPayload = {};
      if (this.workspaceSid) {
        grant.workspace_sid = this.workspaceSid;
      }
      if (this.workerSid) {
        grant.worker_sid = this.workerSid;
      }
      if (this.role) {
        grant.role = this.role;
      }
      return grant;
    }
  }

  export class ChatGrant
    extends Grant<ChatGrantOptions, ChatGrantPayload, "chat">
    implements ChatGrantOptions
  {
    serviceSid?: string;
    endpointId?: string;
    deploymentRoleSid?: string;
    pushCredentialSid?: string;

    /**
     * @param options - ...
     * @param options.serviceSid - The service unique ID
     * @param options.endpointId - The endpoint ID
     * @param options.deploymentRoleSid - SID of the deployment role to be
     *                 assigned to the user
     * @param options.pushCredentialSid - The Push Credentials SID
     */
    constructor(options?: ChatGrantOptions) {
      options = options || {};
      super("chat");
      this.serviceSid = options.serviceSid;
      this.endpointId = options.endpointId;
      this.deploymentRoleSid = options.deploymentRoleSid;
      this.pushCredentialSid = options.pushCredentialSid;
    }

    toPayload(): ChatGrantPayload {
      let grant: ChatGrantPayload = {};
      if (this.serviceSid) {
        grant.service_sid = this.serviceSid;
      }
      if (this.endpointId) {
        grant.endpoint_id = this.endpointId;
      }
      if (this.deploymentRoleSid) {
        grant.deployment_role_sid = this.deploymentRoleSid;
      }
      if (this.pushCredentialSid) {
        grant.push_credential_sid = this.pushCredentialSid;
      }
      return grant;
    }
  }

  export class VideoGrant
    extends Grant<VideoGrantOptions, VideoGrantPayload, "video">
    implements VideoGrantOptions
  {
    room?: string;

    /**
     * @param options - ...
     * @param options.room - The Room name or Room sid.
     */
    constructor(options?: VideoGrantOptions) {
      options = options || {};
      super("video");
      this.room = options.room;
    }

    toPayload(): VideoGrantPayload {
      let grant: VideoGrantPayload = {};
      if (this.room) {
        grant.room = this.room;
      }
      return grant;
    }
  }

  export class SyncGrant
    extends Grant<SyncGrantOptions, SyncGrantPayload, "data_sync">
    implements SyncGrantOptions
  {
    serviceSid?: string;
    endpointId?: string;

    /**
     * @param options.serviceSid - The service unique ID
     * @param options.endpointId - The endpoint ID
     */
    constructor(options?: SyncGrantOptions) {
      options = options || {};
      super("data_sync");
      this.serviceSid = options.serviceSid;
      this.endpointId = options.endpointId;
    }

    toPayload(): SyncGrantPayload {
      let grant: SyncGrantPayload = {};
      if (this.serviceSid) {
        grant.service_sid = this.serviceSid;
      }
      if (this.endpointId) {
        grant.endpoint_id = this.endpointId;
      }
      return grant;
    }
  }

  export class VoiceGrant
    extends Grant<VoiceGrantOptions, VoiceGrantPayload, "voice">
    implements VoiceGrantOptions
  {
    incomingAllow?: boolean;
    outgoingApplicationSid?: string;
    outgoingApplicationParams?: object;
    pushCredentialSid?: string;
    endpointId?: string;

    /**
     * @param options - ...
     * @param options.incomingAllow - Whether or not this endpoint is allowed to receive incoming calls as grants.identity
     * @param options.outgoingApplicationSid - application sid to call when placing outgoing call
     * @param options.outgoingApplicationParams - request params to pass to the application
     * @param options.pushCredentialSid - Push Credential Sid to use when registering to receive incoming call notifications
     * @param options.endpointId - Specify an endpoint identifier for this device, which will allow the developer
     *                 to direct calls to a specific endpoint when multiple devices are associated with a single identity
     */
    constructor(options?: VoiceGrantOptions) {
      options = options || {};
      super("voice");
      this.incomingAllow = options.incomingAllow;
      this.outgoingApplicationSid = options.outgoingApplicationSid;
      this.outgoingApplicationParams = options.outgoingApplicationParams;
      this.pushCredentialSid = options.pushCredentialSid;
      this.endpointId = options.endpointId;
    }

    toPayload(): VoiceGrantPayload {
      let grant: VoiceGrantPayload = {};
      if (this.incomingAllow === true) {
        grant.incoming = { allow: true };
      }

      if (this.outgoingApplicationSid) {
        grant.outgoing = {
          application_sid: this.outgoingApplicationSid,
        };

        if (this.outgoingApplicationParams) {
          grant.outgoing.params = this.outgoingApplicationParams;
        }
      }

      if (this.pushCredentialSid) {
        grant.push_credential_sid = this.pushCredentialSid;
      }
      if (this.endpointId) {
        grant.endpoint_id = this.endpointId;
      }
      return grant;
    }
  }

  export class PlaybackGrant
    extends Grant<PlaybackGrantOptions, PlaybackGrantPayload, "player">
    implements PlaybackGrantOptions
  {
    grant?: object;

    /**
     * @param options - ...
     * @param options.grant - The PlaybackGrant retrieved from Twilio's API
     */
    constructor(options?: PlaybackGrantOptions) {
      options = options || {};
      super("player");
      this.grant = options.grant;
    }

    toPayload(): PlaybackGrantPayload {
      let grant = {};
      if (this.grant) {
        grant = this.grant;
      }
      return grant;
    }
  }
}

export = AccessToken;
