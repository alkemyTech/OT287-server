const { ErrorObject } = require('../helpers/error')
const { getUserById } = require('../services/users')
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

const isAdmin = (allowedRoleId) => async (req, res, next) => {
  try {
    let token = req.headers.authorization
    if (!token) {
      throw new ErrorObject('Unauthorized', 401)
    }
    token = token.replace('Bearer ', '')
    const decodedToken = await jwt.verify(token, SECRET)
    console.log(decodedToken);
    const userData = await getUserById(decodedToken.id)
   
    if(allowedRoleId.includes(userData.dataValues.roleId)){
      return next()
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

module.exports = isAdmin
