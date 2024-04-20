const path = require('path');
const siteRouter = require('express').Router();

const siteDist = path.resolve(__dirname, '../views/site/dist/');

siteRouter.get('/', (req, res) => {
  res.sendFile('index.html', { root: siteDist });
});

siteRouter.get('/:page', (req, res) => {
  res.sendFile('index.html', { root: siteDist }); 
});

module.exports = { router: siteRouter, static: siteDist };