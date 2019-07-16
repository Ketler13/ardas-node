const User = require("@/models/user");

async function register(req, res) {
  console.log(req.isAuthenticated());
  const { email, password, displayName } = req.body;
  console.log(email, password);

  if (!email || !password) {
    return res.sendStatus(400);
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.sendStatus(400, "User already exists");
    }
    user = await User.create({ email, password, displayName });
    return res.send(user.getPublicFields());
  } catch (e) {
    console.error(e);
    return res.sendStatus(500);
  }
}

module.exports = register;
