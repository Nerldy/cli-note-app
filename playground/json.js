const fs = require('fs');


const originalNote = {
  title: 'Hello JSON',
  body: 'Some body',
};

const stringedNote = JSON.stringify(originalNote);

// console.log(__dirname);
fs.writeFileSync(`${__dirname}/m.txt`, stringedNote);

const noteString = JSON.parse(fs.readFileSync(`${__dirname}/m.txt`, 'utf8'));
console.log(noteString);
console.log(noteString.title);
