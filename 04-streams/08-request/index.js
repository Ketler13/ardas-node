const request = require("request");
const fs = require("fs");
const test = fs.createWriteStream("./test.html");

request("https://google.com").pipe(test);
