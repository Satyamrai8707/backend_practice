const express = require('express')
const app = express()
require('dotenv').config()
port = process.env.PORT
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('satyamrai8707')

})

app.get('/login', (req, res) => {
    res.send(`<h1>plz login first after the registartion</h1>`)

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})