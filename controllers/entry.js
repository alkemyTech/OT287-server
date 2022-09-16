const createHttpError = require('http-errors')
const { getNews } = require('../services/entry')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getNews()
      endpointResponse({
        res,
        message: 'News retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving news] - [news - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
