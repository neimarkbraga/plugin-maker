const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const OUTPUT_FILENAME = 'my-plugin.js';

module.exports = (options) => {
  const env = options.production ? 'production' : options.development ? 'development' : 'none';
  return {
    mode: env,
    watch: env === 'development',
    devtool: env === 'development' ? 'cheap-module-source-map' : 'source-map',
    entry: './src/index.jsx',
    output: {
      filename: OUTPUT_FILENAME,
      path: path.resolve(__dirname, (env === 'development' ? '.dev' : 'dist'))
    },
    optimization: {
      minimize: env === 'production',
      minimizer: [new TerserPlugin()]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: 'public' }]
      })
    ],
    stats: "minimal",
    devServer: {
      open: true,
      port: 8080,
      compress: true,
      static: {
        directory: path.join(__dirname, 'dev'),
        serveIndex: true,
        watch: true
      },
      watchFiles: ['src/**/*']
    }
  };
};
