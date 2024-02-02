const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const dotenv = require('dotenv');
dotenv.config();

// set up application-level middleware
const app = express();

if (process.argv[2] === 'development') { // use webpack development middleware
  const webpackConfig = require('./views/pc-repair-app/webpack.dev.js');
  const compiler = webpack(webpackConfig);
  const publicPath = webpackConfig.output.publicPath;
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: publicPath,
    })
  );
} else if (process.argv[2] === 'production') {
  // configure repair app routes
  const repairAppDir = path.resolve(__dirname, 'views/pc-repair-app/');
  const repairAppStatic = path.join(repairAppDir, 'dist/');

  app.use(express.static(repairAppStatic));

  // configure main website routes
  app.get('/', (req, res, next) => {
    res.json({message: 'Hello World'});
  });


  app.get('/pc-repair-clinic', (req, res, next) => {
    res.sendFile('index.html', {
      root: repairAppStatic
    });
  });
}

// configure host variables
const { PORT: port = 5670, HOST: host = 'localhost' } = process.env;

app.listen(port, () => console.log(`App listening on http://${host}:${port}\n`));