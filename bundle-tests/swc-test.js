const swc = require('@swc/core');
const path = require('path');
const fs = require('fs');

async function bundleWithSWC() {
  try {
    // Create output directory if it doesn't exist
    const outdir = path.join(__dirname, 'swc-output');
    if (!fs.existsSync(outdir)) {
      fs.mkdirSync(outdir, { recursive: true });
    }

    // Read the test file
    const inputFile = path.join(__dirname, 'test.js');
    const source = fs.readFileSync(inputFile, 'utf-8');

    // Transform with SWC
    const output = await swc.transform(source, {
      jsc: {
        parser: {
          syntax: 'ecmascript',
        },
        target: 'es2020',
      },
      module: {
        type: 'commonjs',
      },
      sourceMaps: true,
      filename: inputFile,
    });

    // Write output to file
    const outputPath = path.join(outdir, 'bundle.js');
    fs.writeFileSync(outputPath, output.code);
    fs.writeFileSync(`${outputPath}.map`, output.map);

    console.log('SWC transform completed successfully');

    // SWC doesn't do bundling by itself, so we'd typically pair it with a bundler
    // For the purposes of this test, we'll use a simple transformation to verify it works with the code
    console.log('Note: SWC is primarily a transpiler, not a bundler. This test only verifies that twilio code can be transpiled.');

    return 0;
  } catch (error) {
    console.error('SWC transform failed:', error);
    return 1;
  }
}

// Run the transform test
bundleWithSWC().then(exitCode => {
  process.exit(exitCode);
});