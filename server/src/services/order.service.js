// createOrder

const createHttpError = require("http-errors");
const { Order, Product, ProductsToOrders, Sequelize, sequelize } = require("../db/models");

/* 


  UPDATE products
  SET amount = CASE
    WHEN id = 1 THEN 3 WHEN id = 2 THEN amount - 6
    ELSE 0
  END

  WHERE id IN (1, 2, 3);

*/

class OrderService {
  createOrder = async (data = {}) => {
    try {
      const { cart = [], ...restData } = data;

      const transaction = await sequelize.transaction();

      const prodIds = cart.map((c) => c.product_id); // [1, 2, 3, 4]
      const products = await Product.findAll({ where: { id: prodIds } });
      if (products.length !== prodIds.length) {
        throw createHttpError(404, "Products not found");
      }

      const newOrder = await Order.create({ ...restData, status: 'prepared' });
      const insertRows = cart.map((prod) => {
        return { ...prod, order_id: newOrder.id };
      });
      await ProductsToOrders.bulkCreate(insertRows);

      // update product amounts
      await Product.update(
        {
          amount: Sequelize.literal(
            `CASE
            ${cart
              .map((c) => `WHEN id = ${c.product_id} THEN amount - ${c.amount}`)
              .join(" ")}
              ELSE 0
              END`
          ),
        },
        { where: { id: prodIds } },
      );

      await transaction.commit();
      return newOrder;
    } catch (error) {
      await transaction.rollback();

      if (error.message.includes("orders_phone_ck")) {
        throw createHttpError(
          400,
          "Phone number should be numeric and 11 digits length"
        );
      }
      throw error;
    }
  };

  findOrderList = async (limit, page) => {
    const foundOrders = await Order.findAll({
      limit: limit,
      offset: (page - 1) * limit,
    });

    return foundOrders;
  };

  findOrderById = async (catId) => {
    const order = await Order.findByPk(catId);

    if (!order) {
      throw createHttpError(404, "Order not found");
    }

    return order;
  };

  findSingleOrder = async (whereCriteria) => {
    const order = await Order.findOne({ where: whereCriteria });

    if (!order) {
      throw createHttpError(404, "Order not found");
    }

    return order;
  };

  updateOrderById = async (id, data) => {
    const [count] = await Order.update(data, {
      where: {
        id,
      },
    });
    if (count === 0) {
      throw createHttpError(404, "Order not found");
    }
    if (data.cart) {
      // check products existance
      // add products to order
    }
    if (data.cartRemove) {
      // remove products from order
    }

    const updatedOrder = await this.findOrderById(id);

    return updatedOrder;
  };

  deleteOrderById = async (id) => {
    const deletedOrder = await this.findOrderById(id);
    if (!deletedOrder) {
      throw createHttpError(404, "Order not found");
    }

    await Category.destroy({ where: { id } });

    return deletedOrder;
  };
}

module.exports = new OrderService();
