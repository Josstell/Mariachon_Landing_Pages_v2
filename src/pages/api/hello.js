// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import handlerCors from 'src/helpers/api/allowCors'

export default handlerCors().post(async (req, res) => {
  res.status(200).json({ name: req.body.name })
})
