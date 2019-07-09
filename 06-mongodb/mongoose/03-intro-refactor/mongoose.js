const mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect(
  "mongodb://localhost/mongoose",
  {
    keepAlive: 1,
    poolSize: 5,
    useNewUrlParser: true
  }
);

module.exports = mongoose;
