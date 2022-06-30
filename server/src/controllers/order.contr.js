const {
  findOrderById,
  findOrderList,
  createOrder,
  updateOrderById,
  deleteOrderById,
} = require("../services/order.service");

class OrderController {
  createOrder = async (req, res, next) => {
    try {
      const data = req.body;

      const createdOrder = await createOrder(data);

      res.status(200).send({ data: createdOrder });
    } catch (error) {
      next(error);
    }
  };

  updateOrder = async (req, res, next) => {
    try {
      const data = req.body;
      const id = req.params.id;

      const updatedOrder = await updateOrderById(id, data);

      res.status(200).send({ data: updatedOrder });
    } catch (error) {
      next(error);
    }
  };

  deleteOrder = async (req, res, next) => {
    try {
      const id = req.params.id;

      const deletedOrder = await deleteOrderById(id);

      res.status(200).send({ data: deletedOrder });
    } catch (error) {
      next(error);
    }
  };

  getOrderById = async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      const foundOrder = await findOrderById(id);

      res.status(200).send({ data: foundOrder });
    } catch (error) {
      next(error);
    }
  };

  getOrderList = async (req, res, next) => {
    try {
      // ?page=1&limit=10
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;

      const orderList = await findOrderList(limit, page);

      res.status(200).send({ data: orderList });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new OrderController();
