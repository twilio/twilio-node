// Test file to verify dynamicImport function behavior in bundled environments
console.log('Testing dynamicImport function in bundled environment...');

// Create a function to test dynamic imports
const testDynamicImport = async () => {
  // Define the dynamicImport function (same as in src/index.ts)
  const dynamicImport = (path) => {
    // This will work in Node.js but cause issues with some bundlers
    return new Function('return import("' + path + '")')();
  };

  try {
    console.log('Attempting dynamic import of fs module...');
    const fs = await dynamicImport('fs');

    if (fs && typeof fs.readFileSync === 'function') {
      console.log('✅ Dynamic import successful in this bundler!');
      return true;
    } else {
      console.log('⚠️ Dynamic import returned unexpected results:');
      console.log(fs);
      return false;
    }
  } catch (error) {
    console.error('❌ Dynamic import failed:', error);
    console.log('This is expected behavior in certain bundlers as dynamicImport uses new Function() and dynamic imports which may not be supported');
    return false;
  }
};

// Run the test
testDynamicImport().then(success => {
  if (success) {
    console.log('Test completed successfully - dynamic imports work in this environment');
  } else {
    console.log('Test completed - dynamic imports are not supported in this bundled environment');
  }
});