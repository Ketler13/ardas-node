const Logger = require("./Logger");

const logger = new Logger();

class ModernFrameworks {
  constructor(name, items = []) {
    this.name = name;
    this.items = items;
    logger.log(`ModernFrameworks: ${name} are only ${items.length} items.`);
  }
}

module.exports = ModernFrameworks;
