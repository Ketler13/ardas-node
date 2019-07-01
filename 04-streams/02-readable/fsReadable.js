const fs = require("fs");

const stream = fs.createReadStream("./cyrillic.txt", { highWaterMark: 8 });

stream.on("data", chunk => console.log(chunk.toString()));
