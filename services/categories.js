const { ErrorObject } = require('../helpers/error')
const { Category } = require('../database/models')

exports.getCategories = async () => {
  try {
    const categories = await Category.findAll({ attributes: ['name'] })
    return categories
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createCategory = async (data) => {
  try {
    await Category.create(data)
    return
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateCategory = async (id, updateInfo) => {
  try {
    const findCategory = await Category.findByPk(id)
    if (!findCategory) throw new ErrorObject('this category does not exist', 404)
    const updatedCategory = await findCategory.update({ ...updateInfo })
    return updatedCategory
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
exports.deleteCategory = async (categoryId) => {
  try {
    const entry = await Category.destroy({ where: { id: categoryId } })
    if (!entry) {
      throw new ErrorObject('No entryId found to delete', 404)
    }
    return entry
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
