const createHttpError = require('http-errors')
const { getMembers } = require('../services/members')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// Method to get a members public info
module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getMembers()
      endpointResponse({
        res,
        message: 'Members retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving members] - [news - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
