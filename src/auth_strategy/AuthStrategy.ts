export default abstract class AuthStrategy {
  private authType: string;
  protected constructor(authType: string) {
    this.authType = authType;
  }
  abstract getAuthString(): Promise<string>;
  abstract requiresAuthentication(): boolean;
}
