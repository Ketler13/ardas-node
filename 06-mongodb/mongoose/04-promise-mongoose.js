const mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect(
  "mongodb://localhost/mongoose",
  {
    useNewUrlParser: true
  }
);

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    }
  })
);

function createUsers() {
  return User.deleteMany({})
    .then(function() {
      console.log("removed");

      return User.create({ email: "john@gmail.com" });
    })
    .then(function(user) {
      console.log("created", user._id);

      // try "john@gmail.com"
      return User.create({ email: "pete@gmail.com" });
    })
    .then(function(user) {
      console.log("created", user._id);

      return User.create({ email: "mary@gmail.com" });
    })
    .then(function(user) {
      console.log("created", user._id);
    });
}

createUsers()
  .then(
    function() {
      console.log("OK");
    },
    function(err) {
      console.error(err);
    }
  )
  .then(function() {
    mongoose.disconnect();
  });
