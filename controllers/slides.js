const createHttpError = require('http-errors')
const { 
  getSlides, 
  getSlideById,
  editSlide,
  createSlide,
  deleteById,
 } = require('../services/slides')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// Method to get an organization public info
module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getSlides()
      endpointResponse({
        res,
        message: 'Slides retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving Slides] - [Slides - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  getById: catchAsync(async (req, res, next) => {
    try {
      const response = await getSlideById(req.params.id)
      endpointResponse({
        res,
        message: 'Slide retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving Slide] - [Slide - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  put: catchAsync(async (req, res, next) => {
    try {
      const response = await editSlide(req.params.id, req.body)
      endpointResponse({
        res,
        message: 'Slide updated successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating Slide] - [Slide - PUT]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  post: catchAsync(async (req, res, next) => {
    try {
      const response = await createSlide({
        ...req.body,
      })
      endpointResponse({
        res,
        code: 201,
        message: 'Slide created successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating Slide] - [Slide - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  destroy: catchAsync(async (req, res, next) => {
    try {
      const response = await deleteById(req.params.id)
      endpointResponse({
        res,
        message: 'Slide deleted successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting Slide] - [Slide - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
