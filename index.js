const express = require('express')
const app = express()
const port = 3000

const response = {
  nome: "Meu primeiro API",
  codigo: 1
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send(response)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})