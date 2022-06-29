const {
  findProductById,
  findProductList,
  createProduct,
  updateProductById,
  deleteProductById,
} = require("../services/product.service");

class ProductController {
  createProduct = async (req, res, next) => {
    try {
      const data = req.body;

      const createdProduct = await createProduct(data);

      res.status(200).send({ data: createdProduct });
    } catch (error) {
      next(error);
    }
  };

  updateProduct = async (req, res, next) => {
    try {
      const data = req.body;
      const id = req.params.id;

      const updatedProduct = await updateProductById(id, data);

      res.status(200).send({ data: updatedProduct });
    } catch (error) {
      next(error);
    }
  };

  deleteProduct = async (req, res, next) => {
    try {
      const id = req.params.id;

      const deletedProduct = await deleteProductById(id);

      res.status(200).send({ data: deletedProduct });
    } catch (error) {
      next(error);
    }
  };

  getProductById = async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      const foundProduct = await findProductById(id);

      res.status(200).send({ data: foundProduct });
    } catch (error) {
      next(error);
    }
  };

  getProductList = async (req, res, next) => {
    try {
      // ?page=1&limit=10
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;

      const productList = await findProductList(limit, page);

      res.status(200).send({ data: productList });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new ProductController();
