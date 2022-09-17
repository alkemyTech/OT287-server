const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { postNews } = require('../services/news')

module.exports = {
  postNews: catchAsync(async (req, res, next) => {
    const {
      name,
      content,
      image,
    } = req.body
    try {
      if (!req.body.name) {
        console.log('no puse name')
      }
      else {
        const response = await postNews(req.body)
        // console.log(response)
        endpointResponse({
          res,
          message: 'post test succesfull',
          body: response,
        })
      }
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
