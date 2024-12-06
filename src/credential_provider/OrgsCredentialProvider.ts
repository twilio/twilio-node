import CredentialProvider from "./CredentialProvider";
import TokenManager from "../http/bearer_token/TokenManager";
import AuthStrategy from "../auth_strategy/AuthStrategy";
import OrgsTokenManager from "../http/bearer_token/OrgsTokenManager";
import TokenAuthStrategy from "../auth_strategy/TokenAuthStrategy";

class OrgsCredentialProvider extends CredentialProvider {
  grantType: string;
  clientId: string;
  clientSecret: string;
  tokenManager: TokenManager | null;

  constructor() {
    super("client-credentials");
    this.grantType = "client_credentials";
    this.clientId = "";
    this.clientSecret = "";
    this.tokenManager = null;
  }

  public toAuthStrategy(): AuthStrategy {
    if (this.tokenManager == null) {
      this.tokenManager = new OrgsTokenManager({
        grantType: this.grantType,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      });
    }
    return new TokenAuthStrategy(this.tokenManager);
  }
}

namespace OrgsCredentialProvider {
  export class OrgsCredentialProviderBuilder {
    private readonly instance: OrgsCredentialProvider;

    constructor() {
      this.instance = new OrgsCredentialProvider();
    }

    public setClientId(clientId: string): OrgsCredentialProviderBuilder {
      this.instance.clientId = clientId;
      return this;
    }

    public setClientSecret(
      clientSecret: string
    ): OrgsCredentialProviderBuilder {
      this.instance.clientSecret = clientSecret;
      return this;
    }

    public setTokenManager(
      tokenManager: TokenManager
    ): OrgsCredentialProviderBuilder {
      this.instance.tokenManager = tokenManager;
      return this;
    }

    public build(): OrgsCredentialProvider {
      return this.instance;
    }
  }
}

export = OrgsCredentialProvider;
