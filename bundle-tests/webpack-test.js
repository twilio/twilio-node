const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

async function bundleWithWebpack() {
  try {
    // Create output directory if it doesn't exist
    const outdir = path.join(__dirname, 'webpack-output');
    if (!fs.existsSync(outdir)) {
      fs.mkdirSync(outdir, { recursive: true });
    }

    // Define webpack config
    const compiler = webpack({
      entry: path.join(__dirname, 'test.js'),
      target: 'node',
      mode: 'production',
      output: {
        path: outdir,
        filename: 'bundle.js',
      },
      externals: [
        'crypto', 'fs', 'https', 'http', 'os', 'path', 'util', 'querystring',
        'url', 'stream', 'events', 'net', 'tls', 'zlib', 'buffer',
        /^node:/
      ],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    });

    // Run webpack
    return new Promise((resolve, reject) => {
      compiler.run((err, stats) => {
        if (err) {
          console.error('Webpack compilation error:', err);
          return reject(err);
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
          console.error('Webpack errors:\n', info.errors.map(e => e.message).join('\n'));
          return reject(new Error('Webpack compilation failed'));
        }

        if (stats.hasWarnings()) {
          console.warn('Webpack warnings:\n', info.warnings.map(w => w.message).join('\n'));
        }

        // Output compilation stats
        console.log(stats.toString({
          chunks: false,
          colors: true
        }));

        console.log('Webpack bundle completed successfully');
        compiler.close(closeErr => {
          if (closeErr) console.error('Error closing webpack compiler:', closeErr);
          resolve(0);
        });
      });
    });
  } catch (error) {
    console.error('Webpack bundle failed:', error);
    return 1;
  }
}

// Run the bundle test
bundleWithWebpack().then(exitCode => {
  process.exit(exitCode);
});