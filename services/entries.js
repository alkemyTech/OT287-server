const { ErrorObject } = require('../helpers/error')
const { Entry } = require('../database/models')


exports.createEntry = async (data) => {
  try {
    const createNew = await Entry.create({
      name: data.name,
      content: data.content,
      image: data.image,
      type: 'news',
    })
    return createNew

exports.getNews = async () => {
  try {
    const news = await Entry.findAll({
      attributes: ['name', 'image', 'createdAt'],
      where: {
        type: 'news',
      },
    })

    if (!news) {
      throw new ErrorObject('No news found', 404)
    }
    return news

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
