const readline = require("readline");
const fs = require("fs");
const path = require("path");

const pathToFiles = path.join(__dirname, "files");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Path and content >"
});

rl.prompt();
rl.on("line", onLineReceived);
rl.on("close", () => console.log("Bye"));

function onLineReceived(rawData) {
  if (rawData === "exit") {
    rl.close();
    process.stdin.destroy();
  } else {
    parseUserInput(rawData);
    rl.prompt();
  }
}

function parseUserInput(data) {
  const [filePath = "", ...contentArray] = data.split(/\s/);
  const content = contentArray.join(" ");
  const { dir, base } = path.parse(filePath);
  if (dir) {
    const resolvedDir = path.join(pathToFiles, dir);
    fs.mkdirSync(resolvedDir, { recursive: true });
    fs.writeFileSync(path.join(resolvedDir, base), content);
  }
}
