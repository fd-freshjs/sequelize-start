const { Router } = require("express");
const { getList, getById } = require("../controllers/user.contr");

// path /api/users
const userRouter = Router();

// get list
userRouter.get('/', getList);
// get by id
userRouter.get('/:id', getById);

// create
userRouter.post('/');

// update
userRouter.patch('/:id');

// delete
userRouter.delete('/:id');

module.exports = userRouter;
