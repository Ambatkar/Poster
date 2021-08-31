const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userList = require('../model/userListdb');


passport.use(new LocalStrategy({
    usernameField: 'email'
},function(s_email,s_password,done){
    userList.findOne({
        email: email
    },function(err,user){
            if(err){
                console.log("Error in Passport -----------------> Passport ", err);
                return done(err);
            }
            if(!user || user.password  != password){
                console.log('Invalid UserName / Password');
                return done(null, false,{message : 'Incorrect Passwordsss'});
            }
            console.log('Hello',email);
            return done(null, user);
        });
    }
));



//serializing the  user to decide which key is to be kept is cookires

passport.serializeUser(function(user,done){
    done(null,user.id);
});


//deserializing the  user to decide which key is to be kept is cookires

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log(err);
            return done(err);
        }
        return done(null,user);
    });
});


// check is user authentication 
passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    //if the user not signed in 
    return res.redirect('/');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        // request.user have current signed in user to the locals for the views
        res.locals.user = req.user;        
    }
    next();
}


module.exports = passport;