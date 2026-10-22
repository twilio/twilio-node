import crypto from "crypto";
import fs from "fs";
import HttpsProxyAgent from "https-proxy-agent";
import path from "path";
import tls from "tls";
import RequestClient from "../../../src/base/RequestClient";
import {
  DISTRUSTED_SPKI_SHA256,
  checkServerIdentity,
  containsDistrusted,
  spkiSha256,
} from "../../../src/base/DistrustedIntermediates";

const KNOWN_SPKI =
  "ebed6475c2c2d80fcb199f3fe8dd6e6b3ce60b77eb15d4e42c3dec0c6f5b5105";
const raw = new crypto.X509Certificate(
  fs.readFileSync(path.join(__dirname, "distrusted-intermediate.pem"))
).raw;
const otherRaw = new crypto.X509Certificate(tls.rootCertificates[0]).raw;

describe("DistrustedIntermediates", function () {
  it("lists the eight compromised intermediates", function () {
    expect(DISTRUSTED_SPKI_SHA256.size).toBe(8);
  });

  it("hashes the SubjectPublicKeyInfo of a certificate", function () {
    expect(spkiSha256(raw)).toBe(KNOWN_SPKI);
  });

  it("detects a distrusted intermediate anywhere in the chain", function () {
    const root = { raw: otherRaw };
    root.issuerCertificate = root; // self-referential, like a real root
    const leaf = {
      raw: otherRaw,
      issuerCertificate: { raw, issuerCertificate: root },
    };
    expect(containsDistrusted(leaf)).toBe(true);
  });

  it("does not flag a chain without a distrusted certificate", function () {
    expect(containsDistrusted({ raw: otherRaw })).toBe(false);
    expect(containsDistrusted({ raw }, new Set(["00"]))).toBe(false);
    expect(containsDistrusted(undefined)).toBe(false);
  });

  it("checkServerIdentity rejects a distrusted chain", function () {
    const error = checkServerIdentity("example.com", { raw });
    expect(error.code).toBe("ERR_TLS_CERT_DISTRUSTED");
    expect(error.message).toBe(
      "Your certificate chain contains a distrusted intermediate certificate"
    );
  });

  it("checkServerIdentity still verifies the hostname otherwise", function () {
    const cert = { raw: otherRaw, subject: { CN: "other.example" } };
    const error = checkServerIdentity("example.com", cert);
    expect(error.code).toBe("ERR_TLS_CERT_ALTNAME_INVALID");
  });
});

describe("public export", function () {
  it("exposes checkServerIdentity for custom HTTP clients", function () {
    const twilio = require("../../../src/index");
    expect(twilio.DistrustedIntermediates.checkServerIdentity).toBe(
      checkServerIdentity
    );
  });
});

describe("RequestClient distrusted intermediates", function () {
  const initialHttpProxyValue = process.env.HTTP_PROXY;

  afterEach(function () {
    if (initialHttpProxyValue === undefined) {
      delete process.env.HTTP_PROXY;
    } else {
      process.env.HTTP_PROXY = initialHttpProxyValue;
    }
  });

  it("installs the check on the default https agent", function () {
    delete process.env.HTTP_PROXY;
    const client = new RequestClient();
    expect(client.axios.defaults.httpsAgent.options.checkServerIdentity).toBe(
      checkServerIdentity
    );
  });

  it("injects the check into the proxy agent's connect options", function () {
    process.env.HTTP_PROXY = "http://localhost:3128";
    const proto = Object.getPrototypeOf(HttpsProxyAgent("http://localhost"));
    const callback = jest.spyOn(proto, "callback").mockResolvedValue(null);
    const client = new RequestClient();
    client.axios.defaults.httpsAgent.callback({}, { host: "api.twilio.com" });
    expect(callback).toHaveBeenCalledWith(
      {},
      { host: "api.twilio.com", checkServerIdentity }
    );
    callback.mockRestore();
  });
});
