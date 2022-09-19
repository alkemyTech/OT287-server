const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { createEntry } = require('../services/entries')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      const response = await createEntry(req.body)
      endpointResponse({
        res,
        message: 'post test succesfull',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating entry] - [entry - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
