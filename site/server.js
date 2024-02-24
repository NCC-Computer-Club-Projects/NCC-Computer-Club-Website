const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const dotenv = require('dotenv');

// set up application-level middleware
const app = express();

// configure deveopment or production environment
if (process.argv[2] === 'development') { // use webpack development middleware
  const webpackConfig = require('./views/pc-repair-clinic/webpack.dev.js');
  const compiler = webpack(webpackConfig);
  const publicPath = webpackConfig.output.publicPath;
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: publicPath,
    })
  );
} else if (process.argv[2] === 'production') dotenv.config();

// require routers
const { siteRouter } = require('./routes/index.js');

// set up siteRouter 
app.use(express.static(siteRouter.static));
app.use('/pc-repair-clinic', siteRouter.router);

// configure host variables
const { PORT: port = 5670, HOST: host = 'localhost', PROTOCOL: protocol = 'http' } = process.env;

app.listen(port, host, () => console.log(`App listening on ${protocol}://${host}:${port}\n`));
