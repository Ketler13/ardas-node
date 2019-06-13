const Developer = require("./Developer");
const Manager = require("./Manager");

const john = new Developer("John Snow", 100);
const lady = new Manager("Lady Gaga", 100, "NASA");

console.log(john.toString());
console.log(lady.toString());
