'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var movieSchema = new Schema({
 movieId: Number,
 movieTitle: String,
 moviePoster: String,
 voteAverage: Number,
 video: String
});

module.exports = mongoose.model('Movie', movieSchema);
