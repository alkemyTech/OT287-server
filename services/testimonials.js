const { ErrorObject } = require('../helpers/error')
const { Testimonial } = require('../database/models')

exports.createTestimonial = async (name, content, image) => {
    try {
        if (!name || !content || !image) {
            throw new ErrorObject('No content!', 204)
        }
        const testimonial = await Testimonial.create({
            name:name,
            content:content,
            image:image
        })
        if (!testimonial) throw new ErrorObject('Error!', 400)
        
        return testimonial
        
    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}