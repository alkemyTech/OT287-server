const { ErrorObject } = require('../helpers/error')
const { Member } = require('../database/models')

// Service to search a members info in the database
exports.getMembers = async () => {
  try {
    const members = await Member.findAll()
    if (!members) {
      throw new ErrorObject('No members found', 404)
    }
    return members
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.deleteMember = async (id) => {
  try {
    const member = await Member.destroy({ where: { id } })
    if (!member) {
      throw new ErrorObject('No member found', 404)
    }
    return member
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
