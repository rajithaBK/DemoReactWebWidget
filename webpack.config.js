// webpack.base.js
const path = require('path');

const nrwlConfig = require("@nrwl/react/plugins/webpack.js");

const config = {
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: '[name].bundle.js',
  },
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.txt'],
    fallback: {
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      util: require.resolve("util"),
      http: require.resolve("http-browserify"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      zlib: require.resolve('browserify-zlib'), 
      fs: false,
      zlib: false,
      symlinks: false
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        include: [path.resolve('src')],
        loader: "awesome-typescript-loader",
        options: {
          transpileOnly: false,
          compilerOptions: {
            module: 'es2015',
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      { 
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto'
			},
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader:'url-loader',
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader:'url-loader',
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader',
      },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader' },
      { test: /\.ico$/, loader: 'file-loader' },
      { test: /\.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, loader: 'url-loader' },
    ],
  },
  
};


module.exports = config;
// module.exports = (config) => {
//   // first call it so that @nrwl/react plugin adds its configs
//   nrwlConfig(config);
// };
