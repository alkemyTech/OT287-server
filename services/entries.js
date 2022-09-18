const { ErrorObject } = require('../helpers/error')
const { Entry, Category } = require('../database/models')

// example of a service
exports.editEntry = async (id, entryValues) => {
  try {
    const entryToUpdate = await Entry.findByPk(id)
    if (!entryToUpdate) {
      throw new ErrorObject('No entry found', 404)
    }
    if (entryValues.categoryId) {
      const categoryIdToReplace = await Category.findByPk(entryValues.categoryId)
      if (!categoryIdToReplace) {
        throw new ErrorObject('No categoryId found', 404)
      }
      await entryToUpdate.setCategory(entryValues.categoryId)
    }
    const entryUpdated = await entryToUpdate.update({ ...entryValues })
    return entryUpdated
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
