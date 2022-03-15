const searchModel = require("../models/searches");
let Hashes=require('jshashes')
var MD5 = new Hashes.MD5
const Search = async (req, res) => {
  const {
    srcQuery
  } = req.query;
  let hashData=await MD5.hex(srcQuery)
 

  let existingQuery= await searchModel.findOne({src:hashData})
  if(existingQuery){
    let up = await searchModel.findOneAndUpdate(
      { src: hashData },
      { $inc: { freequency: 1 }}
    );

  return  res.status(200).send({ info: "updated" });
  }

  const search = new searchModel({
    src:hashData,
    frequency:0
   });
  try {
    const acc = await search.save();
    if (acc) {
      res.status(200).json({ success: true, message: "Successfully added" });
    }
   
  } catch (err) {
    console.log(err)
    res.status(400).send("Error");
  }

};


const get_popular_product= async (req, res) => {
 try {
  let five_products=await searchModel.find({}).sort({freequency:-1}).limit(5);
  res.status(200).send(five_products)
 } catch (err){
   res.send(err)
 }

};

module.exports = {
  Search,
  get_popular_product
};
