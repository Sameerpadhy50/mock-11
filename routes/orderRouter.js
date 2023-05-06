const express = require("express");
const orderModel = require("../models/orderModel");
const orderRouter = express.Router();

orderRouter.post("/order", async (req, res, next) => {
  try {
    const order = new orderModel(req.body);
    await order.save();
    res.status(201).send({ success: true, msg: "Order placed" });
  } catch (error) {
    res.status(500).send(error);
  }
});

orderRouter.get("/orders", async (req, res, next) => {
  try {
    const orders = await orderModel.find();
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = orderRouter;
