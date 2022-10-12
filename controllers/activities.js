const createHttpError = require('http-errors')
const { 
  editActivity,
  createActivity,
  getActivityById,
  getActivities,
  deleteById
} = require('../services/activities')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getActivities()
      endpointResponse({
        res,
        message: 'Activities retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving Activities] - [Activities - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  getById: catchAsync(async (req, res, next) => {
    try {
      const response = await getActivityById(req.params.id)
      endpointResponse({
        res,
        message: 'Activity retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving activity] - [activity - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  put: catchAsync(async (req, res, next) => {
    try {
      const response = await editActivity(req.params.id, req.body)
      endpointResponse({
        res,
        message: 'Activity updated and retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating activity] - [activity - PUT]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  post: catchAsync(async (req, res, next) => {
    try {
      const response = await createActivity({
        ...req.body,
      })
      endpointResponse({
        res,
        code: 201,
        message: 'Activity created successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating activity] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  destroy: catchAsync(async (req, res, next) => {
    try {
      const response = await deleteById(req.params.id)
      endpointResponse({
        res,
        message: 'Activity deleted successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting activity] - [activity - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
