const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdin.on('keypress', (key) => {
  if (key === '\u0003') {
    rl.close();
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
  if (key === 'b') {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 0);
  }
  if (parseInt(key) <= 9 && parseInt(key) >= 1) {
    process.stdout.write(`\nSetting timer for ${key} second(s)...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, parseInt(key) * 1000);
  }
  process.stdout.write('\n');
});