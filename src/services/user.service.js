const createHttpError = require("http-errors");
const { User, Order } = require("../models");

class UserService {
  createUser = async (data) => {
    const newUser = await User.create(data);

    return newUser;
  };

  getUserList = async (limit, page) => {
    const foundUsers = await User.findAll({
      limit: limit,
      offset: (page - 1) * limit,
      include: Order, // LEFT OUTER JOIN
    });

    return foundUsers;
  };

  getUserById = async (userId) => {
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

    const updatedUser = await this.getUserById(id);

    return updatedUser;
  };

  deleteUserById = async (id) => {
    const deletedUser = await this.getUserById(id);
    if (!deletedUser) {
      throw createHttpError(404, "User not found");
    }

    await User.destroy({ where: { id } });

    return deletedUser;
  };
}

module.exports = new UserService();
