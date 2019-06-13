const Developer = require("./Developer");
const Manager = require("./Manager");
const mediator = require("./mediator");

const emma = new Developer("Emma", mediator);
const harry = new Developer("Harry", mediator);
const john = new Manager("John", mediator);
