
const request = require("request");
const express = require('express')
const key = require("../src/config/tmdb")
const Movie = require('./movie')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const app = express()
const router = express.Router()

 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const cors = require('cors') 
app.use(cors())


router.get('/', (req, res) => res.json({message: "API Initilized"}))

app.use('/api', router)

router.route('/initial')
  .get( (req, res) => {
    var options = { method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      qs: 
      { api_key:  key.tmdb,
        language: 'en-US',
         page: '1' },
      headers: { 'Cache-Control': 'no-cache' } };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
      res.send(body);
  });
});
 

// app.get('/trailer', (req, res) => {
//  -----------------------------------------------
// //   var options = { method: 'GET',
// //   url: {`https://api.themoviedb.org/3/movie/${}/videos?api_key=ffd4156f4041ad96adb54442ab66f2d2&language=en-US`},
// //   qs: 
// //    { api_key:  key.tmdb,
// //      language: 'en-US',
// //      page: '1' },
// //   headers: 
// //    { 'Cache-Control': 'no-cache' } };

// // request(options, function (error, response, body) {
// //   if (error) throw new Error(error);

// //   res.send(body);
// // });
// --------------------------------------------
// });
// app.post('/movies', (req, res) => {
//   console.log(req.body.target)
//   Movie.find({ movieTitle: req.body.target }).then(inst => {
   
  
//   // , (function(err, movie) {
//   // if (err)
//   // res.send(err);
//   // console.log(movie)
//   res.json(inst)
//  });
// })

router.route('/movie')
  .post((req, res) => {
  let movieEntry = new Movie();
    req.body.movie.forEach(entry => {
      movieEntry.movieId = entry.id
      movieEntry.movieTitle = entry.title
      movieEntry.moviePoster = entry.poster_path
      movieEntry.voteAverage = entry.vote_average
      movieEntry.video = entry.video
    })
    movieEntry.save(function(err) {
      if (err) console.log(err);
      console.log("movieEntry successfully added!");
  });
})

// --------------
app.listen(3001, () => console.log('Example app listening on port 3001!'))


mongoose
  .connect('mongodb://localhost/movies', {
 
  }) 
  .then(() => {

    console.log("Connected to MongoDB")
  })
  .catch(err => {
    console.log(err) 
  });





















