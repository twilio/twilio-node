import NoAuthCredentialProvider from "../../../src/credential_provider/NoAuthCredentialProvider";
import NoAuthStrategy from "../../../src/auth_strategy/NoAuthStrategy";

describe("NoAuthCredentialProvider Constructor", () => {
  const noAuthCredentialProvider =
    new NoAuthCredentialProvider.NoAuthCredentialProvider();

  it("Should have client-credentials as its authType", () => {
    expect(noAuthCredentialProvider.getAuthType()).toEqual("noauth");
  });

  it("Should return NoAuthStrategy as its auth strategy", () => {
    expect(noAuthCredentialProvider.toAuthStrategy()).toBeInstanceOf(
      NoAuthStrategy
    );
  });
});
