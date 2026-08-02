const { spawn } = require('child_process');
const path = require('path');

// List of bundler test scripts
const bundlerTests = [
  { name: 'esbuild', script: 'esbuild-test.js' },
  { name: 'Vite', script: 'vite-test.js' },
  { name: 'Webpack', script: 'webpack-test.js' },
  { name: 'SWC', script: 'swc-test.js' },
  { name: 'Parcel', script: 'parcel-test.js' },
  { name: 'Bundle', script: 'bundle-dynamic-import-test.js' },
  { name: 'Dynamic Import', script: 'dynamic-import-test.js' }
];

// Results to track passes and failures
const results = {
  passed: [],
  failed: []
};

// Run a test script and return a promise
function runTest(test) {
  return new Promise((resolve) => {
    console.log(`\n\n========== Testing with ${test.name} ==========\n`);

    const scriptPath = path.join(__dirname, test.script);
    const child = spawn('node', [scriptPath], { stdio: 'inherit' });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`\n✅ ${test.name} bundle test PASSED\n`);
        results.passed.push(test.name);
      } else {
        console.error(`\n❌ ${test.name} bundle test FAILED with exit code ${code}\n`);
        results.failed.push(test.name);
      }
      resolve();
    });
  });
}

// Run all tests sequentially
async function runAllTests() {
  console.log('Starting bundle tests for twilio-node...\n');

  for (const test of bundlerTests) {
    await runTest(test);
  }

  // Print summary
  console.log('\n========== Bundle Test Summary ==========');
  console.log(`Passed: ${results.passed.length}/${bundlerTests.length}`);

  if (results.passed.length > 0) {
    console.log('\nPassed bundlers:');
    results.passed.forEach(name => console.log(`- ✅ ${name}`));
  }

  if (results.failed.length > 0) {
    console.log('\nFailed bundlers:');
    results.failed.forEach(name => console.log(`- ❌ ${name}`));
    process.exit(1);
  } else {
    console.log('\nAll bundle tests passed! ✅');
    process.exit(0);
  }
}

// Run all tests
runAllTests().catch(err => {
  console.error('Error running tests:', err);
  process.exit(1);
});
