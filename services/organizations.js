const { ErrorObject } = require('../helpers/error')
const { Organization } = require('../database/models')

// Service to search an organization info in the database
exports.getOrganization = async (organizationId) => {
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
      fbUrl: organization.fbUrl,
      iGUrl: organization.igUrl,
      ldUrl: organization.ldUrl,
      welcomeText: organization.welcomeText,
      aboutUsText: organization.aboutUsText,
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.editOrganization = async (id, newValues) => {
  try {
    const organyzationToUpdate = await Organization.findByPk(id)
    if (!organyzationToUpdate) {
      throw new ErrorObject('No organization found', 404)
    }
    const organyzationUpdated = await organyzationToUpdate.update({ ...newValues })
    return organyzationUpdated
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
