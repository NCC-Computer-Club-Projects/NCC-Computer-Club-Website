const path = require('path');
const pcRepairRouter = require('express').Router();

const repairApp = path.resolve(__dirname, '../views/pc-repair-app/dist/');

pcRepairRouter.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: repairApp
  });
});

module.exports = { router: pcRepairRouter, static: repairApp };