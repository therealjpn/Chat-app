const express = require("express");
const router = express.Router();

//@route a get request to api/users / test/
//@desc test users route
//@access Public Route
router.get("/test", (req, res) => res.json({ msg: "users works" }));

module.exports = router;
