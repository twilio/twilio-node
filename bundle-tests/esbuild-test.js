const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

async function bundleWithEsbuild() {
  try {
    // Create output directory if it doesn't exist
    const outdir = path.join(__dirname, 'esbuild-output');
    if (!fs.existsSync(outdir)) {
      fs.mkdirSync(outdir, { recursive: true });
    }

    // Build standard test
    console.log('\n--- Building standard test bundle ---\n');
    const standardResult = await esbuild.build({
      entryPoints: [path.join(__dirname, 'test.js')],
      bundle: true,
      platform: 'node',
      target: 'node14', // Match the package.json "engines"
      outfile: path.join(outdir, 'bundle.js'),
      external: ['crypto', 'fs', 'https', 'http', 'os', 'path', 'util', 'querystring', 'url', 'stream', 'events', 'net', 'tls', 'zlib', 'buffer'],
      logLevel: 'info',
      metafile: true,
    });

    // Build dynamicImport test bundle
    console.log('\n--- Building dynamicImport test bundle ---\n');
    const dynamicResult = await esbuild.build({
      entryPoints: [path.join(__dirname, 'bundle-dynamic-import-test.js')],
      bundle: true,
      platform: 'node',
      target: 'node14',
      outfile: path.join(outdir, 'dynamic-bundle.js'),
      external: ['crypto', 'fs', 'https', 'http', 'os', 'path', 'util', 'querystring', 'url', 'stream', 'events', 'net', 'tls', 'zlib', 'buffer'],
      logLevel: 'info',
      metafile: true,
    });

    // Log standard metafile info
    console.log('\n--- Standard bundle analysis ---\n');
    const standardText = await esbuild.analyzeMetafile(standardResult.metafile);
    console.log(standardText);

    // Log dynamicImport metafile info
    console.log('\n--- DynamicImport bundle analysis ---\n');
    const dynamicText = await esbuild.analyzeMetafile(dynamicResult.metafile);
    console.log(dynamicText);

    console.log('\n--- Running dynamicImport test bundle ---\n');
    return new Promise((resolve) => {
      exec(`node ${path.join(outdir, 'dynamic-bundle.js')}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error running dynamic import test: ${error.message}`);
          return resolve(1);
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
        }
        console.log(stdout);
        console.log('esbuild bundle tests completed successfully');
        resolve(0);
      });
    });
  } catch (error) {
    console.error('esbuild bundle failed:', error);
    return 1;
  }
}

// Run the bundle test
bundleWithEsbuild().then(exitCode => {
  process.exit(exitCode);
});