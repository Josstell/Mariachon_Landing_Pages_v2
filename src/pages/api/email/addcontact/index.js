// const http = require('https')

const handler = (req, res) => {
  if (req.method !== 'PUT') {
    return res.status(400).json({ error: 'Method not allowed' })
  }

  if (req.method === 'PUT') {
    fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify(req.body),
    })
      .then((response) => response.json())
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(400).json(error))
  }
}

export default handler
