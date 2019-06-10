const fs = require("fs");
const path = require("path");

const options = {
  flags: "a"
};

const stdOutStream = fs.createWriteStream(
  path.join(__dirname, "logs.txt"),
  options
);
const stdErrStream = fs.createWriteStream(
  path.join(__dirname, "errors.txt"),
  options
);

const logger = new console.Console(stdOutStream, stdErrStream);
const log = (...args) => logger.log(new Date(), ...args);
const error = (...args) => logger.error(new Date(), ...args);

console.log("First log");
console.error("First error");

log("Log");
error("Error");
