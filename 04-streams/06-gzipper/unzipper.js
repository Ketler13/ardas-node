const fs = require("fs");
const zlib = require("zlib");
const file = process.argv[2];

fs.createReadStream(file + ".zz")
  .pipe(zlib.createGunzip())
  .on("data", () => process.stdout.write("."))
  .pipe(fs.createWriteStream(file))
  .on("finish", () => console.log("Done"));
