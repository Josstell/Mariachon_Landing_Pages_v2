import handlerCors from 'src/helpers/api/allowCors'

import { callApiGoogleSheet } from 'src/helpers'
//import NextCors from 'nextjs-cors'
const { SPREADSHEET_ID_MARIACHON_MARIACHIS, SHEET_ID_MARIACHIS } = process.env

export default handlerCors.post(async (req, res) => {
  // await NextCors(req, res, {
  //   // Options
  //   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  //   origin: '*',
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // })

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const date = new Date()

  let mariachiDetails = {
    fecha_creacion: date.toLocaleDateString('es-MX', options),
    id: req.body?._id,
    direccion: req.body?.address,
    nombre: req.body?.name || '',
    ciudad: req.body?.city || '',
    cp: req.body?.cp || '',
    estado: req.body?.region || '',
    tel: req.body?.tel || '',
    descripcion: req.body?.description || '',
    coordinador: req.body?.coordinator._ref || '',
    elementos: parseInt(req.body?.members) || 0,
    categoria: req.body?.categorySet[0] || '',
    serenata: req.body?.serenata * 1 || 'no disponible',
    hora: req.body?.hora * 1 || 'no disponible',
    contrato: req.body?.contracto * 1 || 'no disponible',
  }

  if (req.body?.modifiedBy) {
    mariachiDetails = {
      ...mariachiDetails,
      modificadoPor: req.body?.modifiedBy?._ref,
    }
  }

  if (req.body?.createdBy) {
    mariachiDetails = {
      ...mariachiDetails,
      creadoPor: req.body?.createdBy?._ref,
    }
  }
  console.log(mariachiDetails)

  const { sheet, sheetGoogle } = await callApiGoogleSheet(
    SPREADSHEET_ID_MARIACHON_MARIACHIS,
    SHEET_ID_MARIACHIS
  )

  const isDataAlreadySved = sheetGoogle.find(
    (row) => row.id === mariachiDetails.id
  )

  //return res.status(200).json(mariachiDetails)

  if (isDataAlreadySved === undefined) {
    try {
      await sheet.addRow(mariachiDetails)
      return res.status(200).json({
        message: ` ${mariachiDetails.id} agregada correntamente en google sheet`,
      })
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      })
    }
  } else {
    try {
      const keyObjectMariachi = Object.keys(mariachiDetails)
      const rowData = isDataAlreadySved._rowNumber - 2
      keyObjectMariachi.forEach(
        (marKey) => (sheetGoogle[rowData][marKey] = mariachiDetails[marKey])
      )
      await sheetGoogle[rowData].save() // save changes

      return res.status(200).json({
        message: ` ${mariachiDetails.id} actualizado.`,
      })
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      })
    }
  }
})
