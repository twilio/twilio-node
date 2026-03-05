import { CredentialProvider } from "./CredentialProvider.js";
import { TokenManager } from "../http/bearer_token/TokenManager.js";
import { AuthStrategy } from "../auth_strategy/AuthStrategy.js";
import { ApiTokenManager } from "../http/bearer_token/ApiTokenManager.js";
import { TokenAuthStrategy } from "../auth_strategy/TokenAuthStrategy.js";

export class ClientCredentialProvider extends CredentialProvider {
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
      this.tokenManager = new ApiTokenManager({
        grantType: this.grantType,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      });
    }
    return new TokenAuthStrategy(this.tokenManager);
  }
}

export class ClientCredentialProviderBuilder {
  private readonly instance: ClientCredentialProvider;

  constructor() {
    this.instance = new ClientCredentialProvider();
  }

  public setClientId(clientId: string): ClientCredentialProviderBuilder {
    this.instance.clientId = clientId;
    return this;
  }

  public setClientSecret(
    clientSecret: string
  ): ClientCredentialProviderBuilder {
    this.instance.clientSecret = clientSecret;
    return this;
  }

  public setTokenManager(
    tokenManager: TokenManager
  ): ClientCredentialProviderBuilder {
    this.instance.tokenManager = tokenManager;
    return this;
  }

  public build(): ClientCredentialProvider {
    return this.instance;
  }
}
