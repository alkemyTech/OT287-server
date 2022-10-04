const { ErrorObject } = require('../helpers/error')
const { Testimonial } = require('../database/models')

exports.createTestimonial = async (data) => {
  try {
    return await Testimonial.create({ ...data })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
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

exports.editTestimonial = async (id, data) => {
  try {
    const testimonial = await Testimonial.findByPk(id)
    if (!testimonial) {
      throw new ErrorObject('No testimonial found', 404)
    }
    const updated = await testimonial.update({ ...data })
    return updated
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getTestimonialById = async (idTestimonial) => {
  try {
    const getTestimonial = await Testimonial.findByPk(idTestimonial)
    if (!getTestimonial) {
      throw new ErrorObject('No activity found', 404)
    }
    return getTestimonial
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
