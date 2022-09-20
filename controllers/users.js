const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { createUser } = require('../services/users')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      const response = await createUser(req.body)
      if (!response) {
        res.send({ code: 409, msg: 'Email already in use, try another email address' })
      } else {
        endpointResponse({
          res,
          message: 'User registered successfully',
          body: response,
        })
      }
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating user] - [user - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
