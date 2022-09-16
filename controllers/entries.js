const createHttpError = require('http-errors')
const { destroyNewId } = require('../services/entries')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// Method to get an organization public info
module.exports = {
  destroy: catchAsync(async (req, res, next) => {
    try {
      const response = await destroyNewId(req.params.id)
      endpointResponse({
        res,
        message: 'Info retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving info] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
