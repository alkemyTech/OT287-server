const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { createUser, getUsers, destroyUser } = require('../services/users')

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

  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getUsers()
      endpointResponse({
        res,
        message: 'All users retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving users] - [users - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const response = await destroyUser(req.params.id)
      endpointResponse({
        res,
        message: 'User deleted successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error destroying user] - [user - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
