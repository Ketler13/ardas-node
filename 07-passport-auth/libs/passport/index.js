const passport = require("passport");

require("./serialize");
require("./localStrategy");
require("./jwtStrategy");

module.exports = passport;
