const Logger = require("./Logger");

const logger = new Logger().getInstance();

class Developer {
  constructor(name, years = 0) {
    this.name = name;
    this.years = years;
    logger.log(`New Developer: ${name} has ${years} experience.`);
  }
}

module.exports = Developer;
