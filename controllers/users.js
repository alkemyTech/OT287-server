const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { sendEmail } = require('../services/sendEmail')
const {
  createUser, destroyUser, getUsers, loginUser, updateUser, getUserById,
} = require('../services/users')
const { decodeToken } = require('../middlewares/JWT')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      const response = await createUser(req.body)
      await sendEmail(req.body.email, req.body.firstName)
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
      let token = req.headers.authorization
      if (!token) {
        throw new ErrorObject('Unauthorized', 401)
      }
      const response = decodeToken(token)
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
  put: catchAsync(async (req, res, next) => {
    const { id } = req.params
    const { body } = req
    try {
      const response = await updateUser(id, body)
      endpointResponse({
        res,
        code: 200,
        message: 'User successfully updated',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating user] - [users/${id} - PUT]: ${err.message}`,
      )
      next(httpError)
    }
  }),
  getById: catchAsync(async (req, res, next) => {
    try {
      const response = await getUserById(req.params.id)
      endpointResponse({
        res,
        message: 'User retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving user] - [user - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
