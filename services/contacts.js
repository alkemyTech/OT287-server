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

exports.getContacts = async () => {
  try {
    const getContacts = await Contact.findAll()
    if (!getContacts) {
      throw new ErrorObject('No contacts found', 404)
    }
    return getContacts
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}