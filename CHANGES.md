twilio-node changelog
=====================

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
