const logger = require("./Logger");

class ModernFrameworks {
  constructor(name, items = []) {
    this.name = name;
    this.items = items;
    logger.log(`ModernFrameworks: ${name} are only ${items.length} items.`);
  }
}

module.exports = ModernFrameworks;
