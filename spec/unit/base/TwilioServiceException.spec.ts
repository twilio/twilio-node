import TwilioServiceException from "../../../src/base/TwilioServiceException";

describe("TwilioServiceException RFC-9457 format", function () {
  describe("exception gets created from string body", function () {
    it("should create exception with required fields only", function () {
      const response = {
        statusCode: 400,
        body: JSON.stringify({
          type: "https://www.twilio.com/docs/api/errors/20001",
          title: "Invalid parameter",
          status: 400,
          code: 20001,
        }),
      };

      const exception = new TwilioServiceException(response);
      expect(exception.status).toEqual(400);
      expect(exception.type).toEqual(
        "https://www.twilio.com/docs/api/errors/20001"
      );
      expect(exception.title).toEqual("Invalid parameter");
      expect(exception.code).toEqual(20001);
      expect(exception.detail).toBeUndefined();
      expect(exception.instance).toBeUndefined();
      expect(exception.errors).toBeUndefined();
    });

    it("should create exception with all optional fields", function () {
      const response = {
        statusCode: 400,
        body: JSON.stringify({
          type: "https://www.twilio.com/docs/api/errors/20001",
          title: "Invalid parameter",
          status: 400,
          code: 20001,
          detail:
            "The 'PhoneNumber' parameter is required but was not provided.",
          instance: "/api/v1/accounts/AC123/calls/CA456",
        }),
      };

      const exception = new TwilioServiceException(response);
      expect(exception.status).toEqual(400);
      expect(exception.type).toEqual(
        "https://www.twilio.com/docs/api/errors/20001"
      );
      expect(exception.title).toEqual("Invalid parameter");
      expect(exception.code).toEqual(20001);
      expect(exception.detail).toEqual(
        "The 'PhoneNumber' parameter is required but was not provided."
      );
      expect(exception.instance).toEqual("/api/v1/accounts/AC123/calls/CA456");
    });

    it("should create exception with validation errors", function () {
      const errors = [
        {
          detail: "must be a positive integer",
          pointer: "#/age",
        },
        {
          detail: "must be 'green', 'red' or 'blue'",
          pointer: "#/profile/color",
        },
      ];

      const response = {
        statusCode: 422,
        body: JSON.stringify({
          type: "https://www.twilio.com/docs/api/errors/20001",
          title: "Validation Error",
          status: 422,
          code: 20001,
          detail: "Request validation failed",
          errors: errors,
        }),
      };

      const exception = new TwilioServiceException(response);
      expect(exception.status).toEqual(422);
      expect(exception.errors).toEqual(errors);
      expect(exception.errors?.length).toEqual(2);
      expect(exception.errors?.[0].detail).toEqual(
        "must be a positive integer"
      );
      expect(exception.errors?.[0].pointer).toEqual("#/age");
      expect(exception.errors?.[1].detail).toEqual(
        "must be 'green', 'red' or 'blue'"
      );
      expect(exception.errors?.[1].pointer).toEqual("#/profile/color");
    });

    it("should handle malformed JSON string", function () {
      const response = {
        statusCode: 400,
        body: '{type": "https://www.twilio.com/docs/api/errors/20001", "title": "Invalid',
      };

      const exception = new TwilioServiceException(response);
      expect(exception.status).toEqual(400);
      expect(exception.type).toEqual("");
      expect(exception.title).toEqual("Failed to execute request");
      expect(exception.code).toEqual(0);
    });
  });

  describe("exception gets created from JSON body", function () {
    it("should create exception with required fields only", function () {
      const response = {
        statusCode: 400,
        body: {
          type: "https://www.twilio.com/docs/api/errors/20001",
          title: "Invalid parameter",
          status: 400,
          code: 20001,
        },
      };

      const exception = new TwilioServiceException(response);
      expect(exception.status).toEqual(400);
      expect(exception.type).toEqual(
        "https://www.twilio.com/docs/api/errors/20001"
      );
      expect(exception.title).toEqual("Invalid parameter");
      expect(exception.code).toEqual(20001);
      expect(exception.detail).toBeUndefined();
      expect(exception.instance).toBeUndefined();
      expect(exception.errors).toBeUndefined();
    });

    it("should create exception with all fields", function () {
      const errors = [
        {
          detail: "must be a positive integer",
          pointer: "#/age",
        },
      ];

      const response = {
        statusCode: 422,
        body: {
          type: "https://www.twilio.com/docs/api/errors/20001",
          title: "Validation Error",
          status: 422,
          code: 20001,
          detail: "Request validation failed",
          instance: "/api/v1/accounts/AC123/messages",
          errors: errors,
        },
      };

      const exception = new TwilioServiceException(response);
      expect(exception.status).toEqual(422);
      expect(exception.type).toEqual(
        "https://www.twilio.com/docs/api/errors/20001"
      );
      expect(exception.title).toEqual("Validation Error");
      expect(exception.code).toEqual(20001);
      expect(exception.detail).toEqual("Request validation failed");
      expect(exception.instance).toEqual("/api/v1/accounts/AC123/messages");
      expect(exception.errors).toEqual(errors);
    });

    it("should use status from body if present", function () {
      const response = {
        statusCode: 400,
        body: {
          type: "https://www.twilio.com/docs/api/errors/20001",
          title: "Invalid parameter",
          status: 422, // Different from statusCode
          code: 20001,
        },
      };

      const exception = new TwilioServiceException(response);
      expect(exception.status).toEqual(422); // Should use body.status
    });

    it("should fall back to statusCode if body.status is missing", function () {
      const response = {
        statusCode: 400,
        body: {
          type: "https://www.twilio.com/docs/api/errors/20001",
          title: "Invalid parameter",
          code: 20001,
        },
      };

      const exception = new TwilioServiceException(response);
      expect(exception.status).toEqual(400); // Should use statusCode
    });

    it("should set error message using status and title", function () {
      const response = {
        statusCode: 400,
        body: {
          type: "https://www.twilio.com/docs/api/errors/20001",
          title: "Invalid parameter",
          status: 400,
          code: 20001,
        },
      };

      const exception = new TwilioServiceException(response);
      expect(exception.message).toEqual("[HTTP 400] Invalid parameter");
    });

    it("should handle missing body gracefully", function () {
      const response = {
        statusCode: 500,
        body: null,
      };

      const exception = new TwilioServiceException(response);
      expect(exception.status).toEqual(500);
      expect(exception.type).toEqual("");
      expect(exception.title).toEqual("Failed to execute request");
      expect(exception.code).toEqual(0);
      expect(exception.message).toEqual("[HTTP 500] Failed to execute request");
    });
  });

  describe("isRFC9457Response static method", function () {
    it("should return true for valid RFC-9457 response", function () {
      const body = {
        type: "https://www.twilio.com/docs/api/errors/20001",
        title: "Invalid parameter",
        status: 400,
        code: 20001,
      };

      expect(TwilioServiceException.isRFC9457Response(body)).toBe(true);
    });

    it("should return true for valid RFC-9457 response with optional fields", function () {
      const body = {
        type: "https://www.twilio.com/docs/api/errors/20001",
        title: "Invalid parameter",
        status: 400,
        code: 20001,
        detail: "Some detail",
        instance: "/api/v1/test",
        errors: [],
      };

      expect(TwilioServiceException.isRFC9457Response(body)).toBe(true);
    });

    it("should return false when type is missing", function () {
      const body = {
        title: "Invalid parameter",
        status: 400,
        code: 20001,
      };

      expect(TwilioServiceException.isRFC9457Response(body)).toBe(false);
    });

    it("should return false when title is missing", function () {
      const body = {
        type: "https://www.twilio.com/docs/api/errors/20001",
        status: 400,
        code: 20001,
      };

      expect(TwilioServiceException.isRFC9457Response(body)).toBe(false);
    });

    it("should return false when status is missing", function () {
      const body = {
        type: "https://www.twilio.com/docs/api/errors/20001",
        title: "Invalid parameter",
        code: 20001,
      };

      expect(TwilioServiceException.isRFC9457Response(body)).toBe(false);
    });

    it("should return false when code is missing", function () {
      const body = {
        type: "https://www.twilio.com/docs/api/errors/20001",
        title: "Invalid parameter",
        status: 400,
      };

      expect(TwilioServiceException.isRFC9457Response(body)).toBe(false);
    });

    it("should return false when type is not a string", function () {
      const body = {
        type: 12345,
        title: "Invalid parameter",
        status: 400,
        code: 20001,
      };

      expect(TwilioServiceException.isRFC9457Response(body)).toBe(false);
    });

    it("should return false when title is not a string", function () {
      const body = {
        type: "https://www.twilio.com/docs/api/errors/20001",
        title: 12345,
        status: 400,
        code: 20001,
      };

      expect(TwilioServiceException.isRFC9457Response(body)).toBe(false);
    });

    it("should return false when status is not a number", function () {
      const body = {
        type: "https://www.twilio.com/docs/api/errors/20001",
        title: "Invalid parameter",
        status: "400",
        code: 20001,
      };

      expect(TwilioServiceException.isRFC9457Response(body)).toBe(false);
    });

    it("should return false when code is not a number", function () {
      const body = {
        type: "https://www.twilio.com/docs/api/errors/20001",
        title: "Invalid parameter",
        status: 400,
        code: "20001",
      };

      expect(TwilioServiceException.isRFC9457Response(body)).toBe(false);
    });

    it("should return false for null body", function () {
      expect(TwilioServiceException.isRFC9457Response(null)).toBe(false);
    });

    it("should return false for undefined body", function () {
      expect(TwilioServiceException.isRFC9457Response(undefined)).toBe(false);
    });

    it("should return false for non-object body", function () {
      expect(TwilioServiceException.isRFC9457Response("string")).toBe(false);
      expect(TwilioServiceException.isRFC9457Response(123)).toBe(false);
      expect(TwilioServiceException.isRFC9457Response(true)).toBe(false);
    });

    it("should return false for array body", function () {
      expect(TwilioServiceException.isRFC9457Response([])).toBe(false);
    });
  });

  describe("error inheritance", function () {
    it("should be an instance of Error", function () {
      const response = {
        statusCode: 400,
        body: {
          type: "https://www.twilio.com/docs/api/errors/20001",
          title: "Invalid parameter",
          status: 400,
          code: 20001,
        },
      };

      const exception = new TwilioServiceException(response);
      expect(exception instanceof Error).toBe(true);
    });

    it("should be an instance of TwilioServiceException", function () {
      const response = {
        statusCode: 400,
        body: {
          type: "https://www.twilio.com/docs/api/errors/20001",
          title: "Invalid parameter",
          status: 400,
          code: 20001,
        },
      };

      const exception = new TwilioServiceException(response);
      expect(exception instanceof TwilioServiceException).toBe(true);
    });
  });
});
