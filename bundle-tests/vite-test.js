const { build } = require('vite');
const path = require('path');
const fs = require('fs');

async function bundleWithVite() {
  try {
    // Create output directory if it doesn't exist
    const outdir = path.join(__dirname, 'vite-output');
    if (!fs.existsSync(outdir)) {
      fs.mkdirSync(outdir, { recursive: true });
    }

    // Create temporary vite config file
    const configPath = path.join(__dirname, 'vite.config.js');
    fs.writeFileSync(
      configPath,
      `
      import { defineConfig } from 'vite';
      import { resolve } from 'path';

      export default defineConfig({
        build: {
          lib: {
            entry: resolve(__dirname, 'test.js'),
            formats: ['cjs'],
            fileName: () => 'bundle.js'
          },
          rollupOptions: {
            external: ['crypto', 'fs', 'https', 'http', 'os', 'path', 'util', 'querystring', 'url', 'stream', 'events', 'net', 'tls', 'zlib', 'buffer']
          },
          outDir: 'vite-output',
          emptyOutDir: true,
          minify: false
        },
        resolve: {
          // Ensure node modules are resolved
          dedupe: ['twilio']
        }
      });
      `
    );

    // Build using vite
    await build({
      configFile: configPath,
      root: __dirname,
      logLevel: 'info',
    });

    // Clean up config
    fs.unlinkSync(configPath);

    console.log('Vite bundle completed successfully');
    return 0;
  } catch (error) {
    console.error('Vite bundle failed:', error);
    return 1;
  }
}

// Run the bundle test
bundleWithVite().then(exitCode => {
  process.exit(exitCode);
});