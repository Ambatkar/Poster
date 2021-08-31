const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userList = require('../model/userListdb');


passport.use(new LocalStrategy({
    usernameField: 'email'
},function(email,password,done){
    userList.findOne({
        email: email
    },function(err,userOne){
        if(err){
            console.log("Error in Passport -----------------> Passport ", err);
            return done(err);
        }
        

    });
}));