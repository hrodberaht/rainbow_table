const fs = require('fs');

const checkingHash = process.argv[3];
const fileWithRainbowTable = process.argv[2];
const fileWithPassword = 'result.txt';

fs.readFile(fileWithRainbowTable, 'utf8', (err, data) => {
  if (err) throw err;
  const password = data
    .split('\n')
    .find(word => word.includes(checkingHash))
    .split(' ')[0];
  fs.writeFile(fileWithPassword, password, err => {
    if (err) throw err;
  });
});
