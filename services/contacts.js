const { ErrorObject } = require('../helpers/error')
const { Contact } = require('../database/models')

exports.createContact = async (data) => {
  try {
    const contact = Contact.create({ ...data })
    if (!contact) {
      throw new Error('Your client has issued a malformed or illegal request', 400)
    }
    return contact
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
