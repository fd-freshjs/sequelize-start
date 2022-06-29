const {
  findCategoryById,
  findCategoryList,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
} = require("../services/category.service");

class CategoryController {
  createCategory = async (req, res, next) => {
    try {
      const data = req.body;

      const createdCategory = await createCategory(data);

      res.status(200).send({ data: createdCategory });
    } catch (error) {
      next(error);
    }
  };

  updateCategory = async (req, res, next) => {
    try {
      const data = req.body;
      const id = req.params.id;

      const updatedCategory = await updateCategoryById(id, data);

      res.status(200).send({ data: updatedCategory });
    } catch (error) {
      next(error);
    }
  };

  deleteCategory = async (req, res, next) => {
    try {
      const id = req.params.id;

      const deletedCategory = await deleteCategoryById(id);

      res.status(200).send({ data: deletedCategory });
    } catch (error) {
      next(error);
    }
  };

  getCategoryById = async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      const foundCategory = await findCategoryById(id);

      res.status(200).send({ data: foundCategory });
    } catch (error) {
      next(error);
    }
  };

  getCategoryList = async (req, res, next) => {
    try {
      // ?page=1&limit=10
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;

      const categoryList = await findCategoryList(limit, page);

      res.status(200).send({ data: categoryList });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new CategoryController();
