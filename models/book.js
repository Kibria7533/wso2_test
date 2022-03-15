const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const bookSchema = new Schema({
    title:  String, 
    author: String,
    publisher: String,   
    category: String,
    shortDescription: String,
    coverImage: String,
    softCopy: String,
  },
  { timestamps: true }
  
  );

  
  module.exports = mongoose.model('book',bookSchema)