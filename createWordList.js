const fs = require('fs');

const text = process.argv[2];
const fileWithWords = 'word_list.txt';

fs.readFile(text, 'utf8', (err, data) => {
  if (err) throw err;
  let words = '';
  data
    .replace(/^[a-zA-Z]|[,|;|.|:|?|!|(|)]/g, '')
    .split(' ')
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(word => (words += `${word.trim()}\n`));

  fs.writeFile(fileWithWords, words, err => {
    if (err) throw err;
  });
});
