//Importing Library
const http = require("https");
const express = require("express");
const port = 8000;

// creating a Express Object 
const app = express();

app.get('/',function(req,res){
    res.end("Gotcha");
});

app.listen(port, function(err){
    if(err){console.log('error occured starting server: ', err);}
    console.log('Server Started at port :', port);
});