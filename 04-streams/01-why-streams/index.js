const fs = require("fs");
const url = require("url");
const server = require("http").createServer();

writeToFile();

server.on("request", onRequest);

server.listen(8000);

function writeToFile() {
  const file = fs.createWriteStream("./big.txt");
  for (let i = 0; i <= 1e6; i++) {
    file.write(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
    );
  }

  console.log("Finished");

  file.end();

  setTimeout(() => {
    fs.readFile("./big.txt", (err, data) => {
      if (err) throw err;

      console.log(data);
    });
  });
}

function onRequest(req, res) {
  const { pathname } = url.parse(req.url);
  if (pathname === "/") {
    fs.readFile("./big.txt", (err, data) => {
      if (err) throw err;

      res.end(data);
    });
  } else if (pathname === "/stream") {
    const src = fs.createReadStream("./big.txt");
    src.pipe(res);
  } else {
    res.end();
  }
}

process.on("SIGINT", () => {
  fs.unlink("./big.txt", err => {
    if (err) {
      process.exit(1);
    } else {
      console.log("Bye");
      process.exit(0);
    }
  });
});
