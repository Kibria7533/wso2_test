const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const searchSchema = new Schema({
   id:String,
   src:String,
   freequency:Number
  },
  { timestamps: true } 
  );

  
  module.exports = mongoose.model('search',searchSchema)