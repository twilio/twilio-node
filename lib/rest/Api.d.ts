/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import TwilioClient = require('./Twilio');
import V2010 = require('./api/V2010');
import { AccountContext } from './api/v2010/account';
import { AccountListInstance } from './api/v2010/account';
import { AddressListInstance } from './api/v2010/account/address';
import { ApplicationListInstance } from './api/v2010/account/application';
import { AuthorizedConnectAppListInstance } from './api/v2010/account/authorizedConnectApp';
import { AvailablePhoneNumberCountryListInstance } from './api/v2010/account/availablePhoneNumber';
import { CallListInstance } from './api/v2010/account/call';
import { ConferenceListInstance } from './api/v2010/account/conference';
import { ConnectAppListInstance } from './api/v2010/account/connectApp';
import { IncomingPhoneNumberListInstance } from './api/v2010/account/incomingPhoneNumber';
import { KeyListInstance } from './api/v2010/account/key';
import { MessageListInstance } from './api/v2010/account/message';
import { NewKeyListInstance } from './api/v2010/account/newKey';
import { NewSigningKeyListInstance } from './api/v2010/account/newSigningKey';
import { NotificationListInstance } from './api/v2010/account/notification';
import { OutgoingCallerIdListInstance } from './api/v2010/account/outgoingCallerId';
import { QueueListInstance } from './api/v2010/account/queue';
import { RecordingListInstance } from './api/v2010/account/recording';
import { ShortCodeListInstance } from './api/v2010/account/shortCode';
import { SigningKeyListInstance } from './api/v2010/account/signingKey';
import { SipListInstance } from './api/v2010/account/sip';
import { TokenListInstance } from './api/v2010/account/token';
import { TranscriptionListInstance } from './api/v2010/account/transcription';
import { UsageListInstance } from './api/v2010/account/usage';
import { ValidationRequestListInstance } from './api/v2010/account/validationRequest';


/**
 * Initialize api domain
 */
declare class Api extends Domain {
  /**
   * Initialize api domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: TwilioClient);

  /**
   * Main account resource
   */
  readonly account: AccountContext;
  /**
   * Account resource
   */
  readonly accounts: AccountListInstance;
  /**
   * Address resource
   */
  readonly addresses: AddressListInstance;
  /**
   * Application resource
   */
  readonly applications: ApplicationListInstance;
  /**
   * AuthorizedConnectApp resource
   */
  readonly authorizedConnectApps: AuthorizedConnectAppListInstance;
  /**
   * AvailablePhoneNumberCountry resource
   */
  readonly availablePhoneNumbers: AvailablePhoneNumberCountryListInstance;
  /**
   * Call resource
   */
  readonly calls: CallListInstance;
  /**
   * Conference resource
   */
  readonly conferences: ConferenceListInstance;
  /**
   * ConnectApp resource
   */
  readonly connectApps: ConnectAppListInstance;
  /**
   * IncomingPhoneNumber resource
   */
  readonly incomingPhoneNumbers: IncomingPhoneNumberListInstance;
  /**
   * Key resource
   */
  readonly keys: KeyListInstance;
  /**
   * Message resource
   */
  readonly messages: MessageListInstance;
  /**
   * NewKey resource
   */
  readonly newKeys: NewKeyListInstance;
  /**
   * NewSigningKey resource
   */
  readonly newSigningKeys: NewSigningKeyListInstance;
  /**
   * Notification resource
   */
  readonly notifications: NotificationListInstance;
  /**
   * OutgoingCallerId resource
   */
  readonly outgoingCallerIds: OutgoingCallerIdListInstance;
  /**
   * Queue resource
   */
  readonly queues: QueueListInstance;
  /**
   * Recording resource
   */
  readonly recordings: RecordingListInstance;
  /**
   * ShortCode resource
   */
  readonly shortCodes: ShortCodeListInstance;
  /**
   * SigningKey resource
   */
  readonly signingKeys: SigningKeyListInstance;
  /**
   * Sip resource
   */
  readonly sip: SipListInstance;
  /**
   * Token resource
   */
  readonly tokens: TokenListInstance;
  /**
   * Transcription resource
   */
  readonly transcriptions: TranscriptionListInstance;
  /**
   * Usage resource
   */
  readonly usage: UsageListInstance;
  readonly v2010: V2010;
  /**
   * ValidationRequest resource
   */
  readonly validationRequests: ValidationRequestListInstance;
}

export = Api;
