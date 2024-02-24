const path = require('path');
const fs = require('fs/promises');

async function getViews() {
  const views = '../../../views';
  const viewNames = await fs.readdir(path.resolve(__dirname, views));
  const viewPaths = viewNames.map(view => path.resolve(__dirname, views, view));
  return viewPaths;
}

module.exports = getViews;