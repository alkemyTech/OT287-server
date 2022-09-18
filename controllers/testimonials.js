const createHttpError = require('http-errors')
const { createTestimonial } = require('../services/testimonials')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { validationResult } = require('express-validator')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      // const { errors } = validationResult(req);
      // if (errors.length) {
      //   const {msg, param, value } = errors[0]
      //   const httpError = createHttpError(
      //     400,
      //     `[Error retrieving Testimonial] - [Testimonial - POST]: ${msg} ${param} is ${value}`,
      //   )
      //   next(httpError)
      //   return
      // }
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
        `[Error retrieving Testimonial] - [Testimonial - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}