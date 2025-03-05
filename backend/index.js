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


app.get('/api/jokes', (req, res) =>{
  const jokes = [
    {
      id: 1,
      title: 'Joke 1',
      content: 'This is joke 1'
    },
    {
      id: 2,
      title: 'Joke 2',
      content: 'This is joke 2'
    },
    {
      id: 3,
      title: 'Joke 3',
      content: 'This is joke 3'
    },
    {
      id: 4,
      title: 'Joke 4',
      content: 'This is joke 4'
    },
    {
      id: 5,
      title: 'Joke 5',
      content: 'This is joke 5'

    },
    {
      id: 6,
       title: 'Joke 6',
      content: 'This is joke 6'
    },
  ]
  res.json(jokes)
})

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
})