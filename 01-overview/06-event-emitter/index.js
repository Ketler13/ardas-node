const path = require('path');

const FindPattern = require('./find-pattern');
const pattern = /hello/g;
const findPattern = new FindPattern(pattern);

findPattern
  .addFile(path.join(__dirname, 'hello.txt'))
  .addFile(path.join(__dirname, 'user.txt'))
  .addFile(path.join(__dirname, 'not-exist.txt'))
  .on('fileread', file => console.log('File read', file))
  .on('found', (file, string) => console.log('Found', file, string))
  .on('error', error => console.error(error))
  .find();
