import AuthStrategy from "./AuthStrategy";

export default class BasicAuthStrategy extends AuthStrategy {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    super("basic");
    this.username = username;
    this.password = password;
  }

  getAuthString(): Promise<string> {
    const auth = Buffer.from(this.username + ":" + this.password).toString(
      "base64"
    );
    return Promise.resolve(`Basic ${auth}`);
  }

  requiresAuthentication(): boolean {
    return true;
  }
}
