const { User } = require("../models");

class UserService {
  createUser = async (data) => {
    const newUser = await User.create(data);

    return newUser;
  };

  getUserList = async (limit, page) => {
    const foundUsers = await User.findAll({
      limit: limit,
      offset: (page - 1) * limit,
    });

    return foundUsers;
  };

  getUserById = async (userId) => {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  };

  updateUserById = async (id, data) => {
    await User.update(data, {
      where: {
        id,
      },
    });
    const updatedUser = await this.getUserById(id);

    return updatedUser;
  };

  deleteUserById = async (id) => {
    const deletedUser = await this.getUserById(id);
    if (!deletedUser) {
      throw new Error("User not found");
    }

    await User.destroy({ where: { id } });

    return deletedUser;
  };
}

module.exports = new UserService();
