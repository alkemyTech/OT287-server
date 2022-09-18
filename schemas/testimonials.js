const { body } = require('express-validator')

const validationTestimonialSchema = () => {
    return [
        body('name').not().isEmpty().withMessage('name is required'),
        body('content').not().isEmpty().withMessage('content is required'),
    ]
}

module.exports = validationTestimonialSchema;