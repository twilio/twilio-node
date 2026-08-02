// Test file to specifically test dynamicImport functionality
console.log('Testing dynamicImport function...');

// Create our own implementation of the dynamicImport function for testing
// This is the same implementation from src/index.ts
const dynamicImport = (path) => {
  // This will work in Node.js but cause issues with some bundlers
  return new Function('return import("' + path + '")')();
};

console.log('Running dynamicImport function with "fs" module...');

// Test with fs module since that's used in the original example
dynamicImport('fs').then(fs => {
  if (fs && typeof fs.readFileSync === 'function') {
    console.log('✅ Dynamic import successful!');
    console.log('fs.readFileSync exists:', typeof fs.readFileSync === 'function');

    // Try using readFileSync to prove it works
    try {
      const packageJson = fs.readFileSync('../package.json', 'utf8');
      const parsed = JSON.parse(packageJson);
      console.log('Package name:', parsed.name);
      console.log('Package version:', parsed.version);
    } catch (e) {
      console.error('Error reading package.json:', e);
    }
  } else {
    console.log('⚠️ Dynamic import returned unexpected results');
    console.log('fs module:', fs);
  }
}).catch(e => {
  console.error('❌ Dynamic import failed:', e);
});