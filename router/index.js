const express = require("express");
const router = express.Router();
const userController =  require('../controller/userController.js')
const passport = require("passport");
const passportlocal = require("../config/passport-local");

router.get('/',userController.homePage);
router.post('/login_action',userController.login_action);

router.get('/signup',passport.checkAuthentication,userController.signUp);
router.post('/signup/action',userController.signup_action);
//passport as a passport 
/*router.post('/createSession', passport.authenticate(
    'local',
    {failureRedirect:'/'}) , userController.createSession);
*/
router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect: '/'}
    ),userController.createSession);

module.exports = router;