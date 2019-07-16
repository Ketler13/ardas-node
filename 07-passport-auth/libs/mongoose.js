const mongoose = require("mongoose");
const config = require("config");

if (config.mongoose.debug) {
  mongoose.set("debug", true);
}

mongoose.connect(
  config.mongoose.uri,
  config.mongoose.options
);

module.exports = mongoose;
