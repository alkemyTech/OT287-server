const { ErrorObject } = require('../helpers/error')

const jwt = require('jsonwebtoken')
const { SECRET } = process.env

const isAdmin = (allowedRoleId) => (req, res, next) => {
  try {
    let token = req.headers.authorization
    if (!token) {
      throw new ErrorObject('Unauthorized', 401)
    }
    token = token.replace('Bearer ', '')
    const decodedToken = jwt.verify(token, SECRET)
    const userRoleId = decodedToken.roleId
   
    if(allowedRoleId.includes(userRoleId)){
      return next()
    } else {
      throw new ErrorObject('Credentials not allowed', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

module.exports = isAdmin
