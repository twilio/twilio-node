import OrgsCredentialProvider from "../../../src/credential_provider/OrgsCredentialProvider";
import TokenAuthStrategy from "../../../src/auth_strategy/TokenAuthStrategy";

describe("OrgsCredentialProvider Constructor", () => {
  const orgsCredentialProvider =
    new OrgsCredentialProvider.OrgsCredentialProviderBuilder()
      .setClientId("clientId")
      .setClientSecret("clientSecret")
      .build();

  it("Should have client-credentials as its authType", () => {
    expect(orgsCredentialProvider.getAuthType()).toEqual("client-credentials");
  });

  it("Should return TokenAuthStrategy as its auth strategy", () => {
    expect(orgsCredentialProvider.toAuthStrategy()).toBeInstanceOf(
      TokenAuthStrategy
    );
  });
});
