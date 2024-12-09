import AuthStrategy from "../auth_strategy/AuthStrategy";

export default abstract class CredentialProvider {
  private authType: string;
  protected constructor(authType: string) {
    this.authType = authType;
  }
  getAuthType(): string {
    return this.authType;
  }
  abstract toAuthStrategy(): AuthStrategy;
}
