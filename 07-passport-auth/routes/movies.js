function getMovies(req, res) {
  console.log("AUTH", req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.send([{ id: 1, title: "Men in black" }, { id: 2, title: "Star Wars" }]);
  } else {
    res.sendStatus(401);
  }
}

module.exports.getMovies = getMovies;
