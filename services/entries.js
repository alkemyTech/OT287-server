const { ErrorObject } = require('../helpers/error')
const { Entry, Category } = require('../database/models')

exports.createEntry = async (data) => {
  try {
    const getCategory = await Category.findByPk(data.categoryId)
    const createNew = await Entry.create({
      name: data.name,
      content: data.content,
      image: data.image,
      categoryId: getCategory.id,
      type: 'news',
    })
    return createNew
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
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
