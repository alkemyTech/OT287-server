const createHttpError = require('http-errors')
const { editEntry } = require('../services/entries')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// example of a controller. First call the service, then build the controller method
module.exports = {
  editEntry: catchAsync(async (req, res, next) => {
    try {
      const response = await editEntry(req.params.id, req.body)
      endpointResponse({
        res,
        message: 'Entry updated successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
