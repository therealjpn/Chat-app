const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

//loads models
const User = require("../../models/User");

//@route a get request to api/users / test/
//@desc test users route
//@access Public Route
router.get("/test", (req, res) => res.json({ msg: "users works" }));

//@route a get request to api/users /registration/
//@desc registers user
//@access Public Route
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "E-mail already existed" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // sizes
        r: "pg", //rating
        d: "mm", //default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });
      //encrypting password with bcrypt
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});
module.exports = router;
