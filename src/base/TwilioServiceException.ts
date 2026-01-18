interface ValidationError {
  detail: string;
  pointer: string;
}

interface TwilioServiceErrorResponse {
  type: string;
  title: string;
  status: number;
  detail?: string;
  instance?: string;
  code: number;
  errors?: ValidationError[];
}

export default class TwilioServiceException
  extends Error
  implements TwilioServiceErrorResponse
{
  type: string;
  title: string;
  status: number;
  detail?: string;
  instance?: string;
  code: number;
  errors?: ValidationError[];

  constructor(response: any) {
    const isResponseBodyString = typeof response.body == "string";
    const body = isResponseBodyString
      ? parseResponseBody(response.body)
      : response.body;

    // Initialize status first for the error message
    const status = body?.status || response.statusCode;

    super(`[HTTP ${status}] ${body?.title || "Failed to execute request"}`);

    // Set all required properties
    this.type = body?.type || "";
    this.title = body?.title || "Failed to execute request";
    this.status = status;
    this.code = body?.code || 0;

    // Set optional properties
    if (body?.detail) {
      this.detail = body.detail;
    }
    if (body?.instance) {
      this.instance = body.instance;
    }
    if (body?.errors) {
      this.errors = body.errors;
    }
  }

  /**
   * Check if a response body matches the RFC-9457 structure
   * @param body - The response body to check
   * @returns true if the body has the required RFC-9457 fields
   */
  static isRFC9457Response(body: any): boolean {
    if (!body || typeof body !== "object") {
      return false;
    }

    // Check for required fields according to the spec
    return (
      typeof body.type === "string" &&
      typeof body.title === "string" &&
      typeof body.status === "number" &&
      typeof body.code === "number"
    );
  }
}

function parseResponseBody(
  response_body: string
): TwilioServiceErrorResponse | null {
  let body = null;
  try {
    body = JSON.parse(response_body);
  } catch (catchError) {
    body = null;
  }

  return body;
}
