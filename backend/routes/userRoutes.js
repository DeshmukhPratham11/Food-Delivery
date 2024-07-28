const express = require("express");
const router = express.Router()

const registerUser = require("../controlers/usersController");
router.post("/user/register", registerUser);

const loginUser = require("../controlers/usersController");
router.post("/user/login",loginUser);

module.exports = router;
