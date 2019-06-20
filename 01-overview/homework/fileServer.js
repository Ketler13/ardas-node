const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const mime = require("mime");

const server = http.createServer(requestHandler);
const ROOT = __dirname + "/files/";

function requestHandler(req, res) {
  sendFileSafe(url.parse(req.url).pathname, res);
}

function sendFileSafe(filePath, res) {
  try {
    filePath = decodeURIComponent(filePath);
  } catch (e) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }

  if (~filePath.indexOf("\0")) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }

  filePath = path.normalize(path.join(ROOT, filePath));

  if (filePath.indexOf(ROOT) != 0) {
    res.statusCode = 404;
    res.end("File not found");
    return;
  }

  fs.stat(filePath, function(err, stats) {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end("File not found");
      return;
    }

    sendFile(filePath, res);
  });
}

function sendFile(filePath, res) {
  fs.readFile(filePath, function(err, content) {
    if (err) throw err;

    const type = mime.getType(filePath);
    res.setHeader("Content-Type", type + "; charset=utf-8");
    res.end(content);
  });
}

server.listen(3000, () => console.log("Server started at port " + 3000));
