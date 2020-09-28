const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");

// @method POST api/users/register
// @desc Register a user
// @access Public

// @method POST api/users/login
// @desc Login a user
// @access Public

// @method GET api/users/
// @desc Get the authenticated user
// @access Private

module.exports = router;
