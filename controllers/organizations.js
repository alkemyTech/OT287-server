const createHttpError = require('http-errors')
const { 
  getOrganization, 
  editOrganization,
  getOrganizationById,
  createOrganization,
  deleteById,
 } = require('../services/organizations')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

// Method to get an organization public info
module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getOrganization()
      endpointResponse({
        res,
        message: 'Organization retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving Organization] - [Organization - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  getById: catchAsync(async (req, res, next) => {
    try {
      const response = await getOrganizationById(req.params.id)
      endpointResponse({
        res,
        message: 'Organization retrieved successfully',
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
  post: catchAsync(async (req, res, next) => {
    try {
      const response = await createOrganization({
        ...req.body,
      })
      endpointResponse({
        res,
        code: 201,
        message: 'Organization created successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating Organization] - [index - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  destroy: catchAsync(async (req, res, next) => {
    try {
      const response = await deleteById(req.params.id)
      endpointResponse({
        res,
        message: 'Organization deleted successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting Organization] - [v - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
