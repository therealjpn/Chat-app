const express = require("express");
const router = express.Router();

//@route a get request to api/posts / test/
//@desc test posts route
//@access Public Route

router.get("/test", (req, res) => res.json({ msg: "posts works" }));

module.exports = router;
