const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("@/models/user");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // 'username' by default
      passwordField: "password",
      passReqToCallback: true
    },
    // Три возможных итога функции
    // done(null, user[, info]) ->
    //   strategy.success(user, info)
    // done(null, false[, info]) ->
    //   strategy.fail(info)
    // done(err) ->
    //   strategy.error(err)
    async function(req, email, password, done) {
      // const user = await User.findOne(...)
      console.log("here");
      User.findOne({ email }, (err, user) => {
        console.log("find user", err, user);
        if (err) {
          return done(err);
        }

        if (!user || !user.checkPassword(password)) {
          // don't say whether the user exists
          return done(null, false, {
            message: "Нет такого пользователя или пароль неверен."
          });
        }
        return done(null, user);
      });
    }
  )
);
