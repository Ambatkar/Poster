const express= require('express');

module.exports.homePage = function(req,res){
    res.render('home');
}