const { checkSchema } = require('express-validator')
const { handleValidation } = require('../helpers/handleValidation')

exports.schemaValidation = (schema) => [
  checkSchema(schema),
  (req, res, next) => {
    handleValidation(req, res, next)
  },
]
