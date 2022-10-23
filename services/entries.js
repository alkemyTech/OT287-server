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
      attributes: ['id', 'name', 'image', 'createdAt', 'content'],
      where: {
        type: 'news',
      },
    })
    if (!news) {
      throw new ErrorObject('No news found', 404)
    }
    return news.reverse()
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
exports.getNewById = async (idNew) => {
  try {
    const getNew = await Entry.findByPk(idNew)
    if (!getNew) {
      throw new ErrorObject('No news found', 404)
    }
    return getNew
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
exports.deleteById = async (entryId) => {
  try {
    const entry = await Entry.destroy({ where: { id: entryId } })
    if (!entry) {
      throw new ErrorObject('No entryId found to delete', 404)
    }
    return entry
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
exports.editNews = async (id, newsValues) => {
  try {
    const newsToUpdate = await Entry.findByPk(id)
    if (!newsToUpdate) {
      throw new ErrorObject('No news found', 404)
    }
    const newsUpdated = await newsToUpdate.update({ ...newsValues })
    return newsUpdated
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
