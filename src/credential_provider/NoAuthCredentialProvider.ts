import CredentialProvider from "./CredentialProvider";
import AuthStrategy from "../auth_strategy/AuthStrategy";
import NoAuthStrategy from "../auth_strategy/NoAuthStrategy";

namespace NoAuthCredentialProvider {
  export class NoAuthCredentialProvider extends CredentialProvider {
    constructor() {
      super("client-credentials");
    }

    public toAuthStrategy(): AuthStrategy {
      return new NoAuthStrategy();
    }
  }
}

export = NoAuthCredentialProvider;
