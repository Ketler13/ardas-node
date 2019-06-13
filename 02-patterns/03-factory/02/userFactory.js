const Manager = require("./Manager");
const Developer = require("./Developer");

const userFactory = (name, money = 0, type, employer) => {
  if (type === "manager") {
    return new Manager(name, money, employer);
  } else {
    return new Developer(name, money);
  }
};

module.exports = userFactory;
