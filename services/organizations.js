const { ErrorObject } = require('../helpers/error')
const { Organization } = require('../database/models')

// Service to search an organization info in the database
exports.getInfo = async (organizationId) => {
  try {
    const organization = await Organization.findByPk(organizationId)
    if (!organization) {
      throw new ErrorObject('No organization found', 404)
    }
    return {
      name: organization.name,
      image: organization.image,
      phone: organization.phone,
      address: organization.address,
      welcomeText: organization.welcomeText,
      fbUrl: organization.fbUrl,
      igUrl: organization.igUrl,
      ldUrl: organization.ldUrl,
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
