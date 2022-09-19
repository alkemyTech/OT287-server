const { validationResult } = require('express-validator')

const handleValidation = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    return res.status(400).send({ errors: err.array() })
  }
}

module.exports = { handleValidation }
