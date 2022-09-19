const { body } = require('express-validator')

const validationTestimonialSchema = () => {
    return [
        body('name').notEmpty().withMessage('name is required'),
        body('content').notEmpty().withMessage('content is required'),
    ]
}

module.exports = validationTestimonialSchema;