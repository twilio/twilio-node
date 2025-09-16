import AuthStrategy from "./AuthStrategy";
import { encodeBase64 } from "../base/runtime";

export default class BasicAuthStrategy extends AuthStrategy {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    super("basic");
    this.username = username;
    this.password = password;
  }

  getAuthString(): Promise<string> {
    const auth = encodeBase64(this.username + ":" + this.password);
    return Promise.resolve(`Basic ${auth}`);
  }

  requiresAuthentication(): boolean {
    return true;
  }
}
