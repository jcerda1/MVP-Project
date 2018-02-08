var key = require("../src/config/tmdb")
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
   { api_key:  key.tmdb,
     language: 'en-US',
     page: '1' },
  headers: 
   { 'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  res.send(body);
});

});

app.get('/trailer', (req, res) => {
  console.log(req.body)
//   var options = { method: 'GET',
//   url: {`https://api.themoviedb.org/3/movie/${}/videos?api_key=ffd4156f4041ad96adb54442ab66f2d2&language=en-US`},
//   qs: 
//    { api_key:  key.tmdb,
//      language: 'en-US',
//      page: '1' },
//   headers: 
//    { 'Cache-Control': 'no-cache' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   res.send(body);
// });

});


app.listen(3001, () => console.log('Example app listening on port 3001!'))