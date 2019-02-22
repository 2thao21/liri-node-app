// Node packages
require("dotenv").config();

var axios = require("axios");

var fs = require("fs");

var moment = require("moment");

// Spotify keys
var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var spotify = require("node-spotify-api");


// CLI inputs
var input1 = process.argv[2];
var input2 = process.argv.slice(3).join(" ");


function menu(){
    if (input1 === "concert-this"){
        bands();
    }
    else if (input1 === "spotify-this-song"){
        spotifySong();
    }
    else if (input1 === "movie-this"){
        movieSearch();
    }
    else if (input1 === "do-what-it-says"){
        doWhatItSays();
    }
    else {
        console.log("Please enter in one of these commands: " + "\n node liri.js concert-this", "\n node liri.js spotify-this-song", "\n node liri.js movie-this", "\n node liri.js do-what-it-says");
    }
}

// creating liri.js concert-this
function bands(){

var divider = "\n-----------------------------------------------------\n";

    if (input2 === ""){
        console.log("No artist entered. Please enter an Artist!")
    }
    else {
    axios.get("https://rest.bandsintown.com/artists/" + input2 + "/events?app_id=codingbootcamp")
    .then(function(response){
        console.log("\n");
        console.log("Artist name : " + input2);
        console.log("Venue Description: "+  response.data[0].venue.name);
        console.log("Venue Location: "+  response.data[0].venue.city + ", " + response.data[0].venue.country);
        console.log("Date of Event: " + moment(response.data[0].datetime).format("LL"));
        });
    }   
};


// creating spotify-this-song
// function spotifySong(){
//     if(input2 === ""){
//         input2 = "The Sign";
//     }
//     else {
//         spotify.search({ 
//         type: 'artist, track',
//         query: input2 }, 
        
//         function(err, data) {
//         if (err) {
//           return console.log('Error occurred: ' + err);
//         }
       
//       console.log(data); 

//       console.log("Artists: ", );
//       console.log("Song: ", );
//       console.log("Preview: ", );
//       console.log("Album: ", );
    
//       });
//     } 
// };

// Kept getting Spotify is not a function/defined/constructor errors...have commented out spotify section to enable code to run.


// creating movie-this
function movieSearch(){
    if (!input2){
        input2 = "Mr.Nobody"
    }
    else {
        axios.get("https://www.omdbapi.com/?t=" + input2 + "&y=&plot=short&apikey=trilogy")
        .then(function(response){
            // console.log("The movie: " + input2 + ", " + " rating is: " + response.data.imdbRating);
            console.log("\n");
            console.log("Title: "+ response.data.Title);
			console.log("Year: " + response.data.Year);
            console.log("Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes URL: " + response.data.Ratings[1].Value);
			console.log("Country of Production: " + response.data.Country);
			console.log("Language: " + response.data.Language);
			console.log("Plot: " + response.data.Plot);
			console.log("Actors: " + response.data.Actors);
			
        })
    }
    
};


// creating do-what-it-says
function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(error,data){
        if (error){
            return console.log(error);
        }
        console.log(data.split(','))
        var thisData = data.split(',');

        // input2 = thisData;
        // spotifySong();
    })
    
};

menu();


// In return of Spotify not being called, do-what-it-says does not function at this current time.