const { spawn } = require('child_process');

const childProcess = spawn('node', ['1-stdin.js'], { stdio: 'inherit' });

childProcess.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
