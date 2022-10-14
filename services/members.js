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

exports.getMembersById = async (id) => {
  try {
    const member = await Member.findByPk(id)
    if (!member) {
      throw new ErrorObject('No member found', 404)
    }
    return member
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.editMembers = async (id, membersValues) => {
  try {
    const memberToUpdate = await Member.findByPk(id)
    if (!memberToUpdate) {
      throw new ErrorObject('No member found', 404)
    }
    const memberUpdated = await memberToUpdate.update({ ...membersValues })
    return memberUpdated
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createMember = async (data) => {
  try {
    await Member.create(data)
    return
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
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
