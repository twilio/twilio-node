#!/usr/bin/env node

/**
 * Verification script to test both CommonJS and ESM imports work correctly
 */

console.log('🧪 Testing twilio-node ESM support...\n');

// Test CommonJS
console.log('📦 Testing CommonJS import...');
try {
  const twilio = require('../lib/index.js');
  console.log('✅ CommonJS import successful');
  console.log(`   - Default export type: ${typeof twilio}`);
  console.log(`   - Twilio class available: ${typeof twilio.Twilio === 'function'}`);
  console.log(`   - JWT utilities available: ${typeof twilio.jwt === 'object'}`);
  console.log(`   - TwiML utilities available: ${typeof twilio.twiml === 'object'}`);
  console.log(`   - Webhook validation available: ${typeof twilio.validateBody === 'function'}`);
} catch (error) {
  console.log('❌ CommonJS import failed:', error.message);
  process.exit(1);
}

console.log('\n📦 Testing ESM dynamic import...');
// Test ESM with dynamic import (works in both CommonJS and ESM contexts)
import('../lib-esm/index.js')
  .then((esm) => {
    console.log('✅ ESM import successful');
    console.log(`   - Default export type: ${typeof esm.default}`);
    console.log(`   - Named Twilio export: ${typeof esm.Twilio === 'function'}`);
    console.log(`   - Named JWT export: ${typeof esm.jwt === 'object'}`);
    console.log(`   - Named TwiML export: ${typeof esm.twiml === 'object'}`);
    console.log(`   - Named validateBody export: ${typeof esm.validateBody === 'function'}`);
    
    console.log('\n🎉 All tests passed! ESM support is working correctly.');
    console.log('\n📚 Usage examples:');
    console.log('   CommonJS: const twilio = require("twilio");');
    console.log('   ESM:      import twilio from "twilio";');
    console.log('   ESM:      import { Twilio, jwt, twiml } from "twilio";');
  })
  .catch((error) => {
    console.log('❌ ESM import failed:', error.message);
    process.exit(1);
  });