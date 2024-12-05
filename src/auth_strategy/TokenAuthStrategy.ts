import AuthStrategy from "./AuthStrategy";
import TokenManager from "../http/bearer_token/TokenManager";
import jwt, { JwtPayload } from "jsonwebtoken";

export default class TokenAuthStrategy extends AuthStrategy {
  private token: string;
  private tokenManager: TokenManager;

  constructor(tokenManager: TokenManager) {
    super("token");
    this.token = "";
    this.tokenManager = tokenManager;
  }

  async getAuthString(): Promise<string> {
    return this.fetchToken()
      .then((token) => {
        this.token = token;
        return `Bearer ${this.token}`;
      })
      .catch((error) => {
        throw new Error(`Failed to fetch access token: ${error.message}`);
      });
  }

  requiresAuthentication(): boolean {
    return true;
  }

  async fetchToken(): Promise<string> {
    if (
      this.token == null ||
      this.token.length === 0 ||
      this.isTokenExpired(this.token)
    ) {
      return this.tokenManager.fetchToken();
    }
    return Promise.resolve(this.token);
  }

  /**
   * Function to check if the token is expired with a buffer of 30 seconds.
   * @param token - The JWT token as a string.
   * @returns Boolean indicating if the token is expired.
   */
  isTokenExpired(token: string): boolean {
    try {
      // Decode the token without verifying the signature, as we only want to read the expiration for this check
      const decoded = jwt.decode(token) as JwtPayload;

      if (!decoded || !decoded.exp) {
        // If the token doesn't have an expiration, consider it expired
        return true;
      }

      const expiresAt = decoded.exp * 1000;
      const bufferMilliseconds = 30 * 1000;
      const bufferExpiresAt = expiresAt - bufferMilliseconds;

      // Return true if the current time is after the expiration time with buffer
      return Date.now() > bufferExpiresAt;
    } catch (error) {
      // If there's an error decoding the token, consider it expired
      return true;
    }
  }
}
