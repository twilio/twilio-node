import Domain from "./Domain";
import Page, { TwilioResponsePayload } from "./Page";
import { RequestOpts } from "./BaseTwilio";
import RestException from "./RestException";
import TwilioServiceException from "./TwilioServiceException";
import { trim } from "./utility";
import { ApiResponse } from "./ApiResponse";

export interface PageLimitOptions {
  /**
   * The maximum number of items to fetch
   */
  limit: number;
  /**
   * The maximum number of items to return with every request
   */
  pageSize: number;
}

export interface PageLimit {
  limit: number;
  pageSize: number;
}

export default class Version {
  _domain: Domain;
  _version: Version | string;

  /**
   *
   * Base version object
   *
   * @param domain - twilio domain
   * @param version - api version
   */
  constructor(domain: Domain, version: string | Version) {
    this._domain = domain;
    this._version = version;
  }

  get domain(): Domain {
    return this._domain;
  }

  /**
   * Throws the appropriate exception based on the response format
   *
   * @param response - the response object
   * @throws TwilioServiceException if response matches RFC-9457 format
   * @throws RestException for legacy format
   */
  private throwException(response: any): never {
    const isResponseBodyString = typeof response.body === "string";
    let body = null;

    if (isResponseBodyString) {
      try {
        body = JSON.parse(response.body);
      } catch (e) {
        // If parsing fails, body remains null
      }
    } else {
      body = response.body;
    }

    // Check if response matches RFC-9457 format
    if (TwilioServiceException.isRFC9457Response(body)) {
      throw new TwilioServiceException(response);
    }

    // Fall back to legacy RestException
    throw new RestException(response);
  }

  /**
   * Generate absolute url from a uri
   *
   * @param uri - uri to transform
   * @returns transformed url
   */
  absoluteUrl(uri: string): string {
    return this._domain.absoluteUrl(this.relativeUrl(uri));
  }

  /**
   * Generate relative url from a uri
   *
   * @param uri - uri to transform
   * @returns transformed url
   */
  relativeUrl(uri: string): string {
    var result = "";
    if (typeof this._version === "string") {
      const version = trim(this._version, "/");
      result += version;
      result += "/";
    }
    if (typeof uri === "string") {
      uri = trim(uri, "/");
      if (result === "") {
        result += "/";
      }
      result += uri;
    }
    return result;
  }

  /**
   * Make a request against the domain
   *
   * @param opts - request options
   * @returns promise that resolves to request response
   */
  request(opts: RequestOpts): Promise<any> {
    return this._domain.request({
      ...opts,
      uri: this.relativeUrl(opts.uri || ""),
    });
  }

