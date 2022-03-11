// webpack.base.js
const path = require('path');

const nrwlConfig = require("@nrwl/react/plugins/webpack.js");

module.exports = ({ config }) => {
  config.entry.push(path.join(__dirname, './src/index.tsx'));
  config.output.path.push(path.resolve(__dirname, './docs'));
  config.output.filename.push('simple-calendar.js');
  config.target.push('web');
  config.devtool.push('source-map');

    config.resolve.extensions.push('.ts', '.tsx', '.js', '.css', '.txt');
      config.resolve.fallback.stream.push(require.resolve("stream-browserify"));
      config.resolve.fallback.crypto.push(require.resolve("crypto-browserify"));
      config.resolve.fallback.util.push(require.resolve("util"));
      config.resolve.fallback.http.push(require.resolve("http-browserify"));
      config.resolve.fallback.https.push(require.resolve("https-browserify"));
      config.resolve.fallback.os.push(require.resolve("os-browserify/browser"));
      config.resolve.fallback.zlib.push(require.resolve('browserify-zlib')); 
      config.resolve.fallback.fs.push(false);
      config.resolve.fallback.zlib.push(false);
      config.resolve.fallback.symlinks.push(false);
  config.module.rules.push({
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
      });
      config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      });
      config.module.rules.push({ 
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto'
			});
      config.module.rules.push({
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader',
      });
      config.module.rules.push({
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader:'url-loader',
      });
      config.module.rules.push({
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader:'url-loader',
      });
      config.module.rules.push({
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader',
      });
      config.module.rules.push({ test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader' });
      config.module.rules.push({ test: /\.ico$/, loader: 'file-loader' });
      config.module.rules.push({ test: /\.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, loader: 'url-loader' });
      return config;
};


//module.exports = config;
// module.exports = (config) => {
//   // first call it so that @nrwl/react plugin adds its configs
//   nrwlConfig(config);
// };
