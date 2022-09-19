const { ErrorObject } = require('../helpers/error')
const { Contact } = require('../database/models')

exports.createContact = async (data) => {
  try {
    const contact = Contact.create({ ...data })
    return contact
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
