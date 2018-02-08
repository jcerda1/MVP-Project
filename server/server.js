
const express = require('express')
const app = express()

// var cors = require('cors')
// app.use(cors())

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search', (req, res) => {
  console.log(req.body)
  res.send('hello') 
});


app.listen(3001, () => console.log('Example app listening on port 3001!'))