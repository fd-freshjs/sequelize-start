const createHttpError = require("http-errors");
const { Category } = require("../models");

class CategoryService {
  createCategory = async (data) => {
    const newCategory = await Category.create(data);

    return newCategory;
  };

  findCategoryList = async (limit, page) => {
    const foundCategories = await Category.findAll({
      limit: limit,
      offset: (page - 1) * limit,
    });

    return foundCategories;
  };

  findCategoryById = async (catId) => {
    const cat = await Category.findByPk(catId);

    if (!cat) {
      throw createHttpError(404, "Category not found");
    }

    return cat;
  };

  findSingleCategory = async (whereCriteria) => {
    const cat = await Category.findOne({ where: whereCriteria });

    if (!cat) {
      throw createHttpError(404, "Category not found");
    }

    return cat;
  };

  updateCategoryById = async (id, data) => {
    const [count] = await Category.update(data, {
      where: {
        id,
      },
    });
    if (count === 0) {
      throw createHttpError(404, "Category not found");
    }

    const updatedCategory = await this.findCategoryById(id);

    return updatedCategory;
  };

  deleteCategoryById = async (id) => {
    const deletedCategory = await this.findCategoryById(id);
    if (!deletedCategory) {
      throw createHttpError(404, "Category not found");
    }

    await Category.destroy({ where: { id } });

    return deletedCategory;
  };
}

module.exports = new CategoryService();
