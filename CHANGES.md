twilio-node changelog
=====================

[2021-01-27] Version 3.55.1
---------------------------
**Studio**
- Studio V2 API is now GA

**Supersim**
- Allow updating `CommandsUrl` and `CommandsMethod` on a Fleet

**Twiml**
- Add `status_callback` and `status_callback_method` to `Stream`.


[2021-01-13] Version 3.55.0
---------------------------
**Api**
- Add 'Electric Imp v1 Usage' to usage categories

**Conversations**
- Changed `last_read_message_index` type in Participant's resource **(breaking change)**

**Insights**
- Added `created_time` to call summary.

**Sync**
- Remove HideExpired query parameter for filtering Sync Documents with expired **(breaking change)**

**Video**
- [Rooms] Expose maxConcurrentPublishedTracks property in Room resource


[2021-01-06] Version 3.54.2
---------------------------
**Library - Fix**
- [PR #640](https://github.com/twilio/twilio-node/pull/640): axios update to v0.21.1. Thanks to [@ShelbyZ](https://github.com/ShelbyZ)!
- [PR #642](https://github.com/twilio/twilio-node/pull/642): url encoding for validateExpressRequest. Thanks to [@thinkingserious](https://github.com/thinkingserious)!


[2020-12-16] Version 3.54.1
---------------------------
**Api**
- Updated `call_event` default_output_properties to request and response.

**Conversations**
- Added `last_read_message_index` and `last_read_timestamp` to Participant's resource update operation
- Added `is_notifiable` and `is_online` to User's resource
- Added `reachability_enabled` parameters to update method for Conversation Service Configuration resource

**Messaging**
- Added WA template quick reply, URL, and phone number buttons

**Twiml**
- Add `sequential` to `Dial`.


[2020-12-08] Version 3.54.0
---------------------------
**Api**
- Added optional `RecordingTrack` parameter for create calls, create participants, and create call recordings
- Removed deprecated Programmable Chat usage record categories **(breaking change)**

**Twiml**
- Add `recordingTrack` to `Dial`.


[2020-12-02] Version 3.53.0
---------------------------
**Api**
- Remove `RecordingTrack` parameter for create calls, create participants, and create call recordings **(breaking change)**
- Added `RecordingTrack` parameter for create calls and create call recordings
- Add optional property `recording_track` in the participant create request

**Lookups**
- Changed `caller_name` and `carrier` properties type to object **(breaking change)**

**Trunking**
- Added dual channel recording options for Trunks.

**Twiml**
- Add `jitterBufferSize` and `participantLabel` to `Conference`.


[2020-11-18] Version 3.52.0
---------------------------
**Library - Chore**
- [PR #630](https://github.com/twilio/twilio-node/pull/630): Move @types dependencies to peerDependencies. Thanks to [@taxilian](https://github.com/taxilian)!

**Api**
- Add new call events resource - GET /2010-04-01/Accounts/{account_sid}/Calls/{call_sid}/Events.json

**Conversations**
- Fixed default response property issue for Service Notifications Configuration

**Insights**
- Removing call_sid from participant summary. **(breaking change)**

**Serverless**
- Allow Service unique name to be used in path (in place of SID) in Service update request

**Sync**
- Added HideExpired query parameter for filtering Sync Documents with expired

**Verify**
- Challenge `Details` and `HiddenDetails` properties are now marked as `PII`
- Challenge `expiration_date` attribute updated to set a default value of five (5) minutes and to allow max dates of one (1) hour after creation.
- Entity `identity` attribute updated to allow values between 8 and 64 characters.
- Verify Service frinedly_name attribute updated from 64 max lenght to 30 characters.


[2020-11-05] Version 3.51.0
---------------------------
**Library - Fix**
- [PR #621](https://github.com/twilio/twilio-node/pull/621): X-Twilio-Signature validation when URL query parameters contain @ or :. Thanks to [@adamj9431](https://github.com/adamj9431)!
- [PR #622](https://github.com/twilio/twilio-node/pull/622): remove request auth headers from debug logging. Thanks to [@JenniferMah](https://github.com/JenniferMah)!

**Library - Feature**
- [PR #623](https://github.com/twilio/twilio-node/pull/623): add regional twr header in the access token. Thanks to [@charliesantos](https://github.com/charliesantos)!
- [PR #618](https://github.com/twilio/twilio-node/pull/618): add http logging for Node JS. Thanks to [@JenniferMah](https://github.com/JenniferMah)!

**Library - Chore**
- [PR #625](https://github.com/twilio/twilio-node/pull/625): pin jasmine for compatibility with older node versions. Thanks to [@eshanholtz](https://github.com/eshanholtz)!

**Api**
- Added `verify-push` to `usage_record` API

**Bulkexports**
- When creating a custom export the StartDay, EndDay, and FriendlyName fields were required but this was not reflected in the API documentation.  The API itself failed the request without these fields. **(breaking change)**
- Added property descriptions for Custom Export create method
- Clarified WebhookUrl and WebhookMethod must be provided together for Custom Export

**Insights**
- Added video room and participant summary apis.

**Ip_messaging**
- Create separate definition for ip-messaging
- Restore v2 endpoints for ip-messaging

**Verify**
- Verify Push madurity were updated from `preview` to `beta`
- `twilio_sandbox_mode` header was removed from Verify Push resources **(breaking change)**

**Video**
- [Rooms] Add Recording Rules API


[2020-10-14] Version 3.50.0
---------------------------
**Ai**
- Add `Annotation Project` and `Annotation Task` endpoints
- Add `Primitives` endpoints
- Add `meta.total` to the search endpoint

**Conversations**
- Mutable Conversation Unique Names

**Insights**
- Added `trust` to summary.

**Preview**
- Simplified `Channels` resource. The path is now `/BrandedChannels/branded_channel_sid/Channels` **(breaking change)**

**Verify**
- Changed parameters (`config` and `binding`) to use dot notation instead of JSON string (e.i. Before: `binding={"alg":"ES256", "public_key": "xxx..."}`, Now: `Binding.Alg="ES256"`, `Binding.PublicKey="xxx..."`). **(breaking change)**
- Changed parameters (`details` and `hidden_details`) to use dot notation instead of JSON string (e.i. Before: `details={"message":"Test message", "fields": "[{\"label\": \"Action 1\", \"value\":\"value 1\"}]"}`, Now: `details.Message="Test message"`, `Details.Fields=["{\"label\": \"Action 1\", \"value\":\"value 1\"}"]`). **(breaking change)**
- Removed `notify_service_sid` from `push` service configuration object. Add `Push.IncludeDate`, `Push.ApnCredentialSid` and `Push.FcmCredentialSid` service configuration parameters. **(breaking change)**


[2020-09-28] Version 3.49.4
---------------------------
**Api**
- Add optional property `call_reason` in the participant create request
- Make sip-domain-service endpoints available in stage-au1 and prod-au1

**Messaging**
- Removed beta feature gate from WhatsApp Templates API

**Serverless**
- Add Build Status endpoint

**Video**
- [Rooms] Add new room type "go" for WebRTC Go


[2020-09-21] Version 3.49.3
---------------------------
**Accounts**
- Add Auth Token rotation API

**Conversations**
- Change resource path for Webhook Configuration

**Events**
- Schemas API get all Schemas names and versions


[2020-09-16] Version 3.49.2
---------------------------
**Library - Fix**
- [PR #614](https://github.com/twilio/twilio-node/pull/614): Prevent throwing an exception on 3xx response status code. Thanks to [@Saka7](https://github.com/Saka7)!

**Conversations**
- Expose Configuration and Service Configuration resources
- Add Unique Name support for Conversations
- Add Services Push Notification resource
- Add Service scoped Conversation resources
- Support Identity in Users resource endpoint

**Messaging**
- GA Deactivation List API
- Add domain cert API's(fetch, update, create) for link tracker

**Numbers**
- Add API endpoint for Supporting Document deletion

**Proxy**
- Updated usage of FailOnParticipantConflict param to apply only to accounts with ProxyAllowParticipantConflict account flag

**Supersim**
- Add `AccountSid` parameter to Sim resource update request
- Add `ready` status as an available status for a Sim resource


[2020-09-02] Version 3.49.1
---------------------------
**Library - Fix**
- [PR #605](https://github.com/twilio/twilio-node/pull/605): allow lower versions of typescript (2.5). Thanks to [@thinkingserious](https://github.com/thinkingserious)!

**Ai**
- Initial release

**Bulkexports**
- removing public beta feature flag from BulkExports Jobs API

**Messaging**
- Add Deactivation List API
- Added page token parameter for fetch in WhatsApp Templates API

**Numbers**
- Add API endpoint for End User deletion

**Routes**
- Add Resource Route Configurations API
- Add Route Configurations API
- Initial Release

**Trunking**
- Added `transfer_mode` property on Trunks.


[2020-08-19] Version 3.49.0
---------------------------
**Library - Docs**
- [PR #603](https://github.com/twilio/twilio-node/pull/603): convert markdown links to jsdoc formatted links. Thanks to [@thinkingserious](https://github.com/thinkingserious)!

**Library - Chore**
- [PR #602](https://github.com/twilio/twilio-node/pull/602): update GitHub branch references to use HEAD. Thanks to [@thinkingserious](https://github.com/thinkingserious)!

**Conversations**
- Allow Identity addition to Participants

**Events**
- Sinks API Get all Sinks

**Proxy**
- Clarified usage of FailOnParticipantConflict param as experimental
- Add FailOnParticipantConflict param to Proxy Session create and Proxy Participant create

**Supersim**
- Add fleet, network, and isoCountryCode to the UsageRecords resource
- Change sort order of UsageRecords from ascending to descending with respect to start time field, records are now returned newest to oldest

**Wireless**
- Removed `Start` and `End` parameters from the Data Sessions list endpoint. **(breaking change)**


[2020-08-05] Version 3.48.2
---------------------------
**Messaging**
- Add rejection reason support to WhatsApp API
- Removed status parameter for create and update in WhatsApp Templates API

**Proxy**
- Add FailOnParticipantConflict param to Proxy Session update

**Verify**
- Add `CustomFriendlyName` optional parameter on Verification creation.
- Changes in `Challenge` resource to update documentation of both `details` and `hidden_details` properties.


[2020-07-22] Version 3.48.1
---------------------------
**Api**
- Add optional Click Tracking and Scheduling parameters to Create action of Message resource

**Supersim**
- Add callback_url and callback_method parameters to Sim resource update request


[2020-07-08] Version 3.48.0
---------------------------
**Library - Fix**
- [PR #592](https://github.com/twilio/twilio-node/pull/592): upgrade dependencies and ignore low severity vulnerabilities. Thanks to [@childish-sambino](https://github.com/childish-sambino)!

**Library - Feature**
- [PR #589](https://github.com/twilio/twilio-node/pull/589): add fax capability to deserialized phone number capabilities. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #587](https://github.com/twilio/twilio-node/pull/587): include API response headers in 'Last Response'. Thanks to [@childish-sambino](https://github.com/childish-sambino)!

**Conversations**
- Allow Address updates for Participants
- Message delivery receipts

**Events**
- Add account_sid to subscription and subscribed_events resources

**Flex**
- Changed `wfm_integrations` Flex Configuration key to private **(breaking change)**

**Messaging**
- Add error states to WhatsApp Sender status with failed reason **(breaking change)**
- Delete WhatsApp Template API
- Update WhatsApp Template API
- Add WhatsApp Template Get Api (fetch and read)

**Numbers**
- Add `valid_until` in the Bundles resource
- Add API for Bundle deletion

**Verify**
- Removed support for `sms`, `totp` and `app-push` factor types in Verify push **(breaking change)**


[2020-06-24] Version 3.47.0
---------------------------
**Library - Fix**
- [PR #584](https://github.com/twilio/twilio-node/pull/584): use datetime instead of date for alert start/end date params. Thanks to [@mebuckler](https://github.com/mebuckler)!

**Api**
- Added optional `JitterBufferSize` parameter for creating conference participant
- Added optional `label` property for conference participants
- Added optional parameter `caller_id` for creating conference participant endpoint.

**Autopilot**
- Remove Export resource from Autopilot Assistant

**Conversations**
- Expose Conversation timers

**Monitor**
- Update start/end date filter params to support date-or-time format **(breaking change)**

**Numbers**
- Add `provisionally-approved` as a Supporting Document status

**Preview**
- Removed `Authy` resources. **(breaking change)**

**Supersim**
- Add ready state to the allowed transitions in the sim update call behind the feature flag supersim.ready-state.v1

**Verify**
- Webhook resources added to Verify services and put behind the `api.verify.push` beta feature

**Twiml**
- Add more supported locales for the `Gather` verb.


[2020-06-10] Version 3.46.0
---------------------------
**Library - Docs**
- [PR #583](https://github.com/twilio/twilio-node/pull/583): link to handling exceptions. Thanks to [@thinkingserious](https://github.com/thinkingserious)!
- [PR #582](https://github.com/twilio/twilio-node/pull/582): link to custom HTTP client instructions. Thanks to [@thinkingserious](https://github.com/thinkingserious)!

**Api**
- Added `pstnconnectivity` to `usage_record` API

**Notify**
- delivery_callback_url and delivery_callback_enabled added

**Preview**
- `BrandsInformation` endpoint now returns a single `BrandsInformation`

**Supersim**
- Require a Network Access Profile when creating a Fleet **(breaking change)**


[2020-06-04] Version 3.45.0
---------------------------
**Autopilot**
- Add dialogue_sid param to Query list resource

**Contacts**
- Added AccountSID to CFD CREATE and GET Responses

**Numbers**
- Add `provisionally-approved` as a Bundle status

**Preview**
- Deleted phone number required field in the brand phone number endpoint from `kyc-api`
- Removed insights `preview API` from API Definitions **(breaking change)**
- Added `BrandsInformation` endpoint to query brands information stored in KYC


[2020-05-27] Version 3.44.0
---------------------------
**Api**
- Added `reason_conference_ended` and `call_sid_ending_conference` to Conference read/fetch/update
- Fixed some examples to use the correct "TK" SID prefix for Trunk resources.

**Authy**
- Renamed `twilio_authy_sandbox_mode` headers to `twilio_sandbox_mode` **(breaking change)**
- Renamed `Twilio-Authy-*` headers to `Twilio-Veriry-*` **(breaking change)**

**Flex**
- Adding `flex_service_instance_sid` to Flex Configuration

**Preview**
- Removed insights preview API from API Definitions **(breaking change)**
- Added `Channels` endpoint to brand a phone number for BrandedCalls

**Serverless**
- Add Build Sid to Log results

**Supersim**
- Add Network Access Profile resource Networks subresource
- Allow specifying a Data Limit on Fleets

**Trunking**
- Fixed some examples to use the correct "TK" SID prefix for Trunk resources.


[2020-05-13] Version 3.43.1
---------------------------
**Library - Fix**
- [PR #571](https://github.com/twilio/twilio-node/pull/571): regional/edge precendence and env vars. Thanks to [@eshanholtz](https://github.com/eshanholtz)!

**Api**
- Add optional `emergency_caller_sid` parameter to SIP Domain
- Updated `call_reason` optional property to be treated as PII
- Added optional BYOC Trunk Sid property to Sip Domain API resource

**Autopilot**
- Add Restore resource to Autopilot Assistant

**Contacts**
- Added contacts Create API definition

**Events**
- Subscriptions API initial release

**Numbers**
- Add Evaluations API

**Supersim**
- Allow filtering the Fleets resource by Network Access Profile
- Allow assigning a Network Access Profile when creating and updating a Fleet
- Add Network Access Profiles resource

**Verify**
- Add `CustomCode` optional parameter on Verification creation.
- Add delete action on Service resource.

**Voice**
- Added endpoints for BYOC trunks, SIP connection policies and source IP mappings


[2020-04-29] Version 3.43.0
---------------------------
**Library - Chore**
- [PR #568](https://github.com/twilio/twilio-node/pull/568): logic refactor. Thanks to [@thinkingserious](https://github.com/thinkingserious)!

**Library - Feature**
- [PR #565](https://github.com/twilio/twilio-node/pull/565): adds details to rest exception. Thanks to [@ashish-s](https://github.com/ashish-s)!
- [PR #563](https://github.com/twilio/twilio-node/pull/563): add regional support. Thanks to [@thinkingserious](https://github.com/thinkingserious)!

**Preview**
- Added `Dispatch` version to `preview`

**Studio**
- Reroute Create Execution for V2 to the V2 downstream

**Supersim**
- Add Networks resource


[2020-04-15] Version 3.42.2
---------------------------
**Library - Fix**
- [PR #560](https://github.com/twilio/twilio-node/pull/560): type declaration for IncomingPhoneNumberInstance. Thanks to [@thinkingserious](https://github.com/thinkingserious)!

**Api**
- Updated description for property `call_reason` in the call create request

**Contacts**
- Added Read, Delete All, and Delete by SID docs
- Initial Release

**Studio**
- Rename `flow_valid` to `flow_validate`
- Removed `errors` and `warnings` from flows error response and added new property named `details`
- Add Update Execution endpoints to v1 and v2 to end execution via API

**Twiml**
- Add enhanced attribute to use with `speech_model` for the `Gather` verb


[2020-04-07] Version 3.42.1
---------------------------
**Library - Fix**
- [PR #558](https://github.com/twilio/twilio-node/pull/558): add list instance types and update 'object' type properties to 'any' in TS. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #556](https://github.com/twilio/twilio-node/pull/556): update allowed types for response body. Thanks to [@eshanholtz](https://github.com/eshanholtz)!
- [PR #554](https://github.com/twilio/twilio-node/pull/554): json parsing for non default clients. Thanks to [@eshanholtz](https://github.com/eshanholtz)!

**Library - Chore**
- [PR #557](https://github.com/twilio/twilio-node/pull/557): remove S3 URLs from test data. Thanks to [@childish-sambino](https://github.com/childish-sambino)!

**Studio**
- Add new `warnings` attribute v2 flow POST api


[2020-04-01] Version 3.42.0
---------------------------
**Library - Fix**
- [PR #551](https://github.com/twilio/twilio-node/pull/551): axios expects paramsSerializer not paramSerializer. Thanks to [@stephencaldwell](https://github.com/stephencaldwell)!
- [PR #549](https://github.com/twilio/twilio-node/pull/549): refactor 'RestException' to properly extend 'Error'. Thanks to [@childish-sambino](https://github.com/childish-sambino)!

**Api**
- Add optional 'secure' parameter to SIP Domain

**Authy**
- Added an endpoint to list the challenges of a factor
- Added optional parameter `Push` when updating a service to send the service level push factor configuration

**Bulkexports**
- exposing bulk exports (vault/slapchop) API as public beta API

**Flex**
- Adding `queue_stats_configuration` and `wfm_integrations` to Flex Configuration

**Serverless**
- Add Function Version Content endpoint
- Allow build_sid to be optional for deployment requests

**Supersim**
- Remove `deactivated` status for Super SIM which is replaced by `inactive` **(breaking change)**


[2020-03-18] Version 3.41.1
---------------------------
**Library - Fix**
- [PR #547](https://github.com/twilio/twilio-node/pull/547): add status validator to request options so non-2XXs can be wrapped in a 'RestException'. Thanks to [@childish-sambino](https://github.com/childish-sambino)!


[2020-03-18] Version 3.41.0
---------------------------
**Library - Fix**
- [PR #546](https://github.com/twilio/twilio-node/pull/546): Page JSON parsing and integration tests. Thanks to [@eshanholtz](https://github.com/eshanholtz)!
- [PR #545](https://github.com/twilio/twilio-node/pull/545): add overloaded TS definitions for non-required params. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #544](https://github.com/twilio/twilio-node/pull/544): Add method overload to VoiceResponse.prototype.play. Thanks to [@DCtheTall](https://github.com/DCtheTall)!
- [PR #543](https://github.com/twilio/twilio-node/pull/543): don't re-parse parsed JSON. Thanks to [@eshanholtz](https://github.com/eshanholtz)!

**Library - Feature**
- [PR #542](https://github.com/twilio/twilio-node/pull/542): migrate from deprecated request module to axios. Thanks to [@eshanholtz](https://github.com/eshanholtz)!

**Api**
- Add optional `emergency_calling_enabled` parameter to SIP Domain
- Add optional property `call_reason` in the call create request

**Authy**
- Added `friendly_name` and `config` as optional params to Factor update
- Added `config` param to Factor creation **(breaking change)**

**Preview**
- Renamed `SuccessRate` endpoint to `ImpressionsRate` for Branded Calls (fka. Verified by Twilio) **(breaking change)**


[2020-03-04] Version 3.40.0
---------------------------
**Library - Docs**
- [PR #541](https://github.com/twilio/twilio-node/pull/541): add url parameter documentation in twilio.webhook(). Thanks to [@fungiboletus](https://github.com/fungiboletus)!
- [PR #532](https://github.com/twilio/twilio-node/pull/532): guide for enabling lazy loading. Thanks to [@eshanholtz](https://github.com/eshanholtz)!

**Library - Fix**
- [PR #534](https://github.com/twilio/twilio-node/pull/534): proper indentation. Thanks to [@eshanholtz](https://github.com/eshanholtz)!

**Library - Feature**
- [PR #526](https://github.com/twilio/twilio-node/pull/526): Faster requiring using optional lazy loading. Thanks to [@wolfenrain](https://github.com/wolfenrain)!

**Authy**
- Added the `configuration` property to services to return the service level configurations
- Added optional parameter `Push` when creating a service to send the service level push factor configuration
- Remove FactorStrength support for Factors and Challenges **(breaking change)**

**Messaging**
- Correct the alpha sender capabilities property type **(breaking change)**

**Preview**
- Removed `/Devices` register Branded Calls endpoint, as per iOS sample app deprecation **(breaking change)**
- Removed `Twilio-Sandbox-Mode` request header from the Branded Calls endpoints, as not officially supported **(breaking change)**
- Removed `Verify` version from `preview` subdomain in favor to `verify` subdomain. **(breaking change)**

**Serverless**
- Add UI-Editable field to Services

**Supersim**
- Add `inactive` status for Super SIM which is an alias for `deactivated`

**Taskrouter**
- Adding value range to `priority` in task endpoint

**Verify**
- Fix `SendCodeAttempts` type. It's an array of objects instead of a unique object. **(breaking change)**


[2020-02-19] Version 3.39.5
---------------------------
**Api**
- Make call create parameters `async_amd`, `async_amd_status_callback`, and `async_amd_status_callback_method` public
- Add `trunk_sid` as an optional field to Call resource fetch/read responses
- Add property `queue_time` to successful response of create, fetch, and update requests for Call
- Add optional parameter `byoc` to conference participant create.

**Authy**
- Added support for challenges associated to push factors

**Flex**
- Adding `ui_dependencies` to Flex Configuration

**Messaging**
- Deprecate Session API **(breaking change)**

**Numbers**
- Add Regulations API

**Studio**
- Add Execution and Step endpoints to v2 API
- Add webhook_url to Flow response and add new /TestUsers endpoint to v2 API

**Taskrouter**
- Adding `longest_relative_task_age_in_queue` and `longest_relative_task_sid_in_queue` to TaskQueue Real Time Statistics API.
- Add `wait_duration_in_queue_until_accepted` aggregations to TaskQueues Cumulative Statistics endpoint
- Add TaskQueueEnteredDate property to Tasks.

**Video**
- [Composer] Clarification for the composition hooks creation documentation: one source is mandatory, either the `audio_sources` or the `video_layout`, but one of them has to be provided
- [Composer] `audio_sources` type on the composer HTTP POST command, changed from `sid[]` to `string[]` **(breaking change)**
- [Composer] Clarification for the composition creation documentation: one source is mandatory, either the `audio_sources` or the `video_layout`, but one of them has to be provided


[2020-02-05] Version 3.39.4
---------------------------
**Api**
- Making content retention and address retention public
- Update `status` enum for Messages to include 'partially_delivered'

**Authy**
- Added support for push factors

**Autopilot**
- Add one new property in Query i.e dialogue_sid

**Verify**
- Add `SendCodeAttempts` to create verification response.

**Video**
- Clarification in composition creation documentation: one source is mandatory, either `audio_sources` or `video_layout`, but on of them has to be provided

**Twiml**
- Add Polly Neural voices.


[2020-01-22] Version 3.39.3
---------------------------
**Library - Docs**
- [PR #524](https://github.com/twilio/twilio-node/pull/524): baseline all the templated markdown docs. Thanks to [@childish-sambino](https://github.com/childish-sambino)!

**Api**
- Add payments public APIs
- Add optional parameter `byoc` to call create request.

**Flex**
- Updating a Flex Flow `creation_on_message` parameter documentation

**Preview**
-
- Removed Verify v2 from preview in favor of its own namespace as GA **(breaking change)**

**Studio**
- Flow definition type update from string to object

**Verify**
- Add `AppHash` parameter when creating a Verification.
- Add `DoNotShareWarningEnabled` parameter to the Service resource.

**Twiml**
- Add `track` attribute to siprec noun.
- Add attribute `byoc` to `<Number>`


[2020-01-08] Version 3.39.2
---------------------------
**Library - Fix**
- [PR #519](https://github.com/twilio/twilio-node/pull/519): switch to a URL parsing lib that does not add percent-encoding. Thanks to [@childish-sambino](https://github.com/childish-sambino)!

**Numbers**
- Add Regulatory Compliance CRUD APIs

**Studio**
- Add parameter validation for Studio v2 Flows API

**Twiml**
- Add support for `speech_model` to `Gather` verb


[2019-12-18] Version 3.39.1
---------------------------
**Preview**
- Add `/Insights/SuccessRate` endpoint for Businesses Branded Calls (Verified by Twilio)

**Studio**
- StudioV2 API in beta

**Verify**
- Add `MailerSid` property to Verify Service resource.

**Wireless**
- Added `data_limit_strategy` to Rate Plan resource.


[2019-12-12] Version 3.39.0
---------------------------
**Api**
- Make `twiml` conditional for create. One of `url`, `twiml`, or `application_sid` is now required.
- Add `bundle_sid` parameter to /IncomingPhoneNumbers API
- Removed discard / obfuscate parameters from ContentRetention, AddressRetention **(breaking change)**

**Chat**
- Added `last_consumed_message_index` and `last_consumption_timestamp` parameters in update method for UserChannel resource **(breaking change)**

**Conversations**
- Add Participant SID to Message properties

**Messaging**
- Fix incorrectly typed capabilities property for ShortCodes. **(breaking change)**


[2019-12-04] Version 3.38.0
---------------------------
**Library**
- [PR #515](https://github.com/twilio/twilio-node/pull/515): fix: replace moment with dayjs. Thanks to [@cktang88](https://github.com/cktang88)!
- [PR #512](https://github.com/twilio/twilio-node/pull/512): docs: add supported language versions to README. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #501](https://github.com/twilio/twilio-node/pull/501): fix: escape special characters in TwiML attribute values. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #510](https://github.com/twilio/twilio-node/pull/510): fix: Add optional 'url' property to the webhook request validator type definition. Thanks to [@hoshinokanade](https://github.com/hoshinokanade)!
- [PR #508](https://github.com/twilio/twilio-node/pull/508): fix: Rename child TwiML methods to be based on tag name and deprecate old methods. Thanks to [@eshanholtz](https://github.com/eshanholtz)!
- [PR #509](https://github.com/twilio/twilio-node/pull/509): fix: Improve function deprecation and remove unnecessary dependency. Thanks to [@eshanholtz](https://github.com/eshanholtz)!
- [PR #507](https://github.com/twilio/twilio-node/pull/507): chore: upgrade older dependencies. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #502](https://github.com/twilio/twilio-node/pull/502): fix: add opts check for remove calls. Thanks to [@eshanholtz](https://github.com/eshanholtz)!
- [PR #499](https://github.com/twilio/twilio-node/pull/499): BREAKING feat: add support for custom HTTP headers in API requests. Thanks to [@eshanholtz](https://github.com/eshanholtz)! **(breaking change)**

**Api**
- Add optional `twiml` parameter for call create

**Chat**
- Added `delete` method in UserChannel resource

**Conversations**
- Allow Messaging Service update

**Taskrouter**
- Support ReEvaluateTasks parameter on Workflow update

**Twiml**
- Remove unsupported `mixed_track` value from `<Stream>` **(breaking change)**
- Add missing fax `<Receive>` optional attributes


[2019-11-13] Version 3.37.1
---------------------------
**Library**
- [PR #498](https://github.com/twilio/twilio-node/pull/498): fix: Stringify TwiML array attributes as space delimited. Thanks to [@mpeltonen](https://github.com/mpeltonen)!

**Api**
- Make `persistent_action` parameter public
- Add `twiml` optional private parameter for call create

**Autopilot**
- Add Export resource to Autopilot Assistant.

**Flex**
- Added Integration.RetryCount attribute to Flex Flow
- Updating a Flex Flow `channel_type` options documentation

**Insights**
- Added edges to events and metrics
- Added new endpoint definitions for Events and Metrics

**Messaging**
- **create** support for sender registration
- **fetch** support for fetching a sender
- **update** support for sender verification

**Supersim**
- Add `Direction` filter parameter to list commands endpoint
- Allow filtering commands list by Sim Unique Name
- Add `Iccid` filter parameter to list sims endpoint

**Twiml**
- Add support for `<Refer>` verb


[2019-10-30] Version 3.37.0
---------------------------
**Library**
- [PR #493](https://github.com/twilio/twilio-node/pull/493): Update resources after sorting. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #491](https://github.com/twilio/twilio-node/pull/491): added request validation for urls with and without ports. Thanks to [@eshanholtz](https://github.com/eshanholtz)!
- [PR #490](https://github.com/twilio/twilio-node/pull/490): Fix escape url. Thanks to [@pedroprado010](https://github.com/pedroprado010)!
- [PR #484](https://github.com/twilio/twilio-node/pull/484): Fixes missing identity value in token when it's not a string. Thanks to [@codedawi](https://github.com/codedawi)!

**Api**
- Add new usage categories to the public api `sms-messages-carrierfees` and `mms-messages-carrierfees`

**Conversations**
- Add ProjectedAddress to Conversations Participant resource

**Preview**
- Implemented different `Sid` for Current Calls (Verified by Twilio), instead of relying in `Call.Sid` from Voice API team **(breaking change)**

**Supersim**
- Add List endpoint to Commands resource for Super Sim Pilot
- Add UsageRecords resource for the Super Sim Pilot
- Add List endpoint to UsageRecords resource for the Super Sim Pilot
- Allow assigning a Sim to a Fleet by Fleet SID or Unique Name for Super SIM Pilot
- Add Update endpoint to Fleets resource for Super Sim Pilot
- Add Fetch endpoint to Commands resource for Super Sim Pilot
- Allow filtering the Sims resource List endpoint by Fleet
- Add List endpoint to Fleets resource for Super Sim Pilot

**Wireless**
- Added `account_sid` to Sim update parameters.

**Twiml**
- Add new locales and voices for `Say` from Polly


[2019-10-16] Version 3.36.0
---------------------------
**Library**
- [PR #488](https://github.com/twilio/twilio-node/pull/488): Update a few property types in the lookups and trunking responses. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #489](https://github.com/twilio/twilio-node/pull/489): Update instance property ordering. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #487](https://github.com/twilio/twilio-node/pull/487): Allow for auto-deploy on tagged releases. Thanks to [@thinkingserious](https://github.com/thinkingserious)!
- [PR #486](https://github.com/twilio/twilio-node/pull/486): breaking: Correct video composition date types. Thanks to [@childish-sambino](https://github.com/childish-sambino)! **(breaking change)**
- [PR #485](https://github.com/twilio/twilio-node/pull/485): Adding optional ca for specifying CA bundle. Thanks to [@ncausey](https://github.com/ncausey)!

**Api**
- Add new property `attempt` to sms_messages
- Fixed a typo in the documentation for Feedback outcome enum **(breaking change)**
- Update the call price to be optional for deserializing **(breaking change)**

**Flex**
- Added `JanitorEnabled` attribute to Flex Flow
- Change `features_enabled` Flex Configuration key to private **(breaking change)**

**Supersim**
- Add Fetch endpoint to Fleets resource for Super Sim Pilot
- Allow assigning a Sim to a Fleet for Super Sim Pilot
- Add Create endpoint to Fleets resource for Super Sim Pilot

**Twiml**
- Update `<Conference>` rename "whisper" attribute to "coach" **(breaking change)**


[2019-10-02] Version 3.35.1
---------------------------
**Library**
- [PR #483](https://github.com/twilio/twilio-node/pull/483): Added the ability for users to specify a CA bundle for HTTPS requests. Thanks to [@whitebarry](https://github.com/whitebarry)!
- [PR #482](https://github.com/twilio/twilio-node/pull/482): Typing fix for PolicyOptions. Thanks to [@kamolins3](https://github.com/kamolins3)!

**Conversations**
- Add media to Conversations Message resource

**Supersim**
- Add List endpoint to Sims resource for Super Sim Pilot


[2019-09-18] Version 3.35.0
----------------------------
**Library**
- [PR #479](https://github.com/twilio/twilio-node/pull/479): Correct the TS return type for various instance and context actions. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #474](https://github.com/twilio/twilio-node/pull/474): Add missing options interfaces to typescript exports. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #475](https://github.com/twilio/twilio-node/pull/475): Correct the 'object' type hint for a bunch of resource instance properties. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #476](https://github.com/twilio/twilio-node/pull/476): breaking: Use specific TS list types and allow non-array TS params. Thanks to [@childish-sambino](https://github.com/childish-sambino)! **(breaking change)**

**Numbers**
- Add v2 of the Identites API

**Preview**
- Changed authentication method for SDK Trusted Comms endpoints: `/CPS`, `/CurrentCall`, and `/Devices`. Please use `Authorization: Bearer <xCNAM JWT>` **(breaking change)**

**Voice**
- Add Recordings endpoints


[2019-09-04] Version 3.34.0
----------------------------
**Library**
- [PR #473](https://github.com/twilio/twilio-node/pull/473): Delete lodash dependency in examples. Thanks to [@duvan258](https://github.com/duvan258)!
- [PR #472](https://github.com/twilio/twilio-node/pull/472): Bump eslint-utils from 1.3.1 to 1.4.2. Thanks to [@dependabot](https://github.com/dependabot)!

**Api**
-  Pass Twiml in call update request

**Conversations**
- Add attributes to Conversations resources

**Flex**
- Adding `features_enabled` and `serverless_service_sids` to Flex Configuration

**Messaging**
- Message API required params updated **(breaking change)**

**Preview**
- Added support for the optional `CallSid` to `/BrandedCalls` endpoint


[2019-08-21] Version 3.33.4
----------------------------
**Library**
- [PR #471](https://github.com/twilio/twilio-node/pull/471): Yoyodyne updates per PR 379. Thanks to [@thinkingserious](https://github.com/thinkingserious)!
- [PR #469](https://github.com/twilio/twilio-node/pull/469): Update the IP messaging domain name to be 'chat'. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #468](https://github.com/twilio/twilio-node/pull/468): Update Node promise-based tests to use the jasmine 'done' callback. Thanks to [@childish-sambino](https://github.com/childish-sambino)!

**Conversations**
- Add Chat Conversation SID to conversation default output properties

**Flex**
- Adding `outbound_call_flows` object to Flex Configuration
- Adding read and fetch to channels API

**Supersim**
- Add Sims and Commands resources for the Super Sim Pilot

**Sync**
- Added configuration option for enabling webhooks from REST.

**Wireless**
- Added `usage_notification_method` and `usage_notification_url` properties to `rate_plan`.

**Twiml**
- Add support for `ach-debit` transactions in `Pay` verb


[2019-08-05] Version 3.33.3
----------------------------
**Preview**
- Added support for the header `Twilio-Sandbox-Mode` to mock all Voice dependencies

**Twiml**
- Add support for `<Siprec>` noun
- Add support for `<Stream>` noun
- Create verbs `<Start>` and `<Stop>`


[2019-07-24] Version 3.33.2
----------------------------
**Library**
- [PR #464](https://github.com/twilio/twilio-node/pull/464): Bump lodash from 4.17.11 to 4.17.13. Thanks to [@dependabot[bot]](https://github.com/dependabot[bot])!

**Insights**
- Added `properties` to summary.

**Preview**
- Added endpoint to brand a call without initiating it, so it can be initiated manually by the Customer

**Twiml**
- Update `<Conference>` recording events **(breaking change)**


[2019-07-10] Version 3.33.1
----------------------------
**Library**
- [PR #463](https://github.com/twilio/twilio-node/pull/463): Add missing type for 'validateRequestWithBody'. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #460](https://github.com/twilio/twilio-node/pull/460): Request middleware fails on validate set to false. Thanks to [@khalilchoudhry](https://github.com/khalilchoudhry)!

**Api**
- Make `friendly_name` optional for applications create
- Add new property `as_of` date to Usage Record API calls

**Wireless**
- Added Usage Records resource.


[2019-06-26] Version 3.33.0
----------------------------
**Library**
- [PR #457](https://github.com/twilio/twilio-node/pull/457): Add link to code examples in README. Thanks to [@annthurium](https://github.com/annthurium)!

**Autopilot**
- Adds two new properties in Assistant i.e needs_model_build and development_stage

**Preview**
- Changed phone numbers from _URL|Path_ to `X-XCNAM-Sensitive` headers **(breaking change)**

**Verify**
- Add `MessagingConfiguration` resource to verify service


[2019-06-12] Version 3.32.0
----------------------------
**Library**
- [PR #455](https://github.com/twilio/twilio-node/pull/455): WebhookOptions interface's properties made optional. Thanks to [@khalilchoudhry](https://github.com/khalilchoudhry)!

**Autopilot**
- Add Webhooks resource to Autopilot Assistant.

**Flex**
- Added missing 'custom' type to Flex Flow
- Adding `integrations` to Flex Configuration

**Insights**
- Added attributes to summary.

**Messaging**
- Message API Create updated with conditional params **(breaking change)**

**Proxy**
- Document that Proxy will return a maximum of 100 records for read/list endpoints **(breaking change)**
- Remove non-updatable property parameters for Session update (mode, participants) **(breaking change)**

**Sync**
- Added reachability debouncing configuration options.

**Verify**
- Add `RateLimits` and `Buckets` resources to Verify Services
- Add `RateLimits` optional parameter on `Verification` creation.

**Twiml**
- Fix `<Room>` participantIdentity casing


[2019-05-29] Version 3.31.1
----------------------------
**Library**
- [PR #449](https://github.com/twilio/twilio-node/pull/449): Replace string templating with interpolation. Thanks to [@childish-sambino](https://github.com/childish-sambino)!
- [PR #446](https://github.com/twilio/twilio-node/pull/446): Assign default value to twilioHeader during validation. Thanks to [@mniehe](https://github.com/mniehe)!

**Verify**
- Add `approved` to status enum


[2019-05-15] Version 3.31.0
----------------------------
**Library**
- [PR #447](https://github.com/twilio/twilio-node/pull/447): Check X-Twilio-Signature in webhook middleware. Thanks to [@neerajwadhwa](https://github.com/neerajwadhwa)!
- [PR #444](https://github.com/twilio/twilio-node/pull/444): Allow using newer moment versions. Thanks to [@szedlakmate](https://github.com/szedlakmate)!

**Api**
- Make `method` optional for queue members update

**Chat**
- Removed `webhook.*.format` update parameters in Service resource from public library visibility in v1 **(breaking change)**

**Insights**
- Added client metrics as sdk_edge to summary.
- Added optional query param processing_state.

**Numbers**
- Add addtional metadata fields on a Document
- Add status callback fields and parameters

**Taskrouter**
- Added `channel_optimized_routing` attribute to task-channel endpoint

**Video**
- [Rooms] Add Video Subscription API

**Wireless**
- Added `imei` to Data Session resource.
- Remove `imeisv` from Data Session resource. **(breaking change)**


[2019-05-01] Version 3.30.3
----------------------------
**Serverless**
- Documentation

**Wireless**
- Added `imeisv` to Data Session resource.


[2019-04-24] Version 3.30.2
----------------------------
**Library**
- PR #440: Upgrade 'js-yaml' to resolve DOS vulnerability. Thanks to @childish-sambino!

**Api**
- Add `verified` property to Addresses

**Numbers**
- Add API for Identites and documents

**Proxy**
- Add in use count on number instance


[2019-04-12] Version 3.30.1
----------------------------
**Library**
- PR #439: Force 'marked' dependency upgrade to resolve DoS vulnerability. Thanks to @childish-sambino!
- PR #436: Add latest LTS Node.js release to Travis CI config. Thanks to @childish-sambino!

**Flex**
- Adding PluginService to Flex Configuration

**Numbers**
- Add API for Proof of Addresses

**Proxy**
- Clarify documentation for Service and Session fetch

**Serverless**
- Serverless scaffolding


[2019-03-28] Version 3.30.0
----------------------------
**Library**
- PR #433: Revert "Move @types/express to dev dependencies". Thanks to @childish-sambino!
- PR #434: Upgrade 'js-yaml' to resolve DOS vulnerability. Thanks to @childish-sambino!

**Api**
- Remove optional `if_machine` call create parameter from helper libraries **(breaking change)**
- Changed `call_sid` path parameter type on QueueMember fetch and update requests **(breaking change)**

**Voice**
- changed file names to dialing_permissions prefix **(breaking change)**

**Wireless**
- Added `ResetStatus` property to Sim resource to allow resetting connectivity via the API.


[2019-03-15] Version 3.29.2
----------------------------
**Library**
- PR #428: Add a link to create a support ticket to the README. Thanks to @childish-sambino!
- PR #426: Add a Help Center link and remove outdated documentation contribution guide. Thanks to @childish-sambino!
- PR #406: Move @types/express to dev dependencies. Thanks to @kroleg!
- PR #425: Upgrade the ‘request' lib and transitively the ‘extend’ lib to address CVE-2018-16492. Thanks to @childish-sambino!
- PR #424: Better error message when username doesn't start with AC. Thanks to @aarmora!

**Api**
- Add `machine_detection_speech_threshold`, `machine_detection_speech_end_threshold`, `machine_detection_silence_timeout` optional params to Call create request

**Flex**
- Adding Flex Channel Orchestration
- Adding Flex Flow


[2019-03-06] Version 3.29.1
----------------------------
**Twiml**
- Add `de1` to `<Conference>` regions


[2019-03-01] Version 3.29.0
----------------------------
**Library**
- PR #391: DeprecationWarning: Buffer(). Thanks to @ShelbyZ!
- PR #423: refactor to expose utility functions to get expected signature/body hash. Thanks to @Charliekenney23!
- PR #419: Make the message body optional for TwiML nouns where it is not required. Thanks to @childish-sambino!
- PR #421: add typedef for validateRequestWithBody. Thanks to @Charliekenney23!
- PR #418: Add explicit class names to @constructor tags and add all missing @function and @memberof tags. Thanks to @childish-sambino!
- PR #417: Remove the auto-generated docs from source control. Thanks to @childish-sambino!
- PR #412: Add ‘toJSON' and ‘inspect' methods to context, instance, list, and page classes. Thanks to @childish-sambino!

**Api**
- Make conference participant preview parameters public

**Authy**
- Added support for FactorType and FactorStrength for Factors and Challenges

**Iam**
- First public release

**Verify**
- Add endpoint to update/cancel a Verification **(breaking change)**

**Video**
- [Composer] Make RoomSid mandatory **(breaking change)**
- [Composer] Add `enqueued` state to Composition

**Twiml**
- Update message body to not be required for TwiML `Dial` noun.


[2019-02-19] Version 3.28.1
----------------------------
**Library**
- PR #416: Bump packages for security. Thanks to @cjcodes!

**Api**
- Add `force_opt_in` optional param to Messages create request
- Add agent conference category to usage records

**Flex**
- First public release

**Taskrouter**
- Adding `reject_pending_reservations` to worker update endpoint
- Added `event_date_ms` and `worker_time_in_previous_activity_ms` to Events API response
- Add ability to filter events by TaskChannel

**Verify**
- Add `EnablePsd2` optional parameter for PSD2 on Service resource creation or update.
- Add `Amount`, `Payee` optional parameters for PSD2.


[2019-02-04] Version 3.28.0
----------------------------
**Library**
- PR #410: Switch body validator to use hex instead of base64. Thanks to @cjcodes!

**Video**
- [Recordings] Add media type filter to list operation
- [Composer] Filter Composition Hook resources by FriendlyName

**Twiml**
- Update `language` enum for `Gather` to fix language code for Filipino (Philippines) and include additional supported languages **(breaking change)**


[2019-01-11] Version 3.27.1
----------------------------
**Verify**
- Add `lookup` information in the response when creating a new verification (depends on the LookupEnabled flag being enabled at the service level)
- Add `VerificationSid` optional parameter on Verification check.


[2019-01-11] Version 3.27.0
----------------------------
**Chat**
- Mark Member attributes as PII

**Proxy**
- Remove unsupported query parameters **(breaking change)**
- Remove invalid session statuses in doc


[2019-01-02] Version 3.26.1
----------------------------
**Insights**
- Initial revision.


[2018-12-19] Version 3.26.0
----------------------------
**Library**
- PR #405: Fix security audits. Thanks to @cjcodes!
- PR #393: Updates scmp to version 2.0.0. Thanks to @philnash!

**Authy**
- Reverted the change to `FactorType` and `FormType`, avoiding conflicts with Helper Libraries reserved words (`type`) **(breaking change)**

**Proxy**
- Remove incorrect parameter for Session List

**Studio**
- Support date created filtering on list of executions

**Taskrouter**
- Adding ability to Create, Modify and Delete Task Channels.

**Verify**
- Add `SkipSmsToLandlines`, `TtsName`, `DtmfInputRequired` optional parameters on Service resource creation or update.

**Wireless**
- Added delete action on Command resource.
- Added delete action on Sim resource.

**Twiml**
- Change `currency` from enum to string for `Pay` **(breaking change)**


[2018-11-30] Version 3.25.0
----------------------------
**Api**
- Add `interactive_data` optional param to Messages create request

**Authy**
- Required authentication for `/v1/Forms/{type}` endpoint **(breaking change)**
- Removed `Challenge.reason` to `Challenge.responded_reason`
- Removed `verification_sid` from Challenge responses
- Removed `config` param from the Factor creation
- Replaced all occurrences of `FactorType` and `FormType` in favor of a unified `Type` **(breaking change)**

**Chat**
- Add Member attributes

**Preview**
- Removed `Authy` version from `preview` subdomain in favor to `authy` subdomain. **(breaking change)**

**Verify**
- Add `CustomCode` optional parameter on Verication creation.


[2018-11-16] Version 3.24.0
----------------------------
**Messaging**
- Session API

**Twiml**
- Change `master-card` to `mastercard` as `cardType` for `Pay` and `Prompt`, remove attribute `credential_sid` from `Pay` **(breaking change)**


[2018-10-28] Version 3.23.2
----------------------------
**Api**
- Add new Balance resource:
    - url: '/v1/Accounts/{account sid}/Balance'
    - supported methods: GET
    - returns the balance of the account

**Proxy**
- Add chat_instance_sid to Service

**Verify**
- Add `Locale` optional parameter on Verification creation.


[2018-10-15] Version 3.23.1
----------------------------
**Api**
- Add <Pay> Verb Transactions category to usage records

**Twiml**
- Add support for `Pay` verb


[2018-10-15] Version 3.23.0
----------------------------
**Library**
- PR #389: Export TwilioClient in typescript definitions. Thanks to @ewisuri!

**Api**
- Add `coaching` and `call_sid_to_coach` to participant properties, create and update requests.

**Authy**
- Set public library visibility, and added PII stanza
- Dropped support for `FactorType` param given new Factor prefixes **(breaking change)**
- Supported `DELETE` actions for Authy resources
- Move Authy Services resources to `authy` subdomain

**Autopilot**
- Introduce `autopilot` subdomain with all resources from `preview.understand`

**Preview**
- Renamed Understand intent to task **(breaking change)**
- Deprecated Authy endpoints from `preview` to `authy` subdomain

**Taskrouter**
- Allow TaskQueue ReservationActivitySid and AssignmentActivitySid to not be configured for MultiTask Workspaces

**Verify**
- Add `LookupEnabled` optional parameter on Service resource creation or update.
- Add `SendDigits` optional parameter on Verification creation.
- Add delete action on Service resourse.

**Twiml**
- Add custom parameters to TwiML `Client` noun and renamed the optional `name` field to `identity`. This is a breaking change in Ruby, and applications will need to transition from `dial.client ''` and `dial.client 'alice'` formats to `dial.client` and `dial.client(identity: alice)` formats. **(breaking change)**


[2018-10-04] Version 3.22.0
----------------------------
**Preview**
- Renamed response headers for Challenge and Factors Signatures

**Video**
- [Composer] Add Composition Hook resources

**Twiml**
- Add `debug` to `Gather`
- Add `participantIdentity` to `Room`


[2018-09-28] Version 3.21.0
----------------------------
**Library**
- PR #385: Include TTL option in ClientCapability. Thanks to @daviddelucca!

**Api**
- Set `call_sid_to_coach` parameter in participant to be `preview`

**Preview**
- Supported `totp` in Authy preview endpoints
- Allowed `latest` in Authy Challenges endpoints

**Voice**
- changed path param name from parent_iso_code to iso_code for highrisk_special_prefixes api **(breaking change)**
- added geo permissions public api


[2018-09-21] Version 3.20.0
----------------------------
**Library**
- PR #386: Close connections unless the header says otherwise. Thanks to @cjcodes!
- PR #377: Fix TypeScript related issues. Thanks to @dkundel!

**Api**
- Add `call_sid_to_coach` parameter to participant create request
- Add `voice_receive_mode` param to IncomingPhoneNumbers create

**Preview**
- Add `Form` resource to Authy preview given a `form_type`
- Add Authy initial api-definitions in the 4 main resources: Services, Entities, Factors, Challenges

**Pricing**
- add voice_numbers resource (v2)

**Verify**
- Move from preview to beta **(breaking change)**

**Video**
- [Recordings] Expose `offset` property in resource


[2018-08-23] Version 3.19.2
----------------------------
**Library**
- PR #372: Tests for typescript. Thanks to @ekarson!

**Api**
- Add Proxy Active Sessions category to usage records

**Chat**
- Add User Channel instance resource

**Preview**
- Add `Actions` endpoints and remove `ResponseUrl` from assistants on the Understand api

**Pricing**
- add voice_country resource (v2)


[2018-08-09] Version 3.19.1
----------------------------
**Preview**
- Add new Intent Statistics endpoint
- Remove `ttl` from Assistants

**Studio**
- Studio is now GA


[2018-08-03] Version 3.19.0
----------------------------
**Library**
- PR #371: Add test for attributes with dashes. Thanks to @ekarson!
- PR #366: Tag and push Docker latest image when deploying with TravisCI. Thanks to @jonatasbaldin!

**Api**
- Add support for sip domains to map credential lists for registrations

**Chat**
- Make message From field updatable
- Add REST API webhooks

**Notify**
- Removing deprecated `segments`, `users`, `segment_memberships`, `user_bindings` classes from helper libraries. **(breaking change)**

**Preview**
- Remove `ttl` from Assistants

**Proxy**
- Enable setting a proxy number as reserved

**Video**
- Add `group-small` room type

**Twiml**
- Add `Connect` and `Room` for Programmable Video Rooms
- Add support for SSML lang tag on Say verb


[2018-07-16] Version 3.18.0
----------------------------
**Library**
- PR #365: Add a request body validator. Thanks to @cjcodes!

**Twiml**
- Add support for SSML on Say verb, the message body is changed to be optional **(breaking change)**


[2018-07-11] Version 3.17.6
----------------------------
**Library**
- PR #362: Remove old Precise env and sudo flag on TravisCI. Thanks to @jonatasbaldin!

**Api**
- Add `cidr_prefix_length` param to SIP IpAddresses API

**Studio**
- Add new /Execution endpoints to begin Engagement -> Execution migration

**Video**
- [Rooms] Allow deletion of individual recordings from a room


[2018-07-05] Version 3.17.5
----------------------------
**Library**
- PR #358: Add Dockerfile and related changes to build the Docker image. Thanks to @jonatasbaldin!
- PR #361: Regenerate with structured params/properties. Thanks to @ekarson!

**Api**
- Release `Call Recording Controls` feature support in helper libraries
- Add Voice Insights sub-category keys to usage records


[2018-06-21] Version 3.17.4
----------------------------
**Library**
- PR #359: Add test for mixed content. Thanks to @ekarson!
- PR #357: Allow creating generic twiml nodes. Thanks to @cjcodes!

**Api**
- Add Fraud Lookups category to usage records

**Video**
- Allow user to set `ContentDisposition` when obtaining media URLs for Room Recordings and Compositions
- Add Composition Settings resource


[2018-06-15] Version 3.17.3
----------------------------
**Library**
- PR #354: Add validateSslCertificate to node client. Thanks to @mbichoffe!
- PR #355: Add addText method to TwiML classes. Thanks to @ekarson!
- PR #356: Update nsp to latest. Thanks to @ekarson!

**Twiml**
- Add methods to helper libraries to inject arbitrary text under a TwiML node


[2018-06-05] Version 3.17.2
----------------------------
**Library**
- PR #353: Update package-lock.json. Thanks to @cjcodes!

**Chat**
- Add Binding and UserBinding documentation

**Lookups**
- Add back support for `fraud` lookup type


[2018-05-25] Version 3.17.1
----------------------------
**Library**
- PR #349: Update Contributing section in README.md. Thanks to @dkundel!
- PR #347: Update dependencies to fix vulnerabilities (#343). Thanks to @dkundel!
- PR #351: Update request dependency. Thanks to @cjcodes!

**Api**
- Add more programmable video categories to usage records
- Add 'include_subaccounts' parameter to all variation of usage_record fetch

**Studio**
- Add endpoint to delete engagements

**Trunking**
- Added cnam_lookup_enabled parameter to Trunk resource.
- Added case-insensitivity for recording parameter to Trunk resource.


[2018-05-11] Version 3.17.0
----------------------------
**Library**
- PR #340: Update request version RE sec. advisory #606. Thanks to @cjcodes!

**Chat**
- Add Channel Webhooks resource

**Monitor**
- Update event filtering to support date/time **(breaking change)**

**Wireless**
- Updated `maturity` to `ga` for all wireless apis


[2018-04-28] Version 3.16.0
----------------------------
**Library**
- PR #337: Upgrade lodash. Thanks to @YasharF!

**Video**
- Redesign API by adding custom `VideoLayout` object. **(breaking change)**


[2018-04-20] Version 3.15.1
----------------------------
**Twiml**
- Gather input Enum: remove unnecessary "dtmf speech" value as you can now specify multiple enum values for this parameter and both "dtmf" and "speech" are already available.


[2018-04-13] Version 3.15.0
----------------------------
**Library**
- PR #334: Add incoming.allow to AccessToken VoiceGrant. Thanks to @ryan-rowland!
- PR #335: use _.isDate to check if object is a Date object. Thanks to @joliveros!

**Preview**
- Support for Understand V2 APIs - renames various resources and adds new fields

**Studio**
- Change parameters type from string to object in engagement resource

**Video**
- [Recordings] Change `size` type to `long`. **(breaking change)**


[2018-03-22] Version 3.14.0
----------------------------
**Lookups**
- Disable support for `fraud` lookups *(breaking change)*

**Preview**
- Add `BuildDuration` and `ErrorCode` to Understand ModelBuild

**Studio**
- Add new /Context endpoint for step and engagement resources.


[2018-03-12] Version 3.13.1
----------------------------
**Api**
- Add `caller_id` param to Outbound Calls API
- Release `trim` recording Outbound Calls API functionality in helper libraries

**Video**
- [composer] Add `room_sid` to Composition resource.

**Twiml**
- Adds support for passing in multiple input type enums when setting `input` on `Gather`


[2018-03-02] Version 3.13.0
----------------------------
**Library**
- Add `toJSON` methods on all instance objects to allow serialization to json and remove circular references.

**Studio**
- Add new /Context endpoint for step and engagement resources. Removes the context property from existing step and engagement resources. *(breaking change)*


[2018-02-26] Version 3.12.0
----------------------------
**Important Notice**
- Node v0.12 is no longer supported.

**Api**
- Add `trim` param to Outbound Calls API

**Lookups**
- Add support for `fraud` lookup type

**Numbers**
- Initial Release

**Video**
- [composer] Add `SEQUENCE` value to available layouts, and `trim` and `reuse` params.


[2018-02-09] Version 3.11.3
----------------------------
**Api**
- Add `AnnounceUrl` and `AnnounceMethod` params for conference announce

**Chat**
- Add support to looking up user channels by identity in v1


[2018-01-30] Version 3.11.2
----------------------------
**Api**
- Add `studio-engagements` usage key

**Preview**
- Remove Studio Engagement Deletion

**Studio**
- Initial Release

**Video**
- [omit] Beta: Allow updates to `SubscribedTracks`.
- Add `SubscribedTracks`.
- Add track name to Video Recording resource
- Add Composition and Composition Media resources


[2018-01-22] Version 3.11.1
----------------------------
**Library**
- PR #315: Add 'forever' as an option to RequestClient request method. Thanks @vzhidal!
- PR #311: Fix X-Twilio-Signature validation when URL has '?'. Thanks @alexcchan!
- PR #305: Update momentjs to address NSP 532 ReDoS advisory. Thanks @jhdielman!

**Api**
- Add `conference_sid` property on Recordings
- Add proxy and sms usage key

**Chat**
- Make user channels accessible by identity
- Add notifications logs flag parameter

**Fax**
- Added `ttl` parameter
  `ttl` is the number of minutes a fax is considered valid.

**Preview**
- Add `call_delay`, `extension`, `verification_code`, and `verification_call_sids`.
- Add `failure_reason` to HostedNumberOrders.
- Add DependentHostedNumberOrders endpoint for AuthorizationDocuments preview API.


[2017-12-15] Version 3.11.0
----------------------------
**Api**
- Add `voip`, `national`, `shared_cost`, and `machine_to_machine` sub-resources to `/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{IsoCountryCode}/`
- Add programmable video keys

**Preview**
- Add `verification_type` and `verification_document_sid` to HostedNumberOrders.

**Proxy**
- Fixed typo in session status enum value

**Twiml**
- Fix Dial record property incorrectly typed as accepting TrimEnum values when it actually has its own enum of values. *(breaking change)*
- Add `priority` and `timeout` properties to Task TwiML.
- Add support for `recording_status_callback_event` for Dial verb and for Conference


[2017-12-01] Version 3.10.1
----------------------------
**Api**
- Use the correct properties for Dependent Phone Numbers of an Address *(breaking change)*
- Update Call Recordings with the correct properties

**Preview**
- Add `status` and `email` query param filters for AuthorizationDocument list endpoint

**Proxy**
- Added DELETE support to Interaction
- Standardized enum values to dash-case
- Rename Service#friendly_name to Service#unique_name

**Video**
- Remove beta flag from `media_region` and `video_codecs`

**Wireless**
- Bug fix: Changed `operator_mcc` and `operator_mnc` in `DataSessions` subresource from `integer` to `string`


[2017-11-17] Version 3.10.0
----------------------------
**Sync**
- Add TTL support for Sync objects *(breaking change)*
  - The required `data` parameter on the following actions is now optional: "Update Document", "Update Map Item", "Update List Item"
  - New actions available for updating TTL of Sync objects: "Update List", "Update Map", "Update Stream"

**Video**
- [bi] Rename `RoomParticipant` to `Participant`
- Add Recording Settings resource
- Expose EncryptionKey and MediaExternalLocation properties in Recording resource


[2017-11-13] Version 3.9.3
---------------------------
**Accounts**
- Add AWS credential type

**Preview**
- Removed `iso_country` as required field for creating a HostedNumberOrder.

**Proxy**
- Added new fields to Service: geo_match_level, number_selection_behavior, intercept_callback_url, out_of_session_callback_url


[2017-11-03] Version 3.9.2
---------------------------
**Api**
- Add programmable video keys

**Video**
- Add `Participants`


[2017-10-27] Version 3.9.1
---------------------------
**Chat**
- Add Binding resource
- Add UserBinding resource


[2017-10-20] Version 3.9.0
---------------------------
**TwiML**
- Update all TwiML Resources with latest parameters
- Autogenerate TwiML resources for faster updates

**Api**
- Add `address_sid` param to IncomingPhoneNumbers create and update
- Add 'fax_enabled' option for Phone Number Search


[2017-10-13] Version 3.8.1
---------------------------
**Api**
- Add `smart_encoded` param for Messages
- Add `identity_sid` param to IncomingPhoneNumbers create and update

**Preview**
- Make 'address_sid' and 'email' optional fields when creating a HostedNumberOrder
- Add AuthorizationDocuments preview API.

**Proxy**
- Initial Release

**Wireless**
- Added `ip_address` to sim resource


[2017-10-06] Version 3.8.0
---------------------------
**Preview**
- Add `acc_security` (authy-phone-verification) initial api-definitions

**Taskrouter**
- [bi] Less verbose naming of cumulative and real time statistics


[2017-09-28] Version 3.7.0
---------------------------
**Chat**
- Make member accessible through identity.
- Make channel subresources accessible by channel unique name.
- Set get list 'max_page_size' parameter to 100.
- Add service instance webhook retry configuration.
- Add media message capability.
- Make body an optional parameter on Message creation.

**Notify**
- `data`, `apn`, `gcm`, `fcm`, `sms` parameters in `Notifications` create resource are objects instead of strings. *(breaking change)*

**Taskrouter**
- Add new query ability by TaskChannelSid or TaskChannelUniqueName.
- Move Events, Worker, Workers endpoint over to CPR.
- Add new RealTime and Cumulative Statistics endpoints.

**Video**
- Create should allow an array of video_codecs.
- Add video_codecs as a property of room to make it externally visible.


[2017-09-15] Version 3.6.7
---------------------------
**Api**
- Add `sip_registration` property on SIP Domains
- Add new video and market usage category keys
- Support transferring IncomingPhoneNumbers between accounts.


[2017-09-01] Version 3.6.6
---------------------------
- Add lastResponse and lastRequest to Http::Client

[2017-09-01] Version 3.6.5
---------------------------
**Sync**
- Add support for Streams

**Wireless**
- Added DataSessions sub-resource to Sims.


[2017-08-25] Version 3.6.4
---------------------------
**Api**
- Update `status` enum for Recordings to include 'failed'
- Add `error_code` property on Recordings

**Chat**
- Add mutable parameters for channel, members and messages

**Video**
- New `media_region` parameter when creating a room, which controls which region media will be served out of.
- Add `video_codec` enum and `video_codecs` parameter, which can be set to either `VP8` or `H264` during room creation.


[2017-08-18] Version 3.6.3
---------------------------
**Api**
- Add VoiceReceiveMode {'voice', 'fax'} option to IncomingPhoneNumber UPDATE requests

**Chat**
- Add channel message media information
- Add service instance message media information

**Preview**
- Removed 'email' from bulk_exports configuration api [bi]. No migration plan needed because api has not been used yet.
- Add AvailableNumbers resource.
- Add DeployedDevices.

**Sync**
- Add support for Service Instance unique names


[2017-08-10] Version 3.6.2
---------------------------
**Api**
- Add New wireless usage keys added
- Add `auto_correct_address` param for Addresses create and update

**Video**
- Add `video_codec` enum and `video_codecs` parameter, which can be set to either `VP8` or `H264` during room creation.
- Restrict recordings page size to 100


[2017-07-27] Version 3.6.1
---------------------------

- Support SSL connection/session reuse.

[2017-07-27] Version 3.6.0
---------------------------
This release adds Beta and Preview products to main artifact.

Previously, Beta and Preview products were only included in the alpha artifact.
They are now being included in the main artifact to ease product
discoverability and the collective operational overhead of maintaining multiple
artifacts per library.

**Api**
- Remove unused `encryption_type` property on Recordings *(breaking change)*
- Update `status` enum for Messages to include 'accepted'

**Messaging**
- Fix incorrectly typed capabilities property for PhoneNumbers.

**Notify**
- Add `ToBinding` optional parameter on Notifications resource creation. Accepted values are json strings.

**Preview**
- Add `sms_application_sid` to HostedNumberOrders.

**Taskrouter**
- Fully support conference functionality in reservations.


[2017-07-13] Version 3.5.0
---------------------------

- Bump `jsonwebtoken` from 5.4.x to 7.4.1.
- Bump `xmlbuilder` from 8.2.2 to 9.0.1.
- Detect and fail install when node not present.

**Api**
- Update `AnnounceMethod` parameter naming for consistency

**Notify**
- Add `ToBinding` optional parameter on Notifications resource creation. Accepted values are json strings.

**Preview**
- Add `verification_attempts` to HostedNumberOrders.
- Add `status_callback_url` and `status_callback_method` to HostedNumberOrders.

**Video**
- Filter recordings by date using the parameters `DateCreatedAfter` and `DateCreatedBefore`.
- Override the default time-to-live of a recording's media URL through the `Ttl` parameter (in seconds, default value is 3600).
- Add query parameters `SourceSid`, `Status`, `DateCreatedAfter` and `DateCreatedBefore` to the convenience method for retrieving Room recordings.

**Wireless**
- Added national and international data limits to the RatePlans resource.


[2017-06-16] Version 3.4.0
--------------------------

- Remove client-side max page size validation.
- Bump moment to 2.18.1 to fix security vulnerability.
- Fix Node 0.12 tests and test against Node 8.
- Add `<Sim>` to TwiML.
- Add `locality` field to `AvailablePhoneNumbers`.
- Add `origin` field to `IncomingPhoneNumbers`.
- Add `inLocality` parameter to `AvailablePhoneNumbers`.
- Add `origin` parameter to `IncomingPhoneNumbers`.
- Add `getPage` method for reentrant paging to all list resources.

[2017-05-24] Version 3.3.0
--------------------------

- Document new TwiML parameters.

[2017-05-22] Version 3.2.0
--------------------------

- Rename room `Recordings` resource to `RoomRecordings` to avoid class name conflict (backwards incompatible).

[2017-05-19] Version 3.1.0
--------------------------

- Add video domain.


[2017-05-03] Version 3.0.0
--------------------------------
**New Major Version**

The newest version of the `twilio-node` helper library!

This version brings a host of changes to update and modernize the `twilio-node` helper library. It is auto-generated to produce a more consistent and correct product.

- [Migration Guide](https://www.twilio.com/docs/libraries/node/migration-guide)
- [Full API Documentation](https://twilio.github.io/twilio-node/)
- [General Documentation](https://www.twilio.com/docs/libraries/node)
