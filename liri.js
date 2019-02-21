require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var axios = require("axios");

var fs = require("fs");

var input1 = process.argv[2];
var input2 = process.argv[3];

function menu(){
    switch(input1){
        case 'concert-this':
            bands();
            break;

        case 'spotify-this-song':
            SpotifySong();
            break;
        
        case 'movie-this':
            movie();
            break;
        
        case 'do-what-it-says':
            doWhat();
            break;

        default:
            console.log("type input: node liri.js: " + "\nconcert-this, " + "\nspotify-this-song, " + "\nmovie-this, " + "\ndo-what-it-says")
    }
}

function bands(){

    var artist = "adele";

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function(response){
        console.log("Artist name and upcoming venue: ", artist + ", ", response.data[0].venue);
        });
    }

bands();
// menu();