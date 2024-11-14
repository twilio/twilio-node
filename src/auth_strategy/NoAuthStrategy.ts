import AuthStrategy from "./AuthStrategy";

export default class NoAuthStrategy extends AuthStrategy {
    constructor() {
        super("noauth");
    }

    getAuthString(): string {
        return "";
    }

    requiresAuthentication(): boolean {
        return false;
    }
}
