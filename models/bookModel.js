const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookShema = new Schema({
  title: String,
  author: String,
  category: String,
  price: Number,
  quantity: Number,
});

module.exports = bookModel = mongoose.model("book", bookShema);
