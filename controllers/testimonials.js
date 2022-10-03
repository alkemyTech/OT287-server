const createHttpError = require('http-errors')
const {
  deleteById,
  editTestimonial,
  createTestimonial,
  getTestimonials,
} = require('../services/testimonials')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getTestimonials()
      endpointResponse({
        res,
        message: 'Testimonials retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving testimonials] - [testimonials - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  post: catchAsync(async (req, res, next) => {
    try {
      const response = await createTestimonial(req.body)
      endpointResponse({
        res,
        message: 'Created Sucefully!',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating Testimonial] - [Testimonial - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  destroy: catchAsync(async (req, res, next) => {
    try {
      const response = await deleteById(req.params.id)
      endpointResponse({
        res,
        message: 'Testimonial deleted successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting testimonial] - [testimonial - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  put: catchAsync(async (req, res, next) => {
    try {
      const response = await editTestimonial(req.params.id, req.body)
      endpointResponse({
        res,
        message: 'Testimonial updated successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating testimonial] - [testimonial - PUT]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
