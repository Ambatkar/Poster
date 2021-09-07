//Importing Library
const http = require("https");
const express = require("express");
const port = 8080;
const session = require("express-session");
// adding Passport 
const passport = require("passport");
const passportlocal = require("./config/passport-local");


// Importing Mongoose
const posterdb  = require('./config/mongoose');

// creating a Express Object 
const app = express();


//Making Request Useable
app.use(express.urlencoded()); 

// Adding Asset of Node
app.use(express.static('assets'));


// Setting up Ejs
app.set('view engine', 'ejs');
app.set('views', './view');
app.set(session({
    name:'imPoster',
    secret: 'Hello',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (60*1000*1000)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//Setting Routes 
app.use('/',require('./router'));
app.use(express.static('static')); 

app.listen(port, function(err){
    if(err){console.log('error occured starting server: ', err);}
    console.log('Server Started at port :', port);
});