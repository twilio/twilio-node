/**
 * Runtime detection utilities for cross-platform compatibility
 */

// Declare web APIs that might not be available in all environments
declare const atob: any;
declare const btoa: any;
declare const process: any;
declare const Buffer: any;
declare const global: any;

/**
 * Detect if running in Node.js environment
 */
export function isNode(): boolean {
  return (
    typeof process !== "undefined" &&
    process.versions &&
    process.versions.node
  );
}

/**
 * Detect if running in Cloudflare Workers environment
 */
export function isCloudflareWorkers(): boolean {
  return (
    typeof globalThis !== "undefined" &&
    typeof globalThis.addEventListener === "function" &&
    typeof globalThis.fetch === "function" &&
    (typeof global === "undefined" || global === null) &&
    typeof process === "undefined"
  );
}

/**
 * Detect if running in a browser environment
 */
export function isBrowser(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.document !== "undefined"
  );
}

/**
 * Get environment variables in a cross-platform way
 */
export function getEnv(key: string): string | undefined {
  if (isNode()) {
    return process.env[key];
  }
  // In Workers, environment variables are typically passed via bindings
  // This would need to be configured by the developer
  return undefined;
}

/**
 * Cross-platform base64 encoding
 */
export function encodeBase64(str: string): string {
  if (isNode()) {
    return Buffer.from(str).toString("base64");
  } else {
    // Use btoa for browsers and Workers
    return btoa(str);
  }
}

/**
 * Cross-platform base64 decoding
 */
export function decodeBase64(str: string): string {
  if (isNode()) {
    return Buffer.from(str, "base64").toString();
  } else {
    // Use atob for browsers and Workers, add padding if needed
    const paddedStr = str + '='.repeat((4 - str.length % 4) % 4);
    return atob(paddedStr);
  }
}