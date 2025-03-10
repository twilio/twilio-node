# Upgrade Guide

_All `MAJOR` version bumps will have upgrade notes posted here._

## [2024-03-07] 5.x.x to 6.x.x

---
### Overview

#### Twilio Node Helper Library’s major version 6.0.0 is now available.

Twiml Attribute speechModel is now of type string.


## [2024-03-07] 4.x.x to 5.x.x

---
### Overview

#### Twilio Node Helper Library’s major version 5.0.0 is now available. We ensured that you can upgrade to Node helper Library 5.0.0 version without any breaking changes of existing apis

Behind the scenes Node Helper is now auto-generated via OpenAPI with this release. This enables us to rapidly add new features and enhance consistency across versions and languages.
We're pleased to inform you that version 5.0.0 adds support for the application/json content type in the request body.

## [2023-01-25] 3.x.x to 4.x.x

---

* Supported Node.js versions updated
  * Upgrade to Node.js >= 14
  * Dropped support for Node.js < 14 ([#791](https://github.com/twilio/twilio-node/pull/791))
  * Added support for Node.js 18 ([#794](https://github.com/twilio/twilio-node/pull/794))
* Lazy loading enabled by default ([#752](https://github.com/twilio/twilio-node/pull/752))
  * Required Twilio modules now lazy load by default
  * See the [README](README.md#lazy-loading) for how to disable lazy loading
* Type changes from `object` to `Record` ([#873](https://github.com/twilio/twilio-node/pull/873))
  * Certain response properties now use the `Record` type with `string` keys
  * Including the `subresourceUris` property for v2010 APIs and the `links` properties for non-v2010 APIs
* Access Tokens
  * Creating an [AccessToken](https://www.twilio.com/docs/iam/access-tokens) requires an `identity` in the options ([#875](https://github.com/twilio/twilio-node/pull/875))
  * `ConversationsGrant` has been deprecated in favor of `VoiceGrant` ([#783](https://github.com/twilio/twilio-node/pull/783))
  * `IpMessagingGrant` has been removed ([#784](https://github.com/twilio/twilio-node/pull/784))
* TwiML function deprecations ([#788](https://github.com/twilio/twilio-node/pull/788))
  * [`<Refer>`](https://www.twilio.com/docs/voice/twiml/refer)
    * `Refer.referSip()` replaced by `Refer.sip()`
  * [`<Say>`](https://www.twilio.com/docs/voice/twiml/say/text-speech#generating-ssml-via-helper-libraries)
    * `Say.ssmlBreak()` and `Say.break_()` replaced by `Say.break()`
    * `Say.ssmlEmphasis()` replaced by `Say.emphasis()`
    * `Say.ssmlLang()` replaced by `Say.lang()`
    * `Say.ssmlP()` replaced by `Say.p()`
    * `Say.ssmlPhoneme()` replaced by `Say.phoneme()`
    * `Say.ssmlProsody()` replaced by `Say.prosody()`
    * `Say.ssmlS()` replaced by `Say.s()`
    * `Say.ssmlSayAs()` replaced by `Say.sayAs()`
    * `Say.ssmlSub()` replaced by `Say.sub()`
    * `Say.ssmlW()` replaced by `Say.w()`

      Old:

      ```js
      const response = new VoiceResponse();
      const say = response.say("Hello");
      say.ssmlEmphasis("you");
      ```

      New:

      ```js
      const response = new VoiceResponse();
      const say = response.say("Hello");
      say.emphasis("you");
      ```

* [TaskRouter Workers Statistics](https://www.twilio.com/docs/taskrouter/api/worker/statistics) operations updated ([#820](https://github.com/twilio/twilio-node/pull/820))
  * Cumulative and Real-Time Workers Statistics no longer accept a WorkerSid
  * `GET /v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics`

    Old: `client.taskrouter.v1.workspaces('WS...').workers('WK...).cumulativeStatistics()`

    New: `client.taskrouter.v1.workspaces('WS...').workers.cumulativeStatistics()`
  * `GET /v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics`

    Old: `client.taskrouter.v1.workspaces('WS...').workers('WK...).realTimeStatistics()`

    New: `client.taskrouter.v1.workspaces('WS...').workers.realTimeStatistics()`

## [2017-05-22] 3.1.x to 3.2.x

---

### CHANGED - Rename video room `Recordings` class to `RoomRecordings`

#### Rationale

* This was done to avoid a class name conflict with another resource.
* Client code should be unaffected unless you manipulate the Recording/RoomRecordings class directly. Accessing room recording metadata via the client should work the same way as before.
