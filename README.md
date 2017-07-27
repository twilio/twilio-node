# twilio-node

A node.js Twilio helper library.

[![NPM](https://nodei.co/npm/twilio.png?downloads=true&stars=true)](https://nodei.co/npm/twilio/)

[![Build Status](https://travis-ci.org/twilio/twilio-node.svg?branch=master)](https://travis-ci.org/twilio/twilio-node)

## Recent Update

As of release 3.6.0, Beta and Developer Preview products are now exposed via
the main `twilio-node` artifact. Releases of the `alpha` branch have been
discontinued.

If you were using the `alpha` release line, you should be able to switch back
to the normal release line without issue.

If you were using the normal release line, you should now see several new
product lines that were historically hidden from you due to their Beta or
Developer Preview status. Such products are explicitly documented as
Beta/Developer Preview both in the Twilio docs and console, as well as through
in-line code documentation here in the library.

## End User Docs

For detailed usage information and API docs, head out here:

[https://www.twilio.com/docs/libraries/node](https://www.twilio.com/docs/libraries/node)

## Getting help

If you need help installing or using the library, please contact Twilio Support at help@twilio.com first. Twilio's Support staff are well-versed in all of the Twilio Helper Libraries, and usually reply within 24 hours.

If you've instead found a bug in the library or would like new features added, go ahead and open issues or pull requests against this repo!

## Contributing

Bug fixes, docs, and enhancements welcome! If you're not familiar with the GitHub pull request/contribution process, [this is a nice tutorial](http://gun.io/blog/how-to-github-fork-branch-and-pull-request/).

#### Getting Started
Fork and clone the repository. Install dependencies with:

    npm install

Run the existing test spec with `npm test`.

To run just one specific test file instead of the whole suite, provide a JavaScript regular expression that will match your spec file's name, like:

    ./node_modules/.bin/jasmine-node spec -m .\*accounts.\*

To run live tests (such as `client.live.spec.js`) against your [Twilio account](https://www.twilio.com/user/account), you will need to create a local configuration file.  In the project root directory, do the following:

* `cp config.sample.js config.js`
* Edit `config.js` with your account information, a Twilio number, and your own mobile number
* Run the live tests

#### Contributing Code

In your fork, create a new feature/bug fix branch, [per the guide listed above](http://gun.io/blog/how-to-github-fork-branch-and-pull-request/). Write a Jasmine test spec for your new feature or bug fix, and hack until it passes!  Submit a pull request, and it will be reviewed as soon as possible.

#### Contributing Docs

Right now, the docs are maintained in static HTML in the `gh-pages` branch of this repository.  We hope to switch to a more robust documentation system soon, but for the time being, you can make documentation changes by editing [index.html](https://github.com/twilio/twilio-node/blob/gh-pages/index.html) directly.



