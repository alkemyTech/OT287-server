const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { createUser } = require('../services/users')

module.exports = {
  postUser: catchAsync(async (req, res, next) => {
    try {
      const response = await createUser(req.body)
      endpointResponse({
        res,
        message: 'Usuario creado',
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
