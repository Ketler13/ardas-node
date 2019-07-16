const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const config = require("config");

const User = require("@/models/user");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secret;

passport.use(
  new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("jwt_payload", jwt_payload);
    User.findOne({ _id: jwt_payload.id }, function(err, user) {
      console.log("err", err, user);
      if (err) {
        return done(err, false);
      }
      return done(null, user || false);
    });
  })
);
