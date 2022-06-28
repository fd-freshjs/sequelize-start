const { Router } = require("express");
const { getCategoryList, getCategoryById, createCategory, updateCategory, deleteCategory } = require("../controllers/category.contr");

// path /api/categories
const categRouter = Router();

// get list
categRouter.get('/', getCategoryList);
// get by id
categRouter.get('/:id', getCategoryById);

// create
categRouter.post('/', createCategory);

// update
categRouter.patch('/:id', updateCategory);

// delete
categRouter.delete('/:id', deleteCategory);

module.exports = categRouter;
