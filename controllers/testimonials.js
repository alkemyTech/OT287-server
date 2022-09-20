const createHttpError = require('http-errors')
const { createTestimonial } = require('../services/testimonials')
const { deleteById } = require('../services/testimonials')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      const {name,content,image} = req.body
      const response = await createTestimonial(name,content,image)
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
}

