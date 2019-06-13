const Logger = require("./Logger");
const Developer = require("./Developer");
const ModernFrameworks = require("./ModernFrameworks");

const logger = new Logger().getInstance();

logger.log("starting app...");

const john = new Developer("john", 3);
const modernFrameworks = new ModernFrameworks("Frontend bestsellers", [
  {
    name: "Angular",
    stars: 48986,
    issues: 2447
  },
  {
    name: "React",
    stars: 130901,
    issues: 534
  },
  {
    name: "Vue",
    stars: 141100,
    issues: 207
  }
]);

logger.log("finished config...");

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));
