const express = require('express');
const dotenv = require('dotenv');

// set up application-level middleware
const app = express();
app.use(express.json());

// configure deveopment or production environment
const mode = process.argv[2];

if (mode === 'development') { // use webpack development middleware
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');

  const webpackConfig = require('./site/webpack.dev.js');
  const compiler = webpack(webpackConfig);
  const publicPath = webpackConfig.output.publicPath;
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: publicPath,
    })
  );
} else if (mode === 'production') dotenv.config();

// require routers
const { siteRouter } = require('./routes/index.js');

// set up siteRouter 
app.use(express.static(siteRouter.static));

app.use('/', siteRouter.router);

// configure host variables
const { PROTOCOL: protocol = 'http', HOST: host = 'localhost', PORT: port = 5670 } = process.env;

app.listen(port, () => console.log(`App listening on ${protocol}://${host}:${port}\n`));
