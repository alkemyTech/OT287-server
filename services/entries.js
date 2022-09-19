const { ErrorObject } = require('../helpers/error')
const { Entry } = require('../database/models')

module.exports = {
  getNews: async () => {
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
  },
  editNews: async (id, newsValues) => {
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
  },
}
