const sgMail = require('@sendgrid/mail')
const { ErrorObject } = require('../helpers/error')

module.exports = {
  sendEmail: async (email) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: email,
      from: 'test@gmail.com', // Change to your verified sender
      subject: 'Subject Test',
      text: 'Text Test',
      html: '<strong>Send grid config test</strong>',
    }
    try {
      await sgMail.send(msg)
    } catch (error) {
      throw new ErrorObject(error.message, 500)
    }
  },
  RegisterWelcome: async (email, nombre) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: email,
      from: process.env.SENDGRID_VERIFIED_EMAIL, // Change to your verified sender
      subject: 'Bienvenido a ONG Alkemy!',
      text: 'Text Test',
      html: `<strong>Bienvenido ${nombre}! Gracias por registrarte en nuestra ONG Alkemy, tus datos han sido validados correctamente, ya puedes logearte!</strong>`,
    }
    try {
      await sgMail.send(msg)
    } catch (error) {
      throw new ErrorObject(error.message, 500)
    }
  },
}
