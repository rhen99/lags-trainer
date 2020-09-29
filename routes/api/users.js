const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const auth = require("../../middleware/auth");
const e = require("express");

// @method POST api/users/register
// @desc Register a user
// @access Public

router.post("/register", async (req, res) => {
  const { name, email, username, password, password_confirm } = req.body;

  const regex = {
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    username: /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/gm,
  };

  if (!name || !email || !username || !password || !password_confirm)
    return res.status(400).json({
      msg: "Please fill in all required fields.",
    });

  if (!regex.email.test(email))
    return res.status(400).json({
      msg: "Please use a proper email.",
    });

  if (!regex.username.test(username))
    res.status(400).json(
      username.length < 3
        ? { msg: "Should be at least 3 characters." }
        : username.length > 24
        ? { msg: "Should not be more than 24 characters." }
        : {
            msg:
              "Minimum length (3). Maximum length (24). Can only contain alphanumeric characters and the following special characters: dot(.), underscore(_) and dash(-).The special characters cannot appear more than once consecutively or combined.",
          }
    );

  if (password.length < 6)
    return res.status(400).json({
      msg: "Password should be at least 6 characters.",
    });

  if (password !== password_confirm)
    return res.status(400).json({
      msg: "Password doesn't match.",
    });

  try {
    const userEmail = await User.findOne({ email });
    const userName = await User.findOne({ username });

    if (userEmail)
      return res.status(400).json({
        msg: "This email had already been used.",
      });

    if (userName)
      return res.status(400).json({
        msg: "This username had already been used.",
      });

    const newUser = new User({
      name,
      username,
      email,
      password,
    });

    bcrypt.genSalt(10, async (err, salt) => {
      if (err) throw err;

      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;

        try {
          newUser.password = hash;
          await newUser.save();

          jwt.sign(
            { id: newUser.id },
            config.get("jwtSecret"),
            {
              expiresIn: 2628000,
            },
            (err, token) => {
              if (err) throw err;

              res.json({
                token,
                user: {
                  id: newUser.id,
                  email: newUser.email,
                  username: newUser.username,
                },
              });
            }
          );
        } catch (err) {
          console.error(err);
        }
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

// @method POST api/users/login
// @desc Login a user
// @access Public

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({
      msg: "Please fill in both fields.",
    });

  try {
    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({
        msg: "This user does not exist.",
      });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({
        msg: "Password is incorrect.",
      });

    jwt.sign(
      { id: user.id },
      config.get("jwtSecret"),
      {
        expiresIn: 2628000,
      },
      (err, token) => {
        if (err) throw err;

        res.json({
          token,
          user: {
            id: user.id,
            email: user.email,
            username: user.username,
          },
        });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

// @method GET api/users/
// @desc Get the authenticated user
// @access Private

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

module.exports = router;
