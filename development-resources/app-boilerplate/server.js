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

  // require routers
  const { pcRepairRouter } = require('./routes/index.js');

  // set up pcRepairRouter 
  app.use(express.static(pcRepairRouter.static));
  app.use('/pc-repair-clinic', pcRepairRouter.router);
}

// configure host variables
const { PORT: port = 5670, HOST: host = 'localhost' } = process.env;

app.listen(port, () => console.log(`App listening on http://${host}:${port}\n`));