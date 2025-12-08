import TokenPage, { TokenPaginationPayload } from "../../../src/base/TokenPage";
import Version from "../../../src/base/Version";
import Response from "../../../src/http/response";

// Test resource types
interface TestResource {
  id: string;
  name: string;
}

interface TestPayload extends TokenPaginationPayload {
  results: TestResource[];
}

class TestInstance {
  id: string;
  name: string;

  constructor(version: any, payload: TestResource) {
    this.id = payload.id;
    this.name = payload.name;
  }
}

class TestPage extends TokenPage<any, TestPayload, TestResource, TestInstance> {
  getInstance(payload: TestResource): TestInstance {
    return new TestInstance(this._version, payload);
  }
}

describe("TokenPage", () => {
  let mockVersion: any;
  let mockDomain: any;
  let mockSolution: any;

  beforeEach(() => {
    mockDomain = {
      absoluteUrl: jest.fn((uri: string) => `https://api.twilio.com${uri}`),
      twilio: {
        request: jest.fn(),
      },
    };

    mockVersion = {
      _domain: mockDomain,
    } as any;

    mockSolution = {};
  });

  describe("constructor", () => {
    it("should initialize with token-based pagination metadata", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: "next-token-123",
          previousToken: null,
        },
        results: [
          { id: "1", name: "Item 1" },
          { id: "2", name: "Item 2" },
        ],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.instances).toHaveLength(2);
      expect(page.instances[0].id).toBe("1");
      expect(page.instances[1].id).toBe("2");
    });

    it("should handle string response body", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: "next-token-123",
          previousToken: null,
        },
        results: [{ id: "1", name: "Item 1" }],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<string> = {
        statusCode: 200,
        body: JSON.stringify(payload),
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.instances).toHaveLength(1);
      expect(page.instances[0].id).toBe("1");
    });
  });

  describe("getNextPageUrl", () => {
    it("should return URL with nextToken when token exists", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: "next-token-abc123",
          previousToken: null,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.nextPageUrl).toBe(
        "https://api.twilio.com/TestResources?PageToken=next-token-abc123"
      );
      expect(mockDomain.absoluteUrl).toHaveBeenCalledWith(
        "/TestResources?PageToken=next-token-abc123"
      );
    });

    it("should return undefined when nextToken is null", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: null,
          previousToken: null,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.nextPageUrl).toBeUndefined();
    });

    it("should return undefined when nextToken is undefined", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.nextPageUrl).toBeUndefined();
    });

    it("should properly URL encode nextToken", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: "token with spaces & special=chars",
          previousToken: null,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(mockDomain.absoluteUrl).toHaveBeenCalledWith(
        "/TestResources?PageToken=token%20with%20spaces%20%26%20special%3Dchars"
      );
    });
  });

  describe("getPreviousPageUrl", () => {
    it("should return URL with previousToken when token exists", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: null,
          previousToken: "prev-token-xyz789",
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.previousPageUrl).toBe(
        "https://api.twilio.com/TestResources?PageToken=prev-token-xyz789"
      );
      expect(mockDomain.absoluteUrl).toHaveBeenCalledWith(
        "/TestResources?PageToken=prev-token-xyz789"
      );
    });

    it("should return undefined when previousToken is null", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: null,
          previousToken: null,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.previousPageUrl).toBeUndefined();
    });

    it("should return undefined when previousToken is undefined", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.previousPageUrl).toBeUndefined();
    });

    it("should properly URL encode previousToken", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: null,
          previousToken: "prev+token/with?special&chars",
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(mockDomain.absoluteUrl).toHaveBeenCalledWith(
        "/TestResources?PageToken=prev%2Btoken%2Fwith%3Fspecial%26chars"
      );
    });
  });

  describe("buildUrlWithToken", () => {
    it("should append token with ? when base URI has no query params", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: "token123",
          previousToken: null,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(mockDomain.absoluteUrl).toHaveBeenCalledWith(
        "/TestResources?PageToken=token123"
      );
    });

    it("should append token with & when base URI already has query params", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: "token123",
          previousToken: null,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources?Availability=public"
      );

      expect(mockDomain.absoluteUrl).toHaveBeenCalledWith(
        "/TestResources?Availability=public&PageToken=token123"
      );
    });
  });

  describe("pagination flow", () => {
    it("should support both next and previous tokens simultaneously", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: "next-token",
          previousToken: "prev-token",
        },
        results: [{ id: "1", name: "Item 1" }],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.nextPageUrl).toBeDefined();
      expect(page.previousPageUrl).toBeDefined();
      expect(page.nextPageUrl).toContain("next-token");
      expect(page.previousPageUrl).toContain("prev-token");
    });

    it("should call nextPage() to fetch next page", async () => {
      const firstPayload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 2,
          nextToken: "next-token-123",
          previousToken: null,
        },
        results: [
          { id: "1", name: "Item 1" },
          { id: "2", name: "Item 2" },
        ],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 2,
        previous_page_uri: "",
        uri: "",
      };

      const secondPayload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 2,
          nextToken: null,
          previousToken: "prev-token-123",
        },
        results: [
          { id: "3", name: "Item 3" },
          { id: "4", name: "Item 4" },
        ],
        first_page_uri: "",
        next_page_uri: "",
        page: 1,
        page_size: 2,
        previous_page_uri: "",
        uri: "",
      };

      const firstResponse: Response<TestPayload> = {
        statusCode: 200,
        body: firstPayload,
      };

      mockDomain.twilio.request.mockResolvedValue({
        statusCode: 200,
        body: secondPayload,
      });

      const page = new TestPage(
        mockVersion,
        firstResponse,
        mockSolution,
        "/TestResources"
      );

      expect(page.instances).toHaveLength(2);
      expect(page.instances[0].id).toBe("1");

      const nextPage = await page.nextPage();
      expect(nextPage).toBeDefined();
      expect(nextPage!.instances).toHaveLength(2);
      expect(nextPage!.instances[0].id).toBe("3");
      expect(nextPage!.instances[1].id).toBe("4");

      expect(mockDomain.twilio.request).toHaveBeenCalledWith({
        method: "get",
        uri: "https://api.twilio.com/TestResources?PageToken=next-token-123",
      });
    });

    it("should return undefined when calling nextPage() without nextPageUrl", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: null,
          previousToken: null,
        },
        results: [{ id: "1", name: "Last Item" }],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      const nextPage = page.nextPage();
      expect(nextPage).toBeUndefined();
    });

    it("should call previousPage() to fetch previous page", async () => {
      const currentPayload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 2,
          nextToken: null,
          previousToken: "prev-token-123",
        },
        results: [
          { id: "3", name: "Item 3" },
          { id: "4", name: "Item 4" },
        ],
        first_page_uri: "",
        next_page_uri: "",
        page: 1,
        page_size: 2,
        previous_page_uri: "",
        uri: "",
      };

      const previousPayload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 2,
          nextToken: "next-token-123",
          previousToken: null,
        },
        results: [
          { id: "1", name: "Item 1" },
          { id: "2", name: "Item 2" },
        ],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 2,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: currentPayload,
      };

      mockDomain.twilio.request.mockResolvedValue({
        statusCode: 200,
        body: previousPayload,
      });

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.instances).toHaveLength(2);
      expect(page.instances[0].id).toBe("3");

      const prevPage = await page.previousPage();
      expect(prevPage).toBeDefined();
      expect(prevPage!.instances).toHaveLength(2);
      expect(prevPage!.instances[0].id).toBe("1");
      expect(prevPage!.instances[1].id).toBe("2");

      expect(mockDomain.twilio.request).toHaveBeenCalledWith({
        method: "get",
        uri: "https://api.twilio.com/TestResources?PageToken=prev-token-123",
      });
    });

    it("should return undefined when calling previousPage() without previousPageUrl", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: "next-token",
          previousToken: null,
        },
        results: [{ id: "1", name: "First Item" }],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      const prevPage = page.previousPage();
      expect(prevPage).toBeUndefined();
    });
  });

  describe("inherited functionality from Page", () => {
    it("should load instances from meta.key array", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 3,
          nextToken: null,
          previousToken: null,
        },
        results: [
          { id: "1", name: "Item 1" },
          { id: "2", name: "Item 2" },
          { id: "3", name: "Item 3" },
        ],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 3,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.instances).toHaveLength(3);
      expect(page.instances[0]).toBeInstanceOf(TestInstance);
      expect(page.instances[0].id).toBe("1");
      expect(page.instances[1].id).toBe("2");
      expect(page.instances[2].id).toBe("3");
    });

    it("should support toJSON serialization", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 1,
          nextToken: "next",
          previousToken: null,
        },
        results: [{ id: "1", name: "Item 1" }],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 1,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      const json = page.toJSON();
      expect(json).toBeDefined();
      expect(json).toHaveProperty("instances");
      expect(json).toHaveProperty("nextPageUrl");
      expect(json).toHaveProperty("previousPageUrl");
    });
  });

  describe("edge cases", () => {
    it("should handle empty results array", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: null,
          previousToken: null,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.instances).toHaveLength(0);
      expect(page.nextPageUrl).toBeUndefined();
      expect(page.previousPageUrl).toBeUndefined();
    });

    it("should handle tokens with only whitespace correctly", () => {
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: "   ",
          previousToken: null,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      // Whitespace tokens are still valid tokens
      expect(page.nextPageUrl).toBeDefined();
      expect(page.nextPageUrl).toContain("PageToken=");
    });

    it("should handle base64-encoded tokens", () => {
      const base64Token = "eyJwYWdlIjoyLCJsaW1pdCI6NTB9"; // {"page":2,"limit":50}
      const payload: TestPayload = {
        meta: {
          key: "results",
          pageSize: 50,
          nextToken: base64Token,
          previousToken: null,
        },
        results: [],
        first_page_uri: "",
        next_page_uri: "",
        page: 0,
        page_size: 50,
        previous_page_uri: "",
        uri: "",
      };

      const response: Response<TestPayload> = {
        statusCode: 200,
        body: payload,
        headers: {},
      };

      const page = new TestPage(
        mockVersion,
        response,
        mockSolution,
        "/TestResources"
      );

      expect(page.nextPageUrl).toBeDefined();
      expect(mockDomain.absoluteUrl).toHaveBeenCalledWith(
        `/TestResources?PageToken=${base64Token}`
      );
    });
  });
});
