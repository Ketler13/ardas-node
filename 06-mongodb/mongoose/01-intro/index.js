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

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      // встроенные сообщения об ошибках (можно изменить):
      // http://mongoosejs.com/docs/api.html#error_messages_MongooseError.messages
      required: "Укажите email", // true for default message
      unique: true,
      validate: [
        {
          validator: function checkEmail(value) {
            return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
          },
          msg: "Укажите, пожалуйста, корректный email."
        }
      ],
      lowercase: true, // to compare with another email
      trim: true
    },
    name: String,
    surname: String,
    gender: {
      type: String,
      enum: ["M", "F"], // enum validator
      default: "M"
    }
  },
  {
    timestamps: true // createdAt, updatedAt
  }
);

userSchema.methods.getFullName = function() {
  return this.name + " " + this.surname;
};

// публичные (доступные всем) поля
userSchema.methods.getPublicFields = function() {
  return {
    email: this.email,
    gender: this.gender
  };
};

const User = mongoose.model("User", userSchema);

const mary = new User({
  email: "mary@mail.com",
  gender: "F"
});

console.log("Raw", mary);
console.log("Public", mary.getPublicFields());
console.log("Object", mary.toObject());

// mary.toObject() - обычный объект без методов, с данными

User.remove({}, function(err) {
  mary.save(function(err, result) {
    console.log(err);

    User.findOne(
      {
        email: "mary@mail.com"
      },
      function(err, user) {
        console.log("found", user);

        mongoose.disconnect();
      }
    );
  });
});
