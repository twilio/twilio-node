import { CredentialProvider } from "./CredentialProvider.js";
import { AuthStrategy } from "../auth_strategy/AuthStrategy.js";
import { NoAuthStrategy } from "../auth_strategy/NoAuthStrategy.js";

export class NoAuthCredentialProvider extends CredentialProvider {
  constructor() {
    super("noauth");
  }

  public toAuthStrategy(): AuthStrategy {
    return new NoAuthStrategy();
  }
}
