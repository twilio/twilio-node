import axios from "axios";
import RequestClient from "../../../src/base/RequestClient";
import sinon from "sinon";

describe("Exponential Backoff Error Handler", function () {
  let axiosMock;
  let clock;
  let originalSetTimeout;

  beforeEach(function () {
    // Mock axios instance
    axiosMock = {
      create: jest.fn().mockReturnValue({
        defaults: { headers: { post: {} } },
        interceptors: {
          response: { use: jest.fn(), handlers: [] },
          request: { use: jest.fn() },
        },
      }),
    };

    // Use sinon to fake timers for testing delays
    originalSetTimeout = global.setTimeout;
    clock = sinon.useFakeTimers();

    // Mock axios module
    jest.spyOn(axios, "create").mockImplementation(axiosMock.create);
  });

  afterEach(function () {
    jest.restoreAllMocks();
    clock.restore();
    global.setTimeout = originalSetTimeout;
  });

  describe("getExponentialBackoffErrorHandler function", function () {
    let errorHandler;
    let axiosInstance;

    beforeEach(function () {
      // Create RequestClient with auto-retry enabled
      const requestClient = new RequestClient({ autoRetry: true });

      // Extract error handler from axios interceptors
      errorHandler =
        requestClient.axios.interceptors.response.use.mock.calls[0][1];
      axiosInstance = requestClient.axios;
    });

    it("should reject with the original error for non-retryable errors", async function () {
      const nonRetryableError = new Error("Not retryable");
      nonRetryableError.code = "ENOTFOUND"; // Not in the retryable list
      nonRetryableError.config = { method: "GET", url: "/test" };

      try {
        await errorHandler(nonRetryableError);
        fail("Should have rejected");
      } catch (error) {
        expect(error).toBe(nonRetryableError);
      }
    });

    it("should reject with the original error if config is missing", async function () {
      const errorWithoutConfig = new Error("No config");
      errorWithoutConfig.code = "ECONNRESET"; // Retryable but no config

      try {
        await errorHandler(errorWithoutConfig);
        fail("Should have rejected");
      } catch (error) {
        expect(error).toBe(errorWithoutConfig);
      }
    });

    it("should retry retryable network errors (ECONNRESET)", async function () {
      const retryableError = new Error("Connection reset");
      retryableError.code = "ECONNRESET";
      retryableError.config = {
        method: "GET",
        url: "/test",
        retryCount: 0,
      };

      // Setup axios mock to resolve on retry
      jest.spyOn(axiosInstance, "request").mockResolvedValueOnce({
        status: 200,
        data: "success",
        headers: {},
      });

      // Start the retry process
      const retryPromise = errorHandler(retryableError);

      // Fast-forward time to handle the setTimeout
      clock.tick(1000);

      // Wait for the promise to resolve
      const result = await retryPromise;

      // Verify axios was called with updated config
      expect(axiosInstance.request).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/test",
          retryCount: 1,
        })
      );

      expect(result).toEqual({
        status: 200,
        data: "success",
        headers: {},
      });
    });

    it("should retry retryable network errors (ETIMEDOUT)", async function () {
      const retryableError = new Error("Timeout");
      retryableError.code = "ETIMEDOUT";
      retryableError.config = {
        method: "GET",
        url: "/test",
        retryCount: 0,
      };

      // Setup axios mock to resolve on retry
      jest.spyOn(axiosInstance, "request").mockResolvedValueOnce({
        status: 200,
        data: "success",
        headers: {},
      });

      // Start the retry process
      const retryPromise = errorHandler(retryableError);

      // Fast-forward time to handle the setTimeout
      clock.tick(1000);

      // Wait for the promise to resolve
      const result = await retryPromise;

      // Verify axios was called with updated config
      expect(axiosInstance.request).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/test",
          retryCount: 1,
        })
      );

      expect(result).toEqual({
        status: 200,
        data: "success",
        headers: {},
      });
    });

    it("should retry retryable network errors (ECONNABORTED)", async function () {
      const retryableError = new Error("Connection aborted");
      retryableError.code = "ECONNABORTED";
      retryableError.config = {
        method: "GET",
        url: "/test",
        retryCount: 0,
      };

      // Setup axios mock to resolve on retry
      jest.spyOn(axiosInstance, "request").mockResolvedValueOnce({
        status: 200,
        data: "success",
        headers: {},
      });

      // Start the retry process
      const retryPromise = errorHandler(retryableError);

      // Fast-forward time to handle the setTimeout
      clock.tick(1000);

      // Wait for the promise to resolve
      const result = await retryPromise;

      // Verify axios was called with updated config
      expect(axiosInstance.request).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/test",
          retryCount: 1,
        })
      );

      expect(result).toEqual({
        status: 200,
        data: "success",
        headers: {},
      });
    });

    it("should increment retry count with each retry", async function () {
      const retryableError = new Error("Connection reset");
      retryableError.code = "ECONNRESET";
      retryableError.config = {
        method: "GET",
        url: "/test",
        retryCount: 0,
      };

      // First retry fails again with same error
      const secondError = new Error("Connection reset again");
      secondError.code = "ECONNRESET";
      secondError.config = {
        method: "GET",
        url: "/test",
        retryCount: 1,
      };

      // Setup axios mock to fail on first retry, then succeed
      jest
        .spyOn(axiosInstance, "request")
        .mockRejectedValueOnce(secondError)
        .mockResolvedValueOnce({
          status: 200,
          data: "success finally",
          headers: {},
        });

      // Start the retry process
      const retryPromise = errorHandler(retryableError);

      // Fast-forward time to handle first setTimeout
      clock.tick(1000);

      // Need to wait for the first promise to be handled
      await Promise.resolve();

      // Now handle the second error's setTimeout
      clock.tick(2000);

      // Wait for the final promise to resolve
      const result = await retryPromise;

      // Verify axios was called twice with updated configs
      expect(axiosInstance.request).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          method: "GET",
          url: "/test",
          retryCount: 1,
        })
      );

      expect(axiosInstance.request).toHaveBeenNthCalledWith(
        2,
        expect.objectContaining({
          method: "GET",
          url: "/test",
          retryCount: 2,
        })
      );

      expect(result).toEqual({
        status: 200,
        data: "success finally",
        headers: {},
      });
    });

    it("should use exponential backoff for retry delays", async function () {
      // Create multiple errors to test increasing delays
      const error1 = new Error("Connection reset 1");
      error1.code = "ECONNRESET";
      error1.config = { method: "GET", url: "/test", retryCount: 0 };

      const error2 = new Error("Connection reset 2");
      error2.code = "ECONNRESET";
      error2.config = { method: "GET", url: "/test", retryCount: 1 };

      const error3 = new Error("Connection reset 3");
      error3.code = "ECONNRESET";
      error3.config = { method: "GET", url: "/test", retryCount: 2 };

      // Setup axios mock for sequence of calls
      jest
        .spyOn(axiosInstance, "request")
        .mockRejectedValueOnce(error2)
        .mockRejectedValueOnce(error3)
        .mockResolvedValueOnce({
          status: 200,
          data: "success",
          headers: {},
        });

      // Mock setTimeout to capture delay values
      const setTimeoutSpy = jest.spyOn(global, "setTimeout");

      // Start the retry process
      const retryPromise = errorHandler(error1);

      // Fast-forward enough time for all retries
      clock.tick(10000);

      // Wait for the promise chain to complete
      await retryPromise;

      // Extract the delays from the setTimeout calls
      const delays = setTimeoutSpy.mock.calls.map((call) => call[1]);

      // Verify exponential backoff pattern (with some flexibility due to jitter)
      expect(delays[0]).toBeLessThanOrEqual(200); // ~100 * 2^1 with jitter
      expect(delays[1]).toBeLessThanOrEqual(400); // ~100 * 2^2 with jitter
      expect(delays[2]).toBeLessThanOrEqual(800); // ~100 * 2^3 with jitter

      // Verify increasing delays
      expect(delays[0]).toBeLessThan(delays[1]);
      expect(delays[1]).toBeLessThan(delays[2]);
    });

    it("should respect maximum retry limit", async function () {
      // Create a client with custom max retries
      const customClient = new RequestClient({
        autoRetry: true,
        maxRetries: 2,
      });

      // Extract error handler
      const customErrorHandler =
        customClient.axios.interceptors.response.use.mock.calls[0][1];

      // Create an error that's already at the retry limit
      const finalRetryError = new Error("Final retry");
      finalRetryError.code = "ECONNRESET";
      finalRetryError.config = {
        method: "GET",
        url: "/test",
        retryCount: 2, // Already at the max retry limit
      };

      try {
        await customErrorHandler(finalRetryError);
        fail("Should have rejected");
      } catch (error) {
        // Should reject with the original error after max retries
        expect(error).toBe(finalRetryError);
      }
    });

    it("should respect max retry delay", async function () {
      // Create client with low max retry delay
      const customClient = new RequestClient({
        autoRetry: true,
        maxRetryDelay: 150, // Very low max delay
        maxRetries: 5,
      });

      // Extract error handler
      const customErrorHandler =
        customClient.axios.interceptors.response.use.mock.calls[0][1];

      // Create an error for a high retry count (which would normally have a long delay)
      const highRetryError = new Error("High retry count");
      highRetryError.code = "ECONNRESET";
      highRetryError.config = {
        method: "GET",
        url: "/test",
        retryCount: 4, // Would normally be 100 * 2^4 = 1600ms
      };

      // Mock setTimeout to capture delay value
      const setTimeoutSpy = jest.spyOn(global, "setTimeout");

      // Setup axios mock to resolve on retry
      jest.spyOn(customClient.axios, "request").mockResolvedValueOnce({
        status: 200,
        data: "success",
        headers: {},
      });

      // Start the retry process
      const retryPromise = customErrorHandler(highRetryError);

      // Fast-forward time
      clock.tick(1000);

      // Wait for the promise to resolve
      await retryPromise;

      // Extract the delay from the setTimeout call
      const delay = setTimeoutSpy.mock.calls[0][1];

      // Verify the delay is capped at the max retry delay
      // With jitter, it will be somewhere between 0 and maxRetryDelay
      expect(delay).toBeLessThanOrEqual(150);
    });
  });
});
