const fs = require('fs');
const path = require('path');

// Create lib-esm directory
const libEsmDir = path.join(__dirname, '..', 'lib-esm');
if (!fs.existsSync(libEsmDir)) {
  fs.mkdirSync(libEsmDir);
}

// ESM wrapper for the main entry point
const esmIndexContent = `// ESM wrapper for twilio-node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Import the CommonJS module
const TwilioSDK = require('../lib/index.js');

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
  webhook
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
  webhook
};

// Also provide default export for convenience
export default TwilioSDK;
`;

fs.writeFileSync(path.join(libEsmDir, 'index.js'), esmIndexContent);

// Create package.json for ESM directory
const esmPackageJson = {
  "type": "module"
};

fs.writeFileSync(path.join(libEsmDir, 'package.json'), JSON.stringify(esmPackageJson, null, 2));

console.log('ESM build completed!');
console.log('Generated files:');
console.log('- lib-esm/index.js');
console.log('- lib-esm/package.json');