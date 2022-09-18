const { ErrorObject } = require('../helpers/error')
const { Entry } = require('../database/models')

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
