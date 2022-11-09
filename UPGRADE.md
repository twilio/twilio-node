# Upgrade Guide

_All `MAJOR` version bumps will have upgrade notes posted here._

[2022-11-16] 3.x.x to 4.x.x
-----------------------------

* Supported Node.js versions updated
  * Upgrade to Node.js >= 14
  * Dropped support for Node.js < 14 ([#791](https://github.com/twilio/twilio-node/pull/791))
  * Added support for Node.js 18 ([#794](https://github.com/twilio/twilio-node/pull/794))
* Lazy loading enabled by default ([#752](https://github.com/twilio/twilio-node/pull/752))
  * Required Twilio modules now lazy load by default
  * See the [README](README.md) for how to disable lazy loading
* JWT token building deprecations
  * `ConversationsGrant` has been deprecated in favor of `VoiceGrant` ([#783](https://github.com/twilio/twilio-node/pull/783))
  * `IpMessagingGrant` has been removed ([#784](https://github.com/twilio/twilio-node/pull/784))
* TwiML function deprecations ([#788](https://github.com/twilio/twilio-node/pull/788))
  * `Refer.referSip()` replaced by `Refer.sip()`
  * `ssmlBreak()` replaced by `break_()`
  * `ssmlEmphasis()` replaced by `emphasis()`
  * `ssmlLang()` replaced by `lang()`
  * `ssmlP()` replaced by `p()`
  * `ssmlPhoneme()` replaced by `phoneme()`
  * `ssmlProsody()` replaced by `prosody()`
  * `ssmlS()` replaced by `s()`
  * `ssmlSayAs()` replaced by `sayAs()`
  * `ssmlSub()` replaced by `sub()`
  * `ssmlW()` replaced by `w()`
    * Old:
    ```js
    const response = new VoiceResponse();
    const say = response.say("Hello");
    say.ssmlEmphasis("you");
    ```
    * New:
    ```js
    const response = new VoiceResponse();
    const say = response.say("Hello");
    say.emphasis("you");
    ```
* TaskRouter Workers Statistics operations updated ([#820](https://github.com/twilio/twilio-node/pull/820))
  * Cumulative and Real-Time Workers Statistics no longer accept a WorkerSid
  * `GET /v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics`
    * Old: `client.taskrouter.v1.workspaces('WS...').workers('WK...).cumulativeStatistics()`
    * New: `client.taskrouter.v1.workspaces('WS...').workers.cumulativeStatistics()`
  * `GET /v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics`
    * Old: `client.taskrouter.v1.workspaces('WS...').workers('WK...).realTimeStatistics()`
    * New: `client.taskrouter.v1.workspaces('WS...').workers.realTimeStatistics()`

[2017-05-22] 3.1.x to 3.2.x
---------------------------

### CHANGED - Rename video room `Recordings` class to `RoomRecordings`

#### Rationale
- This was done to avoid a class name conflict with another resource.
- Client code should be unaffected unless you manipulate the Recording/RoomRecordings class directly. Accessing room recording metadata via the client should work the same way as before.
