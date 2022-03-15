const express = require("express");
const router = express.Router();
const {Add,deleteController,updateController,getSingle,getAll}= require('../Controller/bookController');
const { fromCheck } = require("../Middleware/bookMiddle");
const { body } = require('express-validator')

router.get("/show",getAll);

router.get("/showSIngle/:id", getSingle);

router.post("/save",
body('title').not().isEmpty().withMessage("Title  is required."),
body('author').not().isEmpty().withMessage("Author  is required."),
body('publisher').not().isEmpty().withMessage("Publisher  is required."),
body('category').not().isEmpty().withMessage("Category  is required."),
body('shortDescription').not().isEmpty().withMessage("ShortDescription  is required."),
body('coverImage').not().isEmpty().withMessage("CoverImage  is required."),
body('softCopy').not().isEmpty().withMessage("SoftCopy  is required."),
fromCheck,Add);

router.delete("/delete/:id", deleteController);

router.post("/update/:id", updateController);

module.exports = router;
