import nock from "nock";
import Twilio from "../../../src/";

describe("client", () => {
  let client;

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
    });
    describe("setting the region", () => {
      it("should use no region or edge by default", () => {
        const scope = nock("https://api.twilio.com")
          .get("/")
          .reply(200, "test response");
        return client
          .request({ method: "GET", uri: "https://api.twilio.com" })
          .then(() => scope.done());
      });
      it("should use the default region if only edge is defined", () => {
        const scope = nock("https://api.edge.us1.twilio.com")
          .get("/")
          .reply(200, "test response");
        client.edge = "edge";
        return client
          .request({ method: "GET", uri: "https://api.twilio.com" })
          .then(() => scope.done());
      });
      it("should use the provided region if only edge is defined and there is a provided region", () => {
        const scope = nock("https://api.edge.region.twilio.com")
          .get("/")
          .reply(200, "test response");
        client.edge = "edge";
        return client
          .request({ method: "GET", uri: "https://api.region.twilio.com" })
          .then(() => scope.done());
      });
      it("should set the region properly if only the region is specified", () => {
        const scope = nock("https://api.region.twilio.com")
          .get("/")
          .reply(200, "test response");
        client.region = "region";
        return client
          .request({ method: "GET", uri: "https://api.twilio.com" })
          .then(() => scope.done());
      });
      it("should set the region and edge properly", () => {
        const scope = nock("https://api.edge.region.twilio.com")
          .get("/")
          .reply(200, "test response");
        client.edge = "edge";
        client.region = "region";
        return client
          .request({ method: "GET", uri: "https://api.twilio.com" })
          .then(() => scope.done());
      });
      it("should set the region and edge properly when an edge is already included", () => {
        const scope = nock("https://api.edge2.region.twilio.com")
          .get("/")
          .reply(200, "test response");
        client.edge = "edge2";
        return client
          .request({
            method: "GET",
            uri: "https://api.edge1.region.twilio.com",
          })
          .then(() => scope.done());
      });
      it("should set the region and edge properly when a region is already included", () => {
        const scope = nock("https://api.edge.region2.twilio.com")
          .get("/")
          .reply(200, "test response");
        client.region = "region2";
        return client
          .request({ method: "GET", uri: "https://api.edge.region.twilio.com" })
          .then(() => scope.done());
      });
      it("should set the region properly when a region is already included", () => {
        const scope = nock("https://api.region2.twilio.com")
          .get("/")
          .reply(200, "test response");
        client.region = "region2";
        return client
          .request({ method: "GET", uri: "https://api.region.twilio.com" })
          .then(() => scope.done());
      });
      it("should set the region properly on a custom domain", () => {
        const scope = nock("https://api.region2.domain.com")
          .get("/")
          .reply(200, "test response");
        client.region = "region2";
        return client
          .request({ method: "GET", uri: "https://api.domain.com" })
          .then(() => scope.done());
      });
      it("should set the region properly when a port is included", () => {
        const scope = nock("https://api.region.twilio.com:123")
          .get("/")
          .reply(200, "test response");
        client.region = "region";
        return client
          .request({ method: "GET", uri: "https://api.twilio.com:123" })
          .then(() => scope.done());
      });
    });

    it("should use not changes the value of edge and region", () => {
      client = new Twilio("ACXXXXXXXX", "test-password");
      client.region = "us1";
      client.edge = "sydney";
      expect(client.region).toEqual("us1");
      expect(client.edge).toEqual("sydney");
    });
  });

  describe("adding user agent extensions", () => {
    it("sets the user-agent by default", () => {
      const client = new Twilio("ACXXXXXXXX", "test-password");
      const scope = nock("https://api.twilio.com", {
        reqheaders: {
          "User-Agent":
            /^twilio-node\/[0-9.]+(-rc\.[0-9]+)?\s\(\w+\s\w+\)\snode\/[^\s]+$/,
        },
      })
        .get("/")
        .reply(200, "test response");
      return client
        .request({ method: "GET", uri: "https://api.twilio.com" })
        .then(() => scope.done());
    });

    it("allows for user-agent extensions", () => {
      const client = new Twilio("ACXXXXXXXX", "test-password", {
        userAgentExtensions: [
          "twilio-run/2.0.0-test",
          "@twilio-labs/plugin-serverless/1.1.0-test",
        ],
      });
      const scope = nock("https://api.twilio.com", {
        reqheaders: {
          "User-Agent":
            /^twilio-node\/[0-9.]+(-rc\.[0-9]+)?\s\(\w+\s\w+\)\snode\/[^\s]+ (twilio-run\/2.0.0-test @twilio-labs\/plugin-serverless\/1.1.0-test)$/,
        },
      })
        .get("/")
        .reply(200, "test response");
      return client
        .request({ method: "GET", uri: "https://api.twilio.com" })
        .then(() => scope.done());
    });
  });
});
