const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

class FindPattern extends EventEmitter {
  constructor(regex) {
    super();
    this.files = [];
    this.regex = regex;
  }

  addFile(file) {
    this.files.push(file);
    return this;
  }

  find(pattern) {
    this.files.forEach(file => this.findInFile(file, pattern));
    return this;
  }

  findInFile(file, pattern) {
    fs.readFile(file, 'utf8', (err, content) => {
      if (err) {
        return this.emit('error', err);
      }

      this.emit('fileread', file);
      let match = null;
      if (match = content.match(this.regex)) {
        match.forEach(elem => this.emit('found', file, elem));
      }
    });
  }
}

module.exports = FindPattern;
