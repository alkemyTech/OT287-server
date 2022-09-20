const { ErrorObject } = require('../helpers/error')
const { Testimonial } = require('../database/models')

exports.deleteById = async (testimonialId) => {
  try {
    const testimonial = await Testimonial.destroy({ where: { id: testimonialId } })
    if (!testimonial) {
      throw new ErrorObject('No testimonial id found to delete', 404)
    }
    return testimonial
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
