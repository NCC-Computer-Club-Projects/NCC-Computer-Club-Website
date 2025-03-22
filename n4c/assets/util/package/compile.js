const { exec } = require('child_process');
const { platform } = require('process');
const { resolve } = require('path');
const webpack = require('webpack');

const env = process.argv[2];
const config = ['dev', 'prod', 'common'].includes(env) ? env : 'dev';

const webpackConfigPath = resolve(`site/webpack.${config}.js`);
const webpackConfig = require(webpackConfigPath);

const compiler = webpack(webpackConfig);

exec('npm run clean', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error during compilation: ${err.message}`);
    return;
  }
  console.log(stdout);

  console.log(`Compiling app for ${config} environment...`);
  compiler.run((err, stats) => {
    if (err) {
      console.error("Webpack compilation failed:", err);
      return;
    }
    console.log("Webpack compilation completed successfully!");
  });
});