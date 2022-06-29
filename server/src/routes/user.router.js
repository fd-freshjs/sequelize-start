const { Router } = require("express");
const { getUserList, getUserById, createUser, updateUser, deleteUser } = require("../controllers/user.contr");

// path /api/users
const userRouter = Router();

// get list
userRouter.get('/', getUserList);
// get by id
userRouter.get('/:id', getUserById);

// create
userRouter.post('/', createUser);

// update
userRouter.patch('/:id', updateUser);

// delete
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
