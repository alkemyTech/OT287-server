const createHttpError = require('http-errors')
const { createContact, getContacts } = require('../services/contacts')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      const response = await createContact(req.body)
      endpointResponse({
        res,
        message: 'Contact created and retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating contact] - [contact - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getContacts()
      endpointResponse({
        res,
        message: 'Contacts retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving contacts] - [contacts - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
