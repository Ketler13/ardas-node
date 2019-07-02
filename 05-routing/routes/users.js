const users = require("../services/users");

const getUserParam = (req, res, next, id) => {
  if (Number(id) > 200) {
    const user = users.getUserById(id);
    req.user = user;
  } else {
    req.user = null;
  }
  next();
};

const getUser = (req, res) => {
  console.log("Get user");
  if (req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(400);
  }
};

module.exports.getUserParam = getUserParam;
module.exports.getUser = getUser;
