import twilio from "../../../../src";
import jwt from "jsonwebtoken";
import crypto from "crypto";

process.noDeprecation = true;

describe("ValidationToken", function () {
  const accountSid = "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const credentialSid = "CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const signingKey = "SKb5aed9ca12bf5890f37930e63cad6d38";
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });

  function getToken(alg) {
    return new twilio.jwt.ValidationToken({
      accountSid: accountSid,
      credentialSid: credentialSid,
      signingKey: signingKey,
      privateKey: privateKey,
      algorithm: alg,
    });
  }

  describe("constructor", function () {
    it("should require accountSid", function () {
      expect(() => new twilio.jwt.ValidationToken({})).toThrow(
        new Error("accountSid is required")
      );
    });
    it("should require credentialSid", function () {
      expect(
        () =>
          new twilio.jwt.ValidationToken({
            accountSid: accountSid,
          })
      ).toThrow(new Error("credentialSid is required"));
    });
    it("should require signingKey", function () {
      expect(
        () =>
          new twilio.jwt.ValidationToken({
            accountSid: accountSid,
            credentialSid: credentialSid,
          })
      ).toThrow(new Error("signingKey is required"));
    });
    it("should require privateKey", function () {
      expect(
        () =>
          new twilio.jwt.ValidationToken({
            accountSid: accountSid,
            credentialSid: credentialSid,
            signingKey: signingKey,
          })
      ).toThrow(new Error("privateKey is required"));
    });

    describe("setters", function () {
      const token = getToken();
      it("should set accountSid correctly", function () {
        expect(token.accountSid).toEqual(accountSid);
      });
      it("should set credentialSid correctly", function () {
        expect(token.credentialSid).toEqual(credentialSid);
      });
      it("should set signingKey correctly", function () {
        expect(token.signingKey).toEqual(signingKey);
      });
      it("should set privateKey correctly", function () {
        expect(token.privateKey).toEqual(privateKey);
      });
      it("should set default algorithm to RS256", function () {
        expect(token.algorithm).toEqual("RS256");
      });
      it("should set default ttl to 300", function () {
        expect(token.ttl).toEqual(300);
      });
    });
    it("should set algorithm correctly", function () {
      const token = getToken("PS256");
      expect(token.algorithm).toEqual("PS256");
    });
    it("should not accept unsupported algorithm", function () {
      expect(() => getToken("HS256")).toThrow(
        new Error("Algorithm not supported. Allowed values are RS256, PS256")
      );
    });
  });

  describe("RequestCanonicalizer", function () {
    const token = getToken();
    describe("should validate request", function () {
      it("should require url", () => {
        expect(() => token.getRequestCanonicalizer({})).toThrow(
          new Error("Url is required")
        );
      });

      it("should require method", () => {
        expect(() =>
          token.getRequestCanonicalizer({
            url: "https://example.com",
          })
        ).toThrow(new Error("Method is required"));
      });
    });

    it("should set signedHeaders correctly", function () {
      const canonicalRequest = token.getRequestCanonicalizer({
        url: "https://example.com/path",
        method: "POST",
        headers: {
          Authorization: "Basic ABC",
        },
      });
      expect(canonicalRequest.headers).toEqual({
        host: "example.com",
        authorization: "Basic ABC",
      });
    });

    describe("should convert to sha256 hex correctly", function () {
      const canonicalRequest = token.getRequestCanonicalizer({
        url: "https://example.com",
        method: "POST",
      });

      it("sha256Hex hashes a string correctly", () => {
        const input = "hello world";
        // Precomputed SHA-256 hex of 'hello world'
        const preComputedHash =
          "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";
        expect(canonicalRequest.sha256Hex(input)).toEqual(preComputedHash);
      });

      it("sha256Hex returns a hex string of length 64", () => {
        expect(canonicalRequest.sha256Hex("test")).toMatch(/^[a-f0-9]{64}$/); // Hex string, 64 characters
      });
    });

    describe("canonicalize function", function () {
      it("should canonicalize method correctly", function () {
        const canonicalRequest = token.getRequestCanonicalizer({
          url: "https://example.com",
          method: "post",
        });
        expect(canonicalRequest.getCanonicalizedMethod()).toEqual("POST");
      });

      describe("should canonicalize path correctly", function () {
        it("should set empty path string", function () {
          const canonicalRequest = token.getRequestCanonicalizer({
            url: "https://example.com",
            method: "POST",
          });
          expect(canonicalRequest.uri).toEqual("/");
        });

        it("should set path correctly", function () {
          const canonicalRequest = token.getRequestCanonicalizer({
            url: "https://example.com/path",
            method: "POST",
          });
          expect(canonicalRequest.uri).toEqual("/path");
        });

        it("should set relative path correctly", function () {
          const canonicalRequest = token.getRequestCanonicalizer({
            url: "https://example.com//foobar/../barfoo",
            method: "POST",
          });

          expect(canonicalRequest.getCanonicalizedPath()).toEqual("/barfoo");
        });

        it("should encode url correctly", function () {
          const canonicalRequest = token.getRequestCanonicalizer({
            url: "https://example.com//foo bar+/baz*qux/abc%7Edef",
            method: "POST",
          });

          expect(canonicalRequest.getCanonicalizedPath()).toEqual(
            "/foo%20bar%2B/baz%2Aqux/abc~def"
          );
        });
      });

      describe("should canonicalize query params correctly", function () {
        it("should set path without query params", function () {
          const canonicalRequest = token.getRequestCanonicalizer({
            url: "https://example.com/path?foo=bar",
            method: "POST",
          });
          expect(canonicalRequest.uri).toEqual("/path");
        });

        it("should sort and encode query params correctly", function () {
          const canonicalRequest = token.getRequestCanonicalizer({
            url: "https://example.com/path",
            method: "POST",
            params: {
              To: "+1XXXXXXXXX",
              To9: "+2XXXXXXXXX",
              PageSize: 20,
            },
          });
          expect(canonicalRequest.getCanonicalizedQueryParams()).toEqual(
            "PageSize=20&To9=%2B2XXXXXXXXX&To=%2B1XXXXXXXXX"
          );
        });
      });

      describe("should canonicalize headers correctly", function () {
        const canonicalRequest = token.getRequestCanonicalizer({
          url: "https://example.com/path",
          method: "POST",
          headers: {
            Authorization: " Basic ABC ",
          },
        });

        it("should trim headers", () => {
          expect(canonicalRequest.getCanonicalizedHeaders()).toEqual(
            "authorization:Basic ABC\nhost:example.com\n"
          );
        });

        it("should sort hashed headers", () => {
          expect(canonicalRequest.getCanonicalizedHashedHeaders()).toEqual(
            "authorization;host"
          );
        });
      });

      describe("should canonicalize request body correctly", function () {
        it("should skip empty request body", function () {
          const canonicalRequest = token.getRequestCanonicalizer({
            url: "https://example.com/path",
            method: "POST",
          });
          expect(canonicalRequest.getCanonicalizedRequestBody()).toEqual("");
        });

        it("should handle form params", function () {
          const canonicalRequest = token.getRequestCanonicalizer({
            url: "https://example.com/path",
            method: "POST",
            data: "To=%2BXXXXXXXXX&From=%2BXXXXXXXXY&Body=Hello%20from%20Twilio%21",
          });
          const preComputedHash =
            "911a4c01ce5ae65070c3bd55da064b703a30c76297c10cb53f2d17ce3e1affae";
          expect(canonicalRequest.getCanonicalizedRequestBody()).toEqual(
            preComputedHash
          );
        });

        it("should handle body params", function () {
          const canonicalRequest = token.getRequestCanonicalizer({
            url: "https://example.com/path",
            method: "POST",
            data: {
              language: "es",
              types: {
                "twilio/text": {
                  body: "Hello World",
                },
              },
            },
          });
          const preComputedHash =
            "c4f9cb487a73a84e358d4d2ccf3a7091f99a29e3dcf9821a1f82551eff12a2f1";
          expect(canonicalRequest.getCanonicalizedRequestBody()).toEqual(
            preComputedHash
          );
        });
      });

      it("should create combined canonicalized request", function () {
        // example taken from documentation - https://www.twilio.com/docs/iam/pkcv/quickstart#hashing-example
        const canonicalRequest = token.getRequestCanonicalizer({
          url: "https://api.twilio.com//2010-04-01/Accounts/AC00000000000000000000000000000000",
          method: "POST",
          headers: {
            Authorization:
              "Basic QUMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDpmb29iYXI=",
          },
          data: "FriendlyName=my new friendly name",
        });
        expect(canonicalRequest.getCanonicalizedRequestString()).toEqual(
          "POST\n" +
            "/2010-04-01/Accounts/AC00000000000000000000000000000000\n" +
            "\n" +
            "authorization:Basic QUMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDpmb29iYXI=\n" +
            "host:api.twilio.com\n" +
            "\n" +
            "authorization;host\n" +
            "b8e20591615abc52293f088c87be6df8e9b7b40c3da573f134c9132add851e2d"
        );
      });
    });
  });

  describe("fromHttpRequest", function () {
    const token = getToken("PS256");
    describe("should generate the correct JWT token", function () {
      const request = {
        url: "https://example.com/path",
        method: "POST",
      };
      var decoded = jwt.decode(token.fromHttpRequest(request), {
        complete: true,
      });

      it("should have the correct header", function () {
        expect(decoded.header).toEqual({
          cty: "twilio-pkrv;v=1",
          typ: "JWT",
          alg: "PS256",
          kid: credentialSid,
        });
      });

      it("should have the correct payload", function () {
        expect(decoded.payload.iss).toEqual(signingKey);
        expect(decoded.payload.sub).toEqual(accountSid);
        expect(decoded.payload.hrh).toEqual("authorization;host");
        expect(decoded.payload.rqh).toEqual(
          token.getRequestCanonicalizer(request).create()
        );
      });
    });

    describe("exception handling for fromHttpRequest", function () {
      const request = {
        url: "https://example.com/path",
      };
      it("should throw error when invalid request", function () {
        expect(() => token.fromHttpRequest(request)).toThrow(
            new Error("Error generating JWT token Error: Method is required")
        );
      });

    });
  });
});
