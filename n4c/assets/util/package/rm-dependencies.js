const { exec } = require('child_process');
const { platform } = require('process');

switch (platform) {
  case 'darwin':
  case 'linux':
    exec("rm -r node_modules package-lock.json");
    break;
  case 'win32':
    exec("del package-lock.json & rd /Q /S node_modules");
    break;
  default: 
    throw new Error('Unsupported platform');
}