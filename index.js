//Importing Library
const http = require("https");
const express = require("express");
const port = 8000;

// creating a Express Object 
const app = express();


//Making Request Useable
app.use(express.urlencoded()); 

//Setting Routes 
app.use('/',require('./router'));
app.use(express.static('static')); 

// Setting up Ejs
app.set('view engine', 'ejs');
app.set('views', './view');


app.listen(port, function(err){
    if(err){console.log('error occured starting server: ', err);}
    console.log('Server Started at port :', port);
});