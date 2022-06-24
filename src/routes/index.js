const { Router } = require("express");
const userRouter = require("./user.router");

// path /api
const router = Router();

// path /api/users
router.use('/users', userRouter);

// path /phones

module.exports = router;