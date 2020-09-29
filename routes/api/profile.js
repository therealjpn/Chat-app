const express = require("express");
const router = express.Router();

//@route a get request to api/profile / test/
//@desc test profile route
//@access Public Route
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

module.exports = router;
