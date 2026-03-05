import { vi, MockInstance } from "vitest";
import { TokenAuthStrategy } from "../../../src/auth_strategy/TokenAuthStrategy";
import { ApiTokenManager } from "../../../src/http/bearer_token/ApiTokenManager";
import { AccessToken } from "../../../src/jwt/AccessToken";

describe("TokenAuthStrategy constructor", function () {
  const clientId = "clientId";
  const clientSecret = "clientSecret";
  const grantType = "client_credentials";

  const tokenManager = new ApiTokenManager({
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
  });
  const tokenAuthStrategy = new TokenAuthStrategy(tokenManager);

  const initialHttpProxyValue = process.env.HTTP_PROXY;
  let fetchSpy: MockInstance<typeof global.fetch>;

  beforeEach(() => {
    fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          access_token: "accessTokenValue",
          token_type: "Bearer",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      )
    );
  });

  afterEach(() => {
    fetchSpy.mockRestore();
    if (initialHttpProxyValue) {
      process.env.HTTP_PROXY = initialHttpProxyValue;
    } else {
      delete process.env.HTTP_PROXY;
    }
  });

  it("Should have token as its authType", function () {
    expect(tokenAuthStrategy.getAuthType()).toEqual("token");
  });

  it("Should check token expiry", function () {
    const accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    const keySid = "SKb5aed9ca12bf5890f37930e63cad6d38";
    const token = new AccessToken(accountSid, keySid, "secret", {
      identity: "ID@example.com",
    });
    expect(tokenAuthStrategy.isTokenExpired(token.toJwt())).toBe(false);
  });

  it("Should return token auth string", async function () {
    const authString = await tokenAuthStrategy.getAuthString();
    expect(authString).toEqual(`Bearer accessTokenValue`);
  });

  it("Should return true for requiresAuthentication", function () {
    expect(tokenAuthStrategy.requiresAuthentication()).toBe(true);
  });
});

describe("TokenAuthStrategy error response", function () {
  const clientId = "clientId";
  const clientSecret = "clientSecret";
  const grantType = "client_credentials";

  const tokenManager = new ApiTokenManager({
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
  });
  const tokenAuthStrategy = new TokenAuthStrategy(tokenManager);

  let fetchSpy: MockInstance<typeof global.fetch>;
  const initialHttpProxyValue = process.env.HTTP_PROXY;

  beforeEach(() => {
    fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          message: "Invalid Credentials",
        }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" },
        }
      )
    );
  });

  afterEach(() => {
    fetchSpy.mockRestore();
    if (initialHttpProxyValue) {
      process.env.HTTP_PROXY = initialHttpProxyValue;
    } else {
      delete process.env.HTTP_PROXY;
    }
  });

  it("Should return error", async function () {
    await expect(tokenAuthStrategy.getAuthString()).rejects.toThrow(
      "Failed to fetch access token: Invalid Credentials"
    );
  });
});
