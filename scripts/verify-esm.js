#!/usr/bin/env node

/**
 * Verification script to test both CommonJS and ESM imports work correctly
 */

console.log("🧪 Testing twilio-node ESM support...\n");

// Test CommonJS
console.log("📦 Testing CommonJS import...");
try {
  const twilio = require("../lib/index.js");
  console.log("✅ CommonJS import successful");
  console.log(`   - Default export type: ${typeof twilio}`);
  console.log(
    `   - Twilio class available: ${typeof twilio.Twilio === "function"}`
  );
  console.log(
    `   - JWT utilities available: ${typeof twilio.jwt === "object"}`
  );
  console.log(
    `   - TwiML utilities available: ${typeof twilio.twiml === "object"}`
  );
  console.log(
    `   - Webhook validation available: ${
      typeof twilio.validateBody === "function"
    }`
  );
} catch (error) {
  console.log("❌ CommonJS import failed:", error.message);
  process.exit(1);
}

console.log("\n📦 Testing ESM dynamic import...");
// Test ESM with dynamic import (works in both CommonJS and ESM contexts)
import("../lib-esm/index.js")
  .then((esm) => {
    console.log("✅ ESM import successful");
    console.log(`   - Default export type: ${typeof esm.default}`);
    console.log(
      `   - Named Twilio export: ${typeof esm.Twilio === "function"}`
    );
    console.log(`   - Named JWT export: ${typeof esm.jwt === "object"}`);
    console.log(`   - Named TwiML export: ${typeof esm.twiml === "object"}`);
    console.log(
      `   - Named validateBody export: ${
        typeof esm.validateBody === "function"
      }`
    );

    console.log("\n✅ Basic ESM tests passed! Now testing dependencies...");

    // Test key dependencies in ESM context
    return testDependencies();
  })
  .then(() => {
    console.log("\n🎉 All tests passed! ESM support is working correctly.");
    console.log("\n📚 Usage examples:");
    console.log('   CommonJS: const twilio = require("twilio");');
    console.log('   ESM:      import twilio from "twilio";');
    console.log('   ESM:      import { Twilio, jwt, twiml } from "twilio";');
  })
  .catch((error) => {
    console.log("❌ Test failed:", error.message);
    process.exit(1);
  });

/**
 * Test that all key dependencies work in ESM context
 */
async function testDependencies() {
  const dependencies = [
    { name: "axios", testFn: testAxios },
    { name: "dayjs", testFn: testDayjs },
    { name: "https-proxy-agent", testFn: testHttpsProxyAgent },
    { name: "jsonwebtoken", testFn: testJsonwebtoken },
    { name: "qs", testFn: testQs },
    { name: "scmp", testFn: testScmp },
    { name: "xmlbuilder", testFn: testXmlbuilder },
  ];

  // Track test results
  const results = {
    passed: 0,
    failed: 0,
    failedDeps: [],
  };

  console.log("\n📦 Testing dependencies in ESM context...");

  // Run all tests sequentially
  for (const dep of dependencies) {
    try {
      console.log(`   - Testing ${dep.name}...`);
      await dep.testFn();
      console.log(`     ✅ ${dep.name} works correctly in ESM context`);
      results.passed++;
    } catch (error) {
      console.log(`     ❌ ${dep.name} failed: ${error.message}`);
      results.failed++;
      results.failedDeps.push(dep.name);
    }
  }

  // Print summary
  console.log("\n📊 Dependency Test Results:");
  console.log(`   - Dependencies tested: ${dependencies.length}`);
  console.log(`   - Passed: ${results.passed}`);
  console.log(`   - Failed: ${results.failed}`);

  if (results.failed > 0) {
    console.log(`   - Failed dependencies: ${results.failedDeps.join(", ")}`);
    throw new Error("Some dependencies are not compatible with ESM");
  }

  console.log("   ✅ All dependencies work correctly in ESM context");
  return true;
}

// Test functions for each dependency
async function testAxios() {
  const axios = await import("axios");
  if (typeof axios.default !== "function" || !axios.default.get) {
    throw new Error("axios import did not provide expected API");
  }
  // Test basic functionality
  const instance = axios.default.create();
  if (!instance || typeof instance.request !== "function") {
    throw new Error("axios instance creation failed");
  }
}

async function testDayjs() {
  const dayjs = await import("dayjs");
  if (typeof dayjs.default !== "function") {
    throw new Error("dayjs import did not provide expected API");
  }
  // Test basic functionality
  const date = dayjs.default();
  if (!date || typeof date.format !== "function") {
    throw new Error("dayjs instance creation failed");
  }
}

async function testHttpsProxyAgent() {
  const HttpsProxyAgent = await import("https-proxy-agent");
  // https-proxy-agent provides different exports in ESM vs CJS
  const AgentClass =
    HttpsProxyAgent.default ||
    HttpsProxyAgent.HttpsProxyAgent ||
    HttpsProxyAgent;
  if (typeof AgentClass !== "function") {
    throw new Error("https-proxy-agent import did not provide expected API");
  }
  // Basic validation - not creating an instance as it requires network config
  if (!AgentClass.prototype) {
    throw new Error("HttpsProxyAgent class not properly defined");
  }
}

async function testJsonwebtoken() {
  const jwtModule = await import("jsonwebtoken");
  // Handle both ESM default export and named exports
  const jwt = jwtModule.default || jwtModule;
  if (typeof jwt.sign !== "function" || typeof jwt.verify !== "function") {
    throw new Error("jsonwebtoken import did not provide expected API");
  }
  // Test basic functionality with a simple token
  const token = jwt.sign({ data: "test" }, "secret", { expiresIn: "1h" });
  if (!token || typeof token !== "string") {
    throw new Error("jsonwebtoken sign function failed");
  }
}

async function testQs() {
  const qs = await import("qs");
  if (typeof qs.stringify !== "function" || typeof qs.parse !== "function") {
    throw new Error("qs import did not provide expected API");
  }
  // Test basic functionality
  const parsed = qs.parse("a=1&b=2");
  if (!parsed || parsed.a !== "1" || parsed.b !== "2") {
    throw new Error("qs parse function failed");
  }
}

async function testScmp() {
  const scmp = await import("scmp");
  if (typeof scmp.default !== "function") {
    throw new Error("scmp import did not provide expected API");
  }
  // Test basic functionality
  const result = scmp.default(Buffer.from("test"), Buffer.from("test"));
  if (typeof result !== "boolean") {
    throw new Error("scmp comparison function failed");
  }
}

async function testXmlbuilder() {
  const xmlbuilder = await import("xmlbuilder");
  if (typeof xmlbuilder.create !== "function") {
    throw new Error("xmlbuilder import did not provide expected API");
  }
  // Test basic functionality
  const xml = xmlbuilder.create("root").ele("child", "text").end();
  if (
    !xml ||
    typeof xml !== "string" ||
    !xml.includes("<root><child>text</child></root>")
  ) {
    throw new Error("xmlbuilder create function failed");
  }
}
