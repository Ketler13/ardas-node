const express = require("express");
const cors = require("cors");
const { getUserParam, getUser } = require("./routes/users");

const app = express();

app.param("id", getUserParam);
app.get("/users/:id", getUser);

module.exports = app;
