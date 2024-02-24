const { exec } = require('child_process');
const { platform } = require('process');

switch (platform) {
  case 'darwin':
  case 'linux':
    exec("rm -r views/*/node_modules views/*/package-lock.json node_modules package-lock.json");
    break;
  case 'win32':
    exec("del /S views\\*\\node_modules && del views\\*\\package-lock.json && del /S node_modules && del package-lock.json");
    break;
  default: 
    throw new Error('Unsupported platform');
}