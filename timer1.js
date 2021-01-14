const process = require('process');
const times = process.argv.slice(2);
const timesNumbers = times.map(x => Number(x));
for (const time of timesNumbers) {
  if (typeof time === "number" && time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}