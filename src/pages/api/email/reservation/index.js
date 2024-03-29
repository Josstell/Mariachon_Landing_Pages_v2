import handlerCors from 'src/helpers/api/allowCors'

import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.API_KEY_SENDING_GRID)

export default handlerCors.post((req, res) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  //   const date = new Date()

  //console.log('Datos que llegan:', req.body)

  const date = req.body?.dateAndTime
    ? new Date(req.body?.dateAndTime)
    : new Date()

  let reservaDetails = {
    id: req.body?.reserva,
    clienteId: req.body?.client?._id || '',
    nombre_cliente: req.body?.client?.name || '',
    email: req.body?.client?.email || '',
    tel: req.body?.client?.tel || '',
    fecha: date.toLocaleDateString('es-MX', options),
    hora: `${date.getHours()} : ${
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    }`,
    direccion: req.body?.shippingAddress?.address || '',
    region: req.body?.shippingAddress?.region || '',
    mariachi: req.body?.orderItems?.mariachi?.name || '',
    elementos: req.body?.orderItems?.mariachi?.members || '',
    servicio: req.body?.orderItems?.service || '',
    qty: req.body?.orderItems?.qty * 1 || 0,
    precio: req.body?.orderItems?.price * 1 || 0,
    deposito: req.body?.orderItems?.deposit * 1 || 0,
    comision: req.body?.orderItems?.fee * 1 || 0,
    resta:
      req.body?.orderItems?.price * req.body?.orderItems?.qty -
        req.body?.orderItems?.deposit || 0,
    subtotal: req.body?.orderItems?.price * req.body?.orderItems?.qty || 0,
    categoria: req.body?.orderItems?.categorySet || 'Normal',
    mensaje: req.body?.message || '',
    status: req.body?.status[0] || 'Pendiente',
    message_service: '',
  }

  if (req.body?.modifiedBy) {
    reservaDetails = {
      ...reservaDetails,
      modificadoPor: req.body?.modifiedBy?._ref,
      fecha_de_modificacion: req.body?.dateModified,
    }
  }

  if (req.body?.createdBy) {
    reservaDetails = {
      ...reservaDetails,
      creadoPor: req.body?.createdBy?._ref,
      fecha_de_creacion: req.body.dateCreated,
    }
  }

  if (req.body?.orderItems?.service === 'hora') {
    reservaDetails = {
      ...reservaDetails,
      message_service:
        '1 hora en promedio son 10 - 12 canciones dependiendo la duración de cada una.',
    }
  }

  if (req.body?.orderItems?.service === 'serenata') {
    reservaDetails = {
      ...reservaDetails,
      message_service:
        'Serenata de 7 canciones tiene un tiempo estimado de 20 a 25 minutos.',
    }
  }

  const templateEmail = process.env.TEMPLETE_ID_EMAIL_RESERVA

  let emailToSend =
    reservaDetails?.email === ''
      ? ['informes@mariachon.com']
      : ['informes@mariachon.com', reservaDetails?.email]

  const msg = {
    to: emailToSend, // Change to your recipient
    from: ` Mariachon - reservación: ${reservaDetails.id} - ${reservaDetails.status} - <informes@mariachon.com>`, // Change to your verified sender
    // subject: dataSend.subjectDina,
    html: 'hola',
    templateId: templateEmail,
    dynamic_template_data: reservaDetails,
  }

  sgMail
    .sendMultiple(msg)
    .then((dat) => {
      console.log('correo enviado')
      res.status(200).json({
        message: `La información ha sido enviada al correo indicado de forma exitoza, gracias...`,
        dat,
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json(error)
    })
})
