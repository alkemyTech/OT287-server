const createHttpError = require('http-errors')
const { editActivity } = require('../services/activities')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
  put: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params
      const dataToUpdate = req.body
      const response = await editActivity(id, dataToUpdate)
      endpointResponse({
        res,
        message: 'Activity updated and retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating activity] - [activity - PUT]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
