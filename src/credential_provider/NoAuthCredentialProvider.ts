import CredentialProvider from "./CredentialProvider";
import AuthStrategy from "../auth_strategy/AuthStrategy";
import NoAuthStrategy from "../auth_strategy/NoAuthStrategy";

export default class NoAuthCredentialProvider extends CredentialProvider {
  constructor() {
    super("client-credentials");
  }

  public toAuthStrategy(): AuthStrategy {
    return new NoAuthStrategy();
  }
}
