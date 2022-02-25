# twilio-node

[![NPM](https://nodei.co/npm/twilio.png?downloads=true&stars=true)](https://nodei.co/npm/twilio/)

[![Tests](https://github.com/twilio/twilio-node/actions/workflows/test-and-deploy.yml/badge.svg)](https://github.com/twilio/twilio-node/actions/workflows/test-and-deploy.yml)
[![Learn with TwilioQuest](https://img.shields.io/static/v1?label=TwilioQuest&message=Learn%20to%20contribute%21&color=F22F46&labelColor=1f243c&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAASFBMVEUAAAAZGRkcHBwjIyMoKCgAAABgYGBoaGiAgICMjIyzs7PJycnMzMzNzc3UoBfd3d3m5ubqrhfrMEDu7u739/f4vSb/3AD///9tbdyEAAAABXRSTlMAAAAAAMJrBrEAAAKoSURBVHgB7ZrRcuI6EESdyxXGYoNFvMD//+l2bSszRgyUYpFAsXOeiJGmj4NkuWx1Qeh+Ekl9DgEXOBwOx+Px5xyQhDykfgq4wG63MxxaR4ddIkg6Ul3g84vCIcjPBA5gmUMeXESrlukuoK33+33uID8TWeLAdOWsKpJYzwVMB7bOzYSGOciyUlXSn0/ABXTosJ1M1SbypZ4O4MbZuIDMU02PMbauhhHMHXbmebmALIiEbbbbbUrpF1gwE9kFfRNAJaP+FQEXCCTGyJ4ngDrjOFo3jEL5JdqjF/pueR4cCeCGgAtwmuRS6gDwaRiGvu+DMFwSBLTE3+jF8JyuV1okPZ+AC4hDFhCHyHQjdjPHUKFDlHSJkHQXMB3KpSwXNGJPcwwTdZiXlRN0gSp0zpWxNtM0beYE0nRH6QIbO7rawwXaBYz0j78gxjokDuv12gVeUuBD0MDi0OQCLvDaAho4juP1Q/jkAncXqIcCfd+7gAu4QLMACCLxpRsSuQh0igu0C9Svhi7weAGZg50L3IE3cai4IfkNZAC8dfdhsUD3CgKBVC9JE5ABAFzg4QL/taYPAAWrHdYcgfLaIgAXWJ7OV38n1LEF8tt2TH29E+QAoDoO5Ve/LtCQDmKM9kPbvCEBApK+IXzbcSJ0cIGF6e8gpcRhUDogWZ8JnaWjPXc/fNnBBUKRngiHgTUSivSzDRDgHZQOLvBQgf8rRt+VdBUUhwkU6VpJ+xcOwQUqZr+mR0kvBUgv6cB4+37hQAkXqE8PwGisGhJtN4xAHMzrsgvI7rccXqSvKh6jltGlrOHA3Xk1At3LC4QiPdX9/0ndHpGVvTjR4bZA1ypAKgVcwE5vx74ulwIugDt8e/X7JgfkucBMIAr26ndnB4UCLnDOqvteQsHlgX9N4A+c4cW3DXSPbwAAAABJRU5ErkJggg==)](https://twil.io/learn-open-source)

**The default branch name for this repository has been changed to `main` as of 07/27/2020.**

## Documentation

The documentation for the Twilio API can be found [here][apidocs].

The Node library documentation can be found [here][libdocs].

## Versions

`twilio-node` uses a modified version of [Semantic Versioning](https://semver.org) for all changes. [See this document](VERSIONS.md) for details.

### Supported Node.js Versions

This library supports the following Node.js implementations:

* Node.js 6
* Node.js 8
* Node.js 10
* Node.js 12
* Node.js 14
* Node.js 16

TypeScript is supported for TypeScript version 2.9 and above.

## Sample Usage

Check out these [code examples](examples) in JavaScript and TypeScript to get up and running quickly.

### Environment Variables

`twilio-node` supports credential storage in environment variables. If no credentials are provided when instantiating the Twilio client (e.g., `const client = require('twilio')();`), the values in following env vars will be used: `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN`.

If your environment requires SSL decryption, you can set the path to CA bundle in the env var `TWILIO_CA_BUNDLE`.

### Lazy Loading

`twilio-node` supports lazy loading required modules for faster loading time. Lazy loading is disabled by default. To enable lazy loading, simply instantiate the Twilio client with the `lazyLoading` flag set to `true`:
```javascript
var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});
```

### Specify Region and/or Edge

To take advantage of Twilio's [Global Infrastructure](https://www.twilio.com/docs/global-infrastructure), specify the target Region and/or Edge for the client:

```javascript
var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken, {
    region: 'au1',
    edge: 'sydney',
});
```

Alternatively, specify the edge and/or region after constructing the Twilio client:

```javascript
const client = require('twilio')(accountSid, authToken);
client.region = 'au1';
client.edge = 'sydney';
```

This will result in the `hostname` transforming from `api.twilio.com` to `api.sydney.au1.twilio.com`.

### Enable Debug Logging
There are two ways to enable debug logging in the default HTTP client. You can create an environment variable called `TWILIO_LOG_LEVEL` and set it to `debug` or you can set the logLevel variable on the client as debug:
```javascript
var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken, {
  logLevel: 'debug'
});
```
You can also set the logLevel variable on the client after constructing the Twilio client:
```javascript
const client = require('twilio')(accountSid, authToken);
client.logLevel = 'debug';
```

## Using webhook validation
See [example](examples/express.js) for a code sample for incoming Twilio request validation

## Handling Exceptions

For an example on how to handle exceptions in this helper library, please see the [Twilio documentation](https://www.twilio.com/docs/libraries/node/usage-guide#exceptions).

## Using a Custom HTTP Client

To use a custom HTTP client with this helper library, please see the [Twilio documentation](https://www.twilio.com/docs/libraries/node/custom-http-clients-node).

## Docker Image

The `Dockerfile` present in this repository and its respective `twilio/twilio-node` Docker image are currently used by Twilio for testing purposes only.

## Getting help

If you need help installing or using the library, please check the [Twilio Support Help Center](https://support.twilio.com) first, and [file a support ticket](https://twilio.com/help/contact) if you don't find an answer to your question.

If you've instead found a bug in the library or would like new features added, go ahead and open issues or pull requests against this repo!

## Contributing

Bug fixes, docs, and library improvements are always welcome. Please refer to our [Contributing Guide](CONTRIBUTING.md) for detailed information on how you can contribute.

> ⚠️ Please be aware that a large share of the files are auto-generated by our backend tool. You are welcome to suggest changes and submit PRs illustrating the changes. However, we'll have to make the changes in the underlying tool. You can find more info about this in the [Contributing Guide](CONTRIBUTING.md).

If you're not familiar with the GitHub pull request/contribution process, [this is a nice tutorial](https://gun.io/blog/how-to-github-fork-branch-and-pull-request/).

#### Getting Started

If you want to familiarize yourself with the project, you can start by [forking the repository](https://help.github.com/articles/fork-a-repo/) and [cloning it in your local development environment](https://help.github.com/articles/cloning-a-repository/). The project requires [Node.js](https://nodejs.org) to be installed on your machine.

After cloning the repository, install the dependencies by running the following command in the directory of your cloned repository:

```bash
npm install
```

You can run the existing tests to see if everything is okay by executing:

```bash
npm test
```

To run just one specific test file instead of the whole suite, provide a JavaScript regular expression that will match your spec file's name, like:

```bash
npm run test -- -m .\*client.\*
```

[apidocs]: https://www.twilio.com/docs/api
[libdocs]: https://twilio.github.io/twilio-node
