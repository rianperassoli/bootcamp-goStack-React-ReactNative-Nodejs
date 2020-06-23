import express from 'express'
import routes from './routes'

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ message: 'running' })
})

app.listen(3333, () => {
  console.log('server started on port 3333')
})
