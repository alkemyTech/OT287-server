const { ErrorObject } = require('../helpers/error')
const { decodeToken } = require('../middlewares/JWT')

const isAdmin = () => (req, res, next) => {
  try {
    let token = req.headers.authorization
    if (!token) {
      throw new ErrorObject('Unauthorized', 401)
    }
    const userRoleId = decodeToken(token).roleId
    if(userRoleId === 1){
      return next()
    } 
    throw new ErrorObject('Credentials not allowed', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

module.exports = isAdmin