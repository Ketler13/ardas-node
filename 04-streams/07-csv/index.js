const fs = require("fs");
const split = require("split");
const through2 = require("through2");
const http = require("http");

const stream = fs.createReadStream("sample.csv");

const parseCSV = () => {
  let templateKeys = [];
  let parseHeadline = true;
  return through2.obj((data, enc, cb) => {
    /* 1 */
    if (parseHeadline) {
      templateKeys = data.toString().split(",");
      parseHeadline = false;
      return cb(null, null); /* 2 */
    }

    const entries = data.toString().split(",");
    const obj = {};

    templateKeys.forEach((el, index) => {
      /* 3 */
      obj[el] = entries[index];
    });

    return cb(null, obj); /* 4 */
  });
};

const pickFirst10 = () => {
  let cnt = 0;
  return through2.obj((data, enc, cb) => {
    if (cnt++ < 10) {
      return cb(null, data);
    }
    return cb(null, null);
  });
};

const toJSON = () => {
  let objs = [];
  return through2.obj(
    function(data, enc, cb) {
      objs.push(data); /* 1 */
      cb(null, null);
    },
    function(cb) {
      /* 2 */
      this.push(JSON.stringify(objs));
      cb();
    }
  );
};

const server = http.createServer((req, res) => {
  stream
    .pipe(parseCSV())
    .pipe(pickFirst10())
    .pipe(toJSON())
    .pipe(res);
});

server.listen(8000);
