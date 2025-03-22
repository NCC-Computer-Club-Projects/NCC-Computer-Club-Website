const { exec } = require('child_process');
const { platform } = require('process');

switch (platform) {
  case 'darwin':
  case 'linux':
    exec("rm -r site/dist/*");
    break;
  case 'win32':
    exec('rmdir /Q /S views\\site\\dist && mkdir views\\site\\dist');    
    break;
  default: 
    throw new Error('Unsupported platform');
}