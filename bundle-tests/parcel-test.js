const { Parcel } = require('@parcel/core');
const path = require('path');
const fs = require('fs');

async function bundleWithParcel() {
  try {
    // Create output directory if it doesn't exist
    const outdir = path.join(__dirname, 'parcel-output');
    if (!fs.existsSync(outdir)) {
      fs.mkdirSync(outdir, { recursive: true });
    }

    // Create .parcelrc file for Node.js targets
    const parcelConfigPath = path.join(__dirname, '.parcelrc');
    fs.writeFileSync(
      parcelConfigPath,
      JSON.stringify({
        "extends": "@parcel/config-default",
        "transformers": {
          "*.{js,mjs,jsx,cjs,ts,tsx}": ["@parcel/transformer-js"]
        },
        "optimizers": {
          "*.js": ["@parcel/optimizer-terser"]
        }
      }, null, 2)
    );

    // Create a temporary package.json in the bundle-tests directory
    // to ensure Parcel can resolve dependencies correctly
    const packageJsonPath = path.join(__dirname, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      fs.writeFileSync(
        packageJsonPath,
        JSON.stringify({
          "name": "twilio-bundle-test",
          "private": true,
          "dependencies": {
            "twilio": "file:.."
          },
          "targets": {
            "node": {
              "engines": {
                "node": ">= 14"
              }
            }
          }
        }, null, 2)
      );
    }

    // Initialize bundler
    const bundler = new Parcel({
      entries: path.join(__dirname, 'test.js'),
      defaultConfig: '@parcel/config-default',
      targets: {
        main: {
          distDir: outdir,
          engines: {
            node: '>=14'
          }
        }
      },
      defaultTargetOptions: {
        distDir: outdir,
        engines: {
          node: '>=14'
        },
        outputFormat: 'commonjs',
        isLibrary: true,
        optimize: true,
      },
      mode: 'production',
      shouldDisableCache: true
    });

    // Run the bundler
    const { bundleGraph, buildTime } = await bundler.run();

    const bundles = bundleGraph.getBundles();
    console.log(`Parcel bundled ${bundles.length} bundle(s) in ${buildTime}ms`);
    bundles.forEach(bundle => {
      console.log(`- ${bundle.filePath} (${bundle.type}): ${prettyBytes(bundle.stats.size)}`);
    });

    console.log('Parcel bundle completed successfully');

    // Clean up config
    fs.unlinkSync(parcelConfigPath);

    return 0;
  } catch (error) {
    console.error('Parcel bundle failed:', error);
    return 1;
  }
}

// Helper function to format bytes
function prettyBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const size = bytes / Math.pow(1024, exponent);
  return `${size.toFixed(2)} ${units[exponent]}`;
}

// Run the bundle test
bundleWithParcel().then(exitCode => {
  process.exit(exitCode);
});