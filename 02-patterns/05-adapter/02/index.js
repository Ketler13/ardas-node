const localStorage = require("./localStorage");

console.log("localStorage length: ", localStorage.length);

const secret = localStorage.getItem("secret");

console.log("secret: ", secret);

if (!secret) {
  console.log("Secret not found. Setting the secret and salt...");
  localStorage.setItem("salt", "lorem ipsum");
  localStorage.setItem("secret", "12345");
} else {
  console.log("Secret found.", secret);
  console.log("clearing the secret...");
  localStorage.clear();
}
