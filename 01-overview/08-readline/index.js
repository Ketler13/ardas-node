const readline = require("readline");

function completer(line) {
  const completions = "bob  mary john lucy".split(" ");
  const hits = completions.filter(c => c.startsWith(line));
  return [hits.length ? hits : completions, line];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer,
  prompt: "yo-yo >"
});

let user = {};
// question
rl.question("What is your first name?", answer => {
  user.firstName = answer;
  rl.question("What is your last name?", answer => {
    user.lastName = answer;
    rl.write(`Your fullname is ${user.firstName} ${user.lastName}!\n`);
  });
});

// line
// node 08-readline < 08-readline/text.txt
// rl.on("line", data =>
//   console.log(
//     data
//       .split("")
//       .reverse()
//       .join("")
//   )
// );

// prompt
// rl.prompt();
// rl.on("line", data => {
//   switch (data.trim()) {
//     case "tea":
//       console.log("Your tea is ready!");
//       break;
//     case "borsch":
//       console.log("Sorry, no cabbage =(");
//       break;
//     case "wine":
//       console.log("Only red is available!");
//       break;
//     default:
//       console.log("Not in our restaurant");
//   }
//   rl.prompt();
// });
//
rl.on("close", () => console.log("Have a nice day!"));
