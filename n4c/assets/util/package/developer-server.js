const { spawn } = require('child_process');

// Start the file watcher (nodemon)
const watcher = spawn('nodemon', ['--config', 'nodemon.json'], {
  stdio: 'inherit',
  shell: true
});

// Start the development server
const server = spawn('node', ['server.js', 'development'], {
  stdio: 'inherit',
  shell: true
});

// Handle process termination
process.on('SIGINT', () => {
  watcher.kill();
  server.kill();
  process.exit();
});

// Handle errors
watcher.on('error', (error) => {
  console.error(`Watcher error: ${error.message}`);
});

server.on('error', (error) => {
  console.error(`Server error: ${error.message}`);
});

// Handle process exit
watcher.on('exit', (code) => {
  if (code !== 0 && code !== null) {
    console.error(`Watcher exited with code ${code}`);
  }
});

server.on('exit', (code) => {
  if (code !== 0 && code !== null) {
    console.error(`Server exited with code ${code}`);
  }
}); 