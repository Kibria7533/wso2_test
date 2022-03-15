const bookModel = require("../models/book");
const Add = async (req, res) => {
  const {
    title,
    author,
    publisher,
    category,
    shortDescription,
    coverImage,
    softCopy,
  } = req.body;

  const book = new bookModel({
    title,
    author,
    publisher,
    category,
    shortDescription,
    coverImage,
    softCopy,
  });

  try {
    const acc = await book.save();
    if (acc) {
      res.status(200).json({ success: true, message: "Successfully added" });
    }
   
  } catch (err) {
    res.status(400).send("Error");
  }
};

const deleteController = async (req, res) => {
  console.log(req.params.id);
  let data = await bookModel.deleteOne({ _id: req.params.id });
  res.status(204).send({ msg: "deleted", data: data });
};

const updateController = async (req, res) => {
  const {
    title,
    author,
    publisher,
    category,
    shortDescription,
    coverImage,
    softCopy,
  } = req.body;

  try {
    let up = await bookModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title,
        author,
        publisher,
        category,
        shortDescription,
        coverImage,
        softCopy,
      }
    );

    res.status(200).send({ info: "updated", up: up });
  } catch (err) {
    res.status(400).send({ info: "error ocurred" });
  }
};

const getSingle = async (req, res) => {
  try {
    let data = await bookModel.findOne({ _id: req.params.id });
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ info: "error ocurred" });
  }
};

const getAll = async (req, res) => {
  let data = await bookModel.find();
  try {
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ info: "error ocurred" });
  }
};
module.exports = {
  Add,
  deleteController,
  updateController,
  getSingle,
  getAll,
};
