const mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect(
  "mongodb://localhost/migrations",
  {
    keepAlive: 1,
    poolSize: 5,
    useNewUrlParser: true
  }
);

const cardSchema = new mongoose.Schema({
  title: String,
  description: String
});

const Card = mongoose.model("Card", cardSchema);

module.exports.up = function(next) {
  Card.create({ title: "First card", description: "first description" })
    .then(() => next())
    .catch(next);
};

module.exports.down = function(next) {
  Card.deleteMany({})
    .then(() => next())
    .catch(next);
};
