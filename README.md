# node-twilio

A Node.js Twilio helper library.  This client library is under active development and is not yet fully supported by Twilio.  Until we move to the 0.5.x release, please check out one of the other modules that have been updated more recently:

* [https://npmjs.org/package/twilio-js](https://npmjs.org/package/twilio-js)
* [https://npmjs.org/package/twilio-api](https://npmjs.org/package/twilio-api)

## Roadmap

The existing "twilio" node module in npm represents the 0.4.x version, whose last major update came in August 2011.  The original repository for this module is [here](https://github.com/sjwalter/node-twilio).  This version of the module will remain in a special `0.4.x` branch, for those users and projects still depending on that version of the API.

New development, working toward an eventual 1.0 release, will be on the master branch.  Planned feature releases are:

* 0.5.x - A revamp of the REST client interface (API changes possible in future releases)
* 0.6.x - A revamp of the TwiML generation interface (API changes possible in future releases)
* 0.7.x - Addition of capability token generation for use with Twilio Client (API changes possible in future releases)
* 1.x - Feature complete for REST API integration, TwiML generation, and Twilio Client back end support (API locked, no breaking changes in 1.x releases)

Questions? Contact [kwhinnery@twilio.com](mailto:kwhinnery@twilio.com).

Looking for 0.4.x documentation?  That's [here](https://github.com/kwhinnery/twilio-node/blob/master/README-0-3-x.md).