import { BasicAuthStrategy } from "../../../src/auth_strategy/BasicAuthStrategy";

describe("BasicAuthStrategy constructor", function () {
  const username = "username";
  const password = "password";
  const basicAuthStrategy = new BasicAuthStrategy(username, password);

  it("Should have basic as its authType", function () {
    expect(basicAuthStrategy.getAuthType()).toEqual("basic");
  });

  it("Should return basic auth string", async function () {
    const auth = Buffer.from(username + ":" + password).toString("base64");
    const authString = await basicAuthStrategy.getAuthString();
    expect(authString).toEqual(`Basic ${auth}`);
  });

  it("Should return true for requiresAuthentication", function () {
    expect(basicAuthStrategy.requiresAuthentication()).toBe(true);
  });
});
