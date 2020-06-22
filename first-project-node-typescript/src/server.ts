import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.json({ message: 'running' })
})

app.listen(3333, () => {
  console.log('server started on port 3333');
})
