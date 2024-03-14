const { exec } = require('child_process');
const { platform } = require('process');

switch (platform) {
  case 'darwin':
  case 'linux':
    exec("rm -r dist/*");
    break;
  case 'win32':
    exec("del /Q /S dist\* & FOR /D %d in (dist\*) DO rd /Q /S %d");
    break;
  default: 
    throw new Error('Unsupported platform');
}