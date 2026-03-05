import { vi, MockInstance } from "vitest";
import { ApiTokenManager } from "../../../../src/http/bearer_token/ApiTokenManager";

describe("ApiTokenManager constructor", function () {
  const clientId = "clientId";
  const clientSecret = "clientSecret";
  const grantType = "client_credentials";

  const apiTokenManager = new ApiTokenManager({
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
  });

  const params = apiTokenManager.getParams();

  let fetchSpy: MockInstance<typeof global.fetch>;
  const initialHttpProxyValue = process.env.HTTP_PROXY;

  beforeEach(() => {
    fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          access_token: "accessTokenValue",
          expires_in: 86400,
          id_token: null,
          refresh_token: null,
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
    const token = await apiTokenManager.fetchToken();
    expect(token).toEqual("accessTokenValue");
  });
});

describe("ApiTokenManager with error response", function () {
  const clientId = "clientId";
  const clientSecret = "clientSecret";
  const grantType = "client_credentials";
  const initialHttpProxyValue = process.env.HTTP_PROXY;

  let fetchSpy: MockInstance<typeof global.fetch>;
  let apiTokenManager: ApiTokenManager;

  beforeEach(() => {
    apiTokenManager = new ApiTokenManager({
      grantType: grantType,
      clientId: clientId,
      clientSecret: clientSecret,
    });
    fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          message: "Token error",
        }),
        {
          status: 400,
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

  it("Should return error message", async function () {
    await expect(apiTokenManager.fetchToken()).rejects.toThrow(
      `Error Status Code: 400\nFailed to fetch access token: Token error`
    );
  });
});
