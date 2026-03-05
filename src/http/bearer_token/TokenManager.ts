export abstract class TokenManager {
  abstract fetchToken(): Promise<string>;
}
