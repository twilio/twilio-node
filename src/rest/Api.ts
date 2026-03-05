import { AccountContext, AccountListInstance } from "./api/v2010/account.js";
import { AddressListInstance } from "./api/v2010/account/address.js";
import { ApplicationListInstance } from "./api/v2010/account/application.js";
import { AuthorizedConnectAppListInstance } from "./api/v2010/account/authorizedConnectApp.js";
import { AvailablePhoneNumberCountryListInstance } from "./api/v2010/account/availablePhoneNumberCountry.js";
import { BalanceListInstance } from "./api/v2010/account/balance.js";
import { CallListInstance } from "./api/v2010/account/call.js";
import { ConferenceListInstance } from "./api/v2010/account/conference.js";
import { ConnectAppListInstance } from "./api/v2010/account/connectApp.js";
import { IncomingPhoneNumberListInstance } from "./api/v2010/account/incomingPhoneNumber.js";
import { KeyListInstance } from "./api/v2010/account/key.js";
import { MessageListInstance } from "./api/v2010/account/message.js";
import { NewKeyListInstance } from "./api/v2010/account/newKey.js";
import { NewSigningKeyListInstance } from "./api/v2010/account/newSigningKey.js";
import { NotificationListInstance } from "./api/v2010/account/notification.js";
import { OutgoingCallerIdListInstance } from "./api/v2010/account/outgoingCallerId.js";
import { QueueListInstance } from "./api/v2010/account/queue.js";
import { RecordingListInstance } from "./api/v2010/account/recording.js";
import { ShortCodeListInstance } from "./api/v2010/account/shortCode.js";
import { SigningKeyListInstance } from "./api/v2010/account/signingKey.js";
import { SipListInstance } from "./api/v2010/account/sip.js";
import { TokenListInstance } from "./api/v2010/account/token.js";
import { TranscriptionListInstance } from "./api/v2010/account/transcription.js";
import { UsageListInstance } from "./api/v2010/account/usage.js";
import { ValidationRequestListInstance } from "./api/v2010/account/validationRequest.js";
import { ApiBase } from "./ApiBase.js";

export class Api extends ApiBase {
  get account(): AccountContext {
    return this.v2010.account;
  }

  get accounts(): AccountListInstance {
    return this.v2010.accounts;
  }

  /**
   * @deprecated - Use account.addresses instead
   */
  get addresses(): AddressListInstance {
    console.warn("addresses is deprecated. Use account.addresses instead.");
    return this.account.addresses;
  }

  /**
   * @deprecated - Use account.applications instead
   */
  get applications(): ApplicationListInstance {
    console.warn(
      "applications is deprecated. Use account.applications instead."
    );
    return this.account.applications;
  }

  /**
   * @deprecated - Use account.authorizedConnectApps instead
   */
  get authorizedConnectApps(): AuthorizedConnectAppListInstance {
    console.warn(
      "authorizedConnectApps is deprecated. Use account.authorizedConnectApps instead."
    );
    return this.account.authorizedConnectApps;
  }

  /**
   * @deprecated - Use account.availablePhoneNumbers instead
   */
  get availablePhoneNumbers(): AvailablePhoneNumberCountryListInstance {
    console.warn(
      "availablePhoneNumbers is deprecated. Use account.availablePhoneNumbers instead."
    );
    return this.account.availablePhoneNumbers;
  }

  /**
   * @deprecated - Use account.balance instead
   */
  get balance(): BalanceListInstance {
    console.warn("balance is deprecated. Use account.balance instead.");
    return this.account.balance;
  }

  /**
   * @deprecated - Use account.calls instead
   */
  get calls(): CallListInstance {
    console.warn("calls is deprecated. Use account.calls instead.");
    return this.account.calls;
  }

  /**
   * @deprecated - Use account.conferences instead
   */
  get conferences(): ConferenceListInstance {
    console.warn("conferences is deprecated. Use account.conferences instead.");
    return this.account.conferences;
  }

