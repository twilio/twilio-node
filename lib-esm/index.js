// ESM wrapper for twilio-node
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Import the CommonJS module
const TwilioSDK = require("../lib/index.js");

// Extract all exports from the CJS module
const {
  Twilio,
  jwt,
  twiml,
  RequestClient,
  RestException,
  ClientCredentialProviderBuilder,
  OrgsCredentialProviderBuilder,
  NoAuthCredentialProvider,
  validateBody,
  validateRequest,
  validateRequestWithBody,
  validateExpressRequest,
  validateIncomingRequest,
  getExpectedBodyHash,
  getExpectedTwilioSignature,
  webhook,
} = TwilioSDK;

// Export everything as named exports
export {
  Twilio,
  jwt,
  twiml,
  RequestClient,
  RestException,
  ClientCredentialProviderBuilder,
  OrgsCredentialProviderBuilder,
  NoAuthCredentialProvider,
  validateBody,
  validateRequest,
  validateRequestWithBody,
  validateExpressRequest,
  validateIncomingRequest,
  getExpectedBodyHash,
  getExpectedTwilioSignature,
  webhook,
};

// Also provide default export for convenience
export default TwilioSDK;
