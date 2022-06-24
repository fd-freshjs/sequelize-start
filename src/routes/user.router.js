const { Router } = require("express");
const { getList, getById, createUser, updateUser, deleteUser } = require("../controllers/user.contr");

// path /api/users
const userRouter = Router();

// get list
userRouter.get('/', getList);
// get by id
userRouter.get('/:id', getById);

// create
userRouter.post('/', createUser);

// update
userRouter.patch('/:id', updateUser);

// delete
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
