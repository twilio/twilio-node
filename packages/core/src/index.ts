/**
 * @twilio/core - Core Twilio client and shared functionality
 * 
 * This package provides the base client, authentication, HTTP handling,
 * and other shared functionality used by all Twilio service packages.
 */

// Re-export core components from the main source
export { Client, ClientOpts } from '../../../src/base/BaseTwilio';
export * from '../../../src/auth_strategy';
export * from '../../../src/credential_provider';
export * from '../../../src/http';
export * from '../../../src/jwt';
export * from '../../../src/interfaces';
export * from '../../../src/twiml';
export * from '../../../src/webhooks';