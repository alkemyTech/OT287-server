const jwt = require('jsonwebtoken')
const { ErrorObject } = require('../helpers/error')

const { SECRET } = process.env

exports.generateToken = (user) => {
  const token = jwt.sign(user, SECRET)
  return token
}
exports.verifyToken = (req, res, next) => {
  try {
    let token = req.headers.authorization
    if (!token) {
      throw new ErrorObject('Unauthorized', 401)
    }
    token = token.replace('Bearer ', '')
    jwt.verify(token, SECRET)
    return next()
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
exports.decodeToken = (token) => {
  const tokenToDecode = token.replace('Bearer ', '')
  const user = jwt.verify(tokenToDecode, SECRET)
  return user
}
