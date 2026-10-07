import {
  getExpectedBodyHash,
  getExpectedTwilioSignature,
  validateBody,
  validateRequest,
} from "../../../src";

describe("webhooks", () => {
  const authToken = "s3cr3t";

  describe("validateRequest()", () => {
    it("should return false when the signature URL does not match the target URL", () => {
      const serverUrl = "https://example.com/path?test=param";
      const targetUrl = "https://example.com/path?test=param2";

      const signature = getExpectedTwilioSignature(authToken, serverUrl, {});
      const result = validateRequest(authToken, signature, targetUrl, {});

      expect(result).toBe(false);
    });

    describe("when the signature is derived from an URL with port", () => {
      it("should return true when the target url contains the port", () => {
        const serverUrl = "https://example.com:443/path?test=param";
        const targetUrl = "https://example.com:443/path?test=param";

        const signature = getExpectedTwilioSignature(authToken, serverUrl, {});
        const result = validateRequest(authToken, signature, targetUrl, {});

        expect(result).toBe(true);
      });

      it("should return true when the target url does not contain the port", () => {
        const serverUrl = "https://example.com:443/path?test=param";
        const targetUrl = "https://example.com/path?test=param";

        const signature = getExpectedTwilioSignature(authToken, serverUrl, {});
        const result = validateRequest(authToken, signature, targetUrl, {});

        expect(result).toBe(true);
      });
    });

    describe("when the signature is derived from an URL without port", () => {
      it("should return true when the target url does not contain the port", () => {
        const serverUrl = "https://example.com/path?test=param";
        const targetUrl = "https://example.com/path?test=param";

        const signature = getExpectedTwilioSignature(authToken, serverUrl, {});
        const result = validateRequest(authToken, signature, targetUrl, {});

        expect(result).toBe(true);
      });

      it("should return true when the target url contains the port", () => {
        const serverUrl = "https://example.com/path?test=param";
        const targetUrl = "https://example.com:443/path?test=param";

        const signature = getExpectedTwilioSignature(authToken, serverUrl, {});
        const result = validateRequest(authToken, signature, targetUrl, {});

        expect(result).toBe(true);
      });
    });

    describe("when the signature is derived from an URL with a query param containing an unescaped single quote", () => {
      it("should return true when the target url contains the unescaped single quote", () => {
        const serverUrl = "https://example.com/path?test=param'WithQuote";
        const targetUrl = "https://example.com/path?test=param'WithQuote";

        const signature = getExpectedTwilioSignature(authToken, serverUrl, {});
        const result = validateRequest(authToken, signature, targetUrl, {});

        expect(result).toBe(true);
      });

      it("should return true when the target url contains the escaped single quote", () => {
        const serverUrl = "https://example.com/path?test=param'WithQuote";
        const targetUrl = "https://example.com/path?test=param%27WithQuote";

        const signature = getExpectedTwilioSignature(authToken, serverUrl, {});
        const result = validateRequest(authToken, signature, targetUrl, {});

        expect(result).toBe(true);
      });
    });

    describe("when the signature is derived from an URL with a query param containing an escaped single quote", () => {
      it("should return true when the target url contains the unescaped single quote", () => {
        const serverUrl = "https://example.com/path?test=param%27WithQuote";
        const targetUrl = "https://example.com/path?test=param'WithQuote";

        const signature = getExpectedTwilioSignature(authToken, serverUrl, {});
        const result = validateRequest(authToken, signature, targetUrl, {});

        expect(result).toBe(true);
      });

      it("should return true when the target url contains the escaped single quote", () => {
        const serverUrl = "https://example.com/path?test=param%27WithQuote";
        const targetUrl = "https://example.com/path?test=param%27WithQuote";

        const signature = getExpectedTwilioSignature(authToken, serverUrl, {});
        const result = validateRequest(authToken, signature, targetUrl, {});

        expect(result).toBe(true);
      });
    });

    describe("signature comparison", () => {
      const url = "https://example.com/path?test=param";

      it("should return false when the signature differs only in its last character", () => {
        const signature = getExpectedTwilioSignature(authToken, url, {});
        const tampered =
          signature.slice(0, -1) + (signature.endsWith("A") ? "B" : "A");

        expect(validateRequest(authToken, tampered, url, {})).toBe(false);
      });

      it("should return false without throwing when the signature is shorter than expected", () => {
        const signature = getExpectedTwilioSignature(authToken, url, {});

        expect(() =>
          validateRequest(authToken, signature.slice(0, -1), url, {})
        ).not.toThrow();
        expect(
          validateRequest(authToken, signature.slice(0, -1), url, {})
        ).toBe(false);
      });

      it("should return false without throwing when the signature is longer than expected", () => {
        const signature = getExpectedTwilioSignature(authToken, url, {});

        expect(validateRequest(authToken, signature + "=", url, {})).toBe(
          false
        );
      });

      it("should return false when the signature is empty", () => {
        expect(validateRequest(authToken, "", url, {})).toBe(false);
      });
    });
  });

  describe("validateBody()", () => {
    const body = '{"property": "value", "boolean": true}';

    it("should return true when the hash matches the body", () => {
      expect(validateBody(body, getExpectedBodyHash(body))).toBe(true);
    });

    it("should return false when a same-length hash does not match", () => {
      const hash = getExpectedBodyHash(body);
      const tampered = hash.slice(0, -1) + (hash.endsWith("0") ? "1" : "0");

      expect(validateBody(body, tampered)).toBe(false);
    });

    it("should return false without throwing when the hash length differs", () => {
      const hash = getExpectedBodyHash(body);

      expect(validateBody(body, hash.slice(0, -1))).toBe(false);
      expect(validateBody(body, hash + "0")).toBe(false);
      expect(validateBody(body, "")).toBe(false);
    });

    it("should accept the hash as a Buffer", () => {
      expect(validateBody(body, Buffer.from(getExpectedBodyHash(body)))).toBe(
        true
      );
    });
  });
});
