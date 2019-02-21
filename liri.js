require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var axios = require("axios");

var fs = require("fs");

var input1 = process.argv[2];
var input2 = process.argv[3];

