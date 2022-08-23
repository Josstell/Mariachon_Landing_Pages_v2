import handlerCors from 'src/helpers/api/allowCors'

import { callApiGoogleSheet } from 'src/helpers'
const { SPREADSHEET_ID_MARIACHON_MARIACHIS, SHEET_ID_MARIACHIS } = process.env

export default handlerCors().post(async (req, res) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const date = new Date()

  const mariachiDetails = {
    fecha_creacion: date.toLocaleDateString('es-MX', options),
    id: req.body?.id,
    nombre: req.body?.name || '',
    ciudad: req.body?.city || '',
    cp: req.body?.cp || '',
    estado: req.body?.region || '',
    tel: req.body?.tel || '',
    description: req.body?.description || '',
    coordinador: req.body?.coordinator?.name || '',
    elementos: req.body?.members || 0,
    categoria: req.body?.categorySet || '',
    serenata: req.body?.service?.serenata || 'no disponible',
    hora: req.body?.service?.hora || 'no disponible',
    contrato: req.body?.service?.contract || 'no disponible',
  }

  const { sheet, sheetGoogle } = await callApiGoogleSheet(
    SPREADSHEET_ID_MARIACHON_MARIACHIS,
    SHEET_ID_MARIACHIS
  )

  const isDataAlreadySved = sheetGoogle.find((row) => row.id === req.body?.id)

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
