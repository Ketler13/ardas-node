const Developer = require("./Developer");

require("readline").emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log("Press any direction key...");

const inventory = [
  new Developer("John", "RabbitMQ"),
  new Developer("Samantha", "Vue"),
  new Developer("Patrick", "Vue"),
  new Developer("Sam", "Backbone"),
  new Developer("Igor", "React"),
  new Developer("Ibrahim", "Angular"),
  new Developer("Ramin", "Node"),
  new Developer("Julia", "Redis")
];

process.stdin.on("keypress", (str, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  switch (key.name) {
    case "right":
      process.stdout.write("right");
      break;

    case "left":
      process.stdout.write("left");
      break;

    case "down":
      process.stdout.write("down");
      break;

    case "up":
      process.stdout.write("up");
      break;

    case "c":
      if (key.ctrl) {
        process.exit();
      }
  }
});
