const express= require('express');
const userList = require('../model/userListdb')
const passport = require("passport");


module.exports.homePage = function(req,res){
    res.render('home');
}



module.exports.signUp = function(req,res){
    res.render('signup');
};


module.exports.login_action = function(req,res){
    userList.findOne({
        email: req.body.s_email
    },function(err,userOne){
        if(err){
            console.log(`Error occurred : ${err}`);
        }
        if(userOne.password != req.body.s_password){
            console.log('Incorrect Password');
            res.redirect('back');
            return ;
        } 
        console.log("*****************************User Found \n", userOne);
        res.end("<h1>Profile Page</h1>");
    });
};


module.exports.signup_action = function(req,res){
    
    userList.create({
        name:req.body.s_name,
        email:req.body.s_email,
        password:req.body.s_password
    },function(err,newUser){
        if(err){
            console.log(`Error occurred : ${err}`);
        }
        console.log('********************** User Created \n',newUser)
    })
    res.redirect('/');
};


module.exports.createSession = function(req,res){
    console.log(req)
    return res.end('<h1>profile</h1>');

}