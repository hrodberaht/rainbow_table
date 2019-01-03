const fs = require('fs');
const md5 = require('js-md5');

const checkingHash = 'c8e095e2a26f8540afabb36dcdaee3b1';
const text = 'pan_tadeusz.txt';
const fileWithWords = 'word_list.txt';
const fileWithPassword = 'result.txt';

fs.readFile(text, 'utf8', (err, data) => {
  if (err) throw err;
  let words = '';
  data
    .replace(/^[a-zA-Z]/gm, ' ')
    .split(' ')
    .map(word => (words += `${word.trim()} ${md5(word)}\n`));

  fs.writeFile(fileWithWords, words, err => {
    if (err) throw err;
    fs.readFile(fileWithWords, 'utf8', (err, data) => {
      if (err) throw err;
      const password = data
        .split('\n')
        .find(word => word.includes(checkingHash))
        .split(' ')[0];
      fs.writeFile(fileWithPassword, password, err => {
        if (err) throw err;
      });
    });
  });
});
