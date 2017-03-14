twilio-node changelog
=====================

Version 3.0.0-rc.15
-------------

Release March 13, 2017

- Add `accounts.twilio.com` subdomain.
    - Client `accounts` property now links to `accounts.twilio.com` rather than Accounts resource on `api.twilio.com`.
- Remove obsolete `Sandbox` resource.
- Add `messaging.twilio.com` subdomain.
- Add `video.twilio.com` subdomain.
- Add Marketplace preview.
- Wireless: Rename `devices` resources to `sims`.
- Add `emergencyEnabled` and `validated` properties to Addresses.
- Add `emergencyStatus`, `emergencyAddressSid`, `trunkSid` fields to IncomingPhoneNumbers.
- Make `friendlyName` a required parameter for creating Queues.
- Add filtering by `callSid` to Recordings lists.
- Add sip regions support.
- Remove date inequality list filtering from resources that do not support it.
- Add `price` field to Recordings.
- Chat:
    - Add `secret` field to Credential
    - Add Invites resource
    - Add `channelType`, `membersCount`, `messagesCount` to Channel resource.
    - No longer allow updating Channel `type`.
    - Add `identity`, `lastConsumedMessageIndex`, `lastConsumptionTimestamp` fields to Member resource.
    - Allow updating a Member resource.
    - Add `index`, `channelSid`, `attributes` fields to Message.
    - Add `attributes`, `friendlyName`, `isOnline`, `isNotifiable` fields to Users resource.
    - Add UserChannel resource.
- Conferences:
    - Add `region` field to Conferences.
    - Support updating Conferences via the api.
    - Support adding Participants to Conferences via api.
    - Add `status` field to Participants.
- REGENERATE TO FIX DESERIALIZE DATE

Version 3.0.0-rc.8
-------------

Release July 8, 2016

- Add SMS and Facebook Messenger for Notify

Version 3.0.0-rc.7
-------------

Release June 9, 2016

- Add messaging feedback

Version 3.0.0-rc.5
-------------

Release May 26, 2016

- Add wireless preview

Version 3.0.0-rc.3
-------------

Release March 28, 2016

- Add notifications.twilio.com subdomain
