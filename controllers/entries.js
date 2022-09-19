const createHttpError = require('http-errors')
const { getNews, editEntry } = require('../services/entries')
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
  put: catchAsync(async (req, res, next) => {
    try {
      const response = await editEntry(req.params.id, req.body)
      endpointResponse({
        res,
        message: 'Entry updated successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating news] - [index - PUT]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
