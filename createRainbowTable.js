const fs = require('fs');
const md5 = require('js-md5');

const fileWithWords = process.argv[2];
const fileWithRainbowTable = 'rainbow_word_list.txt';

fs.readFile(fileWithWords, 'utf8', (err, data) => {
  if (err) throw err;
  let rainbowTable = '';
  data
    .split('\n')
    .map(word => (rainbowTable += `${word} ${md5(word)}\n`));

  fs.writeFile(fileWithRainbowTable, rainbowTable, err => {
    if (err) throw err;
  });
});
