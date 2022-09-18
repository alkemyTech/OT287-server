const { validationResult } = require('express-validator')
const createHttpError = require('http-errors')


const validationTestimonial = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    const [{name, content}] = extractedErrors
    const httpError = createHttpError(
        400,
        `[Error retrieving Testimonial] - [Testimonial - POST]: ${name || content}`,
    )
    next(httpError)
}

module.exports = validationTestimonial;