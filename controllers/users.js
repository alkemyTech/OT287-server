const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { createUser } = require('../services/users')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      const response = await createUser(req.body)
      endpointResponse({
        res,
        message: 'User Created Successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating user] - [user - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
