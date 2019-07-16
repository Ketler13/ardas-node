const express = require("express");
const fs = require("fs");
const path = require("path");
const passport = require("@/libs/passport");
const apiRouter = require("./apiRouter");
const login = require("./routes/login");
const register = require("./routes/register");
const { getMovies } = require("@/routes/movies");

const app = express();

const middlewares = fs.readdirSync(path.join(__dirname, "middlewares")).sort();
middlewares.forEach(m => require(`@/middlewares/${m}`).init(app));

app.post("/login", login);
app.post("/login-local", passport.authenticate("local"), (req, res) => {
  console.log(req.isAuthenticated());
  res.send("Success");
});
app.post("/register", register);
app.get("/movies", getMovies);

app.get("/logout", (req, res) => {
  console.log("Auth status:", req.isAuthenticated());
  req.logout();
  res.send("Success");
});

app.get("/local-data", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Success");
  } else {
    res.sendStatus(401);
  }
});

app.use("/api", apiRouter);

module.exports = app;
