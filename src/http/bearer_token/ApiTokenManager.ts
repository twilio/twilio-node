import TokenManager from "./TokenManager";
import {
  TokenListInstance,
  TokenListInstanceCreateOptions,
} from "../../rest/previewIam/v1/token";
import PreviewIamBase from "../../rest/PreviewIamBase";
import V1 from "../../rest/previewIam/V1";
import NoAuthCredentialProvider from "../../credential_provider/NoAuthCredentialProvider";
import { Client } from "../../base/BaseTwilio";

export default class ApiTokenManager implements TokenManager {
  private params: TokenListInstanceCreateOptions;

  constructor(params: TokenListInstanceCreateOptions) {
    this.params = params;
  }

  getParams(): TokenListInstanceCreateOptions {
    return this.params;
  }

  async fetchToken(): Promise<string> {
    const noAuthCredentialProvider =
      new NoAuthCredentialProvider.NoAuthCredentialProvider();
    const client = new Client();
    client.setCredentialProvider(noAuthCredentialProvider);

    const tokenListInstance = TokenListInstance(
      new V1(new PreviewIamBase(client))
    );
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