  /**
   * Create a new record
   *
   * @param opts - request options
   *
   * @throws Error If response returns non 2xx or 201 status code
   *
   * @returns promise that resolves to created record
   */
  create(opts: RequestOpts): Promise<any> {
    var qResponse = this.request(opts);
    qResponse = qResponse.then((response) => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        this.throwException(response);
      }
      if (typeof response.body === "string") {
        return JSON.parse(response.body);
      }
      return response.body;
    });

    return qResponse;
  }

  /**
   * Fetch an instance of a record
   *
   * @param opts - request options
   *
   * @throws Error If response returns non 2xx or 3xx status code
   *
   * @returns promise that resolves to fetched result
   */
  fetch(opts: RequestOpts): Promise<any> {
    var qResponse = this.request(opts);

    qResponse = qResponse.then((response) => {
      if (response.statusCode < 200 || response.statusCode >= 400) {
        this.throwException(response);
      }

      if (typeof response.body === "string") {
        return JSON.parse(response.body);
      }
      return response.body;
    });

    return qResponse;
  }

  /**
   * Fetch a page of records
   *
   * @param opts - request options
   * @returns promise that resolves to page of records
   */
  page(opts: RequestOpts): Promise<any> {
    return this.request(opts);
  }

  /**
   * Update a record
   *
   * @param opts - request options
   *
   * @throws Error If response returns non 2xx status code
   *
   * @returns promise that resolves to updated result
   */
  update(opts: RequestOpts): Promise<any> {
    var qResponse = this.request(opts);
    qResponse = qResponse.then((response) => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        this.throwException(response);
      }

      if (typeof response.body === "string") {
        return JSON.parse(response.body);
      }
      return response.body;
    });

    return qResponse;
  }

  /**
   * Patch a record
   *
   * @param opts - request options
   *
   * @throws Error If response returns non 2xx status code
   *
   * @returns promise that resolves to patched result
   */
  async patch(opts: RequestOpts): Promise<any> {
    const response = await this.request(opts);
    if (response.statusCode < 200 || response.statusCode >= 300) {
      this.throwException(response);
    }
    return typeof response.body === "string"
      ? JSON.parse(response.body)
      : response.body;
  }

  /**
   * Delete a record
   *
   * @param opts - request options
   *
   * @throws Error If response returns a 5xx status
   *
   * @returns promise that resolves to true if record was deleted
   */
  remove(opts: RequestOpts): Promise<boolean> {
    let qResponse = this.request(opts);
    qResponse = qResponse.then((response) => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        this.throwException(response);
      }

      return true; // if response code is 2XX, deletion was successful
    });

    return qResponse;
  }

  /**
   * Create a new record and return response metadata
   *
   * @param opts - request options
   *
   * @throws TwilioServiceException if response matches RFC-9457 format
   * @throws RestException for legacy format
   * @throws Error If response returns non 2xx or 201 status code
   *
   * @returns promise that resolves to ApiResponse with created record and metadata
   */
  createWithResponseInfo<T>(opts: RequestOpts): Promise<ApiResponse<T>> {
    return this.request(opts).then((response) => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        this.throwException(response);
      }

      let body: T;
      if (typeof response.body === "string") {
        body = JSON.parse(response.body);
      } else {
        body = response.body;
      }

      return {
        body: body,
        statusCode: response.statusCode,
        headers: response.headers,
      };
    });
  }

  /**
   * Fetch an instance of a record and return response metadata
   *
   * @param opts - request options
   *
   * @throws TwilioServiceException if response matches RFC-9457 format
   * @throws RestException for legacy format
   * @throws Error If response returns non 2xx or 3xx status code
   *
   * @returns promise that resolves to ApiResponse with fetched record and metadata
   */
  fetchWithResponseInfo<T>(opts: RequestOpts): Promise<ApiResponse<T>> {
    return this.request(opts).then((response) => {
      if (response.statusCode < 200 || response.statusCode >= 400) {
        this.throwException(response);
      }

      let body: T;
      if (typeof response.body === "string") {
        body = JSON.parse(response.body);
      } else {
        body = response.body;
      }

      return {
        body: body,
        statusCode: response.statusCode,
        headers: response.headers,
      };
    });
  }

  /**
   * Update a record and return response metadata
   *
   * @param opts - request options
   *
   * @throws TwilioServiceException if response matches RFC-9457 format
   * @throws RestException for legacy format
   * @throws Error If response returns non 2xx status code
   *
   * @returns promise that resolves to ApiResponse with updated record and metadata
   */
  updateWithResponseInfo<T>(opts: RequestOpts): Promise<ApiResponse<T>> {
    return this.request(opts).then((response) => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        this.throwException(response);
      }

      let body: T;
      if (typeof response.body === "string") {
        body = JSON.parse(response.body);
      } else {
        body = response.body;
      }

      return {
        body: body,
        statusCode: response.statusCode,
        headers: response.headers,
      };
    });
  }

  /**
   * Patch a record and return response metadata
   *
   * @param opts - request options
   *
   * @throws TwilioServiceException if response matches RFC-9457 format
   * @throws RestException for legacy format
   * @throws Error If response returns non 2xx status code
   *
   * @returns promise that resolves to ApiResponse with patched record and metadata
   */
  async patchWithResponseInfo<T>(opts: RequestOpts): Promise<ApiResponse<T>> {
    const response = await this.request(opts);
    if (response.statusCode < 200 || response.statusCode >= 300) {
      this.throwException(response);
    }

    let body: T;
    if (typeof response.body === "string") {
      body = JSON.parse(response.body);
    } else {
      body = response.body;
    }

    return {
      body: body,
      statusCode: response.statusCode,
      headers: response.headers,
    };
  }

  /**
   * Delete a record and return response metadata
   *
   * @param opts - request options
   *
   * @throws TwilioServiceException if response matches RFC-9457 format
   * @throws RestException for legacy format
   * @throws Error If response returns a 5xx status
   *
   * @returns promise that resolves to ApiResponse with boolean and metadata
   */
  removeWithResponseInfo(opts: RequestOpts): Promise<ApiResponse<boolean>> {
    return this.request(opts).then((response) => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        this.throwException(response);
      }

      return {
        body: true, // if response code is 2XX, deletion was successful
        statusCode: response.statusCode,
        headers: response.headers,
      };
    });
  }

  /**
   * Process limits for list requests
   *
   * @param opts.limit - The maximum number of items to fetch
   * @param opts.pageSize - The maximum number of items to return with every request
   *
   */
  readLimits(opts: PageLimitOptions): PageLimit {
    var limit = opts.limit;
    var pageSize = opts.pageSize;
    if ((limit && !Number.isFinite(limit)) || limit <= 0) {
      throw new TypeError("Parameter limit must be a positive integer");
    }

    if (pageSize && (!Number.isFinite(pageSize) || pageSize <= 0)) {
      throw new TypeError("Parameter pageSize must be a positive integer");
    }

    if (limit && !pageSize) {
      pageSize = limit;
    }

    return {
      limit: limit,
      pageSize: pageSize,
    };
  }

  setPromiseCallback(operationPromise: any, callback: any): Promise<any> {
    if (typeof callback === "function") {
      operationPromise = operationPromise
        .then((value: any) => callback(null, value))
        .catch((error: any) => callback(error));
    }
    return operationPromise;
  }

  /**
   * For each record instance, executes a provided callback function with that
   * instance
   *
   * @param params - Parameters (Optional)
   * @param params.limit - Optional maximum number of record instances to
   *  fetch
   * @param params.pageSize - Optional maximum number of records to return
   *  with every request
   * @param params.callback - Callback function to call with each
   *  record instance
   * @param params.done - Optional done function to call when all
   *  records are processed, the limit is reached, or an error occurs.
   *  Receives an error argument if an error occurs.
   * @param callback - Callback function to call with each record.
   *  Receives a done function argument that will short-circuit the for-each
   *  loop that may accept an error argument.
   * @returns Returns a promise that resolves when all records
   *  processed or if the limit is reached, and rejects with an error if an
   *  error occurs and is not handled in the user provided done function.
   */
  each<T>(
    params?: any,
    callback?: (item: T, done: (err?: Error) => void) => void
  ): Promise<void> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }
    if (params.callback) {
      callback = params.callback;
    }
    if (typeof callback === "undefined") {
      throw new Error("Callback function must be provided");
    }
    let done = false;
    let doneCalled = false;
    let currentPage = 1;
    let currentResource = 0;
    let limits = {} as PageLimit;
    let pPending = true;
    let pResolve: (value: void) => void;
    let pReject: (reason?: any) => void;
    if (this._version instanceof Version) {
      limits = this._version.readLimits({
        limit: params.limit,
        pageSize: params.pageSize,
      });
    }
    function onComplete(error?: any) {
      let unhandledError = error;

      done = true;
      if (typeof params.done === "function" && !doneCalled) {
        try {
          params.done(unhandledError);
          unhandledError = null;
        } catch (e) {
          unhandledError = e;
        }
      }
      doneCalled = true;

      if (pPending) {
        if (unhandledError) {
          pReject(unhandledError);
        } else {
          pResolve();
        }
        pPending = false;
      }
    }
    function fetchNextPage(fn: () => Promise<any>) {
      let promise = fn();
      if (typeof promise === "undefined") {
        onComplete();
        return;
      }

      promise
        .then((page: any) => {
          try {
            page.instances.forEach(function (instance: any) {
              if (
                done ||
                (typeof params.limit !== "undefined" &&
                  currentResource >= params.limit)
              ) {
                done = true;
                return false;
              }
              currentResource++;
              callback?.(instance, onComplete);
            });
          } catch (e) {
            return onComplete(e);
          }

          if (!done) {
            currentPage++;
            fetchNextPage(page.nextPage.bind(page));
          } else {
            onComplete();
          }
        })
        .catch(onComplete);
    }

    return new Promise((resolve, reject) => {
      pResolve = resolve;
      pReject = reject;
      fetchNextPage(this.page.bind(this, Object.assign(params, limits)));
    });
  }

  list<T>(
    params?: any,
    callback?: (error: Error | null, items: T) => any
  ): Promise<any> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }
    let allResources: any[] = [];
    params.callback = function (resource: any, done: any) {
      allResources.push(resource);
      if (
        typeof params.limit !== "undefined" &&
        allResources.length === params.limit
      ) {
        done();
      }
    };
    let operationPromise = new Promise((resolve, reject) => {
      params.done = function (error: any) {
        if (typeof error === "undefined") {
          resolve(allResources);
        } else {
          reject(error);
        }
      };
    });
    if (this._version instanceof Version) {
      operationPromise = this._version.setPromiseCallback(
        operationPromise,
        callback
      );
    }
    this.each(params);
    return operationPromise;
  }

  /**
   * For each record instance, executes a provided callback function with that
   * instance and captures HTTP response metadata from the first page
   *
   * @param params - Parameters (Optional)
   * @param params.limit - Optional maximum number of record instances to
   *  fetch
   * @param params.pageSize - Optional maximum number of records to return
   *  with every request
   * @param params.callback - Callback function to call with each
   *  record instance
   * @param params.done - Optional done function to call when all
   *  records are processed, the limit is reached, or an error occurs.
   *  Receives an error argument if an error occurs, and ApiResponse metadata.
   * @param callback - Callback function to call with each record.
   *  Receives a done function argument that will short-circuit the for-each
   *  loop that may accept an error argument.
   * @returns Returns a promise that resolves with first page metadata when all records
   *  processed or if the limit is reached, and rejects with an error if an
   *  error occurs and is not handled in the user provided done function.
   */
  eachWithHttpInfo<T>(
    params?: any,
    callback?: (item: T, done: (err?: Error) => void) => void
  ): Promise<ApiResponse<void>> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }
    if (params.callback) {
      callback = params.callback;
    }
    if (typeof callback === "undefined") {
      throw new Error("Callback function must be provided");
    }
    let done = false;
    let doneCalled = false;
    let currentPage = 1;
    let currentResource = 0;
    let limits = {} as PageLimit;
    let pPending = true;
    let pResolve: (value: ApiResponse<void>) => void;
    let pReject: (reason?: any) => void;
    let firstPageMetadata: {
      statusCode: number;
      headers: Record<string, string>;
    } | null = null;

    if (this._version instanceof Version) {
      limits = this._version.readLimits({
        limit: params.limit,
        pageSize: params.pageSize,
      });
    }
    function onComplete(error?: any) {
      let unhandledError = error;

      done = true;
      if (typeof params.done === "function" && !doneCalled) {
        try {
          params.done(unhandledError, firstPageMetadata);
          unhandledError = null;
        } catch (e) {
          unhandledError = e;
        }
      }
      doneCalled = true;

      if (pPending) {
        if (unhandledError) {
          pReject(unhandledError);
        } else {
          // firstPageMetadata is guaranteed to be set here because:
          // 1. If no page was fetched, we already rejected with error
          // 2. If page was fetched, firstPageMetadata was set in the .then() handler
          pResolve({
            body: undefined as void,
            statusCode: firstPageMetadata!.statusCode,
            headers: firstPageMetadata!.headers,
          });
        }
        pPending = false;
      }
    }
    function fetchNextPageWithInfo(fn: () => Promise<any>) {
      let promise = fn();
      if (typeof promise === "undefined" || promise === null) {
        // If this is the first page and we got null/undefined, that's an error
        // If this is a subsequent page, null means "no more pages" (success)
        if (currentPage === 1) {
          pReject(new Error("Page method did not return a Promise"));
          pPending = false;
        } else {
          onComplete();
        }
        return;
      }

      promise
        .then((response: any) => {
          // Handle both cases:
          // 1. Version.page() returns { statusCode, body, headers }
          // 2. Resource.page() returns Page object directly
          let pageData = response.body !== undefined ? response.body : response;

          // Capture first page metadata on first page
          if (currentPage === 1 && !firstPageMetadata) {
            if (response.statusCode !== undefined) {
              // Case 1: Response structure with metadata
              firstPageMetadata = {
                statusCode: response.statusCode,
                headers: response.headers || {},
              };
            } else {
              // Case 2: Direct Page object (no metadata available)
              firstPageMetadata = {
                statusCode: 200,
                headers: {},
              };
            }
          }

          // Parse body if it's a string
          if (typeof pageData === "string") {
            pageData = JSON.parse(pageData);
          }

          try {
            pageData.instances.forEach(function (instance: any) {
              if (
                done ||
                (typeof params.limit !== "undefined" &&
                  currentResource >= params.limit)
              ) {
                done = true;
                return false;
              }
              currentResource++;
              callback?.(instance, onComplete);
            });
          } catch (e) {
            return onComplete(e);
          }

          if (!done) {
            currentPage++;
            // Page's nextPage method should already return response structure
            const nextPageFn = pageData.nextPage?.bind(pageData);
            if (nextPageFn) {
              fetchNextPageWithInfo(nextPageFn);
            } else {
              onComplete();
            }
          } else {
            onComplete();
          }
        })
        .catch(onComplete);
    }

    return new Promise((resolve, reject) => {
      pResolve = resolve;
      pReject = reject;
      const pageParams = Object.assign({}, params, limits);
      fetchNextPageWithInfo(() => {
        // Use pageWithHttpInfo() if available to capture HTTP metadata, otherwise use page()
        // When called from resources, this.pageWithHttpInfo exists and returns { statusCode, body, headers }
        // When called from Version directly, this.page returns { statusCode, body, headers }
        if (typeof (this as any).pageWithHttpInfo === "function") {
          return (this as any).pageWithHttpInfo(pageParams);
        }
        return this.page(pageParams);
      });
    });
  }

  /**
   * Fetches all records and returns them as an array with HTTP response metadata
   * from the first page
   *
   * @param params - Parameters (Optional)
   * @param params.limit - Optional maximum number of record instances to fetch
   * @param params.pageSize - Optional maximum number of records to return with every request
   * @param callback - Optional callback function
   * @returns Promise that resolves to ApiResponse with array of all records and first page metadata
   */
  listWithHttpInfo<T>(
    params?: any,
    callback?: (error: Error | null, items: ApiResponse<T[]>) => any
  ): Promise<ApiResponse<T[]>> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }
    let allResources: any[] = [];
    let firstPageMetadata: {
      statusCode: number;
      headers: Record<string, string>;
    } | null = null;

    params.callback = function (resource: any, done: any) {
      allResources.push(resource);
      if (
        typeof params.limit !== "undefined" &&
        allResources.length === params.limit
      ) {
        done();
      }
    };

    let operationPromise = new Promise<ApiResponse<T[]>>((resolve, reject) => {
      params.done = function (
        error: any,
        metadata?: { statusCode: number; headers: Record<string, string> }
      ) {
        if (metadata) {
          firstPageMetadata = metadata;
        }
        if (typeof error === "undefined") {
          // firstPageMetadata is guaranteed to be set here because:
          // eachWithHttpInfo either:
          // 1. Rejects with error (no page fetched)
          // 2. Passes metadata to done callback (page was fetched)
          resolve({
            body: allResources as T[],
            statusCode: firstPageMetadata!.statusCode,
            headers: firstPageMetadata!.headers,
          });
        } else {
          reject(error);
        }
      };
    });

    if (this._version instanceof Version) {
      operationPromise = this._version.setPromiseCallback(
        operationPromise,
        callback
      );
    }
    this.eachWithHttpInfo(params);
    return operationPromise;
  }
}
