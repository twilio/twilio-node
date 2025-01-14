import { getExpectedTwilioSignature, validateRequest } from "../../../src";

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
  });
});
