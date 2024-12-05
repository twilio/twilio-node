import TokenAuthStrategy from "../../../src/auth_strategy/TokenAuthStrategy";
import ApiTokenManager from "../../../src/http/bearer_token/ApiTokenManager";
import {jest} from "@jest/globals";
import axios from "axios";
import twilio from "../../../src";

function createMockAxios(promiseHandler: Promise<any>) {
  const instance = () => promiseHandler;
  instance.defaults = {
    headers: {
      post: {},
    },
  };
  return instance;
}

describe("NoAuthStrategy constructor", function () {
  const clientId = "clientId";
  const clientSecret = "clientSecret";
  const grantType = "client_credentials";

  const tokenManager = new ApiTokenManager({
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
  });
  const tokenAuthStrategy = new TokenAuthStrategy(tokenManager);

  let createSpy: jest.Spied<any>;
  const initialHttpProxyValue = process.env.HTTP_PROXY;

  beforeEach(() => {
    createSpy = jest.spyOn(axios, 'create');
    createSpy.mockReturnValue(
        createMockAxios(
            Promise.resolve({
              status: 200,
              data: {
                "access_token": "accessTokenValue",
                "token_type": "Bearer"
              },
            }),
        ),
    );
  });

  afterEach(() => {
    createSpy.mockRestore();

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
    const token =
        new twilio.jwt.AccessToken(accountSid, keySid, "secret", {
          identity: "ID@example.com",
        });
    expect(tokenAuthStrategy.isTokenExpired(token.toJwt())).toBe(false);
  });

  it("Should return token auth string", function (done) {
    tokenAuthStrategy.getAuthString().then(function (authString) {
      expect(authString).toEqual(`Bearer accessTokenValue`);
      done();
    });
  });

  it("Should return true for requiresAuthentication", function () {
    expect(tokenAuthStrategy.requiresAuthentication()).toBe(true);
  });
});

describe("NoAuthStrategy error response", function () {
  const clientId = "clientId";
  const clientSecret = "clientSecret";
  const grantType = "client_credentials";

  const tokenManager = new ApiTokenManager({
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
  });
  const tokenAuthStrategy = new TokenAuthStrategy(tokenManager);

  let createSpy: jest.Spied<any>;
  const initialHttpProxyValue = process.env.HTTP_PROXY;

  beforeEach(() => {
    createSpy = jest.spyOn(axios, 'create');
    createSpy.mockReturnValue(
        createMockAxios(
            Promise.resolve({
              status: 403,
              data: {
                "message": "Invalid Credentials",
              },
            }),
        ),
    );
  });

  afterEach(() => {
    createSpy.mockRestore();

    if (initialHttpProxyValue) {
      process.env.HTTP_PROXY = initialHttpProxyValue;
    } else {
      delete process.env.HTTP_PROXY;
    }
  });

  it("Should return error", async function () {
    await expect(tokenAuthStrategy.getAuthString()).rejects.toThrow("Failed to fetch access token: Invalid Credentials");
  });

});
