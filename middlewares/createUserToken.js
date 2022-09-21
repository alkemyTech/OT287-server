const jwt = require('jsonwebtoken')

const { SECRET } = process.env

exports.createUserToken = (user) => {
  const token = jwt.sign(user, SECRET)
  return token
}
