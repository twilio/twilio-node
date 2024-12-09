import NoAuthStrategy from "../../../src/auth_strategy/NoAuthStrategy";

describe("NoAuthStrategy constructor", function () {
  const noAuthStrategy = new NoAuthStrategy();

  it("Should have noauth as its authType", function () {
    expect(noAuthStrategy.getAuthType()).toEqual("noauth");
  });

  it("Should return an empty string for getAuthString", function (done) {
    noAuthStrategy.getAuthString().then(function (authString) {
      expect(authString).toEqual("");
      done();
    });
  });

  it("Should return false for requiresAuthentication", function () {
    expect(noAuthStrategy.requiresAuthentication()).toBe(false);
  });
});
