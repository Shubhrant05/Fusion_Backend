const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'successfull' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

const contt = require('./Controllers/Controllers');
app.get('/users', contt.getUsers)

