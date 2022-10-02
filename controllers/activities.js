const createHttpError = require('http-errors')
const { editActivity, createActivity, getActivityById } = require('../services/activities')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
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
      await createActivity({
        ...req.body,
      })
      endpointResponse({
        res,
        code: 201,
        message: 'Activity created successfully',
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating activity] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
