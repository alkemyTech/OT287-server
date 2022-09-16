const { ErrorObject } = require('../helpers/error')
const { Entry } = require('../database/models')

// Service to search an entry info in the database
exports.destroyNewId = async (entryId) => {
  try {
    const entry = await Entry.destroy({ where: { id: entryId } })
    if (!entry) {
      throw new ErrorObject('No entryId found to delete', 404)
    }
    return entry
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
