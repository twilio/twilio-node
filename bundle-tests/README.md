# Twilio Node.js Bundle Tests

This directory contains tests to verify that the Twilio Node.js package can be successfully bundled with various bundlers.

## Bundlers Tested

- **esbuild**: Fast JavaScript bundler
- **Vite**: Modern frontend build tool based on Rollup
- **Webpack**: Widely used module bundler
- **SWC**: Rust-based transpiler (similar to Babel)
- **Parcel**: Zero-config bundler

## Setup

Install dependencies for the bundle tests:

```bash
cd bundle-tests
npm install
```

## Running Tests

You can run all bundle tests:

```bash
npm test
```

Or run tests for a specific bundler:

```bash
npm run test:esbuild
npm run test:vite
npm run test:webpack
npm run test:swc
npm run test:parcel
```

From the root directory, you can also run:

```bash
npm run test:bundle        # Run all bundle tests
npm run test:bundle:esbuild  # Run esbuild test only
# etc.
```

## How It Works

Each test:
1. Takes a simple test file that imports the Twilio package
2. Attempts to bundle it with the specific bundler
3. Reports success or failure

The `run-all-tests.js` script runs each test sequentially and provides a summary of results.

## Integration with npm lifecycle

The bundle tests are automatically run as part of the `prepublish` script, ensuring that the package can be successfully bundled with all supported bundlers before publishing to npm.