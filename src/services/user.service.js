const createHttpError = require("http-errors");
const { User, Order, BankCard } = require("../models");

class UserService {
  createUser = async (data) => {
    const newUser = await User.create(data);

    return newUser;
  };

  findUserList = async (limit, page) => {
    const foundUsers = await User.findAll({
      limit: limit,
      offset: (page - 1) * limit,
      include: [
        {
          model: Order,
          as: "orders",
        },
        { model: BankCard, as: "bankCard" },
      ], // LEFT OUTER JOIN
    });
    /* 
    [  
      {
        // user data...
        orders: [
          {
            // order data...
          }
        ],
        bankCard: {
          // bankcard data...
        } || null
      }
    ]
    */

    return foundUsers;
  };

  findUserById = async (userId) => {
    const user = await User.findByPk(userId);

    if (!user) {
      throw createHttpError(404, "User not found");
    }

    return user;
  };

  updateUserById = async (id, data) => {
    const [count] = await User.update(data, {
      where: {
        id,
      },
    });
    if (count === 0) {
      throw createHttpError(404, "User not found");
    }

    const updatedUser = await this.findUserById(id);

    return updatedUser;
  };

  deleteUserById = async (id) => {
    const deletedUser = await this.findUserById(id);
    if (!deletedUser) {
      throw createHttpError(404, "User not found");
    }

    await User.destroy({ where: { id } });

    return deletedUser;
  };
}

module.exports = new UserService();
