const mongoose = require("mongoose");
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  surname: String
});

userSchema
  .virtual("fullName")
  .get(function() {
    return this.name + " " + this.surname;
  })
  .set(function(value) {
    [this.name, this.surname] = value.trim().split(/\s+/);
  });

const User = mongoose.model("User", userSchema);

let user = new User({
  name: "Vasya",
  surname: "Petrov"
});

console.log(user.fullName); // Vasya Petrov

user.fullName = "Petya Ivanov";

console.log(user.fullName);

user.save().then(console.log);
