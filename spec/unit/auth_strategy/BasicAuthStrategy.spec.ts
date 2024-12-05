import BasicAuthStrategy from "../../../src/auth_strategy/BasicAuthStrategy";

describe("NoAuthStrategy constructor", function () {
  const username = "username";
  const password = "password";
  const basicAuthStrategy = new BasicAuthStrategy(username, password);

  it("Should have basic as its authType", function () {
    expect(basicAuthStrategy.getAuthType()).toEqual("basic");
  });

  it("Should return basic auth string", function (done) {
    const auth = Buffer.from(username + ":" + password).toString("base64");
    basicAuthStrategy.getAuthString().then(function (authString) {
      expect(authString).toEqual(`Basic ${auth}`);
      done();
    });
  });

  it("Should return true for requiresAuthentication", function () {
    expect(basicAuthStrategy.requiresAuthentication()).toBe(true);
  });
});
