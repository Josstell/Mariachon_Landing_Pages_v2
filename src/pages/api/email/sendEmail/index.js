import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.API_KEY_SENDING_GRID)

const newLead = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).json({ error: 'Method not allowed' })
  }

  /// .toLocaleString('mx')

  const dataSend = req.body
  const templateEmail = process.env.TEMPLETE_ID_EMAIL

  let emailToSend =
    req.body.email === ''
      ? ['informes@mariachon.com']
      : ['informes@mariachon.com', req.body.email]

  if (req.method === 'POST') {
    const msg = {
      to: emailToSend, // Change to your recipient
      from: ' Mariachon - informes <informes@mariachon.com>', // Change to your verified sender
      // subject: dataSend.subjectDina,
      html: 'hola',
      templateId: templateEmail,
      dynamic_template_data: dataSend,
    }

    sgMail
      .sendMultiple(msg)
      .then((dat) =>
        res.status(200).json({
          message: `La información ha sido enviada al correo indicado de forma exitoza, gracias...`,
          dat,
        })
      )
      .catch((error) => res.status(400).json(error))
  }
}

export default newLead
