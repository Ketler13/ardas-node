const Developer = require("./Developer");

const john = new Developer("John Snow");
john.addOneMoreTechnology("jQuery");
john.addOneMoreTechnology("angular");
john.addOneMoreTechnology("react");
john.addOneMoreTechnology("node");
john.addOneMoreTechnology("redis");

const lGaga = new Developer("Lady Gaga");
lGaga.addOneMoreTechnology("jQuery");
lGaga.addOneMoreTechnology("angular");
lGaga.addOneMoreTechnology("react");
lGaga.addOneMoreTechnology("node");
lGaga.addOneMoreTechnology("kubernetes");

console.log(`${john.name}: ${john.technologies}`);
console.log(`${lGaga.name}: ${lGaga.technologies}`);
