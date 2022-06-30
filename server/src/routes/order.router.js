const { Router } = require("express");
const {
  getOrderList,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.contr");
const { createOrderMW } = require("../middlewares/validateMWs");

// path /api/products
const orderRouter = Router();

// get list
orderRouter.get("/", getOrderList);
// get by id
orderRouter.get("/:id", getOrderById);

// create
orderRouter.post("/", createOrderMW, createOrder);

// update
orderRouter.patch("/:id", updateOrder);

// delete
orderRouter.delete("/:id", deleteOrder);

module.exports = orderRouter;
