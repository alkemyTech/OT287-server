const createHttpError = require('http-errors')
const { deleteById } = require('../services/testimonials')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
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
