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
  contactEmail: async (email, nombre) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const htmlTemplate = `
    
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=Edge">
          <!--<![endif]-->
          <!--[if (gte mso 9)|(IE)]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {width: 700px;margin: 0 auto;}
        table {border-collapse: collapse;}
        table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
        img {-ms-interpolation-mode: bicubic;}
      </style>
    <![endif]-->
          <style type="text/css">
        body, p, div {
          font-family: trebuchet ms,helvetica,sans-serif;
          font-size: 16px;
        }
        body {
          color: #B9762F;
        }
        body a {
          color: #1188E6;
          text-decoration: none;
        }
        p { margin: 0; padding: 0; }
        table.wrapper {
          width:100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img.max-width {
          max-width: 100% !important;
        }
        .column.of-2 {
          width: 50%;
        }
        .column.of-3 {
          width: 33.333%;
        }
        .column.of-4 {
          width: 25%;
        }
        ul ul ul ul  {
          list-style-type: disc !important;
        }
        ol ol {
          list-style-type: lower-roman !important;
        }
        ol ol ol {
          list-style-type: lower-latin !important;
        }
        ol ol ol ol {
          list-style-type: decimal !important;
        }
        @media screen and (max-width:480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
            text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table.wrapper-mobile {
            width: 100% !important;
            table-layout: fixed;
          }
          img.max-width {
            height: auto !important;
            max-width: 100% !important;
          }
          a.bulletproof-button {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .columns {
            width: 100% !important;
          }
          .column {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .social-icon-column {
            display: inline-block !important;
          }
        }
      </style>
          <!--user entered Head Start--><!--End Head user entered-->
        </head>
        <body>
          <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:16px; font-family:trebuchet ms,helvetica,sans-serif; color:#B9762F; background-color:#FFFFFF;">
            <div class="webkit">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
                <tr>
                  <td valign="top" bgcolor="#FFFFFF" width="100%">
                    <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="100%">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td>
                                <!--[if mso]>
        <center>
        <table><tr><td width="700">
      <![endif]-->
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:700px;" align="center">
                                          <tr>
                                            <td role="modules-container" style="padding:0px 0px 0px 0px; color:#B9762F; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
        <tr>
          <td role="module-content">
            <p></p>
          </td>
        </tr>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="1b9b7db8-c2f5-4943-bbe4-7cc9bfef45ad" data-mc-module-version="2019-10-22">
       
      </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 60px 12px 60px;" bgcolor=" #7b9eed" data-distribution="1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="200" style="width:200px; border-spacing:0; border-collapse:collapse; margin:0px 190px 0px 190px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="069ade7e-6b71-4c21-8a34-a4bf8393e70d">
        <tbody>
          <tr>
            <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
              <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="200" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/ec16be7d1aec6eac/2cc20606-82c9-414d-b694-a81b557df85f/200x84.png">
            </td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 15px 0px;" bgcolor=" #7b9eed" data-distribution="1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="260" style="width:260px; border-spacing:0; border-collapse:collapse; margin:0px 220px 0px 220px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor=" #7b9eed" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="15af8a9f-5f04-4626-8ad0-42f3daf8cad1.1" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:0px 0px 0px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #000000; font-size: 25px">Hemos recibido tu contacto! </span></div><div></div></div></td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="1907ce09-be93-4607-a9e3-b697ca9e82f8">
        <tbody>
          <tr>
            <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
              <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="700" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/ec16be7d1aec6eac/f8963006-5f92-4ba3-a973-95ad6bb4ddaa/938x750.jpg">
            </td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:50px 10px 70px 10px;" bgcolor="#bacffc" data-distribution="1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="460" style="width:460px; border-spacing:0; border-collapse:collapse; margin:0px 110px 0px 110px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="#bacffc" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="0a015936-50f3-44d1-be17-b08b49b1e339.2" data-mc-module-version="2019-10-22">
       
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="0a015936-50f3-44d1-be17-b08b49b1e339.1" data-mc-module-version="2019-10-22">
      
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="0a015936-50f3-44d1-be17-b08b49b1e339" data-mc-module-version="2019-10-22">
    
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="0a015936-50f3-44d1-be17-b08b49b1e339.3" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:15px 0px 0px 0px; line-height:20px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 19px; color: black">Gracias por comunicarte con nosotros empleando el formulario de contacto de nuestra pagina web ${nombre}, en la brevedad un miembro del staff se va a estar comunicando con usted 
          </tr>
        </tbody>
      
      </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="20cecf03-0bd9-4440-a176-0a80a7b03d9f">
        <tbody>
          <tr>
            <td style="font-size:6px; line-height:10px; padding:50px 0px 50px 0px;" valign="top" align="center">
              
            </td>
          </tr>
        </tbody>
          <tbody>
          <tr>
            <td style="padding:0px 0px 0px 0px; line-height:30px; text-align:inherit;" height="100%" marginBottom="200px" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #000000; font-size: 20px;"><strong>Saludos</strong></span></div><div></div></div></td>
          </tr>
        </tbody>
              <tbody>
          <tr>
            <td style="padding:0px 0px 0px 0px; line-height:30px; text-align:inherit;" height="100%" marginBottom="200px" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #000000; font-size: 20px;"><strong>Equipo ONG Somos Mas</strong></span></div><div></div></div></td>
          </tr>
        </tbody>
     
              </td>
            </tr>
          </tbody>
        </table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="social" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7be36129-3e47-487e-9713-24fa804388ad">
        <tbody>
          <tr>
            <td valign="top" style="padding:40px 0px 0px 0px; font-size:6px; line-height:10px;" align="center">
              <table align="center" style="-webkit-margin-start:auto;-webkit-margin-end:auto;">
                <tbody><tr align="center"><td style="padding: 0px 5px;" class="social-icon-column">
          <a role="social-icon-link" href="https://www.facebook.com/sendgrid/" target="_blank" alt="Facebook" title="Facebook" style="display:inline-block;  height:22px; width:22px;">
            <img role="social-icon" alt="Facebook" title="Facebook" src="http://cdn.mcauto-images-production.sendgrid.net/ec16be7d1aec6eac/f24f2aa6-154d-4aea-bcd4-c3bc85794928/24x24.png" style="height:22px; width:22px;" height="22" width="22">
          </a>
        </td><td style="padding: 0px 5px;" class="social-icon-column">
          <a role="social-icon-link" href="https://twitter.com/sendgrid" target="_blank" alt="Twitter" title="Twitter" style="display:inline-block;  height:22px; width:22px;">
            <img role="social-icon" alt="Twitter" title="Twitter" src="http://cdn.mcauto-images-production.sendgrid.net/ec16be7d1aec6eac/3628eb23-a9a7-40fd-bc37-276c5b15f449/24x24.png" style="height:22px; width:22px;" height="22" width="22">
          </a>
        </td><td style="padding: 0px 5px;" class="social-icon-column">
          <a role="social-icon-link" href="https://www.instagram.com/sendgrid/" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; height:22px; width:22px;">
            <img role="social-icon" alt="Instagram" title="Instagram" src="http://cdn.mcauto-images-production.sendgrid.net/ec16be7d1aec6eac/33d8449c-8b64-430e-beae-914337e1575e/50x50.png" style="height:22px; width:22px;" height="22" width="22">
          </a>
        </td><td style="padding: 0px 5px;" class="social-icon-column">
          <a role="social-icon-link" href="https://www.pinterest.com/sendgrid/" target="_blank" alt="Pinterest" title="Pinterest" style="display:inline-block;  height:22px; width:22px;">
            <img role="social-icon" alt="Pinterest" title="Pinterest" src="http://cdn.mcauto-images-production.sendgrid.net/ec16be7d1aec6eac/7193a216-7e5c-4dac-9dc6-92e3b70a8442/24x24.png" style="height:22px; width:22px;" height="22" width="22">
          </a>
        </td><td style="padding: 0px 5px;" class="social-icon-column">
          
            
          </a>
        </td></tr></tbody>
              </table>
            </td>
          </tr>
        </tbody>
         <tbody>
                    <tr>
                    <td align="center" bgcolor="#F5F8FD" class="inner-td" style="border-radius:6px; font-size:18px; text-align:center; background-color:inherit;">
                      <a style="background-color:#F5F8FD; border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#A8B9D5; display:inline-block; font-size:12px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank"> ♥ Powered By equipo desarrollo ong somos mas ♥ </a>
                    </td>
                    </tr>
                  </tbody>
     
                </table>
              </td>
            </tr>
          </tbody>
        </table></td>
                                          </tr>
                                        </table>
                                        <!--[if mso]>
                                      </td>
                                    </tr>
                                  </table>
                                </center>
                                <![endif]-->
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
            </div>
          </center>
        </body>
      </html>
    `
    const msg = {
      to: email,
      from: process.env.SENDGRID_VERIFIED_EMAIL, // Change to your verified sender
      subject: 'Gracias Por Contactarte Con Nosotros!',
      content: [{ type: 'text/html', value: htmlTemplate }],
    }
    try {
      await sgMail.send(msg)
    } catch (error) {
      throw new ErrorObject(error.message, 500)
    }
  },
}
