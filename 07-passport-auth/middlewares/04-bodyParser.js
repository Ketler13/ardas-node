const bodyParser = require("body-parser");

exports.init = app => app.use(bodyParser.json());
