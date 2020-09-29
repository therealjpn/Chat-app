const express = require("express");
const mongoose = require("mongoose");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const users = require("./routes/api/users");

const app = express();

//Db config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDb Connected"))
    .catch((err) => console.log(err));
  
//@app Get request to the default page.
app.get("/", (req, res) => res.send("hello! world up!"));

//Use Routes
app.use("/api/posts", posts);
app.use("/api/profile", profile);
app.use("/api/users", users);

const port = process.env.Port || 5000;
app.listen(port, () => console.log(` server running on port ${port}`));
