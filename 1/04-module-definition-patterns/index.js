// 1 - named exports
exports.info = () => {
  console.log(...ars);
}
exports.verbose = () => {
  cconsole.log('-=Logger=-: ', ...args);
}

// const logger = require('./logger');
// logger.info('Info');
// logger.verbose('Verbose');

// ==============================

// 2 - exporting a function
module.exports = function logger(...args) {
  console.log(...ars);
}

module.exports.verbose = function verbose(...args) {
  console.log('-=Logger=-: ', ...args);
}

// const logger = require('./logger');
// logger('Info');
// logger.verbose('Verbose');

// ==============================

// 3 - exporting a constructor

class Logger {
  info(..args) {
    console.log(...args);
  }

  verbose() {
    console.log('-=Logger=-: ', ...args);
  }
}

module.exports = Logger;

// const Logger = require('./logger');
// const logger = new Logger();
// logger.info('Info');
// logger.verbose('Verbose');

// ==============================

// 4 - exporting an instance

class Logger {
  info(..args) {
    console.log(...args);
  }

  verbose() {
    console.log('-=Logger=-: ', ...args);
  }
}

module.exports = new Logger();
module.exports.Logger = Logger;

// const logger = require('./logger');
// logger.info('Info');
// logger.verbose('Verbose');
