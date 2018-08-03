/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Api = require('../Api');
import Version = require('../../base/Version');
import { AccountContext } from './v2010/account';
import { AccountList } from './v2010/account';
import { AccountListInstance } from './v2010/account';
import { AddressListInstance } from './v2010/account/address';
import { ApplicationListInstance } from './v2010/account/application';
import { AuthorizedConnectAppListInstance } from './v2010/account/authorizedConnectApp';
import { AvailablePhoneNumberCountryListInstance } from './v2010/account/availablePhoneNumber';
import { CallListInstance } from './v2010/account/call';
import { ConferenceListInstance } from './v2010/account/conference';
import { ConnectAppListInstance } from './v2010/account/connectApp';
import { IncomingPhoneNumberListInstance } from './v2010/account/incomingPhoneNumber';
import { KeyListInstance } from './v2010/account/key';
import { MessageListInstance } from './v2010/account/message';
import { NewKeyListInstance } from './v2010/account/newKey';
import { NewSigningKeyListInstance } from './v2010/account/newSigningKey';
import { NotificationListInstance } from './v2010/account/notification';
import { OutgoingCallerIdListInstance } from './v2010/account/outgoingCallerId';
import { QueueListInstance } from './v2010/account/queue';
import { RecordingListInstance } from './v2010/account/recording';
import { ShortCodeListInstance } from './v2010/account/shortCode';
import { SigningKeyListInstance } from './v2010/account/signingKey';
import { SipListInstance } from './v2010/account/sip';
import { TokenListInstance } from './v2010/account/token';
import { TranscriptionListInstance } from './v2010/account/transcription';
import { UsageListInstance } from './v2010/account/usage';
import { ValidationRequestListInstance } from './v2010/account/validationRequest';


declare class V2010 extends Version {
  /**
   * Initialize the V2010 version of Api
   *
   * @property accounts - accounts resource
   * @property account - account resource
   * @property addresses - addresses resource
   * @property applications - applications resource
   * @property authorizedConnectApps - authorizedConnectApps resource
   * @property availablePhoneNumbers - availablePhoneNumbers resource
   * @property calls - calls resource
   * @property conferences - conferences resource
   * @property connectApps - connectApps resource
   * @property incomingPhoneNumbers - incomingPhoneNumbers resource
   * @property keys - keys resource
   * @property messages - messages resource
   * @property newKeys - newKeys resource
   * @property newSigningKeys - newSigningKeys resource
   * @property notifications - notifications resource
   * @property outgoingCallerIds - outgoingCallerIds resource
   * @property queues - queues resource
   * @property recordings - recordings resource
   * @property signingKeys - signingKeys resource
   * @property sip - sip resource
   * @property shortCodes - shortCodes resource
   * @property tokens - tokens resource
   * @property transcriptions - transcriptions resource
   * @property usage - usage resource
   * @property validationRequests - validationRequests resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Api);

  account: AccountContext;
  readonly accounts: AccountListInstance;
  readonly addresses: AddressListInstance;
  readonly applications: ApplicationListInstance;
  readonly authorizedConnectApps: AuthorizedConnectAppListInstance;
  readonly availablePhoneNumbers: AvailablePhoneNumberCountryListInstance;
  readonly calls: CallListInstance;
  readonly conferences: ConferenceListInstance;
  readonly connectApps: ConnectAppListInstance;
  readonly incomingPhoneNumbers: IncomingPhoneNumberListInstance;
  readonly keys: KeyListInstance;
  readonly messages: MessageListInstance;
  readonly newKeys: NewKeyListInstance;
  readonly newSigningKeys: NewSigningKeyListInstance;
  readonly notifications: NotificationListInstance;
  readonly outgoingCallerIds: OutgoingCallerIdListInstance;
  readonly queues: QueueListInstance;
  readonly recordings: RecordingListInstance;
  readonly shortCodes: ShortCodeListInstance;
  readonly signingKeys: SigningKeyListInstance;
  readonly sip: SipListInstance;
  readonly tokens: TokenListInstance;
  readonly transcriptions: TranscriptionListInstance;
  readonly usage: UsageListInstance;
  readonly validationRequests: ValidationRequestListInstance;
}

export = V2010;
