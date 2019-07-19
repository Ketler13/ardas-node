const express = require("express");
const redis = require("redis");
const pub = redis.createClient();
const app = express();

app.use(express.static("public"));

app.get("/test", (req, res) => {
  console.log("Test route visited");
  pub.publish("message_channel", "I am sending a message.");
  res.end();
});

module.exports = app;
