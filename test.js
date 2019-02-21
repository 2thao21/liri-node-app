// Spotify

require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'artist', query: 'One Republic', limit: 5 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


// OMDB
var axios = require("axios");

var movie = "Interstellar";

axios.get("httop://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
.then(function(response){
    console.log("The movie: " + movie + ", " + " rating is: " + response.data.imdbRating);
})






// Bandsintown
var axios = require("axios");

var artist = "Imagine Dragons";

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
.then(function(response){
    console.log("Artist name and upcoming venue: ", artist + ", ", response.data[0].venue);
});







// fs Node package
var fs = require("fs");

fs.readFile("./random.txt","utf-8", function(error, data){
    if(error){
        return console.log(error);
    }
    console.log("here is: ", data.split(','))
});
