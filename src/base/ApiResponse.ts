/**
 * API Response wrapper containing HTTP metadata
 *
 * This interface is returned by *WithHttpInfo methods and provides access to:
 * - The response data (resource instance, page, or boolean)
 * - HTTP status code
 * - Response headers
 */
export interface ApiResponse<T> {
  /**
   * The response data
   * - For create/fetch/update: Resource instance
   * - For delete/remove: boolean indicating success
   * - For page: Page object
   */
  body: T;

  /**
   * HTTP status code from the response
   * - 200: Success (fetch, update)
   * - 201: Created (create)
   * - 204: No Content (delete)
   * - 4xx/5xx: Error responses
   */
  statusCode: number;

  /**
   * Response headers as key-value pairs
   * Common headers include:
   * - Content-Type
   * - X-RateLimit-Remaining
   * - X-RateLimit-Limit
   * - X-Request-ID
   */
  headers: Record<string, string>;
}
