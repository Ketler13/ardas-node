const express = require("express");
const passport = require("@/libs/passport");
const { getMovies } = require("@/routes/movies");

const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));
router.get("/movies", getMovies);

module.exports = router;
