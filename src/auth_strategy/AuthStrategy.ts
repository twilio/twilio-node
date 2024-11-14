export default abstract class AuthStrategy {
    private authType: string;
    protected constructor(authType: string) {
        this.authType = authType;
    }
    abstract getAuthString(): string;
    abstract requiresAuthentication(): boolean;
}
