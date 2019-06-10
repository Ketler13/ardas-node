const fs = require("fs");
const path = require("path");

// readdir
const filesPath = path.join(__dirname, "files");
const dirStructure = fs.readdirSync(filesPath);
console.log("Sync dir sctructure: ", dirStructure);
fs.readdir(filesPath, (err, data) => {
  if (err) {
    console.error("Read dir async failed: ", err);
  } else {
    console.log("Async dir sctructure: ", data);
  }
});

// readfile

const configPath = path.join(__dirname, "files", "config.json");
const configFile = fs.readFileSync(configPath);
console.log("Sync file: ", configFile);
fs.readFile(configPath, (err, file) => {
  if (err) {
    console.error("Read file async failed: ", err);
  } else {
    console.log("Async file: ", file);
  }
});

// rename
const oldFilePath = path.join(__dirname, "files", "test.txt");
const newFilePath = path.join(__dirname, "files", "test2.txt");
fs.renameSync(oldFilePath, newFilePath);
fs.rename(newFilePath, oldFilePath, error => {
  if (error) {
    console.error("Async rename failed: ", error);
  } else {
    console.log("Renamed!");
  }
});

//stat
const syncStat = fs.statSync(configPath);
console.log("Sync stat", syncStat.isFile(), syncStat.isDirectory(), syncStat);
fs.stat(filesPath, (error, data) => {
  if (error) {
    console.error("Async stat failed: ", error);
  } else {
    console.log("Async stat: ", data.isFile(), data.isDirectory(), data);
  }
});

//writeFile
