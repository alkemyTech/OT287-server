const { ErrorObject } = require('../helpers/error')
const { Slide } = require('../database/models')

exports.getSlides = async () => {
  try {
    const slides = await Slide.findAll()
    if (!slides) {
      throw new ErrorObject('No slides found', 404)
    }
    return slides
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getSlideById = async (id) => {
  try {
    const slides = await Slide.findByPk(id)
    if (!slides) {
      throw new ErrorObject('No slides found', 404)
    }
    return slides
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.editSlide = async (id, newValues) => {
    try {
      const slideToUpdate = await Slide.findByPk(id)
      if (!slideToUpdate) {
        throw new ErrorObject('No slide found', 404)
      }
      const slideUpdated = await slideToUpdate.update({ ...newValues })
      return slideUpdated
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500)
    }
  }

exports.createSlide = async (newSlide) => {
  try {
    const slide = await Slide.create(newSlide)
    return slide
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.deleteById = async (slideId) => {
  try {
    const slide = await Slide.destroy({ where: { id: slideId } })
    if (!slide) {
      throw new ErrorObject('No slide found to delete', 404)
    }
    return slide
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
