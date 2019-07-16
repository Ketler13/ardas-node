const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("@/models/user");

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.sendStatus(400);
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !user.checkPassword(password)) {
      return res.sendStatus(404);
    }

    const token = jwt.sign({ id: user._id }, config.secret);

    return res.send({ token });
  } catch (e) {
    return res.sendStatus(500);
  }
}

module.exports = login;
