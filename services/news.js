const { ErrorObject } = require('../helpers/error')
const { Entry } = require('../database/models')

exports.postNews = async (data) => {
  try {
    const createNew = await Entry.create({
      name: data.name,
      content: data.content,
      image: data.image,
      type: 'news',
    })
    return createNew
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
