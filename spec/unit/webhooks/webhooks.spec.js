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

    describe("when the url is validated as received, without re-encoding", () => {
      const cases = [
        [
          "a space encoded as + and an unescaped single quote",
          "/path?name=William+O'hara",
        ],
        [
          "an encoded +, a space encoded as + and an unescaped single quote",
          "/validation_test?phoneNumber=%2B17083787857&name=James+O'hara&accountSid=AC123",
        ],
        ["unescaped sub-delimiters", "/path?q=a+(b)!*'c"],
        ["an unencoded question mark in the path", "/rtc/a?b?n=J+O'h"],
      ];

      cases.forEach(([description, pathAndQuery]) => {
        describe(`with ${description}`, () => {
          it("should return true when the target url is identical to the signed url", () => {
            const url = "https://example.com" + pathAndQuery;

            const signature = getExpectedTwilioSignature(authToken, url, {});

            expect(validateRequest(authToken, signature, url, {})).toBe(true);
          });

          it("should return true when only the target url contains the port", () => {
            const signature = getExpectedTwilioSignature(
              authToken,
              "https://example.com" + pathAndQuery,
              {}
            );
            const targetUrl = "https://example.com:443" + pathAndQuery;

            expect(validateRequest(authToken, signature, targetUrl, {})).toBe(
              true
            );
          });

          it("should return true when only the signed url contains the port", () => {
            const signature = getExpectedTwilioSignature(
              authToken,
              "https://example.com:443" + pathAndQuery,
              {}
            );
            const targetUrl = "https://example.com" + pathAndQuery;

            expect(validateRequest(authToken, signature, targetUrl, {})).toBe(
              true
            );
          });
        });
      });

      it("should toggle the standard port for http urls", () => {
        const pathAndQuery = "/path?name=William+O'hara";
        const signature = getExpectedTwilioSignature(
          authToken,
          "http://example.com:80" + pathAndQuery,
          {}
        );

        expect(
          validateRequest(
            authToken,
            signature,
            "http://example.com" + pathAndQuery,
            {}
          )
        ).toBe(true);
      });

      it("should toggle the port after userinfo and on IPv6 hosts", () => {
        const pathAndQuery = "/path?name=William+O'hara";
        [
          ["https://user:pw@example.com:443", "https://user:pw@example.com"],
          ["https://[::1]:443", "https://[::1]"],
        ].forEach(([signedOrigin, targetOrigin]) => {
          const signature = getExpectedTwilioSignature(
            authToken,
            signedOrigin + pathAndQuery,
            {}
          );

          expect(
            validateRequest(
              authToken,
              signature,
              targetOrigin + pathAndQuery,
              {}
            )
          ).toBe(true);
        });
      });

      it("should return false when a query value differs", () => {
        const signature = getExpectedTwilioSignature(
          authToken,
          "https://example.com/path?name=William+O'hara",
          {}
        );

        expect(
          validateRequest(
            authToken,
            signature,
            "https://example.com/path?name=William+O'hare",
            {}
          )
        ).toBe(false);
      });

      it("should return false when the host differs", () => {
        const signature = getExpectedTwilioSignature(
          authToken,
          "https://example.com/path?name=William+O'hara",
          {}
        );

        expect(
          validateRequest(
            authToken,
            signature,
            "https://example.org/path?name=William+O'hara",
            {}
          )
        ).toBe(false);
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
