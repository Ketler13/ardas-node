const express = require("express");
const cors = require("cors");
const app = express();

app.param("id", paramHandler);

app.get("/user/:id", (req, res) => {
  console.log("GET, Probably user is here: ", req.user);
  res.end();
});
app.post("/user/:id", (req, res) => {
  console.log("POST, Probably user is here: ", req.user);
  res.end();
});

function paramHandler(req, res, next, id, paramName) {
  console.log("Finding param", paramName, id, paramName);

  req.user = { a: 123 };
  next();
}

app.listen(3000);
