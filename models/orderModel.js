const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
  totalAmount: Number,
});

module.exports = orderModel = mongoose.model("order", orderSchema);
