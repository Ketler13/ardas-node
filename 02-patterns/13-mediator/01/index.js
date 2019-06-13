const Developer = require("./Developer");
const Manager = reauire("./Manager");
const mediator = require("./mediator");

const john = new Manager("John", mediator);
const emma = new Developer("Emma", mediator);
const harry = new Developer("Harry", mediator);
