const jwt = require('jsonwebtoken')

const { SECRET } = process.env

exports.generateToken = (user) => {
  const token = jwt.sign(user, SECRET)
  return token
}
exports.verifyToken = (req, res, next) => {
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
exports.decodeToken = (token) => {
  const tokenToDecode = token.replace('Bearer ', '')
  const user = jwt.verify(tokenToDecode, SECRET)
  return user
}
