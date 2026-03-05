import { AuthStrategy } from "./AuthStrategy.js";

export class NoAuthStrategy extends AuthStrategy {
  constructor() {
    super("noauth");
  }

  getAuthString(): Promise<string> {
    return Promise.resolve("");
  }

  requiresAuthentication(): boolean {
    return false;
  }
}
