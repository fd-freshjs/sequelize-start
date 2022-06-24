const { getUserById, getUserList, createUser, updateUserById, deleteUserById } = require("../services/user.service");

class UserController {
  createUser = async (req, res, next) => {
    const data = req.body;

    const createdUser = await createUser(data);

    res.status(200).send({ data: createdUser });
  };

  updateUser = async (req, res, next) => {
    const data = req.body;
    const id = req.params.id;

    const updatedUser = await updateUserById(id, data);

    res.status(200).send({ data: updatedUser });
  };

  deleteUser = async (req, res, next) => {
    const id = req.params.id;

    const deletedUser = await deleteUserById(id);

    res.status(200).send({ data: deletedUser });
  };

  getById = async (req, res, next) => {
    console.log(req.params.id);
  
    const id = Number(req.params.id);
  
    const foundUser = await getUserById(id);
  
    res.status(200).send({ data: foundUser });
  };

  getList = async (req, res, next) => {
    // ?page=1&limit=10
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
  
    const userList = await getUserList(limit, page);
  
    res.status(200).send({ data: userList });
  };
}

module.exports = new UserController();