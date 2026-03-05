import { TokenManager } from "./TokenManager.js";
import {
  TokenListInstance,
  TokenListInstanceCreateOptions,
} from "../../rest/oauth/v2/token.js";
import { OauthBase } from "../../rest/OauthBase.js";
import { V2 } from "../../rest/oauth/V2.js";
import { NoAuthCredentialProvider } from "../../credential_provider/NoAuthCredentialProvider.js";
import { Client } from "../../base/BaseTwilio.js";

export class ApiTokenManager implements TokenManager {
  private params: TokenListInstanceCreateOptions;

  constructor(params: TokenListInstanceCreateOptions) {
    this.params = params;
  }

  getParams(): TokenListInstanceCreateOptions {
    return this.params;
  }

  async fetchToken(): Promise<string> {
    const noAuthCredentialProvider = new NoAuthCredentialProvider();
    const client = new Client();
    client.setCredentialProvider(noAuthCredentialProvider);

    const tokenListInstance = TokenListInstance(new V2(new OauthBase(client)));
    return tokenListInstance
      .create(this.params)
      .then((token) => {
        return token.accessToken;
      })
      .catch((error) => {
        throw new Error(
          `Error Status Code: ${error.status}\nFailed to fetch access token: ${error.message}`
        );
      });
  }
}
