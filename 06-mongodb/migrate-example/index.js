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
