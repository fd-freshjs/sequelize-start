const { Router } = require("express");
const {
  getProductList,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.contr");

// path /api/products
const prodRouter = Router();

// get list
prodRouter.get("/", getProductList);
// get by id
prodRouter.get("/:id", getProductById);

// create
prodRouter.post("/", createProduct);

// update
prodRouter.patch("/:id", updateProduct);

// delete
prodRouter.delete("/:id", deleteProduct);

module.exports = prodRouter;
