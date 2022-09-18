const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { postEntry } = require('../services/news')

module.exports = {
  postEntry: catchAsync(async (req, res, next) => {
    try {
      const response = await postEntry(req.body)
      endpointResponse({
        res,
        message: 'post test succesfull',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
