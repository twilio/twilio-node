import { NoAuthStrategy } from "../../../src/auth_strategy/NoAuthStrategy";

describe("NoAuthStrategy constructor", function () {
  const noAuthStrategy = new NoAuthStrategy();

  it("Should have noauth as its authType", function () {
    expect(noAuthStrategy.getAuthType()).toEqual("noauth");
  });

  it("Should return an empty string for getAuthString", async function () {
    const authString = await noAuthStrategy.getAuthString();
    expect(authString).toEqual("");
  });

  it("Should return false for requiresAuthentication", function () {
    expect(noAuthStrategy.requiresAuthentication()).toBe(false);
  });
});
