const { exec } = require('child_process');
const util = require('util');
const execProm = util.promisify(exec);
const { platform } = require('process');
const getViews = require('./get');

async function buildViews() {
  const views = await getViews();
  
  await execProm('npm run rm-dependencies');
  
  for (const view of views) await execProm(`cd "${view}" && npm i`);
  
  exec('npm i'); // install top-level dependencies
}

buildViews();