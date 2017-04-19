# Running the Tests

**NOTE:** The test library runs against your Twilio account. This means that it
will cost you money to run the test suite. We are working on fixing this.

1. Run `make test-install` to install jasmine-node

2. Copy config.sample.js to config.js. Copy the Account SID and Auth Token from
   your Dashboard into the file.

3. Run "make test" to run the test suite.

