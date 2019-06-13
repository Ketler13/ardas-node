const userFactory = require("./userFactory");

const john = userFactory("John Snow", 100);
const lady = userFactory("Lady Gaga", 100, "manager", "NASA");

lady.payDay(100);

console.log(john.toString());
console.log(lady.toString());
