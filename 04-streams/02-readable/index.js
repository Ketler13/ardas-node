const { Readable } = require("stream");

const items = new Array(1000).fill(1).map((_, i) => `${i + 1}\n`);
let index = -1;

const inStream = new Readable({
  read() {
    // console.log("SIZe", size);
    // if (index++ <= items.length) {
    //   this.push(items[index]);
    // } else {
    //   this.push(null);
    // }
  }
  // highWaterMark: 8
});

inStream.push("ABCDEFGHIJKLM");
inStream.push("NOPQRSTUVWXYZ");
inStream.push("\n");

inStream.push(null);

inStream.pipe(process.stdout);
