const { exec } = require('child_process');
const getViews = require('./get');

async function compileViews() {
  const build = process.argv[2];
  const views = await getViews();
  for (const view of views) exec(`cd "${view}" && npm run ${build}`);
}

compileViews();