const http = require("http");
const url = require("url");

const requestHandler = (req, res) => {
  // console.log("Requested", req.method, req.url, req.headers);
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === "/secret" && parsedUrl.query.message) {
    // res.writeHead(200, "Ok", { "Cache-control": "no-cache" });
    res.setHeader("Cache-control", "no-cache");
    res.write("First\n");
    res.write("Second\n");
    res.end(parsedUrl.query.message);
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
};

// const server = http.createServer(requestHandler);
const server = new http.Server();

// const emit = server.emit.bind(server);
// server.emit = (...args) => {
//   console.log("Emit", args[0]);
//   emit(...args);
// };
server.on("request", requestHandler);

server.listen(process.env.PORT || 3000);
