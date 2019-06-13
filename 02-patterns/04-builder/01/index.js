const Developer = require("./Developer");

// Employees
const john = new Developer("John", true, true, 60);
const david = new Developer("David", true, false, 20);
const phil = new Developer("Phil", true, false);

// Shoppers
const charles = new Developer("Charles", false, false, 0, 500, [
  "node",
  "react"
]);
const tabbitha = new Developer("Tabbitha", false, false, 0, 1000);
