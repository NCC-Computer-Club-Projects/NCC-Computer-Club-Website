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
    webpackDevMiddleware(compiler, { publicPath })
  );
} else if (mode === 'production') dotenv.config();

// require routers
const { siteRouter } = require('./routes/index.js');

// set up siteRouter 
app.use(express.static(siteRouter.static));

app.use('/', siteRouter.router);

// configure server environment variables
const { PROTOCOL: protocol = 'http', HOST: host = 'localhost' } = process.env;
let { PORT: port = 5670 } = process.env;

const server = app.listen(port, () => console.log(`App listening on ${protocol}://${host}:${port}\n`));

server.on('error', e => {
  if (e.code === 'EADDRINUSE') {
    console.error(`Address in use, trying new port ${++port}`);
    setTimeout(() => {
      server.close();
      server.listen(port, host);
    }, 1000);
  }
})