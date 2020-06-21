import express, { response, json } from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'running' })
})

app.listen(3333)
