const { checkSchema } = require('express-validator')
const { validationResult } = require('express-validator')

exports.schemaValidation = (schema) => [
  checkSchema(schema),
  (req, res, next) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (err) {
      return res.status(400).send({ errors: err.array() })
    }
  },
]
