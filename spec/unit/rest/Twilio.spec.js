import { vi } from "vitest";
import { Twilio } from "../../../src/rest/Twilio";

describe("client", () => {
  let client;
  let fetchSpy;

  afterEach(() => {
    fetchSpy?.mockRestore();
  });

  describe("initializing", () => {
    it("should use the first arg for the username as well", () => {
      client = new Twilio("ACXXXXXXXX", "test-password");
      expect(client.username).toEqual("ACXXXXXXXX");
      expect(client.accountSid).toEqual("ACXXXXXXXX");
    });

    it("should use the first arg for the username as well and the option as the accountSid", () => {
      client = new Twilio("SKXXXXXXXX", "test-password", {
        accountSid: "ACXXXXXXXX",
      });
      expect(client.username).toEqual("SKXXXXXXXX");
      expect(client.accountSid).toEqual("ACXXXXXXXX");
    });

    it("should throw given an invalid accountSid", () => {
      expect(() => new Twilio("ADXXXXXXXX", "test-password")).toThrow(
        "must start with"
      );
      expect(() => new Twilio("SKXXXXXXXX", "test-password")).toThrow(
        "API Key"
      );
    });
  });

  describe("setting region and edge", () => {
    beforeEach(() => {
      client = new Twilio("ACXXXXXXXX", "test-password");
      fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
        new Response("test response", { status: 200 })
      );
    });

    describe("setting the region", () => {
      it("should use no region or edge by default", async () => {
        await client.request({ method: "GET", uri: "https://api.twilio.com" });
        const url = fetchSpy.mock.calls[0][0];
        expect(url).toMatch(/^https:\/\/api\.twilio\.com\//);
      });

      it("should use the default region if only edge is defined", async () => {
        client.edge = "edge";
        await client.request({ method: "GET", uri: "https://api.twilio.com" });
        const url = fetchSpy.mock.calls[0][0];
        expect(url).toMatch(/^https:\/\/api\.edge\.us1\.twilio\.com\//);
      });

      it("should use the provided region if only edge is defined and there is a provided region", async () => {
        client.edge = "edge";
        await client.request({ method: "GET", uri: "https://api.region.twilio.com" });
        const url = fetchSpy.mock.calls[0][0];
        expect(url).toMatch(/^https:\/\/api\.edge\.region\.twilio\.com\//);
      });

      it("should set the region properly if only the region is specified", async () => {
        client.region = "region";
        await client.request({ method: "GET", uri: "https://api.twilio.com" });
        const url = fetchSpy.mock.calls[0][0];
        expect(url).toMatch(/^https:\/\/api\.region\.twilio\.com\//);
      });

      it("should set the region and edge properly", async () => {
        client.edge = "edge";
        client.region = "region";
        await client.request({ method: "GET", uri: "https://api.twilio.com" });
        const url = fetchSpy.mock.calls[0][0];
        expect(url).toMatch(/^https:\/\/api\.edge\.region\.twilio\.com\//);
      });

      it("should set the region and edge properly when an edge is already included", async () => {
        client.edge = "edge2";
        await client.request({
          method: "GET",
          uri: "https://api.edge1.region.twilio.com",
        });
        const url = fetchSpy.mock.calls[0][0];
        expect(url).toMatch(/^https:\/\/api\.edge2\.region\.twilio\.com\//);
      });

      it("should set the region and edge properly when a region is already included", async () => {
        client.region = "region2";
        await client.request({ method: "GET", uri: "https://api.edge.region.twilio.com" });
        const url = fetchSpy.mock.calls[0][0];
        expect(url).toMatch(/^https:\/\/api\.edge\.region2\.twilio\.com\//);
      });

      it("should set the region properly when a region is already included", async () => {
        client.region = "region2";
        await client.request({ method: "GET", uri: "https://api.region.twilio.com" });
        const url = fetchSpy.mock.calls[0][0];
        expect(url).toMatch(/^https:\/\/api\.region2\.twilio\.com\//);
      });

      it("should set the region properly on a custom domain", async () => {
        client.region = "region2";
        await client.request({ method: "GET", uri: "https://api.domain.com" });
        const url = fetchSpy.mock.calls[0][0];
        expect(url).toMatch(/^https:\/\/api\.region2\.domain\.com\//);
      });

      it("should set the region properly when a port is included", async () => {
        client.region = "region";
        await client.request({ method: "GET", uri: "https://api.twilio.com:123" });
        const url = fetchSpy.mock.calls[0][0];
        expect(url).toMatch(/^https:\/\/api\.region\.twilio\.com:123\//);
      });
    });
  });

  describe("adding user agent extensions", () => {
    it("sets the user-agent by default", async () => {
      const client = new Twilio("ACXXXXXXXX", "test-password");
      fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
        new Response("test response", { status: 200 })
      );
      await client.request({ method: "GET", uri: "https://api.twilio.com" });
      const headers = fetchSpy.mock.calls[0][1].headers;
      expect(headers["User-Agent"]).toMatch(
        /^twilio-node\/[0-9.]+(-rc\.[0-9]+)?\s\(\w+\s\w+\)\snode\/[^\s]+$/
      );
    });

    it("allows for user-agent extensions", async () => {
      const client = new Twilio("ACXXXXXXXX", "test-password", {
        userAgentExtensions: [
          "twilio-run/2.0.0-test",
          "@twilio-labs/plugin-serverless/1.1.0-test",
        ],
      });
      fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
        new Response("test response", { status: 200 })
      );
      await client.request({ method: "GET", uri: "https://api.twilio.com" });
      const headers = fetchSpy.mock.calls[0][1].headers;
      expect(headers["User-Agent"]).toMatch(
        /^twilio-node\/[0-9.]+(-rc\.[0-9]+)?\s\(\w+\s\w+\)\snode\/[^\s]+ twilio-run\/2.0.0-test @twilio-labs\/plugin-serverless\/1.1.0-test$/
      );
    });
  });
});
