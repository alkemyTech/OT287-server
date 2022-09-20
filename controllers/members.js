const createHttpError = require('http-errors')
const { getMembers, createMember } = require('../services/members')
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
        `[Error retrieving members] - [members - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  post: catchAsync(async (req, res, next) => {
    try {
      await createMember(req.body)
      endpointResponse({
        res,
        code: 201,
        message: 'Member created successfully',
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating member] - [members - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
