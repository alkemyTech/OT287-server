const createHttpError = require('http-errors')
const { getOrganization, editOrganization } = require('../services/organizations')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// Method to get an organization public info
module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getOrganization(req.params.id)
      endpointResponse({
        res,
        message: 'Info retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving info] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  put: catchAsync(async (req, res, next) => {
    try {
      const response = await editOrganization(req.params.id, req.body)
      endpointResponse({
        res,
        message: 'Organization updated successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating Organization] - [Organization - PUT]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
