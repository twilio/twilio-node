twilio-node changelog
=====================

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
