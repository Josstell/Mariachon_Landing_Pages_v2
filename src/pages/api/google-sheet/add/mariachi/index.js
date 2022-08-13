import handlerCors from 'src/helpers/api/allowCors'

export default handlerCors().post((req, res) => {
  res.send('hello')
})
