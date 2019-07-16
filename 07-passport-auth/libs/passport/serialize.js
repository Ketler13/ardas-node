const User = require("@/models/user");
const passport = require("passport");

// паспорт напрямую с базой не работает
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id, done));
