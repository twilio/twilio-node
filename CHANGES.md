twilio-node changelog
=====================

[2017-07-13] Version 3.5.0-alpha.1
-----------------------------------

- Bump jsonwebtoken from 5.4.x to 7.4.1.
- Bump xmlbuilder from 8.2.2 to 9.0.1.
- Detect and fail install when node not present.

**Api**
- Update `AnnounceMethod` parameter naming for consistency

**Messaging**
- Fix incorrectly typed capabilities property for PhoneNumbers.

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


[2017-06-28] Version 3.4.0-alpha-2
----------------------------------
- Bump moment to 2.18.1 to fix security vulnerability.

[2017-06-16] Version 3.4.0-alpha-1
----------------------------------
- Remove client-side max page size validation.
- Fix Node 0.12 tests and test against Node 8.
- Add `<Sim>` to TwiML.
- Add `locality` field to `AvailablePhoneNumbers`.
- Add `origin` field to `IncomingPhoneNumbers`.
- Add `inLocality` parameter to `AvailablePhoneNumbers`.
- Add `origin` parameter to `IncomingPhoneNumbers`.
- Add `getPage` method for reentrant paging to all list resources.
- Alpha Changes:
    - Add Alexa support to Notify

[2017-05-24] Version 3.3.0-alpha-1
----------------------------------
- Nothing changed in this release. Released to keep parity with the 3.3.0 version.

[2017-05-24] Version 3.2.0-alpha-1
----------------------------------
- Add HostedNumbers preview support.
- Add Proxy preview support.
- Add BulkExports preview support.

[2017-05-03] Version 3.1.0-alpha-1
----------------------------------
 - Add video domain.
 - Add wireless domain.
 - Add sync domain.
 - Allow deletion of faxes.

[2017-05-03] Version 3.0.0-alpha-1
----------------------------------
**New Major Version**

The newest version of the `twilio-node` helper library!

This version brings a host of changes to update and modernize the `twilio-node` helper library. It is auto-generated to produce a more consistent and correct product.

- [Migration Guide](https://www.twilio.com/docs/libraries/node/migration-guide)
- [Full API Documentation](https://twilio.github.io/twilio-node/)
- [General Documentation](https://www.twilio.com/docs/libraries/node)
