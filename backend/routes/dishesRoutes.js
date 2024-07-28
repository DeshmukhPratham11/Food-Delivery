const express = require("express");
const router = express.Router();
const dishesController = require('../controlers/dishesController');

const getdishes = require("../controlers/dishesController");
router.get("/api/dishes",dishesController.getDishes);

module.exports = router;