  /**
   * @deprecated - Use account.connectApps instead
   */
  get connectApps(): ConnectAppListInstance {
    console.warn("connectApps is deprecated. Use account.connectApps instead.");
    return this.account.connectApps;
  }

  /**
   * @deprecated - Use account.incomingPhoneNumbers instead
   */
  get incomingPhoneNumbers(): IncomingPhoneNumberListInstance {
    console.warn(
      "incomingPhoneNumbers is deprecated. Use account.incomingPhoneNumbers instead."
    );
    return this.account.incomingPhoneNumbers;
  }

  /**
   * @deprecated - Use account.keys instead
   */
  get keys(): KeyListInstance {
    console.warn("keys is deprecated. Use account.keys instead.");
    return this.account.keys;
  }

  /**
   * @deprecated - Use account.messages instead
   */
  get messages(): MessageListInstance {
    console.warn("messages is deprecated. Use account.messages instead.");
    return this.account.messages;
  }

  /**
   * @deprecated - Use account.newKeys instead
   */
  get newKeys(): NewKeyListInstance {
    console.warn("newKeys is deprecated. Use account.newKeys instead.");
    return this.account.newKeys;
  }

  /**
   * @deprecated - Use account.newSigningKeys instead
   */
  get newSigningKeys(): NewSigningKeyListInstance {
    console.warn(
      "newSigningKeys is deprecated. Use account.newSigningKeys instead."
    );
    return this.account.newSigningKeys;
  }

  /**
   * @deprecated - Use account.notifications instead
   */
  get notifications(): NotificationListInstance {
    console.warn(
      "notifications is deprecated. Use account.notifications instead."
    );
    return this.account.notifications;
  }

  /**
   * @deprecated - Use account.outgoingCallerIds instead
   */
  get outgoingCallerIds(): OutgoingCallerIdListInstance {
    console.warn(
      "outgoingCallerIds is deprecated. Use account.outgoingCallerIds instead."
    );
    return this.account.outgoingCallerIds;
  }

  /**
   * @deprecated - Use account.queues instead
   */
  get queues(): QueueListInstance {
    console.warn("queues is deprecated. Use account.queues instead.");
    return this.account.queues;
  }

  /**
   * @deprecated - Use account.recordings instead
   */
  get recordings(): RecordingListInstance {
    console.warn("recordings is deprecated. Use account.recordings instead.");
    return this.account.recordings;
  }

  /**
   * @deprecated - Use account.signingKeys instead
   */
  get signingKeys(): SigningKeyListInstance {
    console.warn("signingKeys is deprecated. Use account.signingKeys instead.");
    return this.account.signingKeys;
  }

  /**
   * @deprecated - Use account.sip instead
   */
  get sip(): SipListInstance {
    console.warn("sip is deprecated. Use account.sip instead.");
    return this.account.sip;
  }

  /**
   * @deprecated - Use account.shortCodes instead
   */
  get shortCodes(): ShortCodeListInstance {
    console.warn("shortCodes is deprecated. Use account.shortCodes instead.");
    return this.account.shortCodes;
  }

  /**
   * @deprecated - Use account.tokens instead
   */
  get tokens(): TokenListInstance {
    console.warn("tokens is deprecated. Use account.tokens instead.");
    return this.account.tokens;
  }

  /**
   * @deprecated - Use account.transcriptions instead
   */
  get transcriptions(): TranscriptionListInstance {
    console.warn(
      "transcriptions is deprecated. Use account.transcriptions instead."
    );
    return this.account.transcriptions;
  }

  /**
   * @deprecated - Use account.usage instead
   */
  get usage(): UsageListInstance {
    console.warn("usage is deprecated. Use account.usage instead.");
    return this.account.usage;
  }

  /**
   * @deprecated - Use account.validationRequests instead
   */
  get validationRequests(): ValidationRequestListInstance {
    console.warn(
      "validationRequests is deprecated. Use account.validationRequests instead."
    );
    return this.account.validationRequests;
  }
}
