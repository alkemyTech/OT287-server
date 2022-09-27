const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const {
  createUser, destroyUser, getUsers, loginUser,
} = require('../services/users')
const { decodeToken } = require('../middlewares/JWT')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      const response = await createUser(req.body)
      endpointResponse({
        res,
        message: 'User registered successfully',
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
  getMe: catchAsync(async (req, res, next) => {
    try {
      const response = await decodeToken(req)
      endpointResponse({
        res,
        message: 'User data decoded',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error decoding user data] - [user - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  login: catchAsync(async (req, res, next) => {
    try {
      const response = await loginUser(req.body)
      endpointResponse({
        res,
        status: response.ok,
        code: response.ok ? 200 : 401,
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error logging user] - [user - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
