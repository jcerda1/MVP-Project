var key = require("./movie-app/src/config/tmdb")
var request = require("request");

const express = require('express')
const app = express()

var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search', (req, res) => {
  var options = { method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing',
  qs: 
   { api_key: `${key.tmdb}`,
     language: 'en-US',
     page: '1' },
  headers: 
   { 'Postman-Token': '4a5abcd4-a69c-906d-676b-8ec2f4211b32',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

});


app.listen(3001, () => console.log('Example app listening on port 3001!'))