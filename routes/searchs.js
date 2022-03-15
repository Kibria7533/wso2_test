const express = require("express");
const router = express.Router();
const {Search,get_popular_product}= require('../Controller/searchController');


router.post("/save",Search);
router.get("/gate_five_popular_product",get_popular_product);

module.exports = router;
