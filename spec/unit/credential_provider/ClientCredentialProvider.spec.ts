import ClientCredentialProvider from "../../../src/credential_provider/ClientCredentialProvider";
import TokenAuthStrategy from "../../../src/auth_strategy/TokenAuthStrategy";

describe("ClientCredentialProvider Constructor", () => {
  const clientCredentialProvider =
    new ClientCredentialProvider.ClientCredentialProviderBuilder()
      .setClientId("clientId")
      .setClientSecret("clientSecret")
      .build();

  it("Should have client-credentials as its authType", () => {
    expect(clientCredentialProvider.getAuthType()).toEqual(
      "client-credentials"
    );
  });

  it("Should return NoAuthStrategy as its auth strategy", () => {
    expect(clientCredentialProvider.toAuthStrategy()).toBeInstanceOf(
      TokenAuthStrategy
    );
  });
});
