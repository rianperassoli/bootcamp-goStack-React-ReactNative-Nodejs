import express from "express"
import routes from "./routes"

const app = express()
app.use(express.json())

app.get("/", (request, response) => {
  const teste = {
    babba: 1,
    spa: 2,
    asd: 2,
  }

  return response.json({ message: "running", teste })
})

app.listen(3333, () => {
  console.log("server started on port 3333")
})
