const { checkSchema } = require('express-validator')
const { validationResult } = require('express-validator')

const { SECRET } = process.env
const jwt = require('jsonwebtoken')

exports.validate = (schema) => [
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

exports.validateUserToken = (req, res, next) => {
  try {
    let token = req.headers.authorization
    if (!token) {
      return res.status(400).send({ msg: 'Invalid token' })
    }
    token = token.replace('Bearer ', '')
    jwt.verify(token, SECRET)
    return next()
  } catch (err) {
    return res.status(400).send({ errors: err })
  }
}
