import OrgsTokenManager from "../../../../src/http/bearer_token/OrgsTokenManager";
import axios from "axios";
import { jest } from "@jest/globals";

function createMockAxios(promiseHandler: Promise<any>) {
  const instance = () => promiseHandler;
  instance.defaults = {
    headers: {
      post: {},
    },
  };
  return instance;
}

describe("OrgsTokenManager constructor", function () {
  const clientId = "clientId";
  const clientSecret = "clientSecret";
  const grantType = "client_credentials";

  const orgsTokenManager = new OrgsTokenManager({
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
  });

  const params = orgsTokenManager.getParams();

  let createSpy: jest.Spied<any>;
  const initialHttpProxyValue = process.env.HTTP_PROXY;

  beforeEach(() => {
    createSpy = jest.spyOn(axios, "create");
    createSpy.mockReturnValue(
      createMockAxios(
        Promise.resolve({
          status: 200,
          data: {
            access_token: "accessTokenValue",
            expires_in: 86400,
            id_token: null,
            refresh_token: null,
            token_type: "Bearer",
          },
        })
      )
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

  it("Should have client-credentials as its grantType", function () {
    expect(params.grantType).toEqual(grantType);
  });

  it("Should have clientId as its clientId", function () {
    expect(params.clientId).toEqual(clientId);
  });

  it("Should have clientSecret as its clientSecret", function () {
    expect(params.clientSecret).toEqual(clientSecret);
  });

  it("Should return an access token", async function () {
    const token = await orgsTokenManager.fetchToken();
    expect(token).toEqual("accessTokenValue");
  });
});

describe("OrgsTokenManager with error response", function () {
  const clientId = "clientId";
  const clientSecret = "clientSecret";
  const grantType = "client_credentials";

  const orgsTokenManager = new OrgsTokenManager({
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
  });

  const params = orgsTokenManager.getParams();

  let createSpy: jest.Spied<any>;
  const initialHttpProxyValue = process.env.HTTP_PROXY;

  beforeEach(() => {
    createSpy = jest.spyOn(axios, "create");
    createSpy.mockReturnValue(
      createMockAxios(
        Promise.resolve({
          status: 400,
          data: {
            message: "Token error",
          },
        })
      )
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

  it("Should return error message", async function () {
    await expect(orgsTokenManager.fetchToken()).rejects.toThrow(
      `Error Status Code: 400\nFailed to fetch access token: Token error`
    );
  });
});
