const { exec } = require('child_process');
const { platform } = require('process');
const getViews = require('./get');

async function buildViews() {
  const views = await getViews();
  for (const view of views) {
    switch (platform) {
      case 'darwin':
      case 'linux':
        exec(`npm run rm-dependencies ; (cd "${view}" && npm i) && npm i`); 
        break;
      case 'win32':
        exec(`npm run rm-dependencies & (cd "${view}" && npm i) && npm i`); 
        break;
      default: 
        throw new Error('Unsupported platform');
    }
  }
}

buildViews();