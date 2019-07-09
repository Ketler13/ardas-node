const mongoose = require("mongoose");

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
  return User.deleteMany({}).then(() => {
    console.log("removed");

    return Promise.all([
      User.create({ email: "john@gmail.com" }).catch(err => err),
      User.create({ email: "pete@gmail.com" }).catch(err => err),
      User.create({ email: "mary@gmail.com" }).catch(err => err)
    ]);
  });
}

createUsers()
  .then(results => console.log(results), err => console.error(err))
  .then(() => mongoose.disconnect());
