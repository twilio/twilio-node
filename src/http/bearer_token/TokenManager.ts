export default abstract class TokenManager {
  abstract fetchToken(): Promise<string>;
}
