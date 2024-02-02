const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // creates an html file to inject source code into
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extracts css from each js file and creates a new css reference file
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const imgRegex = /.(jpg|jpeg|png|svg|gif)$/i;
const fontRegex = /\.(woff|woff2|eot|ttf|otf)$/i;

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({ // should be first, as it is depended on by other integrated plugins
      title: 'App Boilerplate',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/assets/html-templates/index.html'), 
      inject: true, // inject all assets into template; Position (head or body) depends on scriptLoading
      scriptLoading: 'defer' // choose how scripts are injected into the html {'blocking'|'defer'|'module'}
    }),
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '../../public/images/logos/mb-logo.svg'), // source image to generate icon from
      inject: true, // inject links/metadata into HtmlWebpackPlugin(s)
      // outputPath: 'assets', // directory to output the assets relative to the webpack output dir.
      prefix: 'assets/images/favicons/', // prefix path for generated assets
      // generated icon depends on the webpack mode:
      // development-> use a light favicons build.
      // production-> use a full webapp favicons build.
      favicons: {
        developerURL: null, // prevent retrieving from the nearest package.json
        background: '#bebebeff',
        theme_color: '#bebebeff',
        icons: { // create icons for the following:
          android: true, 
          appleIcon: true, 
          appleStartup: true,
          favicons: true, 
          windows: true, 
          yandex: true, 
        }
      }
    }),
  ],
  module: {
    // rules are processed top -> bottom. Loaders within each rule are processed bottom -> top.
    rules: [ 
      {
        test: /\.s?[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          path.resolve(__dirname, 'node_modules/css-loader'),
          path.resolve(__dirname, 'node_modules/sass-loader')],
      },
      {
        test: imgRegex,
        type: 'asset/resource',
      },
      {
        test: fontRegex,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: path.resolve(__dirname, 'node_modules/ts-loader'),
        exclude: /node_modules/,
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: path.resolve(__dirname, 'node_modules/babel-loader'),
          options: {
            presets: [
              [path.resolve(__dirname, 'node_modules/@babel/preset-env'), { targets: "defaults" }]
            ],
            cacheDirectory: true,
          }
        }
      }
    ]
  },
  resolve: {
    // create resolve alias entries from the tsconfig.json "paths" option
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, 'tsconfig.json') })], 
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // omit file extensions on import statements
  },
  output: {
    publicPath: path.resolve(__dirname, '/'), // path for static assets
    filename: 'assets/scripts/[name].[contenthash].bundle.js',
    assetModuleFilename: (pathData) => {
      const ext = pathData.filename.match(/(\.\w+)$/g)[0];
      let path = 'assets/';

      if (imgRegex.test(ext)) path += 'images/';
      else if (fontRegex.test(ext)) path += 'fonts/';
      
      return path += '[hash][ext][query]';
    },
    chunkFilename: '[name].[id].chunk.js', // determines the name of dynamic chunk files
    path: path.resolve(__dirname, 'dist'), // filesystem of the machine
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic', // keeps the vender hash consistent between builds
    runtimeChunk: 'single', // create a single runtime bundle for all chunks
    splitChunks: {
      cacheGroups: {
        vendor: { // create bundles for third-party libraries
          test: /[\\/]node_modules[\\/](react|react-dom|babel)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },
  cache: true,
}