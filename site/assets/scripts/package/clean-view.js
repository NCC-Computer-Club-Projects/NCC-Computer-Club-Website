const { exec } = require('child_process');
const { platform } = require('process');

switch (platform) {
  case 'darwin':
  case 'linux':
    exec("rm -r dist/*");
    break;
  case 'win32':
    exec("rmdir /S /Q dist\\*");
    break;
  default: 
    throw new Error('Unsupported platform');
}