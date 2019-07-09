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
      required: "Укажите email",
      unique: "такой пользователь уже есть!"
    }
  })
);

async function createUsers() {
  // new User({..}).save()
  await User.remove({});
  let pete1 = await User.create({ email: "pete@gmail.com" });
  let pete2 = await User.create({ email: "pete@gmail.com" });
  let mary = await User.create({ email: "mary@gmail.com" });
}

createUsers()
  .then(() => console.log("done"))
  .catch(console.error)
  .then(() => mongoose.disconnect());
