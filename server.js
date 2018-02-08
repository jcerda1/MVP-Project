var key = require("./movie-app/src/config/tmdb")

const express = require('express')
const app = express()

var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search', (req, res) => {
  app.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key.tmdb_api_key}&language=en-US&page=1`, function(err,results) {
    if (err) console.log(err);
      res.send(results)
  });
   
  // res.send('hello') 
});


app.listen(3001, () => console.log('Example app listening on port 3001!'))