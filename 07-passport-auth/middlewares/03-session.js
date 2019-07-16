const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const config = require("config");
const mongoose = require("@/libs/mongoose");

const store = new MongoStore({ mongooseConnection: mongoose.connection });

exports.init = app =>
  app.use(
    session({
      secret: config.secret,
      store,
      resave: true,
      saveUninitialized: true
    })
  );
