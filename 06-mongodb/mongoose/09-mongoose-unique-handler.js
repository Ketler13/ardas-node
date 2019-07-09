// Ошибки уникальности

const mongoose = require("mongoose");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

mongoose.connect(
  "mongodb://localhost/mongoose",
  {
    useNewUrlParser: true
  }
);

// вместо MongoError будет выдавать ValidationError (проще ловить и выводить)
mongoose.plugin(beautifyUnique);

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: "Укажите email",
    unique: "Такой email уже есть"
  }
});

const User = mongoose.model("User", userSchema);

(async () => {
  await User.remove({});

  await User.create({ email: "pete@gmail.com" });
  await User.create({ email: "pete@gmail.com" });
})()
  .catch(err => console.error(err))
  .then(() => mongoose.disconnect());
