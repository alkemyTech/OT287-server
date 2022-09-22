const { ErrorObject } = require('../helpers/error')

const isAdmin = (allowedRoleId) => (req, res, next) => {
  try {
    const admin = req.user.roleId === allowedRoleId
    if (!admin) {
      throw new ErrorObject('Not have access permissions', 404)
    }
    return next()
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

module.exports = isAdmin
