const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { getCategories, updateCategory, createCategory } = require('../services/categories')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getCategories()
      endpointResponse({
        res,
        message: 'Categories retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving categories] - [categories - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  post: catchAsync(async (req, res, next) => {
    try {
      await createCategory(req.body)
      endpointResponse({
        res,
        code: 201,
        message: 'Category created successfully',
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating category] - [categories - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  put: catchAsync(async (req, res, next) => {
    try {
      const response = await updateCategory(req.params.id, req.body)
      endpointResponse({
        res,
        message: 'Category updated successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating categories] - [categories - PUT]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
