const createHttpError = require('http-errors')
const { getNews, getNewById } = require('../services/entries') 
const { deleteById } = require('../services/entries')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// Method to get an organization public info
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
  getById: catchAsync(async (req, res, next) => {
    try {
      const response = await getNewById(req.params.id)
      endpointResponse({
        res,
        message: 'New retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving new] - [news - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
   destroy: catchAsync(async (req, res, next) => {
    try {
      const response = await deleteById(req.params.id)
      endpointResponse({
        res,
        message: 'New deleted successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting news] - [news - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
