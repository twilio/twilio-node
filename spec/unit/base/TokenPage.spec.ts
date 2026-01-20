import TokenPage, { TokenPaginationPayload } from "../../../src/base/TokenPage";
import Response from "../../../src/http/response";
import Version from "../../../src/base/Version";
import Domain from "../../../src/base/Domain";

// Mock implementation of Version for testing
class MockVersion extends Version {
  pageResponse: any;

  constructor() {
    const mockDomain = {
      twilio: {},
      absoluteUrl: (uri: string) => uri,
    } as Domain;
    super(mockDomain, "v1");
    this.pageResponse = null;
  }

  page(opts: any): Promise<any> {
    return Promise.resolve(this.pageResponse);
  }
}

// Simple test resource and instance types
interface TestResource {
  id: number;
  name: string;
}

interface TestInstance {
  id: number;
  name: string;
}

// Concrete implementation of TokenPage for testing
class TestTokenPage extends TokenPage<
  MockVersion,
  TokenPaginationPayload,
  TestResource,
  TestInstance
> {
  getInstance(payload: TestResource): TestInstance {
    return {
      id: payload.id,
      name: payload.name,
    };
  }
}

describe("TokenPage", () => {
  describe("constructor", () => {
    it("should initialize with uri, data, and solution", () => {
      const mockVersion = new MockVersion();
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          nextToken: "next123",
          previousToken: null,
        },
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
        ],
      };
      const response = new Response(200, responseBody, {});

      const tokenPage = new TestTokenPage(
        mockVersion,
        response,
        "/api/items",
        { filter: "active" },
        { accountSid: "AC123" }
      );

      expect(tokenPage).toBeDefined();
      expect(tokenPage.instances).toHaveLength(2);
      expect(tokenPage.instances[0].id).toBe(1);
      expect(tokenPage.instances[1].id).toBe(2);
    });

    it("should initialize with default empty data and solution", () => {
      const mockVersion = new MockVersion();
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 10,
        },
        items: [],
      };
      const response = new Response(200, responseBody, {});

      const tokenPage = new TestTokenPage(mockVersion, response, "/api/items");

      expect(tokenPage).toBeDefined();
      expect(tokenPage.instances).toHaveLength(0);
    });
  });

  describe("property getters", () => {
    let mockVersion: MockVersion;
    let tokenPage: TestTokenPage;

    beforeEach(() => {
      mockVersion = new MockVersion();
    });

    it("should return key from meta", () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "records",
          pageSize: 25,
        },
        records: [],
      };
      const response = new Response(200, responseBody, {});
      tokenPage = new TestTokenPage(mockVersion, response, "/api/records");

      expect(tokenPage.key).toBe("records");
    });

    it("should throw error when key is not present", () => {
      const responseBody: any = {
        meta: {
          pageSize: 25,
        },
        records: [],
      };
      const response = new Response(200, responseBody, {});

      expect(() => {
        new TestTokenPage(mockVersion, response, "/api/records");
      }).toThrow(
        "Token pagination requires meta.key to be present in response"
      );
    });

    it("should return pageSize from meta", () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 100,
        },
        items: [],
      };
      const response = new Response(200, responseBody, {});
      tokenPage = new TestTokenPage(mockVersion, response, "/api/items");

      expect(tokenPage.pageSize).toBe(100);
    });

    it("should return undefined when pageSize is not present", () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
        },
        items: [],
      };
      const response = new Response(200, responseBody, {});
      tokenPage = new TestTokenPage(mockVersion, response, "/api/items");

      expect(tokenPage.pageSize).toBeUndefined();
    });

    it("should return nextToken from meta", () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          nextToken: "token_abc123",
        },
        items: [],
      };
      const response = new Response(200, responseBody, {});
      tokenPage = new TestTokenPage(mockVersion, response, "/api/items");

      expect(tokenPage.nextToken).toBe("token_abc123");
    });

    it("should return undefined when nextToken is null", () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          nextToken: null,
        },
        items: [],
      };
      const response = new Response(200, responseBody, {});
      tokenPage = new TestTokenPage(mockVersion, response, "/api/items");

      expect(tokenPage.nextToken).toBeUndefined();
    });

    it("should return previousToken from meta", () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          previousToken: "token_xyz789",
        },
        items: [],
      };
      const response = new Response(200, responseBody, {});
      tokenPage = new TestTokenPage(mockVersion, response, "/api/items");

      expect(tokenPage.previousToken).toBe("token_xyz789");
    });

    it("should return undefined when previousToken is null", () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          previousToken: null,
        },
        items: [],
      };
      const response = new Response(200, responseBody, {});
      tokenPage = new TestTokenPage(mockVersion, response, "/api/items");

      expect(tokenPage.previousToken).toBeUndefined();
    });
  });

  describe("nextPage", () => {
    let mockVersion: MockVersion;

    beforeEach(() => {
      mockVersion = new MockVersion();
    });

    it("should return undefined when nextToken is not present", () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          nextToken: null,
        },
        items: [],
      };
      const response = new Response(200, responseBody, {});
      const tokenPage = new TestTokenPage(mockVersion, response, "/api/items");

      const result = tokenPage.nextPage();

      expect(result).toBeUndefined();
    });

    it("should fetch next page with nextToken", async () => {
      const firstPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 2,
          nextToken: "next_token_123",
        },
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
        ],
      };

      const secondPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 2,
          nextToken: null,
          previousToken: "prev_token_456",
        },
        items: [
          { id: 3, name: "Item 3" },
          { id: 4, name: "Item 4" },
        ],
      };

      const firstResponse = new Response(200, firstPageBody, {});
      const secondResponse = new Response(200, secondPageBody, {});

      mockVersion.pageResponse = secondResponse;

      const tokenPage = new TestTokenPage(
        mockVersion,
        firstResponse,
        "/api/items"
      );

      const nextPage = await tokenPage.nextPage();

      expect(nextPage).toBeDefined();
      expect(nextPage?.instances).toHaveLength(2);
      expect(nextPage?.instances[0].id).toBe(3);
      expect(nextPage?.instances[1].id).toBe(4);
    });

    it("should include pageToken in request params", async () => {
      const firstPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          nextToken: "next_token_abc",
        },
        items: [],
      };

      const secondPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          nextToken: null,
        },
        items: [],
      };

      const firstResponse = new Response(200, firstPageBody, {});
      const secondResponse = new Response(200, secondPageBody, {});

      mockVersion.pageResponse = secondResponse;

      // Spy on the page method to verify it's called with correct params
      const pageSpy = jest.spyOn(mockVersion, "page");

      const tokenPage = new TestTokenPage(
        mockVersion,
        firstResponse,
        "/api/items"
      );

      await tokenPage.nextPage();

      expect(pageSpy).toHaveBeenCalledWith({
        method: "get",
        uri: "/api/items",
        params: { pageToken: "next_token_abc" },
      });
    });

    it("should throw error when URI is not provided", () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          nextToken: "next_token_123",
        },
        items: [],
      };

      const response = new Response(200, responseBody, {});

      // Create page with empty URI
      const tokenPage = new TestTokenPage(mockVersion, response, "");

      expect(() => tokenPage.nextPage()).toThrow(
        "URI must be provided for token pagination"
      );
    });
  });

  describe("previousPage", () => {
    let mockVersion: MockVersion;

    beforeEach(() => {
      mockVersion = new MockVersion();
    });

    it("should return undefined when previousToken is not present", () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          previousToken: null,
        },
        items: [],
      };
      const response = new Response(200, responseBody, {});
      const tokenPage = new TestTokenPage(mockVersion, response, "/api/items");

      const result = tokenPage.previousPage();

      expect(result).toBeUndefined();
    });

    it("should fetch previous page with previousToken", async () => {
      const secondPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 2,
          nextToken: null,
          previousToken: "prev_token_456",
        },
        items: [
          { id: 3, name: "Item 3" },
          { id: 4, name: "Item 4" },
        ],
      };

      const firstPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 2,
          nextToken: "next_token_123",
          previousToken: null,
        },
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
        ],
      };

      const secondResponse = new Response(200, secondPageBody, {});
      const firstResponse = new Response(200, firstPageBody, {});

      mockVersion.pageResponse = firstResponse;

      const tokenPage = new TestTokenPage(
        mockVersion,
        secondResponse,
        "/api/items"
      );

      const prevPage = await tokenPage.previousPage();

      expect(prevPage).toBeDefined();
      expect(prevPage?.instances).toHaveLength(2);
      expect(prevPage?.instances[0].id).toBe(1);
      expect(prevPage?.instances[1].id).toBe(2);
    });

    it("should include pageToken in request params", async () => {
      const responseBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          previousToken: "prev_token_xyz",
        },
        items: [],
      };

      const prevPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 50,
          previousToken: null,
        },
        items: [],
      };

      const response = new Response(200, responseBody, {});
      const prevResponse = new Response(200, prevPageBody, {});

      mockVersion.pageResponse = prevResponse;

      // Spy on the page method to verify it's called with correct params
      const pageSpy = jest.spyOn(mockVersion, "page");

      const tokenPage = new TestTokenPage(mockVersion, response, "/api/items");

      await tokenPage.previousPage();

      expect(pageSpy).toHaveBeenCalledWith({
        method: "get",
        uri: "/api/items",
        params: { pageToken: "prev_token_xyz" },
      });
    });
  });

  describe("pagination with query params", () => {
    let mockVersion: MockVersion;

    beforeEach(() => {
      mockVersion = new MockVersion();
    });

    it("should preserve original query params when fetching next page", async () => {
      const firstPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 10,
          nextToken: "next_token_abc",
        },
        items: [{ id: 1, name: "Filtered Item 1" }],
      };

      const secondPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 10,
          nextToken: null,
        },
        items: [{ id: 2, name: "Filtered Item 2" }],
      };

      const firstResponse = new Response(200, firstPageBody, {});
      const secondResponse = new Response(200, secondPageBody, {});

      mockVersion.pageResponse = secondResponse;

      // Spy on the page method to verify params
      const pageSpy = jest.spyOn(mockVersion, "page");

      // Create page with query parameters
      const queryParams = {
        status: "active",
        category: "electronics",
        minPrice: 100,
      };

      const tokenPage = new TestTokenPage(
        mockVersion,
        firstResponse,
        "/api/items",
        queryParams
      );

      await tokenPage.nextPage();

      // Verify that original query params are preserved and pageToken is added
      expect(pageSpy).toHaveBeenCalledWith({
        method: "get",
        uri: "/api/items",
        params: {
          status: "active",
          category: "electronics",
          minPrice: 100,
          pageToken: "next_token_abc",
        },
      });
    });

    it("should preserve original query params when fetching previous page", async () => {
      const secondPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 10,
          previousToken: "prev_token_xyz",
        },
        items: [{ id: 2, name: "Filtered Item 2" }],
      };

      const firstPageBody: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 10,
          nextToken: "next_token_abc",
        },
        items: [{ id: 1, name: "Filtered Item 1" }],
      };

      const secondResponse = new Response(200, secondPageBody, {});
      const firstResponse = new Response(200, firstPageBody, {});

      mockVersion.pageResponse = firstResponse;

      // Spy on the page method to verify params
      const pageSpy = jest.spyOn(mockVersion, "page");

      // Create page with query parameters
      const queryParams = {
        status: "pending",
        sort: "date",
      };

      const tokenPage = new TestTokenPage(
        mockVersion,
        secondResponse,
        "/api/items",
        queryParams
      );

      await tokenPage.previousPage();

      // Verify that original query params are preserved and pageToken is added
      expect(pageSpy).toHaveBeenCalledWith({
        method: "get",
        uri: "/api/items",
        params: {
          status: "pending",
          sort: "date",
          pageToken: "prev_token_xyz",
        },
      });
    });

    it("should handle multiple page navigations with query params", async () => {
      const page1Body: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 2,
          nextToken: "token_page2",
        },
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
        ],
      };

      const page2Body: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 2,
          nextToken: "token_page3",
          previousToken: "token_page1",
        },
        items: [
          { id: 3, name: "Item 3" },
          { id: 4, name: "Item 4" },
        ],
      };

      const page3Body: TokenPaginationPayload = {
        meta: {
          key: "items",
          pageSize: 2,
          nextToken: null,
          previousToken: "token_page2",
        },
        items: [
          { id: 5, name: "Item 5" },
          { id: 6, name: "Item 6" },
        ],
      };

      const page1Response = new Response(200, page1Body, {});
      const page2Response = new Response(200, page2Body, {});
      const page3Response = new Response(200, page3Body, {});

      const queryParams = { filter: "active", limit: 2 };

      // Navigate to page 2
      mockVersion.pageResponse = page2Response;
      const page1 = new TestTokenPage(
        mockVersion,
        page1Response,
        "/api/items",
        queryParams
      );
      const page2 = await page1.nextPage();

      expect(page2).toBeDefined();
      expect(page2?.instances[0].id).toBe(3);

      // Navigate to page 3
      mockVersion.pageResponse = page3Response;
      const page3 = await page2!.nextPage();

      expect(page3).toBeDefined();
      expect(page3?.instances[0].id).toBe(5);
      expect(page3?.nextToken).toBeUndefined();

      // Navigate back to page 2
      mockVersion.pageResponse = page2Response;
      const pageSpy = jest.spyOn(mockVersion, "page");
      const backToPage2 = await page3!.previousPage();

      expect(backToPage2).toBeDefined();
      expect(backToPage2?.instances[0].id).toBe(3);

      // Verify query params are still preserved
      expect(pageSpy).toHaveBeenCalledWith({
        method: "get",
        uri: "/api/items",
        params: {
          filter: "active",
          limit: 2,
          pageToken: "token_page2",
        },
      });
    });
  });
});
